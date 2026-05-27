import { useMemo } from 'preact/hooks';
import { getDefaultSCorpStateAnnualFee } from '../../data/tax/scorp-defaults';
import { stateSeeds } from '../../data/states/seeds';
import {
  calculateReasonableCompensation,
  type ReasonableCompIndustry,
  type ReasonableCompRecommendationTier,
  type ReasonableCompRole,
} from '../../lib/tax';
import { formatCurrency, formatPercent, parseIncome } from './parse-income';
import type { USStateCode } from './types';
import {
  isValidDollarParam,
  isValidStateParam,
  useUrlSyncedState,
  type UrlSyncedField,
} from './use-url-sync';

type ReasonableCompFormState = {
  income: string;
  role: ReasonableCompRole;
  hours: string;
  state: USStateCode;
  industry: ReasonableCompIndustry;
  profitMargin: string;
  currentSalary: string;
  stateAnnualFee: string;
};

const DEFAULT_FORM_STATE: ReasonableCompFormState = {
  income: '',
  role: 'solo_consultant',
  hours: '40',
  state: 'CA',
  industry: 'consulting',
  profitMargin: '55',
  currentSalary: '',
  stateAnnualFee: String(getDefaultSCorpStateAnnualFee('CA')),
};

const VALID_ROLES = new Set<ReasonableCompRole>([
  'solo_consultant',
  'software_services',
  'creative_services',
  'agency_operator',
  'online_creator',
]);
const VALID_INDUSTRIES = new Set<ReasonableCompIndustry>([
  'consulting',
  'software',
  'creative',
  'marketing',
  'creator',
]);

const URL_SYNC_FIELDS: ReadonlyArray<UrlSyncedField<ReasonableCompFormState>> = [
  { field: 'income', param: 'income', isValid: isValidDollarParam },
  {
    field: 'role',
    param: 'role',
    isValid: (value) => VALID_ROLES.has(value as ReasonableCompRole),
    fromParam: (value) => value as ReasonableCompRole,
  },
  { field: 'hours', param: 'hours', isValid: isValidDollarParam },
  { field: 'state', param: 'state', isValid: isValidStateParam, fromParam: (value) => value as USStateCode },
  {
    field: 'industry',
    param: 'industry',
    isValid: (value) => VALID_INDUSTRIES.has(value as ReasonableCompIndustry),
    fromParam: (value) => value as ReasonableCompIndustry,
  },
  { field: 'profitMargin', param: 'margin', isValid: isValidDollarParam },
  { field: 'currentSalary', param: 'salary', isValid: isValidDollarParam },
  { field: 'stateAnnualFee', param: 'stateFee', isValid: isValidDollarParam },
];

const roleLabels: Record<ReasonableCompRole, string> = {
  solo_consultant: 'Solo consultant / freelancer',
  software_services: 'Software or technical services',
  creative_services: 'Creative services',
  agency_operator: 'Agency operator',
  online_creator: 'Online creator',
};

const industryLabels: Record<ReasonableCompIndustry, string> = {
  consulting: 'Consulting',
  software: 'Software',
  creative: 'Creative',
  marketing: 'Marketing',
  creator: 'Creator business',
};

const parseDollarInput = (value: string) => Math.max(0, parseIncome(value));
const parsePercentInput = (value: string) => Math.max(0, parseIncome(value));

const getVerdictClasses = (tier: ReasonableCompRecommendationTier) => {
  if (tier === 'reasonable_starting_point') return 'border-accent-soft bg-surface-warm';
  if (tier === 'documentation_needed') return 'border-rule-strong bg-surface-subtle';

  return 'border-rule bg-surface';
};

export default function ReasonableCompensationCalculator() {
  const [formState, setFormState] = useUrlSyncedState(DEFAULT_FORM_STATE, URL_SYNC_FIELDS);

  const result = useMemo(() => {
    const income = parseIncome(formState.income);
    if (income <= 0) return null;

    return calculateReasonableCompensation({
      netBusinessIncome: income,
      role: formState.role,
      hoursPerWeek: parseDollarInput(formState.hours),
      state: formState.state,
      industry: formState.industry,
      profitMargin: parsePercentInput(formState.profitMargin),
      stateAnnualFee: parseDollarInput(formState.stateAnnualFee),
    });
  }, [formState]);

  const updateField = <K extends keyof ReasonableCompFormState>(
    field: K,
    value: ReasonableCompFormState[K],
  ) => {
    setFormState({ ...formState, [field]: value });
  };

  const updateState = (state: USStateCode) => {
    setFormState({
      ...formState,
      state,
      stateAnnualFee: String(getDefaultSCorpStateAnnualFee(state)),
    });
  };

  const currentSalary = parseDollarInput(formState.currentSalary);
  const isCurrentSalaryInRange =
    result && currentSalary > 0
      ? currentSalary >= result.salary.low && currentSalary <= result.salary.high
      : null;
  const cta =
    result?.recommendation.tier === 'too_low_to_help'
      ? {
          href: '/s-corp/election-calculator/',
          label: 'Run the full S-corp calculator',
        }
      : {
          href: `/s-corp/election-calculator/?income=${Math.round(result?.input.netBusinessIncome ?? 0)}&state=${formState.state}&salary=${Math.round(result?.salary.mid ?? 0)}&stateFee=${Math.round(result?.input.stateAnnualFee ?? 0)}`,
          label: 'Test this salary in the S-corp calculator',
        };

  return (
    <div
      data-calculator-root
      data-calculator-name="reasonable-compensation"
      className="grid items-start gap-6 lg:grid-cols-5"
    >
      <div className="lg:col-span-2">
        <div className="llc-card space-y-5">
          <div>
            <label htmlFor="reasonable-income" className="mb-1 block text-sm font-medium text-slate-700">
              Annual net business income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                id="reasonable-income"
                type="text"
                inputMode="numeric"
                placeholder="100,000"
                value={formState.income}
                onInput={(event) =>
                  updateField('income', (event.currentTarget as HTMLInputElement).value)
                }
                className="w-full rounded-md border border-slate-300 py-2 pl-7 pr-3 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">After expenses, before owner salary.</p>
          </div>

          <div>
            <label htmlFor="reasonable-role" className="mb-1 block text-sm font-medium text-slate-700">
              Owner role
            </label>
            <select
              id="reasonable-role"
              value={formState.role}
              onChange={(event) =>
                updateField(
                  'role',
                  (event.currentTarget as HTMLSelectElement).value as ReasonableCompRole,
                )
              }
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {Object.entries(roleLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="reasonable-hours" className="mb-1 block text-sm font-medium text-slate-700">
                Hours per week
              </label>
              <input
                id="reasonable-hours"
                type="number"
                min="1"
                max="80"
                value={formState.hours}
                onInput={(event) =>
                  updateField('hours', (event.currentTarget as HTMLInputElement).value)
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label htmlFor="reasonable-margin" className="mb-1 block text-sm font-medium text-slate-700">
                Profit margin
              </label>
              <div className="relative">
                <input
                  id="reasonable-margin"
                  type="number"
                  min="0"
                  max="100"
                  value={formState.profitMargin}
                  onInput={(event) =>
                    updateField('profitMargin', (event.currentTarget as HTMLInputElement).value)
                  }
                  className="w-full rounded-md border border-slate-300 py-2 pl-3 pr-10 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="reasonable-state" className="mb-1 block text-sm font-medium text-slate-700">
                State
              </label>
              <select
                id="reasonable-state"
                value={formState.state}
                onChange={(event) =>
                  updateState((event.currentTarget as HTMLSelectElement).value as USStateCode)
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {stateSeeds.map((seed) => (
                  <option key={seed.abbreviation} value={seed.abbreviation}>
                    {seed.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="reasonable-industry" className="mb-1 block text-sm font-medium text-slate-700">
                Industry
              </label>
              <select
                id="reasonable-industry"
                value={formState.industry}
                onChange={(event) =>
                  updateField(
                    'industry',
                    (event.currentTarget as HTMLSelectElement).value as ReasonableCompIndustry,
                  )
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {Object.entries(industryLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="reasonable-current-salary" className="mb-1 block text-sm font-medium text-slate-700">
              Salary you are testing
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                id="reasonable-current-salary"
                type="text"
                inputMode="numeric"
                placeholder="Optional"
                value={formState.currentSalary}
                onInput={(event) =>
                  updateField('currentSalary', (event.currentTarget as HTMLInputElement).value)
                }
                className="w-full rounded-md border border-slate-300 py-2 pl-7 pr-3 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Optional. Prefilled when you arrive from the S-corp calculator.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        {!result ? (
          <div className="llc-card py-12 text-center">
            <p className="text-slate-500">Enter income to estimate a reasonable salary range.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div
              data-calculator-result
              data-result-tier={result.recommendation.tier}
              className={`rounded-[1.5rem] border p-6 ${getVerdictClasses(result.recommendation.tier)}`}
            >
              <p className="llc-helper">Recommendation</p>
              <div className="mt-3 grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink-strong">
                    {result.recommendation.label}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-ink-soft">
                    {result.recommendation.summary}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Suggested salary</p>
                  <p className="mt-1 text-3xl font-bold text-slate-900 tabular-nums">
                    {formatCurrency(result.salary.mid)}
                  </p>
                </div>
              </div>

              <a
                href={cta.href}
                data-calculator-result-cta="reasonable-compensation"
                data-page-type="calc"
                data-position="result"
                data-result-tier={result.recommendation.tier}
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-ink-strong transition hover:bg-accent/85 sm:w-auto"
              >
                {cta.label}
              </a>
            </div>

            <div className="llc-card">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Salary range</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Low</p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums text-ink-strong">
                    {formatCurrency(result.salary.low)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Middle</p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums text-ink-strong">
                    {formatCurrency(result.salary.mid)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">High</p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums text-ink-strong">
                    {formatCurrency(result.salary.high)}
                  </p>
                </div>
              </div>
              {isCurrentSalaryInRange !== null && (
                <p className="mt-4 text-sm leading-6 text-ink-soft">
                  Your tested salary of {formatCurrency(currentSalary)} is{' '}
                  <strong>{isCurrentSalaryInRange ? 'inside' : 'outside'}</strong> this screening
                  range.
                </p>
              )}
            </div>

            <div className="llc-card">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">S-corp impact</h3>
              <dl className="space-y-3">
                <div className="grid gap-2 border-b border-slate-200 pb-3 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">Salary ratio</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">Suggested salary divided by net income</dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatPercent(result.salary.ratio, 0)}
                  </dd>
                </div>
                <div className="grid gap-2 border-b border-slate-200 pb-3 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">Distribution estimate</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">Income left after suggested salary</dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatCurrency(result.distribution)}
                  </dd>
                </div>
                <div className="grid gap-2 border-b border-slate-200 pb-3 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">Net savings at this salary</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">After payroll, accounting, and state costs</dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatCurrency(result.savingsAtSuggestedSalary.netSavings)}
                  </dd>
                </div>
                <div className="grid gap-2 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">Impact vs 50% default</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">How much the salary check changes savings</dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatCurrency(result.savingsImpact)}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="llc-card-subtle">
                <p className="llc-helper">Hours</p>
                <p className="mt-2 text-2xl font-semibold text-ink-strong tabular-nums">
                  {Math.round(result.assumptions.fullTimeEquivalent * 100)}% FTE
                </p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">
                  The model scales market-pay pressure by hours worked, then caps salary to income.
                </p>
              </div>
              <div className="llc-card-subtle">
                <p className="llc-helper">Assumption type</p>
                <p className="mt-2 text-2xl font-semibold text-ink-strong">Screening model</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">
                  This is a conservative first pass, not a wage survey or a CPA opinion.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

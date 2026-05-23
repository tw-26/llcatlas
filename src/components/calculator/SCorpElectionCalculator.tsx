import { useEffect, useMemo, useState } from 'preact/hooks';
import { SCORP_DEFAULTS, getDefaultSCorpStateAnnualFee } from '../../data/tax/scorp-defaults';
import { stateSeeds } from '../../data/states/seeds';
import { calculateSCorpSavings } from '../../lib/tax';
import { formatCurrency, formatPercent, parseIncome } from './parse-income';
import type { USStateCode } from './types';

type SCorpFormState = {
  income: string;
  state: USStateCode;
  salaryRatio: string;
  payrollCost: string;
  accountingCost: string;
  stateAnnualFee: string;
};

const DEFAULT_FORM_STATE: SCorpFormState = {
  income: '',
  state: 'CA',
  salaryRatio: String(SCORP_DEFAULTS.reasonableSalaryRatio * 100),
  payrollCost: String(SCORP_DEFAULTS.annualPayrollCost),
  accountingCost: String(SCORP_DEFAULTS.annualAccountingCost),
  stateAnnualFee: String(getDefaultSCorpStateAnnualFee('CA')),
};

const VALID_STATES = new Set(stateSeeds.map((state) => state.abbreviation));

const readNumberParam = (params: URLSearchParams, key: string, fallback: string) => {
  const value = params.get(key);
  if (value === null || !/^\d+(\.\d+)?$/.test(value)) return fallback;

  return value;
};

const readFromURL = (): SCorpFormState => {
  if (typeof window === 'undefined') return DEFAULT_FORM_STATE;

  const params = new URLSearchParams(window.location.search);
  const stateParam = params.get('state');
  const state = VALID_STATES.has(stateParam as USStateCode)
    ? (stateParam as USStateCode)
    : DEFAULT_FORM_STATE.state;

  return {
    income: readNumberParam(params, 'income', DEFAULT_FORM_STATE.income),
    state,
    salaryRatio: readNumberParam(params, 'salary', DEFAULT_FORM_STATE.salaryRatio),
    payrollCost: readNumberParam(params, 'payroll', DEFAULT_FORM_STATE.payrollCost),
    accountingCost: readNumberParam(params, 'accounting', DEFAULT_FORM_STATE.accountingCost),
    stateAnnualFee: readNumberParam(
      params,
      'stateFee',
      String(getDefaultSCorpStateAnnualFee(state)),
    ),
  };
};

const writeToURL = (state: SCorpFormState) => {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams();
  const entries: Array<[keyof SCorpFormState, string, string]> = [
    ['income', 'income', DEFAULT_FORM_STATE.income],
    ['state', 'state', DEFAULT_FORM_STATE.state],
    ['salaryRatio', 'salary', DEFAULT_FORM_STATE.salaryRatio],
    ['payrollCost', 'payroll', DEFAULT_FORM_STATE.payrollCost],
    ['accountingCost', 'accounting', DEFAULT_FORM_STATE.accountingCost],
    ['stateAnnualFee', 'stateFee', String(getDefaultSCorpStateAnnualFee(state.state))],
  ];

  for (const [field, param, defaultValue] of entries) {
    if (state[field] && state[field] !== defaultValue) {
      params.set(param, state[field]);
    }
  }

  const queryString = params.toString();
  const nextUrl = queryString
    ? `${window.location.pathname}?${queryString}${window.location.hash}`
    : `${window.location.pathname}${window.location.hash}`;

  window.history.replaceState({}, '', nextUrl);
};

const parseDollarInput = (value: string) => Math.max(0, parseIncome(value));

const getVerdictClasses = (tier: string) => {
  if (tier === 'worth_considering') return 'border-accent-soft bg-surface-warm';
  if (tier === 'borderline') return 'border-rule-strong bg-surface-subtle';

  return 'border-rule bg-surface';
};

export default function SCorpElectionCalculator() {
  const [formState, setFormState] = useState<SCorpFormState>(DEFAULT_FORM_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFormState(readFromURL());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeToURL(formState);
  }, [formState, hydrated]);

  const result = useMemo(() => {
    const income = parseIncome(formState.income);
    if (income <= 0) return null;

    return calculateSCorpSavings({
      netSelfEmploymentIncome: income,
      filingStatus: 'single',
      state: formState.state,
      reasonableSalaryRatio: parseDollarInput(formState.salaryRatio) / 100,
      annualPayrollCost: parseDollarInput(formState.payrollCost),
      annualAccountingCost: parseDollarInput(formState.accountingCost),
      stateAnnualFee: parseDollarInput(formState.stateAnnualFee),
    });
  }, [formState]);

  const updateField = <K extends keyof SCorpFormState>(field: K, value: SCorpFormState[K]) => {
    setFormState({ ...formState, [field]: value });
  };

  const updateState = (state: USStateCode) => {
    setFormState({
      ...formState,
      state,
      stateAnnualFee: String(getDefaultSCorpStateAnnualFee(state)),
    });
  };

  const selectedStateName =
    stateSeeds.find((state) => state.abbreviation === formState.state)?.name ?? formState.state;
  const primaryCta =
    result?.recommendation.tier === 'worth_considering'
      ? {
          href: '/best-llc-services/',
          label: 'Compare LLC services before electing',
        }
      : {
          href: '/self-employment-tax/calculator/',
          label: 'Check your regular SE tax first',
        };

  return (
    <div data-calculator-root className="grid items-start gap-6 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="llc-card space-y-5">
          <div>
            <label htmlFor="scorp-income" className="mb-1 block text-sm font-medium text-slate-700">
              Annual net business income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                id="scorp-income"
                type="text"
                inputMode="numeric"
                placeholder="60,000"
                value={formState.income}
                onInput={(event) =>
                  updateField('income', (event.currentTarget as HTMLInputElement).value)
                }
                className="w-full rounded-md border border-slate-300 py-2 pl-7 pr-3 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">After business expenses, before owner pay.</p>
          </div>

          <div>
            <label htmlFor="scorp-state" className="mb-1 block text-sm font-medium text-slate-700">
              State
            </label>
            <select
              id="scorp-state"
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
            <label htmlFor="scorp-salary" className="mb-1 block text-sm font-medium text-slate-700">
              Reasonable salary assumption
            </label>
            <div className="relative">
              <input
                id="scorp-salary"
                type="number"
                min="0"
                max="100"
                step="5"
                value={formState.salaryRatio}
                onInput={(event) =>
                  updateField('salaryRatio', (event.currentTarget as HTMLInputElement).value)
                }
                className="w-full rounded-md border border-slate-300 py-2 pl-3 pr-10 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Default: 50% of net income. Your CPA may require more.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="scorp-payroll"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Payroll cost
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  id="scorp-payroll"
                  type="text"
                  inputMode="numeric"
                  value={formState.payrollCost}
                  onInput={(event) =>
                    updateField('payrollCost', (event.currentTarget as HTMLInputElement).value)
                  }
                  className="w-full rounded-md border border-slate-300 py-2 pl-7 pr-3 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="scorp-accounting"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Accounting cost
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  id="scorp-accounting"
                  type="text"
                  inputMode="numeric"
                  value={formState.accountingCost}
                  onInput={(event) =>
                    updateField('accountingCost', (event.currentTarget as HTMLInputElement).value)
                  }
                  className="w-full rounded-md border border-slate-300 py-2 pl-7 pr-3 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="scorp-state-fee"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              State annual fee estimate
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                id="scorp-state-fee"
                type="text"
                inputMode="numeric"
                value={formState.stateAnnualFee}
                onInput={(event) =>
                  updateField('stateAnnualFee', (event.currentTarget as HTMLInputElement).value)
                }
                className="w-full rounded-md border border-slate-300 py-2 pl-7 pr-3 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Uses available {selectedStateName} data when structured, otherwise $0.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        {!result ? (
          <div className="llc-card py-12 text-center">
            <p className="text-slate-500">Enter income to see whether S-corp math clears the cost.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className={`rounded-[1.5rem] border p-6 ${getVerdictClasses(result.recommendation.tier)}`}>
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
                  <p className="text-xs uppercase tracking-wide text-slate-500">Net savings</p>
                  <p className="mt-1 text-3xl font-bold text-slate-900 tabular-nums">
                    {formatCurrency(result.netSavings)}
                  </p>
                </div>
              </div>

              <a
                href={primaryCta.href}
                data-calculator-result-cta="s-corp-election"
                data-page-type="calc"
                data-position="result"
                data-result-tier={result.recommendation.tier}
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-ink-strong transition hover:bg-accent/85 sm:w-auto"
              >
                {primaryCta.label}
              </a>
            </div>

            <div className="llc-card">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Savings breakdown</h3>
              <dl className="space-y-3">
                <div className="grid gap-2 border-b border-slate-200 pb-3 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">Current SE tax</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">Sole proprietor or default LLC</dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatCurrency(result.soleProprietorSelfEmploymentTax.total)}
                  </dd>
                </div>

                <div className="grid gap-2 border-b border-slate-200 pb-3 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">S-corp payroll tax</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">
                      On {formatCurrency(result.sCorpPayrollTax.reasonableSalary)} salary (
                      {formatPercent(result.input.reasonableSalaryRatio, 0)})
                    </dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatCurrency(result.sCorpPayrollTax.total)}
                  </dd>
                </div>

                <div className="grid gap-2 border-b border-slate-200 pb-3 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">Gross tax savings</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">
                      Before payroll, accounting, and state costs
                    </dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatCurrency(result.grossTaxSavings)}
                  </dd>
                </div>

                <div className="grid gap-2 sm:flex sm:items-baseline sm:justify-between">
                  <div>
                    <dt className="font-medium text-slate-900">Added admin cost</dt>
                    <dd className="mt-0.5 text-xs text-slate-500">
                      Payroll {formatCurrency(result.adminCosts.payroll)} + accounting{' '}
                      {formatCurrency(result.adminCosts.accounting)} + state{' '}
                      {formatCurrency(result.adminCosts.stateAnnualFee)}
                    </dd>
                  </div>
                  <dd className="font-semibold tabular-nums sm:text-right">
                    {formatCurrency(result.adminCosts.total)}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="llc-card-subtle">
                <p className="llc-helper">Distribution</p>
                <p className="mt-2 text-2xl font-semibold text-ink-strong tabular-nums">
                  {formatCurrency(result.sCorpPayrollTax.distribution)}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">
                  Income left after the salary assumption. This is the part that avoids SE tax.
                </p>
              </div>
              <div className="llc-card-subtle">
                <p className="llc-helper">Tax year</p>
                <p className="mt-2 text-2xl font-semibold text-ink-strong">2026 federal</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">
                  Uses 2026 federal payroll tax limits and currently structured state cost data.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

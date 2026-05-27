import { useMemo } from 'preact/hooks';
import { stateSeeds } from '../../data/states/seeds';
import { calculateTax } from '../../lib/tax';
import { formatCurrency, formatPercent, parseIncome } from './parse-income';
import { DEFAULT_FORM_STATE } from './types';
import type {
  CalculatorFormState,
  FilingStatus,
  TaxCalculatorProps,
  USStateCode,
} from './types';
import { useUrlSyncedFormState } from './use-url-sync';

export default function TaxCalculator({
  defaultState,
  defaultFilingStatus,
  defaultIncome,
  lockState = false,
}: TaxCalculatorProps) {
  // Build initial state from props (Astro page provides these).
  const initialDefaults: CalculatorFormState = {
    income: defaultIncome ? String(defaultIncome) : DEFAULT_FORM_STATE.income,
    state: defaultState ?? DEFAULT_FORM_STATE.state,
    filingStatus: defaultFilingStatus ?? DEFAULT_FORM_STATE.filingStatus,
  };

  const [formState, setFormState] = useUrlSyncedFormState(initialDefaults);

  // Compute tax result whenever form state changes.
  const result = useMemo(() => {
    const income = parseIncome(formState.income);
    if (income <= 0) return null;

    return calculateTax({
      netSelfEmploymentIncome: income,
      filingStatus: formState.filingStatus,
      state: formState.state,
    });
  }, [formState.income, formState.filingStatus, formState.state]);

  // Helper to update one field at a time.
  const updateField = <K extends keyof CalculatorFormState>(
    field: K,
    value: CalculatorFormState[K],
  ) => {
    setFormState({ ...formState, [field]: value });
  };

  return (
    <div
      data-calculator-root
      data-calculator-name="self-employment-tax"
      className="grid gap-6 lg:grid-cols-5"
    >
      <div className="lg:col-span-2">
        <div className="llc-card space-y-4">
          <div>
            <label htmlFor="income" className="mb-1 block text-sm font-medium text-slate-700">
              Annual self-employment income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                $
              </span>
              <input
                id="income"
                type="text"
                inputMode="numeric"
                placeholder="80,000"
                value={formState.income}
                onInput={(event) =>
                  updateField('income', (event.currentTarget as HTMLInputElement).value)
                }
                className="w-full rounded-md border border-slate-300 py-2 pl-7 pr-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">Net income after business expenses</p>
          </div>

          <div>
            <label htmlFor="state" className="mb-1 block text-sm font-medium text-slate-700">
              State
            </label>
            <select
              id="state"
              value={formState.state}
              onChange={(event) =>
                updateField(
                  'state',
                  (event.currentTarget as HTMLSelectElement).value as USStateCode,
                )
              }
              disabled={lockState}
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:text-slate-500"
            >
              {stateSeeds.map((seed) => (
                <option key={seed.abbreviation} value={seed.abbreviation}>
                  {seed.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="filing-status"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Filing status
            </label>
            <select
              id="filing-status"
              value={formState.filingStatus}
              onChange={(event) =>
                updateField(
                  'filingStatus',
                  (event.currentTarget as HTMLSelectElement).value as FilingStatus,
                )
              }
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="single">Single</option>
              <option value="married_joint">Married filing jointly</option>
              <option value="married_separate">Married filing separately</option>
              <option value="head_of_household">Head of household</option>
            </select>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        {!result ? (
          <div className="llc-card py-12 text-center">
            <p className="text-slate-500">Enter your income to see your tax breakdown</p>
          </div>
        ) : (
          <div data-calculator-result data-result-tier="estimate-ready">
            <div className="space-y-6">
              <div className="llc-card-highlight">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Total tax</p>
                    <p className="mt-1 text-3xl font-bold text-slate-900 tabular-nums">
                      {formatCurrency(result.totalTax)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Effective rate
                    </p>
                    <p className="mt-1 text-3xl font-bold text-slate-900 tabular-nums">
                      {formatPercent(result.effectiveRate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Set aside</p>
                    <p className="mt-1 text-3xl font-bold text-slate-900 tabular-nums">
                      {result.setAsidePercentage}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="llc-card">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">Tax breakdown</h3>
                <dl className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
                    <div>
                      <dt className="font-medium text-slate-900">Self-employment tax</dt>
                      <dd className="mt-0.5 text-xs text-slate-500">
                        Social Security (
                        {formatCurrency(result.selfEmploymentTax.socialSecurityTax)}) + Medicare
                        ({formatCurrency(result.selfEmploymentTax.medicareTax)})
                      </dd>
                    </div>
                    <dd className="font-semibold tabular-nums">
                      {formatCurrency(result.selfEmploymentTax.total)}
                    </dd>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
                    <div>
                      <dt className="font-medium text-slate-900">Federal income tax</dt>
                      <dd className="mt-0.5 text-xs text-slate-500">
                        After {formatCurrency(result.federal.standardDeductionApplied)} standard
                        deduction
                      </dd>
                    </div>
                    <dd className="font-semibold tabular-nums">
                      {formatCurrency(result.federal.total)}
                    </dd>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div>
                      <dt className="font-medium text-slate-900">State income tax</dt>
                      <dd className="mt-0.5 text-xs text-slate-500">
                        {result.state.hasIncomeTax
                          ? `${
                              stateSeeds.find((seed) => seed.abbreviation === formState.state)
                                ?.name
                            } state tax`
                          : `${
                              stateSeeds.find((seed) => seed.abbreviation === formState.state)
                                ?.name
                            } has no state income tax`}
                      </dd>
                    </div>
                    <dd className="font-semibold tabular-nums">
                      {formatCurrency(result.state.total)}
                    </dd>
                  </div>

                  {result.state.surtaxes.map((surtax) => (
                    <div
                      key={surtax.name}
                      className="flex items-baseline justify-between pl-4 text-sm text-slate-600"
                    >
                      <dt>+ {surtax.name}</dt>
                      <dd className="tabular-nums">{formatCurrency(surtax.amount)}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="llc-card">
                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  Quarterly estimated payments
                </h3>
                <p className="mb-4 text-xs text-slate-500">Pay these to avoid IRS penalties</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {(['q1', 'q2', 'q3', 'q4'] as const).map((quarter, index) => {
                    const payment = result.quarterlyPayments[quarter];
                    const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

                    return (
                      <div key={quarter} className="rounded-md border border-slate-200 p-3">
                        <p className="text-xs text-slate-500">
                          {labels[index]} • Due {payment.dueDate}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-slate-900 tabular-nums">
                          {formatCurrency(payment.amount)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              Results are estimates based on 2026 federal and 2025 state tax rules. State tax
              calculations use a simplified model - actual state tax may differ due to
              state-specific deductions, credits, or local taxes not modeled here. This is not tax
              advice. Consult a CPA for your specific situation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

import { states } from '../states';
import type { USStateCode } from '../states/types';

export const SCORP_DEFAULTS = {
  reasonableSalaryRatio: 0.5,
  annualPayrollCost: 1200,
  annualAccountingCost: 1300,
  fallbackStateAnnualFee: 0,
  lowIncomeGuardrail: 45000,
  worthConsideringIncome: 60000,
  worthConsideringNetSavings: 1000,
} as const;

const annualFeeByState = new Map<USStateCode, number>(
  states
    .filter((state) => typeof state.annualReportFee === 'number')
    .map((state) => [state.abbreviation, state.annualReportFee ?? 0]),
);

export const getDefaultSCorpStateAnnualFee = (state: USStateCode): number =>
  annualFeeByState.get(state) ?? SCORP_DEFAULTS.fallbackStateAnnualFee;

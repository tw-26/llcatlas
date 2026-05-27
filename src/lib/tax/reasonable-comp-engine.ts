import { SCORP_DEFAULTS, getDefaultSCorpStateAnnualFee } from '../../data/tax/scorp-defaults';
import { calculateSCorpSavings } from './scorp-engine';
import type { SCorpCalculatorResult } from './scorp-types';
import type { USStateCode } from './types';

export type ReasonableCompRole =
  | 'solo_consultant'
  | 'software_services'
  | 'creative_services'
  | 'agency_operator'
  | 'online_creator';

export type ReasonableCompIndustry =
  | 'consulting'
  | 'software'
  | 'creative'
  | 'marketing'
  | 'creator';

export type ReasonableCompRecommendationTier =
  | 'too_low_to_help'
  | 'documentation_needed'
  | 'reasonable_starting_point';

export type ReasonableCompInput = {
  netBusinessIncome: number;
  role: ReasonableCompRole;
  hoursPerWeek: number;
  state: USStateCode;
  industry: ReasonableCompIndustry;
  profitMargin: number;
  annualPayrollCost?: number;
  annualAccountingCost?: number;
  stateAnnualFee?: number;
};

export type ReasonableCompRecommendation = {
  tier: ReasonableCompRecommendationTier;
  label: string;
  summary: string;
};

export type ReasonableCompResult = {
  input: Required<ReasonableCompInput>;
  salary: {
    low: number;
    mid: number;
    high: number;
    ratio: number;
  };
  distribution: number;
  savingsAtSuggestedSalary: SCorpCalculatorResult;
  savingsAtDefaultSalary: SCorpCalculatorResult;
  savingsImpact: number;
  recommendation: ReasonableCompRecommendation;
  assumptions: {
    roleBaseRatio: number;
    fullTimeEquivalent: number;
    stateAdjustment: number;
    industryAdjustment: number;
    marginAdjustment: number;
  };
};

const ROLE_ASSUMPTIONS: Record<ReasonableCompRole, { ratio: number; fullTimeFloor: number }> = {
  solo_consultant: { ratio: 0.6, fullTimeFloor: 70000 },
  software_services: { ratio: 0.64, fullTimeFloor: 85000 },
  creative_services: { ratio: 0.54, fullTimeFloor: 56000 },
  agency_operator: { ratio: 0.56, fullTimeFloor: 76000 },
  online_creator: { ratio: 0.5, fullTimeFloor: 50000 },
};

const INDUSTRY_ADJUSTMENTS: Record<ReasonableCompIndustry, number> = {
  consulting: 0.02,
  software: 0.04,
  creative: -0.02,
  marketing: 0,
  creator: -0.04,
};

const HIGH_COST_STATES: ReadonlySet<USStateCode> = new Set(['CA', 'NY', 'NJ', 'MA', 'WA', 'CO']);
const MODERATE_COST_STATES: ReadonlySet<USStateCode> = new Set(['MD', 'VA', 'IL', 'PA', 'NC', 'AZ']);

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const normalizeDollarInput = (value: number | undefined, fallback: number): number =>
  Number.isFinite(value) ? Math.max(0, value ?? fallback) : fallback;

const getStateAdjustment = (state: USStateCode) => {
  if (HIGH_COST_STATES.has(state)) return 0.04;
  if (MODERATE_COST_STATES.has(state)) return 0.02;

  return 0;
};

const getMarginAdjustment = (profitMargin: number) => {
  if (profitMargin < 25) return 0.04;
  if (profitMargin > 70) return -0.03;

  return 0;
};

const buildRecommendation = (
  income: number,
  salary: number,
  distribution: number,
  savings: SCorpCalculatorResult,
): ReasonableCompRecommendation => {
  if (
    income < SCORP_DEFAULTS.worthConsideringIncome ||
    distribution < 10000 ||
    savings.netSavings <= 0
  ) {
    return {
      tier: 'too_low_to_help',
      label: 'S-corp savings probably do not survive the salary check',
      summary:
        'A defensible salary leaves too little distribution or too little net savings after payroll, accounting, and state costs.',
    };
  }

  if (salary / income < 0.45 || distribution > salary) {
    return {
      tier: 'documentation_needed',
      label: 'Possible, but document the salary carefully',
      summary:
        'The split leaves meaningful distribution, so the salary rationale matters. Keep notes on role, hours, market pay, and profit level before filing.',
    };
  }

  return {
    tier: 'reasonable_starting_point',
    label: 'Reasonable starting range',
    summary:
      'The salary range is conservative enough for screening and still leaves room to test whether S-corp treatment clears the admin-cost hurdle.',
  };
};

export function calculateReasonableCompensation(
  input: ReasonableCompInput,
): ReasonableCompResult {
  const income = Math.max(0, input.netBusinessIncome);
  const role = ROLE_ASSUMPTIONS[input.role];
  const hoursPerWeek = clamp(input.hoursPerWeek, 1, 80);
  const fullTimeEquivalent = clamp(hoursPerWeek / 40, 0.25, 1.25);
  const profitMargin = clamp(input.profitMargin, 0, 100);
  const stateAdjustment = getStateAdjustment(input.state);
  const industryAdjustment = INDUSTRY_ADJUSTMENTS[input.industry];
  const marginAdjustment = getMarginAdjustment(profitMargin);
  const adjustedRatio = clamp(
    role.ratio + stateAdjustment + industryAdjustment + marginAdjustment,
    0.35,
    0.85,
  );
  const marketFloor = role.fullTimeFloor * fullTimeEquivalent * (1 + stateAdjustment);
  const salaryMid = clamp(Math.max(income * adjustedRatio, marketFloor), 0, income * 0.95);
  const salaryLow = clamp(salaryMid * 0.85, 0, income);
  const salaryHigh = clamp(salaryMid * 1.15, 0, income);
  const stateAnnualFee = normalizeDollarInput(
    input.stateAnnualFee,
    getDefaultSCorpStateAnnualFee(input.state),
  );
  const annualPayrollCost = normalizeDollarInput(
    input.annualPayrollCost,
    SCORP_DEFAULTS.annualPayrollCost,
  );
  const annualAccountingCost = normalizeDollarInput(
    input.annualAccountingCost,
    SCORP_DEFAULTS.annualAccountingCost,
  );
  const savingsAtSuggestedSalary = calculateSCorpSavings({
    netSelfEmploymentIncome: income,
    filingStatus: 'single',
    state: input.state,
    reasonableSalary: salaryMid,
    annualPayrollCost,
    annualAccountingCost,
    stateAnnualFee,
  });
  const savingsAtDefaultSalary = calculateSCorpSavings({
    netSelfEmploymentIncome: income,
    filingStatus: 'single',
    state: input.state,
    reasonableSalaryRatio: SCORP_DEFAULTS.reasonableSalaryRatio,
    annualPayrollCost,
    annualAccountingCost,
    stateAnnualFee,
  });
  const distribution = Math.max(0, income - salaryMid);

  return {
    input: {
      netBusinessIncome: income,
      role: input.role,
      hoursPerWeek,
      state: input.state,
      industry: input.industry,
      profitMargin,
      annualPayrollCost,
      annualAccountingCost,
      stateAnnualFee,
    },
    salary: {
      low: salaryLow,
      mid: salaryMid,
      high: salaryHigh,
      ratio: income > 0 ? salaryMid / income : 0,
    },
    distribution,
    savingsAtSuggestedSalary,
    savingsAtDefaultSalary,
    savingsImpact: savingsAtSuggestedSalary.netSavings - savingsAtDefaultSalary.netSavings,
    recommendation: buildRecommendation(income, salaryMid, distribution, savingsAtSuggestedSalary),
    assumptions: {
      roleBaseRatio: role.ratio,
      fullTimeEquivalent,
      stateAdjustment,
      industryAdjustment,
      marginAdjustment,
    },
  };
}

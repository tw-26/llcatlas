import type { FilingStatus, USStateCode } from './types';

export type SCorpRecommendationTier = 'bad_deal' | 'borderline' | 'worth_considering';

export type SCorpCalculatorInput = {
  /** Net self-employment income before owner salary, payroll, accounting, or state admin costs */
  netSelfEmploymentIncome: number;
  filingStatus: FilingStatus;
  state: USStateCode;
  /** Salary as a percentage of net income, e.g. 0.5 for 50% */
  reasonableSalaryRatio?: number;
  /** Optional absolute salary override. Clamped between $0 and net income. */
  reasonableSalary?: number;
  annualPayrollCost?: number;
  annualAccountingCost?: number;
  stateAnnualFee?: number;
};

export type SCorpPayrollTaxResult = {
  reasonableSalary: number;
  distribution: number;
  socialSecurityTax: number;
  medicareTax: number;
  additionalMedicareTax: number;
  total: number;
};

export type SCorpAdminCosts = {
  payroll: number;
  accounting: number;
  stateAnnualFee: number;
  total: number;
};

export type SCorpRecommendation = {
  tier: SCorpRecommendationTier;
  label: string;
  summary: string;
};

export type SCorpCalculatorResult = {
  input: Required<SCorpCalculatorInput>;
  soleProprietorSelfEmploymentTax: {
    socialSecurityTax: number;
    medicareTax: number;
    total: number;
  };
  sCorpPayrollTax: SCorpPayrollTaxResult;
  grossTaxSavings: number;
  adminCosts: SCorpAdminCosts;
  netSavings: number;
  recommendation: SCorpRecommendation;
};

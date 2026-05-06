import type { FilingStatus } from '../../data/tax/rules-2026';
import type { USStateCode } from '../../data/states/types';

export type { FilingStatus, USStateCode };

/**
 * Input to the tax calculator.
 * Represents one tax year's worth of self-employment income for one filer.
 */
export type TaxInput = {
  /** Net self-employment income (gross receipts minus business expenses) for the year, USD */
  netSelfEmploymentIncome: number;

  /** Filing status */
  filingStatus: FilingStatus;

  /** State of residence (or DC) */
  state: USStateCode;

  /** Optional W-2 wages for the same filer (affects Additional Medicare Tax threshold and SS wage base) */
  w2Wages?: number;

  /** Optional spouse's W-2 income (only relevant for married_joint filers - affects SS wage base separately for each spouse and AGI for state tax) */
  spouseW2Wages?: number;

  /** Tax year - defaults to 2026 federal / 2025 state if not specified */
  taxYear?: number;
};

/**
 * Self-employment tax breakdown.
 */
export type SelfEmploymentTaxResult = {
  /** Net earnings from self-employment (net SE income x 0.9235) */
  netEarningsFromSE: number;

  /** Social Security portion (12.4% on amounts up to wage base, factoring W-2 wages) */
  socialSecurityTax: number;

  /** Medicare portion (2.9% on all SE earnings) */
  medicareTax: number;

  /** Total SE tax (SS + Medicare) */
  total: number;

  /** Half of SE tax - deductible from gross income on federal return */
  deductible: number;
};

/**
 * Federal income tax breakdown.
 */
export type FederalIncomeTaxResult = {
  /** Adjusted gross income (net SE income minus half of SE tax minus other adjustments) */
  agi: number;

  /** Taxable income (AGI minus standard deduction) */
  taxableIncome: number;

  /** Tax computed from federal brackets */
  bracketTax: number;

  /** Additional Medicare Tax (0.9% on income over threshold) */
  additionalMedicareTax: number;

  /** Total federal income tax */
  total: number;

  /** Standard deduction applied */
  standardDeductionApplied: number;
};

/**
 * State income tax breakdown.
 */
export type StateIncomeTaxResult = {
  /** Whether this state taxes self-employment income */
  hasIncomeTax: boolean;

  /** Taxable income at state level (varies by state - many use federal AGI as starting point) */
  taxableIncome: number;

  /** Tax computed from state brackets / flat rate */
  bracketTax: number;

  /** Surtax amounts (e.g., California Mental Health Services Tax) */
  surtaxes: { name: string; amount: number }[];

  /** Total state income tax */
  total: number;

  /** Standard deduction applied at state level */
  standardDeductionApplied: number;
};

/**
 * Quarterly estimated tax payment breakdown.
 */
export type QuarterlyPaymentSchedule = {
  q1: { amount: number; dueDate: string };
  q2: { amount: number; dueDate: string };
  q3: { amount: number; dueDate: string };
  q4: { amount: number; dueDate: string };
};

/**
 * Full result returned by calculateTax().
 */
export type TaxResult = {
  input: TaxInput;

  selfEmploymentTax: SelfEmploymentTaxResult;
  federal: FederalIncomeTaxResult;
  state: StateIncomeTaxResult;

  /** Total tax owed (SE + federal + state) */
  totalTax: number;

  /** Effective tax rate (totalTax / netSelfEmploymentIncome) */
  effectiveRate: number;

  /** Recommended percentage of gross income to set aside for taxes */
  setAsidePercentage: number;

  /** Quarterly estimated payment schedule */
  quarterlyPayments: QuarterlyPaymentSchedule;
};

import { federalRules2026 } from '../../data/tax/rules-2026';
import { STATE_RULES_2025 } from '../../data/tax/state-rules-2025';
import type {
  TaxInput,
  TaxResult,
  SelfEmploymentTaxResult,
  FederalIncomeTaxResult,
  StateIncomeTaxResult,
  QuarterlyPaymentSchedule,
} from './types';

/**
 * Compute self-employment tax (Social Security + Medicare).
 *
 * Formula:
 *   netEarnings = netSEIncome x 0.9235
 *   ssTax       = min(netEarnings, max(0, ssWageBase - w2Wages)) x 0.124
 *   medicareTax = netEarnings x 0.029
 *   total       = ssTax + medicareTax
 *   deductible  = total x 0.5
 */
export function calculateSelfEmploymentTax(input: TaxInput): SelfEmploymentTaxResult {
  const seRules = federalRules2026.selfEmploymentTax;
  const netIncome = Math.max(0, input.netSelfEmploymentIncome);

  const netEarningsFromSE = netIncome * seRules.netEarningsMultiplier;

  const w2Wages = input.w2Wages ?? 0;
  const ssWageBaseRemaining = Math.max(0, seRules.socialSecurityWageBase - w2Wages);
  const ssTaxableEarnings = Math.min(netEarningsFromSE, ssWageBaseRemaining);
  const socialSecurityTax = ssTaxableEarnings * seRules.socialSecurityRate;

  const medicareTax = netEarningsFromSE * seRules.medicareRate;

  const total = socialSecurityTax + medicareTax;
  const deductible = total * seRules.seTaxDeductionRate;

  return {
    netEarningsFromSE,
    socialSecurityTax,
    medicareTax,
    total,
    deductible,
  };
}

/**
 * Compute federal income tax owed.
 *
 * Steps:
 *   1. AGI = netSEIncome - half of SE tax (the SE tax deduction)
 *   2. Taxable income = max(0, AGI - federal standard deduction)
 *   3. Apply federal brackets to taxable income
 *   4. Add Additional Medicare Tax (0.9% on income over filing-status threshold)
 */
export function calculateFederalIncomeTax(
  input: TaxInput,
  seTax: SelfEmploymentTaxResult
): FederalIncomeTaxResult {
  const netIncome = Math.max(0, input.netSelfEmploymentIncome);
  const w2Wages = input.w2Wages ?? 0;

  const agi = netIncome + w2Wages - seTax.deductible;

  const standardDeduction = federalRules2026.standardDeduction[input.filingStatus];
  const taxableIncome = Math.max(0, agi - standardDeduction);

  const brackets = federalRules2026.brackets[input.filingStatus];
  const bracketTax = applyBrackets(taxableIncome, brackets);

  const seRules = federalRules2026.selfEmploymentTax;
  const addlMedicareThreshold = seRules.additionalMedicareThreshold[input.filingStatus];
  const totalMedicareEarnings = w2Wages + seTax.netEarningsFromSE;
  const addlMedicareBase = Math.max(0, totalMedicareEarnings - addlMedicareThreshold);
  const additionalMedicareTax = addlMedicareBase * seRules.additionalMedicareRate;

  const total = bracketTax + additionalMedicareTax;

  return {
    agi,
    taxableIncome,
    bracketTax,
    additionalMedicareTax,
    total,
    standardDeductionApplied: standardDeduction,
  };
}

/**
 * Compute state income tax owed.
 *
 * Behavior depends on state structure:
 *   - 'none' (TX, FL, etc.): returns zero with hasIncomeTax: false
 *   - 'flat': flat rate x (taxable income after state-specific deductions)
 *   - 'graduated': bracket-based calculation, plus any surtaxes
 *
 * State taxable income starts from federal AGI minus state standard deduction
 * and personal exemption (where applicable). This is a simplification - true
 * state taxable income computation varies materially by state.
 */
export function calculateStateIncomeTax(
  input: TaxInput,
  fedResult: FederalIncomeTaxResult
): StateIncomeTaxResult {
  const stateRules = STATE_RULES_2025[input.state];

  if (!stateRules.hasIncomeTax || !stateRules.taxesSelfEmploymentIncome) {
    return {
      hasIncomeTax: false,
      taxableIncome: 0,
      bracketTax: 0,
      surtaxes: [],
      total: 0,
      standardDeductionApplied: 0,
    };
  }

  const stateSD = stateRules.standardDeduction?.[input.filingStatus] ?? 0;
  const statePE = stateRules.personalExemption?.[input.filingStatus] ?? 0;
  const stateTaxableIncome = Math.max(0, fedResult.agi - stateSD - statePE);

  let bracketTax = 0;
  if (stateRules.taxStructure === 'flat' && stateRules.flatRate !== undefined) {
    bracketTax = stateTaxableIncome * stateRules.flatRate;
  } else if (stateRules.taxStructure === 'graduated' && stateRules.brackets) {
    const brackets = stateRules.brackets[input.filingStatus];
    bracketTax = applyBrackets(stateTaxableIncome, brackets);
  }

  const surtaxes: { name: string; amount: number }[] = [];
  if (stateRules.surtaxes) {
    for (const surtax of stateRules.surtaxes) {
      const surtaxBase = Math.max(0, stateTaxableIncome - surtax.threshold);
      const amount = surtaxBase * surtax.rate;
      if (amount > 0) {
        surtaxes.push({ name: surtax.name, amount });
      }
    }
  }

  const surtaxTotal = surtaxes.reduce((sum, surtax) => sum + surtax.amount, 0);
  const total = bracketTax + surtaxTotal;

  return {
    hasIncomeTax: true,
    taxableIncome: stateTaxableIncome,
    bracketTax,
    surtaxes,
    total,
    standardDeductionApplied: stateSD,
  };
}

/**
 * Split annual tax liability into 4 equal quarterly estimated payments.
 * Uses 2026 federal quarterly due dates from rules-2026.ts.
 */
export function calculateQuarterlyPayments(annualTotal: number): QuarterlyPaymentSchedule {
  const quarter = Math.max(0, annualTotal) / 4;
  const dueDates = federalRules2026.quarterlyDueDates;

  return {
    q1: { amount: quarter, dueDate: dueDates.q1 },
    q2: { amount: quarter, dueDate: dueDates.q2 },
    q3: { amount: quarter, dueDate: dueDates.q3 },
    q4: { amount: quarter, dueDate: dueDates.q4 },
  };
}

/**
 * Main entry point. Computes complete tax breakdown for a self-employed filer.
 */
export function calculateTax(input: TaxInput): TaxResult {
  const selfEmploymentTax = calculateSelfEmploymentTax(input);
  const federal = calculateFederalIncomeTax(input, selfEmploymentTax);
  const state = calculateStateIncomeTax(input, federal);

  const totalTax = selfEmploymentTax.total + federal.total + state.total;

  const grossIncome = Math.max(1, input.netSelfEmploymentIncome);
  const effectiveRate = totalTax / grossIncome;
  const setAsidePercentage = Math.min(50, Math.ceil(effectiveRate * 100));

  const quarterlyPayments = calculateQuarterlyPayments(totalTax);

  return {
    input,
    selfEmploymentTax,
    federal,
    state,
    totalTax,
    effectiveRate,
    setAsidePercentage,
    quarterlyPayments,
  };
}

/**
 * Helper: apply progressive tax brackets to a taxable income amount.
 * Returns the total tax owed across all applicable brackets.
 *
 * Bracket semantics: income > bracket.min && (bracket.max === null || income <= bracket.max).
 * Tax for each bracket = (min(income, bracket.max ?? Infinity) - bracket.min) x bracket.rate
 */
export function applyBrackets(
  taxableIncome: number,
  brackets: { rate: number; min: number; max: number | null }[]
): number {
  if (taxableIncome <= 0) return 0;

  let tax = 0;
  for (const bracket of brackets) {
    if (taxableIncome <= bracket.min) break;

    const upperBound = bracket.max ?? Infinity;
    const taxableInBracket = Math.min(taxableIncome, upperBound) - bracket.min;
    tax += taxableInBracket * bracket.rate;

    if (bracket.max === null || taxableIncome <= bracket.max) break;
  }

  return tax;
}

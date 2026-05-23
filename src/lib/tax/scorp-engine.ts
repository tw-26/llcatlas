import { SCORP_DEFAULTS, getDefaultSCorpStateAnnualFee } from '../../data/tax/scorp-defaults';
import { federalRules2026 } from '../../data/tax/rules-2026';
import { calculateSelfEmploymentTax } from './engine';
import type {
  SCorpCalculatorInput,
  SCorpCalculatorResult,
  SCorpPayrollTaxResult,
  SCorpRecommendation,
} from './scorp-types';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const normalizeDollarInput = (value: number | undefined, fallback: number): number =>
  Number.isFinite(value) ? Math.max(0, value ?? fallback) : fallback;

const buildRecommendation = (income: number, netSavings: number): SCorpRecommendation => {
  if (income <= SCORP_DEFAULTS.lowIncomeGuardrail || netSavings <= 0) {
    return {
      tier: 'bad_deal',
      label: 'Probably not worth it yet',
      summary:
        'The payroll, bookkeeping, and state-admin costs likely eat the tax savings. Stay simple until the income is more consistent.',
    };
  }

  if (
    income < SCORP_DEFAULTS.worthConsideringIncome ||
    netSavings < SCORP_DEFAULTS.worthConsideringNetSavings
  ) {
    return {
      tier: 'borderline',
      label: 'Borderline',
      summary:
        'The math is close enough that hassle, CPA fees, and reasonable salary risk matter more than the headline tax savings.',
    };
  }

  return {
    tier: 'worth_considering',
    label: 'Worth discussing with a CPA',
    summary:
      'The estimated savings clear the basic cost hurdle. Confirm reasonable salary, state rules, and payroll setup before electing S-corp treatment.',
  };
};

const calculatePayrollTax = (
  reasonableSalary: number,
  filingStatus: SCorpCalculatorInput['filingStatus'],
): SCorpPayrollTaxResult => {
  const seRules = federalRules2026.selfEmploymentTax;
  const socialSecurityTaxableWages = Math.min(reasonableSalary, seRules.socialSecurityWageBase);
  const socialSecurityTax = socialSecurityTaxableWages * seRules.socialSecurityRate;
  const medicareTax = reasonableSalary * seRules.medicareRate;
  const additionalMedicareBase = Math.max(
    0,
    reasonableSalary - seRules.additionalMedicareThreshold[filingStatus],
  );
  const additionalMedicareTax = additionalMedicareBase * seRules.additionalMedicareRate;

  return {
    reasonableSalary,
    distribution: 0,
    socialSecurityTax,
    medicareTax,
    additionalMedicareTax,
    total: socialSecurityTax + medicareTax + additionalMedicareTax,
  };
};

export function calculateSCorpSavings(input: SCorpCalculatorInput): SCorpCalculatorResult {
  const netIncome = Math.max(0, input.netSelfEmploymentIncome);
  const salaryRatio = clamp(
    input.reasonableSalaryRatio ?? SCORP_DEFAULTS.reasonableSalaryRatio,
    0,
    1,
  );
  const reasonableSalary = clamp(input.reasonableSalary ?? netIncome * salaryRatio, 0, netIncome);
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

  const soleProprietorSelfEmploymentTax = calculateSelfEmploymentTax({
    netSelfEmploymentIncome: netIncome,
    filingStatus: input.filingStatus,
    state: input.state,
  });
  const sCorpPayrollTax = calculatePayrollTax(reasonableSalary, input.filingStatus);
  const distribution = Math.max(0, netIncome - reasonableSalary);
  const grossTaxSavings = soleProprietorSelfEmploymentTax.total - sCorpPayrollTax.total;
  const adminCosts = {
    payroll: annualPayrollCost,
    accounting: annualAccountingCost,
    stateAnnualFee,
    total: annualPayrollCost + annualAccountingCost + stateAnnualFee,
  };
  const netSavings = grossTaxSavings - adminCosts.total;

  return {
    input: {
      netSelfEmploymentIncome: netIncome,
      filingStatus: input.filingStatus,
      state: input.state,
      reasonableSalaryRatio: salaryRatio,
      reasonableSalary,
      annualPayrollCost,
      annualAccountingCost,
      stateAnnualFee,
    },
    soleProprietorSelfEmploymentTax: {
      socialSecurityTax: soleProprietorSelfEmploymentTax.socialSecurityTax,
      medicareTax: soleProprietorSelfEmploymentTax.medicareTax,
      total: soleProprietorSelfEmploymentTax.total,
    },
    sCorpPayrollTax: {
      ...sCorpPayrollTax,
      distribution,
    },
    grossTaxSavings,
    adminCosts,
    netSavings,
    recommendation: buildRecommendation(netIncome, netSavings),
  };
}

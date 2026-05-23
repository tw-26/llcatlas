import { describe, expect, it } from 'vitest';
import { calculateSCorpSavings } from './scorp-engine';
import { expectClose } from './test-helpers';

describe('calculateSCorpSavings', () => {
  it('treats $45K as a bad deal even when gross savings exist', () => {
    const result = calculateSCorpSavings({
      netSelfEmploymentIncome: 45000,
      filingStatus: 'single',
      state: 'TX',
      stateAnnualFee: 0,
    });

    // Sole prop: 45,000 x 0.9235 x 15.3% = 6,358.30
    // S-corp salary: 22,500 x 15.3% = 3,442.50
    expectClose(result.soleProprietorSelfEmploymentTax.total, 6358.3);
    expectClose(result.sCorpPayrollTax.total, 3442.5);
    expectClose(result.grossTaxSavings, 2915.8);
    expectClose(result.adminCosts.total, 2500);
    expectClose(result.netSavings, 415.8);
    expect(result.recommendation.tier).toBe('bad_deal');
  });

  it('treats $60K with default assumptions as worth considering', () => {
    const result = calculateSCorpSavings({
      netSelfEmploymentIncome: 60000,
      filingStatus: 'single',
      state: 'TX',
      stateAnnualFee: 0,
    });

    expectClose(result.soleProprietorSelfEmploymentTax.total, 8477.73);
    expectClose(result.sCorpPayrollTax.total, 4590);
    expectClose(result.grossTaxSavings, 3887.73);
    expectClose(result.netSavings, 1387.73);
    expect(result.recommendation.tier).toBe('worth_considering');
  });

  it('keeps borderline recommendations when admin costs nearly consume the savings', () => {
    const result = calculateSCorpSavings({
      netSelfEmploymentIncome: 80000,
      filingStatus: 'single',
      state: 'TX',
      annualPayrollCost: 2300,
      annualAccountingCost: 2300,
      stateAnnualFee: 0,
    });

    expect(result.netSavings).toBeGreaterThan(0);
    expect(result.netSavings).toBeLessThan(1000);
    expect(result.recommendation.tier).toBe('borderline');
  });

  it('includes explicit state annual fees in admin costs', () => {
    const result = calculateSCorpSavings({
      netSelfEmploymentIncome: 80000,
      filingStatus: 'single',
      state: 'CA',
      stateAnnualFee: 800,
    });

    expect(result.adminCosts.payroll).toBe(1200);
    expect(result.adminCosts.accounting).toBe(1300);
    expect(result.adminCosts.stateAnnualFee).toBe(800);
    expect(result.adminCosts.total).toBe(3300);
  });

  it('clamps salary overrides to net income', () => {
    const result = calculateSCorpSavings({
      netSelfEmploymentIncome: 50000,
      filingStatus: 'single',
      state: 'TX',
      reasonableSalary: 90000,
      stateAnnualFee: 0,
    });

    expect(result.sCorpPayrollTax.reasonableSalary).toBe(50000);
    expect(result.sCorpPayrollTax.distribution).toBe(0);
    expect(result.netSavings).toBeLessThan(0);
    expect(result.recommendation.tier).toBe('bad_deal');
  });
});

import { describe, it, expect } from 'vitest';
import {
  applyBrackets,
  calculateTax,
  calculateSelfEmploymentTax,
  calculateFederalIncomeTax,
  calculateStateIncomeTax,
} from './engine';
import { stateSeeds } from '../../data/states/seeds';
import { expectClose } from './test-helpers';

describe('applyBrackets', () => {
  const singleBrackets = [
    { rate: 0.10, min: 0, max: 12400 },
    { rate: 0.12, min: 12400, max: 50400 },
    { rate: 0.22, min: 50400, max: 105700 },
    { rate: 0.24, min: 105700, max: 201775 },
    { rate: 0.32, min: 201775, max: 256225 },
    { rate: 0.35, min: 256225, max: 640600 },
    { rate: 0.37, min: 640600, max: null },
  ];

  it('returns 0 for zero income', () => {
    expect(applyBrackets(0, singleBrackets)).toBe(0);
  });

  it('returns 0 for negative income', () => {
    expect(applyBrackets(-1000, singleBrackets)).toBe(0);
  });

  it('taxes income entirely in first bracket correctly', () => {
    // $10,000 x 10% = $1,000
    expectClose(applyBrackets(10000, singleBrackets), 1000);
  });

  it('taxes income at exact first bracket boundary', () => {
    // $12,400 x 10% = $1,240
    expectClose(applyBrackets(12400, singleBrackets), 1240);
  });

  it('taxes income spanning two brackets correctly', () => {
    // $30,000: 10% x 12,400 + 12% x 17,600 = 1,240 + 2,112 = $3,352
    expectClose(applyBrackets(30000, singleBrackets), 3352);
  });

  it('taxes income spanning three brackets correctly', () => {
    // $80,000: 10% x 12,400 + 12% x 38,000 + 22% x 29,600
    // = 1,240 + 4,560 + 6,512 = $12,312
    expectClose(applyBrackets(80000, singleBrackets), 12312);
  });

  it('taxes income in the top open-ended bracket', () => {
    // $1,000,000: cumulative through 35% bracket = 192,979.25
    // Plus 37% x (1,000,000 - 640,600) = 132,978
    // Total: 325,957.25
    expectClose(applyBrackets(1000000, singleBrackets), 325957.25, 1);
  });

  it('handles exact boundary at top of last finite bracket', () => {
    // $640,600 = exact top of 35% bracket
    // 10%x12400 + 12%x38000 + 22%x55300 + 24%x96075 + 32%x54450 + 35%x384375
    // = 1240 + 4560 + 12166 + 23058 + 17424 + 134531.25
    // = 192,979.25
    expectClose(applyBrackets(640600, singleBrackets), 192979.25, 5);
  });
});

describe('calculateSelfEmploymentTax', () => {
  it('computes basic SE tax for $50K net earnings, no W-2', () => {
    // Net earnings: 50000 x 0.9235 = 46,175
    // SS: 46,175 x 0.124 = 5,725.70
    // Medicare: 46,175 x 0.029 = 1,339.08
    // Total: 7,064.78
    const result = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 50000,
      filingStatus: 'single',
      state: 'TX',
    });
    expectClose(result.netEarningsFromSE, 46175);
    expectClose(result.socialSecurityTax, 5725.70);
    expectClose(result.medicareTax, 1339.08);
    expectClose(result.total, 7064.78);
    expectClose(result.deductible, 3532.39);
  });

  it('caps SS portion at the wage base', () => {
    // Net SE earnings exceed the 2026 SS wage base ($184,500)
    // SE income: $250,000 -> net earnings: 230,875
    // SS: only first 184,500 is taxed -> 184,500 x 0.124 = 22,878
    // Medicare: 230,875 x 0.029 = 6,695.375 (no cap)
    const result = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 250000,
      filingStatus: 'single',
      state: 'TX',
    });
    expectClose(result.socialSecurityTax, 22878);
    expectClose(result.medicareTax, 6695.375);
  });

  it('reduces SS taxable amount when W-2 wages partly fill SS wage base', () => {
    // W-2 wages of $100K already used SS wage base
    // Remaining SS base: 184,500 - 100,000 = 84,500
    // Net SE earnings: 50,000 x 0.9235 = 46,175 (less than remaining base, so all taxable)
    // SS: 46,175 x 0.124 = 5,725.70 (same as no W-2 case since all SE fits in remaining base)
    const result = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 50000,
      filingStatus: 'single',
      state: 'TX',
      w2Wages: 100000,
    });
    expectClose(result.socialSecurityTax, 5725.70);
  });

  it('zeroes SS portion when W-2 wages already exceed wage base', () => {
    // W-2 of $200K > SS wage base of $184,500 -> no remaining base for SE
    // SS portion of SE tax should be zero; Medicare still applies
    const result = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 50000,
      filingStatus: 'single',
      state: 'TX',
      w2Wages: 200000,
    });
    expect(result.socialSecurityTax).toBe(0);
    expectClose(result.medicareTax, 1339.08);
  });

  it('returns zero for zero income', () => {
    const result = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 0,
      filingStatus: 'single',
      state: 'TX',
    });
    expect(result.total).toBe(0);
  });
});

describe('calculateFederalIncomeTax', () => {
  it('computes federal tax for typical $80K single filer', () => {
    const seTax = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 80000,
      filingStatus: 'single',
      state: 'TX',
    });
    const result = calculateFederalIncomeTax({
      netSelfEmploymentIncome: 80000,
      filingStatus: 'single',
      state: 'TX',
    }, seTax);

    // AGI: 80,000 - 5,651.82 (half SE) = 74,348.18
    // Taxable: 74,348.18 - 16,100 (SD) = 58,248.18
    // Bracket tax (2026 single): 10%x12400 + 12%x38000 + 22%x7,848.18
    // = 1240 + 4560 + 1726.60 = 7,526.60
    expectClose(result.agi, 74348.18);
    expectClose(result.taxableIncome, 58248.18);
    expectClose(result.bracketTax, 7526.60);
    expect(result.additionalMedicareTax).toBe(0);
  });

  it('applies Additional Medicare Tax above $200K single threshold', () => {
    // Net SE: $250,000 -> net earnings: 230,875
    // Additional Medicare base: 230,875 - 200,000 = 30,875
    // Additional Medicare tax: 30,875 x 0.009 = 277.875
    const seTax = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 250000,
      filingStatus: 'single',
      state: 'TX',
    });
    const result = calculateFederalIncomeTax({
      netSelfEmploymentIncome: 250000,
      filingStatus: 'single',
      state: 'TX',
    }, seTax);

    expectClose(result.additionalMedicareTax, 277.875);
  });

  it('uses MFJ standard deduction and brackets when filing jointly', () => {
    const seTax = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 80000,
      filingStatus: 'married_joint',
      state: 'TX',
    });
    const result = calculateFederalIncomeTax({
      netSelfEmploymentIncome: 80000,
      filingStatus: 'married_joint',
      state: 'TX',
    }, seTax);

    expect(result.standardDeductionApplied).toBe(32200);
    // AGI: 74,348.18 - 32,200 = 42,148.18 taxable
    // Tax (MFJ 2026): 10%x24800 + 12%x17,348.18 = 2480 + 2081.78 = 4,561.78
    expectClose(result.bracketTax, 4561.78);
  });

  it('returns zero taxable income when standard deduction exceeds AGI', () => {
    const seTax = calculateSelfEmploymentTax({
      netSelfEmploymentIncome: 10000,
      filingStatus: 'single',
      state: 'TX',
    });
    const result = calculateFederalIncomeTax({
      netSelfEmploymentIncome: 10000,
      filingStatus: 'single',
      state: 'TX',
    }, seTax);

    expect(result.taxableIncome).toBe(0);
    expect(result.bracketTax).toBe(0);
  });
});

describe('calculateStateIncomeTax', () => {
  function makeFedResult(input: {
    netSelfEmploymentIncome: number;
    filingStatus: 'single' | 'married_joint' | 'married_separate' | 'head_of_household';
    state: 'TX' | 'CA' | 'CO' | 'FL' | 'NY' | 'PA' | 'MS' | 'ID';
  }) {
    const seTax = calculateSelfEmploymentTax(input);
    return calculateFederalIncomeTax(input, seTax);
  }

  it('returns zero for no-tax states (Texas)', () => {
    const input = { netSelfEmploymentIncome: 100000, filingStatus: 'single' as const, state: 'TX' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    expect(result.hasIncomeTax).toBe(false);
    expect(result.total).toBe(0);
  });

  it('returns zero for Florida (no income tax)', () => {
    const input = { netSelfEmploymentIncome: 100000, filingStatus: 'single' as const, state: 'FL' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    expect(result.hasIncomeTax).toBe(false);
    expect(result.total).toBe(0);
  });

  it('applies flat rate for Colorado (4.4%)', () => {
    const input = { netSelfEmploymentIncome: 80000, filingStatus: 'single' as const, state: 'CO' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    // CO uses federal SD ($15,000 single in our data)
    // Taxable: AGI (74,348.18) - 15,000 = 59,348.18
    // Tax: 59,348.18 x 0.044 = 2,611.32
    expect(result.hasIncomeTax).toBe(true);
    expectClose(result.total, 2611.32, 2);
  });

  it('applies flat rate for Pennsylvania (3.07%, no SD or PE)', () => {
    const input = { netSelfEmploymentIncome: 80000, filingStatus: 'single' as const, state: 'PA' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    // PA: no SD, no PE -> state taxable = full AGI = 74,348.18
    // Tax: 74,348.18 x 0.0307 = 2,282.49
    expectClose(result.total, 2282.49, 2);
  });

  it('applies graduated brackets for California single filer', () => {
    const input = { netSelfEmploymentIncome: 80000, filingStatus: 'single' as const, state: 'CA' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    // CA SD: $5,540
    // State taxable: 74,348.18 - 5,540 = 68,808.18
    // Bracket math (2025 CA single):
    //   1% x 11,079 = 110.79
    //   2% x (26,264 - 11,079) = 303.70
    //   4% x (41,452 - 26,264) = 607.52
    //   6% x (57,542 - 41,452) = 965.40
    //   8% x (68,808.18 - 57,542) = 901.29
    // Total: ~2,888.70
    expect(result.hasIncomeTax).toBe(true);
    expectClose(result.total, 2888.70, 5);
    expect(result.surtaxes).toEqual([]);
  });

  it('applies California Mental Health Services Tax surtax over $1M', () => {
    const input = { netSelfEmploymentIncome: 1500000, filingStatus: 'single' as const, state: 'CA' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    // Should have one surtax entry for MHST
    expect(result.surtaxes.length).toBe(1);
    expect(result.surtaxes[0].name).toBe('Mental Health Services Tax');
    // Surtax base: state taxable income - 1,000,000, x 1%
    expect(result.surtaxes[0].amount).toBeGreaterThan(0);
  });

  it('handles 2-bracket structure for Mississippi (0% then 4.4%)', () => {
    const input = { netSelfEmploymentIncome: 50000, filingStatus: 'single' as const, state: 'MS' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    // MS SD: 2,300, PE: 6,000
    // State taxable: AGI (~46,461) - 2,300 - 6,000 = ~38,161
    // Tax: 0% x 10,000 + 4.4% x (38,161 - 10,000) = 0 + 1,239.10 ~= $1,239
    expect(result.hasIncomeTax).toBe(true);
    expectClose(result.total, 1239, 5);
  });

  it('handles 2-bracket structure for Idaho (0% threshold then flat)', () => {
    const input = { netSelfEmploymentIncome: 50000, filingStatus: 'single' as const, state: 'ID' as const };
    const fed = makeFedResult(input);
    const result = calculateStateIncomeTax(input, fed);

    // Idaho SD: 15,000
    // State taxable: AGI (~46,461) - 15,000 = ~31,461
    // Tax: 0% x 4,673 + 5.695% x (31,461 - 4,673) = 0 + 1,525.68
    expect(result.hasIncomeTax).toBe(true);
    expectClose(result.total, 1525.68, 5);
  });
});

describe('calculateTax integration', () => {
  it('computes complete tax breakdown for $80K single in California', () => {
    const result = calculateTax({
      netSelfEmploymentIncome: 80000,
      filingStatus: 'single',
      state: 'CA',
    });

    expectClose(result.selfEmploymentTax.total, 11303.64, 1);
    expectClose(result.federal.total, 7526.60, 2);
    expectClose(result.state.total, 2888.70, 5);
    expectClose(result.totalTax, 21718.94, 5);
    expect(result.effectiveRate).toBeGreaterThan(0.27);
    expect(result.effectiveRate).toBeLessThan(0.28);
  });

  it('computes lower total in no-tax state', () => {
    const ca = calculateTax({ netSelfEmploymentIncome: 80000, filingStatus: 'single', state: 'CA' });
    const tx = calculateTax({ netSelfEmploymentIncome: 80000, filingStatus: 'single', state: 'TX' });

    expect(tx.totalTax).toBeLessThan(ca.totalTax);
    expect(tx.state.total).toBe(0);
    expect(ca.totalTax - tx.totalTax).toBeCloseTo(2888.70, 0);
  });

  it('produces equal quarterly payments summing to total', () => {
    const result = calculateTax({
      netSelfEmploymentIncome: 100000,
      filingStatus: 'single',
      state: 'TX',
    });

    const sum = result.quarterlyPayments.q1.amount +
                result.quarterlyPayments.q2.amount +
                result.quarterlyPayments.q3.amount +
                result.quarterlyPayments.q4.amount;
    expectClose(sum, result.totalTax, 0.01);
    expectClose(result.quarterlyPayments.q1.amount, result.quarterlyPayments.q4.amount, 0.01);
  });

  it('uses 2026 federal quarterly due dates', () => {
    const result = calculateTax({
      netSelfEmploymentIncome: 100000,
      filingStatus: 'single',
      state: 'TX',
    });

    expect(result.quarterlyPayments.q1.dueDate).toBe('2026-04-15');
    expect(result.quarterlyPayments.q2.dueDate).toBe('2026-06-15');
    expect(result.quarterlyPayments.q3.dueDate).toBe('2026-09-15');
    expect(result.quarterlyPayments.q4.dueDate).toBe('2027-01-15');
  });

  it('caps setAsidePercentage at 50%', () => {
    const result = calculateTax({
      netSelfEmploymentIncome: 10000000,
      filingStatus: 'single',
      state: 'CA',
    });

    expect(result.setAsidePercentage).toBeLessThanOrEqual(50);
  });

  it('handles zero income gracefully', () => {
    const result = calculateTax({
      netSelfEmploymentIncome: 0,
      filingStatus: 'single',
      state: 'CA',
    });

    expect(result.totalTax).toBe(0);
    expect(result.selfEmploymentTax.total).toBe(0);
    expect(result.federal.total).toBe(0);
    expect(result.state.total).toBe(0);
    expect(Number.isFinite(result.effectiveRate)).toBe(true);
  });
});

describe('all 51 jurisdictions', () => {
  it('returns finite, non-negative tax for $75K single in every jurisdiction', () => {
    const failures: string[] = [];

    for (const seed of stateSeeds) {
      try {
        const result = calculateTax({
          netSelfEmploymentIncome: 75000,
          filingStatus: 'single',
          state: seed.abbreviation,
        });

        if (!Number.isFinite(result.totalTax)) {
          failures.push(`${seed.abbreviation}: totalTax not finite (${result.totalTax})`);
        }
        if (result.totalTax < 0) {
          failures.push(`${seed.abbreviation}: negative totalTax (${result.totalTax})`);
        }
        if (!Number.isFinite(result.state.total)) {
          failures.push(`${seed.abbreviation}: state total not finite`);
        }
      } catch (e) {
        failures.push(`${seed.abbreviation}: threw ${(e as Error).message}`);
      }
    }

    if (failures.length > 0) {
      throw new Error(`Failed jurisdictions:\n${failures.join('\n')}`);
    }
  });
});

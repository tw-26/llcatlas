import { describe, expect, it } from 'vitest';
import { calculateReasonableCompensation } from './reasonable-comp-engine';

describe('calculateReasonableCompensation', () => {
  it('guards low income even when a salary range can be computed', () => {
    const result = calculateReasonableCompensation({
      netBusinessIncome: 45000,
      role: 'solo_consultant',
      hoursPerWeek: 40,
      state: 'TX',
      industry: 'consulting',
      profitMargin: 60,
      stateAnnualFee: 0,
    });

    expect(result.salary.mid).toBeLessThanOrEqual(42750);
    expect(result.recommendation.tier).toBe('too_low_to_help');
  });

  it('scales the market floor down for part-time work', () => {
    const fullTime = calculateReasonableCompensation({
      netBusinessIncome: 120000,
      role: 'software_services',
      hoursPerWeek: 40,
      state: 'TX',
      industry: 'software',
      profitMargin: 65,
      stateAnnualFee: 0,
    });
    const partTime = calculateReasonableCompensation({
      netBusinessIncome: 120000,
      role: 'software_services',
      hoursPerWeek: 20,
      state: 'TX',
      industry: 'software',
      profitMargin: 65,
      stateAnnualFee: 0,
    });

    expect(partTime.assumptions.fullTimeEquivalent).toBe(0.5);
    expect(partTime.salary.mid).toBeLessThan(fullTime.salary.mid);
  });

  it('caps salary below income when the market floor would consume profit', () => {
    const result = calculateReasonableCompensation({
      netBusinessIncome: 65000,
      role: 'software_services',
      hoursPerWeek: 40,
      state: 'CA',
      industry: 'software',
      profitMargin: 20,
    });

    expect(result.salary.mid).toBe(61750);
    expect(result.distribution).toBe(3250);
    expect(result.recommendation.tier).toBe('too_low_to_help');
  });

  it('passes state annual fee through to the S-corp savings impact', () => {
    const result = calculateReasonableCompensation({
      netBusinessIncome: 120000,
      role: 'solo_consultant',
      hoursPerWeek: 40,
      state: 'CA',
      industry: 'consulting',
      profitMargin: 55,
      stateAnnualFee: 800,
    });

    expect(result.input.stateAnnualFee).toBe(800);
    expect(result.savingsAtSuggestedSalary.adminCosts.stateAnnualFee).toBe(800);
  });

  it('shows the savings impact versus the default 50 percent salary assumption', () => {
    const result = calculateReasonableCompensation({
      netBusinessIncome: 150000,
      role: 'software_services',
      hoursPerWeek: 40,
      state: 'TX',
      industry: 'software',
      profitMargin: 75,
      stateAnnualFee: 0,
    });

    expect(result.salary.ratio).toBeGreaterThan(0.5);
    expect(result.savingsImpact).toBeLessThan(0);
    expect(result.savingsAtSuggestedSalary.netSavings).toBeLessThan(
      result.savingsAtDefaultSalary.netSavings,
    );
  });
});

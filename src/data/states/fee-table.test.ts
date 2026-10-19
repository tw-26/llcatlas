import { describe, expect, it } from 'vitest';
import { states } from './index';
import { feeFactsBySlug } from './fee-facts';
import { FEE_TABLE_UPDATED, getLlcFeeTable } from './fee-table';

const rows = getLlcFeeTable();
const MAX_AGE_DAYS = 365;

describe('LLC fee table', () => {
  it('includes every state and DC, each verified', () => {
    expect(rows).toHaveLength(states.length);
    expect(rows).toHaveLength(51);
    expect(new Set(rows.map((row) => row.slug)).size).toBe(rows.length);
    expect(rows.map((row) => row.name)).toEqual([...rows].map((row) => row.name).sort((a, b) => a.localeCompare(b)));
  });

  it('refuses a state with no verified fee line', () => {
    for (const state of states) {
      const row = rows.find((entry) => entry.slug === state.slug);
      expect(row, state.slug).toBeDefined();
      expect(row?.lastVerified, state.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(row?.sourceUrl, state.slug).toMatch(/^https:\/\//);
      expect(row?.sourceLabel.length, state.slug).toBeGreaterThan(0);
      expect(row?.filingDisplay, state.slug).toMatch(/\$\d/);
      expect(row?.annualDisplay.length, state.slug).toBeGreaterThan(0);
      expect(row?.annualDue.length, state.slug).toBeGreaterThan(0);
      expect(row?.yearOneTotal, state.slug).toBeGreaterThan(0);
      expect(row?.yearTwoTotal, state.slug).toBeGreaterThanOrEqual(0);

      const ageDays = (Date.now() - Date.parse(`${row?.lastVerified}T00:00:00Z`)) / 86_400_000;
      expect(ageDays, state.slug).toBeGreaterThanOrEqual(0);
      expect(ageDays, state.slug).toBeLessThanOrEqual(MAX_AGE_DAYS);
    }
  });

  it('uses the cost page totals for ready guides and fee facts for the rest', () => {
    for (const state of states) {
      const row = rows.find((entry) => entry.slug === state.slug);
      if (state.costPage) {
        expect(row?.yearOneTotal, state.slug).toBe(state.costPage.yearOneTotal);
        expect(row?.yearTwoTotal, state.slug).toBe(state.costPage.yearTwoTotal);
        expect(row?.costPath, state.slug).toBe(`/llc/${state.slug}/cost/`);
        expect(state.feeFacts, state.slug).toBeUndefined();
      } else {
        expect(state.feeFacts, state.slug).toBeDefined();
        expect(row?.yearOneTotal, state.slug).toBe(state.feeFacts?.yearOneTotal);
        expect(row?.yearTwoTotal, state.slug).toBe(state.feeFacts?.yearTwoTotal);
        expect(row?.costPath, state.slug).toBeUndefined();
      }
    }
  });

  it('stores fee facts only for states without a guide', () => {
    const ready = new Set(states.filter((state) => state.contentStatus === 'ready').map((state) => state.slug));
    for (const slug of Object.keys(feeFactsBySlug)) {
      expect(ready.has(slug), slug).toBe(false);
    }
  });

  it('stamps the published table with the date the new states were checked', () => {
    expect(FEE_TABLE_UPDATED).toBe('2026-10-18');
    for (const facts of Object.values(feeFactsBySlug)) {
      expect(facts.lastVerified).toBe(FEE_TABLE_UPDATED);
    }
  });
});

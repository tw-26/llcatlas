import { describe, expect, it } from 'vitest';
import { GUIDE_YEAR } from '../site';
import { states, type StateData } from './index';
import { READY_STATE_SLUGS } from './ready-slugs.mjs';

const readyStates = states.filter((state) => state.contentStatus === 'ready');

const PLACEHOLDER_PATTERNS = [/placeholder/i, /research pending/i, /example\.com/i, /\bTODO\b/, /\bTBD\b/, /lorem ipsum/i];
const MAX_AGE_DAYS = 365;
const STATES_REQUIRING_TRAP = ['texas', 'california', 'delaware'];

const dollarAmounts = (text: string) => [...text.matchAll(/\$\d[\d,]*/g)].map((match) => match[0].replace(/,/g, ''));

const costText = (state: StateData) =>
  [
    `$${state.filingFee}`,
    state.filingFeeDisplay ?? '',
    state.annualReportFee === null ? '' : `$${state.annualReportFee}`,
    ...state.costBreakdown.map((row) => row.cost),
  ]
    .join(' ')
    .replace(/,/g, '');

describe('ready-state registry', () => {
  it('marks exactly the slugs in ready-slugs.mjs as ready', () => {
    expect(readyStates.map((state) => state.slug).sort()).toEqual([...READY_STATE_SLUGS].sort());
  });

  it('gives every ready state a unique SEO title', () => {
    const titles = readyStates.map((state) => state.seoTitle);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('gives every cost page a unique SEO title', () => {
    const titles = readyStates.map((state) => state.costPage?.seoTitle);
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe.each(readyStates.map((state) => [state.name, state] as const))('%s guide', (_name, state) => {
  it('has SEO metadata with the current guide year', () => {
    expect(state.seoTitle, 'seoTitle').toBeTruthy();
    expect(state.seoTitle).toContain(state.name);
    expect(state.seoTitle).toContain(String(GUIDE_YEAR));
    expect(state.seoDescription, 'seoDescription').toBeTruthy();
  });

  it('only puts dollar amounts in the title that appear in the cost data', () => {
    const costs = costText(state);
    for (const amount of dollarAmounts(state.seoTitle ?? '')) {
      expect(costs, `title amount ${amount}`).toContain(amount);
    }
  });

  it('was reviewed within the last year', () => {
    expect(state.lastUpdated, 'lastUpdated').toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const ageDays = (Date.now() - Date.parse(`${state.lastUpdated}T00:00:00Z`)) / 86_400_000;
    expect(ageDays).toBeGreaterThanOrEqual(0);
    expect(ageDays).toBeLessThanOrEqual(MAX_AGE_DAYS);
  });

  it('has no placeholder copy left from the defaults', () => {
    const serialized = JSON.stringify(state);
    for (const pattern of PLACEHOLDER_PATTERNS) {
      expect(serialized, String(pattern)).not.toMatch(pattern);
    }
  });

  it('has real filing facts', () => {
    expect(state.filingFee).toBeGreaterThan(0);
    expect(state.filingAgencyUrl).toMatch(/^https:\/\//);
    expect(state.annualReportDue.length).toBeGreaterThan(0);
    expect(state.annualReportNote.length).toBeGreaterThan(0);
  });

  it('links to at least 3 official https sources', () => {
    expect(state.officialLinks.length).toBeGreaterThanOrEqual(3);
    for (const link of state.officialLinks) {
      expect(link.url, link.label).toMatch(/^https:\/\//);
    }
  });

  it('has full guide sections', () => {
    expect(state.steps.length, 'steps').toBeGreaterThanOrEqual(5);
    expect(state.faq.length, 'faq').toBeGreaterThanOrEqual(8);
    expect(state.taxHighlights.length, 'taxHighlights').toBeGreaterThanOrEqual(2);
    expect(state.proscons.pros.length, 'pros').toBeGreaterThanOrEqual(3);
    expect(state.proscons.cons.length, 'cons').toBeGreaterThanOrEqual(3);
    expect(state.costBreakdown.some((row) => row.isEmphasized), 'cost total row').toBe(true);
    expect(state.comparisonRows.some((row) => row.state === state.name), 'own comparison row').toBe(true);
  });

  it('has a complete cost page', () => {
    const cost = state.costPage;
    expect(cost, 'costPage').toBeDefined();
    if (!cost) return;

    expect(cost.seoTitle).toContain(state.name);
    expect(cost.seoTitle).toContain(String(GUIDE_YEAR));
    expect(cost.seoTitle).not.toBe(state.seoTitle);
    expect(cost.seoDescription.length, 'seoDescription').toBeGreaterThan(0);

    const titleSources = [`$${cost.formTotal}`, cost.annualDisplay].join(' ').replace(/,/g, '');
    for (const amount of dollarAmounts(cost.seoTitle)) {
      expect(titleSources, `cost title amount ${amount}`).toContain(amount);
    }

    expect(cost.formTotal).toBeGreaterThan(0);
    expect(cost.yearOneTotal).toBeGreaterThanOrEqual(cost.formTotal);
    expect(cost.yearTwoTotal).toBeGreaterThanOrEqual(0);
    expect(cost.schedule.length, 'schedule').toBeGreaterThanOrEqual(3);
    expect(cost.faq.length, 'faq').toBeGreaterThanOrEqual(4);
    expect(cost.verdict.length, 'verdict').toBeGreaterThan(0);

    const officialUrls = state.officialLinks.map((link) => link.url);
    expect(cost.sourceUrls.length, 'sourceUrls').toBeGreaterThanOrEqual(2);
    for (const url of cost.sourceUrls) {
      expect(officialUrls, url).toContain(url);
    }
  });

  it('puts its state-specific trap up front when it has one', () => {
    if (STATES_REQUIRING_TRAP.includes(state.slug)) {
      expect(state.trap, 'trap').toBeDefined();
    }
    if (!state.trap) return;
    expect(state.sections.map((section) => section.id), 'trap sectionId').toContain(state.trap.sectionId);
    for (const field of ['name', 'headline', 'body', 'action'] as const) {
      expect(state.trap[field].length, `trap.${field}`).toBeGreaterThan(0);
    }
  });
});

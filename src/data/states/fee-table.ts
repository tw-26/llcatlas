import { getStateCostPath, states, type StateData } from './index';

export const FEE_TABLE_PATH = '/llc/cost-by-state/';
export const FEE_TABLE_UPDATED = '2026-10-18';

export type LlcFeeTableRow = {
  slug: string;
  name: string;
  abbreviation: string;
  filingDisplay: string;
  annualDisplay: string;
  annualDue: string;
  yearOneTotal: number;
  yearTwoTotal: number;
  note?: string;
  lastVerified: string;
  sourceUrl: string;
  sourceLabel: string;
  /** Cost guide, when the state has one. */
  costPath?: string;
};

/**
 * Short corrections where the guide's raw fields would misread in a one-line table.
 * Year totals still come from the cost page.
 */
const readyTableNotes: Record<string, { filing?: string; due?: string; note?: string }> = {
  arizona: {
    note: 'Year 1 is the $85 online filing, which includes expedited processing. Mail is $50.',
  },
  california: {
    due: 'April 15 for the annual tax',
    note: 'The $490 year-1 figure is the $400 first-year tax for a first tax year in 2027–2029, plus the $70 filing and $20 statement. Form in 2026 and year 1 is $890. Every later year is $800.',
  },
  delaware: {
    due: 'June 1',
    note: 'Year 2 is the $400 annual tax plus a $75 business license if you operate in Delaware. Year 1 includes a prorated license of up to $75.',
  },
  indiana: {
    note: 'The $32 report is due at the two-year mark, so year 2 is $0.',
  },
  maryland: {
    note: 'Year 1 is expedited filing, about $150. The $100 filing takes about 6–8 weeks.',
  },
  michigan: {
    note: 'Year 1 is $50 if you form in October–December. Form in January–September and add the $25 annual statement.',
  },
  montana: {
    note: 'The annual report fee is waived through 2027 if you file between January 1 and April 15. It is $35 if late.',
  },
  nevada: {
    filing: '$425',
    note: 'Year 1 is the articles, the initial list, and the state business license.',
  },
  tennessee: {
    filing: '$300 minimum',
    note: 'The filing fee is $50 per member, with a $300 minimum. Year 2 is a $300 annual report plus a $100 minimum franchise tax.',
  },
  texas: {
    due: 'May 15',
    note: 'Year 2 is $0 under the no-tax threshold. You still file the public information report.',
  },
  virginia: {
    due: 'Last day of your anniversary month',
    note: 'Virginia has no annual report. The $50 is the annual registration fee.',
  },
  washington: {
    note: 'Year 1 is the $200 online filing plus the $50 business license. Mail filing of the certificate is $180.',
  },
  wyoming: {
    note: 'Year 2 is the $60 minimum annual report. It rises if Wyoming assets are over $300,000.',
  },
};

const formatWholeDollars = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

const filingDisplayFor = (state: StateData) => {
  const extra = readyTableNotes[state.slug]?.filing;
  if (extra) return extra;
  if (state.filingFeeDisplay && state.filingFeeDisplay.length <= 42) return state.filingFeeDisplay;
  return formatWholeDollars(state.costPage?.formTotal ?? state.filingFee);
};

const rowFromGuide = (state: StateData): LlcFeeTableRow => {
  const cost = state.costPage;
  if (!cost || !state.lastUpdated) {
    throw new Error(`${state.slug} is missing a verified cost page`);
  }

  const sourceUrl = cost.sourceUrls[0];
  const source = state.officialLinks.find((link) => link.url === sourceUrl);
  const extra = readyTableNotes[state.slug];

  return {
    slug: state.slug,
    name: state.name,
    abbreviation: state.abbreviation,
    filingDisplay: filingDisplayFor(state),
    annualDisplay: cost.annualDisplay,
    annualDue: extra?.due ?? state.annualReportDue,
    yearOneTotal: cost.yearOneTotal,
    yearTwoTotal: cost.yearTwoTotal,
    note: extra?.note,
    lastVerified: state.lastUpdated,
    sourceUrl,
    sourceLabel: source?.label ?? `${state.name} official fee source`,
    costPath: getStateCostPath(state.slug),
  };
};

const rowFromFeeFacts = (state: StateData): LlcFeeTableRow => {
  const facts = state.feeFacts;
  if (!facts) {
    throw new Error(`${state.slug} has no verified fee line`);
  }

  return {
    slug: state.slug,
    name: state.name,
    abbreviation: state.abbreviation,
    filingDisplay: facts.filingDisplay,
    annualDisplay: facts.annualDisplay,
    annualDue: facts.annualDue,
    yearOneTotal: facts.yearOneTotal,
    yearTwoTotal: facts.yearTwoTotal,
    note: facts.note,
    lastVerified: facts.lastVerified,
    sourceUrl: facts.sourceUrl,
    sourceLabel: facts.sourceLabel,
  };
};

/** One verified row per state and DC, alphabetical. */
export const getLlcFeeTable = (): LlcFeeTableRow[] =>
  states
    .map((state) => (state.costPage ? rowFromGuide(state) : rowFromFeeFacts(state)))
    .sort((left, right) => left.name.localeCompare(right.name));

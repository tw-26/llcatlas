export type USStateCode =
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL'
  | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME'
  | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH'
  | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI'
  | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';

export type Step = {
  title: string;
  description: string;
};

export type CostBreakdownItem = {
  item: string;
  cost: string;
  isEmphasized?: boolean;
  required?: string;
  notes?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ResourceLink = {
  label: string;
  url: string;
};

export type GuideSectionFact = {
  label: string;
  detail: string;
};

export type GuideSection = {
  id: string;
  heading: string;
  summary: string;
  facts?: GuideSectionFact[];
  paragraphs?: string[];
  related?: { label: string; href: string };
};

/** The one state-specific cost or filing a first-time founder is most likely to miss. */
export type StateTrap = {
  /** Name of the obligation, used in the link to its section (e.g. "the $800 annual tax"). */
  name: string;
  headline: string;
  body: string;
  action: string;
  /** Must match the `id` of an entry in `sections`. */
  sectionId: string;
};

export type CostScheduleItem = {
  item: string;
  cost: string;
  due: string;
};

/** Content for `/llc/{slug}/cost/`. Every number must come from data already verified in the guide. */
export type StateCostPage = {
  seoTitle: string;
  seoDescription: string;
  /** Answer-first opening paragraph. */
  intro: string;
  /** Required state fees to form, cheapest filing method. */
  formTotal: number;
  /** Recurring required state cost, as it should read in the summary strip (e.g. "$800/yr", "$32 every 2 years"). */
  annualDisplay: string;
  /** Year-one state cost if the reader follows `verdict` and serves as their own agent. */
  yearOneTotal: number;
  /** Year-two required state cost, serving as your own agent. */
  yearTwoTotal: number;
  yearOneNote: string;
  yearTwoNote: string;
  schedule: CostScheduleItem[];
  verdict: string;
  faq: FaqItem[];
  /** Must all appear in the state's `officialLinks`. */
  sourceUrls: string[];
};

/** Content for `/llc/{slug}/registered-agent/`. Every fact must be read on an official state page. */
export type StateRegisteredAgentPage = {
  /** Date these registered agent facts were last checked against official sources (YYYY-MM-DD). */
  lastVerified: string;
  seoTitle: string;
  seoDescription: string;
  /** Answer-first opening paragraph. */
  intro: string;
  /** State-specific rules for the facts box: term, who qualifies, address, consent, change fee, resignation. */
  facts: GuideSectionFact[];
  /** Why the LLC needs one and what happens if it lapses. */
  lapse: string[];
  /** Who can be their own agent here, and what it costs them in privacy and availability. */
  selfAgent: string[];
  /** What a paid agent costs and what it solves in this state. */
  paidAgent: string[];
  /** One decisive recommendation that names both audiences: in-state self-agent and everyone else. */
  verdict: string;
  /** Form, fee, and steps to switch agents. */
  changeAgent: string[];
  /** For states that draw out-of-state founders (Wyoming, Delaware): why the home state usually still wins. */
  outOfStateNote?: string;
  faq: FaqItem[];
  /** Must all appear in the state's `officialLinks`. */
  sourceUrls: string[];
};

export type ComparisonRow = {
  state: string;
  annualReport: string;
  upfrontCost: string;
  ongoingStateCost: string;
};

export type StateData = {
  slug: string;
  name: string;
  abbreviation: USStateCode;
  contentStatus: 'placeholder' | 'ready';
  intro: string;
  whatYoullNeed: string;
  closing: string;
  inlineCtaDescription: string;
  sidebarCtaDescription: string;
  officialLinks: ResourceLink[];
  taxHighlights: string[];
  comparisonRows: ComparisonRow[];
  filingFee: number;
  filingFeeDisplay?: string;
  filingFeeNote?: string;
  annualReportFee: number | null;
  stateTaxRate: string;
  filingTime: string;
  filingTimeShort: string;
  expeditedTime: string | null;
  expeditedFee: number | null;
  filingAgency: string;
  filingAgencyUrl: string;
  agentTerm: string;
  requiresOperatingAgreement: boolean;
  requiresPublication: boolean;
  stateTax: string;
  annualReportDue: string;
  annualReportNote: string;
  seoTitle: string | null;
  seoDescription: string | null;
  lastUpdated: string | null;
  steps: Step[];
  sections: GuideSection[];
  trap?: StateTrap;
  costPage?: StateCostPage;
  registeredAgentPage?: StateRegisteredAgentPage;
  costBreakdown: CostBreakdownItem[];
  faq: FaqItem[];
  proscons: { pros: string[]; cons: string[] };
};

export type StateSeed = {
  slug: string;
  name: string;
  abbreviation: USStateCode;
};

export type StateOverride = Partial<Omit<StateData, 'slug' | 'name' | 'abbreviation'>>;

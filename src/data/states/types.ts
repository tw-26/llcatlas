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

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

export type ComparisonRow = {
  state: string;
  annualReport: string;
  upfrontCost: string;
  ongoingStateCost: string;
};

export type StateData = {
  slug: string;
  name: string;
  abbreviation: string;
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
  costBreakdown: CostBreakdownItem[];
  faq: FaqItem[];
  proscons: { pros: string[]; cons: string[] };
};

export type StateSeed = {
  slug: string;
  name: string;
  abbreviation: string;
};

export type StateOverride = Partial<Omit<StateData, 'slug' | 'name' | 'abbreviation'>>;

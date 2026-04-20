import type {
  CostBreakdownItem,
  FaqItem,
  StateData,
  StateSeed,
  Step,
} from './types';

const buildSteps = (stateName: string): Step[] => [
  {
    title: `Name your ${stateName} LLC`,
    description:
      'Placeholder copy: confirm the name is available, check naming rules, and reserve it only if your research later shows that step matters.',
  },
  {
    title: 'Choose a registered agent',
    description:
      'Placeholder copy: compare privacy, support quality, and total yearly cost before locking in your recommendation.',
  },
  {
    title: 'File the formation document',
    description:
      'Placeholder copy: submit the state filing with the required business details, then confirm expected processing times.',
  },
  {
    title: 'Set up your operating basics',
    description:
      'Placeholder copy: operating agreement, EIN, bank account, and compliance steps should be validated with real research before publishing.',
  },
];

const buildProsCons = (stateName: string) => ({
  pros: [
    `${stateName} can be a straightforward state for founders who want a simple domestic LLC setup.`,
    'The formation process is often easier to follow when you break it into a few clear steps.',
    'A good registered agent service can reduce admin friction if you do not want to manage everything yourself.',
  ],
  cons: [
    'State-specific compliance details can still create surprises if you only focus on the filing itself.',
    'Using a service raises your first-year cost above the bare state fee.',
    'Tax and ongoing compliance rules still need a state-specific review before you commit.',
  ],
});

const buildCostBreakdown = (stateName: string): CostBreakdownItem[] => [
  { item: 'Articles of Organization', cost: 'Research pending' },
  { item: 'Registered agent service', cost: 'Research pending' },
  { item: 'EIN', cost: 'Free' },
  { item: 'Operating agreement', cost: 'Free if you draft it yourself' },
  { item: `Total (DIY ${stateName} LLC)`, cost: 'Research pending', isEmphasized: true },
  { item: 'Total (with service)', cost: 'Research pending', isEmphasized: true },
];

const buildFaq = (stateName: string, agentTerm = 'registered agent'): FaqItem[] => [
  {
    question: `How much does it cost to start an LLC in ${stateName}?`,
    answer:
      'This placeholder answer should be replaced with the exact state filing fee, plus any realistic registered agent and compliance costs.',
  },
  {
    question: `How long does it take to get an ${stateName} LLC?`,
    answer:
      'This placeholder answer should be updated with standard processing times, any online filing advantages, and real expedited options if they exist.',
  },
  {
    question: `Do I need an operating agreement in ${stateName}?`,
    answer:
      'Even when a state does not require one to be filed, most LLC owners still want one to document ownership, management, and decision rules.',
  },
  {
    question: `What is a ${agentTerm} in ${stateName}?`,
    answer:
      'This placeholder answer should explain the in-state contact requirement, what documents the agent receives, and when a commercial service is worth paying for.',
  },
  {
    question: `Can I be my own ${agentTerm} in ${stateName}?`,
    answer:
      'This placeholder answer should cover the tradeoff between saving money and exposing your address or missing service-of-process documents during business hours.',
  },
];

export const buildDefaultState = ({ slug, name, abbreviation }: StateSeed): StateData => ({
  slug,
  name,
  abbreviation,
  contentStatus: 'placeholder',
  intro: `If you are starting an LLC in ${name}, this page should quickly answer the cost, timeline, and filing questions before pushing readers toward one clear next step.`,
  whatYoullNeed: `To form a ${name} LLC, you will need a unique business name, a registered agent, and the state filing fee. The total time and cost should be confirmed with current state guidance before publishing.`,
  closing: `If you are forming an LLC in ${name}, verify the current state filing details, then decide whether handling the agent role yourself is worth the tradeoff.`,
  inlineCtaDescription:
    'If you want privacy, a cleaner filing record, and less admin risk, this is where a clear default recommendation should go.',
  sidebarCtaDescription:
    'A professional registered agent can be worth the cost if you do not want your own address on file or you want more reliable document handling.',
  officialLinks: [],
  taxHighlights: [],
  comparisonRows: [],
  filingFee: 0,
  annualReportFee: null,
  stateTaxRate: 'Research pending',
  filingTime: 'Research pending',
  filingTimeShort: 'Research pending',
  expeditedTime: null,
  expeditedFee: null,
  filingAgency: `${name} Secretary of State`,
  filingAgencyUrl: 'https://example.com',
  agentTerm: 'registered agent',
  requiresOperatingAgreement: false,
  requiresPublication: slug === 'new-york',
  stateTax: 'Research pending',
  annualReportDue: 'Research pending',
  annualReportNote: 'Research pending',
  seoTitle: null,
  seoDescription: null,
  lastUpdated: null,
  steps: buildSteps(name),
  costBreakdown: buildCostBreakdown(name),
  faq: buildFaq(name),
  proscons: buildProsCons(name),
});

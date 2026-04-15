export type Step = {
  title: string;
  description: string;
};

export type CostBreakdownItem = {
  item: string;
  cost: string;
  isEmphasized?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StateData = {
  slug: string;
  name: string;
  abbreviation: string;
  contentStatus: 'placeholder' | 'ready';
  intro: string;
  whatYoullNeed: string;
  filingFee: number;
  annualReportFee: number | null;
  stateTaxRate: string;
  filingTime: string;
  expeditedTime: string | null;
  expeditedFee: number | null;
  filingAgency: string;
  filingAgencyUrl: string;
  agentTerm: string;
  requiresOperatingAgreement: boolean;
  requiresPublication: boolean;
  stateTax: string;
  annualReportDue: string;
  steps: Step[];
  costBreakdown: CostBreakdownItem[];
  faq: FaqItem[];
  proscons: { pros: string[]; cons: string[] };
};

type StateSeed = {
  slug: string;
  name: string;
  abbreviation: string;
};

const stateSeeds: StateSeed[] = [
  { slug: 'alabama', name: 'Alabama', abbreviation: 'AL' },
  { slug: 'alaska', name: 'Alaska', abbreviation: 'AK' },
  { slug: 'arizona', name: 'Arizona', abbreviation: 'AZ' },
  { slug: 'arkansas', name: 'Arkansas', abbreviation: 'AR' },
  { slug: 'california', name: 'California', abbreviation: 'CA' },
  { slug: 'colorado', name: 'Colorado', abbreviation: 'CO' },
  { slug: 'connecticut', name: 'Connecticut', abbreviation: 'CT' },
  { slug: 'delaware', name: 'Delaware', abbreviation: 'DE' },
  { slug: 'florida', name: 'Florida', abbreviation: 'FL' },
  { slug: 'georgia', name: 'Georgia', abbreviation: 'GA' },
  { slug: 'hawaii', name: 'Hawaii', abbreviation: 'HI' },
  { slug: 'idaho', name: 'Idaho', abbreviation: 'ID' },
  { slug: 'illinois', name: 'Illinois', abbreviation: 'IL' },
  { slug: 'indiana', name: 'Indiana', abbreviation: 'IN' },
  { slug: 'iowa', name: 'Iowa', abbreviation: 'IA' },
  { slug: 'kansas', name: 'Kansas', abbreviation: 'KS' },
  { slug: 'kentucky', name: 'Kentucky', abbreviation: 'KY' },
  { slug: 'louisiana', name: 'Louisiana', abbreviation: 'LA' },
  { slug: 'maine', name: 'Maine', abbreviation: 'ME' },
  { slug: 'maryland', name: 'Maryland', abbreviation: 'MD' },
  { slug: 'massachusetts', name: 'Massachusetts', abbreviation: 'MA' },
  { slug: 'michigan', name: 'Michigan', abbreviation: 'MI' },
  { slug: 'minnesota', name: 'Minnesota', abbreviation: 'MN' },
  { slug: 'mississippi', name: 'Mississippi', abbreviation: 'MS' },
  { slug: 'missouri', name: 'Missouri', abbreviation: 'MO' },
  { slug: 'montana', name: 'Montana', abbreviation: 'MT' },
  { slug: 'nebraska', name: 'Nebraska', abbreviation: 'NE' },
  { slug: 'nevada', name: 'Nevada', abbreviation: 'NV' },
  { slug: 'new-hampshire', name: 'New Hampshire', abbreviation: 'NH' },
  { slug: 'new-jersey', name: 'New Jersey', abbreviation: 'NJ' },
  { slug: 'new-mexico', name: 'New Mexico', abbreviation: 'NM' },
  { slug: 'new-york', name: 'New York', abbreviation: 'NY' },
  { slug: 'north-carolina', name: 'North Carolina', abbreviation: 'NC' },
  { slug: 'north-dakota', name: 'North Dakota', abbreviation: 'ND' },
  { slug: 'ohio', name: 'Ohio', abbreviation: 'OH' },
  { slug: 'oklahoma', name: 'Oklahoma', abbreviation: 'OK' },
  { slug: 'oregon', name: 'Oregon', abbreviation: 'OR' },
  { slug: 'pennsylvania', name: 'Pennsylvania', abbreviation: 'PA' },
  { slug: 'rhode-island', name: 'Rhode Island', abbreviation: 'RI' },
  { slug: 'south-carolina', name: 'South Carolina', abbreviation: 'SC' },
  { slug: 'south-dakota', name: 'South Dakota', abbreviation: 'SD' },
  { slug: 'tennessee', name: 'Tennessee', abbreviation: 'TN' },
  { slug: 'texas', name: 'Texas', abbreviation: 'TX' },
  { slug: 'utah', name: 'Utah', abbreviation: 'UT' },
  { slug: 'vermont', name: 'Vermont', abbreviation: 'VT' },
  { slug: 'virginia', name: 'Virginia', abbreviation: 'VA' },
  { slug: 'washington', name: 'Washington', abbreviation: 'WA' },
  { slug: 'west-virginia', name: 'West Virginia', abbreviation: 'WV' },
  { slug: 'wisconsin', name: 'Wisconsin', abbreviation: 'WI' },
  { slug: 'wyoming', name: 'Wyoming', abbreviation: 'WY' },
];

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

const buildDefaultState = ({ slug, name, abbreviation }: StateSeed): StateData => ({
  slug,
  name,
  abbreviation,
  contentStatus: 'placeholder',
  intro: `If you are starting an LLC in ${name}, this page should quickly answer the cost, timeline, and filing questions before pushing readers toward one clear next step.`,
  whatYoullNeed: `To form a ${name} LLC, you will need a unique business name, a registered agent, and the state filing fee. The total time and cost should be confirmed with current state guidance before publishing.`,
  filingFee: 0,
  annualReportFee: null,
  stateTaxRate: 'Research pending',
  filingTime: 'Research pending',
  expeditedTime: null,
  expeditedFee: null,
  filingAgency: `${name} Secretary of State`,
  filingAgencyUrl: 'https://example.com',
  agentTerm: 'registered agent',
  requiresOperatingAgreement: false,
  requiresPublication: slug === 'new-york',
  stateTax: 'Research pending',
  annualReportDue: 'Research pending',
  steps: buildSteps(name),
  costBreakdown: buildCostBreakdown(name),
  faq: buildFaq(name),
  proscons: buildProsCons(name),
});

export const states: StateData[] = stateSeeds.map((stateSeed) => {
  if (stateSeed.slug !== 'ohio') {
    return buildDefaultState(stateSeed);
  }

  return {
    ...buildDefaultState(stateSeed),
    intro:
      'If you want to start an LLC in Ohio, the main questions are cost, filing speed, and whether you should use a service or file it yourself. This draft gives you the skeleton of that decision page.',
    whatYoullNeed:
      "To form an Ohio LLC, you'll need a unique business name, a statutory agent (Ohio's term for registered agent), and $99 for the filing fee. The whole process takes about 30 minutes online.",
    filingFee: 99,
    filingTime: '3 to 7 business days',
    expeditedTime: 'Same day or next day, depending on filing option',
    expeditedFee: 100,
    filingAgencyUrl: 'https://www.ohiosos.gov/businesses/',
    agentTerm: 'statutory agent',
    stateTaxRate: 'Commercial activity tax can apply at higher revenue levels.',
    stateTax: 'Federal pass-through treatment is common, but Ohio-specific taxes still need review.',
    annualReportDue: 'Ohio domestic LLCs generally do not file a recurring annual report.',
    requiresOperatingAgreement: false,
    costBreakdown: [
      { item: 'Articles of Organization', cost: '$99' },
      { item: 'Statutory agent service', cost: '$100-$149/yr' },
      { item: 'EIN', cost: 'Free' },
      { item: 'Operating agreement', cost: 'Free if you draft it yourself' },
      { item: 'Total (DIY)', cost: '$99', isEmphasized: true },
      { item: 'Total (with service)', cost: '$199-$248', isEmphasized: true },
    ],
    faq: [
      {
        question: 'How much does it cost to start an LLC in Ohio?',
        answer:
          'The Ohio filing fee is $99. If you also pay for a commercial statutory agent, expect your first-year out-of-pocket cost to be materially higher than the state fee alone.',
      },
      {
        question: 'How long does it take to get an Ohio LLC?',
        answer:
          'Standard processing is typically measured in business days, and Ohio also offers faster processing for an additional fee. Confirm the current timelines before publishing a final version of this page.',
      },
      {
        question: 'Do I need an operating agreement in Ohio?',
        answer:
          'Ohio does not require you to file an operating agreement with the state, but most LLC owners should still have one to document ownership and decision-making rules.',
      },
      {
        question: 'What is a statutory agent in Ohio?',
        answer:
          'Ohio uses the term statutory agent instead of registered agent. This person or service receives legal and state documents for your LLC at a reliable in-state address.',
      },
      {
        question: 'Can I be my own statutory agent in Ohio?',
        answer:
          'Often yes, but the tradeoff is privacy and reliability. If you do not want your address tied to the business or you want help staying organized, a paid service can still make sense.',
      },
      {
        question: 'Does Ohio require an annual report for an LLC?',
        answer:
          'Ohio domestic LLCs generally do not have the same recurring annual report burden that many other states impose, which is one reason the state can feel simpler operationally.',
      },
    ],
    proscons: {
      pros: [
        'Ohio has a relatively simple filing process compared with states that add publication rules or recurring report friction.',
        'The state filing fee is easy to understand, which makes the total cost clearer for first-time founders.',
        'If you want a mainstream home-state LLC, Ohio is usually easier to explain than exotic-state alternatives.',
      ],
      cons: [
        'Paying for a statutory agent service pushes your first-year cost above the headline state fee.',
        'Ohio-specific tax questions can still matter once revenue grows.',
        'If privacy is your top priority, using your own address may not be the best fit.',
      ],
    },
  };
});

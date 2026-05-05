import { affiliates } from './affiliates';

export type UpsellLevel = 'None' | 'Light' | 'Heavy';

export type ComparedService = {
  name: string;
  shortName: string;
  yearOneTotal: number;
  yearTwoTotal: number;
  headlinePrice: string;
  registeredAgentIncluded: boolean;
  registeredAgentCost: string;
  registeredAgentRenewal: string;
  processingSpeed: string;
  upsellLevel: UpsellLevel;
  privacyProtection: boolean;
  bestFor: string;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  lastVerified: string;
};

export type ComparisonFaqItem = {
  question: string;
  answer: string;
};

export type DetailedComparisonRow = {
  feature: string;
  serviceA: string;
  serviceB: string;
  isTotal?: boolean;
};

export type ComparisonPoint = {
  heading: string;
  body: string;
};

export type RelatedGuide = {
  href: string;
  label: string;
  description: string;
};

export type ResearchSource = {
  label: string;
  url: string;
};

export type ServiceComparison = {
  slug: string;
  serviceA: ComparedService;
  serviceB: ComparedService;
  winner: 'A' | 'B';
  winnerReason: string;
  editorial: {
    intro: string;
    verdict: string;
    onlyPickB: string;
    faq: ComparisonFaqItem[];
    whyWinnerWins: string[];
    costNarrative: string[];
    finalVerdict: string;
  };
  meta: {
    title: string;
    description: string;
    primaryKeyword: string;
    h1: string;
    lastUpdated: string;
  };
  methodology: {
    lastResearched: string;
    summary: string;
    notes: string[];
    sources: ResearchSource[];
  };
  detailedRows: DetailedComparisonRow[];
  winnerAdvantages: ComparisonPoint[];
  loserAdvantages: ComparisonPoint[];
  relatedGuides: RelatedGuide[];
};

const disclosure =
  'LLCAtlas may earn a commission if you click a partner link and purchase a service. This does not change our editorial stance.';

export const affiliateDisclosure = disclosure;

export const comparisons: ServiceComparison[] = [
  {
    slug: 'northwest-vs-legalzoom',
    serviceA: {
      name: 'Northwest Registered Agent',
      shortName: 'Northwest',
      yearOneTotal: 39,
      yearTwoTotal: 125,
      headlinePrice: '$39 + state fee',
      registeredAgentIncluded: true,
      registeredAgentCost: 'Included free for year 1 on first formation',
      registeredAgentRenewal: '$125/yr',
      processingSpeed: 'Same-day internal filing',
      upsellLevel: 'Light',
      privacyProtection: true,
      bestFor: 'Founders who want privacy, flat pricing, and a low-pressure checkout.',
      pros: [
        'First year of registered agent service is included with the first $39 formation package.',
        'Operating agreement template, annual report reminders, name check, and Privacy by Default are included.',
        'Registered agent renewal is $125 per year, far below LegalZoom\'s $249 per year.',
        'Same-day internal filing during business hours, with state expedite fees passed through at cost.',
        'Reviewers consistently describe the checkout as minimal, opt-in, and not built around pre-checked upsells.',
      ],
      cons: [
        'EIN filing is extra: $50 for US SSN/ITIN holders and $200 for non-US residents without SSN/ITIN.',
        'Business Identity is partly trial-based: hosting, email, and phone each become $9/month after 90 days unless cancelled.',
        'The $39 formation price and free first-year registered agent apply to the first LLC per account; additional formations cost $100 plus state fee, and registered agent service is $125/year per entity.',
        'Refunds are unlikely if state filing or registered agent service has already been performed, and state filing fees are never refundable.',
      ],
      affiliateUrl: affiliates.northwest,
      lastVerified: '2026-05-01',
    },
    serviceB: {
      name: 'LegalZoom',
      shortName: 'LegalZoom',
      yearOneTotal: 427,
      yearTwoTotal: 249,
      headlinePrice: '$0 + state fee',
      registeredAgentIncluded: false,
      registeredAgentCost: '$249/yr',
      registeredAgentRenewal: '$249/yr',
      processingSpeed: 'Basic: 5-14 business days',
      upsellLevel: 'Heavy',
      privacyProtection: false,
      bestFor: 'Founders who want a broad legal-services platform and may use attorney, trademark, or estate-planning products.',
      pros: [
        'Very recognizable national brand with large review volume.',
        'Basic filing starts at $0 before state fees and add-ons.',
        'Offers broad legal services beyond formation, including trademark, copyright, patent, attorney plans, wills, trusts, and other documents.',
        'Has a published 60-day LegalZoom satisfaction guarantee with limits before agency submission.',
        'Phone and chat support are available seven days a week.',
      ],
      cons: [
        'Registered agent service is never included in any LLC formation tier and costs $249 per year.',
        'Equivalent Basic setup with EIN, operating agreement, and registered agent costs $427 plus the state fee.',
        'Pro and Premium include trial subscriptions that auto-renew unless cancelled.',
        'Multiple 2024-2026 reviews and BBB complaints cite surprise charges, cancellation friction, and refund disputes.',
        'Standard Basic processing is slower than Northwest\'s same-day internal filing.',
      ],
      affiliateUrl: affiliates.legalzoom,
      lastVerified: '2026-05-01',
    },
    winner: 'A',
    winnerReason:
      'Northwest costs less across year one and year two, includes registered agent service for the first year, and keeps privacy in the base package instead of selling it as a $249 add-on.',
    editorial: {
      intro:
        'Northwest and LegalZoom can both form an LLC in all 50 states. The difference is the real bill after the headline price. Northwest charges $39 and includes the first year of registered agent service; LegalZoom advertises $0, then charges $249 per year for the registered agent alone.',
      verdict:
        'Northwest is the better pick for most first-time founders. You pay $39 plus the state fee, get the first year of registered agent service included, get an operating agreement template and annual report reminders, and avoid the most aggressive parts of the LLC formation checkout game. LegalZoom is a bigger legal-services platform, but for a basic LLC formation its pricing only looks cheap until you add the registered agent, operating agreement, EIN, and auto-renewing subscriptions it tries to sell around the filing.',
      onlyPickB:
        'Pick LegalZoom if you need attorney consultations, trademark or patent work through LegalZoom\'s in-house legal-services arm, or one account for both business and personal legal documents. For basic LLC formation alone, Northwest is the better deal.',
      whyWinnerWins: [
        'The real cost difference is not close. Northwest is $39 plus the state filing fee with registered agent service included for the first year. LegalZoom Basic is $0 plus the state fee, but matching the practical bundle many founders need means adding registered agent service at $249, an operating agreement at $99, and EIN filing at $79. That puts LegalZoom at $427 plus the state fee before any optional subscriptions.',
        'The checkout experience also points to Northwest. Independent 2026 walkthroughs describe Northwest\'s add-ons as passive opt-in choices, with no pre-checked boxes and little pressure. LegalZoom is repeatedly described as more aggressive, with sequential upsell screens for registered agent service, EIN filing, operating agreement documents, business licenses, expedited processing, compliance subscriptions, and partner products.',
        'What is included matters. Northwest includes articles filing, name availability check, the operating agreement template, annual report reminders, limited mail scanning, first-year registered agent service, and Privacy by Default. LegalZoom Basic includes the filing, name check, digital welcome packet, tax consult, insurance quote, and a specialist consultation, but it does not include the registered agent, operating agreement, or EIN.',
        'Privacy is the cleanest reason to choose Northwest. Northwest uses its address on public state filings wherever state law allows and says it does not sell customer data. LegalZoom can provide registered agent privacy, but only if you buy the $249-per-year registered agent add-on, and the LLC\'s principal or business address may still be required depending on the state.',
      ],
      costNarrative: [
        'If you go with Northwest, here is what you actually pay before the state fee: $39 for your first formation. That includes the articles filing, name check, operating agreement template, annual report reminders, limited mail scanning, Privacy by Default, and your first year of registered agent service. EIN filing is optional: $50 for US SSN/ITIN holders or $200 for non-US residents without SSN/ITIN.',
        'In year two, the Northwest service cost to plan around is the registered agent renewal: $125 per year. Northwest publicly describes that registered agent rate as fixed. Your state may also charge annual report, franchise tax, or other state-level fees, but those are separate from Northwest\'s service price.',
        'Northwest\'s Business Identity bundle needs a closer read. The domain is free for one year up to a $25 retail value, and the website builder plus SSL stay free while registered agent service is active. Web hosting, business email, and phone service are 90-day trials that become $9 per month each unless cancelled before day 90.',
        'If you form multiple LLCs, do not assume the same $39 plus free registered agent math repeats. The confirmed policy is $39 plus state fee with free first-year registered agent service for the first LLC per account. Additional LLCs cost $100 plus the state fee, and registered agent service is $125 per year per entity.',
        'With LegalZoom, the Basic package is $0 plus the state fee. That sounds cheaper until you add what Northwest already includes. Registered agent service is $249 per year, operating agreement is $99 on Basic, and EIN filing is $79. That makes the comparable Basic-plus-add-ons path $427 plus the state fee.',
        'LegalZoom Pro is not cheaper once you add privacy. Pro costs $249 plus the state fee and includes the operating agreement and EIN, but registered agent service is still another $249 per year. That puts Pro plus registered agent at $498 plus the state fee before any trial subscriptions renew.',
        'The year-two gap keeps going. Northwest\'s registered agent renewal is $125. LegalZoom\'s registered agent renewal is $249, auto-renew enabled by default. If a founder forgets to cancel Pro or Premium trials, LegalZoom can also add the Business Attorney Plan at $49 per month and LZ Books at $9.99 per month.',
      ],
      finalVerdict:
        'Northwest is the better choice for most people comparing these two services. LegalZoom is the bigger brand and the broader legal platform, but Northwest is cheaper, faster on internal filing, stronger on privacy, and much calmer at checkout for a basic LLC.',
      faq: [
        {
          question: 'Is Northwest cheaper than LegalZoom?',
          answer:
            'Yes, in nearly every realistic LLC formation scenario. Northwest is $39 plus the state fee with registered agent service included for the first year. LegalZoom Basic is $0 plus the state fee, but an equivalent setup with registered agent service, operating agreement, and EIN costs $427 plus the state fee. Year two is $125 for Northwest registered agent renewal versus $249 for LegalZoom.',
        },
        {
          question: 'Is LegalZoom worth the extra cost?',
          answer:
            'Only if you will actually use the services that justify the premium: attorney consultations, attorney-led trademark work, bookkeeping, or combined personal and business legal documents. For LLC formation alone, the product is comparable but the real price is much higher.',
        },
        {
          question: 'Does Northwest include a registered agent for free?',
          answer:
            'Yes, for the first formation per account. Northwest includes the first year of registered agent service with its $39 first-formation package. Additional LLCs cost $100 plus the state fee, and registered agent service must be added at $125 per year per entity. Northwest support may occasionally honor free first-year registered agent service on a second formation as a goodwill exception, but that is not the published policy.',
        },
        {
          question: 'Does LegalZoom include a registered agent for free?',
          answer:
            'No. LegalZoom does not include registered agent service in Basic, Pro, or Premium. It is a separate purchase at $249 per year, with auto-renew enabled by default.',
        },
        {
          question: 'Which has better customer support?',
          answer:
            'Northwest wins on support quality in most review patterns. Reviewers consistently praise its Corporate Guides and direct phone support. LegalZoom wins on hours because it offers phone and chat support seven days a week, but reviews are more mixed and include complaints about hold times, offshore call centers, refund disputes, and inconsistent agent quality.',
        },
        {
          question: 'Which is faster at processing?',
          answer:
            'Northwest is faster on the internal processing step. Northwest files same business day for orders submitted during business hours, with state expedite fees passed through at cost. LegalZoom Basic is usually cited at 5-14 business days internally, with some reviewers citing up to 30 business days, and expedited internal handling costs extra. Final approval still depends on the state for both.',
        },
        {
          question: 'Can I switch from LegalZoom to Northwest?',
          answer:
            'Yes. You can switch registered agents by filing a Change of Registered Agent form with your Secretary of State. Northwest publicly offers a change registered agent service and says it pays the state filing fee to switch your agent on record. LegalZoom also says it will pay state fees to switch to LegalZoom. You do not need to dissolve and re-form the LLC.',
        },
        {
          question: 'Do both work in all 50 states?',
          answer:
            'Yes. Both Northwest and LegalZoom form LLCs and provide registered agent service in all 50 states plus the District of Columbia. Northwest also advertises service in Puerto Rico and Guam and maintains physical offices in every state.',
        },
        {
          question: 'Which has fewer upsells during checkout?',
          answer:
            'Northwest, by a wide margin. Independent 2026 reviewers describe Northwest as having no upsells or minimal opt-in add-ons. LegalZoom is repeatedly described as having a multi-page upsell flow, including registered agent service, EIN filing, operating agreement, license reports, expedited processing, compliance subscriptions, and auto-renewing trial subscriptions in Pro and Premium.',
        },
        {
          question: 'Is LegalZoom more trustworthy because it is a bigger brand?',
          answer:
            'Not by itself. LegalZoom has far more reviews and a higher Trustpilot average in this research set, but it also has a longer documented history of complaints about surprise charges, auto-renewals, cancellation friction, filing errors, and past unauthorized-practice-of-law class actions. Both companies have A+ BBB ratings. Bigger brand means broader reach, not automatically better value.',
        },
      ],
    },
    meta: {
      title: 'Northwest Registered Agent vs LegalZoom (2026) — Honest Comparison | LLCAtlas',
      description:
        'Northwest Registered Agent vs LegalZoom: Northwest is $39 with a free registered agent year one. LegalZoom can cost $427 for a similar setup.',
      primaryKeyword: 'northwest registered agent vs legalzoom',
      h1: 'Northwest Registered Agent vs LegalZoom (2026)',
      lastUpdated: '2026-05-01',
    },
    methodology: {
      lastResearched: '2026-05-01',
      summary:
        'We compared the real cost a first-time founder would pay for LLC formation, registered agent service, operating agreement access, EIN filing, renewal pricing, checkout pressure, privacy, support, refund terms, and documented complaint patterns.',
      notes: [
        'We rank by real year-one and year-two cost, not teaser pricing.',
        'We treat registered agent service as part of the realistic bundle because it is the main privacy feature most home-based founders need.',
        'We separate basic LLC formation value from broader legal-service ecosystems, because trademarks, attorney plans, and estate documents are useful only for narrower cases.',
        'Affiliate relationships do not change the recommendation. LegalZoom gets credit where it is stronger, especially breadth of legal services, support hours, and its named refund window.',
      ],
      sources: [
        {
          label: 'Northwest LLC cost page',
          url: 'https://www.northwestregisteredagent.com/llc/cost',
        },
        {
          label: 'Northwest registered agent service',
          url: 'https://www.northwestregisteredagent.com/registered-agent',
        },
        {
          label: 'LegalZoom LLC overview',
          url: 'https://www.legalzoom.com/business/business-formation/llc-overview.html',
        },
        {
          label: 'LegalZoom registered agent overview',
          url: 'https://www.legalzoom.com/business/business-operations/registered-agent-overview.html',
        },
        {
          label: 'LegalZoom satisfaction guarantee',
          url: 'https://www.legalzoom.com/legal/general-terms/lz-guarantee',
        },
        {
          label: 'Northwest Trustpilot reviews',
          url: 'https://www.trustpilot.com/review/www.northwestregisteredagent.com',
        },
        {
          label: 'LegalZoom Trustpilot reviews',
          url: 'https://www.trustpilot.com/review/www.legalzoom.com',
        },
      ],
    },
    detailedRows: [
      { feature: 'Formation price (cheapest tier)', serviceA: '$39 + state fee', serviceB: '$0 + state fee' },
      { feature: 'Formation price (recommended tier)', serviceA: '$39 + state fee', serviceB: '$498 + state fee for Pro + registered agent' },
      { feature: 'Registered agent year 1', serviceA: 'Included free for first formation per account; additional LLCs need RA at $125/yr per entity', serviceB: '$249/yr extra; never bundled in any tier' },
      { feature: 'Registered agent renewal', serviceA: '$125/yr, advertised as fixed', serviceB: '$249/yr per state, auto-renew on by default' },
      { feature: 'EIN filing', serviceA: '$50 add-on for US SSN/ITIN holders; $200 for non-US residents without SSN/ITIN', serviceB: '$79 add-on on Basic; included in Pro and Premium' },
      { feature: 'Operating agreement template', serviceA: 'Included in $39 package', serviceB: '$99 add-on on Basic; included in Pro and Premium' },
      { feature: 'Compliance alerts', serviceA: 'Annual report reminders included free; annual report filing is $100 + state fee', serviceB: 'Compliance Calendar with RA; Compliance Filings subscription is $199/yr + state fees' },
      { feature: 'Business identity tools', serviceA: 'Domain free 1 year up to $25 value; website builder + SSL free while RA active; hosting, email, and phone are 90-day trials, then $9/mo each unless cancelled', serviceB: 'Wix-powered website in Pro/Premium; bookkeeping app trial in Premium; other business tools sold separately or through partners' },
      { feature: 'Customer support', serviceA: 'Phone and email during business hours; Corporate Guides support model; 24/7 chatbot for self-help', serviceB: 'Phone and chat 7 days/week; no email support promoted as primary' },
      { feature: 'Money-back guarantee', serviceA: '90-day refund policy. Per Terms of Service: all purchases final and non-refundable after 90 days. State filing fees are never refundable. Refunds are at Northwest\'s discretion if service has already been performed, including if registered agent mail was received or state filing completed. Cancel via client portal or 509-768-2249.', serviceB: '60-day refund for filed products before agency submission; subscription refunds within 30 days if conditions are met' },
      { feature: 'Online dashboard', serviceA: 'Yes: mail scans, documents, account management; mobile-friendly browser, no native app', serviceB: 'Yes: dashboard plus iOS and Android mobile app' },
      { feature: 'Additional legal services', serviceA: 'Limited: attorney-assisted trademark service, free legal forms library, Law on Call only in AZ and UT', serviceB: 'Extensive: trademark, copyright, provisional patent, attorney consultations, estate planning, DBA, dissolution, 150+ templates' },
      { feature: 'Additional tax services', serviceA: 'None first-party; no in-house tax service', serviceB: 'Tax consult through 1-800Accountant partner and LZ Tax subscription services' },
      { feature: 'Real year-1 total', serviceA: '$39 + state fee; about $169 all-in in a $130-fee state', serviceB: '$427 + state fee for Basic + EIN + operating agreement + registered agent; $498 + state fee for Pro + registered agent', isTotal: true },
      { feature: 'Real year-2 total', serviceA: '$125', serviceB: '$249', isTotal: true },
    ],
    winnerAdvantages: [
      {
        heading: 'Northwest gives you the privacy piece up front',
        body:
          'Northwest includes first-year registered agent service and uses its address on public filings wherever state law allows. That matters for home-based founders who do not want their home address sitting in a state database. LegalZoom can offer registered agent privacy too, but only after you add $249 per year.',
      },
      {
        heading: 'The two-year cost is much lower',
        body:
          'Northwest costs $39 in year one and $125 for registered agent renewal in year two, before state fees. LegalZoom costs $427 in year one if you build Basic into an equivalent package, or $498 if you choose Pro and add registered agent service. Year two is still $249 for the LegalZoom registered agent alone.',
      },
      {
        heading: 'The checkout is less exhausting',
        body:
          'Northwest presents add-ons as optional checkboxes and reviewers repeatedly describe the flow as minimal. LegalZoom runs a heavier sales path with registered agent, EIN, operating agreement, license, compliance, expedite, banking, website, and subscription offers. A nervous founder should not have to fight the checkout to buy a simple filing.',
      },
      {
        heading: 'Internal filing is faster by default',
        body:
          'Northwest files same business day during business hours at no internal surcharge. LegalZoom Basic is commonly cited at 5-14 business days before state processing, and internal expedited handling costs extra. The state still controls final approval, but Northwest moves its part faster.',
      },
    ],
    loserAdvantages: [
      {
        heading: 'LegalZoom has the broader legal platform',
        body:
          'LegalZoom is not just an LLC formation service. It sells trademark, copyright, patent, attorney consultation, estate planning, business document, and bookkeeping products under one brand. If you actually need that platform, the extra cost may be easier to justify.',
      },
      {
        heading: 'LegalZoom has longer support hours and a named refund window',
        body:
          'LegalZoom offers phone and chat support seven days a week, which Northwest does not match. It also publishes a 60-day LegalZoom guarantee, although the refund terms are limited once a filing has been submitted to the agency.',
      },
    ],
    relatedGuides: [
      {
        href: '/best-llc-services/',
        label: 'See our full comparison of all LLC services',
        description: 'Compare Northwest, Bizee, ZenBusiness, LegalZoom, and the real year-one cost of each.',
      },
      {
        href: '/llc/wyoming/',
        label: 'Ready to form? Start with the Wyoming LLC guide',
        description: 'Check state fees, annual costs, and filing steps before you pay a service.',
      },
      {
        href: '/llc/ohio/',
        label: 'Ready to form? Start with the Ohio LLC guide',
        description: 'Use the state guide first if you want to understand the filing before choosing a service.',
      },
      {
        href: '/llc/washington/',
        label: 'Ready to form? Start with the Washington LLC guide',
        description: 'Review the state-specific filing rules before you buy formation help.',
      },
    ],
  },
];

export const comparisonBySlug = new Map(comparisons.map((comparison) => [comparison.slug, comparison]));

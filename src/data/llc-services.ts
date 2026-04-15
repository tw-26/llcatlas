export type IncludedFeatureMap = {
  formationFiling: string;
  registeredAgent: string;
  operatingAgreement: string;
  ein: string;
};

export type UpsellItem = {
  label: string;
  cost: string;
  notes: string;
};

export type LlcService = {
  slug: string;
  name: string;
  headlinePrice: number;
  headlinePriceLabel: string;
  advertisedPriceNote: string;
  registeredAgentFirstYear: number;
  registeredAgentLabel: string;
  registeredAgentRenewal: number;
  registeredAgentRenewalLabel: string;
  processingTime: string;
  bestFor: string;
  checkoutExperience: 'None' | 'Some' | 'Heavy';
  oneLineVerdict: string;
  tableVerdict: string;
  rankingSummary: string;
  realYearOneTotal: number;
  realYearOneTotalLabel: string;
  includedFeatures: IncludedFeatureMap;
  commonUpsells: UpsellItem[];
  pros: string[];
  cons: string[];
  ourTake: string[];
  supportTake: string;
  privacyTake: string;
  ctaLabel: string;
  affiliateUrl: string;
  sources: string[];
};

export type ServiceComparison = {
  id: string;
  title: string;
  winner: string;
  providerSlugs: [string, string];
  paragraphs: string[];
};

export type ChoiceRecommendation = {
  prompt: string;
  recommendation: string;
  details: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const llcServicesLastUpdated = 'April 2026';

export const llcServiceMethodology = [
  'We compare real year-one cost, not the teaser price. That means the formation fee plus a registered agent if the entry package does not include one.',
  'We do not count optional extras like EIN filing, operating agreement templates, attorney subscriptions, bookkeeping, or branded website tools unless the provider bundles them into the cheapest path.',
  'When a provider shows conflicting official prices on different public pages, we use the lowest public official price we could verify and disclose the conflict in the review.',
  'Support quality, privacy, and upsell pressure are editorial judgments based on the public sales flow and the provider feature pages, not legal guarantees.',
] as const;

export const llcServices: LlcService[] = [
  {
    slug: 'bizee',
    name: 'Bizee',
    headlinePrice: 0,
    headlinePriceLabel: '$0 + state fee',
    advertisedPriceNote:
      'Bizee advertises a free LLC filing tier and currently says each formation package includes one free year of registered agent service.',
    registeredAgentFirstYear: 0,
    registeredAgentLabel: 'Included free for year 1',
    registeredAgentRenewal: 119,
    registeredAgentRenewalLabel: '$119/yr after year 1',
    processingTime: 'Varies by state and checkout selections',
    bestFor: 'Founders who care most about year-one cost',
    checkoutExperience: 'Heavy',
    oneLineVerdict: 'The cheapest real year-one option we could verify, but not the cleanest buying experience.',
    tableVerdict: 'Cheapest real year-one cost',
    rankingSummary:
      'Bizee ranks first on pure math because the entry plan is $0 and the first year of registered agent service is currently included.',
    realYearOneTotal: 0,
    realYearOneTotalLabel: '$0 + state fee',
    includedFeatures: {
      formationFiling: 'Yes',
      registeredAgent: 'Yes, first year included',
      operatingAgreement: 'No on the Basic plan',
      ein: 'No on the Basic plan',
    },
    commonUpsells: [
      {
        label: 'Registered agent renewal',
        cost: '$119/yr',
        notes: 'Kicks in after the free first year if you keep the service.',
      },
      {
        label: 'Standard plan upgrade',
        cost: '$199 + state fee',
        notes: 'Adds EIN, operating agreement, and organizational documents.',
      },
      {
        label: 'Premium plan upgrade',
        cost: '$299 + state fee',
        notes: 'Adds more templates and faster handling, but is not required for most founders.',
      },
    ],
    pros: [
      'Lowest verified year-one total in this group.',
      'First-year registered agent service is currently bundled with formation.',
      'Stand-alone registered agent renewal is cheaper than ZenBusiness or LegalZoom.',
    ],
    cons: [
      'The sales flow still leans hard on upgrades.',
      'The free plan keeps only the bare minimum included.',
      'If you hate checkout friction, Northwest is easier to trust.',
    ],
    ourTake: [
      'If you want the cheapest legally complete path and you are willing to say no to the upsells, Bizee currently wins on the numbers.',
      'That said, this is not the service we would send to someone who wants the calmest checkout or the strongest privacy-first positioning. It is the best cost play, not the cleanest experience.',
    ],
    supportTake:
      'Bizee positions itself as experienced and national, but its real advantage here is price, not a cleaner support story than Northwest.',
    privacyTake:
      'The free first-year registered agent offer helps keep your home address off the filing, which is meaningful for home-based owners.',
    ctaLabel: 'Start with Bizee',
    // -- T# TODO: Replace this placeholder with your real Bizee affiliate link.
    affiliateUrl: 'https://example.com/affiliate/bizee',
    sources: [
      'https://bizee.com/limited-liability-company/',
      'https://bizee.com/business-management/registered-agent',
    ],
  },
  {
    slug: 'northwest',
    name: 'Northwest Registered Agent',
    headlinePrice: 39,
    headlinePriceLabel: '$39 + state fee',
    advertisedPriceNote:
      'Northwest currently shows a $39 promo page and a separate package page starting at $49. Both public pages say the first year of registered agent service is included.',
    registeredAgentFirstYear: 0,
    registeredAgentLabel: 'Included for 1 year',
    registeredAgentRenewal: 125,
    registeredAgentRenewalLabel: '$125/yr after year 1',
    processingTime: 'Standard by default; same-day only on Premium',
    bestFor: 'People who want the least hassle and strongest privacy pitch',
    checkoutExperience: 'None',
    oneLineVerdict: 'Still the cleanest premium-feeling option, even though it is no longer the cheapest on raw year-one cost.',
    tableVerdict: 'Best low-hassle paid option',
    rankingSummary:
      'Northwest lands just behind Bizee on pure first-year cost, but it remains the easiest provider here to recommend for people who value privacy and a cleaner checkout over the absolute lowest price.',
    realYearOneTotal: 39,
    realYearOneTotalLabel: '$39 + state fee',
    includedFeatures: {
      formationFiling: 'Yes',
      registeredAgent: 'Yes, first year included',
      operatingAgreement: 'No on the cheapest tier',
      ein: 'No on the cheapest tier',
    },
    commonUpsells: [
      {
        label: 'Registered agent renewal',
        cost: '$125/yr',
        notes: 'Auto-renews after 365 days unless you cancel.',
      },
      {
        label: 'Deluxe plan',
        cost: '$149 + state fee',
        notes: 'Adds EIN and operating agreement.',
      },
      {
        label: 'Premium plan',
        cost: '$199 + state fee',
        notes: 'Adds same-day processing plus the Deluxe items.',
      },
    ],
    pros: [
      'One year of registered agent service is bundled with formation.',
      'Public pricing pages are unusually straightforward compared with the rest of the market.',
      'Strong privacy-first positioning and real-human support are still the main reasons people choose Northwest.',
    ],
    cons: [
      'No longer the cheapest year-one option if Bizee keeps the free registered agent bundle.',
      'Official public pricing is split between a $39 promo page and a $49 package page.',
      'EIN and operating agreement are still paid upgrades on the cheapest tier.',
    ],
    ourTake: [
      'Northwest is the service we would pick for a family member who wants fewer sales games and does not mind paying a little more than the absolute floor.',
      'The only reason it is not ranked first on this page is your year-one cost rule. On the qualitative side, it is still the easiest company here to trust.',
    ],
    supportTake:
      'Northwest still has the strongest support positioning in this set, with its Corporate Guides branding and an unusually direct customer-service pitch.',
    privacyTake:
      'Privacy is the core reason Northwest keeps showing up in LLC conversations. They explicitly sell the idea that their address goes on the public filing instead of yours.',
    ctaLabel: 'Start with Northwest',
    // -- T# TODO: Replace this placeholder with your real Northwest affiliate link.
    affiliateUrl: 'https://example.com/affiliate/northwest',
    sources: [
      'https://www.northwestregisteredagent.com/39-nw-llc-offer',
      'https://www.northwestregisteredagent.com/how-to-start-an-llc-packages?sst=CA&e=LLC',
    ],
  },
  {
    slug: 'zenbusiness',
    name: 'ZenBusiness',
    headlinePrice: 0,
    headlinePriceLabel: '$0 + state fee',
    advertisedPriceNote:
      'ZenBusiness still advertises a $0 Starter package, but the Starter plan does not include a registered agent. The first year of registered agent service is currently $99, then $199/yr.',
    registeredAgentFirstYear: 99,
    registeredAgentLabel: '$99 for year 1 on Starter',
    registeredAgentRenewal: 199,
    registeredAgentRenewalLabel: '$199/yr renewal',
    processingTime: '7-10 business days on Starter',
    bestFor: 'Budget buyers who want a familiar brand and can manage add-ons carefully',
    checkoutExperience: 'Some',
    oneLineVerdict: 'A legitimate budget choice, but the true starter price is not really zero once you add the registered agent most owners actually need.',
    tableVerdict: 'Budget option with add-ons',
    rankingSummary:
      'ZenBusiness drops behind Bizee and Northwest once you price the cheapest path with a registered agent instead of stopping at the teaser $0 headline.',
    realYearOneTotal: 99,
    realYearOneTotalLabel: '$99 + state fee',
    includedFeatures: {
      formationFiling: 'Yes',
      registeredAgent: 'No on Starter',
      operatingAgreement: 'No on Starter',
      ein: 'No on Starter',
    },
    commonUpsells: [
      {
        label: 'Registered agent on Starter',
        cost: '$99 for year 1, then $199/yr',
        notes: 'This is the big number that turns the $0 headline into a real price.',
      },
      {
        label: 'Rush processing',
        cost: '$79',
        notes: 'Starter customers can upgrade to rush handling.',
      },
      {
        label: 'EIN filing',
        cost: '$99',
        notes: 'Optional if you want ZenBusiness to obtain it instead of the IRS direct application.',
      },
      {
        label: 'Operating agreement template',
        cost: '$99',
        notes: 'Optional and easy to skip if you are comfortable handling it yourself.',
      },
    ],
    pros: [
      'Well-known brand with a clear Starter plan.',
      'The first-year registered agent promo is cheaper than its normal renewal rate.',
      'Starter remains a workable low-cost option if you ignore the nonessential extras.',
    ],
    cons: [
      'The $0 headline does not reflect the legally complete cost for most founders.',
      'Renewal pricing gets expensive fast.',
      'The plan matrix pushes several auto-renewing tools and subscriptions.',
    ],
    ourTake: [
      'ZenBusiness is fine if you want a familiar budget brand and you are paying attention during checkout.',
      'It is not the cheapest real year-one path anymore if Bizee keeps bundling the first year of registered agent service, and it is not as clean a buying experience as Northwest.',
    ],
    supportTake:
      'ZenBusiness sells convenience and platform features more than attorney-grade hand-holding. That can be good enough, but it is not the same trust pitch as Northwest.',
    privacyTake:
      'Privacy is available if you add or bundle the registered agent, but it is not part of the cheapest package.',
    ctaLabel: 'Start with ZenBusiness',
    // -- T# TODO: Replace this placeholder with your real ZenBusiness affiliate link.
    affiliateUrl: 'https://example.com/affiliate/zenbusiness',
    sources: [
      'https://zenbusiness.com/pricing-formation-plans',
      'https://help.zenbusiness.com/registered-agent-service/pricing',
    ],
  },
  {
    slug: 'legalzoom',
    name: 'LegalZoom',
    headlinePrice: 0,
    headlinePriceLabel: '$0 + state fee',
    advertisedPriceNote:
      'LegalZoom advertises a free Basic formation path, but registered agent service is separate and currently costs $249/yr. Pro and Premium layers also push paid subscriptions.',
    registeredAgentFirstYear: 249,
    registeredAgentLabel: '$249/yr extra',
    registeredAgentRenewal: 249,
    registeredAgentRenewalLabel: '$249/yr renewal',
    processingTime: 'Depends on package and state',
    bestFor: 'Founders who mainly want a legacy brand name',
    checkoutExperience: 'Heavy',
    oneLineVerdict: 'The brand is familiar, but the pricing is hard to defend against cheaper competitors that do the same basic filing work.',
    tableVerdict: 'Overpriced for most founders',
    rankingSummary:
      'LegalZoom comes in last because its cheapest path with a registered agent is materially more expensive than the alternatives, and the paid tiers add subscription baggage many owners do not need.',
    realYearOneTotal: 249,
    realYearOneTotalLabel: '$249 + state fee',
    includedFeatures: {
      formationFiling: 'Yes',
      registeredAgent: 'No on Basic',
      operatingAgreement: 'No on Basic',
      ein: 'No on Basic',
    },
    commonUpsells: [
      {
        label: 'Registered agent',
        cost: '$249/yr',
        notes: 'The single biggest reason LegalZoom becomes expensive quickly.',
      },
      {
        label: 'Pro plan',
        cost: '$249 + state fee',
        notes: 'Adds EIN, operating agreement, and a 30-day attorney subscription that auto-renews at $49/mo unless canceled.',
      },
      {
        label: 'Premium plan',
        cost: '$299 + state fee',
        notes: 'Adds bookkeeping tools that auto-renew after the included term.',
      },
    ],
    pros: [
      'Very recognizable brand name.',
      'Basic plan really does start at $0 before you add anything else.',
      'If you already use LegalZoom for other business services, keeping everything in one account may matter to you.',
    ],
    cons: [
      'Registered agent pricing is the highest in this group.',
      'Auto-renewing subscriptions are built directly into the paid tiers.',
      'There is no clear value reason to pay the LegalZoom markup for a standard LLC filing.',
    ],
    ourTake: [
      'We do not recommend LegalZoom for most LLC formations. The company is not fraudulent, but the value story is weak once you compare the year-one total against Bizee, Northwest, and ZenBusiness.',
      'If all you want is a household name, LegalZoom gives you that. If you want the best deal, it does not.',
    ],
    supportTake:
      'LegalZoom has scale and a polished brand, but the product design leans harder into cross-selling subscriptions than into a simple low-cost LLC setup.',
    privacyTake:
      'The privacy benefit exists if you pay for the registered agent, but the premium is hard to justify when cheaper providers offer the same core privacy function.',
    ctaLabel: 'See LegalZoom pricing',
    // -- T# TODO: Replace this placeholder with your real LegalZoom affiliate link.
    affiliateUrl: 'https://example.com/affiliate/legalzoom',
    sources: [
      'https://www.legalzoom.com/business/business-formation/llc-overview.html',
      'https://www.legalzoom.com/business/business-operations/registered-agent-overview.html',
      'https://www.legalzoom.com/articles/how-to-start-a-free-llc',
    ],
  },
];

export const serviceComparisons: ServiceComparison[] = [
  {
    id: 'northwest-vs-zenbusiness',
    title: 'Northwest vs ZenBusiness',
    winner: 'Northwest for least hassle; ZenBusiness only if you are squeezing the upfront budget',
    providerSlugs: ['northwest', 'zenbusiness'],
    paragraphs: [
      'Northwest is the better choice if you want the cleanest path from search result to approved LLC. The first year of registered agent service is bundled in, the privacy pitch is clear, and the public pricing pages are easier to understand than ZenBusiness once you factor in the real cost of the Starter plan.',
      'ZenBusiness can still make sense if you want to spend less than Northwest and you are disciplined enough to ignore the extras. But the $0 Starter plan is not a complete apples-to-apples number because the registered agent usually adds another $99 in year one and $199 at renewal.',
      'The short version: choose Northwest if you want a smoother experience and clearer privacy value. Choose ZenBusiness only if shaving the upfront bill matters more than avoiding add-ons.',
    ],
  },
  {
    id: 'zenbusiness-vs-legalzoom',
    title: 'ZenBusiness vs LegalZoom',
    winner: 'ZenBusiness',
    providerSlugs: ['zenbusiness', 'legalzoom'],
    paragraphs: [
      'ZenBusiness wins this matchup on simple economics. Once you price in a registered agent, ZenBusiness still lands materially below LegalZoom for a standard LLC formation.',
      'LegalZoom\'s main edge is brand recognition. That is real, but it is not enough to justify paying more for a commodity filing workflow unless you specifically want LegalZoom\'s broader legal-services ecosystem.',
      'For most small founders, ZenBusiness is the more sensible buy. LegalZoom is the legacy name with the legacy markup.',
    ],
  },
  {
    id: 'northwest-vs-legalzoom',
    title: 'Northwest vs LegalZoom',
    winner: 'Northwest',
    providerSlugs: ['northwest', 'legalzoom'],
    paragraphs: [
      'Northwest beats LegalZoom on both value and trust. Even if Northwest is no longer the absolute cheapest option in this comparison, it is still dramatically easier to justify than LegalZoom\'s $249 registered-agent pricing.',
      'Both companies can form the LLC, but Northwest makes a stronger case on privacy and cleaner checkout while staying far below LegalZoom on real year-one cost.',
      'If you are deciding between the two, this is not close. Northwest is the better choice unless you are buying a LegalZoom subscription ecosystem on purpose.',
    ],
  },
  {
    id: 'bizee-vs-zenbusiness',
    title: 'Bizee vs ZenBusiness',
    winner: 'Bizee on year-one math',
    providerSlugs: ['bizee', 'zenbusiness'],
    paragraphs: [
      'Bizee wins the price fight because its current public offer includes a free first year of registered agent service with formation, while ZenBusiness charges extra for the registered agent on the Starter plan.',
      'ZenBusiness is arguably the tidier brand story, but once you enforce a real-cost comparison instead of a teaser-price comparison, Bizee comes out ahead. That is exactly why this page ranks by year-one total instead of by homepage slogans.',
      'If your goal is to spend the least possible amount while still getting a registered agent, pick Bizee. If you are willing to pay more for a more familiar platform, ZenBusiness is still reasonable, just not cheaper.',
    ],
  },
];

export const choiceRecommendations: ChoiceRecommendation[] = [
  {
    prompt: 'I want the cheapest real year-one option',
    recommendation: 'Bizee',
    details:
      'Bizee currently wins on pure year-one math because the entry plan is $0 and the first year of registered agent service is bundled in.',
  },
  {
    prompt: 'I want the least hassle',
    recommendation: 'Northwest Registered Agent',
    details:
      'Northwest is still the cleanest recommendation for founders who care more about privacy and a straightforward checkout than about saving the final few dollars.',
  },
  {
    prompt: 'I want a familiar budget brand',
    recommendation: 'ZenBusiness',
    details:
      'ZenBusiness is a workable middle ground if you want a known brand and can keep the Starter plan from turning into a pile of add-ons.',
  },
  {
    prompt: 'I want a registered agent only',
    recommendation: 'Bizee or Northwest, depending on what you value',
    details:
      'Bizee\'s current standalone registered agent price is lower, while Northwest still has the stronger privacy-first and support-first positioning.',
  },
  {
    prompt: 'I only trust a household name',
    recommendation: 'LegalZoom',
    details:
      'LegalZoom is the legacy name here, but you pay for that familiarity. We would only choose it if brand comfort matters more to you than value.',
  },
];

export const llcServicesFaq: FaqItem[] = [
  {
    question: 'What is the best LLC formation service in 2026?',
    answer:
      'On pure year-one cost, Bizee is the best value we could verify in April 2026 because its free plan currently includes a free first year of registered agent service. If you care more about cleaner checkout, privacy, and a lower-stress experience, Northwest is still the strongest premium-feeling option.',
  },
  {
    question: 'How much does it really cost to form an LLC with a service?',
    answer:
      'The honest answer is the service price plus your state filing fee, plus a registered agent if the entry package does not include one. That is why a $0 headline can still turn into a $99 or $249 first-year total before the state fee is added.',
  },
  {
    question: 'Do I need to use a formation service or can I file myself?',
    answer:
      'You can absolutely file directly with your state. A formation service mostly saves time, keeps the workflow organized, and can give you a privacy benefit if you also use the provider as your registered agent. If you are comfortable following state instructions, DIY is still a valid option.',
  },
  {
    question: 'Is LegalZoom worth it for LLC formation?',
    answer:
      'For most founders, no. LegalZoom is a real company with a familiar brand, but its registered agent pricing and subscription-heavy upsells make it hard to justify against cheaper competitors that handle the same basic filing work.',
  },
  {
    question: 'What is the difference between a $0 and a $39 LLC service?',
    answer:
      'Usually the difference is whether the provider is recovering its margin elsewhere. A $0 offer can still cost more in the real world if the registered agent is extra, while a $39 service can be cheaper overall if it bundles the registered agent into the entry package.',
  },
  {
    question: 'Do these services work in all 50 states?',
    answer:
      'The providers covered on this page all market nationwide availability. The details still vary by state because each Secretary of State has its own filing fee, processing times, and compliance rules.',
  },
  {
    question: 'What is a registered agent and do I need one?',
    answer:
      'A registered agent is the person or company designated to receive lawsuits, state notices, and other official mail for your LLC. In practice, yes, you need one in the state where your LLC is formed or registered to do business.',
  },
  {
    question: 'Can I switch registered agents later?',
    answer:
      'Yes. States generally let you change your registered agent by filing a change form and paying any required fee. That means you are not locked into the agent you choose on day one, although changing later is still more annoying than choosing well up front.',
  },
];

export const featuredStateGuideSlugs = ['ohio', 'california', 'texas', 'florida', 'new-york'] as const;

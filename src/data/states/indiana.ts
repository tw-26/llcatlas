import type { StateOverride } from './types';

export const indiana: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in Indiana (2026): $95 Online, No Publication | LLCAtlas',
  seoDescription:
    'Form an Indiana LLC for $95 online through INBiz. Registered agent rules, biennial report costs, timeline, and the real first-year cost.',
  lastUpdated: '2026-04-26',
  intro:
    'Starting an LLC in Indiana is straightforward if you ignore the generic state-guide sludge. The filing fee is $95 online, Indiana uses the term registered agent, there is no newspaper publication rule, and there is no annual report. The one ongoing state filing is a Business Entity Report every two years. For most founders, the real decisions are simple: pick a compliant name, decide whether you are comfortable putting your own address on the public record, file the Articles of Organization through INBiz, get a free EIN, and put a written operating agreement in place.',
  whatYoullNeed:
    "To form an Indiana LLC, you'll need a unique LLC name, an Indiana registered agent with a physical Indiana street address, and $95 to file online or $100 to file by mail. Most founders can finish the filing itself in about 20 to 30 minutes.",
  closing:
    'Indiana is a good home-state LLC for Indiana founders. The upfront fee is low, the state does not pile on a franchise tax or publication rule, and the recurring filing is only every other year. The catch is not the formation process. It is the stuff generic guides usually bury: county income tax applies on top of the state rate, and your registered agent choice decides whether your own address ends up tied to the filing. If you live and operate in Indiana, keep it simple, file in Indiana, and use a professional registered agent if you want privacy and less admin risk.',
  inlineCtaDescription:
    'Indiana lets you be your own registered agent, but that is only the cheap option on paper. Your address goes on the public record, you need to stay reliably available during business hours, and missing a legal notice is a dumb reason to create risk. For most home-based founders, a professional registered agent is the better default.',
  sidebarCtaDescription:
    'If you work from home, travel often, or do not want your home address on the Indiana filing, use a professional registered agent instead of listing yourself.',
  officialLinks: [
    { label: 'Start an Indiana LLC on INBiz', url: 'https://inbiz.in.gov/start-business' },
    { label: 'Search Indiana business names', url: 'https://bsd.sos.in.gov/PublicBusinessSearch' },
    { label: 'Download Form 49459 (Articles of Organization)', url: 'https://forms.in.gov/Download.aspx?id=16989' },
    { label: 'Indiana Business Entity Report filing rules', url: 'https://inbiz.in.gov/business-filings/business-entityreport' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number',
    },
  ],
  taxHighlights: [
    'Indiana is cleaner on LLC taxes than a lot of nearby states. There is no franchise tax, no gross-receipts tax, and no separate annual LLC tax. Most Indiana LLCs are pass-throughs, so owners pick up the income on their own returns.',
    'The real Indiana-specific tax wrinkle is county income tax. Indiana charges a 2.95% flat state individual income tax for 2026, and all 92 counties levy an extra county income tax on top of that. If you are budgeting LLC taxes in Indiana, do not stop at the state rate.',
    'If you sell taxable goods or taxable services, Indiana sales tax is a flat 7% statewide and you may need a Registered Retail Merchant Certificate. Indiana does not have a blanket statewide business license for every LLC, so licensing depends on what you do, not the fact that you formed an LLC.',
  ],
  comparisonRows: [
    {
      state: 'Indiana',
      annualReport: 'Business Entity Report every 2 years',
      upfrontCost: '$95 online',
      ongoingStateCost: '$32 every 2 years',
    },
    {
      state: 'Ohio',
      annualReport: 'None for standard LLCs',
      upfrontCost: '$99',
      ongoingStateCost: '$0 annual report fee',
    },
    {
      state: 'Michigan',
      annualReport: 'Annual Statement, $25 each year',
      upfrontCost: '$50',
      ongoingStateCost: '$25/yr',
    },
    {
      state: 'Wyoming',
      annualReport: 'Annual report required',
      upfrontCost: '~$100',
      ongoingStateCost: '$60+/yr',
    },
  ],
  filingFee: 95,
  annualReportFee: 32,
  filingTime: '~same day online; ~5 to 7 business days by mail',
  filingTimeShort: 'Same day online',
  expeditedTime: null,
  expeditedFee: null,
  filingAgency: 'Indiana Secretary of State, Business Services Division (through INBiz)',
  filingAgencyUrl: 'https://inbiz.in.gov/start-business',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Indiana individual income tax is 2.95% for tax year 2026. County income tax also applies, and all 92 Indiana counties levy one.',
  stateTax:
    'Most Indiana LLCs are taxed as pass-through entities by default. Indiana does not charge a franchise tax, gross-receipts tax, or separate annual LLC tax, but owners still pay Indiana income tax at 2.95% plus county income tax.',
  annualReportDue: 'Every 2 years, in your anniversary month',
  annualReportNote: 'Business Entity Report, $32 online or $50 by paper',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose an Indiana-compliant LLC name',
      description:
        'Your name has to be distinguishable on the Indiana records and include an LLC designator such as LLC, L.L.C., or Limited Liability Company. Indiana is stricter than many founders expect: changing punctuation, adding “the,” switching singular to plural, or swapping only the entity ending does not make a name distinguishable. Use the Secretary of State business search first. Indiana lets you reserve a name for 120 days, but most founders should skip that and just file once they are ready.',
    },
    {
      title: 'Appoint a registered agent with an Indiana street address',
      description:
        'Indiana uses the term registered agent, not statutory agent. The registered agent must be either an Indiana resident or a business authorized to do business in Indiana, and the registered office must be a physical Indiana street address. No P.O. boxes. You can act as your own registered agent if you live in Indiana and are available during business hours, but the LLC itself cannot serve as its own agent. For most home-based founders, this is the one step where paying for help actually solves a real problem: privacy.',
    },
    {
      title: 'File the Articles of Organization through INBiz',
      description:
        'For a domestic Indiana LLC, you file State Form 49459, Articles of Organization. Online filing through INBiz is the default move: it costs $95 plus card processing, while paper filing costs $100 and moves slower. You will need the LLC name, the principal office address, the registered agent information, and the organizer details. One Indiana-specific detail matters here: if you want a manager-managed LLC, say so in the filing. If you do not, Indiana defaults the LLC to member-managed.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'After the LLC is approved, get an EIN directly from the IRS. It is free. Multi-member LLCs need one, LLCs with employees need one, and banks usually ask for one even if you are a single-member LLC. Do not pay a third-party site for something the IRS gives you for free.',
    },
    {
      title: 'Put a written operating agreement in place',
      description:
        'Indiana does not require you to file an operating agreement with the state, but you should still have one in writing. It is the document that spells out ownership, management, voting, and what happens if someone leaves. In practice, it also makes banking and internal disputes much cleaner. This matters even more in Indiana because the state filing itself is not where you prove the ownership structure of the business.',
    },
    {
      title: 'Open a business bank account and handle any tax registrations',
      description:
        'Once the LLC exists, keep the liability shield real by separating business money from personal money immediately. Banks will usually want your EIN, approved Articles, and operating agreement. If you sell taxable goods or taxable services, register for Indiana sales tax and get a Registered Retail Merchant Certificate. Indiana does not have a general state business license, so only add licensing where your industry or locality actually requires it.',
    },
    {
      title: 'File the Business Entity Report every two years',
      description:
        'Indiana does not have an annual report for LLCs. The ongoing filing is called a Business Entity Report, and for for-profit LLCs it is due every other year in your anniversary month. The fee is $32 on INBiz or $50 by paper. This is the compliance step generic guides often mangle, so make a note of it now instead of rediscovering it after the due date.',
    },
  ],
  costBreakdown: [
    {
      item: 'Articles of Organization (online)',
      cost: '$95 + card processing',
      required: 'Yes',
      notes: 'File through INBiz',
    },
    {
      item: 'Articles of Organization (paper)',
      cost: '$100',
      required: 'Only if you mail file',
      notes: 'Form 49459',
    },
    {
      item: 'Registered agent service',
      cost: '$0 if self-appointed or about $125/yr with a service',
      required: 'Required, but you can do it yourself',
      notes: 'Northwest renews at $125/yr after year one',
    },
    {
      item: 'EIN',
      cost: 'Free',
      required: 'Recommended',
      notes: 'IRS direct',
    },
    {
      item: 'Operating agreement',
      cost: 'Free if you draft it yourself',
      required: 'Strongly recommended',
      notes: 'Internal document, not filed with Indiana',
    },
    {
      item: 'Registered Retail Merchant Certificate',
      cost: '$25 per location',
      required: 'Only if collecting Indiana sales tax',
      notes: 'One-time registration fee',
    },
    {
      item: 'Business Entity Report',
      cost: '$32 online / $50 paper every 2 years',
      required: 'Yes (recurring)',
      notes: 'Indiana’s biennial filing',
    },
    {
      item: 'Total (bare minimum DIY)',
      cost: '$95',
      isEmphasized: true,
      notes: 'State filing only',
    },
    {
      item: 'Total (typical with a professional registered agent)',
      cost: '~$220 first year',
      isEmphasized: true,
      notes: 'Online filing plus about $125 for agent service',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Indiana?',
      answer:
        'The state filing fee is $95 online or $100 by mail. If you serve as your own registered agent, that is the true minimum cost to get the LLC formed. Most founders who want privacy should budget more, because a professional registered agent usually adds about $100 to $125 a year. The ongoing state filing is the Business Entity Report at $32 online every two years.',
    },
    {
      question: 'How long does it take to get an Indiana LLC?',
      answer:
        'Online filings through INBiz are typically faster than paper and are often approved the same business day. Paper filings usually take about 5 to 7 business days plus mail time. Indiana does not offer a separate expedited LLC filing tier, so if speed matters, file online instead of mailing the form.',
    },
    {
      question: 'What is a registered agent in Indiana?',
      answer:
        'A registered agent is the person or company that receives lawsuits, state notices, and other official documents for your LLC. Indiana uses the term registered agent, not statutory agent. The agent must have a physical Indiana street address and be available during business hours.',
    },
    {
      question: 'Can I be my own registered agent in Indiana?',
      answer:
        'Yes, if you are an Indiana resident with a physical Indiana street address and you are reliably available during business hours. The tradeoff is privacy and admin risk. Your address becomes part of the public record, and if you move or miss service of process, you create a problem that is easy to avoid with a professional agent.',
    },
    {
      question: 'Does Indiana require an annual report for LLCs?',
      answer:
        'No. Indiana does not require an annual report for LLCs. The recurring filing is a Business Entity Report every two years, due in your LLC’s anniversary month. For-profit LLCs pay $32 online or $50 by paper.',
    },
    {
      question: 'Does Indiana require newspaper publication for an LLC?',
      answer:
        'No. Indiana does not require you to publish a formation notice in a newspaper after filing the LLC. That keeps the setup simpler and cheaper than states like New York that still make founders jump through a publication step.',
    },
    {
      question: 'Do I need an operating agreement for an Indiana LLC?',
      answer:
        'Indiana does not require you to file an operating agreement with the state, but you should still have one in writing. It helps with ownership proof, banking, internal decision-making, and keeping the LLC separate from you personally. Treat it as standard LLC setup, not optional fluff.',
    },
    {
      question: 'Can I form an Indiana LLC online?',
      answer:
        'Yes. Indiana funnels founders to INBiz for online filing, and that is the cleanest option. Online filing is cheaper than paper for a domestic LLC, usually faster, and reduces the odds of a paper-form mistake slowing you down.',
    },
    {
      question: 'How is an Indiana LLC taxed?',
      answer:
        'By default, an Indiana LLC is a pass-through entity, so the income flows to the owners instead of being taxed at the LLC level. Indiana’s flat individual income tax rate is 2.95% for 2026, and county income tax applies on top of that. Indiana does not charge a franchise tax, gross-receipts tax, or separate annual LLC tax.',
    },
    {
      question: 'Does Indiana have a franchise tax or Commercial Activity Tax?',
      answer:
        'No. Indiana does not have a franchise tax, and it does not have a Commercial Activity Tax. If you have seen Indiana CAT mentioned, that is a state-guide mix-up with Ohio. Indiana LLC owners still need to plan for income tax, county income tax, and any sales-tax registrations that apply, but not a separate CAT or annual franchise charge.',
    },
    {
      question: 'Do I need a business license for my Indiana LLC?',
      answer:
        'Indiana does not have one blanket statewide business license that every LLC has to buy. Licensing is industry-specific and sometimes local. If you sell taxable goods or taxable services, you may need a Registered Retail Merchant Certificate. If you are in a regulated field, check the state board or local rules that apply to that activity.',
    },
    {
      question: 'Can a non-resident form an Indiana LLC?',
      answer:
        'Yes. Indiana does not require members or organizers to live in the state. The main Indiana-specific requirement is that the LLC must continuously maintain a registered agent with a real Indiana street address, so out-of-state founders usually use a commercial registered agent service.',
    },
    {
      question: 'Do Indiana LLCs need to file BOI reports?',
      answer:
        'Under FinCEN’s interim final rule published in March 2025, domestic U.S. entities, including Indiana LLCs, are exempt from BOI reporting. Foreign entities registered to do business in the United States are treated differently. Because BOI rules have changed repeatedly, this is still worth rechecking against FinCEN before you rely on an old checklist.',
    },
    {
      question: 'What is the difference between member-managed and manager-managed in Indiana?',
      answer:
        'In a member-managed LLC, the owners run the business directly. In a manager-managed LLC, one or more managers run day-to-day operations. In Indiana, this choice matters at filing time because the Articles of Organization are where you make the manager-managed designation. If you do not say manager-managed in the filing, the default is member-managed.',
    },
  ],
  proscons: {
    pros: [
      'Indiana is cheap to form and easy to maintain. The filing fee is $95 online, there is no publication requirement, and the recurring report is only every other year.',
      'Indiana does not hit LLCs with a franchise tax, gross-receipts tax, or separate annual LLC tax. For a normal small business, that keeps the state-level math clean.',
      'The state uses one portal, INBiz, for formation and ongoing filings, which is a better experience than the patchwork systems some states still force on founders.',
    ],
    cons: [
      'Indiana’s county income tax system is the real tax wrinkle. All 92 counties levy one, so your effective state-local income tax bill is higher than the headline 2.95% state rate suggests.',
      'If you act as your own registered agent, you save money but give up privacy because your Indiana address goes on the public record.',
      'Indiana defaults LLCs to member-managed unless you say otherwise in the filing. If you mean to create a manager-managed LLC and miss that detail, you create avoidable confusion from day one.',
    ],
  },
};

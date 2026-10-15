import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const indiana: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Indiana (${GUIDE_YEAR}): $95 Fee, Steps & Timeline`,
  seoDescription:
    'Form an Indiana LLC on INBiz for $95, often approved within hours. Then the $32 Business Entity Report every two years, registered agent rules, and what to skip.',
  lastUpdated: '2026-10-15',
  intro:
    "An Indiana LLC costs $95 to file online. You file Articles of Organization through INBiz, the state's business portal, and appoint a registered agent. There's no newspaper publication rule and no annual report. The only recurring state filing is a Business Entity Report every two years. The main decision is whether you're comfortable putting your own address on the public record as your registered agent. After approval, get a free EIN from the IRS. Indiana doesn't require an operating agreement, but writing one is still worth it because it sets ownership and management rules on paper.",
  whatYoullNeed:
    "To form an Indiana LLC, you'll need a unique LLC name, an Indiana registered agent with a physical Indiana street address, and $95 to file online or $100 to file by mail. Most founders can finish the filing itself in about 20 to 30 minutes.",
  closing:
    "If you live and operate in Indiana, form in Indiana. The $95 fee is low, there's no franchise tax or publication rule, and the recurring report is only every other year. Budget for county income tax: all 92 counties levy one on top of the 2.95% state rate. You can be your own registered agent for free, but your address goes on the public filing. A professional agent, about $125 a year, is worth it if you work from home and want that address private, or can't reliably be available during business hours.",
  inlineCtaDescription:
    "Indiana lets you be your own registered agent for free. The tradeoff is that your address goes on the public record and you need to be reliably available during business hours to receive legal notices. If you work from home or travel often, a professional registered agent, about $125 a year, removes both problems. If you have an Indiana office with regular hours and don't mind it being public, you don't need one.",
  sidebarCtaDescription:
    "If you work from home, travel often, or don't want your home address on the Indiana filing, use a professional registered agent instead of listing yourself.",
  officialLinks: [
    { label: 'Start an Indiana LLC on INBiz', url: 'https://inbiz.in.gov/start-business' },
    { label: 'Search Indiana business names', url: 'https://bsd.sos.in.gov/PublicBusinessSearch' },
    { label: 'Download Form 49459 (Articles of Organization)', url: 'https://forms.in.gov/Download.aspx?id=16989' },
    { label: 'Indiana Register: business filing fee rule', url: 'https://www.in.gov/sos/business/files/20250326-IR-075250155FNA.pdf' },
    { label: 'Indiana Business Entity Report filing rules', url: 'https://inbiz.in.gov/business-filings/business-entityreport' },
    { label: 'Indiana filing fee statute (IC 23-0.5-9)', url: 'https://iga.in.gov/ic/2026/Title_23/Article_0.5/Chapter_9.pdf' },
    {
      label: 'Indiana registered agent statute (IC 23-0.5)',
      url: 'https://iga.in.gov/laws/current/ic/titles/23',
    },
    {
      label: 'Indiana registered agent filing rules (75 IAC 8)',
      url: 'https://iar.iga.in.gov/code/2026/75/8',
    },
    {
      label: 'Statement of Change of Registered Agent (Indiana)',
      url: 'https://forms.in.gov/Download.aspx?id=13558',
    },
    {
      label: 'Indiana 2026 principal office and CMRA address changes',
      url: 'https://www.in.gov/sos/business/hb-1593-and-hb-1666-filing-process-changes/',
    },
    {
      label: 'Indiana income tax rates (Department of Revenue)',
      url: 'https://www.in.gov/dor/resources/tax-rates-and-reports/rates-fees-and-penalties/',
    },
    { label: 'FinCEN BOI reporting status', url: 'https://www.fincen.gov/boi' },
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
  filingTime: 'Minutes to hours online; 1 to 2 business days after the state receives a paper filing, plus mail time',
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
  annualReportDue: 'Every 2 years, by the end of your formation anniversary month',
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
        'Indiana uses the term registered agent. The agent must be an individual, a general partnership, an Indiana business, or a business registered in Indiana, at an Indiana street address. The LLC cannot be its own agent. A P.O. box alone is rejected unless it is paired with a rural route. You can serve yourself if you live in Indiana. Changing the agent has no state fee; filing it online on INBiz adds $1. Going 60 days without an agent is grounds for administrative dissolution.',
    },
    {
      title: 'File the Articles of Organization through INBiz',
      description:
        'For a domestic Indiana LLC, you file State Form 49459, Articles of Organization. Online filing through INBiz is the default move: it costs $95 plus a payment processing fee (at least $1, at most 2.15%), so expect to pay at least $96 at checkout, while paper filing costs $100 and moves slower. You will need the LLC name, the principal office address, the registered agent information, and the organizer details. One Indiana-specific detail matters here: if you want a manager-managed LLC, say so in the filing. If you do not, Indiana defaults the LLC to member-managed. Since January 1, 2026, if you run the business entirely from home with no separate office, you can check the remote-business box and file State Form 9900382 so your home address stays off the public record as the principal office. The same form is required if you list a virtual mailbox (CMRA) address anywhere in the filing.',
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
        'Indiana does not have an annual report for LLCs. The ongoing filing is called a Business Entity Report. The first one is due two years after you form, then every other year on your formation month and day, with until the end of that month before it counts as past due. The fee is $32 on INBiz or $50 by paper. Skip it and the state administratively dissolves the LLC, and reinstating requires a tax clearance from the Department of Revenue that takes 4 to 6 weeks. Put the date on your calendar now.',
    },
  ],
  costPage: {
    seoTitle: `Indiana LLC Cost (${GUIDE_YEAR}): $95 to Form, $32 Every 2 Years`,
    seoDescription:
      'An Indiana LLC costs $95 to form online and $32 every two years for the Business Entity Report. No annual report, franchise tax, or publication cost.',
    intro:
      "An Indiana LLC costs $95 to form online through INBiz, plus a payment processing fee of at least $1, or $100 by mail. There's no annual report. The only recurring state filing is the Business Entity Report: $32 online every two years, first due two years after you form, by the end of your formation month. Indiana has no franchise tax and no publication cost. The cost people miss isn't a state fee at all: all 92 counties levy a county income tax on top of the 2.95% state rate.",
    formTotal: 95,
    annualDisplay: '$32 every 2 years',
    yearOneTotal: 95,
    yearTwoTotal: 0,
    yearOneNote: 'Online Articles of Organization, plus at least $1 processing',
    yearTwoNote: 'First $32 Business Entity Report is due at the 2-year mark',
    schedule: [
      { item: 'Articles of Organization', cost: '$95 / $100', due: 'When you form. $95 online plus a processing fee of at least $1, or $100 by mail.' },
      {
        item: 'Business Entity Report',
        cost: '$32',
        due: 'Every 2 years, by the end of your formation month, starting two years after you form. $50 on paper.',
      },
      {
        item: 'Missed report',
        cost: 'Dissolution',
        due: 'The state administratively dissolves the LLC. Reinstating needs a Department of Revenue tax clearance that takes 4 to 6 weeks.',
      },
      {
        item: 'Registered Retail Merchant Certificate',
        cost: '$25',
        due: 'One time, per location, only if you collect Indiana sales tax.',
      },
    ],
    verdict:
      "File online through INBiz for $95 plus the processing fee. Paper costs $5 more and adds mail time in both directions, and Indiana doesn't sell an expedite because online filings are processed in minutes to hours. If you run the business from home, check the remote-business box and file State Form 9900382 so your home address stays off the principal office line. Pay for a registered agent, about $125 a year, only if you also want your address off the agent line or can't be available during business hours. Calendar the end of your formation month two years out for the first $32 report.",
    faq: [
      {
        question: 'How much does an LLC cost in Indiana?',
        answer:
          "$95 to file Articles of Organization online through INBiz, plus a payment processing fee of at least $1, or $100 by mail. If you serve as your own registered agent, that's the whole state cost for your first two years. After that, the Business Entity Report costs $32 online every two years.",
      },
      {
        question: 'What is the Indiana LLC annual fee?',
        answer:
          "There isn't one. Indiana has no annual report for LLCs. The recurring filing is the Business Entity Report, $32 online or $50 on paper, due every two years by the end of your formation month. Skip it and the state dissolves the LLC, and reinstating requires a tax clearance from the Department of Revenue that takes 4 to 6 weeks.",
      },
      {
        question: 'Does Indiana have a franchise tax for LLCs?',
        answer:
          "No. Indiana has no franchise tax, gross-receipts tax, or separate annual LLC tax. Owners pay Indiana income tax on LLC profit at 2.95% for 2026, plus county income tax, which all 92 counties levy. If you sell taxable goods or services, sales tax is 7% and the Registered Retail Merchant Certificate costs $25 per location.",
      },
      {
        question: 'Can I pay to expedite an Indiana LLC?',
        answer:
          "No, and you don't need to. Indiana has no expedited LLC filing tier. INBiz filings are processed in minutes to hours, and paper filings within 1 to 2 business days after they arrive, plus mail time. File online.",
      },
      {
        question: 'How much is a registered agent in Indiana?',
        answer:
          "Free if you live in Indiana and serve yourself, but your address goes on the public filing and you need to be available during business hours. A professional registered agent costs about $125 a year.",
      },
    ],
    sourceUrls: [
      'https://www.in.gov/sos/business/files/20250326-IR-075250155FNA.pdf',
      'https://inbiz.in.gov/business-filings/business-entityreport',
      'https://iga.in.gov/ic/2026/Title_23/Article_0.5/Chapter_9.pdf',
    ],
  },
  registeredAgentPage: {
    lastVerified: '2026-10-15',
    seoTitle: `Indiana Registered Agent (${GUIDE_YEAR}): Rules, Cost & Who to Use`,
    seoDescription:
      'Every Indiana LLC needs an agent at an Indiana street address. The LLC cannot be its own agent. Online changes cost $1, and 60 days without an agent starts dissolution.',
    intro:
      "Every Indiana LLC has to keep a registered agent at an Indiana street address. The agent can be you, another person, a partnership, or a business that is formed or registered in Indiana. The LLC cannot be its own agent. If you live in Indiana and have a business address that isn't your home, serve yourself and pay nothing. Everyone else should hire one. A commercial agent runs about $100 to $125 a year. Changing the agent has no state fee. Filing that change online on INBiz adds $1.",
    facts: [
      { label: 'What Indiana calls it', detail: 'Registered agent, at a registered office (IC 23-0.5-4).' },
      {
        label: 'Who can serve',
        detail:
          'An individual, a general partnership, a business formed in Indiana, or a business registered to do business in Indiana. The LLC cannot name itself.',
      },
      {
        label: 'Address rule',
        detail:
          'An Indiana street address. The change form rejects a P.O. box unless it is paired with a rural route. The signer has to represent that the agent consented.',
      },
      {
        label: 'Change of agent',
        detail:
          'No statutory filing fee (IC 23-0.5-9-32). An online filing on INBiz adds a $1 enhanced-access fee (75 IAC 8-3-8).',
      },
      {
        label: 'If the agent resigns',
        detail:
          'No statutory fee; the online filing is $1. It takes effect on the 31st day after filing, or sooner if you name a new agent. The agent has to tell the LLC the filing date.',
      },
      {
        label: '60-day rule',
        detail:
          'Tell the Secretary of State within 60 days when the agent or office changes, the agent resigns, or the office is discontinued. Missing that is grounds for administrative dissolution.',
      },
      {
        label: 'With no agent',
        detail:
          '60 consecutive days without an agent is also grounds. If there is no agent, or the agent cannot be served, papers can go by registered or certified mail to the principal office on the latest biennial report. Service is effective on receipt, on the signed return receipt, or five days after mailing if the address was right.',
      },
      {
        label: 'After the notice',
        detail:
          'The Secretary of State sends written notice. The LLC has 60 days to cure. After that, the state signs a certificate of administrative dissolution.',
      },
      {
        label: 'What the agent must do',
        detail: 'Forward process, notices, and demands, and keep the agent information on file current. That is the whole job.',
      },
    ],
    lapse: [
      "Yes. Indiana requires a registered agent the whole time the LLC exists. If the LLC goes 60 consecutive days without one, or doesn't tell the Secretary of State within 60 days that the agent changed or resigned, the state can start administrative dissolution. You get a written notice and 60 days to fix it. If nobody is there to accept service, a lawsuit can be mailed to the principal office on your latest Business Entity Report and becomes effective five days after it is deposited, even if you never open it.",
    ],
    selfAgent: [
      "Serve yourself if you live in Indiana and have a street address that isn't your home, and someone can accept mail there. The address is public, and the form asks you to confirm the agent consented. Don't list a P.O. box by itself. A box works only with a rural route. The LLC cannot be its own agent, so naming the company and hoping that counts will get the filing refused.",
    ],
    paidAgent: [
      "Hire one if you work from home, travel, or live outside Indiana. Commercial agents list with the Secretary of State, and the usual price is about $100 to $125 a year. Northwest charges $125 a year, which is the top of that range and still cheaper than missing a lawsuit or a dissolution notice. You still give the agent a way to reach you. Indiana requires the LLC to provide the agent with a communications contact.",
    ],
    verdict:
      "If you live in Indiana and have a non-home business address, be your own agent. If you work from home or live anywhere else, use Northwest at $125 a year. The state fee to switch later is $0, or $1 if you file the change on INBiz.",
    changeAgent: [
      "File a statement of change. There is no statutory fee. INBiz adds $1 for the electronic filing. The form covers a commercial agent or a noncommercial one, and the signer represents that the new agent consented. A commercial agent that quits its listing ends at 12:01 a.m. on the 31st day after that termination is filed. Name a replacement before that morning.",
    ],
    faq: [
      {
        question: 'Does Indiana require a registered agent?',
        answer:
          'Yes. Every Indiana LLC has to maintain a registered agent and registered office in Indiana. The agent is an individual, a general partnership, an Indiana business, or a business registered in Indiana. The LLC cannot be its own agent.',
      },
      {
        question: 'Can I be my own registered agent in Indiana?',
        answer:
          "Yes, if you have an Indiana street address you are willing to publish and someone there can accept legal mail. A P.O. box alone is not enough unless it includes a rural route. If that address is your home, hire an agent instead.",
      },
      {
        question: 'How much does it cost to change a registered agent in Indiana?',
        answer:
          'The statute charges no fee for a statement of change or a resignation. Filing either one online on INBiz adds a $1 enhanced-access fee.',
      },
      {
        question: 'What happens if my Indiana registered agent resigns?',
        answer:
          'The resignation takes effect on the 31st day after it is filed, or earlier if you appoint a new agent. The resigning agent has to tell you the filing date. If you do nothing, 60 days without an agent is grounds for administrative dissolution.',
      },
      {
        question: 'How much is a registered agent in Indiana?',
        answer:
          'Free if you serve yourself at an Indiana street address. A commercial agent is usually $100 to $125 a year. Northwest charges $125 a year.',
      },
    ],
    sourceUrls: [
      'https://iga.in.gov/laws/current/ic/titles/23',
      'https://iar.iga.in.gov/code/2026/75/8',
      'https://forms.in.gov/Download.aspx?id=13558',
      'https://iga.in.gov/ic/2026/Title_23/Article_0.5/Chapter_9.pdf',
    ],
  },
  costBreakdown: [
    {
      item: 'Articles of Organization (online)',
      cost: '$95 + processing fee ($1 min)',
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
        'The state filing fee is $95 online or $100 by mail. INBiz adds a payment processing fee of at least $1, so the online checkout total starts at $96. If you serve as your own registered agent, that is the true minimum cost to get the LLC formed. Most founders who want privacy should budget more, because a professional registered agent usually adds about $100 to $125 a year. The ongoing state filing is the Business Entity Report at $32 online every two years.',
    },
    {
      question: 'How long does it take to get an Indiana LLC?',
      answer:
        'The Secretary of State says INBiz filings are processed in minutes to hours, and paper filings within 1 to 2 business days after they arrive. Mail time in both directions is what makes paper slow. Indiana does not sell an expedited LLC filing tier, so if speed matters, file online instead of mailing the form.',
    },
    {
      question: 'How do I register an LLC in Indiana?',
      answer:
        'Registering, forming, and filing an Indiana LLC all mean filing Articles of Organization (State Form 49459) with the Secretary of State, almost always through INBiz for $95. That creates the LLC. If you sell taxable goods or services, you then register with the Department of Revenue for sales tax and a $25 Registered Retail Merchant Certificate per location. Indiana has no general state business license. The one ongoing state filing is the $32 Business Entity Report every two years.',
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
      question: 'How do I apply for an LLC in Indiana online?',
      answer:
        'Go to INBiz at inbiz.in.gov, create an account, search your name, and start a new domestic LLC. Enter the principal office, registered agent, organizer, and whether the LLC is manager-managed (it defaults to member-managed). If you run the business from home, check the remote-business box and file State Form 9900382 to keep your home address off the public record. Pay $95 plus the processing fee, so at least $96 total. INBiz filings are usually processed in minutes to hours, while paper costs $100 and is slower, so file online.',
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
        'No. FinCEN’s final rule, effective August 14, 2026, made the March 2025 exemption permanent: companies created in the United States, including Indiana LLCs, do not file BOI reports. Foreign entities registered to do business in the United States are treated differently. BOI rules have changed repeatedly, so recheck FinCEN before filing if you are working from an old checklist.',
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
      'One portal, INBiz, handles formation and every ongoing filing.',
    ],
    cons: [
      'County income tax is the part people miss. All 92 counties levy one, so your combined income tax bill is higher than the 2.95% state rate suggests.',
      'If you act as your own registered agent, you save money but give up privacy because your Indiana address goes on the public record.',
      'Indiana treats LLCs as member-managed unless the filing says otherwise. If you want a manager-managed LLC, say so in the Articles of Organization.',
    ],
  },
};

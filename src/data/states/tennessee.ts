import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const tennessee: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Tennessee (${GUIDE_YEAR}): $300 Fee, Steps & Timeline`,
  seoDescription:
    'File a Tennessee LLC on TNCaB for $300, often approved same day. Then the $300 annual report due April 1 and the franchise tax single-member LLCs still owe.',
  lastUpdated: '2026-10-15',
  intro:
    "A Tennessee LLC costs $50 per member to file, with a $300 minimum and a $3,000 maximum, so any LLC with six or fewer members pays $300. You file Articles of Organization with the Tennessee Secretary of State through TNCaB, the state's online filing system, and online filings are processed immediately. There's no publication requirement. Every year you file an Annual Report using the same fee formula and the same $300 minimum. Tennessee has no personal income tax, but LLCs are generally subject to franchise and excise tax, including a $100 minimum franchise tax, so budget beyond the formation filing.",
  whatYoullNeed:
    "To form a Tennessee LLC, you'll need a unique business name, a registered agent with a physical Tennessee street address, a principal office address, your fiscal year-end month, management structure, organizer information, member count for fee calculation, and at least $300 for the state filing fee.",
  closing:
    "If your business is based in Tennessee, form in Tennessee. It saves you a foreign registration on top of local compliance. The filing is easy; the maintenance is what surprises people. Put the Annual Report (April 1 for calendar-year LLCs) and your franchise and excise tax filings on your calendar, and check your local business tax and license rules. You can be your own registered agent if you have a Tennessee street address. A professional agent, usually $50 to $300 a year, is worth it if you work from home, travel often, or don't want your address tied to the public registered office record.",
  inlineCtaDescription:
    "Tennessee doesn't require member or manager names on the Articles of Organization, which is a real privacy advantage. You give some of that back if you list your home address as the registered office. A professional registered agent, usually $50 to $300 a year, gives you a reliable Tennessee street address for legal notices and keeps your home off the agent record. If you have a Tennessee business address you're fine publishing, you can be your own agent for free.",
  sidebarCtaDescription:
    "If you work from home or need a reliable Tennessee street address, use a professional registered agent instead of putting your home address on the public record.",
  officialLinks: [
    { label: 'File your Tennessee LLC online (TNCaB)', url: 'https://tncab.tnsos.gov/' },
    { label: 'Check Tennessee name availability', url: 'https://tncab.tnsos.gov/business-entity-search' },
    { label: 'Tennessee SOS forms and fees', url: 'https://sos.tn.gov/businesses/forms-and-fees' },
    { label: 'Tennessee SOS business FAQs', url: 'https://sos.tn.gov/businesses/faqs' },
    {
      label: 'File your Tennessee Annual Report (TNCaB)',
      url: 'https://sos.tn.gov/businesses/pages/create-an-account-in-tncab-to-file-an-annual-report',
    },
    { label: 'Register Tennessee tax accounts (TNTAP)', url: 'https://tntap.tn.gov/eservices/' },
    {
      label: 'Tennessee franchise and excise tax',
      url: 'https://www.tn.gov/revenue/taxes/franchise---excise-tax.html',
    },
    {
      label: 'Tennessee business license thresholds',
      url: 'https://www.tn.gov/revenue/for-businesses/for-new-businesses/licenses-permits-registration.html',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Tennessee LLCs are generally subject to franchise and excise tax by default. The franchise tax is 0.25% of Tennessee-apportioned net worth, with a $100 minimum, and the excise tax is 6.5% of net earnings. A $50,000 excise tax standard deduction applies for tax years ending on or after December 31, 2024, but it does not erase the minimum franchise tax.',
    'Tennessee repealed the franchise tax property measure for tax years ending on or after January 1, 2024. The franchise tax is now based on net worth, which matters most for LLCs holding Tennessee real estate, equipment, or other in-state assets.',
    'The Family-Owned Non-Corporate Entity exemption can be important for some passive family-owned LLCs, especially rental-property entities. It is not automatic, it has ownership and income requirements, and it requires a Tennessee Department of Revenue filing.',
    'Business tax and local business licenses are separate from LLC formation. Below $3,000 in jurisdictional gross receipts, no license is required. From $3,001 to $99,999, a $15 minimal activity license may apply. At $100,000 or more, a standard business license and a state business tax return may apply.',
    'Tennessee has no personal income tax, and the Hall income tax has been repealed. That helps individual owners, but it does not make Tennessee a no-tax LLC state because the franchise and excise tax system applies at the entity level.',
  ],
  comparisonRows: [
    {
      state: 'Tennessee',
      annualReport: '$50/member, $300-$3,000, due 1st day of 4th month after fiscal year close',
      upfrontCost: '$300 minimum',
      ongoingStateCost: '$300 minimum Annual Report + $100 minimum franchise tax + excise tax if applicable',
    },
    {
      state: 'North Carolina',
      annualReport: '$200 due April 15',
      upfrontCost: '$125',
      ongoingStateCost: '$200/yr',
    },
    {
      state: 'Florida',
      annualReport: '$138.75 due May 1',
      upfrontCost: '$125',
      ongoingStateCost: '$138.75/yr',
    },
    {
      state: 'Texas',
      annualReport: 'Public Information Report + Franchise Tax Report',
      upfrontCost: '$300',
      ongoingStateCost: '$0 for most small LLCs below the no-tax-due threshold',
    },
    {
      state: 'Wyoming',
      annualReport: '$60 minimum, due 1st day of anniversary month',
      upfrontCost: '$100',
      ongoingStateCost: '$60 minimum',
    },
  ],
  filingFee: 300,
  filingFeeDisplay: '$50/member; $300 minimum, $3,000 maximum',
  filingFeeNote:
    'Tennessee uses a per-member LLC filing fee. Most 1-6 member LLCs pay the $300 minimum; larger member groups pay $50 per member up to the $3,000 cap.',
  annualReportFee: 300,
  filingTime:
    'Online filings through TNCaB are processed immediately or the same business day. Mail filings take about 3 to 5 business days after receipt, plus mail transit, so plan on roughly 2 to 3 weeks total.',
  filingTimeShort: 'Instant online',
  expeditedTime: null,
  expeditedFee: null,
  filingAgency: 'Tennessee Secretary of State, Division of Business and Charitable Organizations',
  filingAgencyUrl: 'https://sos.tn.gov/businesses',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Tennessee has no personal income tax. LLCs are generally subject to franchise tax at 0.25% of net worth, with a $100 minimum, and excise tax at 6.5% of net earnings, with a $50,000 standard deduction for tax years ending on or after December 31, 2024.',
  stateTax:
    'Tennessee LLCs generally owe franchise and excise tax at the entity level even though Tennessee has no personal income tax. Local business tax and sales tax registrations can also apply depending on activity.',
  annualReportDue: '1st day of the 4th month after fiscal year close',
  annualReportNote:
    'April 1 for calendar-year LLCs. The Annual Report is filed with the Secretary of State and is separate from Tennessee Department of Revenue franchise and excise tax filings.',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Tennessee-compliant LLC name',
      description:
        'Your name must be distinguishable on Tennessee Secretary of State records and include an approved designator such as Limited Liability Company, LLC, or L.L.C. It cannot include corporation or incorporated, and words tied to banking, trust, insurance, or similar regulated industries can require pre-approval. Search the TNCaB business entity database before you file. If you are ready to file soon, skip the $20 name reservation because approval of the Articles locks in the name.',
    },
    {
      title: 'Appoint a Tennessee registered agent',
      description:
        'Tennessee requires a registered agent and a registered office in the state at all times. The office has to be a physical Tennessee address. A post office box, route number, or box number alone is a reason the Secretary of State rejects a filing. Changing the agent is Form SS-4534 and costs $20. A resignation is Form SS-4420 and also costs $20. Being without a registered agent is one of the reasons the Secretary of State lists for administrative dissolution.',
    },
    {
      title: 'File Articles of Organization through TNCaB',
      description:
        'File Articles of Organization - Limited Liability Company, Form SS-4270, with the Tennessee Secretary of State. The cleanest path is TNCaB online filing because approval is immediate or same-day. You need a free TNCaB account before you can file. You will provide the LLC name, registered agent and registered office, principal office, fiscal year-end month, management structure, organizer signature, and member count if it affects the fee. Tennessee does not require member or manager names on the Articles, which is a real privacy advantage.',
    },
    {
      title: 'Pay the Tennessee LLC filing fee',
      description:
        'The filing fee is $50 per member, with a $300 minimum and a $3,000 maximum. Most 1-6 member LLCs pay the $300 minimum. Online payments add a convenience fee: 2.29% for credit or debit cards, or a flat $0.95 for e-check. For a multi-member LLC near the $3,000 cap, e-check can save meaningful money compared with a card payment.',
    },
    {
      title: 'Download approval and skip publication',
      description:
        'Online filings are usually approved as soon as payment processes, and you can download or receive the approval record electronically. Mail filings take about 3 to 5 business days after the state receives them, plus mail time. Tennessee does not offer a paid expedited LLC filing tier, and it does not require newspaper publication after formation.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Apply directly with the IRS for an EIN after the LLC is approved. The EIN is free and usually immediate online during IRS availability hours. Even if a single-member LLC could use the owner SSN for some federal purposes, banks, tax accounts, and clean business records make an EIN the practical default. Do not pay a formation service extra for this unless you are deliberately paying for convenience.',
    },
    {
      title: 'Create a Tennessee operating agreement',
      description:
        'Tennessee does not require an operating agreement to be filed with the state, but you should still have one. It should cover ownership, voting, manager authority, distributions, tax elections, transfers, member exits, and dissolution. Without a written agreement, Tennessee statutory defaults fill the gaps, and those defaults may not match what the founders intended. For a Series LLC, the operating agreement is especially important because it must support separate records and assets for each series.',
    },
    {
      title: 'Handle taxes, licenses, and the Annual Report',
      description:
        'Register through TNTAP if you need Tennessee tax accounts for franchise and excise tax, sales tax, or business tax. Tennessee business license rules are tied to gross receipts by county or city jurisdiction, not a single statewide license. File the Tennessee Annual Report through TNCaB every year by the 1st day of the 4th month after your fiscal year closes. The Annual Report starts at $300 and does not replace franchise and excise tax filings with the Department of Revenue.',
    },
  ],
  costPage: {
    seoTitle: `Tennessee LLC Cost (${GUIDE_YEAR}): $300 to Form, $400+/Year`,
    seoDescription:
      'A Tennessee LLC costs $300 to form for 1-6 members, then a $300 annual report plus a $100 minimum franchise tax every year. Every fee and deadline.',
    intro:
      "A Tennessee LLC costs $300 to file if it has six or fewer members. The fee is $50 per member with a $300 minimum and a $3,000 maximum, and paying online adds a small surcharge. Every year after, the Annual Report uses the same formula, so most LLCs pay $300 again by April 1 if they use a calendar year. The cost people miss is franchise tax: Tennessee LLCs generally owe it even with one member, with a $100 minimum, filed separately with the Department of Revenue. Plan on at least $400 a year to keep a Tennessee LLC active.",
    formTotal: 300,
    annualDisplay: '$400+/yr',
    yearOneTotal: 300,
    yearTwoTotal: 400,
    yearOneNote: '$300 filing, plus $0.95 by e-check or 2.29% by card',
    yearTwoNote: '$300 Annual Report + $100 minimum franchise tax',
    schedule: [
      {
        item: 'Articles of Organization',
        cost: '$300+',
        due: 'When you form. $50 per member, $300 minimum. Online adds 2.29% by card or $0.95 by e-check.',
      },
      {
        item: 'Annual Report',
        cost: '$300+',
        due: 'By the 1st day of the 4th month after your fiscal year closes. April 1 for calendar-year LLCs.',
      },
      {
        item: 'Franchise tax',
        cost: '$100 min',
        due: '0.25% of Tennessee net worth, $100 minimum. Filed with the Department of Revenue, separate from the Annual Report.',
      },
      {
        item: 'Excise tax',
        cost: '6.5%',
        due: 'Of net earnings, after a $50,000 standard deduction. Filed on the same Department of Revenue return as franchise tax.',
      },
      {
        item: 'Local business license',
        cost: '$15+',
        due: 'None under $3,000 in gross receipts. A $15 minimal activity license may apply from $3,001 to $99,999.',
      },
    ],
    verdict:
      "File online on TNCaB and pay by e-check. Approval is usually immediate, and e-check costs $0.95 instead of 2.29% by card. Tennessee doesn't sell an expedite, and you don't need one. Be your own registered agent if you have a Tennessee street address you're fine publishing; pay $50 to $300 a year for one only if you work from home and want that address off the record. Calendar April 1 for the Annual Report and register on TNTAP for franchise and excise tax right after approval.",
    faq: [
      {
        question: 'How much does an LLC cost in Tennessee?',
        answer:
          '$300 to file the Articles of Organization if the LLC has 1 to 6 members. The fee is $50 per member, with a $300 minimum and a $3,000 maximum. Paying online adds 2.29% by card or $0.95 by e-check. After that, budget at least $400 a year: the $300 Annual Report plus the $100 minimum franchise tax.',
      },
      {
        question: 'What is the Tennessee LLC annual fee?',
        answer:
          'The Annual Report uses the same formula as formation: $50 per member, $300 minimum, $3,000 maximum. It is due by the 1st day of the 4th month after your fiscal year closes, which is April 1 for calendar-year LLCs. Changing your registered agent or registered office on the report adds $20.',
      },
      {
        question: 'Does a single-member Tennessee LLC pay franchise tax?',
        answer:
          'Yes, if it is owned by an individual. Tennessee only disregards a single-member LLC for franchise and excise tax when its owner is a corporation. The franchise tax is 0.25% of Tennessee net worth with a $100 minimum. Excise tax is 6.5% of net earnings, after a $50,000 standard deduction. Both go on a Department of Revenue filing, separate from the Annual Report.',
      },
      {
        question: 'Do I need a business license for my Tennessee LLC?',
        answer:
          'Tennessee sets the license by your gross receipts in each city or county where you do business. Under $3,000, no license is required. From $3,001 to $99,999, a $15 minimal activity license may apply. At $100,000 or more, a standard business license and a state business tax return may apply.',
      },
      {
        question: 'How much is a registered agent in Tennessee?',
        answer:
          'Free if you serve yourself at a Tennessee street address, and Tennessee even lets the LLC serve as its own agent. The registered office address is public. A professional registered agent usually costs $50 to $300 a year.',
      },
    ],
    sourceUrls: [
      'https://sos.tn.gov/businesses/forms-and-fees',
      'https://sos.tn.gov/businesses/pages/create-an-account-in-tncab-to-file-an-annual-report',
      'https://www.tn.gov/revenue/taxes/franchise---excise-tax.html',
      'https://www.tn.gov/revenue/for-businesses/for-new-businesses/licenses-permits-registration.html',
    ],
  },
  registeredAgentPage: {
    lastVerified: '2026-10-15',
    seoTitle: `Tennessee Registered Agent (${GUIDE_YEAR}): Rules, Cost & Who to Use`,
    seoDescription:
      'Every Tennessee LLC needs a registered agent at a physical Tennessee address. Changing the agent is Form SS-4534 and costs $20. A missing agent is a dissolution reason.',
    intro:
      "Every Tennessee LLC has to keep a registered agent and a registered office in Tennessee. The Secretary of State describes the agent as a person or company that agrees to accept legal mail. The office has to be a physical Tennessee address. A post office box, route number, or box number alone is a reason a filing gets rejected. If you live in Tennessee and have a business address that isn't your home, serve yourself. Everyone else should hire one. A commercial agent usually costs $50 to $300 a year. Changing the agent is $20.",
    facts: [
      {
        label: 'What Tennessee calls it',
        detail: 'Registered agent, at a registered office. Required for every entity except a general partnership.',
      },
      {
        label: 'Who can serve',
        detail: 'A person or company that agrees to accept legal mail for the LLC.',
      },
      {
        label: 'Address rule',
        detail:
          'A physical Tennessee address. The Secretary of State rejects a registered office that is only a post office box, a route number, or a box number.',
      },
      {
        label: 'Change of agent',
        detail:
          '$20. On the domestic LLC forms list, that filing is SS-4534, Statement of Change of Registered Agent/Office by Entity or Agent.',
      },
      {
        label: 'If the agent resigns',
        detail: '$20, on Form SS-4420, Statement of Resignation of Registered Agent.',
      },
      {
        label: 'Office-only change by the agent',
        detail: 'Form SS-4535, Statement of Change of Registered Office by Registered Agent, is also $20.',
      },
      {
        label: 'With no agent',
        detail:
          'The Secretary of State lists being without a registered agent as a reason for administrative dissolution, along with a missed annual report.',
      },
      {
        label: 'Reinstatement',
        detail: 'Application for Reinstatement Following Administrative Dissolution, Form SS-9410, is $70.',
      },
    ],
    lapse: [
      "Yes. Tennessee requires the registered agent and the registered office the whole time the LLC exists. The Secretary of State lists being without a registered agent as a reason for administrative dissolution, in the same list as failing to file the annual report. Reinstatement after that is Form SS-9410 and costs $70. Keep a person at a physical Tennessee address who will actually open the legal mail.",
    ],
    selfAgent: [
      "Serve yourself if you have a physical Tennessee address that isn't your home and you will accept legal mail there. A post office box, route number, or box number alone will get the filing rejected. The address is public.",
    ],
    paidAgent: [
      "Hire one if you work from home or live outside Tennessee. A professional agent usually costs $50 to $300 a year. Northwest charges $125 a year, which sits in the cheap half of that range. The $20 change form is cheap. The $300 annual report is not, so don't let a missing agent become one more reason the LLC goes inactive.",
    ],
    verdict:
      "If you have a non-home Tennessee street address, be your own agent. If you work from home or live outside Tennessee, use Northwest at $125 a year. Switching later is $20 on Form SS-4534.",
    changeAgent: [
      "File Form SS-4534, Statement of Change of Registered Agent/Office by Entity or Agent. The fee is $20. The Secretary of State's FAQ also says a change of registered agent or principal address can be done as Articles of Amendment for the same $20. Use SS-4534 when the only change is the agent or the registered office. A resignation is the separate $20 Form SS-4420.",
    ],
    faq: [
      {
        question: 'Does Tennessee require a registered agent?',
        answer:
          'Yes. Every Tennessee LLC has to maintain a registered agent and a registered office in Tennessee at all times. General partnerships are the exception, not LLCs.',
      },
      {
        question: 'Can I be my own registered agent in Tennessee?',
        answer:
          'Yes, if you will accept legal mail at a physical Tennessee address. A post office box, route number, or box number alone is rejected. If that address is your home, hire an agent.',
      },
      {
        question: 'How much does it cost to change a registered agent in Tennessee?',
        answer:
          'Twenty dollars. Form SS-4534 covers a change of registered agent or registered office by the entity or by the agent. A resignation, Form SS-4420, is also $20.',
      },
      {
        question: 'What happens if my Tennessee LLC has no registered agent?',
        answer:
          'The Secretary of State lists being without a registered agent as a reason for administrative dissolution. Reinstatement after an administrative dissolution is Form SS-9410 and costs $70.',
      },
      {
        question: 'How much is a registered agent in Tennessee?',
        answer:
          'Free if you serve yourself at a physical Tennessee address. A professional agent usually costs $50 to $300 a year. Northwest charges $125 a year.',
      },
    ],
    sourceUrls: [
      'https://sos.tn.gov/businesses/forms-and-fees',
      'https://sos.tn.gov/businesses/faqs',
    ],
  },
  costBreakdown: [
    {
      item: 'Articles of Organization (Form SS-4270)',
      cost: '$50/member; $300 minimum, $3,000 maximum',
      required: 'Yes',
      notes: 'Required to form a Tennessee LLC',
    },
    {
      item: 'Online payment surcharge',
      cost: '2.29% card or $0.95 e-check',
      required: 'If filing online',
      notes: 'E-check is usually cheaper, especially for larger filings',
    },
    { item: 'Expedited filing', cost: 'N/A', required: 'Not offered', notes: 'Online filing is already immediate' },
    { item: 'Name reservation', cost: '$20', required: 'Optional', notes: '4-month hold' },
    { item: 'Assumed name / DBA', cost: '$20', required: 'Optional', notes: '5-year term' },
    {
      item: 'Registered agent service',
      cost: '$50-$300/yr',
      required: 'Optional',
      notes: 'Self-file for $0 if you have a qualifying Tennessee street address',
    },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    {
      item: 'Operating agreement',
      cost: 'Free if you draft it yourself',
      required: 'Recommended',
      notes: 'Internal document; not filed with the state',
    },
    {
      item: 'Annual Report',
      cost: '$50/member; $300 minimum, $3,000 maximum',
      required: 'Yes (recurring)',
      notes: 'Due 1st day of 4th month after fiscal year close',
    },
    {
      item: 'Registered agent change on Annual Report',
      cost: '+$20',
      required: 'Only if changing',
      notes: 'Applies if changing registered agent or registered office on the report',
    },
    {
      item: 'Franchise tax',
      cost: '0.25% of net worth; $100 minimum',
      required: 'Usually',
      notes: 'Separate Department of Revenue filing',
    },
    {
      item: 'Excise tax',
      cost: '6.5% of net earnings',
      required: 'Usually if taxable earnings',
      notes: '$50,000 standard deduction applies for qualifying tax years',
    },
    {
      item: 'Minimal activity license',
      cost: '$15',
      required: 'Conditional',
      notes: 'May apply at $3,001-$99,999 in jurisdictional gross receipts',
    },
    {
      item: 'Total (bare minimum DIY, year 1)',
      cost: '~$301-$307 upfront + $100 minimum franchise tax when due',
      isEmphasized: true,
      notes: 'Assumes 1-6 members, no commercial agent, no DBA, and no licensing layer',
    },
    {
      item: 'Total (typical with commercial agent)',
      cost: '~$525-$550+ first year',
      isEmphasized: true,
      notes: 'Filing + agent + minimum franchise tax + possible minimal activity license',
    },
    {
      item: 'Total (typical recurring)',
      cost: '~$400-$540+/yr before excise tax',
      isEmphasized: true,
      notes: 'Annual Report + minimum franchise tax, plus optional agent and license costs',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Tennessee?',
      answer:
        'The Tennessee LLC filing fee is $50 per member, with a $300 minimum and a $3,000 maximum. Most 1-6 member LLCs pay the $300 minimum. Online filings also add a payment surcharge: 2.29% for card payments or $0.95 for e-check.',
    },
    {
      question: 'What is the Tennessee LLC filing fee?',
      answer:
        'The filing fee for Tennessee Articles of Organization is $50 per member. Tennessee sets a $300 floor and a $3,000 cap, which makes it unusually expensive for multi-member LLCs compared with many nearby states.',
    },
    {
      question: 'How long does it take to get a Tennessee LLC?',
      answer:
        'Online filings through TNCaB are processed immediately or the same business day. Mail filings take about 3 to 5 business days after the state receives them, plus mail transit, so 2 to 3 weeks is a safer estimate if you mail the form.',
    },
    {
      question: 'How do I register an LLC in Tennessee?',
      answer:
        'Registering, forming, and filing a Tennessee LLC all mean filing Articles of Organization (Form SS-4270) with the Secretary of State on TNCaB. The fee is $50 per member with a $300 minimum, so most LLCs pay $300. That creates the LLC but not your tax accounts. Register on TNTAP with the Department of Revenue for franchise and excise tax, which most single-member LLCs owned by an individual still owe ($100 minimum franchise tax). Once gross receipts pass $3,000, you also need a county or city business license.',
    },
    {
      question: 'How do I apply for an LLC in Tennessee online?',
      answer:
        'Create a free account on TNCaB at tncab.tnsos.gov, the system that replaced TNBear in 2025. Search your name, start Articles of Organization for a limited liability company, and enter the registered agent and office, principal office, fiscal year-end month, management structure, and number of members. Pay the fee: $300 covers 1 to 6 members. Online filings are usually approved the same day. Tennessee has no paid expedite tier, so filing online is the fast option.',
    },
    {
      question: 'Does Tennessee offer expedited LLC filing?',
      answer:
        'No. Tennessee does not offer a paid expedited LLC filing tier. Online filing is already the fastest route and is generally processed immediately, so mailing the filing is the only real slowdown to avoid.',
    },
    {
      question: 'What is a Tennessee registered agent?',
      answer:
        'A Tennessee registered agent receives lawsuits, service of process, and official notices for the LLC. The agent must have a physical Tennessee street address called the registered office. PO boxes are not accepted, and the registered office becomes part of the public record.',
    },
    {
      question: 'Can I be my own registered agent in Tennessee?',
      answer:
        'Yes, if you have a qualifying Tennessee street address and can reliably receive legal notices. Tennessee also allows the LLC itself to serve as its own registered agent, which is unusual. The practical tradeoff is privacy because the registered office address is public.',
    },
    {
      question: 'Does Tennessee require an operating agreement?',
      answer:
        'No. Tennessee does not require a standard LLC to file or maintain an operating agreement as a formation condition. You should still create one because it controls ownership, voting, distributions, manager authority, transfers, and what happens when a member leaves.',
    },
    {
      question: 'Does Tennessee require an annual report for LLCs?',
      answer:
        'Yes. Tennessee LLCs file an Annual Report with the Secretary of State by the 1st day of the 4th month after the LLC fiscal year closes. For calendar-year LLCs, that means April 1.',
    },
    {
      question: 'How much is the Tennessee LLC Annual Report?',
      answer:
        'The Annual Report uses the same per-member formula as formation: $50 per member, with a $300 minimum and a $3,000 maximum. This is one of the most important Tennessee LLC costs because it repeats every year.',
    },
    {
      question: 'Does Tennessee require LLC publication?',
      answer:
        'No. Tennessee does not require new LLCs to publish a formation notice in a newspaper. Once the Articles are approved, there is no separate publication step.',
    },
    {
      question: 'How is a Tennessee LLC taxed?',
      answer:
        'Federally, a Tennessee LLC usually defaults to pass-through taxation. At the Tennessee level, LLCs are generally subject to franchise tax and excise tax at the entity level, even though Tennessee has no personal income tax. That includes single-member LLCs owned by an individual: Tennessee only disregards a single-member LLC for franchise and excise tax when its owner is a corporation.',
    },
    {
      question: 'Does a Tennessee LLC need a business license?',
      answer:
        'Maybe. Tennessee does not issue one blanket statewide license for every LLC, but business tax rules can require a local minimal activity license or standard business license based on gross receipts by jurisdiction. Industry-specific permits, sales tax registration, and employer registrations may also apply.',
    },
    {
      question: 'Can a nonresident start a Tennessee LLC?',
      answer:
        'Yes. Tennessee does not require members, managers, or organizers to live in the state. The LLC still needs a registered agent with a physical Tennessee street address.',
    },
    {
      question: 'Should I form in Tennessee or another state?',
      answer:
        'If your business is based in Tennessee, forming in Tennessee is usually the practical default. Forming in Wyoming or Delaware will not erase Tennessee tax, licensing, or foreign registration obligations if you actually operate from Tennessee.',
    },
  ],
  proscons: {
    pros: [
      'Online filing through TNCaB is immediate or same-day, so most founders do not need to wait on mail processing.',
      'Tennessee has no LLC publication requirement, which keeps formation simpler and more predictable.',
      'Member and manager names are not required on the Articles of Organization, giving Tennessee better public-record privacy than many states.',
      'Tennessee has no personal income tax, and the Hall income tax has been repealed.',
      'Tennessee authorizes Series LLCs and PLLCs for founders who need those structures.',
    ],
    cons: [
      'The $300 minimum filing fee is high, and the $50/member formula gets expensive for multi-member LLCs.',
      'The Annual Report repeats the same $300 minimum and $3,000 cap every year.',
      'Franchise and excise tax apply to LLCs by default, including a $100 minimum franchise tax.',
      'Local business tax and business license rules add another compliance layer after formation.',
      'No paid expedited filing tier is offered, so paper filers are stuck with standard mail processing.',
    ],
  },
};

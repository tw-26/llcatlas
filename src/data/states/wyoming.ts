import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const wyoming: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Wyoming (${GUIDE_YEAR}): $100 Fee, Steps & Timeline`,
  seoDescription:
    'Form a Wyoming LLC for $100, active the moment you file online. The $60 annual report, the real privacy limits, and why it rarely saves money if you live elsewhere.',
  lastUpdated: '2026-09-23',
  intro:
    "A Wyoming LLC costs $100 to file, and online filings are active immediately. You file Articles of Organization with the Wyoming Secretary of State through wyobiz and appoint a registered agent with a physical Wyoming street address. There's no publication requirement, and the public record doesn't list members or managers. The one ongoing state filing is the Annual Report License Tax: $60 minimum, due the first day of your formation anniversary month. If you live in another state, forming here rarely saves money, because you'll usually still register and pay fees in your home state.",
  whatYoullNeed:
    "To form a Wyoming LLC, you'll need a unique business name, a registered agent with a physical Wyoming street address, and $100 for the filing fee. Online filings are active immediately upon submission.",
  closing:
    "Form in Wyoming if you live and run your business here, want a privacy-focused holding LLC, or need the Series, Close, or DAO LLC structures the state allows. It's $100 to file, $60 minimum a year to maintain, and member and manager names stay off the public record. If you live and operate somewhere else, Wyoming usually won't lower your costs. Most states require you to register your Wyoming LLC as a foreign LLC where you actually do business, and home-state taxes still apply: California still wants $800. The legal protection also depends on how you run the LLC. Wyoming pierced the veil of a single-member LLC in GreenHunter for commingling and undercapitalization, so keep a separate bank account, adequate capital, and a real operating agreement. If you don't live in Wyoming, you need a commercial registered agent anyway, usually $99 to $199 a year.",
  inlineCtaDescription:
    "Wyoming requires a registered agent with a physical Wyoming street address. P.O. boxes, virtual offices, and UPS Store mailboxes don't qualify. If you live outside Wyoming, you need a commercial agent. If you live in Wyoming, you can be your own agent for free, but that address becomes part of the permanent public record. A privacy-focused commercial agent, usually $99 to $199 a year, keeps your home address off the filing and makes sure legal mail reaches you.",
  sidebarCtaDescription:
    "You need a physical Wyoming address for your registered agent, and P.O. boxes don't qualify. If you don't live in Wyoming, or don't want your home address on the permanent public record, use a commercial registered agent.",
  officialLinks: [
    { label: 'File your Wyoming LLC online (wyobiz)', url: 'https://wyobiz.wyo.gov/Business/RegistrationInstr.aspx' },
    { label: 'Check Wyoming name availability', url: 'https://wyobiz.wyo.gov/Business/FilingSearch.aspx' },
    {
      label: 'Download the Articles of Organization (paper)',
      url: 'https://sos.wyo.gov/forms/business/llc/llc-articlesorganization.pdf',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
    { label: 'File your Wyoming Annual Report', url: 'https://wyobiz.wyo.gov/Business/AnnualReport.aspx' },
    { label: 'Wyoming Business Division fee schedule', url: 'https://sos.wyo.gov/Business/Docs/BusinessFees.pdf' },
    { label: 'Wyoming Business Division FAQs', url: 'https://sos.wyo.gov/FAQS.aspx?root=BUS' },
    {
      label: 'Registered agent requirements',
      url: 'https://sos.wyo.gov/Business/Docs/HowToFindOrBecomeARegisteredAgent.pdf',
    },
    {
      label: 'Expedited filing rules and exclusions',
      url: 'https://sos.wyo.gov/Business/Docs/HowToRequestAnExpeditedFiling.pdf',
    },
    {
      label: 'Registered Offices and Agents Act (W.S. 17-28)',
      url: 'https://sos.wyo.gov/Forms/WyoBiz/Registered_Offices_and_Agents_Act_Chapter_28.pdf',
    },
    { label: 'Commercial registered agent FAQs', url: 'https://sos.wyo.gov/faqs.aspx?root=RAO' },
    { label: 'Wyoming commercial registered agent roster', url: 'https://sos.wyo.gov/Business/Docs/CRA-Roster.pdf' },
  ],
  taxHighlights: [
    'Wyoming has no personal income tax, no corporate income tax, no franchise tax on income, no gross-receipts/Commercial Activity Tax, and no municipal income tax. If you read that Wyoming has a CAT or city income tax, that was Ohio — Wyoming has neither.',
    'The closest thing Wyoming has to a franchise tax is the Annual Report License Tax: the greater of $60 or $0.0002 × the value of your Wyoming-located capital, property, and assets. An LLC with $300,000 or less in Wyoming assets pays the $60 floor; an LLC holding $10M of Wyoming real estate pays $2,000. If your tax owed is over $500, the state forces you to paper-file.',
    'Sales and use tax is 4% state plus 0–2% county (most counties total 5–6%). Vendors pay a one-time $60 sales-tax license fee under W.S. 39-15-106, with one exception: remote sellers registering through the SSUTA Certified Service Provider path are not charged the $60.',
    'Workers comp in Wyoming is a monopolistic state fund — for covered hazardous industries, you cannot buy private workers comp. If you have employees in those classifications, plan to register through the Department of Workforce Services, not a private carrier.',
    'Out-of-state reality check: if you live and run the business from another state, that state will almost always require you to register your Wyoming LLC as a foreign LLC there and pay its taxes. The Wyoming formation does not eliminate home-state tax nexus.',
  ],
  comparisonRows: [
    {
      state: 'Wyoming',
      annualReport: '$60 min, due 1st of anniversary month',
      upfrontCost: '$100',
      ongoingStateCost: '$60+/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No annual report; $400 annual LLC tax due June 1',
      upfrontCost: '$110',
      ongoingStateCost: '$400/yr',
    },
    {
      state: 'Nevada',
      annualReport: 'Annual List + Business License',
      upfrontCost: '~$425',
      ongoingStateCost: '$350/yr',
    },
    {
      state: 'Florida',
      annualReport: 'Annual report by May 1',
      upfrontCost: '$125',
      ongoingStateCost: '$138.75/yr',
    },
    {
      state: 'Ohio',
      annualReport: 'None for standard LLCs',
      upfrontCost: '$99',
      ongoingStateCost: '$0/yr',
    },
  ],
  filingFee: 100,
  annualReportFee: 60,
  filingTime: 'Immediate online; up to 15 business days by mail',
  filingTimeShort: 'Instant online',
  expeditedTime: null,
  expeditedFee: null,
  filingAgency: 'Wyoming Secretary of State, Business Division',
  filingAgencyUrl: 'https://sos.wyo.gov/Business/',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Wyoming has no individual or corporate income tax. The Annual Report License Tax is the greater of $60 or $0.0002 × your Wyoming-located capital, property, and assets. Sales tax is 4% state plus 0–2% county.',
  stateTax:
    'Wyoming imposes no income tax of any kind on LLCs or their members. The recurring state cost is the Annual Report License Tax, which most small LLCs pay at the $60 minimum.',
  annualReportDue: 'First day of your anniversary month',
  annualReportNote: 'Annual Report License Tax, $60 minimum (or $0.0002 × WY assets if greater)',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Wyoming-compliant LLC name',
      description:
        'Your name must be distinguishable in the Wyoming Secretary of State records and include one of the designators required by W.S. 17-29-108: Limited Liability Company, LLC, L.L.C., Limited Company, LC, L.C., Ltd. Liability Company, Ltd. Liability Co., or Limited Liability Co. Wyoming ignores "A," "The," "And," "&," punctuation, and entity designators when comparing names, so distinguishing only by "Inc." vs. "LLC" will get rejected. Bank-related words (Bank, Trust, Bancorp) require Wyoming Division of Banking approval; education words (Academy, College, Institute, University) need Department of Education approval (002-2 Wyo. Code R. § 2-1). One quirk: names that begin with the letter "A" or contain special characters get routed to manual paper review, which costs you the instant-online advantage. Search wyobiz before you draft anything. If you need to hold a name before filing, name reservation is $60 for 120 days, mail only.',
    },
    {
      title: 'Appoint a registered agent (not a statutory agent)',
      description:
        'Wyoming uses the term registered agent under W.S. 17-28-101. The agent must be either a Wyoming resident age 18 or older, or a business entity authorized to do business in Wyoming and in good standing. They must have a physical Wyoming street address — P.O. boxes, drop boxes, UPS Store addresses, virtual offices, and mail-forwarding locations all fail the statute and the filing will be rejected. A valid email is also required because Wyoming sends most notices electronically. Your LLC cannot be its own registered agent. You can serve as your own agent if you meet the residency, address, and email requirements, but the address becomes part of the permanent public record. If you live outside Wyoming or want privacy, you need a commercial registered agent — typical pricing runs $25 to $249 a year, with mainstream providers clustered between $99 and $199.',
    },
    {
      title: 'File the Articles of Organization',
      description:
        'File online at wyobiz.wyo.gov for $100 — Visa or Mastercard only, plus a 2.4% credit-card surcharge ($1 minimum). Online filings are active immediately upon submission. Paper filing is the same $100 fee, mailed to Wyoming Secretary of State, Business Division, Herschler Building East, 122 W 25th Street, Suite 101, Cheyenne, WY 82002-0020 — but mail processing takes up to 15 business days after Cheyenne receives it. Since July 1, 2026, Wyoming sells expedited review ($700 next business day, $1,400 same day), but new formations are excluded because they can be filed online — and online is already instant. The Articles ask for the LLC name, the registered agent name and physical Wyoming address, the LLC mailing address, the principal office address, an organizer signature, a contact email, and an electronic service-of-process consent checkbox. The paper form does not ask whether the LLC is member-managed or manager-managed. The online wyobiz wizard does — pick member-managed unless you have passive investors who will not run the business. A separate Consent to Appointment by Registered Agent must accompany the filing. Wyoming does not require member or manager names on Articles, ever.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Once the LLC is approved, apply for your EIN directly with the IRS at irs.gov. It is free and immediate online if the responsible party has a valid SSN or ITIN. Banks will require an EIN to open a Wyoming business account, even for a single-member LLC, and getting one keeps your SSN off routine business paperwork. Never pay a third party for an EIN. Foreign founders without an SSN file Form SS-4 by fax (855-641-6935, about 4 business days) or call the IRS international line at 267-941-1099.',
    },
    {
      title: 'Draft an operating agreement (not filed with the state)',
      description:
        'Wyoming does not require an operating agreement to be filed and does not require it to be in writing — W.S. 17-29-102 recognizes oral and implied agreements. Get one in writing anyway. Banks will demand it to open the business account, it controls anything the statute does not, and it is the document that defends your liability shield if the LLC is ever challenged. Single-member operating agreements should focus on succession, transfer restrictions, and proving the LLC is a separate entity from you personally. Multi-member agreements need to cover capital contributions, profit and loss allocations, voting rights, transfer restrictions, and buyout or dissolution mechanics. W.S. 17-29-110(c) lists the few provisions you cannot waive, including the LLC capacity to sue and be sued and a member’s right to bring an article 9 action.',
    },
    {
      title: 'Open a business bank account and keep it separate',
      description:
        'This is the step that actually preserves your liability shield. Take your filed Articles of Organization (download a free electronic Certificate of Good Standing from wyobiz to confirm status), your EIN CP-575 notice from the IRS, your operating agreement, and beneficial-owner ID to the bank. Do not commingle personal and business funds — that one habit is the most common reason Wyoming courts pierce the veil, including in GreenHunter v. Western Ecosystems (2014), where the Wyoming Supreme Court pierced the protection of a single-member Wyoming LLC for exactly this kind of sloppiness. One practical note for non-resident founders: major U.S. banks increasingly flag out-of-state Wyoming LLCs for enhanced KYC review. Some regional banks decline non-resident WY LLCs entirely, so be prepared to call ahead.',
    },
    {
      title: 'File the Annual Report every year',
      description:
        'This is Wyoming’s only ongoing state filing, and it is the one most generic guides flatten. The Annual Report License Tax is the greater of $60 or $0.0002 × the value of your Wyoming-located capital, property, and assets — most small LLCs pay the $60 floor. It is due the first day of your formation anniversary month, and you can file it up to 120 days early. Reminders go to your contact email at 60, 30, and 10 days. If your tax owed exceeds $500, the state will not let you file online — you have to paper-file. Miss the deadline and you are delinquent on the second day of the following month; miss it for 60 days and Wyoming administratively dissolves the LLC. There is no flat late penalty — the penalty is dissolution itself. Reinstatement is $100 if you were dissolved for the tax, $350 if you were dissolved for losing your registered agent.',
    },
    {
      title: 'Handle BOI, sales tax, and any industry licenses',
      description:
        'Federal beneficial ownership: FinCEN’s final rule, effective August 14, 2026, made the 2025 exemption permanent — LLCs formed in the U.S., including Wyoming LLCs, do not file BOI reports, and U.S. persons are never reported as beneficial owners. Recheck fincen.gov/boi before filing in case the rule changes. Non-U.S. companies that register to do business in Wyoming still owe a BOI report within 30 days, listing only their non-U.S. owners. State business license: there is no general Wyoming business license. If you sell taxable goods or services, you need a sales tax license from the Wyoming Department of Revenue Excise Tax Division — $60 one-time under W.S. 39-15-106, with an exception for remote sellers registering through the SSUTA Certified Service Provider path. Industry licenses (contractor, liquor, professional boards) and city or county permits may apply on top of all of that.',
    },
  ],
  costPage: {
    seoTitle: `Wyoming LLC Cost (${GUIDE_YEAR}): $100 to Form, $60+/Year`,
    seoDescription:
      'A Wyoming LLC costs $100 to form and $60 a year minimum for the Annual Report License Tax. Plus the registered agent most non-residents need.',
    intro:
      "A Wyoming LLC costs $100 to file, online or by mail, and online filings are active immediately. Paying online by card adds a 2.4% surcharge, about $2.40. After that, the Annual Report License Tax is $60 a year for most small LLCs, due the first day of your formation anniversary month, starting the year after you form. It only rises above $60 if the LLC holds more than $300,000 in Wyoming assets. The cost people miss is the one back home: if you live and run the business in another state, you'll usually register there as a foreign LLC and pay that state's fees and taxes too.",
    formTotal: 100,
    annualDisplay: '$60+/yr',
    yearOneTotal: 100,
    yearTwoTotal: 60,
    yearOneNote: 'Articles of Organization; card payment adds about $2.40',
    yearTwoNote: '$60 minimum license tax; more if WY assets top $300,000',
    schedule: [
      { item: 'Articles of Organization', cost: '$100', due: 'When you form. Same fee online or by mail; online card payments add 2.4%.' },
      {
        item: 'Annual Report License Tax',
        cost: '$60+',
        due: 'The first day of your anniversary month every year. The greater of $60 or $0.0002 times your Wyoming assets.',
      },
      {
        item: 'Missed annual report',
        cost: 'No late fee',
        due: 'The LLC is delinquent the next month. After 60 days, Wyoming administratively dissolves it.',
      },
      {
        item: 'Reinstatement',
        cost: '$100 / $350',
        due: '$100 if dissolved for the license tax, $350 if dissolved for losing your registered agent. Within 2 years.',
      },
      { item: 'Sales tax license', cost: '$60', due: 'One time, only if you sell taxable goods or services.' },
    ],
    verdict:
      "File online for $100 and skip the paper form, which can take up to 15 business days. There's no expedite to buy for a new LLC, and you don't need one. If you live in Wyoming and don't mind your street address on the permanent public record, be your own registered agent. If you live anywhere else, a commercial agent is required in practice, usually $99 to $199 a year. Calendar the first day of your anniversary month; Wyoming has no late fee, so the real penalty for missing it is dissolution.",
    faq: [
      {
        question: 'How much does an LLC cost in Wyoming?',
        answer:
          '$100 to file the Articles of Organization, online or by mail, plus a 2.4% card surcharge online. Starting the year after you form, the Annual Report License Tax is at least $60 a year. With a commercial registered agent, which most non-resident founders need, a typical first year runs $199 to $299 and later years $159 to $259.',
      },
      {
        question: 'What is the Wyoming LLC annual fee?',
        answer:
          "The Annual Report License Tax: the greater of $60 or $0.0002 times the value of your Wyoming-located capital, property, and assets. An LLC with $300,000 or less in Wyoming assets pays the $60 minimum. It's due the first day of your anniversary month, and you can file up to 120 days early. If the tax owed is over $500, you have to file on paper.",
      },
      {
        question: 'What happens if I miss the Wyoming annual report?',
        answer:
          "There's no flat late fee. The LLC becomes delinquent on the second day of the following month, and if it's 60 days late, Wyoming administratively dissolves it. Reinstatement within 2 years costs $100 if you were dissolved for the tax, or $350 if you were dissolved for losing your registered agent.",
      },
      {
        question: 'Does a Wyoming LLC save money if I live in another state?',
        answer:
          "Usually not. If you live and run the business somewhere else, that state will almost always make you register the Wyoming LLC as a foreign LLC and pay its fees and taxes. A California resident running a California business through a Wyoming LLC still owes California's $800 franchise tax, on top of Wyoming's $60 and a commercial registered agent.",
      },
      {
        question: 'How much is a registered agent in Wyoming?',
        answer:
          'Free if you are a Wyoming resident with a physical Wyoming street address, but that address goes on the permanent public record. Commercial agents range from about $25 to $249 a year, with mainstream providers between $99 and $199. Non-residents need one.',
      },
    ],
    sourceUrls: [
      'https://sos.wyo.gov/Business/Docs/BusinessFees.pdf',
      'https://wyobiz.wyo.gov/Business/AnnualReport.aspx',
      'https://sos.wyo.gov/FAQS.aspx?root=BUS',
      'https://sos.wyo.gov/Business/Docs/HowToFindOrBecomeARegisteredAgent.pdf',
    ],
  },
  registeredAgentPage: {
    lastVerified: '2026-10-06',
    seoTitle: `Wyoming Registered Agent (${GUIDE_YEAR}): Rules, Cost & Who to Use`,
    seoDescription:
      'Every Wyoming LLC needs an agent with a physical Wyoming address. Who can be their own, what a paid agent costs, and the $5 form to switch.',
    intro:
      "Every Wyoming LLC needs a registered agent: a Wyoming resident or a business authorized in Wyoming, with a physical street address in the state where legal papers can be delivered. If you live in Wyoming and have a business address that isn't your home, be your own agent and pay nothing. If you live anywhere else, you can't serve, so you'll pay a commercial agent, usually $99 to $199 a year. Switching agents later costs $5.",
    facts: [
      { label: 'What Wyoming calls it', detail: 'Registered agent (W.S. 17-28-101). Wyoming doesn’t use “statutory agent” or “resident agent.”' },
      {
        label: 'Who can serve',
        detail: 'A Wyoming resident age 18 or older, or a business entity authorized to do business in Wyoming.',
      },
      {
        label: 'Address rule',
        detail: 'A physical Wyoming street address. P.O. boxes, drop boxes, mail-forwarding services, and UPS Store mailboxes don’t qualify.',
      },
      { label: 'Email', detail: 'The agent must keep an email address the Secretary of State can use to serve documents.' },
      {
        label: 'Consent',
        detail: 'The agent signs a Consent to Appointment by Registered Agent. Paper filings attach it; online, you certify you have it and keep a copy.',
      },
      {
        label: 'Records the agent keeps',
        detail: 'Names and addresses of your members or managers, plus a member or manager the agent can contact. Kept at the agent’s office, not on the public record.',
      },
      { label: 'Change of agent', detail: '$5. Appointment of New Registered Agent and Office, signed and mailed.' },
      {
        label: 'If the agent resigns',
        detail: 'The agent must give you 30 days’ notice. Appoint a new one in that window or the LLC is marked delinquent and heads to dissolution.',
      },
      {
        label: 'Commercial agents',
        detail: 'Agents serving more than 10 Wyoming businesses must register with the state every year. The state publishes a roster.',
      },
      { label: 'Reinstatement with no agent', detail: '$350, versus $100 for an LLC dissolved over the annual report.' },
    ],
    lapse: [
      "Yes. Wyoming requires every LLC to have and keep a registered agent in the state for as long as the LLC exists, starting with the Articles of Organization. The agent is where lawsuits and Secretary of State notices are delivered. If nobody is there to receive them, a lawsuit can move forward without you knowing about it.",
      "If your agent quits, they have to notify you at least 30 days before filing their resignation. Use that window to appoint a new one. If you haven't by the time the resignation is filed, Wyoming marks the LLC delinquent and starts administrative dissolution. Reinstating an LLC dissolved for having no agent costs $350, more than three times the $100 it costs after a missed annual report.",
    ],
    selfAgent: [
      "You can be your own agent if you're at least 18, live in Wyoming, and have a physical Wyoming address that isn't a P.O. box or mailbox service. It's free, and there's no extra form beyond naming yourself in the Articles of Organization.",
      "What it costs you is privacy and availability. The address you list goes on the LLC's permanent public record, and a process server can show up there during business hours to hand you a lawsuit. If that address is your home, anyone who looks up your LLC can find where you live. If you have a shop or office in Wyoming where someone is reliably there during the day, use that address and skip the fee.",
      "If you live outside Wyoming, you can't be your own agent. You can name a friend or relative who lives there, but they take on the job: staying reachable, forwarding lawsuits quickly, and keeping your members' or managers' names and addresses on file, as the statute requires of every agent.",
    ],
    paidAgent: [
      "A commercial agent gives your LLC a Wyoming street address, receives legal papers and state mail, and forwards them to you, usually as same-day scans. Mainstream providers charge $99 to $199 a year. Wyoming requires any agent serving more than 10 businesses to register with the Secretary of State every year, and the state publishes a roster of them. The roster isn't complete and isn't an endorsement, so treat it as a starting point.",
      "Northwest charges $125 a year with no per-document fees, and its Wyoming address goes on the public record instead of yours. That's what you're paying for: a reliable in-state address and someone who will scan a lawsuit the day it arrives. If you live in Wyoming and already have a business address, you don't need it.",
    ],
    verdict:
      "If you live in Wyoming and have a business address that isn't your home, be your own registered agent and keep the $125. Everyone else, including every founder who lives outside Wyoming, should hire a commercial agent. Our pick is Northwest: $125 a year, no per-document fees, and its address on the public record instead of yours.",
    changeAgent: [
      "File the Appointment of New Registered Agent and Office with the Secretary of State. The fee is $5, and the form is signed and mailed to the Business Division in Cheyenne. It names the new agent, their physical Wyoming address, and their email, and the new agent has to sign their consent.",
      "Sign up with the new agent first, since the form needs their consent and address. Don't cancel the old agent until wyobiz shows the new one on your LLC's record. A gap leaves the LLC without an agent.",
    ],
    outOfStateNote:
      "If you live in another state, a Wyoming LLC usually doesn't save money. Your home state will almost always make you register the LLC there as a foreign LLC, which means a second registered agent in your home state, a second annual filing, and that state's fees and taxes on top of Wyoming's. A Wyoming LLC run from California still owes California's $800 a year. For a business you run from home somewhere else, form in your home state.",
    faq: [
      {
        question: 'Do I need a registered agent in Wyoming?',
        answer:
          'Yes. Every Wyoming LLC has to name a registered agent in its Articles of Organization and keep one for as long as the LLC exists. Losing your agent leads to administrative dissolution, and reinstating after that costs $350.',
      },
      {
        question: 'Can I be my own registered agent in Wyoming?',
        answer:
          "Yes, if you're at least 18, live in Wyoming, and have a physical Wyoming address that isn't a P.O. box or mailbox service. It's free. The address goes on the public record, and you need to be reachable there during business hours. Non-residents can't serve as their own agent.",
      },
      {
        question: 'How much does a registered agent cost in Wyoming?',
        answer:
          "Nothing if you serve yourself. Mainstream commercial agents charge $99 to $199 a year; Northwest charges $125 with no per-document fees. Changing agents costs $5 in state fees.",
      },
      {
        question: 'Can I use a P.O. box or virtual office for my Wyoming registered agent?',
        answer:
          "No. Wyoming requires a physical street address in the state. P.O. boxes, drop boxes, mail-forwarding services, and UPS Store mailboxes are rejected.",
      },
      {
        question: 'How do I change my registered agent in Wyoming?',
        answer:
          'Sign up with the new agent, then mail the Appointment of New Registered Agent and Office to the Secretary of State with the $5 fee and the new agent’s signed consent. Keep the old agent until wyobiz shows the change.',
      },
      {
        question: 'What happens if my Wyoming registered agent resigns?',
        answer:
          'They must notify you at least 30 days before filing the resignation. Appoint a new agent in that window. If you don’t, Wyoming marks the LLC delinquent and moves to dissolve it.',
      },
    ],
    sourceUrls: [
      'https://sos.wyo.gov/Business/Docs/HowToFindOrBecomeARegisteredAgent.pdf',
      'https://sos.wyo.gov/Forms/WyoBiz/Registered_Offices_and_Agents_Act_Chapter_28.pdf',
      'https://sos.wyo.gov/Business/Docs/BusinessFees.pdf',
      'https://sos.wyo.gov/faqs.aspx?root=RAO',
    ],
  },
  costBreakdown: [
    { item: 'Articles of Organization', cost: '$100', required: 'Yes', notes: 'Same online or by mail' },
    { item: 'Online credit-card surcharge', cost: '$2.40', required: 'If filing online', notes: '2.4% / $1 minimum' },
    {
      item: 'Expedited filing',
      cost: 'N/A',
      required: 'Not available for new LLCs',
      notes: '$700/$1,400 tiers exclude formations; online is instant',
    },
    { item: 'Name reservation', cost: '$60', required: 'Optional', notes: '120 days, mail only' },
    { item: 'Trade name (DBA) registration', cost: '$100', required: 'Optional', notes: '10 years, must be notarized' },
    { item: 'Trade name reservation', cost: '$30', required: 'Optional', notes: 'Hold a DBA before registration' },
    {
      item: 'Registered agent service',
      cost: '$25–$249/yr',
      required: 'Optional',
      notes: 'Mainstream providers $99–$199',
    },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    {
      item: 'Operating agreement',
      cost: 'Free if you draft it yourself',
      required: 'Recommended',
      notes: 'Internal document; not filed',
    },
    {
      item: 'Certified copy of Articles',
      cost: '$10 + $0.50/page (first 10), $0.15/page after',
      required: 'Optional',
      notes: 'Sometimes requested by banks',
    },
    {
      item: 'Certificate of Good Standing',
      cost: 'Free electronic / $20 manually signed',
      required: 'Optional',
      notes: 'Generate instantly on wyobiz',
    },
    {
      item: 'Annual Report License Tax',
      cost: '$60 minimum',
      required: 'Yes (recurring)',
      notes: 'Or $0.0002 × WY assets if greater',
    },
    {
      item: 'Sales tax license',
      cost: '$60',
      required: 'Conditional',
      notes: 'W.S. 39-15-106; SSUTA CSP sellers exempt',
    },
    {
      item: 'BOI (FinCEN) filing',
      cost: 'Free',
      required: 'Not required for U.S.-formed LLCs',
      notes: 'FinCEN final rule, effective Aug 14, 2026',
    },
    {
      item: 'Foreign LLC Certificate of Authority',
      cost: '$150',
      required: 'Only out-of-state LLCs',
      notes: 'Mail only',
    },
    { item: 'Series LLC designation', cost: '$10 per series', required: 'Optional', notes: 'W.S. 17-29-211' },
    { item: 'Registered agent change or resignation', cost: '$5', required: 'Conditional', notes: 'Per filing' },
    { item: 'Reinstatement (tax)', cost: '$100', required: 'If dissolved', notes: 'Within 2 years of dissolution' },
    { item: 'Reinstatement (no registered agent)', cost: '$350', required: 'If dissolved', notes: 'Higher penalty' },
    { item: 'Articles of Dissolution', cost: '$60', required: 'When closing', notes: 'Final filing' },
    {
      item: 'Total (bare minimum DIY, self-RA)',
      cost: '$100',
      isEmphasized: true,
      notes: 'Articles only; $60/yr after',
    },
    {
      item: 'Total (typical with commercial RA)',
      cost: '$199–$299 first year',
      isEmphasized: true,
      notes: '$159–$259 recurring',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Wyoming?',
      answer:
        'The state filing fee is $100, same online or by mail. If you serve as your own registered agent and meet the Wyoming residency and physical-address requirements, that is the true minimum startup cost. After year one, expect at least $60 a year for the Annual Report License Tax. With a commercial registered agent — which most non-resident founders need — typical first-year cost lands between $199 and $299 and recurring cost between $159 and $259.',
    },
    {
      question: 'How long does it take to get a Wyoming LLC?',
      answer:
        'Online filings through wyobiz are active immediately upon submission — usually within minutes, during business hours. Mail filings take up to 15 business days after the Secretary of State receives them in Cheyenne, plus transit time, so plan on roughly three to five weeks end to end. Wyoming’s paid expedited service does not cover new formations, because online is already instant. Names that start with the letter "A" or contain special characters get pulled into manual paper review, which can slow even an online filing.',
    },
    {
      question: 'How do I register an LLC in Wyoming?',
      answer:
        'Registering, forming, and filing a Wyoming LLC all mean filing Articles of Organization with the Wyoming Secretary of State for $100. Filed online on wyobiz, the LLC is active as soon as you submit. The registration people miss is the one back home: if you live and run the business in another state, that state generally treats your Wyoming LLC as a foreign LLC and requires you to register it there too, with its own fee and annual report. That is why a Wyoming LLC rarely saves money unless you actually operate in Wyoming.',
    },
    {
      question: 'How do I apply for an LLC in Wyoming online?',
      answer:
        'File at wyobiz.wyo.gov. Pick a limited liability company and enter the name, a registered agent with a physical Wyoming address, the mailing and principal office addresses, an organizer, and a contact email. Pay $100 by Visa or Mastercard plus the 2.4% card fee ($2.40). The LLC is active the moment you submit, and you can download a free Certificate of Good Standing right away. One quirk: names that start with the letter "A" have to be filed on paper.',
    },
    {
      question: 'What is a Wyoming statutory agent?',
      answer:
        'It is not a Wyoming term. Wyoming statutes (W.S. 17-28-101) use the term registered agent. "Statutory agent" is what Ohio calls the same role. If a guide or service uses "statutory agent" for Wyoming, it was written for the wrong state — same concept, wrong word.',
    },
    {
      question: 'What is a registered agent in Wyoming?',
      answer:
        'A registered agent is the person or company that receives legal notices, lawsuits, and Secretary of State correspondence on behalf of your LLC. Wyoming requires the agent to be either a Wyoming resident age 18 or older, or a business entity authorized to do business in Wyoming and in good standing. They must have a physical Wyoming street address (no P.O. boxes, no virtual offices, no UPS Stores) and a valid email. Your LLC cannot be its own agent.',
    },
    {
      question: 'Can I be my own registered agent in Wyoming?',
      answer:
        'Yes, if you are at least 18, a Wyoming resident, have a physical Wyoming street address (not a P.O. box or virtual office), and have a valid email. The tradeoffs are real: that address becomes part of the permanent public record, you have to be reachable during business hours, and you personally receive any lawsuit served on the LLC. If you live outside Wyoming or work from home, hire a commercial registered agent.',
    },
    {
      question: 'Do I need an operating agreement in Wyoming?',
      answer:
        'You do not file one with the state, and W.S. 17-29-102 even recognizes oral and implied agreements. You should still have a written one. Banks demand it to open business accounts, it controls anything the statute does not, and it is the single most important document for defending your liability shield if the LLC is ever challenged — single-member LLCs without one are noticeably more exposed to alter-ego veil-piercing.',
    },
    {
      question: 'Does Wyoming require an annual report for an LLC?',
      answer:
        'Yes. The Annual Report License Tax is due the first day of your formation anniversary month. The fee is the greater of $60 or $0.0002 × the value of your Wyoming-located capital, property, and assets — most small LLCs pay the $60 floor. You can file up to 120 days early and reminders go to your contact email at 60, 30, and 10 days. If your tax owed is over $500, you must paper-file. Miss the deadline by 60 days and Wyoming administratively dissolves the LLC.',
    },
    {
      question: 'Does Wyoming require newspaper publication for an LLC?',
      answer:
        'No. Wyoming does not require publication. Only Arizona, Nebraska, New York, Georgia, and Pennsylvania still impose newspaper publication for LLC formations.',
    },
    {
      question: 'Do Wyoming LLCs need to file BOI reports?',
      answer:
        'No. FinCEN issued a final rule on August 11, 2026 (effective August 14, 2026) that makes permanent the exemption first introduced in March 2025: every company formed in the U.S., including a Wyoming LLC, is exempt from Beneficial Ownership Information reporting. Recheck fincen.gov/boi before filing in case that changes. Non-U.S. companies that register to do business in Wyoming still owe a BOI report within 30 days, but they do not report U.S.-person owners.',
    },
    {
      question: 'How is a Wyoming LLC taxed?',
      answer:
        'Federally, Wyoming LLCs default to disregarded-entity status (single-member) or partnership (multi-member). You can elect C-corp via Form 8832 or S-corp via Form 2553. At the state level, Wyoming imposes no personal income tax, no corporate income tax, no franchise tax on income, no gross-receipts or Commercial Activity Tax, and no municipal income tax. The only state-level recurring obligation is the Annual Report License Tax. Sales and use tax (4% state plus 0–2% county) and employment taxes apply when relevant.',
    },
    {
      question: 'Can a non-resident form a Wyoming LLC?',
      answer:
        'Yes. There is no residency requirement for members, managers, or organizers, and you never need to set foot in Wyoming. The catch most guides skip: if you actually live and operate the business from another state, that state will almost certainly require you to register your Wyoming LLC as a foreign LLC there and pay its taxes and fees. A California resident running a California business through a "Wyoming LLC" still owes California’s $800 franchise tax. The Wyoming formation does not erase home-state tax nexus.',
    },
    {
      question: 'Is Wyoming actually private?',
      answer:
        'On the public state record, yes — more so than almost any other state. The Articles of Organization do not require member or manager names, and neither does the Annual Report. Only the organizer signature and the registered agent appear publicly. Federal BOI is a separate matter; under FinCEN’s final rule (effective August 14, 2026), Wyoming LLCs do not disclose beneficial owners to FinCEN either. Compared with Nevada (which publishes managers and managing members on the Annual List) or Florida (which publishes the Annual Report), Wyoming’s privacy is real and structural.',
    },
    {
      question: 'Member-managed or manager-managed?',
      answer:
        'Wyoming’s statutory default is member-managed (W.S. 17-29-407). The paper Articles of Organization form does not ask you to designate one or the other — management structure is established in the operating agreement. The wyobiz online wizard, however, does prompt you to pick one during the filing flow. Choose member-managed unless you have passive investors who will not run the business.',
    },
    {
      question: 'Does Wyoming allow Series LLCs?',
      answer:
        'Yes. W.S. 17-29-211 authorizes Series LLCs — one master LLC that internally walls off assets and liabilities into separate series for $10 per series. That makes Wyoming one of the most affordable Series LLC jurisdictions for founders managing multiple silos (rentals, IP, separate ventures) under one umbrella.',
    },
    {
      question: 'Does Wyoming have a PLLC?',
      answer:
        'No separate PLLC chapter. Wyoming uses the standard LLC for licensed professionals under W.S. 17-29-104(e), provided the relevant licensing board allows it. Each licensed member remains personally liable for their own professional conduct, and LLCs cannot be financial institutions or insurers.',
    },
    {
      question: 'Does Wyoming offer expedited filing?',
      answer:
        'Not for forming an LLC. Since July 1, 2026, the Secretary of State offers expedited review for $700 (next business day) or $1,400 (same day) on top of the filing fee, but filings that can be done online — including new LLC formations and annual reports — are excluded. File the Articles online and the LLC is active immediately, for $100 plus the 2.4% card fee.',
    },
    {
      question: 'Do I need a business license in Wyoming?',
      answer:
        'There is no general Wyoming business license. If you sell taxable goods or services, you need a sales tax license from the Wyoming Department of Revenue Excise Tax Division — $60 one-time under W.S. 39-15-106 (with an exception for remote sellers registering through the SSUTA Certified Service Provider path). Industry licenses (contractor, liquor, professional boards) and city or county permits may also apply.',
    },
    {
      question: 'How do I dissolve a Wyoming LLC?',
      answer:
        'File Articles of Dissolution with the Secretary of State for $60, following the winding-up procedures in W.S. 17-29-701 through 17-29-709 (member consent, court decree, or an event specified in your operating agreement). Settle creditor claims under W.S. 17-29-703 et seq. before distributing remaining assets to members.',
    },
  ],
  proscons: {
    pros: [
      'Low cost to start and keep: $100 to file, $60 minimum a year to maintain, and online filings are active immediately.',
      'No personal income tax, no corporate income tax, no franchise tax on income, no gross-receipts or Commercial Activity Tax, and no municipal income tax.',
      'Real public-record privacy: member and manager names are not required on Articles or on the Annual Report — only the organizer and registered agent appear publicly.',
      "Strong charging-order protection (W.S. 17-29-503(g)), explicitly extended to single-member LLCs. Creditors can't foreclose on a member's LLC interest.",
      'Wyoming wrote the first U.S. LLC statute in 1977, which gives it the deepest body of LLC case law and a Series LLC, Close LLC, and DAO LLC framework most other states do not have.',
    ],
    cons: [
      "Miss the annual report by 60 days and Wyoming administratively dissolves the LLC. There's no late fee; dissolution is the penalty.",
      'The Annual Report License Tax scales with Wyoming-located assets ($0.0002 × assets), so an LLC holding significant Wyoming property pays well above the $60 floor.',
      'If you live and operate the business in another state, forming in Wyoming does not erase home-state taxes. You will usually still owe foreign-LLC registration and the home state’s franchise or privilege tax.',
      'GreenHunter v. Western Ecosystems (2014) — the Wyoming Supreme Court pierced the veil of a single-member Wyoming LLC for commingling and undercapitalization. The statute only protects you if you run the LLC as a separate business.',
      'Some regional U.S. banks decline accounts for non-resident Wyoming LLCs, and major banks increasingly flag them for enhanced KYC review.',
    ],
  },
};

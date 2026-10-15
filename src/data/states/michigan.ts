import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const michigan: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Michigan (${GUIDE_YEAR}): $50 Fee, Steps & Timeline`,
  seoDescription:
    'Form a Michigan LLC with LARA for $50, approved in up to 10 business days. Then the $25 Annual Statement due February 15, resident agent rules, and what to skip.',
  lastUpdated: '2026-10-14',
  intro:
    "A Michigan LLC costs $50 to file. You file Articles of Organization (Form CSCL/CD-700) through LARA's MiBusiness Registry Portal, not the Secretary of State, and LARA says standard review can take up to 10 business days. Michigan calls the required agent a resident agent, and they need a Michigan street address. There's no publication requirement. The one ongoing state filing is the $25 Annual Statement, due every February 15.",
  whatYoullNeed:
    "To form a Michigan LLC, you'll need a unique business name, a resident agent with a physical Michigan street address, and $50 for the filing fee. LARA says standard review can take up to 10 business days.",
  closing:
    "If you live and operate in Michigan, form in Michigan. The $50 filing fee is low, there's no publication step, and there's no reason to form in Wyoming or Delaware instead. After formation, two things matter. The $25 Annual Statement is due every February 15. A standard LLC doesn't pay a late fee, but miss it two years in a row and LARA sends a notice. Sixty days later the LLC falls out of good standing, your name becomes available to anyone, and getting back costs $50 plus every missed $25 statement. And if you live or work in Detroit, Grand Rapids, Lansing, or another of Michigan's 24 cities with an income tax, plan for that city tax separately. You can be your own resident agent if you have a Michigan street address. A professional service, usually $99 to $249 a year, keeps your home address off the record if you work from home.",
  inlineCtaDescription:
    "Your resident agent's name and address go on Michigan's public record permanently. If you have a Michigan street address and are there during business hours, you can serve yourself for free. If you work from home, travel often, or don't want your address tied to the filing, a professional resident agent, usually $99 to $249 a year, keeps it private and makes sure legal notices reach you.",
  sidebarCtaDescription:
    "If you work from home, don't want your address on the public record, or can't reliably be at a Michigan street address during business hours, use a professional resident agent instead of listing yourself.",
  officialLinks: [
    { label: 'File your Michigan LLC online (MiBRP)', url: 'https://www.michigan.gov/corpfileonline' },
    { label: 'Check Michigan name availability', url: 'https://www.michigan.gov/corpentitysearch' },
    {
      label: 'Download Form CSCL/CD-700',
      url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/cscl/NonImages_new/Corps/forms/llc/700-0725.pdf',
    },
    {
      label: 'LARA Corporations Division filing fee schedule',
      url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/cscl/Folder6/Filing_Fees.pdf',
    },
    {
      label: 'Annual Statement due date, fee, and consequences (LARA)',
      url: 'https://www.michigan.gov/lara/bureau-list/cscl/corps/michigan-business-roadmap/annual-reports-and-annual-statements',
    },
    {
      label: 'Michigan LLC Act filing fees (MCL 450.5101)',
      url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-450-5101',
    },
    {
      label: 'Michigan resident agent and registered office (MCL 450.4207)',
      url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-450-4207',
    },
    {
      label: 'Change a Michigan LLC resident agent (LARA)',
      url: 'https://www.michigan.gov/lara/bureau-list/cscl/corps/limited-liability-co/filling-requirements-continued/limited-liability-company-changes',
    },
    {
      label: 'Certificate of Change of Registered Office and/or Resident Agent (CSCL/CD-520)',
      url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/cscl/NonImages_new/Corps/forms/corporation/520-0725.pdf',
    },
    {
      label: 'LARA filing fees, including resident agent change',
      url: 'https://www.michigan.gov/-/media/Project/Websites/lara/cscl/Folder6/Filing_Fees.pdf?rev=db2522dff4d445a581c925e6f840d3f8',
    },
    {
      label: 'Michigan 2026 individual income tax rate (Treasury)',
      url: 'https://www.michigan.gov/treasury/reference/taxpayer-notices/2026/04/15/425-income-tax-rate-for-individuals-and-fiduciaries-in-2026-tax-year',
    },
    {
      label: 'Michigan cities that levy an income tax (Treasury)',
      url: 'https://www.michigan.gov/taxes/citytax/what-cities-impose-an-income-tax',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number',
    },
  ],
  taxHighlights: [
    'Michigan does not have a Commercial Activity Tax or any gross-receipts tax. If you have read that Michigan has a CAT, that was Ohio. Michigan’s state business taxes are the 6% Corporate Income Tax (C-corps only) and the elective Flow-Through Entity tax for eligible pass-throughs. Most small LLCs default to pass-through and simply pick up Michigan’s 4.25% individual income tax at the owner level.',
    'The real Michigan tax complexity is local. 24 Michigan cities levy their own income tax, including Detroit (2.4% resident / 1.2% nonresident) and Grand Rapids (1.5% resident / 0.75% nonresident). Pass-through LLC members owe city tax where they live or work, and the credit your home city gives for tax paid to another city is capped at your home city’s nonresident rate (0.5% in most cities). If you or your business touches a city with income tax, build local filings into your compliance plan from day one.',
    'Actionable takeaway: if you only operate outside the 24 city-tax jurisdictions, Michigan runs easy and cheap. If you touch Detroit, Grand Rapids, Lansing, or any other city with a local income tax, treat the city filing as a real obligation — not an afterthought — and coordinate it with your federal and state returns.',
  ],
  comparisonRows: [
    {
      state: 'Michigan',
      annualReport: 'Annual Statement, $25 by Feb 15',
      upfrontCost: '$50',
      ongoingStateCost: '$25/yr',
    },
    {
      state: 'Ohio',
      annualReport: 'None for standard LLCs',
      upfrontCost: '$99',
      ongoingStateCost: '$0/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No annual report; $400 annual LLC tax due June 1',
      upfrontCost: '$110',
      ongoingStateCost: '$400/yr',
    },
    {
      state: 'Wyoming',
      annualReport: 'Annual report required',
      upfrontCost: '~$100',
      ongoingStateCost: '$60+/yr',
    },
    {
      state: 'Florida',
      annualReport: 'Annual report by May 1',
      upfrontCost: '$125',
      ongoingStateCost: '$138.75/yr',
    },
  ],
  filingFee: 50,
  annualReportFee: 25,
  filingTime: 'Up to 10 business days (LARA posts a live "processed through" date)',
  filingTimeShort: 'Up to 10 days',
  expeditedTime: '24-hour $50, same-day $100, 2-hour $500, 1-hour $1,000',
  expeditedFee: 50,
  filingAgency: 'Michigan Department of Licensing and Regulatory Affairs (LARA), Corporations Division',
  filingAgencyUrl: 'https://www.michigan.gov/lara/bureau-list/cscl/corps',
  agentTerm: 'resident agent',
  stateTaxRate:
    'Michigan individual income tax is 4.25% flat for 2026. Corporate Income Tax is 6% and applies only to C-corps. The elective Flow-Through Entity tax runs at the same 4.25% rate and is a SALT-cap workaround for eligible pass-throughs.',
  stateTax:
    'Most Michigan LLCs default to pass-through taxation, so income is taxed at the owner level at 4.25%. Michigan has no CAT or gross-receipts tax. The real state-specific burden is municipal income tax in 24 cities.',
  annualReportDue: 'February 15',
  annualReportNote: 'Annual Statement, $25 each year',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Michigan-compliant LLC name',
      description:
        'Your name must be distinguishable on LARA’s records and include one of Michigan’s approved designators: Limited Liability Company, L.L.C., L.C., LLC, or LC. It cannot contain "corporation," "incorporated," "corp.," or "inc." Search the MiBusiness Registry before you draft anything. If you want to hold the name before filing, use Form CSCL/CD-540 to reserve it for six months for $25. If you plan to operate publicly under a different name, file Form CSCL/CD-541 for an assumed name (Michigan’s DBA) for $25 — in Michigan, that filing goes to LARA, not the county clerk.',
    },
    {
      title: 'Appoint a resident agent (Michigan’s term — not statutory agent)',
      description:
        'Michigan calls this role a resident agent. The agent must be a Michigan resident whose home or business office is the registered office, or a corporation or LLC authorized in Michigan whose business office is that address. The form rejects a P.O. box. You can serve yourself if you live in Michigan. That address stays on the public record. Changing agents later is a $5 filing, Form CSCL/CD-520. Whatever other states call this role, on your Michigan filing use the term "resident agent."',
    },
    {
      title: 'File Form CSCL/CD-700 with LARA',
      description:
        'File through the MiBusiness Registry Portal at mibusinessregistry.lara.state.mi.us, which replaced the old COFS system in June 2025. The fee is $50, whether you file online or by mail. The filing agency is LARA’s Corporations Division — not the Michigan Secretary of State. You will need your LLC name, your resident agent’s name, the registered office street address, and an organizer signature. Michigan defaults to member-managed unless you say otherwise, so if you want a manager-managed LLC you must add that statement in Article V. You can also set a delayed effective date of up to 90 days after receipt if you want to start on a specific future date.',
    },
    {
      title: 'Wait for approval or pay for expedited processing',
      description:
        'LARA says standard review can take up to 10 business days, and the Business Entity Search shows a live "processed through" date so you can see the current backlog. If you need it faster, Michigan’s expedited tiers sit on top of the $50 base fee: 24-hour review for +$50, same-day for +$100, 2-hour for +$500, and 1-hour for +$1,000. After approval, LARA returns stamped Articles to the registered office and gives you a Customer ID Number and PIN for future filings through MiBRP.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Once the LLC is approved, apply for your EIN directly with the IRS. It is free and usually immediate online. Banks will require it to open a business account, and even single-member LLCs should get one to keep their SSN off routine business paperwork. Never pay a third party for an EIN.',
    },
    {
      title: 'Put your operating basics in place',
      description:
        'Draft an operating agreement, open a business bank account, and handle any industry or local licensing that applies. Michigan does not require the operating agreement to be filed with the state, but banks will ask for it and it is what actually protects your liability shield if things ever get tested. Michigan has no general state business license — licensing is driven by what you sell and where, so check with LARA and your city or township if you are in a regulated trade.',
    },
    {
      title: 'File the Annual Statement every February 15',
      description:
        'This is Michigan’s one ongoing state filing, and it is the thing generic guides get wrong. It is called an Annual Statement — not an annual report — and it is filed online only through MiBRP using Form CSCL/CD-2700. The fee is $25. Standard LLCs do not pay a late fee (the $50 late penalty applies only to professional PLLCs), but do not treat that as slack: miss it two years in a row and LARA sends a notice, and if you do not catch up within 60 days the LLC is not in good standing. Your name becomes available for someone else to use, you cannot get a good standing certificate, and getting back requires a $50 Certificate of Restoration plus $25 for every missed year. One useful exception: if you form after September 30, you skip the immediately following February 15 filing. Under current law the fee is scheduled to drop to $15 for statements paid after September 30, 2027.',
    },
  ],
  costPage: {
    seoTitle: `Michigan LLC Cost (${GUIDE_YEAR}): $50 to Form, $25/Year`,
    seoDescription:
      'A Michigan LLC costs $50 to form and $25 a year for the Annual Statement due February 15. Who skips the first one, and what restoration costs if you miss two.',
    intro:
      "A Michigan LLC costs $50 to form, online or by mail, and $25 a year after that for the Annual Statement, due every February 15. If you form after September 30, you skip the February 15 right after, so your first statement is due about 15 months later. Under current law, the fee is scheduled to drop to $15 for statements paid after September 30, 2027. A standard LLC pays no late fee, which is the trap: miss two years in a row and the LLC falls out of good standing 60 days after LARA's notice, and restoring it costs $50 plus $25 for every missed year.",
    formTotal: 50,
    annualDisplay: '$25/yr',
    yearOneTotal: 50,
    yearTwoTotal: 25,
    yearOneNote: 'Articles if you form Oct-Dec; add the $25 statement if Jan-Sep',
    yearTwoNote: 'Annual Statement due Feb 15; scheduled to drop to $15 in late 2027',
    schedule: [
      { item: 'Articles of Organization', cost: '$50', due: 'When you form. Same fee online or by mail.' },
      {
        item: 'Annual Statement',
        cost: '$25',
        due: 'February 15 every year, online only. Form after September 30 and you skip the first February 15.',
      },
      { item: 'Late fee', cost: '$0', due: 'None for a standard LLC. Professional PLLCs pay $50.' },
      {
        item: 'Certificate of Restoration',
        cost: '$50+',
        due: "Only if you miss two years and don't catch up within 60 days of LARA's notice. Plus $25 for every missed year.",
      },
      {
        item: 'City income tax',
        cost: 'Varies',
        due: 'If you live or work in one of 24 cities with an income tax, such as Detroit (2.4% resident) or Grand Rapids (1.5% resident).',
      },
    ],
    verdict:
      "File online through MiBRP for $50 and skip the expedite. Standard review takes up to 10 business days, and the $50 24-hour option is only worth it if a deadline depends on it. Be your own resident agent if you have a Michigan street address and don't mind it on the permanent public record; otherwise a professional agent costs $99 to $249 a year. Calendar February 15 every year, and keep the Customer ID and PIN LARA gives you, because you need them to file.",
    faq: [
      {
        question: 'How much does an LLC cost in Michigan?',
        answer:
          "$50 to file the Articles of Organization, online or by mail. If you serve as your own resident agent, that's the whole formation cost. After that, the Annual Statement is $25 every February 15. If you form after September 30, your first statement isn't due until the second February 15.",
      },
      {
        question: 'What is the Michigan LLC annual fee?',
        answer:
          "$25 for the Annual Statement, due February 15 every year and filed online only. Under current law, the fee is scheduled to drop to $15 for statements paid after September 30, 2027. A standard LLC pays no late fee, but if you miss two years in a row, the LLC falls out of good standing 60 days after LARA's notice and loses its hold on its name.",
      },
      {
        question: 'What happens if I miss the Michigan Annual Statement?',
        answer:
          "Nothing right away for a standard LLC; there's no late fee. Miss two years in a row and LARA sends a notice. If you don't catch up within 60 days, the LLC isn't in good standing, anyone can take your name, and you can't get a good standing certificate. Restoring it costs $50 plus $25 for every missed year.",
      },
      {
        question: 'Is the Michigan expedite fee worth it?',
        answer:
          "Usually not. Standard review takes up to 10 business days, and LARA posts a live \"processed through\" date so you can see the backlog. If a deadline depends on the LLC, 24-hour review is $50 more and same-day is $100 more. The 2-hour ($500) and 1-hour ($1,000) tiers aren't worth it for a first LLC.",
      },
      {
        question: 'How much is a resident agent in Michigan?',
        answer:
          "Free if you have a Michigan street address and serve yourself, but the address goes on the permanent public record. A professional resident agent usually costs $99 to $249 a year.",
      },
    ],
    sourceUrls: [
      'https://www.michigan.gov/lara/-/media/Project/Websites/lara/cscl/Folder6/Filing_Fees.pdf',
      'https://www.michigan.gov/lara/bureau-list/cscl/corps/michigan-business-roadmap/annual-reports-and-annual-statements',
      'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-450-5101',
      'https://www.michigan.gov/taxes/citytax/what-cities-impose-an-income-tax',
    ],
  },
  registeredAgentPage: {
    lastVerified: '2026-10-14',
    seoTitle: `Michigan Registered Agent (${GUIDE_YEAR}): Rules, Cost & Who to Use`,
    seoDescription:
      'Michigan calls this a resident agent. Who can be their own, what a paid agent costs, and the $5 filing to switch.',
    intro:
      "Michigan calls this a resident agent. Every Michigan LLC needs one, and a registered office in Michigan that is the agent's home or business office. A P.O. box doesn't qualify. If you live in Michigan and have a business address that isn't your home, be your own agent and pay nothing. If you live anywhere else, you can't serve, so you'll pay a commercial agent, usually $99 to $249 a year. Switching agents costs $5.",
    facts: [
      {
        label: 'What Michigan calls it',
        detail: 'Resident agent, at a registered office (MCL 450.4207). Michigan does not use “statutory agent” on the filing.',
      },
      {
        label: 'Who can serve',
        detail:
          'A Michigan resident whose home or business office is the registered office, or a Michigan corporation or LLC, or a foreign corporation or LLC authorized in Michigan, whose business office is that same address.',
      },
      {
        label: 'Address rule',
        detail:
          'A Michigan street address. LARA’s change form says a post office box may not be the registered office. The office can be the LLC’s place of business, but it does not have to be.',
      },
      {
        label: 'Change of agent',
        detail:
          '$5. Certificate of Change of Registered Office and/or Change of Resident Agent, Form CSCL/CD-520. LARA’s fee schedule says it can be filed online.',
      },
      {
        label: 'If the agent resigns',
        detail:
          '$5. Resignation of Resident Agent, Form CSCL/CD-521, on the domestic LLC fee schedule. Appoint a replacement on Form 520 so the LLC is not left without an agent.',
      },
      {
        label: 'Annual Statement',
        detail:
          'Due February 15. It reports the resident agent’s name and the registered office address. An LLC formed after September 30 skips the first February 15.',
      },
      {
        label: 'If nobody is there',
        detail:
          'If the LLC has no agent, or the agent cannot be found or served with reasonable diligence, the person suing can deliver or send by registered mail a summons and complaint to LARA, the administrator.',
      },
    ],
    lapse: [
      'Yes. Michigan requires every LLC to continuously keep a resident agent and a registered office in the state. The agent is who lawsuits and official notices are served on. If the LLC has no agent, or the agent cannot be found, the person suing can send a summons and complaint to LARA by registered mail. If nobody is watching for that, the case can move forward without you knowing about it.',
      'The Annual Statement, due every February 15, has to name the current agent and registered office. That is a separate $25 filing from a change of agent. A change itself is Form CSCL/CD-520 and costs $5. If your agent resigns, they file Form CSCL/CD-521, also $5 on the LLC fee schedule. Name a new agent before there is a gap.',
    ],
    selfAgent: [
      "You can be your own agent if you live in Michigan and the registered office is your home or your business office. It's free. You name yourself on the Articles of Organization.",
      "What it costs you is privacy and availability. The address goes on LARA's public record, and a process server has to be able to find you there. If they can't, they can serve LARA instead. If that address is your home, anyone who looks up the LLC can find where you live. If you have a shop or office in Michigan where someone is reliably there, use that address and skip the fee.",
      "If you live outside Michigan, you can't be your own agent. You can name a friend or relative who lives there, but they take on the job of being findable at that address and forwarding lawsuits. If they resign, replace them before the LLC is left with no agent.",
    ],
    paidAgent: [
      "A commercial agent gives your LLC a Michigan street address, receives legal papers and state mail, and forwards them to you, usually as same-day scans. Mainstream providers charge $99 to $249 a year. The company has to be a Michigan corporation or LLC, or a foreign one authorized to do business here, and its business office has to be the registered office.",
      "Northwest charges $125 a year with no per-document fees, and its Michigan address goes on the public record instead of yours. That's what you're paying for: a reliable in-state address and someone who will scan a lawsuit the day it arrives. If you live in Michigan and already have a business address, you don't need it.",
    ],
    verdict:
      "If you live in Michigan and have a business address that isn't your home, be your own resident agent and keep the $125. Everyone else, including every founder who lives outside Michigan, should hire a commercial agent. Our pick is Northwest: $125 a year, no per-document fees, and its address on the public record instead of yours.",
    changeAgent: [
      'File Form CSCL/CD-520, Certificate of Change of Registered Office and/or Change of Resident Agent, with LARA. The fee is $5, and the domestic LLC fee schedule says the form can be filed online. A manager signs it if the LLC is manager-managed. A member signs it if the members still manage it. The agent can sign only if the filing changes the office address and not the agent. The form does not accept a P.O. box.',
      "Sign up with the new agent first, since the form needs their name and Michigan street address. Don't cancel the old agent until LARA's record shows the new one.",
    ],
    faq: [
      {
        question: 'Do I need a registered agent in Michigan?',
        answer:
          'Yes. Michigan calls the role a resident agent. Every Michigan LLC has to keep one, and a Michigan registered office, for as long as the LLC exists. If there is no agent, or the agent cannot be found, a lawsuit can be served on LARA instead.',
      },
      {
        question: 'Can I be my own resident agent in Michigan?',
        answer:
          "Yes, if you live in Michigan and the registered office is your home or your business office. It's free. The address goes on the public record. A P.O. box doesn't qualify. Non-residents can't serve as their own agent.",
      },
      {
        question: 'How much does a resident agent cost in Michigan?',
        answer:
          'Nothing if you serve yourself. Mainstream commercial agents charge $99 to $249 a year. Northwest charges $125 a year with no per-document fees. Changing agents costs $5.',
      },
      {
        question: 'Can I use a P.O. box for my Michigan resident agent?',
        answer:
          'No. The registered office has to be a Michigan street address, and it has to be the agent’s home or, for a company, its business office. LARA’s change form says a post office box may not be designated as the registered office.',
      },
      {
        question: 'How do I change my resident agent in Michigan?',
        answer:
          'Sign up with the new agent, then file Form CSCL/CD-520 with LARA. The fee is $5. A manager or member signs it, depending on who manages the LLC. Keep the old agent until LARA shows the change.',
      },
      {
        question: 'What happens if my Michigan resident agent resigns?',
        answer:
          'They file Form CSCL/CD-521. LARA’s domestic LLC fee schedule charges $5 for that resignation. Appoint a new agent on Form CSCL/CD-520, also $5, before the LLC is left without one. With no agent, a lawsuit can be served on LARA.',
      },
    ],
    sourceUrls: [
      'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-450-4207',
      'https://www.michigan.gov/-/media/Project/Websites/lara/cscl/Folder6/Filing_Fees.pdf?rev=db2522dff4d445a581c925e6f840d3f8',
      'https://www.michigan.gov/lara/bureau-list/cscl/corps/limited-liability-co/filling-requirements-continued/limited-liability-company-changes',
      'https://www.michigan.gov/lara/-/media/Project/Websites/lara/cscl/NonImages_new/Corps/forms/corporation/520-0725.pdf',
    ],
  },
  costBreakdown: [
    { item: 'Articles of Organization (Form CSCL/CD-700)', cost: '$50', required: 'Yes', notes: 'Same online or mail' },
    { item: 'Name reservation (Form CSCL/CD-540)', cost: '$25', required: 'Optional', notes: '6-month hold' },
    { item: 'Assumed name / DBA (Form CSCL/CD-541)', cost: '$25', required: 'Optional', notes: '5-year term' },
    { item: 'Resident agent service', cost: '$99-$249/yr', required: 'Optional', notes: 'Self-file for $0 if eligible' },
    { item: 'Expedited 24-hour', cost: '+$50', required: 'Optional', notes: 'On top of $50 base' },
    { item: 'Expedited same-day', cost: '+$100', required: 'Optional', notes: 'Filed by 1 PM ET' },
    { item: 'Expedited 2-hour', cost: '+$500', required: 'Optional', notes: 'Filed by 3 PM ET' },
    { item: 'Expedited 1-hour', cost: '+$1,000', required: 'Optional', notes: 'Filed by 4 PM ET' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal document' },
    { item: 'Certificate of Good Standing', cost: '$10', required: 'Optional', notes: 'Situation-specific' },
    { item: 'Annual Statement (Form CSCL/CD-2700)', cost: '$25/yr', required: 'Yes (recurring)', notes: 'Due February 15' },
    { item: 'Certificate of Restoration of Good Standing (Form CSCL/CD-770)', cost: '$50 + $25 per missed year', required: 'Only if 2+ years missed', notes: 'No late fee for standard LLCs' },
    { item: 'Foreign LLC registration (Form CSCL/CD-760)', cost: '$50', required: 'Only out-of-state LLCs', notes: 'Certificate of Authority' },
    { item: 'Total (bare minimum DIY)', cost: '$50', isEmphasized: true, notes: 'State filing only' },
    { item: 'Total (typical with service)', cost: '$149-$299 first year', isEmphasized: true, notes: 'Paid agent, no expediting' },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Michigan?',
      answer:
        'The state filing fee is $50, same online or by mail. If you serve as your own resident agent, that is the true minimum startup cost. Add $25 every February 15 for the Annual Statement going forward. If you use a commercial resident agent service, expect $99 to $249 a year on top of the $50 filing. The takeaway: $50 is the floor, but most founders who want privacy will spend $150 to $300 in year one.',
    },
    {
      question: 'How long does it take to get a Michigan LLC?',
      answer:
        'LARA says standard review can take up to 10 business days, and the MiBusiness Registry Business Entity Search posts a live "processed through" date that tells you how current the queue is. If timing matters, Michigan offers expedited tiers on top of the $50 base fee: 24-hour for an extra $50, same-day for $100, 2-hour for $500, and 1-hour for $1,000. Mail filings can take noticeably longer because of transit and receipts processing — if you are in a hurry, do not mail it.',
    },
    {
      question: 'How do I register an LLC in Michigan?',
      answer:
        'Registering, forming, and filing a Michigan LLC all mean filing Articles of Organization (Form CSCL/CD-700) with LARA\'s Corporations Division, not the Secretary of State. The fee is $50, and that is the whole state formation step. After approval, register with the Michigan Department of Treasury only if you will collect sales tax or have employees; Michigan has no general state business license. If you will operate under a different name, register an assumed name with LARA for $25.',
    },
    {
      question: 'How do I apply for an LLC in Michigan online?',
      answer:
        'File on the MiBusiness Registry Portal at mibusinessregistry.lara.state.mi.us, which replaced COFS in June 2025. Create an account, search your name, start Articles of Organization for a domestic LLC, and enter the resident agent, the registered office street address, and an organizer signature. Add a manager-managed statement only if you want one; otherwise Michigan defaults to member-managed. Pay $50. Standard review takes up to 10 business days, and 24-hour review costs $50 more. Keep the Customer ID and PIN you get after approval; you need them for every Annual Statement.',
    },
    {
      question: 'Do I need an operating agreement in Michigan?',
      answer:
        'You do not need to file one with the state. But you should still have one. Banks ask for it to open a business account, and it is what actually keeps your personal assets separate from the company if things ever get tested. Treat it as part of a clean LLC setup, not as optional paperwork.',
    },
    {
      question: 'What is a resident agent in Michigan?',
      answer:
        'It is Michigan’s term for the person or company that receives legal notices and official state correspondence for the LLC. Other states call this role a registered agent or a statutory agent, but on your Michigan filing you will use the term resident agent. The agent must have a physical Michigan street address (no P.O. boxes) and be available during business hours.',
    },
    {
      question: 'Can I be my own resident agent in Michigan?',
      answer:
        'Yes, if you are a Michigan resident with a physical Michigan street address where you can be reached during business hours. The tradeoff is privacy and reliability. Your address becomes part of the permanent public record, and if you are not there when a process server shows up, you can miss a lawsuit. If you work from home or travel, a commercial resident agent is usually the better choice.',
    },
    {
      question: 'Can I use my home address for my LLC in Michigan?',
      answer:
        'Yes, and many founders do, especially if they are their own resident agent. The problem is that the address becomes permanently tied to the public filing, anyone can look it up, and you may be served with legal process in front of customers or family. If privacy matters, put a commercial resident agent’s address on the filing instead.',
    },
    {
      question: 'What happens if I don’t maintain a resident agent in Michigan?',
      answer:
        'Michigan requires every LLC to keep a resident agent and registered office on file at all times. If the role lapses or the agent resigns without a replacement, you can miss legal notices and state correspondence — and service of process can end up with the state administrator by default. The practical takeaway: if you do not want to manage that reliably yourself, pay for a service and remove the risk.',
    },
    {
      question: 'Does Michigan require an annual report for an LLC?',
      answer:
        'Not an annual report — an Annual Statement. That is Michigan’s own terminology, and the distinction matters because a lot of generic LLC guides wrongly say Michigan has no annual filing. For a standard LLC, you file Form CSCL/CD-2700 every year by February 15, the fee is $25, and as of the 2025 portal change, it is filed online only through MiBRP. There is no late fee for a standard LLC, but miss two years in a row and the LLC falls out of good standing 60 days after LARA’s notice. Restoring it costs $50 plus $25 for every missed year.',
    },
    {
      question: 'Does Michigan require newspaper publication for an LLC?',
      answer:
        'No. Michigan has no publication requirement for LLCs. You do not have to run a formation notice in a newspaper the way you would in a state like New York, which keeps the setup cost predictable and lower overall.',
    },
    {
      question: 'Do Michigan LLCs need to file BOI reports?',
      answer:
        'No. FinCEN’s final rule, effective August 14, 2026, made permanent the exemption first issued in March 2025: companies created in the U.S. — including Michigan LLCs — do not file Beneficial Ownership Information reports. Ignore any checklist written before 2025 that says otherwise, and recheck FinCEN’s BOI page before filing in case the rules change again.',
    },
    {
      question: 'Does Michigan have a Commercial Activity Tax?',
      answer:
        'No. Michigan does not have a Commercial Activity Tax, a franchise tax, or any gross-receipts tax on LLCs. The Michigan Business Tax was repealed in 2012 and is now a narrow legacy item for certain credit holders. If you have read that Michigan has a CAT, that was a mix-up with Ohio — Ohio has a CAT, Michigan does not.',
    },
    {
      question: 'What taxes should a Michigan LLC watch?',
      answer:
        'For most small founders there are two real issues. First, Michigan’s individual income tax at 4.25% flows through to LLC owners by default. Second — and this is the one people underestimate — 24 Michigan cities levy their own income tax. Detroit, Grand Rapids, Lansing, and others can create separate filing and withholding obligations depending on where you live, where you work, and where the business operates. If you touch any of those cities, factor city tax into your compliance plan from the start.',
    },
    {
      question: 'Do I need a business license in Michigan?',
      answer:
        'Michigan does not have a blanket statewide business license that every LLC needs. Licensing is industry-specific: contractors, cosmetologists, healthcare providers, liquor retailers, food handlers, and regulated professions all have their own paths, typically through LARA, MDARD, or local health departments. If you sell tangible goods, you will need to register for sales tax through Michigan Treasury Online. Check with LARA and your city or township before assuming no license applies.',
    },
    {
      question: 'Can a non-resident form a Michigan LLC?',
      answer:
        'Yes. Michigan does not require organizers, members, or managers to live in the state. The one in-state requirement is that the LLC must continuously maintain a resident agent at a Michigan street address. If you are out of state, that almost always means using a commercial resident agent service — it is the cleanest way to meet the requirement without opening a Michigan office.',
    },
    {
      question: 'How is a Michigan LLC taxed?',
      answer:
        'Most Michigan LLCs are taxed as pass-through entities by default — single-member LLCs are disregarded, multi-member LLCs are partnerships. Either way, income flows to the owners and is taxed at Michigan’s 4.25% individual rate. Eligible pass-throughs can elect the Flow-Through Entity tax at the same 4.25% rate as a SALT-cap workaround. LLCs that elect C-corp treatment federally owe Michigan’s 6% Corporate Income Tax. And owners in municipal-tax cities owe local tax on top of all of that.',
    },
    {
      question: 'Can I set a future effective date for my Michigan LLC?',
      answer:
        'Yes. Michigan lets you set a delayed effective date of up to 90 days after LARA receives the Articles. That is worth using intentionally if you want the LLC to start on a specific future date for tax, contract, or launch reasons.',
    },
    {
      question: 'Does Michigan allow Series LLCs?',
      answer:
        'No. Michigan has not enacted Series LLC provisions, so you cannot form a Michigan Series LLC. If you need a series structure to silo multiple ventures under one legal umbrella, you will need to form in a state that supports it, such as Delaware, Texas, Illinois, or Wyoming.',
    },
  ],
  proscons: {
    pros: [
      'The $50 filing fee is one of the lowest among major states, and the $25 Annual Statement is cheap as ongoing fees go.',
      'No publication requirement, no gross-receipts tax, and no franchise tax. The baseline cost of running a Michigan LLC stays low year after year.',
      'Online filing through the MiBusiness Registry Portal is fast, and Michigan’s expedited tiers go all the way down to 1-hour processing if you need to form immediately.',
    ],
    cons: [
      "Michigan doesn't call it an annual report, but you still have an annual filing: the $25 Annual Statement every February 15. Miss two years and the LLC falls out of good standing and loses its hold on its name.",
      '24 Michigan cities levy their own income tax, and Detroit and Grand Rapids in particular can create real compliance overhead for pass-through LLC owners who live or work in those cities.',
      'Michigan does not authorize Series LLCs, so if you need to silo multiple ventures under one umbrella, you will have to form somewhere else.',
    ],
  },
};

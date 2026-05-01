import type { StateOverride } from './types';

export const maryland: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in Maryland (2026): Costs, Steps, SDAT Filing | LLCAtlas',
  seoDescription:
    'Start a Maryland LLC with clear SDAT steps: $100 mail filing, $150 online filing, resident agent rules, $300 annual report, and real Maryland costs.',
  lastUpdated: '2026-04-30',
  intro:
    'Starting an LLC in Maryland is straightforward once you ignore the wrong state terminology. You do not file with the Secretary of State, and Maryland does not use "statutory agent" on the filing. You file Articles of Organization with SDAT, appoint a Maryland resident agent, pay either $100 by slow mail or $150 plus processing online, then calendar the $300 Annual Report / Personal Property Return due every April 15. The clean path is simple: pick a compliant name, choose a resident agent, file with SDAT, get an EIN, write an operating agreement, open a business bank account, and check whether your business needs a Trader\'s License or industry permit.',
  whatYoullNeed:
    'To form a Maryland LLC, you need a distinguishable LLC name with an approved designator, a Maryland principal office street address, a resident agent with a physical Maryland street address, the resident agent\'s signed consent, an organizer signature, and the SDAT filing fee. Budget $100 if you are willing to mail the filing and wait 6-8 weeks, or about $154.50 if you file online through Maryland Business Express.',
  closing:
    'For most first-time founders who live and operate in Maryland, forming in Maryland is the right move even with the $300 annual filing. Forming in Delaware or Wyoming usually just adds another state to maintain because you still have to register in Maryland if you operate there. Keep the setup practical: file online if speed matters, use a professional resident agent if your home address should not be public, get the free EIN from the IRS after SDAT approval, and set a hard reminder for the April 15 Annual Report / Personal Property Return.',
  inlineCtaDescription:
    'Maryland lets you serve as your own resident agent if you qualify, but that means your address goes on the public record and you take on the risk of missing legal papers or SDAT mail. If you work from home, travel often, live outside Maryland, or just want cleaner records, use a professional resident agent service and move on.',
  sidebarCtaDescription:
    'If you do not want your home address on SDAT records, use a professional Maryland resident agent instead of listing yourself.',
  officialLinks: [
    { label: 'File your Maryland LLC online', url: 'https://businessexpress.maryland.gov/' },
    { label: 'Search Maryland business names', url: 'https://egov.maryland.gov/BusinessExpress/EntitySearch' },
    {
      label: 'Download Maryland Articles of Organization',
      url: 'https://dat.maryland.gov/sdat%20forms/artorgan.pdf',
    },
    {
      label: 'Maryland SDAT fee schedule',
      url: 'https://dat.maryland.gov/businesses/documents/fees.pdf',
    },
    {
      label: 'Maryland Annual Report / Personal Property Return',
      url: 'https://dat.maryland.gov/businesses/Pages/Annual-Report-and-Personal-Property-Tax-Returns.aspx',
    },
    {
      label: 'Maryland Business Express licenses and permits',
      url: 'https://businessexpress.maryland.gov/plan/business-licenses-permits',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Maryland LLCs are usually pass-through entities by default: a single-member LLC is usually disregarded for federal tax, and a multi-member LLC is usually taxed as a partnership. Maryland state income tax now ranges up to 6.50% for high earners, and county or Baltimore City income tax can add up to 3.30%. That is why Maryland LLC owners should think about state and local taxes early, not after the first profitable year.',
    'Maryland does not have an Ohio-style Commercial Activity Tax. The Maryland-specific annual pain point is the $300 Annual Report / Personal Property Return due April 15. Even if the LLC owns no business personal property, the filing requirement still matters. Eligible employers with employees and a qualifying retirement plan may be able to use the MarylandSaves waiver, but solo founders with no employees should not count on it.',
    'Maryland has an optional Pass-Through Entity Tax election that can matter for higher-income owners. For tax years beginning after December 31, 2025, Maryland expanded the PTET base for resident members so the entity can pay tax on the resident member\'s full distributive share from all sources. Treat this as a CPA question, not a DIY formation decision.',
    'As of April 30, 2026, domestic Maryland LLCs are not required to file federal BOI reports under FinCEN\'s March 2025 interim final rule. Recheck FinCEN before publishing or filing because CTA rules have changed quickly, and Maryland has also considered state-level transparency legislation that was not law as of this update.',
  ],
  comparisonRows: [
    {
      state: 'Maryland',
      annualReport: '$300/yr, due April 15',
      upfrontCost: '$100 mail / ~$154.50 online',
      ongoingStateCost: '$300/yr',
    },
    {
      state: 'Pennsylvania',
      annualReport: '$7/yr, due September 30',
      upfrontCost: '$125',
      ongoingStateCost: '$7/yr',
    },
    {
      state: 'Virginia',
      annualReport: 'No annual report; annual registration fee applies',
      upfrontCost: '$100',
      ongoingStateCost: '$50/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No annual report; $300 annual franchise tax',
      upfrontCost: '~$110',
      ongoingStateCost: '$300/yr',
    },
    {
      state: 'Wyoming',
      annualReport: 'Annual report / license tax, $60 minimum',
      upfrontCost: '~$100',
      ongoingStateCost: '$60+/yr',
    },
  ],
  filingFee: 100,
  filingFeeDisplay: '$100-$150',
  filingFeeNote: '$100 by mail; $150 + 3% online',
  annualReportFee: 300,
  filingTime:
    'Mail filings without expedite take 6-8 weeks. Online filings through Maryland Business Express are automatically expedited and SDAT lists expedited review at 7-10 business days. Same-day rush is available if you meet the cutoff.',
  filingTimeShort: '7-10 days',
  expeditedTime:
    'Online filings are auto-expedited at $150 plus a 3% processing fee. Same-day online costs $425 plus processing if submitted by 2:30 PM. Same-day paper drop-box filing costs $525 if delivered by 10:00 AM.',
  expeditedFee: 50,
  filingAgency: 'Maryland State Department of Assessments and Taxation',
  filingAgencyUrl: 'https://dat.maryland.gov/businesses/',
  agentTerm: 'resident agent',
  stateTaxRate:
    'Maryland pass-through LLC income can be subject to state income tax up to 6.50% plus county or Baltimore City income tax up to 3.30%.',
  stateTax:
    'Most Maryland LLCs are pass-through entities by default. Watch Maryland state income tax, county or Baltimore City piggyback income tax, sales and use tax registration if you sell taxable goods or services, the optional PTET election for higher-income owners, and the annual SDAT Personal Property Return.',
  annualReportDue: 'April 15',
  annualReportNote: '$300 Annual Report / Personal Property Return, due each year',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Maryland-compliant LLC name',
      description:
        'Your Maryland LLC name must be distinguishable from existing Maryland entities and include one of SDAT\'s accepted designators: Limited Liability Company, L.L.C., LLC, L.C., or L C. Do not use a restricted word like bank, insurance, or trust unless you have the right approval. Search the SDAT business database before filing, and remember that SDAT availability is not a trademark clearance. If you are not ready to file, name reservation is optional and costs $25 for 30 days.',
    },
    {
      title: 'Choose a Maryland resident agent',
      description:
        'Maryland calls this role a resident agent, not a statutory agent. The agent can be a Maryland resident age 18 or older, a Maryland corporation, or a Maryland LLC, and must have a physical Maryland street address. P.O. boxes do not qualify. You can be your own resident agent if you are a Maryland resident with a real Maryland address, but your address becomes public and you need to be reachable during normal business hours. A professional resident agent is the cleaner default for home-based founders, non-Maryland residents, and anyone who wants fewer address headaches.',
    },
    {
      title: 'File Articles of Organization with SDAT',
      description:
        'File the Maryland Articles of Organization through Maryland Business Express or by mailing the SDAT form to the Corporate Charter Division. You will list the LLC name, a lawful business purpose, Maryland principal office street address, resident agent name and Maryland street address, resident agent signature, organizer signature, and return address. Maryland does not require member names, manager names, ownership percentages, or the member-managed vs. manager-managed choice on the Articles. The filing forms the LLC when SDAT accepts it, or at a later time stated in the Articles.',
    },
    {
      title: 'Pick the filing speed deliberately',
      description:
        'The cheapest Maryland filing is $100 by mail, but SDAT lists standard non-expedited review at 6-8 weeks. Online filing is the practical default for most founders because it is automatically expedited: $150 plus a 3% processing fee, with expedited review listed at 7-10 business days. If timing is critical, same-day rush is available: online costs $425 plus processing if submitted by 2:30 PM, and paper drop-box rush costs $525 if delivered by 10:00 AM. If SDAT rejects the filing, you generally have 60 days from the initial rejection to correct and resubmit before fees are retained.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'After SDAT approves the LLC, apply for an EIN directly from the IRS. It is free, and online approval is usually instant during IRS online EIN hours. Multi-member LLCs and LLCs with employees need an EIN. Single-member LLCs should usually get one too because banks commonly require it and it keeps your SSN off routine business paperwork. Do this after approval so the EIN name matches the SDAT record.',
    },
    {
      title: 'Create a Maryland operating agreement',
      description:
        'Maryland does not require you to file an operating agreement, but skipping it is a false economy. Your agreement should cover members, ownership percentages, contributions, management structure, voting, distributions, transfers, buyouts, dissolution, and indemnification. For single-member LLCs, the agreement still matters because it helps show the company is separate from you. Banks, partners, investors, and future buyers often ask for it even though SDAT does not.',
    },
    {
      title: 'Open a business bank account and check licenses',
      description:
        'Open a separate business bank account with your approved Articles, EIN confirmation, operating agreement, ID, and any bank-specific resolution. Maryland does not have a statewide general business license, but that does not mean every business is done after formation. Businesses selling goods generally need a Trader\'s License from the Clerk of the Circuit Court in their county, with fees based on inventory value. Service businesses often do not need a general county license, but may still need sales and use tax registration or industry permits.',
    },
    {
      title: 'Calendar the Maryland Annual Report / Personal Property Return',
      description:
        'Every Maryland LLC must file the Annual Report / Personal Property Return with SDAT by April 15 each year, starting the calendar year after formation. The fee is $300. A 60-day extension to June 15 is available if requested before April 15, but an extension does not make the filing disappear. Late filings can trigger a $100 penalty plus interest and, if ignored, forfeiture. This is Maryland\'s biggest ongoing LLC cost, so put it on the calendar before you forget.',
    },
  ],
  costBreakdown: [
    { item: 'Articles of Organization by mail', cost: '$100', required: 'Yes', notes: 'Cheapest route; 6-8 week review' },
    {
      item: 'Articles of Organization online',
      cost: '$150 + 3%',
      required: 'Yes, if online',
      notes: 'About $154.50 total; auto-expedited',
    },
    { item: 'Mail expedite', cost: '$50 extra', required: 'Optional', notes: '$150 total; 7-10 business days after receipt' },
    { item: 'Same-day rush online', cost: '$425 + 3%', required: 'Optional', notes: 'Submit by 2:30 PM' },
    { item: 'Same-day rush paper', cost: '$525', required: 'Optional', notes: 'Drop box by 10:00 AM' },
    { item: 'Name reservation', cost: '$25', required: 'Optional', notes: '30-day hold' },
    { item: 'Trade name / DBA', cost: '$25', required: 'Conditional', notes: 'Only if using another public business name; valid 5 years' },
    { item: 'Resident agent service', cost: '$50-$300/yr', required: 'Optional', notes: 'Typical reputable range is about $100-$150/yr' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'Required for multi-member LLCs or employees' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal document; not filed with SDAT' },
    { item: 'Certificate of Status', cost: '$20', required: 'Optional', notes: 'Good standing certificate' },
    { item: 'Annual Report / Personal Property Return', cost: '$300/yr', required: 'Yes', notes: 'Due April 15 each year' },
    { item: 'Late annual report penalty', cost: '$100 + interest', required: 'If late', notes: 'Continued non-filing can lead to forfeiture' },
    { item: 'Trader\'s License', cost: '$15-$800+', required: 'Conditional', notes: 'For businesses selling goods; higher caps in Baltimore City and Baltimore County' },
    { item: 'Resident agent change filing', cost: '$25', required: 'If changing', notes: 'File promptly if agent or address changes' },
    { item: 'Total (bare minimum DIY)', cost: '$100', isEmphasized: true, notes: 'Mail filing, self as agent, no optional extras' },
    { item: 'Total (typical first year)', cost: '~$280', isEmphasized: true, notes: 'Online filing plus about $125 resident agent service' },
    { item: 'Typical year 2+', cost: '~$425/yr', isEmphasized: true, notes: '$300 annual filing plus about $125 resident agent service' },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Maryland?',
      answer:
        'The cheapest Maryland LLC filing is $100 by mail, but that route can take 6-8 weeks. Online filing through Maryland Business Express costs $150 plus a 3% processing fee, or about $154.50, because online filings are automatically expedited. Starting the calendar year after formation, budget $300 per year for the Annual Report / Personal Property Return.',
    },
    {
      question: 'What is the Maryland LLC filing fee?',
      answer:
        'The base Articles of Organization fee is $100. Online filing adds a mandatory $50 expedite fee plus a 3% processing fee, so the practical online filing total is about $154.50. Paper expedite is $150 total, and same-day rush costs more.',
    },
    {
      question: 'How long does it take to get a Maryland LLC?',
      answer:
        'SDAT lists standard non-expedited mail review at 6-8 weeks. Online filings are automatically expedited and SDAT lists expedited review at 7-10 business days. Same-day rush is available if you submit by the required cutoff and pay the higher rush fee.',
    },
    {
      question: 'What is a Maryland resident agent?',
      answer:
        'A resident agent is Maryland\'s term for the person or company that receives legal papers and official notices for your LLC. The agent must have a physical Maryland street address, consent to the appointment, and be available during normal business hours. Do not call this role a statutory agent on a Maryland filing.',
    },
    {
      question: 'Can I be my own resident agent in Maryland?',
      answer:
        'Yes, if you are at least 18, live in Maryland, and have a physical Maryland street address. The tradeoff is privacy and reliability: your address becomes public, you need to be available during business hours, and moving means filing an update with SDAT.',
    },
    {
      question: 'Does Maryland require an operating agreement for an LLC?',
      answer:
        'No. Maryland does not require you to file or maintain an operating agreement as a formation condition. You should still have one. It helps with banking, ownership rules, decision-making, liability separation, and future disputes.',
    },
    {
      question: 'Does Maryland require an annual report for LLCs?',
      answer:
        'Yes. Maryland LLCs file the Annual Report / Personal Property Return with SDAT by April 15 each year, starting the calendar year after formation. The fee is $300. Late filing can add a $100 penalty plus interest, and continued non-filing can lead to forfeiture.',
    },
    {
      question: 'Does Maryland have an LLC publication requirement?',
      answer:
        'No. Maryland does not require a newspaper publication step after LLC formation. That keeps the process simpler than states with publication rules, such as New York.',
    },
    {
      question: 'Can I form a Maryland LLC online?',
      answer:
        'Yes. File through Maryland Business Express. Just know that there is no $100 online option: online filing is automatically expedited at $150 plus a 3% processing fee.',
    },
    {
      question: 'Do I need a business license for my Maryland LLC?',
      answer:
        'Maryland has no statewide general business license for every LLC. Businesses selling goods generally need a Trader\'s License from the Clerk of the Circuit Court in their county. Service businesses usually do not need a general county license, but may need sales and use tax registration or industry-specific permits.',
    },
    {
      question: 'How is a Maryland LLC taxed?',
      answer:
        'Most Maryland LLCs are taxed as pass-through entities by default. Members can owe Maryland state income tax and county or Baltimore City income tax on their share of income. Maryland also has an optional Pass-Through Entity Tax election that can matter for higher-income owners, so ask a CPA before making that election.',
    },
    {
      question: 'Does Maryland have a Commercial Activity Tax?',
      answer:
        'No. Maryland does not have an Ohio-style Commercial Activity Tax. The Maryland-specific recurring filing to watch is the $300 Annual Report / Personal Property Return. The state also has an optional Pass-Through Entity Tax election, which is a different issue.',
    },
    {
      question: 'Can a non-Maryland resident form a Maryland LLC?',
      answer:
        'Yes. Maryland does not require LLC members to live in Maryland. You still need a Maryland resident agent with a physical Maryland address. If you do not operate in Maryland, ask whether Maryland is actually the right state before filing.',
    },
    {
      question: 'Does Maryland allow Series LLCs?',
      answer:
        'Maryland does not authorize domestic Series LLCs. It recognizes foreign series companies in limited contexts, but you cannot form a Maryland domestic Series LLC. Real estate investors who specifically need a series structure should compare other states before filing.',
    },
    {
      question: 'Does Maryland have PLLCs?',
      answer:
        'Maryland does not have a separate Professional LLC entity type. Licensed professionals may use a regular LLC or professional corporation depending on the profession and licensing-board rules. Check the relevant board before filing for a regulated practice.',
    },
    {
      question: 'Do Maryland LLCs need to file BOI reports?',
      answer:
        'As of April 30, 2026, domestic Maryland LLCs are not required to file federal BOI reports under FinCEN\'s March 2025 interim final rule. Recheck FinCEN before relying on that answer because the rule is interim and could change.',
    },
    {
      question: 'How do I dissolve a Maryland LLC?',
      answer:
        'File Articles of Cancellation with SDAT. The non-expedited filing fee is $0, or $50 if expedited. Before filing, wind up the business, settle debts, handle final tax filings, and make sure Annual Report obligations are addressed so you do not keep triggering Maryland compliance issues.',
    },
  ],
  proscons: {
    pros: [
      'Maryland keeps the formation filing itself simple: no publication requirement, no member or manager names on the Articles, and a mature Maryland Business Express portal.',
      'The $100 base formation fee is reasonable if you are not in a hurry, and online filing gives most founders a predictable 7-10 business day expedited path.',
      'If you live and operate in Maryland, forming in Maryland is usually cleaner than forming elsewhere and then registering back into Maryland as a foreign LLC.',
      'The optional PTET election can be valuable for higher-income owners, especially after Maryland expanded the resident-member base for tax years beginning after December 31, 2025.',
    ],
    cons: [
      'The $300 Annual Report / Personal Property Return is the biggest drawback. Maryland is cheap to start but not cheap to maintain.',
      'Online filing is not the cheapest path because Maryland automatically adds the $50 expedite fee and 3% processing fee.',
      'Maryland county and Baltimore City income taxes can push the real owner-level tax burden higher than founders expect.',
      'Maryland does not offer a domestic Series LLC or a separate PLLC structure, which matters for some real estate and licensed professional businesses.',
    ],
  },
};

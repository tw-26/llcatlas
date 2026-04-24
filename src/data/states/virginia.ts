import type { StateOverride } from './types';

export const virginia: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in Virginia (2026): $100, No Annual Report | LLCAtlas',
  seoDescription:
    'Start a Virginia LLC for $100. See the real filing steps, registered agent rules, annual registration fee, and how fast the SCC approves filings.',
  lastUpdated: '2026-04-23',
  intro:
    'Starting an LLC in Virginia is cleaner than most founders expect. The filing fee is $100, Virginia does not require an annual report, and there is no newspaper publication requirement. The part that matters is not the filing itself. It is the registered agent rule. Virginia uses the term registered agent, not statutory agent, and the state is stricter than most about who qualifies to serve. For most first-time founders, the real checklist is simple: pick a compliant name, appoint a Virginia registered agent, file Articles of Organization with the SCC, get a free EIN, and do not forget the separate $50 annual registration fee that keeps the LLC active.',
  whatYoullNeed:
    "To form a Virginia LLC, you'll need a unique business name, a Virginia registered agent with a Virginia street address, your principal office address, and $100 for the filing fee. Most online filings are approved in about 2 to 5 business days.",
  closing:
    'Virginia is a solid home-state LLC for founders who live and operate in Virginia. The upfront cost is reasonable, there is no publication step, and the state does not force a yearly annual report. The catch is that Virginia hides its maintenance cost in a different place: the $50 annual registration fee due by the last day of your anniversary month. Keep that on your calendar, and do not overcomplicate the filing. If you are not clearly eligible to be your own registered agent, use a professional service and move on.',
  inlineCtaDescription:
    "Virginia's registered agent rule is narrower than most states. If you work from home, live outside Virginia, or do not want to gamble on whether you qualify, a professional registered agent is usually the cleanest default.",
  sidebarCtaDescription:
    'If you do not want your address tied to the public filing or you are not sure you qualify to be your own Virginia registered agent, use a professional service instead of guessing.',
  officialLinks: [
    { label: 'File your Virginia LLC online (CIS)', url: 'https://cis.scc.virginia.gov/' },
    { label: 'Virginia SCC LLC page', url: 'https://scc.virginia.gov/pages/Limited-Liability-Companies' },
    { label: 'Virginia SCC forms and fees', url: 'https://www.scc.virginia.gov/businesses/forms-and-fees/' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Virginia is easy to form in, but local compliance is where many first-time founders get caught flat-footed. Virginia has no statewide general business license, yet many cities and counties impose local BPOL registration and tax based on gross receipts. The main takeaway: your state filing does not finish the compliance job if you are actually operating in a Virginia locality.',
    'For most LLCs, Virginia tax treatment is standard pass-through treatment by default. Income flows to the owners and is taxed on their Virginia returns. If the LLC elects corporate treatment, Virginia corporate income tax is 6%. Virginia also has an elective pass-through entity tax at 5.75% for eligible pass-throughs, which matters more once the business grows than at formation.',
    'As of April 2026, domestic Virginia LLCs are exempt from Beneficial Ownership Information reporting under FinCEN\'s current interim rule. That is useful, but it is still a federal rule that could change. Treat BOI as a recheck item before filing, not as a forever assumption copied from an old checklist.',
  ],
  comparisonRows: [
    { state: 'Virginia', annualReport: 'None for LLCs', upfrontCost: '$100', ongoingStateCost: '$50 annual registration fee' },
    { state: 'Ohio', annualReport: 'None for standard LLCs', upfrontCost: '$99', ongoingStateCost: '$0 annual report fee' },
    { state: 'Michigan', annualReport: 'Annual Statement, $25 by Feb 15', upfrontCost: '$50', ongoingStateCost: '$25/yr' },
    { state: 'Wyoming', annualReport: 'Annual report required', upfrontCost: '~$100', ongoingStateCost: '$60+/yr' },
    { state: 'North Carolina', annualReport: 'Annual report required', upfrontCost: '$125', ongoingStateCost: '$200/yr if late report leads to reinstatement risk' },
  ],
  filingFee: 100,
  annualReportFee: null,
  filingTime: '~2 to 5 business days online',
  filingTimeShort: '2-5 days',
  expeditedTime: '$50 next-business-day, $200 same-day (online only)',
  expeditedFee: 50,
  filingAgency: 'Virginia State Corporation Commission (SCC), Clerk\'s Office',
  filingAgencyUrl: 'https://scc.virginia.gov/pages/Limited-Liability-Companies',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Virginia pass-through income is taxed to owners under Virginia\'s individual income tax brackets, with a top rate of 5.75%. LLCs taxed as C-corps pay 6% Virginia corporate income tax. Virginia also offers an elective PTET at 5.75% for eligible pass-throughs.',
  stateTax:
    'Most Virginia LLCs default to pass-through taxation, but founders should pay attention to local BPOL rules and any Virginia tax registrations tied to sales tax, payroll, or industry-specific activity.',
  annualReportDue: 'None',
  annualReportNote: '$50 annual registration fee instead',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Virginia-compliant LLC name',
      description:
        'Your name must be distinguishable on the Virginia SCC records and include an approved LLC designator such as LLC, L.L.C., LC, L.C., limited liability company, or limited company. Virginia does not accept vague substitutes like "Limited" by itself for an LLC. Restricted words tied to banking, trust, insurance, engineering, architecture, and similar regulated activities can trigger extra review or require approval. Use the SCC Clerk\'s Information System to search the name before you file. If you want to hold it first, Virginia lets you reserve the name for 120 days for $10.',
    },
    {
      title: 'Appoint a Virginia registered agent',
      description:
        'Virginia uses the term registered agent, not statutory agent. The agent must have a Virginia street address that serves as the registered office, and P.O. boxes do not qualify. This is where Virginia is more restrictive than most states: not just any adult resident can serve. If you are a qualifying Virginia insider of the LLC, you may be able to serve yourself. If not, or if you want privacy and cleaner records, use a commercial registered agent service instead of guessing.',
    },
    {
      title: 'File Articles of Organization with the SCC',
      description:
        'Virginia forms a domestic LLC by filing Articles of Organization, Form LLC-1011, with the State Corporation Commission. Online filing through CIS is the cleanest route and the only one that allows expedite. The filing fee is $100 whether you file online or by mail. You will need the LLC name, your registered agent\'s name, the agent\'s qualification category, the Virginia registered office address, the principal office address, and an organizer signature. Virginia does not require you to list the LLC\'s members or managers on the Articles, which is a real privacy advantage over some states.',
    },
    {
      title: 'Wait for approval or pay for faster processing',
      description:
        'Standard online processing usually lands in about 2 to 5 business days. If speed matters, Virginia offers online expedited review only: next-business-day processing for an extra $50, or same-day processing for an extra $200 if you meet the filing cutoff. Paper filings cannot be expedited and usually take about two weeks plus mail time. If timing matters, do not mail the filing and hope for the best.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Once the LLC is approved, get your EIN directly from the IRS. It is free. Multi-member LLCs need one, LLCs with employees need one, and most banks ask for one even if you are a single-member LLC. Never pay a formation service extra for an EIN unless you are consciously paying for convenience.',
    },
    {
      title: 'Put your operating basics in place',
      description:
        'Create a written operating agreement, open a business bank account, and handle any state or local registrations that apply. Virginia does not require the operating agreement to be filed, but you still want one because it documents ownership, management, and decision rules. If you sell taxable goods or services, hire employees, or operate in a locality that imposes BPOL registration, take care of those registrations right after formation instead of months later when the notices start arriving.',
    },
    {
      title: 'Do not miss the annual registration fee',
      description:
        'Virginia LLCs do not file an annual report, which is good. But they do owe a separate $50 annual registration fee due by the last day of the LLC\'s anniversary month. Miss it and Virginia adds a $25 penalty. Leave it unpaid long enough and the LLC can be automatically canceled. This is the one ongoing Virginia requirement first-time founders most often miss because they hear "no annual report" and assume there is no annual state maintenance at all.',
    },
  ],
  costBreakdown: [
    { item: 'Articles of Organization (Form LLC-1011)', cost: '$100', required: 'Yes', notes: 'Same online or by mail' },
    { item: 'Name reservation', cost: '$10', required: 'Optional', notes: '120-day hold' },
    { item: 'Assumed name / DBA filing', cost: '$10', required: 'Optional', notes: 'Only if operating under a different name' },
    { item: 'Registered agent service', cost: '$100-$200/yr', required: 'Optional', notes: 'Common paid range; premium services can run higher' },
    { item: 'Expedited next-business-day filing', cost: '+$50', required: 'Optional', notes: 'Online only' },
    { item: 'Expedited same-day filing', cost: '+$200', required: 'Optional', notes: 'Online only, cutoff applies' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal document' },
    { item: 'Certified copy of Articles', cost: '$6', required: 'Optional', notes: 'Situation-specific' },
    { item: 'Certificate of Fact of Existence', cost: '$6', required: 'Optional', notes: 'Virginia equivalent of good standing proof' },
    { item: 'Annual registration fee', cost: '$50/yr', required: 'Yes (recurring)', notes: 'Due by last day of anniversary month' },
    { item: 'Annual registration late penalty', cost: '$25', required: 'Only if late', notes: 'Added to the $50 fee' },
    { item: 'Total (bare minimum DIY)', cost: '$100', isEmphasized: true, notes: 'State filing only' },
    { item: 'Total (typical with service)', cost: '$200-$300 first year', isEmphasized: true, notes: 'Paid registered agent, no expediting' },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Virginia?',
      answer:
        'The Virginia filing fee is $100. If you qualify to be your own registered agent, that is the true minimum startup cost. Most founders who want privacy or do not clearly qualify to serve as their own registered agent should expect to spend more, usually around another $100 to $200 a year for a professional service.',
    },
    {
      question: 'How long does it take to get a Virginia LLC?',
      answer:
        'Standard online processing is usually about 2 to 5 business days. Virginia also offers online expedite for an extra $50 for next-business-day review and $200 for same-day review if you file before the cutoff. Paper filings usually take about two weeks plus mail time and cannot be expedited.',
    },
    {
      question: 'Does Virginia require an annual report for an LLC?',
      answer:
        'No. Virginia LLCs do not file an annual report. That said, Virginia does charge a separate $50 annual registration fee, so "no annual report" does not mean "no annual state maintenance."',
    },
    {
      question: 'What is the annual fee for a Virginia LLC?',
      answer:
        'Virginia charges a $50 annual registration fee. It is due by the last day of your LLC\'s anniversary month. If you miss it, Virginia adds a $25 late penalty and can eventually cancel the LLC if the fee remains unpaid.',
    },
    {
      question: 'Does Virginia require newspaper publication for an LLC?',
      answer:
        'No. Virginia has no newspaper publication requirement for LLCs, which keeps the setup cheaper and simpler than states like New York.',
    },
    {
      question: 'What is a registered agent in Virginia?',
      answer:
        'A registered agent is the person or company that receives lawsuits, legal notices, and official state correspondence for the LLC. Virginia uses the term registered agent, not statutory agent. The agent must have a Virginia street address and meet Virginia\'s qualification rules.',
    },
    {
      question: 'Can I be my own registered agent in Virginia?',
      answer:
        'Yes, but only if you actually qualify under Virginia law and have a Virginia street address that is available during business hours. Virginia is stricter than many states about who can serve, so if you are not clearly eligible, use a professional registered agent instead of trying to force it.',
    },
    {
      question: 'Do I need an operating agreement in Virginia?',
      answer:
        'You do not file one with the state, and Virginia does not require one as part of formation. But you should still have a written operating agreement. It helps with banking, ownership clarity, decision-making, and treating the LLC like a real separate business instead of informal side-project paperwork.',
    },
    {
      question: 'Do I need an EIN for a Virginia LLC?',
      answer:
        'Usually yes. Multi-member LLCs need one, LLCs with employees need one, and most banks require one to open a business account. Even single-member LLCs usually end up getting one because it keeps the owner\'s SSN off routine business paperwork.',
    },
    {
      question: 'Do I need a Virginia business license?',
      answer:
        'There is no blanket statewide general business license for every Virginia LLC. But depending on what you do and where you operate, you may still need Virginia tax registration, industry-specific licensing, or local BPOL registration. The LLC filing itself does not cover all of that.',
    },
    {
      question: 'What is BPOL in Virginia?',
      answer:
        'BPOL stands for Business, Professional and Occupational License tax. Many Virginia cities and counties impose it based on gross receipts. The exact rates, filing deadlines, and exemption thresholds vary by locality, so check your city or county Commissioner of the Revenue instead of assuming a generic state-level answer applies to you.',
    },
    {
      question: 'Do Virginia LLCs need to file BOI reports?',
      answer:
        'As of April 2026, domestic Virginia LLCs are exempt under FinCEN\'s current interim rule, which limits BOI reporting to entities formed under foreign law and registered to do business in the United States. This is still worth rechecking before publication or filing because FinCEN is expected to finalize the rule.',
    },
    {
      question: 'How is a Virginia LLC taxed?',
      answer:
        'Most Virginia LLCs are taxed as pass-through entities by default, so the income flows to the owners and is taxed on their personal Virginia returns. If the LLC elects C-corp treatment, Virginia corporate income tax is 6%. Founders should also watch local compliance, especially BPOL and any sales-tax or payroll registrations tied to what the business actually does.',
    },
    {
      question: 'Can a non-resident form a Virginia LLC?',
      answer:
        'Yes. Virginia does not require the owners to live in Virginia. The catch is that the LLC still needs a qualifying Virginia registered agent with a Virginia street address, so out-of-state founders usually use a commercial registered agent service.',
    },
  ],
  proscons: {
    pros: [
      'Virginia keeps the formation itself simple: $100 to file, no publication requirement, and no annual report for LLCs.',
      'The Articles do not require member or manager names, which gives founders more privacy than states that force public ownership disclosures at formation.',
      'Virginia\'s filing system is solid, and online filings are usually approved in a few business days with clear expedite options if you need them.',
    ],
    cons: [
      'Virginia\'s registered agent rule is narrower than in many states, so some founders who want to self-file still end up needing a paid service.',
      'No annual report does not mean no ongoing cost. Virginia still charges a $50 annual registration fee, and missing it can get the LLC canceled.',
      'Local compliance is where Virginia gets messy. BPOL and other locality-level rules vary enough that generic state-level guides can leave founders with a false sense of being done.',
    ],
  },
};

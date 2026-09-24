import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const virginia: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Virginia (${GUIDE_YEAR}): $100 Fee, Steps & Timeline`,
  seoDescription:
    'Register a Virginia LLC with the SCC for $100, often approved right at checkout online. Then the $50 annual fee, local BPOL license, and what not to pay for.',
  lastUpdated: '2026-09-23',
  intro:
    'Starting an LLC in Virginia is cleaner than most founders expect. The filing fee is $100, Virginia does not require an annual report, and there is no newspaper publication requirement. The part that matters is not the filing itself. It is the registered agent rule. Virginia uses the term registered agent, not statutory agent, and the state is stricter than most about who qualifies to serve. For most first-time founders, the real checklist is simple: pick a compliant name, appoint a Virginia registered agent, file Articles of Organization with the SCC, get a free EIN, and do not forget the separate $50 annual registration fee that keeps the LLC active.',
  whatYoullNeed:
    "To form a Virginia LLC, you'll need a unique business name, a Virginia registered agent with a Virginia street address, your principal office address, and $100 for the filing fee. Online filings without attachments are usually accepted right after checkout; if the SCC has to review your name or an attached document, expect about 5 business days.",
  closing:
    'Virginia is a solid home-state LLC for founders who live and operate in Virginia. The upfront cost is reasonable, there is no publication step, and the state does not force a yearly annual report. The catch is that Virginia hides its maintenance cost in a different place: the $50 annual registration fee due by the last day of your anniversary month. Keep that on your calendar, and do not overcomplicate the filing. If you are not clearly eligible to be your own registered agent, use a professional service and move on.',
  inlineCtaDescription:
    "Virginia's registered agent rule is narrower than most states. If you work from home, live outside Virginia, or do not want to gamble on whether you qualify, a professional registered agent is usually the cleanest default.",
  sidebarCtaDescription:
    'If you do not want your address tied to the public filing or you are not sure you qualify to be your own Virginia registered agent, use a professional service instead of guessing.',
  officialLinks: [
    { label: 'File your Virginia LLC online (CIS)', url: 'https://cis.scc.virginia.gov/' },
    {
      label: 'Virginia SCC LLC forms and fees',
      url: 'https://www.scc.virginia.gov/businesses/forms-and-fees/virginia-limited-liability-companies/',
    },
    { label: 'Virginia SCC LLC FAQs', url: 'https://www.scc.virginia.gov/businesses/business-faqs/llc-faqs/' },
    {
      label: 'Virginia SCC annual registration fees',
      url: 'https://www.scc.virginia.gov/businesses/business-faqs/annual-registration-fees/',
    },
    {
      label: 'Virginia SCC online expedited services',
      url: 'https://www.scc.virginia.gov/businesses/about-the-clerks-office/expedited-services/',
    },
    {
      label: 'Virginia Code § 13.1-1011 (articles and registered agent rules)',
      url: 'https://law.lis.virginia.gov/vacode/title13.1/chapter12/section13.1-1011/',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Virginia is easy to form in, but local compliance is where many first-time founders get caught flat-footed. Virginia has no statewide general business license, yet many cities and counties impose local BPOL registration and tax based on gross receipts. The main takeaway: your state filing does not finish the compliance job if you are actually operating in a Virginia locality.',
    'For most LLCs, Virginia tax treatment is standard pass-through treatment by default. Income flows to the owners and is taxed on their Virginia returns. If the LLC elects corporate treatment, Virginia corporate income tax is 6%. Virginia also has an elective pass-through entity tax at 5.75% for eligible pass-throughs, and 2026 legislation removed its sunset date. It matters more once the business grows than at formation.',
    'FinCEN\'s final rule, effective August 14, 2026, permanently exempts LLCs formed in the U.S., including Virginia LLCs, from Beneficial Ownership Information reporting. Ignore any BOI filing notice for a Virginia LLC unless it comes straight from FinCEN, and recheck FinCEN\'s site before filing in case the rule changes again.',
  ],
  comparisonRows: [
    { state: 'Virginia', annualReport: 'No annual report; annual registration fee instead', upfrontCost: '$100', ongoingStateCost: '$50/yr annual registration fee' },
    { state: 'Ohio', annualReport: 'None for standard LLCs', upfrontCost: '$99', ongoingStateCost: '$0 annual report fee' },
    { state: 'Michigan', annualReport: 'Annual Statement, $25 by Feb 15', upfrontCost: '$50', ongoingStateCost: '$25/yr' },
    { state: 'Wyoming', annualReport: 'Annual report required', upfrontCost: '~$100', ongoingStateCost: '$60+/yr' },
    { state: 'North Carolina', annualReport: 'Annual report required', upfrontCost: '$125', ongoingStateCost: '$200/yr if late report leads to reinstatement risk' },
  ],
  filingFee: 100,
  annualReportFee: null,
  filingTime: 'Usually accepted at checkout online; about 5 business days if the SCC must review the name or an attachment',
  filingTimeShort: 'Same day-5 days',
  expeditedTime: 'Online only: next-business-day for $50 or $100 (CIS shows which at checkout), same-day for $200',
  expeditedFee: 50,
  filingAgency: 'Virginia State Corporation Commission (SCC), Clerk\'s Office',
  filingAgencyUrl: 'https://www.scc.virginia.gov/businesses/forms-and-fees/virginia-limited-liability-companies/',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Virginia pass-through income is taxed to owners under Virginia\'s individual income tax brackets, from 2% up to a top rate of 5.75% on taxable income over $17,000. LLCs taxed as C-corps pay 6% Virginia corporate income tax. Virginia also offers an elective PTET at 5.75% for eligible pass-throughs, now with no sunset date.',
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
        'Virginia uses the term registered agent, not statutory agent. The agent must have a Virginia street address that serves as the registered office, and P.O. boxes do not qualify. This is where Virginia is more restrictive than most states: not just any adult resident can serve. An individual agent must be a Virginia resident who is a member or manager of the LLC (or an officer, partner, or trustee of an entity that is), or a member of the Virginia State Bar. Otherwise the agent must be a business entity authorized to do business in Virginia, and the LLC cannot be its own agent. If you are a Virginia-resident member or manager, you can serve yourself. If not, or if you want privacy and cleaner records, use a commercial registered agent service instead of guessing.',
    },
    {
      title: 'File Articles of Organization with the SCC',
      description:
        'Virginia forms a domestic LLC by filing Articles of Organization, Form LLC-1011, with the State Corporation Commission. Online filing through CIS is the cleanest route and the only one that allows expedite. The filing fee is $100 whether you file online or by mail. You will need the LLC name, your registered agent\'s name, the agent\'s qualification category, the Virginia registered office address, the principal office address, and an organizer signature. Virginia does not require you to list the LLC\'s members or managers on the Articles, which is a real privacy advantage over some states.',
    },
    {
      title: 'Wait for approval or pay for faster processing',
      description:
        'If you file online and do not attach your own articles, CIS usually sends the acceptance email right after checkout. Names with restricted words and uploaded articles go to SCC staff for review, which adds about 5 business days. If your filing needs review and speed matters, Virginia offers online expedited review only: next-business-day for an extra $50 or $100 (submit by 2 p.m. Eastern; CIS shows the exact fee at checkout), or same-day for an extra $200 (submit by 10 a.m. Eastern). Expedite fees are nonrefundable. Paper filings cannot be expedited, and the SCC does not publish a paper processing time, so do not mail the filing if timing matters.',
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
        'Virginia LLCs do not file an annual report, which is good. But they do owe a separate $50 annual registration fee, first due by the last day of the LLC\'s anniversary month one year after formation, then every year by that date. The SCC mails the notice to your registered agent about two months ahead. Miss the due date and Virginia adds a $25 penalty. If it is still unpaid by the last day of the third month after the due date, the LLC is automatically canceled, and getting it back costs a $100 reinstatement fee plus everything unpaid. This is the one ongoing Virginia requirement first-time founders most often miss because they hear "no annual report" and assume there is no annual state maintenance at all.',
    },
  ],
  costBreakdown: [
    { item: 'Articles of Organization (Form LLC-1011)', cost: '$100', required: 'Yes', notes: 'Same online or by mail; no online payment fee' },
    { item: 'Name reservation', cost: '$10', required: 'Optional', notes: '120-day hold' },
    { item: 'Assumed name / DBA filing', cost: '$10', required: 'Optional', notes: 'Only if operating under a different name' },
    { item: 'Registered agent service', cost: '$100-$200/yr', required: 'Optional', notes: 'Common paid range; premium services can run higher' },
    { item: 'Expedited next-business-day filing', cost: '+$50 or +$100', required: 'Optional', notes: 'Online only, submit by 2 p.m. ET; CIS shows the fee at checkout' },
    { item: 'Expedited same-day filing', cost: '+$200', required: 'Optional', notes: 'Online only, submit by 10 a.m. ET' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal document' },
    { item: 'Certified copy of Articles', cost: '$6', required: 'Optional', notes: 'Situation-specific' },
    { item: 'Certificate of Fact of Existence', cost: '$6', required: 'Optional', notes: 'Virginia equivalent of good standing proof' },
    { item: 'Annual registration fee', cost: '$50/yr', required: 'Yes (recurring)', notes: 'Due by last day of anniversary month' },
    { item: 'Annual registration late penalty', cost: '$25', required: 'Only if late', notes: 'Added to the $50 fee' },
    { item: 'Reinstatement after cancellation', cost: '$100 + unpaid fees', required: 'Only if canceled', notes: 'Canceled if the fee is unpaid 3 months past due' },
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
        'Filed online without attachments, a Virginia LLC is usually accepted right after checkout. If the SCC has to review a restricted-word name or articles you uploaded, expect about 5 business days. Online expedite costs an extra $50 or $100 for next-business-day review and $200 for same-day review if you file before the cutoff. Paper filings cannot be expedited, and the SCC does not publish a paper processing time.',
    },
    {
      question: 'How do I register an LLC in Virginia?',
      answer:
        'Registering, forming, and filing a Virginia LLC are the same step: you file Articles of Organization (Form LLC-1011) with the State Corporation Commission and pay $100. Two things trip people up after that. The SCC bills a $50 annual registration fee every year, which is a maintenance fee, not a second registration. And most cities and counties require a local business license (BPOL), which the SCC filing does not handle. You will also need a Virginia Tax account if you collect sales tax or have employees.',
    },
    {
      question: 'How do I apply for an LLC in Virginia online?',
      answer:
        'Use the SCC Clerk\'s Information System (CIS) at cis.scc.virginia.gov. Create a login, search your name, choose Articles of Organization for a Virginia LLC, and enter the registered agent, the agent\'s qualification category, the registered office, and the principal office. Pay $100; there is no online payment fee. If you fill in the form in CIS instead of uploading your own articles, the acceptance email usually arrives right after checkout. Online is also the only way to expedite, so there is no reason to mail it.',
    },
    {
      question: 'Does Virginia require an annual report for an LLC?',
      answer:
        'No. Virginia corporations file annual reports, but LLCs do not. Virginia LLCs instead pay a $50 annual registration fee to the SCC every year, so "no annual report" does not mean "no annual state maintenance."',
    },
    {
      question: 'What is the annual fee for a Virginia LLC?',
      answer:
        'Virginia charges a $50 annual registration fee. It is first due by the last day of your LLC\'s anniversary month the year after you form, then every year by that date. If you miss it, Virginia adds a $25 late penalty. If it is still unpaid by the last day of the third month after the due date, the LLC is automatically canceled and reinstatement costs $100 plus the unpaid fees.',
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
        'Yes, but only if you are a Virginia resident and a member or manager of the LLC (or a member of the Virginia State Bar), and you have a Virginia street address for the registered office. A friend or relative who is not a member or manager cannot serve. If you do not clearly qualify, use a professional registered agent instead of trying to force it.',
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
        'No. FinCEN\'s final rule, effective August 14, 2026, permanently exempts LLCs formed in the U.S. from BOI reporting. Only entities formed under foreign law and registered to do business in the U.S. still report. Recheck FinCEN\'s site before filing in case the rule changes again.',
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
      'Virginia\'s online filing system is fast: most LLC filings without attachments are accepted at checkout, with paid expedite options if yours needs staff review.',
    ],
    cons: [
      'Virginia\'s registered agent rule is narrower than in many states, so some founders who want to self-file still end up needing a paid service.',
      'No annual report does not mean no ongoing cost. Virginia still charges a $50 annual registration fee, and missing it can get the LLC canceled.',
      'Local compliance is where Virginia gets messy. BPOL and other locality-level rules vary enough that generic state-level guides can leave founders with a false sense of being done.',
    ],
  },
};

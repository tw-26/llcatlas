import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const ohio: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Ohio (${GUIDE_YEAR}): $99 Fee, Steps & Timeline`,
  seoDescription:
    'File an Ohio LLC (Form 610) for $99, approved in 3-7 business days, with no annual report to file after. Statutory agent rules and the add-ons to skip.',
  lastUpdated: '2026-09-23',
  intro:
    "An Ohio LLC costs $99 to file. You file Articles of Organization (Form 610) with the Ohio Secretary of State and appoint a statutory agent, which is Ohio's term for a registered agent. Standard Ohio LLCs don't file an annual report, and there's no newspaper publication requirement. The main decision is whether to be your own statutory agent, which is free but puts your address on the public record.",
  whatYoullNeed:
    "To form an Ohio LLC, you'll need a unique business name, a statutory agent (Ohio's term for registered agent), and $99 for the filing fee. The whole process takes about 30 minutes online.",
  closing:
    "If you live and operate in Ohio, form in Ohio. Standard Ohio LLCs don't file an annual report, so the state is cheaper to maintain long term than many alternatives, and forming in Wyoming or Delaware usually doesn't reduce your compliance burden. Where Ohio gets harder is taxes as the business grows: plan for the Commercial Activity Tax (CAT) and municipal tax rules. You can be your own statutory agent for free. A professional agent, usually $49 to $250 a year, is worth it if you work from home or want your address off the record.",
  inlineCtaDescription:
    "Ohio lets you be your own statutory agent for free, but your address goes on the public filing and you need to be there to receive legal notices. If you work from home or care about privacy, a professional statutory agent, usually $49 to $250 a year, keeps your address off the record. If you have an Ohio office with regular hours and don't mind it being public, you can skip it.",
  sidebarCtaDescription:
    "If you work from home or don't want your address public, use a professional statutory agent instead of listing yourself.",
  officialLinks: [
    { label: 'File your Ohio LLC online', url: 'https://bsportal.ohiosos.gov/' },
    { label: 'Check Ohio name availability', url: 'https://businesssearch.ohiosos.gov/' },
    { label: 'Download Form 610', url: 'https://www.ohiosos.gov/assets/610.pdf' },
    { label: 'Ohio business filing forms and fee schedule', url: 'https://www.ohiosos.gov/business/business-filing-forms' },
    { label: 'Required filings to keep an Ohio business active', url: 'https://www.ohiosos.gov/business/keep-your-active-status' },
    { label: 'Ohio Commercial Activity Tax (CAT)', url: 'https://tax.ohio.gov/business/ohio-business-taxes/commercial-activities' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number',
    },
  ],
  taxHighlights: [
    'Ohio Commercial Activity Tax is the first major state-specific tax issue to watch as revenue grows. Since 2025 it only applies once Ohio taxable gross receipts pass $6 million, and the old annual minimum tax ended in 2024, so most small LLCs owe nothing. You still need to know it exists because it applies to gross receipts, not profit.',
    'Ohio’s municipal tax system is the bigger practical headache for many founders. City-level income taxes can apply where you live, where you work, and where the business operates, so local compliance can get messy fast.',
    'The actionable takeaway: the filing itself is simple and cheap, but once the business grows, taxes get more Ohio-specific. Keep an eye on CAT thresholds and local city tax obligations early.',
  ],
  comparisonRows: [
    { state: 'Ohio', annualReport: 'None for standard LLCs', upfrontCost: '$99', ongoingStateCost: '$0 annual report fee' },
    { state: 'Wyoming', annualReport: 'Yes', upfrontCost: '~$100', ongoingStateCost: 'Annual report / license tax applies' },
    { state: 'Delaware', annualReport: 'No annual report, but annual tax applies', upfrontCost: '~$110', ongoingStateCost: '$300 annual tax' },
    { state: 'California', annualReport: 'Statement filings apply', upfrontCost: 'Higher effective cost', ongoingStateCost: '$800+ annual tax burden' },
  ],
  filingFee: 99,
  filingTime: '~3 to 7 business days',
  filingTimeShort: '3–7 days',
  expeditedTime: '$100 -> 2-day, $200 -> 1-day, $300 -> 4-hour',
  expeditedFee: 100,
  filingAgencyUrl: 'https://www.ohiosos.gov/business/',
  agentTerm: 'statutory agent',
  stateTaxRate: 'Ohio CAT applies only to taxable gross receipts above $6 million, at 0.26% on the amount over that threshold.',
  stateTax:
    'Ohio LLCs are generally pass-through entities, but founders should still watch Ohio CAT and municipal income tax obligations as the business grows.',
  annualReportDue: 'None',
  annualReportNote: 'No recurring state filings for standard LLCs',
  requiresOperatingAgreement: false,
  steps: [
    {
      title: 'Choose an Ohio-compliant LLC name',
      description:
        'Your name must be distinguishable on the Ohio Secretary of State records and include an approved LLC designator such as LLC, L.L.C., Limited Liability Company, Limited, Ltd., or Ltd. Restricted words tied to regulated industries can require additional approval. If you are not ready to file yet, you can reserve the name for 180 days for $39.',
    },
    {
      title: 'Appoint a statutory agent',
      description:
        'Ohio calls this role a statutory agent, but it is the same concept most states call a registered agent. The agent must be an Ohio resident or a business with an Ohio address. PO boxes and virtual mailbox addresses (commercial mail receiving agencies) do not qualify, and the agent must sign an acceptance on the form. You can serve as your own agent if you are an Ohio resident and you are comfortable putting your address on the public filing. If the agent or address changes later, file the update within 30 days.',
    },
    {
      title: 'File Form 610 with the Ohio Secretary of State',
      description:
        'Submit the Articles of Organization online through Ohio Business Central or by mail. The filing fee is $99. You will need your LLC name, the statutory agent name and Ohio street address, the agent’s acceptance, and the organizer’s signature. Ohio does not require member names, manager names, or ownership percentages on the filing. If needed, you can also set a delayed effective date up to 90 days after receipt.',
    },
    {
      title: 'Wait for approval or pay for expedited filing',
      description:
        'Standard processing is 3 to 7 business days under the official Ohio estimate. Online filings may move faster in practice, but they are not officially promised to. If speed matters, Level 1 expedite costs an extra $100 and targets 2 business days, and Level 2 costs $200 for 1 business day. Level 3 costs $300 for 4-hour service if received by 1:00 PM, and it requires in-person delivery at the Client Service Center in Columbus. After approval, you receive the stamped Articles and the state approval record for your files.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'After the LLC is approved, get an EIN directly from the IRS at no cost. Most founders should do this even for a single-member LLC because banks often require it and it keeps your SSN off routine business paperwork.',
    },
    {
      title: 'Put your operating basics in place',
      description:
        'Create an operating agreement, open a business bank account, and handle any tax or licensing registrations that apply to your business. Ohio does not require an operating agreement as part of the filing, and it is not filed with the state, but it is still legally important for internal governance, liability protection, and banking.',
    },
  ],
  costBreakdown: [
    { item: 'Articles of Organization', cost: '$99', required: 'Yes', notes: 'One-time fee' },
    { item: 'Name reservation', cost: '$39', required: 'Optional', notes: '180-day hold' },
    { item: 'Trade name / DBA', cost: '$39', required: 'Optional', notes: 'Different operating name; $25 renewal every 5 years' },
    { item: 'Statutory agent service', cost: '$49-$250/yr', required: 'Optional', notes: 'Self-file for $0 if eligible' },
    { item: 'Expedite Level 1', cost: '$100', required: 'Optional', notes: '2 business days' },
    { item: 'Expedite Level 2', cost: '$200', required: 'Optional', notes: '1 business day' },
    { item: 'Expedite Level 3', cost: '$300', required: 'Optional', notes: 'In-person delivery only, 4 hours' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal document' },
    { item: 'Certified copy of Articles', cost: '$5', required: 'Optional', notes: 'Sometimes requested' },
    { item: 'Certificate of Good Standing', cost: '$5', required: 'Optional', notes: 'Situation-specific' },
    { item: "Vendor's License", cost: '$50 if your business needs one', required: 'Conditional', notes: 'If selling taxable goods/services; one per fixed location' },
    { item: 'Ohio CAT', cost: '0.26% above $6M', required: 'Conditional', notes: 'Only once Ohio gross receipts pass $6 million' },
    { item: 'Total (bare minimum DIY)', cost: '$99', isEmphasized: true, notes: 'State filing only' },
    { item: 'Total (typical with service)', cost: '$148-$349 before optional extras', isEmphasized: true, notes: 'Paid agent, no expediting' },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Ohio?',
      answer:
        'The state filing fee is $99. If you act as your own statutory agent, that is the true minimum startup cost. If you hire a statutory agent service, your first-year cost goes up based on the provider you choose. The practical takeaway is simple: $99 is the floor, but most founders who want privacy should expect to spend more.',
    },
    {
      question: 'How long does it take to get an Ohio LLC?',
      answer:
        'The conservative official answer is 3 to 7 business days for standard processing. Online filings may move faster in practice, but the official estimate is still 3 to 7 business days. Ohio also offers expedited options for 2-business-day, 1-business-day, and 4-hour processing. If timing matters, pay for expedite instead of assuming a standard online filing will move fast.',
    },
    {
      question: 'How do I register an LLC in Ohio?',
      answer:
        'Registering, forming, and filing an Ohio LLC all mean filing Articles of Organization (Form 610) with the Ohio Secretary of State for $99. That is the only state filing, and there is no annual report afterward. Other registrations depend on what you do: a $50 vendor\'s license if you sell taxable goods or services, an employer account if you hire, and a municipal income tax account with your city. None of those are part of forming the LLC, and none of them require a paid service.',
    },
    {
      question: 'How do I apply for an LLC in Ohio online?',
      answer:
        'File through Ohio Business Central at bsportal.ohiosos.gov. Create an account, choose Articles of Organization for a domestic LLC, and enter the name, the statutory agent and their Ohio street address, the agent\'s acceptance, and the organizer signature. Pay $99 by card. Standard processing is 3 to 7 business days; $100 more gets it in 2 business days and $200 more in 1. Search the name on the Secretary of State business search first so a conflict does not get the filing rejected.',
    },
    {
      question: 'Do I need an operating agreement in Ohio?',
      answer:
        'You do not need to file one with the state, but you should still have one. It helps with ownership rules, banking, decision-making, and showing that the LLC is a real separate entity. The takeaway: treat it as part of a clean LLC setup, not as optional fluff.',
    },
    {
      question: 'What is a statutory agent in Ohio?',
      answer:
        'It is Ohio’s term for a registered agent. This person or company receives legal documents and official state correspondence for your LLC. If you want privacy and cleaner operations, using a professional service is usually the easier default.',
    },
    {
      question: 'Can I be my own statutory agent in Ohio?',
      answer:
        'Yes, if you are an Ohio resident and you have a physical Ohio street address. The tradeoff is privacy and reliability, because your address goes on the filing and you need to be available during business hours. If you work from home or do not want your address public, a service is usually the better choice.',
    },
    {
      question: 'Can I use my home address for my LLC in Ohio?',
      answer:
        'Yes, many founders do that, especially if they are their own statutory agent. But that address can end up tied to the public filing, which is why many home-based founders use a statutory agent service instead of putting their personal address on the record.',
    },
    {
      question: "What happens if I don't maintain a statutory agent?",
      answer:
        'Ohio requires every LLC to maintain a statutory agent and to file an update within 30 days if the agent or address changes. If you let that lapse, you can miss legal notices and state correspondence, and the Secretary of State can cancel the LLC. The practical takeaway is simple: if you do not want to manage that yourself, pay for a reliable service and remove the risk.',
    },
    {
      question: 'Does Ohio require an annual report for an LLC?',
      answer:
        'No. Ohio does not require an annual or biennial report for standard LLCs. That makes it one of the lowest-maintenance states to run an LLC long term, and one of the clearest reasons Ohio is attractive for small founders.',
    },
    {
      question: 'Does Ohio require newspaper publication for an LLC?',
      answer:
        'No. Ohio does not require a publication step after formation, so you do not have to pay newspaper fees the way you would in states like New York. That keeps the setup cheaper and less annoying from day one.',
    },
    {
      question: 'Do Ohio LLCs need to file BOI reports?',
      answer:
        'No. FinCEN’s final rule, effective August 14, 2026, exempts companies formed in the U.S., including Ohio LLCs, from BOI reporting. Recheck FinCEN’s BOI page before filing in case the rule changes again, and ignore any letter asking you to pay to file a BOI report.',
    },
    {
      question: 'What taxes should an Ohio LLC watch?',
      answer:
        'For most small founders, the two big issues are local municipal income taxes and Ohio CAT if Ohio gross receipts ever rise above the $6 million exclusion. Most small LLCs will not owe CAT at the start, but they should know it exists. The practical takeaway is that Ohio is easy to form in, but tax complexity becomes more important as you scale.',
    },
    {
      question: 'Do I need a business license in Ohio?',
      answer:
        'Ohio does not have a blanket statewide business license for every LLC. But depending on what you sell and where you operate, you may still need a Vendor’s License, local registrations, or industry-specific permits. The takeaway is not to assume the LLC filing itself covers every operating requirement.',
    },
    {
      question: 'Can a non-resident form an Ohio LLC?',
      answer:
        'Yes. Ohio does not require members or organizers to live in the state. The main Ohio-specific requirement is that the LLC must maintain a statutory agent with a real Ohio street address. So if you are out of state, using a professional statutory agent is usually the cleanest path.',
    },
    {
      question: 'How is an Ohio LLC taxed?',
      answer:
        'Most Ohio LLCs are taxed as pass-through entities by default, but founders still need to watch Ohio CAT as revenue grows and city-level municipal income taxes where the business operates. Most small LLCs will not owe CAT at the start, but the local tax picture can still matter early. The takeaway is that Ohio’s tax burden is usually manageable at small scale, but it is not a state you should treat as “set it and forget it” forever.',
    },
    {
      question: 'Does Ohio have a PLLC?',
      answer:
        'Ohio does not have a separate PLLC formation track the way some states do. Licensed professionals generally use a standard LLC subject to the rules of the relevant licensing board, so this should be checked profession by profession before filing. The takeaway is to verify board rules before you assume a standard LLC will work for a licensed practice.',
    },
    {
      question: 'Can I set a future effective date for my Ohio LLC?',
      answer:
        'Yes. Ohio law allows a delayed effective date of up to 90 days after the Secretary of State receives the filing, which is useful if you want the LLC to start on a specific future date. If timing matters for taxes, contracts, or a launch date, this is worth using intentionally.',
    },
  ],
  proscons: {
    pros: [
      'Ohio standard LLCs do not file an annual report, which is one of the simplest and most valuable maintenance advantages the state offers.',
      'The filing itself is simple because Ohio does not require you to list members, managers, or ownership percentages on Form 610.',
      'If you live and operate in Ohio, forming in Ohio is usually cleaner and cheaper than trying to force an out-of-state LLC strategy.',
    ],
    cons: [
      "Ohio's municipal tax system is more complicated than most states' local rules, so check your city's requirements after you form.",
      'If you use your own address as the statutory agent, you give up privacy and take on more admin risk.',
      'Larger businesses still need to pay attention to Ohio CAT and other tax complexity as revenue grows.',
    ],
  },
};

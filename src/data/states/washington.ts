import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const washington: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Washington (${GUIDE_YEAR}): $200 Fee, Steps & Timeline`,
  seoDescription:
    'File a Washington LLC for $200 online, approved in about 5 business days. Then the $70 annual report, B&O tax, and state business license most guides skip.',
  lastUpdated: '2026-09-23',
  intro:
    "A Washington LLC costs $200 to file online, or $180 by mail. You file a Certificate of Formation with the Secretary of State's Corporations & Charities Division, and there's no newspaper publication requirement. After that, Washington requires an Initial Report within 120 days (free if you file it with the Certificate), a $70 Annual Report every year, and, for most operating businesses, a state business license through the Department of Revenue. The filing is the easy part. What first-time founders underestimate is the B&O tax, which is charged on gross receipts instead of profit, and the fact that your registered agent address goes on the public record.",
  whatYoullNeed:
    "To form a Washington LLC, you will need a distinguishable LLC name, a registered agent with a physical Washington street address, a principal office address, required email addresses for the registered agent and principal office, executor information, governor information if you file the Initial Report with formation, and $180 by mail or $200 online.",
  closing:
    "If you live and run your business in Washington, form in Washington. A Wyoming or Delaware LLC doesn't get you out of B&O tax, state business licensing, city endorsements, or foreign registration here. If you freelance from Washington, B&O is figured on what you bill, at 1.5% for most service businesses. Put three things on your calendar: file the free Initial Report with your Certificate of Formation, file the $70 Annual Report by the last day of your anniversary month, and register with DOR once your business activity requires it. You can be your own registered agent if you have a Washington street address and are there during business hours. A professional agent, usually $50 to $200 a year, is worth it if you work from home and don't want that address public, live outside Washington, or can't reliably be there to receive legal papers.",
  inlineCtaDescription:
    "Washington puts your registered agent and principal office addresses on the public record, and a noncommercial agent needs a real Washington street address. If you have one and you're there during business hours, you can be your own agent for free. A professional registered agent, usually $50 to $200 a year, makes sense if you work from home and don't want that address public, travel often, or live outside Washington. It doesn't add legal protection. It keeps your address private and makes sure legal notices reach you.",
  sidebarCtaDescription:
    "Don't want your home address on Washington's public records, or can't be at a Washington street address during business hours? A professional registered agent handles both for about $50 to $200 a year.",
  officialLinks: [
    { label: 'File your Washington LLC online (CCFS)', url: 'https://ccfs.sos.wa.gov/' },
    {
      label: 'Check Washington business name availability',
      url: 'https://ccfs.sos.wa.gov/ng-app/view/businesssearch/searchBusiness.html',
    },
    {
      label: 'Washington LLC filing resource page',
      url: 'https://www.sos.wa.gov/corporations-charities/business-entities/limited-liability-company-llc-professional-llc-pllc-filing-resource-page',
    },
    {
      label: 'Washington SOS fee schedule',
      url: 'https://www.sos.wa.gov/corporations-charities/frequently-asked-questions-faqs/fee-scheduleexpedited-service',
    },
    {
      label: 'Washington annual report information',
      url: 'https://www.sos.wa.gov/corporations-charities/business-entities/maintain-business-compliance/annual-reports',
    },
    {
      label: 'CCFS processing times and online fees',
      url: 'https://www.sos.wa.gov/corporations-charities/frequently-asked-questions-faqs/corporations-charities-filing-system-tools-resources',
    },
    { label: 'Washington SOS fees rule (WAC 434-112-085)', url: 'https://app.leg.wa.gov/wac/default.aspx?cite=434-112-085' },
    { label: 'Apply for a Washington business license', url: 'https://dor.wa.gov/open-business/apply-business-license' },
    {
      label: 'Business license processing fees',
      url: 'https://dor.wa.gov/open-business/apply-business-license/variable-business-license-processing-fees',
    },
    {
      label: 'Washington B&O tax rates by classification',
      url: 'https://dor.wa.gov/taxes-rates/business-occupation-tax/business-occupation-tax-classifications',
    },
    { label: 'Washington income tax (starts 2028)', url: 'https://dor.wa.gov/income-tax' },
    { label: 'FinCEN BOI reporting', url: 'https://www.fincen.gov/boi' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Washington has no individual income tax today, but that does not make it a no-tax state for LLCs. The main issue is Business & Occupation tax, a gross receipts tax measured on business income before deductions for labor, materials, taxes, or other costs. The main rates are 0.471% for retailing, 0.484% for wholesaling and manufacturing, and 1.5% for services when prior-year service income was under $1 million (1.75% from $1 million, 2.1% from $5 million).',
    'Two dated changes are already law. On January 1, 2027, the retailing, wholesaling, and standard manufacturing B&O rates rise to 0.5%. On January 1, 2028, a new 9.9% individual income tax starts on income above $1 million; it will not touch a typical first-year solo LLC, but "no income tax" is no longer the whole story.',
    'Most operating LLCs should expect to deal with the Department of Revenue after formation. The Business License Application is required if you meet conditions such as $12,000 or more in annual gross income, collecting sales tax, hiring employees, using a trade name, needing endorsements, or owing DOR taxes or fees.',
    'The business license application is also where many Washington-specific add-ons show up. City, county, state, and trade name endorsements can add fees and approval time, so the LLC filing itself is not the full launch checklist. DOR says online business license applications take about 10 business days, and endorsements can add another 2 to 3 weeks. If you sell taxable products or services, sales tax is destination-based and runs through the same DOR account; the LLC filing does not create it for you.',
    'Domestic Washington LLCs are exempt from FinCEN BOI reporting. FinCEN made that exemption permanent in a final rule effective August 14, 2026. Recheck BOI before filing because federal reporting rules have moved repeatedly.',
  ],
  comparisonRows: [
    {
      state: 'Washington',
      annualReport: '$70/yr, due last day of anniversary month',
      upfrontCost: '$180 mail / $200 online',
      ongoingStateCost: '$70 annual report + B&O tax + licensing as applicable',
    },
    {
      state: 'Oregon',
      annualReport: 'Annual report required',
      upfrontCost: '$100',
      ongoingStateCost: '$100/yr',
    },
    {
      state: 'Wyoming',
      annualReport: '$60 minimum license tax',
      upfrontCost: '$100',
      ongoingStateCost: '$60+/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No LLC annual report; annual tax applies',
      upfrontCost: '~$110',
      ongoingStateCost: '$300/yr',
    },
    {
      state: 'Ohio',
      annualReport: 'None for standard LLCs',
      upfrontCost: '$99',
      ongoingStateCost: '$0 annual report fee',
    },
  ],
  filingFee: 180,
  filingFeeDisplay: '$180 by mail / $200 online',
  filingFeeNote: 'Online filing is the $180 state filing fee plus the $20 online processing fee.',
  annualReportFee: 70,
  filingTime:
    'The Secretary of State says standard online submissions are typically finalized within five business days. It does not publish a standard time for mailed filings. Expedited filings are generally processed within three business days.',
  filingTimeShort: 'About 5 business days online',
  expeditedTime:
    '$100 expedited service is generally processed within three business days. Front-counter filings received before 3:30 PM can be processed the same day; SOS currently charges the $100 expedite fee for this instead of the $150 same-day fee on its fee schedule, and says it will give 30 days\' notice before charging $150.',
  expeditedFee: 100,
  filingAgency: 'Washington Secretary of State, Corporations & Charities Division',
  filingAgencyUrl: 'https://www.sos.wa.gov/corporations-charities',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Washington has no individual income tax until a 9.9% tax on income over $1 million starts January 1, 2028. B&O tax is a gross receipts tax by classification: 0.471% retailing, 0.484% wholesaling/manufacturing (both 0.5% from January 1, 2027), and 1.5% for services under $1 million; sales tax applies when selling taxable goods or services.',
  stateTax:
    'Most Washington LLCs default to pass-through taxation federally, but the state-specific issue is B&O tax on gross receipts plus DOR business licensing, sales tax, and local endorsements when applicable.',
  annualReportDue: 'Last day of your formation anniversary month',
  annualReportNote:
    'Initial Report due within 120 days; free with formation or $10 if filed later. Annual Report is $70 each year and can be filed up to 180 days early.',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Washington-compliant LLC name',
      description:
        'Your name must be distinguishable on Washington Secretary of State records and include one of the required designators: Limited Liability Company, Limited Liability Co., L.L.C., or LLC. Washington also restricts terms such as Bank, banking, banker, trust, cooperative, and certain savings-and-loan combinations. Search CCFS before filing because punctuation, articles, and entity designators do not reliably make a name distinguishable. Name reservation is optional, costs $30, and is rarely worth it unless you need to hold the name before filing.',
    },
    {
      title: 'Appoint a registered agent with a Washington street address',
      description:
        'Washington uses the term registered agent. Every LLC must list either a commercial registered agent or a noncommercial registered agent that has consented to serve. A noncommercial agent must provide a physical Washington street address; PO boxes and private mailboxes do not qualify. You can serve as your own registered agent if you have a qualifying Washington address and can receive legal notices during business hours, but that address becomes part of the public record.',
    },
    {
      title: 'File the Certificate of Formation',
      description:
        'Form the LLC by filing a Certificate of Formation with the Washington Secretary of State through CCFS or by mail. The base filing fee is $180; online filing is $200 once the $20 online processing fee is added. You will enter the LLC name, registered agent information, principal office address, duration, effective date, executor information, and any optional provisions. Washington now requires email addresses for the registered agent and principal office fields.',
    },
    {
      title: 'Do not defer the Initial Report unless you mean to',
      description:
        'Washington requires an Initial Report within 120 days after formation. If you include it with the Certificate of Formation, it is free. If you defer it, the separate filing costs $10 and creates one more deadline for a new founder to miss. The Initial Report records principal office information, governors, and the nature of business, so have that information ready before you file.',
    },
    {
      title: 'Wait for approval or pay for expedited handling',
      description:
        'The Secretary of State says standard online submissions are typically finalized within five business days; mailed filings take longer and have no published timeline. "Typically" is not a guarantee, so if a launch date depends on it, pay for expedited service: $100 per business entity, generally processed within three business days. Front-counter filings received before 3:30 PM can be processed the same day, currently for the same $100 expedite fee (the fee schedule lists a $150 same-day fee that SOS says it has not started charging). After approval, Washington assigns or confirms the LLC\'s 9-digit UBI for use across state agencies.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'After approval, apply for an EIN directly with the IRS. It is free and usually immediate online for eligible applicants. Multi-member LLCs, LLCs with employees, and most LLCs opening a business bank account need one. Do not pay a third party for an EIN unless you are intentionally paying for convenience.',
    },
    {
      title: 'Create a Washington operating agreement and open a bank account',
      description:
        'Washington does not require an operating agreement and you do not file it with the Secretary of State. You should still have a written Washington operating agreement because it documents ownership, management authority, voting rules, transfers, and what happens if a member leaves. Banks commonly ask for it, and it helps keep the LLC separate from you personally. Open a dedicated business bank account before revenue starts flowing.',
    },
    {
      title: 'Handle DOR licensing, taxes, and the Annual Report',
      description:
        'Most operating Washington LLCs need to apply for a state business license through the Department of Revenue, especially if gross income reaches $12,000 per year, the business collects sales tax, hires employees, uses a trade name, needs endorsements, or owes DOR taxes or fees. The open/reopen processing fee is currently $50, and endorsements can add more. DOR says online applications take about 10 business days, with another 2 to 3 weeks possible for city or state endorsements. Going forward, file the $70 Annual Report with the Secretary of State every year by the last day of your formation anniversary month. Missing it adds a delinquent fee and can eventually lead to administrative dissolution.',
    },
  ],
  costBreakdown: [
    {
      item: 'Certificate of Formation (mail)',
      cost: '$180',
      required: 'Yes (one filing path)',
      notes: 'Base public organic record fee',
    },
    {
      item: 'Certificate of Formation (online)',
      cost: '$200',
      required: 'Yes (one filing path)',
      notes: 'Includes online processing fee',
    },
    { item: 'Initial Report', cost: '$0 with formation / $10 later', required: 'Yes', notes: 'Due within 120 days' },
    { item: 'Name reservation', cost: '$30', required: 'Optional', notes: 'Useful only if not ready to form' },
    { item: 'Registered agent service', cost: '$50-$200/yr', required: 'Optional', notes: 'Self-file for $0 if eligible' },
    { item: 'Expedited filing', cost: '+$100', required: 'Optional', notes: 'Generally processed within three business days' },
    {
      item: 'Same-day front-counter service',
      cost: '+$100 today ($150 listed)',
      required: 'Optional',
      notes: 'Front-counter filings before 3:30 PM; SOS will give 30 days\' notice before charging $150',
    },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    {
      item: 'Operating agreement',
      cost: 'Free if you draft it yourself',
      required: 'Recommended',
      notes: 'Internal document; not filed',
    },
    {
      item: 'WA Business License Application processing fee',
      cost: '$50 to open/reopen a business',
      required: 'Conditional',
      notes: 'Endorsements and trade names can add fees',
    },
    { item: 'Annual Report', cost: '$70/yr', required: 'Yes (recurring)', notes: 'Due anniversary month' },
    { item: 'Delinquent annual report fee', cost: '+$25', required: 'Only if late', notes: '$95 total if delinquent' },
    { item: 'Certificate of Existence / Good Standing', cost: '$20', required: 'Optional', notes: 'Sometimes requested' },
    {
      item: 'B&O tax',
      cost: 'Varies',
      required: 'Conditional',
      notes: 'Gross receipts tax by business classification',
    },
    {
      item: 'Total (bare minimum DIY)',
      cost: '$200 formation only / about $250 with DOR license processing',
      isEmphasized: true,
      notes: 'Uses online filing and current $50 open/reopen business license processing fee',
    },
    {
      item: 'Total (typical first year with commercial agent)',
      cost: '$300-$450+',
      isEmphasized: true,
      notes: 'Online filing + typical registered agent + license processing when required',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Washington?',
      answer:
        'The Certificate of Formation is $180 by mail or $200 online once the $20 online processing fee is included. If your business also needs the Washington Business License Application at launch, the open/reopen processing fee is currently $50 plus any endorsements. A commercial registered agent usually adds about $50 to $200 per year.',
    },
    {
      question: 'What is the Washington LLC filing fee?',
      answer:
        'The base Washington LLC filing fee is $180 for the Certificate of Formation. Online filing adds a $20 processing fee, so the practical online total is $200. Expedited service is an extra $100.',
    },
    {
      question: 'How long does it take to get a Washington LLC?',
      answer:
        'The Secretary of State says standard online submissions are typically finalized within five business days. Mailed filings take longer and have no published timeline. If timing matters, pay the $100 expedite fee; expedited filings are generally processed within three business days.',
    },
    {
      question: 'How do I register an LLC in Washington?',
      answer:
        'Registering, forming, and filing a Washington LLC all mean the same thing: you file a Certificate of Formation with the Secretary of State through CCFS and pay $200 online ($180 by mail). That creates the LLC and gives it a 9-digit UBI number. Most operating businesses then need a second registration: a Washington business license through the Department of Revenue ($50 processing fee, about 10 business days online) once gross income reaches $12,000 a year, or sooner if you collect sales tax, hire, or use a trade name. Forming the LLC does not do that step for you.',
    },
    {
      question: 'How do I apply for an LLC in Washington online?',
      answer:
        'Go to CCFS at ccfs.sos.wa.gov, create an account, search your name, and start a new Washington LLC filing. You will enter the name, registered agent, principal office, email addresses for both, the executor, and your governors. File the Initial Report in the same session so it is free instead of $10 later. Pay $200 by card. Online filings are typically finalized within five business days; pay $100 more if you need it in about three.',
    },
    {
      question: 'Where do I file an LLC in Washington?',
      answer:
        'With the Washington Secretary of State, Corporations & Charities Division, online through CCFS (the Corporations and Charities Filing System) at ccfs.sos.wa.gov, or by mail. The Department of Revenue is separate and handles business licensing and tax accounts after formation.',
    },
    {
      question: 'What is the formation document called in Washington?',
      answer:
        'The formation document is the Certificate of Formation. That is Washington\'s LLC formation filing under Chapter 25.15 RCW. Do not call it Articles of Organization on the Washington filing.',
    },
    {
      question: 'Does Washington require a registered agent?',
      answer:
        'Yes. Washington uses the term registered agent, and every LLC must maintain one. The agent must consent to serve and must have a physical Washington street address if noncommercial. PO boxes and private mailboxes do not qualify.',
    },
    {
      question: 'Can I be my own registered agent in Washington?',
      answer:
        'Yes, if you have a physical Washington street address and can reliably receive legal documents during business hours. The tradeoff is privacy and reliability because the address is tied to public business records. If you work from home or travel often, a professional registered agent is usually the better default.',
    },
    {
      question: 'Does Washington require an operating agreement?',
      answer:
        'Washington does not require you to file an operating agreement with the state. You should still create a written Washington operating agreement because banks may ask for it and it documents ownership, management, voting, transfers, and separation between you and the LLC.',
    },
    {
      question: 'Does Washington require an Annual Report for LLCs?',
      answer:
        'Yes. Washington LLCs file a $70 Annual Report every year by the last day of the LLC\'s formation anniversary month. The report can be filed up to 180 days early. There is also an Initial Report due within 120 days of formation, free if filed with the Certificate of Formation or $10 if filed later.',
    },
    {
      question: 'Does Washington require newspaper publication for an LLC?',
      answer:
        'No. Washington does not require LLCs to publish a formation notice in a newspaper. That keeps the formation process simpler than states with publication rules.',
    },
    {
      question: 'Do I need a Washington business license?',
      answer:
        'Many Washington LLCs do. DOR says you need to register if, among other triggers, your gross income is $12,000 per year or more, you collect sales tax, hire employees, use a trade name, need endorsements, or owe taxes or fees to DOR. The LLC filing itself does not replace the Business License Application.',
    },
    {
      question: 'How is a Washington LLC taxed?',
      answer:
        'Federally, most LLCs default to pass-through treatment. Washington has no individual income tax today (a 9.9% tax on income over $1 million starts January 1, 2028), but it does impose B&O tax on gross receipts: 1.5% for most service businesses and 0.471% for retailers. That tax is measured before deductions for labor, materials, taxes, or other costs, so it matters even when profit margins are thin.',
    },
    {
      question: 'Can a non-resident form a Washington LLC?',
      answer:
        'Yes. Washington does not require LLC members or executors to live in Washington. The LLC still needs a registered agent with a physical Washington street address, so out-of-state founders normally hire a commercial registered agent.',
    },
    {
      question: 'Do Washington LLCs need to file BOI reports?',
      answer:
        'No. Domestic Washington LLCs are exempt from FinCEN BOI reporting, and FinCEN made that exemption permanent in a final rule effective August 14, 2026. Entities formed outside the United States and registered to do business here can still have BOI obligations. Because the federal rule has changed before, recheck FinCEN before relying on an old checklist.',
    },
  ],
  proscons: {
    pros: [
      'No individual income tax on pass-through profit for now; the new 9.9% tax starting in 2028 only applies to income over $1 million.',
      'No publication requirement, so there is no newspaper notice cost or extra post-formation publication step.',
      'The Secretary of State online filing path is clear, and the Initial Report can be filed with formation for free.',
      "You can be your own registered agent for free if you have a Washington street address and don't mind it on the public record.",
    ],
    cons: [
      'B&O tax applies to gross receipts, not profit, so you can owe it in a year when the business lost money.',
      'Most operating LLCs still need DOR business licensing and possibly city, county, state, or trade name endorsements after formation.',
      'Standard online review is only "typically" five business days and mail has no published timeline, so timing-sensitive launches may need the $100 expedite.',
      'Registered agent, principal office, executor, and governor information can create public-record privacy issues for home-based founders.',
      'Two filing deadlines to track: the Initial Report within 120 days of formation, then the $70 Annual Report every year by the last day of your anniversary month.',
    ],
  },
};

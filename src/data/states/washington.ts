import type { StateOverride } from './types';

export const washington: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in Washington (2026): Costs + Steps | LLCAtlas',
  seoDescription:
    'Start a Washington LLC with the real filing fee, registered agent rules, annual report, B&O tax, and state business license steps.',
  lastUpdated: '2026-05-04',
  intro:
    'Starting an LLC in Washington is straightforward, but it is not a one-and-done state. The Certificate of Formation is filed with the Washington Secretary of State, Corporations & Charities Division, for $180 by mail or $200 online when the online processing fee is included. Washington has no publication requirement, but it does require an Initial Report within 120 days, a $70 Annual Report every year, and a state business licensing/tax setup through the Department of Revenue for most operating businesses. The practical warning: the filing is easy; the B&O gross receipts tax and public registered agent address are what first-time founders usually underestimate.',
  whatYoullNeed:
    "To form a Washington LLC, you will need a distinguishable LLC name, a registered agent with a physical Washington street address, a principal office address, required email addresses for the registered agent and principal office, executor information, governor information if you file the Initial Report with formation, and $180 by mail or $200 online.",
  closing:
    'Washington is usually the right state if you live and operate in Washington. Forming in Wyoming or Delaware does not avoid Washington B&O tax, state business licensing, city endorsements, or foreign registration if the business is actually run from Washington. The key compliance reminders are simple: file the free Initial Report with formation if you can, calendar the $70 Annual Report for the last day of your anniversary month, and register with DOR when your business activity requires it. A professional registered agent is worth it if you work from home, live outside Washington, or cannot reliably receive legal notices at a Washington street address during business hours.',
  inlineCtaDescription:
    'Washington puts registered agent and principal office information into public business records, and the registered agent must have a real Washington street address. If you work from home, travel often, or do not want your personal address tied to the LLC, a professional registered agent is the cleanest privacy and reliability upgrade. It is not magic legal protection, but it solves a real Washington filing problem.',
  sidebarCtaDescription:
    'If you do not want your home address on Washington public records or you need a reliable Washington street address for legal notices, use a professional registered agent.',
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
    { label: 'Apply for a Washington business license', url: 'https://dor.wa.gov/open-business/apply-business-license' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Washington has no state income tax, but that does not make it a no-tax state for LLCs. The main issue is Business & Occupation tax, a gross receipts tax measured on business income before deductions for labor, materials, taxes, or other costs. Rates vary by classification; many small businesses fall somewhere in the 0.138% to 1.5% range.',
    'Most operating LLCs should expect to deal with the Department of Revenue after formation. The Business License Application is required if you meet conditions such as $12,000 or more in annual gross income, collecting sales tax, hiring employees, using a trade name, needing endorsements, or owing DOR taxes or fees.',
    'The business license application is also where many Washington-specific add-ons show up. City, county, state, and trade name endorsements can add fees and approval time, so the LLC filing itself is not the full launch checklist. DOR says online business license applications take about 10 business days, and endorsements can add another 2 to 3 weeks.',
    'Sales tax is destination-based in Washington. If you sell taxable products or taxable services, register and remit through DOR instead of assuming the LLC filing created every tax account you need.',
    'Domestic Washington LLCs are currently exempt from FinCEN BOI reporting under FinCEN guidance in effect after the March 2025 interim final rule. Recheck BOI before publishing or filing because federal reporting rules have moved repeatedly.',
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
  filingFeeNote: 'Online filing includes the state filing fee plus the online processing fee.',
  annualReportFee: 70,
  filingTime:
    'Washington does not publish a guaranteed standard processing SLA for LLC formations. Expedited filings are generally processed within three working days.',
  filingTimeShort: 'No published SLA',
  expeditedTime:
    '$100 expedited service is generally processed within three working days. Front-counter same-day service is listed as a same-day option if received before 3:30 PM, but SOS fee handling for that service has changed, so verify the same-day fee before relying on it.',
  expeditedFee: 100,
  filingAgency: 'Washington Secretary of State, Corporations & Charities Division',
  filingAgencyUrl: 'https://www.sos.wa.gov/corporations-charities',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Washington has no state income tax. B&O tax is a gross receipts tax with rates that vary by business classification, commonly cited from 0.138% to 1.5%; sales tax applies when selling taxable goods or services.',
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
        'Form the LLC by filing a Certificate of Formation with the Washington Secretary of State through CCFS or by mail. The base filing fee is $180; online filing is $200 when the online processing fee is included. You will enter the LLC name, registered agent information, principal office address, duration, effective date, executor information, and any optional provisions. Washington now requires email addresses for the registered agent and principal office fields.',
    },
    {
      title: 'Do not defer the Initial Report unless you mean to',
      description:
        'Washington requires an Initial Report within 120 days after formation. If you include it with the Certificate of Formation, it is free. If you defer it, the separate filing costs $10 and creates one more deadline for a new founder to miss. The Initial Report records principal office information, governors, and the nature of business, so have that information ready before you file.',
    },
    {
      title: 'Wait for approval or pay for expedited handling',
      description:
        'Washington does not publish a guaranteed standard processing SLA for LLC formations, so do not promise a launch date around an ordinary filing. If timing matters, expedited service costs $100 per business entity and is generally processed within three working days. Front-counter same-day service is listed as available if received before 3:30 PM, but SOS notes around the same-day fee have changed, so verify the current charge before relying on it. After approval, Washington assigns or confirms the LLC\'s 9-digit UBI for use across state agencies.',
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
    { item: 'Expedited filing', cost: '+$100', required: 'Optional', notes: 'Generally processed within three working days' },
    {
      item: 'Same-day front-counter service',
      cost: 'Verify current charge',
      required: 'Optional',
      notes: 'Listed for front-counter filings before 3:30 PM; SOS fee handling has changed',
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
        'The Certificate of Formation is $180 by mail or $200 online when the online processing fee is included. If your business also needs the Washington Business License Application at launch, the open/reopen processing fee is currently $50 plus any endorsements. A commercial registered agent usually adds about $50 to $200 per year.',
    },
    {
      question: 'What is the Washington LLC filing fee?',
      answer:
        'The base Washington LLC filing fee is $180 for the Certificate of Formation. Online filing adds a processing fee, so the practical online total is $200. Expedited service is an extra $100.',
    },
    {
      question: 'How long does it take to get a Washington LLC?',
      answer:
        'Washington does not publish a guaranteed standard processing SLA for LLC formations. The state does publish an expedited option: $100 expedited service is generally processed within three working days. If timing matters, use expedited service instead of relying on a secondary-source estimate.',
    },
    {
      question: 'What agency forms a Washington LLC?',
      answer:
        'Washington LLCs are formed with the Washington Secretary of State, Corporations & Charities Division. The online system is called CCFS, the Corporations and Charities Filing System. The Department of Revenue is separate and handles business licensing and tax accounts after formation.',
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
        'Federally, most LLCs default to pass-through treatment. Washington has no state income tax, but it does impose B&O tax on gross receipts. That tax is measured before deductions for labor, materials, taxes, or other costs, so it matters even when profit margins are thin.',
    },
    {
      question: 'Can a non-resident form a Washington LLC?',
      answer:
        'Yes. Washington does not require LLC members or executors to live in Washington. The LLC still needs a registered agent with a physical Washington street address, so out-of-state founders normally hire a commercial registered agent.',
    },
    {
      question: 'Do Washington LLCs need to file BOI reports?',
      answer:
        'Domestic Washington LLCs are currently exempt from FinCEN BOI reporting under the federal rule in effect after March 2025. Foreign entities registered to do business in the United States can still have BOI obligations. Because the federal rule has changed before, recheck FinCEN before relying on an old checklist.',
    },
  ],
  proscons: {
    pros: [
      'No state income tax, which helps owners compared with states that tax pass-through income directly.',
      'No publication requirement, so there is no newspaper notice cost or extra post-formation publication step.',
      'The Secretary of State online filing path is clear, and the Initial Report can be filed with formation for free.',
      'The registered agent role is flexible enough for eligible Washington founders to self-serve if they accept the privacy tradeoff.',
    ],
    cons: [
      'B&O tax applies to gross receipts, not profit, so low-margin or early-stage businesses can still have state tax complexity.',
      'Most operating LLCs still need DOR business licensing and possibly city, county, state, or trade name endorsements after formation.',
      'Washington does not publish a guaranteed standard LLC formation SLA, so timing-sensitive launches may need expedited service.',
      'Registered agent, principal office, executor, and governor information can create public-record privacy issues for home-based founders.',
      'The Annual Report is real: $70 every year by the last day of the anniversary month, plus a separate Initial Report deadline after formation.',
    ],
  },
};

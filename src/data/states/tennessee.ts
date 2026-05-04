import type { StateOverride } from './types';

export const tennessee: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in Tennessee (2026): $300 Minimum | LLCAtlas',
  seoDescription:
    'Start a Tennessee LLC through TNBear. See the $300 minimum filing fee, registered agent rules, annual report cost, and franchise tax warning.',
  lastUpdated: '2026-05-04',
  intro:
    'Starting an LLC in Tennessee is fast, but it is not especially cheap. The filing fee is $50 per member, with a $300 minimum and a $3,000 maximum, and you file Articles of Organization with the Tennessee Secretary of State through TNBear. Online filings are processed immediately, there is no publication requirement, and every LLC files an Annual Report using the same $300 minimum fee formula. The big Tennessee warning: no personal income tax does not mean no entity-level tax. LLCs are generally subject to Tennessee franchise and excise tax, so budget beyond the formation filing.',
  whatYoullNeed:
    "To form a Tennessee LLC, you'll need a unique business name, a registered agent with a physical Tennessee street address, a principal office address, your fiscal year-end month, management structure, organizer information, member count for fee calculation, and at least $300 for the state filing fee.",
  closing:
    'If your business is actually based in Tennessee, forming a Tennessee LLC is usually the practical move because it avoids foreign registration on top of local compliance. The filing itself is easy; the maintenance is where founders get surprised. Put the Annual Report and franchise and excise tax filings on your calendar, and use a professional registered agent if you work from home, travel often, or do not want your address tied to the public registered office record.',
  inlineCtaDescription:
    'Tennessee gives founders a real privacy advantage because member and manager names are not required on the Articles of Organization. That advantage disappears if you use your home address as the registered office or principal office. A professional registered agent gives you a reliable Tennessee street address for legal notices and keeps the agent address off your personal doorstep.',
  sidebarCtaDescription:
    'If you work from home or need a reliable Tennessee street address, use a professional registered agent instead of putting your home address on the public record.',
  officialLinks: [
    { label: 'File your Tennessee LLC online (TNBear)', url: 'https://tnbear.tn.gov/NewBiz' },
    { label: 'Check Tennessee name availability', url: 'https://tnbear.tn.gov/Ecommerce/FilingSearch.aspx' },
    { label: 'Tennessee SOS forms and fees', url: 'https://sos.tn.gov/businesses/forms-and-fees' },
    { label: 'File your Tennessee Annual Report (TNCaB)', url: 'https://tncab.tnsos.gov/' },
    { label: 'Register Tennessee tax accounts (TNTAP)', url: 'https://tntap.tn.gov' },
    {
      label: 'Tennessee franchise and excise tax',
      url: 'https://www.tn.gov/revenue/taxes/franchise---excise-tax.html',
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
    'Online filings through TNBear are processed immediately or the same business day. Mail filings take about 3 to 5 business days after receipt, plus mail transit, so plan on roughly 2 to 3 weeks total.',
  filingTimeShort: 'Instant online',
  expeditedTime: null,
  expeditedFee: null,
  filingAgency: 'Tennessee Secretary of State, Division of Business Services',
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
        'Your name must be distinguishable on Tennessee Secretary of State records and include an approved designator such as Limited Liability Company, LLC, or L.L.C. It cannot include corporation or incorporated, and words tied to banking, trust, insurance, or similar regulated industries can require pre-approval. Search TNBear before you file. If you are ready to file soon, skip the $20 name reservation because approval of the Articles locks in the name.',
    },
    {
      title: 'Appoint a Tennessee registered agent',
      description:
        'Tennessee uses the term registered agent, with a registered office for the address. The agent must have a physical Tennessee street address; PO boxes and addresses that fail deliverability checks can get the filing rejected. You can serve yourself, use another Tennessee resident, use a Tennessee-authorized business entity, or in Tennessee the LLC itself may serve as its own registered agent. The tradeoff is privacy: the registered office address becomes public.',
    },
    {
      title: 'File Articles of Organization through TNBear',
      description:
        'File Articles of Organization - Limited Liability Company, Form SS-4270, with the Tennessee Secretary of State. The cleanest path is TNBear online filing because approval is immediate or same-day. You will provide the LLC name, registered agent and registered office, principal office, fiscal year-end month, management structure, organizer signature, and member count if it affects the fee. Tennessee does not require member or manager names on the Articles, which is a real privacy advantage.',
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
    { item: 'Name reservation', cost: '$20', required: 'Optional', notes: '120-day hold' },
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
        'Online filings through TNBear are processed immediately or the same business day. Mail filings take about 3 to 5 business days after the state receives them, plus mail transit, so 2 to 3 weeks is a safer estimate if you mail the form.',
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
        'Federally, a Tennessee LLC usually defaults to pass-through taxation. At the Tennessee level, LLCs are generally subject to franchise tax and excise tax at the entity level, even though Tennessee has no personal income tax.',
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
      'Online filing through TNBear is immediate or same-day, so most founders do not need to wait on mail processing.',
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

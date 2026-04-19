import type { StateOverride } from './types';

export const michigan: StateOverride = {
  contentStatus: 'ready',
  intro:
    'Starting an LLC in Michigan is cheaper and cleaner than most states. The filing fee is $50, there is no publication requirement, and filing goes through the MiBusiness Registry Portal at LARA — not the Secretary of State. One thing to know up front: Michigan calls this role a resident agent, not a statutory agent or a registered agent. The real decisions are simple: pick a compliant name, appoint a resident agent with a Michigan street address, file Form CSCL/CD-700, get an EIN, and plan for the one ongoing filing Michigan actually requires — the $25 Annual Statement every February 15.',
  whatYoullNeed:
    "To form a Michigan LLC, you'll need a unique business name, a resident agent with a physical Michigan street address, and $50 for the filing fee. Most online filings approve in about 7 to 10 business days.",
  closing:
    'Michigan is one of the cheaper, cleaner states to form an LLC in. The $50 filing fee is low, there is no publication step, and the MiBusiness Registry Portal makes the filing itself genuinely quick. If you live and operate in Michigan, there is no good reason to complicate this by forming in Wyoming or Delaware. Two things matter after formation. First, the $25 Annual Statement every February 15 — miss it and Michigan adds a $50 late penalty on top of the fee; miss it two years in a row and the LLC loses good standing and your name becomes available to anyone. Second, if you live or work in one of Michigan’s 24 municipal income tax cities (Detroit, Grand Rapids, Lansing, and others), treat the local tax as a separate problem to plan for. If you work from home, use a professional resident agent service instead of putting your own address on the record.',
  inlineCtaDescription:
    'Your resident agent’s name and address are public and permanent in the Michigan record. If you work from home, travel often, or just do not want your address tied to a business filing, use a professional resident agent. It is the cleanest way to protect your privacy and the most reliable way to avoid missing a legal notice.',
  sidebarCtaDescription:
    'If you work from home, do not want your address on the public record, or cannot reliably be at a Michigan street address during business hours, use a professional resident agent instead of listing yourself.',
  officialLinks: [
    { label: 'File your Michigan LLC online (MiBRP)', url: 'https://www.michigan.gov/corpfileonline' },
    { label: 'Check Michigan name availability', url: 'https://www.michigan.gov/corpentitysearch' },
    {
      label: 'Download Form CSCL/CD-700',
      url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/cscl/NonImages_new/Corps/forms/llc/700-0725.pdf',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number',
    },
  ],
  taxHighlights: [
    'Michigan does not have a Commercial Activity Tax or any gross-receipts tax. If you have read that Michigan has a CAT, that was Ohio. Michigan’s state business taxes are the 6% Corporate Income Tax (C-corps only) and the elective Flow-Through Entity tax for eligible pass-throughs. Most small LLCs default to pass-through and simply pick up Michigan’s 4.25% individual income tax at the owner level.',
    'The real Michigan tax complexity is local. 24 Michigan cities levy their own income tax, including Detroit (2.4% resident / 1.2% nonresident) and Grand Rapids (1.5% resident / 0.75% nonresident). Pass-through LLC members owe city tax where they live or work, and Michigan’s credit for tax paid to another city is capped at 0.5%. If you or your business touches a city with income tax, build local filings into your compliance plan from day one.',
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
      annualReport: 'No annual report; $300 annual tax',
      upfrontCost: '~$110',
      ongoingStateCost: '$300/yr',
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
  filingTime: '~7 to 10 business days',
  filingTimeShort: '7–10 days',
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
        'Michigan calls this role a resident agent. On your Articles, you will list the resident agent and a "registered office" — a physical Michigan street address, no P.O. boxes. You can serve as your own resident agent if you are a Michigan resident, you have a qualifying Michigan street address, and you are comfortable with that address being part of the permanent public record. If you live outside Michigan or do not want your home address public, hire a commercial resident agent service. Whatever other states call this role, on your Michigan filing use the term "resident agent."',
    },
    {
      title: 'File Form CSCL/CD-700 with LARA',
      description:
        'File through the MiBusiness Registry Portal at mibusinessregistry.lara.state.mi.us, which replaced the old COFS system in June 2025. The fee is $50, whether you file online or by mail. The filing agency is LARA’s Corporations Division — not the Michigan Secretary of State. You will need your LLC name, your resident agent’s name, the registered office street address, and an organizer signature. Michigan defaults to member-managed unless you say otherwise, so if you want a manager-managed LLC you must add that statement in Article V. You can also set a delayed effective date of up to 90 days after receipt if you want to start on a specific future date.',
    },
    {
      title: 'Wait for approval or pay for expedited processing',
      description:
        'Standard online processing is about 7 to 10 business days. If you need it faster, Michigan’s expedited tiers sit on top of the $50 base fee: 24-hour review for +$50, same-day for +$100, 2-hour for +$500, and 1-hour for +$1,000. After approval, LARA returns stamped Articles to the registered office and gives you a Customer ID Number and PIN for future filings through MiBRP.',
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
        'This is Michigan’s one ongoing state filing, and it is the thing generic guides get wrong. It is called an Annual Statement — not an annual report — and it is filed online only through MiBRP using Form CSCL/CD-2700. The fee is $25. Miss the February 15 deadline and Michigan adds a $50 late penalty. Miss it for two years in a row and the LLC loses good standing; your name becomes available for someone else to use, and getting back to good standing requires a restoration filing and all missed fees. One useful exception: if you form after September 30, you skip the immediately following February 15 filing.',
    },
  ],
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
    { item: 'Annual Statement late penalty', cost: '$50', required: 'Only if late', notes: 'Added to $25 fee' },
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
        'Standard online processing through the MiBusiness Registry Portal is about 7 to 10 business days. If timing matters, Michigan offers expedited tiers on top of the $50 base fee: 24-hour for an extra $50, same-day for $100, 2-hour for $500, and 1-hour for $1,000. Mail filings can take noticeably longer because of transit and receipts processing — if you are in a hurry, do not mail it.',
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
        'Not an annual report — an Annual Statement. That is Michigan’s own terminology, and the distinction matters because a lot of generic LLC guides wrongly say Michigan has no annual filing. For a standard LLC, you file Form CSCL/CD-2700 every year by February 15, the fee is $25, and as of the 2025 portal change, it is filed online only through MiBRP. Miss the deadline and Michigan adds a $50 late penalty on top of the $25 fee.',
    },
    {
      question: 'Does Michigan require newspaper publication for an LLC?',
      answer:
        'No. Michigan has no publication requirement for LLCs. You do not have to run a formation notice in a newspaper the way you would in a state like New York, which keeps the setup cost predictable and lower overall.',
    },
    {
      question: 'Do Michigan LLCs need to file BOI reports?',
      answer:
        'Under the FinCEN interim final rule published March 26, 2025, domestic U.S. LLCs — including Michigan LLCs — are exempt from Beneficial Ownership Information reporting. The rule is still interim and could change, so this is worth rechecking before publication on any checklist that was written before April 2025.',
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
      'The $50 filing fee is one of the lowest among major states, and the $25 Annual Statement is genuinely cheap as ongoing fees go.',
      'No publication requirement, no gross-receipts tax, and no franchise tax. The baseline cost of running a Michigan LLC stays low year after year.',
      'Online filing through the MiBusiness Registry Portal is fast, and Michigan’s expedited tiers go all the way down to 1-hour processing if you need to form immediately.',
    ],
    cons: [
      'Michigan does require an annual filing. It is called an Annual Statement and it is $25 every February 15. The "Michigan has no annual report" claim in some guides is technically narrow and practically misleading — miss the deadline and you owe a $50 late penalty.',
      '24 Michigan cities levy their own income tax, and Detroit and Grand Rapids in particular can create real compliance overhead for pass-through LLC owners who live or work in those cities.',
      'Michigan does not authorize Series LLCs, so if you need to silo multiple ventures under one umbrella, you will have to form somewhere else.',
    ],
  },
};

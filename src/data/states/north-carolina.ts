import type { StateOverride } from './types';

export const northCarolina: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in North Carolina (2026): $125 + April 15 Report | LLCAtlas',
  seoDescription:
    'File a North Carolina LLC for $125. Real costs, the registered agent rule, and the $200 annual report due every April 15 most guides bury.',
  lastUpdated: '2026-04-19',
  intro:
    'Starting an LLC in North Carolina is straightforward but not the cheapest state to maintain. The filing fee is $125, there is no publication requirement, and you file Form L-01 with the NC Secretary of State. The thing most guides get wrong: NC uses registered agent (not statutory agent), NC has no Commercial Activity Tax (that is Ohio), and the real ongoing cost is the $200 annual report due every April 15 starting the year after you form. Decide on a compliant name, appoint a registered agent with a physical NC street address, file L-01, get an EIN, and put the April 15 annual report on the calendar.',
  whatYoullNeed:
    "To form a North Carolina LLC, you'll need a unique business name, a registered agent with a physical NC street address, and $125 for the filing fee. NC does not publish a guaranteed turnaround for standard filings — only the expedited tiers ($100 for 24-hour, $200 for same-day) are guaranteed.",
  closing:
    'North Carolina is a clean, modern state to form an LLC in if you live or operate here. The Chapter 57D LLC Act is well-drafted, the $125 filing fee is mid-pack, there is no publication step, and default-taxed LLCs owe no franchise tax. The real ongoing reality is the $200 annual report every April 15 — high compared with Wyoming or Florida, but cheaper than Delaware once you account for DE’s $300 franchise tax. Two things to lock in before you file: pick a registered agent you actually trust to forward legal mail, and put April 15 on the calendar with a reminder a month out. Miss the report and NC will administratively dissolve the LLC after a 60-day cure window. If you live and operate in NC, there is no good reason to form in Wyoming or Delaware instead — you would just end up registering as a foreign LLC in NC and paying twice.',
  inlineCtaDescription:
    'Your registered agent’s name and NC street address are on the public Articles of Organization permanently, and your company officials get listed on every annual report. If you work from home, do not want your address public, or cannot reliably be at a NC street address during business hours, use a commercial registered agent. Look for a flat annual price ($100–$300/yr is the normal range) and avoid providers that bundle in formation upsells you do not need.',
  sidebarCtaDescription:
    'If you work from home, travel, or just do not want your address tied to public NC business records, use a professional registered agent instead of listing yourself.',
  officialLinks: [
    { label: 'File your NC LLC online', url: 'https://sosnc.gov/online_filing/filing/creation' },
    {
      label: 'Check NC name availability',
      url: 'https://www.sosnc.gov/online_services/search/by_title/_Business_Registration',
    },
    {
      label: 'Download Form L-01 (Articles of Organization)',
      url: 'https://sosnc.gov/webfiles/documents/forms/Business_Registration/limited_liability_companies/articles_of_organization.pdf',
    },
    {
      label: 'NC annual report filing',
      url: 'https://www.sosnc.gov/divisions/business_registration/annual_report',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number',
    },
  ],
  taxHighlights: [
    'NC has no Commercial Activity Tax, no gross-receipts tax, and no franchise tax on default-taxed LLCs. If a guide tells you NC has a CAT, that guide is wrong — CAT is Ohio. NC franchise tax only applies to LLCs that elect C-corp or S-corp treatment ($200 minimum).',
    'NC cities and counties are statutorily prohibited from levying income taxes on individuals or entities (N.C.G.S. § 105-247). So unlike Ohio or Michigan, you do not have a separate municipal income tax to worry about. Local taxes that do apply: business personal property tax in every county, local sales tax, and a handful of narrow privilege taxes (beer/wine, taxicab, vehicle, animal). General local business privilege license taxes were repealed July 1, 2015.',
    'NC’s state tax trajectory is unusually founder-friendly. The 2026 individual income tax is 3.99% flat. The corporate income tax — which only hits LLCs that elect C-corp treatment — is 2.00% in 2026 and is on a statutory phase-out to 0% by 2030 under S.L. 2021-180. Eligible multi-member LLCs can also make the NC pass-through entity (PTE) election at the same 3.99% rate as a federal SALT-cap workaround.',
  ],
  comparisonRows: [
    {
      state: 'North Carolina',
      annualReport: '$200/yr by April 15 (+$2 ACH or +$3 card if filed online)',
      upfrontCost: '$125',
      ongoingStateCost: '$200/yr',
    },
    {
      state: 'Wyoming',
      annualReport: 'Annual report / license tax, $60 minimum',
      upfrontCost: '~$100',
      ongoingStateCost: '$60+/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No annual report; $300 annual franchise tax',
      upfrontCost: '~$110',
      ongoingStateCost: '$300/yr',
    },
    {
      state: 'Florida',
      annualReport: 'Annual report by May 1',
      upfrontCost: '$125',
      ongoingStateCost: '$138.75/yr',
    },
    {
      state: 'Texas',
      annualReport: 'Public Information Report; no franchise tax under $2.65M (2026)',
      upfrontCost: '$300',
      ongoingStateCost: '$0/yr below threshold',
    },
  ],
  filingFee: 125,
  annualReportFee: 200,
  filingTime:
    'NC SOS does not publish a guaranteed turnaround for standard filings. The only guaranteed timelines are the expedited tiers — $100 for 24-hour or $200 for same-day (received before 12:00 noon).',
  filingTimeShort: 'No published SLA',
  expeditedTime: '24-hour $100, same-day $200 (before 12:00 noon)',
  expeditedFee: 100,
  filingAgency: 'North Carolina Secretary of State, Business Registration Division',
  filingAgencyUrl: 'https://www.sosnc.gov/divisions/business_registration',
  agentTerm: 'registered agent',
  stateTaxRate:
    'NC individual income tax is 3.99% flat for 2026. Corporate Income Tax is 2.00% (C-corp-elected entities only) and on a statutory phase-out to 0% by 2030. The elective Pass-Through Entity tax runs at the same 3.99% rate for eligible pass-throughs as a SALT-cap workaround.',
  stateTax:
    'Default-taxed NC LLCs (single-member disregarded, multi-member partnership) owe no franchise tax and no state-level entity income tax. Members pick up their share at NC’s 3.99% individual rate. NC has no CAT and no municipal income tax.',
  annualReportDue: 'April 15',
  annualReportNote: '$200 paper / +$2 ACH or +$3 card online, due each year following formation',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose an NC-compliant LLC name',
      description:
        'Your name must be distinguishable on Secretary of State records and include one of NC’s approved designators: "Limited Liability Company," "L.L.C.," "LLC," "ltd. liability co.," "limited liability co.," or "ltd. liability company." Search the SOS business database before you draft anything. If you want to lock the name down before filing, use Form BE-03 to reserve it for 120 days for $10 (it is not renewable). If you plan to operate publicly under a different name, NC’s DBA — called an Assumed Business Name — is filed at the county Register of Deeds, not at the Secretary of State. Filing in one county covers statewide use under the 2017 ABN Act revision; typical fee is around $26.',
    },
    {
      title: 'Appoint a registered agent (NC’s term — not statutory agent)',
      description:
        'NC uses the term "registered agent" under N.C. Gen. Stat. § 55D-30. The agent must have a physical NC street address — P.O. boxes do not qualify because the statute requires a "business office." You can serve as your own registered agent if you are an NC resident, 18 or older, with a qualifying NC street address, and available during business hours. The catch is that the address goes on the public Articles permanently. If you work from home or live outside NC, hire a commercial registered agent. Whatever other states call this role on their forms, on your NC filing it is "registered agent."',
    },
    {
      title: 'File Articles of Organization (Form L-01) with the NC SOS',
      description:
        'File online at sosnc.gov/online_filing/filing/creation or mail Form L-01 to the Business Registration Division at P.O. Box 29622, Raleigh, NC 27626-0622. The fee is $125 either way. Required fields: LLC name; name, address, and capacity of each organizer; the registered agent’s name; the registered office street address and county; principal office street address, county, and phone; and the organizer’s signature. NC does not require you to declare member-managed vs. manager-managed in the Articles — that is governed by your operating agreement, with member-managed as the default under § 57D-3-20. You can also set a delayed effective date up to 90 days after filing if you want the LLC to start on a specific future date. NC returns a date-stamped copy of the Articles as proof of formation; the state does not issue a separate certificate of formation.',
    },
    {
      title: 'Wait for approval or pay for expedited processing',
      description:
        'This is where NC differs from most states: the Secretary of State does not publish a guaranteed standard turnaround. You will see secondary sources quote "3–5 business days online," but that is not an NC SOS commitment. The only guaranteed timelines are the expedited tiers, both on top of the $125 base fee: $100 for 24-hour processing or $200 for same-day if your filing is received before 12:00 noon. If timing is genuinely tight, pay for expedited — do not assume a standard online filing will move fast. After approval, you receive the file-stamped Articles back by email (online) or mail (paper).',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Once the LLC is approved, apply for your EIN directly at irs.gov. It is free and instant online for U.S. responsible parties (Mon–Fri, 7am–10pm ET). Banks will require it to open a business account, and even single-member LLCs should get one to keep their SSN off routine paperwork. Never pay a third party for an EIN.',
    },
    {
      title: 'Put your operating basics in place',
      description:
        'Draft an operating agreement, open a business bank account, and handle any industry licensing that applies. NC does not require an operating agreement to be filed with the state — under § 57D-2-30 it can be written, oral, or even implied — but written agreements override oral terms when third parties rely on them, and banks routinely require an OA to open accounts. If you skip it, NC’s Chapter 57D defaults control (all members are managers, distributions in proportion to contributions, unanimous consent to admit new members), which often does not match what owners actually want. NC has no general state business license, but ~700 industry/occupational licenses may apply — check ncbold.com. If you sell taxable goods or have employees, register with NCDOR using Form NC-BR.',
    },
    {
      title: 'File the annual report every April 15',
      description:
        'This is NC’s one major ongoing state filing, and it is more expensive than most states. Every NC LLC must file an annual report with the Secretary of State by April 15 of the year following formation, then every April 15 after that. The fee is $200 paper, or online for $200 plus a $2 ACH surcharge ($202 total) or $3 credit-card surcharge ($203 total). NC does not charge a traditional late fee, but missing the deadline is grounds for administrative dissolution under § 57D-6-06 after a 60-day cure window — and reinstatement costs $100 plus all delinquent reports. PLLCs are the one exception: § 57D-2-24(a) exempts them from the SOS annual report, but PLLCs typically have their own annual board registration to handle instead.',
    },
  ],
  costBreakdown: [
    { item: 'Articles of Organization (Form L-01)', cost: '$125', required: 'Yes', notes: 'Same online or mail' },
    { item: 'Name reservation (Form BE-03)', cost: '$10', required: 'Optional', notes: '120 days, non-renewable' },
    {
      item: 'Assumed Business Name (DBA)',
      cost: '~$26',
      required: 'Optional',
      notes: 'Filed at county Register of Deeds',
    },
    { item: 'Registered agent service', cost: '$100–$300/yr', required: 'Optional', notes: 'Self-file for $0 if eligible' },
    {
      item: 'Change of registered agent (Form BE-06)',
      cost: '$5',
      required: 'Only when changing',
      notes: 'Update SOS within 60 days',
    },
    { item: 'Expedited 24-hour', cost: '+$100', required: 'Optional', notes: 'On top of $125 base' },
    { item: 'Expedited same-day', cost: '+$200', required: 'Optional', notes: 'Received before 12:00 noon' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct, instant online' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal document' },
    { item: 'Certificate of Existence', cost: '$15', required: 'Optional', notes: 'Flat fee per SOS schedule' },
    { item: 'Annual report (paper)', cost: '$200/yr', required: 'Yes (recurring)', notes: 'Due April 15' },
    {
      item: 'Annual report (online)',
      cost: '$200 + $2 ACH or $3 card',
      required: 'Yes (recurring)',
      notes: 'Online surcharge',
    },
    {
      item: 'Reinstatement after admin dissolution (Form L-08)',
      cost: '$100',
      required: 'Only if dissolved',
      notes: 'Plus all delinquent annual reports',
    },
    {
      item: 'Articles of Dissolution (Form L-07)',
      cost: '$30',
      required: 'Only at wind-up',
      notes: 'Voluntary dissolution',
    },
    {
      item: 'Foreign LLC Certificate of Authority (Form L-09)',
      cost: '$250',
      required: 'Only out-of-state LLCs',
      notes: 'Requires home-state Certificate of Existence ≤6 months old',
    },
    {
      item: 'Total (bare-minimum DIY, year 1)',
      cost: '$125',
      isEmphasized: true,
      notes: 'State filing only — annual report not due until following April 15',
    },
    {
      item: 'Total (with service, year 1)',
      cost: '$225–$425',
      isEmphasized: true,
      notes: 'Filing + commercial registered agent',
    },
    {
      item: 'Total (recurring, year 2+)',
      cost: '$200–$500/yr',
      isEmphasized: true,
      notes: 'Annual report + optional registered agent service',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in North Carolina?',
      answer:
        'The state filing fee is $125, same online or by mail. If you serve as your own registered agent, that is your true day-one cost. The bigger ongoing cost to know about is the $200 annual report due every April 15 starting the year after you form. With a commercial registered agent service ($100–$300/yr), expect $225–$425 for year one and roughly $300–$500 every year after that. The takeaway: $125 is the floor to form, but plan for $200/year going forward.',
    },
    {
      question: 'How long does it take to get an NC LLC?',
      answer:
        'Honestly: nobody can tell you with certainty for standard filings, because the NC Secretary of State does not publish a guaranteed turnaround. You will see secondary guides quote "3–5 business days online" or "10–15 business days by mail," but those are unofficial estimates, not state commitments. The only guaranteed timelines are the expedited tiers on top of the $125 base fee: $100 for 24-hour processing or $200 for same-day if your filing is received before 12:00 noon. If timing actually matters for a contract, lease, or launch date, pay for expedited.',
    },
    {
      question: 'Do I need an operating agreement in NC?',
      answer:
        'Not by statute, but you should still have one in writing. NC recognizes operating agreements that are written, oral, or implied (§ 57D-2-30), but written terms override oral or implied ones when third parties rely on them — so a written OA is the only one with real legal weight. Without one, Chapter 57D’s defaults control (all members are managers, distributions track contributions, unanimous consent to admit new members), and those defaults often do not match what owners actually want. Banks also routinely require an OA to open a business account.',
    },
    {
      question: 'What is a registered agent in NC?',
      answer:
        'It is the person or entity that receives legal process and official state correspondence on behalf of your LLC. Under N.C. Gen. Stat. § 55D-30, every NC LLC must continuously maintain a registered agent and a registered office in NC. Eligible agents: an NC-resident individual, an NC-domestic corporation/nonprofit/LLC, or a foreign entity authorized to do business in NC — all with a matching NC street address. NC uses the term "registered agent." Some neighbor states use "statutory agent" (Ohio) or "resident agent" (Michigan) — those are not the right terms on an NC filing.',
    },
    {
      question: 'Can I be my own registered agent in NC?',
      answer:
        'Yes, if you are an NC resident at least 18 years old with a physical NC street address (no P.O. boxes) and available during business hours. The tradeoff is privacy and reliability. Your address becomes part of the permanent public record on your Articles, anyone can look it up, and if you are not there when a process server shows up, you can miss a lawsuit. If you work from home, travel, or just do not want your address tied to a business filing, use a commercial registered agent.',
    },
    {
      question: 'Can I use my home address for my NC LLC?',
      answer:
        'Yes, many founders do, especially if they are also their own registered agent. The problem is permanence — once that address is on the Articles or annual report, it is part of the public NC record forever. You can change it later, but the historical filings stay searchable. If privacy matters at all, put a commercial registered agent’s address on the filing instead.',
    },
    {
      question: 'What happens if I don’t maintain a registered agent in NC?',
      answer:
        'NC requires every LLC to keep a registered agent and registered office on file at all times. If the role lapses or the agent resigns without a replacement for 60 days, the SOS will mail you a notice of grounds for administrative dissolution under § 57D-6-06, with a 60-day window to cure. Miss that, and the LLC is administratively dissolved. Reinstatement costs $100 plus all delinquent annual reports. The practical takeaway: if you cannot reliably manage the agent role yourself, pay for a service.',
    },
    {
      question: 'Does NC require an annual report for an LLC?',
      answer:
        'Yes, and it is one of the more expensive ones in the country. Every NC LLC must file an annual report with the Secretary of State by April 15 of the year following formation, then every April 15 after that. The fee is $200 by paper. Online filings pay $200 plus a $2 ACH surcharge ($202 total) or a $3 credit-card surcharge ($203 total). PLLCs are exempt from this filing under § 57D-2-24(a) but typically have their own annual licensing-board registration instead.',
    },
    {
      question: 'Does NC require newspaper publication for an LLC?',
      answer:
        'No. NC has no publication requirement, so you do not have to run a formation notice in a newspaper the way you would in New York or Arizona. That keeps the setup cheaper and predictable.',
    },
    {
      question: 'Do NC LLCs need to file BOI reports?',
      answer:
        'No, not as of April 2026. Under FinCEN’s Interim Final Rule published March 26, 2025, U.S. domestic reporting companies — including NC LLCs — are exempt from Beneficial Ownership Information reporting. Only foreign reporting companies with non-U.S.-person beneficial owners must file. The IFR is still interim and a final rule has not yet been issued, so this is worth rechecking at fincen.gov/boi before you rely on the exemption.',
    },
    {
      question: 'Does NC have a Commercial Activity Tax?',
      answer:
        'No. NC does not have a Commercial Activity Tax, a gross-receipts tax, or a franchise tax on default-taxed LLCs. If you have read that NC has a CAT, that was a mix-up with Ohio — Ohio has a CAT, NC does not. NC franchise tax only applies to LLCs that elect C-corp or S-corp treatment ($200 minimum). NC also has no municipal income tax: cities and counties are statutorily prohibited from levying income taxes under N.C.G.S. § 105-247.',
    },
    {
      question: 'What taxes should an NC LLC watch?',
      answer:
        'For most small founders the picture is simple. NC’s 3.99% individual income tax (2026) flows through to LLC owners by default — single-member LLCs are disregarded, multi-member LLCs are partnerships. Eligible multi-member LLCs can elect the NC Pass-Through Entity tax at the same 3.99% rate as a federal SALT-cap workaround (irrevocable annual election on a timely-filed D-403). If the LLC elects C-corp treatment, NC corporate income tax is 2.00% in 2026 and on a statutory phase-out to 0% by 2030. Local-level items to plan for: business personal property tax in every county and any sales/use tax registration with NCDOR (Form NC-BR).',
    },
    {
      question: 'Do I need a business license in NC?',
      answer:
        'No general state business license is required in NC, and general local privilege license taxes were repealed effective July 1, 2015. About 700 industry and occupational licenses may still apply depending on what you do — contractors, real estate, healthcare, food, alcohol, regulated professions — and some narrow local privilege taxes survive (beer/wine, taxicab, vehicle, animal). Look up your situation at ncbold.com. If you sell taxable goods or have employees, register tax accounts with NCDOR using Form NC-BR.',
    },
    {
      question: 'Can a non-resident form an NC LLC?',
      answer:
        'Yes. NC has no residency requirement for members, managers, or organizers. The one in-state requirement is that the LLC must continuously maintain a registered agent at a physical NC street address. If you are out of state, that almost always means hiring a commercial registered agent — it is the cleanest way to satisfy § 55D-30 without opening an NC office. Non-residents should also be aware of personal NC tax exposure on any NC-source income earned through the LLC.',
    },
    {
      question: 'Member-managed vs. manager-managed — which does NC require in the Articles?',
      answer:
        'Neither. Unlike Michigan, NC does not require you to declare a management structure on Form L-01. The default under § 57D-3-20(d) is that all members are managers (member-managed). If you want a manager-managed LLC, you set that in the operating agreement — not on the formation document.',
    },
    {
      question: 'Can I set a future effective date for my NC LLC?',
      answer:
        'Yes. NC allows a delayed effective date of up to 90 days after the SOS receives the filing under § 57D-2-23. Past 90 days the option is no longer available. Worth using intentionally if you want the LLC to start on a specific date for tax-year, contract, or launch reasons.',
    },
    {
      question: 'Does NC allow Series LLCs?',
      answer:
        'No. Chapter 57D contains no series LLC provisions, and Session Law 2025-55 did not add them. If you need a series structure to silo multiple ventures under one umbrella, you will need to form in a state that supports it — Delaware, Wyoming, Texas, or Illinois are the standard choices. How NC courts would treat the liability shield between series of a foreign series LLC registered in NC has not been tested in any reported NC appellate decision, so importing a series LLC into NC is unsettled territory.',
    },
    {
      question: 'How do I dissolve an NC LLC?',
      answer:
        'File Articles of Dissolution (Form L-07) with the SOS for $30 under § 57D-6-07, then wind up: pay creditors, distribute remaining assets to members under your operating agreement (or § 57D-4-03 defaults if silent), cancel licenses, close NCDOR tax accounts, and file final federal and state returns. If you simply stop filing annual reports without formally dissolving, NC will administratively dissolve the LLC after the 60-day cure window — but that does not extinguish tax or creditor obligations, and reinstatement gets expensive fast.',
    },
  ],
  proscons: {
    pros: [
      'Reasonable filing fee ($125) and no publication requirement, with a fully online filing path through the SOS portal.',
      'No Commercial Activity Tax, no franchise tax on default-taxed LLCs, and no municipal income tax — NC cities and counties are statutorily prohibited from levying income taxes.',
      'Best-in-class state tax trajectory: 3.99% individual income tax in 2026, 2.00% corporate income tax (C-corp-elected only) phasing out to 0% by 2030, and an elective Pass-Through Entity tax for SALT-cap relief.',
      'Modern statute (Chapter 57D, effective 2014) with express charging-order exclusive-remedy language at § 57D-5-03(d) for multi-member LLCs.',
    ],
    cons: [
      'The $200 annual report fee is among the highest in the country — Wyoming’s minimum is $60, Delaware charges $0 for the LLC report (though $300 in franchise tax instead), and Florida’s is $138.75.',
      'NC does not publish a guaranteed standard processing turnaround; only expedited filings have a real SLA, which means you cannot promise a customer or contract counterparty a specific formation date without paying for expedited.',
      'Less privacy than Wyoming or Delaware — your registered agent address is on the Articles, and your company officials are listed on every annual report.',
      'For single-member LLCs specifically, § 57D-5-03(d) facially provides exclusive-remedy charging-order protection, but no reported NC appellate case has tested this against a creditor’s attempt to foreclose on a sole member’s interest. Asset-protection strategies that depend on SMLLC status in NC carry more uncertainty than in Wyoming, Delaware, Nevada, or Alaska.',
      'No Series LLC authorization in NC — if you need to silo multiple ventures under one umbrella, you will have to form somewhere else.',
    ],
  },
};

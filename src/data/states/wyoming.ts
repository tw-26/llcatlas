import type { StateOverride } from './types';

export const wyoming: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in Wyoming (2026 Step-by-Step) | LLCAtlas',
  seoDescription:
    'Form a Wyoming LLC for $100 — instant online filing, no member names on the public record, $60 annual report. Real costs, real timing, no upsells.',
  lastUpdated: '2026-04-19',
  intro:
    'Starting an LLC in Wyoming is the cheapest serious privacy filing in the country. The state filing fee is $100, online filings are active immediately, there is no publication requirement, and the public record never lists members or managers. Wyoming uses the term registered agent — not statutory agent — so if a guide tells you to appoint a "statutory agent," it was written for Ohio. The real decisions are simple: pick a compliant name, appoint a registered agent with a physical Wyoming address, file the Articles of Organization through wyobiz, get an EIN, and plan for the one ongoing state filing — the Annual Report License Tax, $60 minimum, due the first day of your formation anniversary month.',
  whatYoullNeed:
    "To form a Wyoming LLC, you'll need a unique business name, a registered agent with a physical Wyoming street address, and $100 for the filing fee. Online filings are active immediately upon submission.",
  closing:
    'Wyoming is the strongest privacy-and-cost combination in the country: $100 to file, $60 minimum a year to maintain, no member or manager names on the public record, and the oldest LLC case law in the U.S. (Wyoming wrote the first LLC statute in 1977). It is genuinely the right call if you want a privacy-optimized holding LLC, a Wyoming-based business, or a structure that uses the Series, Close, or DAO LLC tools the state allows. Two honest caveats. First, if you live and operate in another state, forming in Wyoming does not erase your home-state tax — California still wants $800, and most states require you to register your Wyoming LLC as a foreign LLC where you actually do business. Second, the statutory protections only hold if you operate the LLC as a real separate entity. Wyoming pierced the veil of a single-member LLC in GreenHunter for commingling and undercapitalization, so a separate bank account, capital adequacy, and an actual operating agreement matter more than the filing paperwork. If you work from anywhere outside Wyoming, use a commercial registered agent — your filing already requires a physical Wyoming address, and a service is the cleanest way to keep your personal address off the public record.',
  inlineCtaDescription:
    'Wyoming requires a physical Wyoming street address for your registered agent — no P.O. boxes, no virtual offices, no UPS Store mailboxes. If you live outside Wyoming, you need a commercial agent regardless. Even if you do live in Wyoming, that address becomes part of the permanent public record and gets the legal mail. A privacy-first commercial agent is usually worth the $99–$200 a year to keep your home address off the filing and make sure nothing important gets missed.',
  sidebarCtaDescription:
    'You need a physical Wyoming address for your registered agent — no P.O. boxes. If you do not live in Wyoming, or you do not want your home address on the permanent public record, use a commercial registered agent.',
  officialLinks: [
    { label: 'File your Wyoming LLC online (wyobiz)', url: 'https://wyobiz.wyo.gov/Business/RegistrationInstr.aspx' },
    { label: 'Check Wyoming name availability', url: 'https://wyobiz.wyo.gov/Business/FilingSearch.aspx' },
    {
      label: 'Download the Articles of Organization (paper)',
      url: 'https://sos.wyo.gov/forms/business/llc/llc-articlesorganization.pdf',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
    { label: 'File your Wyoming Annual Report', url: 'https://wyobiz.wyo.gov/Business/AnnualReport.aspx' },
  ],
  taxHighlights: [
    'Wyoming has no personal income tax, no corporate income tax, no franchise tax on income, no gross-receipts/Commercial Activity Tax, and no municipal income tax. If you read that Wyoming has a CAT or city income tax, that was Ohio — Wyoming has neither.',
    'The closest thing Wyoming has to a franchise tax is the Annual Report License Tax: the greater of $60 or $0.0002 × the value of your Wyoming-located capital, property, and assets. An LLC with $300,000 or less in Wyoming assets pays the $60 floor; an LLC holding $10M of Wyoming real estate pays $2,000. If your tax owed is over $500, the state forces you to paper-file.',
    'Sales and use tax is 4% state plus 0–2% county (most counties total 5–6%). Vendors pay a one-time $60 sales-tax license fee under W.S. 39-15-106, with one exception: remote sellers registering through the SSUTA Certified Service Provider path are not charged the $60.',
    'Workers comp in Wyoming is a monopolistic state fund — for covered hazardous industries, you cannot buy private workers comp. If you have employees in those classifications, plan to register through the Department of Workforce Services, not a private carrier.',
    'Out-of-state reality check: if you live and run the business from another state, that state will almost always require you to register your Wyoming LLC as a foreign LLC there and pay its taxes. The Wyoming formation does not eliminate home-state tax nexus.',
  ],
  comparisonRows: [
    {
      state: 'Wyoming',
      annualReport: '$60 min, due 1st of anniversary month',
      upfrontCost: '$100',
      ongoingStateCost: '$60+/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No annual report; $300 annual tax',
      upfrontCost: '~$110',
      ongoingStateCost: '$300/yr',
    },
    {
      state: 'Nevada',
      annualReport: 'Annual List + Business License',
      upfrontCost: '~$425',
      ongoingStateCost: '$350/yr',
    },
    {
      state: 'Florida',
      annualReport: 'Annual report by May 1',
      upfrontCost: '$125',
      ongoingStateCost: '$138.75/yr',
    },
    {
      state: 'Ohio',
      annualReport: 'None for standard LLCs',
      upfrontCost: '$99',
      ongoingStateCost: '$0/yr',
    },
  ],
  filingFee: 100,
  annualReportFee: 60,
  filingTime: 'Immediate online; up to 15 business days by mail',
  filingTimeShort: 'Instant online',
  expeditedTime: null,
  expeditedFee: null,
  filingAgency: 'Wyoming Secretary of State, Business Division',
  filingAgencyUrl: 'https://sos.wyo.gov/Business/',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Wyoming has no individual or corporate income tax. The Annual Report License Tax is the greater of $60 or $0.0002 × your Wyoming-located capital, property, and assets. Sales tax is 4% state plus 0–2% county.',
  stateTax:
    'Wyoming imposes no income tax of any kind on LLCs or their members. The recurring state cost is the Annual Report License Tax, which most small LLCs pay at the $60 minimum.',
  annualReportDue: 'First day of your anniversary month',
  annualReportNote: 'Annual Report License Tax, $60 minimum (or $0.0002 × WY assets if greater)',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Wyoming-compliant LLC name',
      description:
        'Your name must be distinguishable in the Wyoming Secretary of State records and include one of the designators required by W.S. 17-29-108: Limited Liability Company, LLC, L.L.C., Limited Company, LC, L.C., Ltd. Liability Company, Ltd. Liability Co., or Limited Liability Co. Wyoming ignores "A," "The," "And," "&," punctuation, and entity designators when comparing names, so distinguishing only by "Inc." vs. "LLC" will get rejected. Bank-related words (Bank, Trust, Bancorp) require Wyoming Division of Banking approval; education words (Academy, College, Institute, University) need Department of Education approval (002-2 Wyo. Code R. § 2-1). One quirk: names that begin with the letter "A" or contain special characters get routed to manual paper review, which costs you the instant-online advantage. Search wyobiz before you draft anything. If you need to hold a name before filing, name reservation is $60 for 120 days, mail only.',
    },
    {
      title: 'Appoint a registered agent (not a statutory agent)',
      description:
        'Wyoming uses the term registered agent under W.S. 17-28-101. The agent must be either a Wyoming resident age 18 or older, or a business entity authorized to do business in Wyoming and in good standing. They must have a physical Wyoming street address — P.O. boxes, drop boxes, UPS Store addresses, virtual offices, and mail-forwarding locations all fail the statute and the filing will be rejected. A valid email is also required because Wyoming sends most notices electronically. Your LLC cannot be its own registered agent. You can serve as your own agent if you meet the residency, address, and email requirements, but the address becomes part of the permanent public record. If you live outside Wyoming or want privacy, you need a commercial registered agent — typical pricing runs $25 to $249 a year, with mainstream providers clustered between $99 and $199.',
    },
    {
      title: 'File the Articles of Organization',
      description:
        'File online at wyobiz.wyo.gov for $100 — Visa or Mastercard only, plus a 2.4% credit-card surcharge ($1 minimum). Online filings are active immediately upon submission. Paper filing is the same $100 fee, mailed to Wyoming Secretary of State, Business Division, Herschler Building East, 122 W 25th Street, Suite 101, Cheyenne, WY 82002-0020 — but mail processing takes up to 15 business days after Cheyenne receives it. There is no expedited tier, by design. The Articles ask for the LLC name, the registered agent name and physical Wyoming address, the LLC mailing address, the principal office address, an organizer signature, a contact email, and an electronic service-of-process consent checkbox. The paper form does not ask whether the LLC is member-managed or manager-managed. The online wyobiz wizard does — pick member-managed unless you have passive investors who will not run the business. A separate Consent to Appointment by Registered Agent must accompany the filing. Wyoming does not require member or manager names on Articles, ever.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Once the LLC is approved, apply for your EIN directly with the IRS at irs.gov. It is free and immediate online if the responsible party has a valid SSN or ITIN. Banks will require an EIN to open a Wyoming business account, even for a single-member LLC, and getting one keeps your SSN off routine business paperwork. Never pay a third party for an EIN. Foreign founders without an SSN file Form SS-4 by fax (855-641-6935, about 4 business days) or call the IRS international line at 267-941-1099.',
    },
    {
      title: 'Draft an operating agreement (not filed with the state)',
      description:
        'Wyoming does not require an operating agreement to be filed and does not require it to be in writing — W.S. 17-29-102 recognizes oral and implied agreements. Get one in writing anyway. Banks will demand it to open the business account, it controls anything the statute does not, and it is the document that defends your liability shield if the LLC is ever challenged. Single-member operating agreements should focus on succession, transfer restrictions, and proving the LLC is a separate entity from you personally. Multi-member agreements need to cover capital contributions, profit and loss allocations, voting rights, transfer restrictions, and buyout or dissolution mechanics. W.S. 17-29-110(c) lists the few provisions you cannot waive, including the LLC capacity to sue and be sued and a member’s right to bring an article 9 action.',
    },
    {
      title: 'Open a business bank account and keep it separate',
      description:
        'This is the step that actually preserves your liability shield. Take your filed Articles of Organization (download a free electronic Certificate of Good Standing from wyobiz to confirm status), your EIN CP-575 notice from the IRS, your operating agreement, and beneficial-owner ID to the bank. Do not commingle personal and business funds — that one habit is the most common reason Wyoming courts pierce the veil, including in GreenHunter v. Western Ecosystems (2014), where the Wyoming Supreme Court pierced the protection of a single-member Wyoming LLC for exactly this kind of sloppiness. One practical note for non-resident founders: major U.S. banks increasingly flag out-of-state Wyoming LLCs for enhanced KYC review. Some regional banks decline non-resident WY LLCs entirely, so be prepared to call ahead.',
    },
    {
      title: 'File the Annual Report every year',
      description:
        'This is Wyoming’s only ongoing state filing, and it is the one most generic guides flatten. The Annual Report License Tax is the greater of $60 or $0.0002 × the value of your Wyoming-located capital, property, and assets — most small LLCs pay the $60 floor. It is due the first day of your formation anniversary month, and you can file it up to 120 days early. Reminders go to your contact email at 60, 30, and 10 days. If your tax owed exceeds $500, the state will not let you file online — you have to paper-file. Miss the deadline and you are delinquent on the second day of the following month; miss it for 60 days and Wyoming administratively dissolves the LLC. There is no flat late penalty — the penalty is dissolution itself. Reinstatement is $100 if you were dissolved for the tax, $350 if you were dissolved for losing your registered agent.',
    },
    {
      title: 'Handle BOI, sales tax, and any industry licenses',
      description:
        'Federal beneficial ownership: under FinCEN’s March 26, 2025 Interim Final Rule, domestic Wyoming LLCs are currently exempt from BOI reporting, and U.S. persons who are beneficial owners of foreign reporting companies are also exempt. The rule is interim and FinCEN has missed its self-imposed final-rule deadline, so verify before relying on it. Wyoming-registered foreign (non-U.S.) LLCs do still owe BOI within 30 days of registration. State business license: there is no general Wyoming business license. If you sell taxable goods or services, you need a sales tax license from the Wyoming Department of Revenue Excise Tax Division — $60 one-time under W.S. 39-15-106, with an exception for remote sellers registering through the SSUTA Certified Service Provider path. Industry licenses (contractor, liquor, professional boards) and city or county permits may apply on top of all of that.',
    },
  ],
  costBreakdown: [
    { item: 'Articles of Organization', cost: '$100', required: 'Yes', notes: 'Same online or by mail' },
    { item: 'Online credit-card surcharge', cost: '~$3', required: 'If filing online', notes: '2.4% / $1 minimum' },
    { item: 'Expedited filing', cost: 'N/A', required: 'Not offered', notes: 'Online is already instant' },
    { item: 'Name reservation', cost: '$60', required: 'Optional', notes: '120 days, mail only' },
    { item: 'Trade name (DBA) registration', cost: '$100', required: 'Optional', notes: '10 years, must be notarized' },
    { item: 'Trade name reservation', cost: '$30', required: 'Optional', notes: 'Hold a DBA before registration' },
    {
      item: 'Registered agent service',
      cost: '$25–$249/yr',
      required: 'Optional',
      notes: 'Mainstream providers $99–$199',
    },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    {
      item: 'Operating agreement',
      cost: 'Free if you draft it yourself',
      required: 'Recommended',
      notes: 'Internal document; not filed',
    },
    {
      item: 'Certified copy of Articles',
      cost: '$10 + $0.50/page (first 10), $0.15/page after',
      required: 'Optional',
      notes: 'Sometimes requested by banks',
    },
    {
      item: 'Certificate of Good Standing',
      cost: 'Free electronic / $20 manually signed',
      required: 'Optional',
      notes: 'Generate instantly on wyobiz',
    },
    {
      item: 'Annual Report License Tax',
      cost: '$60 minimum',
      required: 'Yes (recurring)',
      notes: 'Or $0.0002 × WY assets if greater',
    },
    {
      item: 'Sales tax license',
      cost: '$60',
      required: 'Conditional',
      notes: 'W.S. 39-15-106; SSUTA CSP sellers exempt',
    },
    {
      item: 'BOI (FinCEN) filing',
      cost: 'Free',
      required: 'Currently N/A for domestic WY LLCs',
      notes: 'March 2025 IFR exemption',
    },
    {
      item: 'Foreign LLC Certificate of Authority',
      cost: '$150',
      required: 'Only out-of-state LLCs',
      notes: 'Mail only',
    },
    { item: 'Series LLC designation', cost: '$10 per series', required: 'Optional', notes: 'W.S. 17-29-211' },
    { item: 'Registered agent change or resignation', cost: '$5', required: 'Conditional', notes: 'Per filing' },
    { item: 'Reinstatement (tax)', cost: '$100', required: 'If dissolved', notes: 'Within 2 years of dissolution' },
    { item: 'Reinstatement (no registered agent)', cost: '$350', required: 'If dissolved', notes: 'Higher penalty' },
    { item: 'Articles of Dissolution', cost: '$60', required: 'When closing', notes: 'Final filing' },
    {
      item: 'Total (bare minimum DIY, self-RA)',
      cost: '$100',
      isEmphasized: true,
      notes: 'Articles only; $60/yr after',
    },
    {
      item: 'Total (typical with commercial RA)',
      cost: '$199–$299 first year',
      isEmphasized: true,
      notes: '$159–$259 recurring',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Wyoming?',
      answer:
        'The state filing fee is $100, same online or by mail. If you serve as your own registered agent and meet the Wyoming residency and physical-address requirements, that is the true minimum startup cost. After year one, expect at least $60 a year for the Annual Report License Tax. With a commercial registered agent — which most non-resident founders need — typical first-year cost lands between $199 and $299 and recurring cost between $159 and $259.',
    },
    {
      question: 'How long does it take to get a Wyoming LLC?',
      answer:
        'Online filings through wyobiz are active immediately upon submission — usually within minutes, during business hours. Mail filings take up to 15 business days after the Secretary of State receives them in Cheyenne, plus transit time, so plan on roughly three to five weeks end to end. Wyoming does not offer expedited service because online is already instant. Names that start with the letter "A" or contain special characters get pulled into manual paper review, which can slow even an online filing.',
    },
    {
      question: 'What is a Wyoming statutory agent?',
      answer:
        'It is not a Wyoming term. Wyoming statutes (W.S. 17-28-101) use the term registered agent. "Statutory agent" is what Ohio calls the same role. If a guide or service uses "statutory agent" for Wyoming, it was written for the wrong state — same concept, wrong word.',
    },
    {
      question: 'What is a registered agent in Wyoming?',
      answer:
        'A registered agent is the person or company that receives legal notices, lawsuits, and Secretary of State correspondence on behalf of your LLC. Wyoming requires the agent to be either a Wyoming resident age 18 or older, or a business entity authorized to do business in Wyoming and in good standing. They must have a physical Wyoming street address (no P.O. boxes, no virtual offices, no UPS Stores) and a valid email. Your LLC cannot be its own agent.',
    },
    {
      question: 'Can I be my own registered agent in Wyoming?',
      answer:
        'Yes, if you are at least 18, a Wyoming resident, have a physical Wyoming street address (not a P.O. box or virtual office), and have a valid email. The tradeoffs are real: that address becomes part of the permanent public record, you have to be reachable during business hours, and you personally receive any lawsuit served on the LLC. If you live outside Wyoming or work from home, hire a commercial registered agent.',
    },
    {
      question: 'Do I need an operating agreement in Wyoming?',
      answer:
        'You do not file one with the state, and W.S. 17-29-102 even recognizes oral and implied agreements. You should still have a written one. Banks demand it to open business accounts, it controls anything the statute does not, and it is the single most important document for defending your liability shield if the LLC is ever challenged — single-member LLCs without one are noticeably more exposed to alter-ego veil-piercing.',
    },
    {
      question: 'Does Wyoming require an annual report for an LLC?',
      answer:
        'Yes. The Annual Report License Tax is due the first day of your formation anniversary month. The fee is the greater of $60 or $0.0002 × the value of your Wyoming-located capital, property, and assets — most small LLCs pay the $60 floor. You can file up to 120 days early and reminders go to your contact email at 60, 30, and 10 days. If your tax owed is over $500, you must paper-file. Miss the deadline by 60 days and Wyoming administratively dissolves the LLC.',
    },
    {
      question: 'Does Wyoming require newspaper publication for an LLC?',
      answer:
        'No. Wyoming does not require publication. Only Arizona, Nebraska, New York, Georgia, and Pennsylvania still impose newspaper publication for LLC formations.',
    },
    {
      question: 'Do Wyoming LLCs need to file BOI reports?',
      answer:
        'Under FinCEN’s Interim Final Rule published March 26, 2025, domestic Wyoming LLCs are currently exempt from Beneficial Ownership Information reporting. The Eleventh Circuit upheld the Corporate Transparency Act on December 16, 2025, but that ruling did not reinstate domestic reporting because the IFR exemption is still in force. The rule is interim, not final, so verify the current status before relying on it. Wyoming-registered foreign (non-U.S.) LLCs do still owe BOI within 30 days of registration.',
    },
    {
      question: 'How is a Wyoming LLC taxed?',
      answer:
        'Federally, Wyoming LLCs default to disregarded-entity status (single-member) or partnership (multi-member). You can elect C-corp via Form 8832 or S-corp via Form 2553. At the state level, Wyoming imposes no personal income tax, no corporate income tax, no franchise tax on income, no gross-receipts or Commercial Activity Tax, and no municipal income tax. The only state-level recurring obligation is the Annual Report License Tax. Sales and use tax (4% state plus 0–2% county) and employment taxes apply when relevant.',
    },
    {
      question: 'Can a non-resident form a Wyoming LLC?',
      answer:
        'Yes. There is no residency requirement for members, managers, or organizers, and you never need to set foot in Wyoming. The catch most guides skip: if you actually live and operate the business from another state, that state will almost certainly require you to register your Wyoming LLC as a foreign LLC there and pay its taxes and fees. A California resident running a California business through a "Wyoming LLC" still owes California’s $800 franchise tax. The Wyoming formation does not erase home-state tax nexus.',
    },
    {
      question: 'Is Wyoming actually private?',
      answer:
        'On the public state record, yes — more so than almost any other state. The Articles of Organization do not require member or manager names, and neither does the Annual Report. Only the organizer signature and the registered agent appear publicly. Federal BOI is a separate matter; under the March 2025 IFR, domestic Wyoming LLCs are currently exempt from disclosing beneficial owners to FinCEN. Compared with Nevada (which publishes managers and managing members on the Annual List) or Florida (which publishes the Annual Report), Wyoming’s privacy is real and structural.',
    },
    {
      question: 'Member-managed or manager-managed?',
      answer:
        'Wyoming’s statutory default is member-managed (W.S. 17-29-407). The paper Articles of Organization form does not ask you to designate one or the other — management structure is established in the operating agreement. The wyobiz online wizard, however, does prompt you to pick one during the filing flow. Choose member-managed unless you have passive investors who will not run the business.',
    },
    {
      question: 'Does Wyoming allow Series LLCs?',
      answer:
        'Yes. W.S. 17-29-211 authorizes Series LLCs — one master LLC that internally walls off assets and liabilities into separate series for $10 per series. That makes Wyoming one of the most affordable Series LLC jurisdictions for founders managing multiple silos (rentals, IP, separate ventures) under one umbrella.',
    },
    {
      question: 'Does Wyoming have a PLLC?',
      answer:
        'No separate PLLC chapter. Wyoming uses the standard LLC for licensed professionals under W.S. 17-29-104(e), provided the relevant licensing board allows it. Each licensed member remains personally liable for their own professional conduct, and LLCs cannot be financial institutions or insurers.',
    },
    {
      question: 'Does Wyoming offer expedited filing?',
      answer:
        'No. The Secretary of State explicitly states that Wyoming statutes do not allow expedited filing. Online filings are already active immediately, so there is nothing to expedite.',
    },
    {
      question: 'Do I need a business license in Wyoming?',
      answer:
        'There is no general Wyoming business license. If you sell taxable goods or services, you need a sales tax license from the Wyoming Department of Revenue Excise Tax Division — $60 one-time under W.S. 39-15-106 (with an exception for remote sellers registering through the SSUTA Certified Service Provider path). Industry licenses (contractor, liquor, professional boards) and city or county permits may also apply.',
    },
    {
      question: 'How do I dissolve a Wyoming LLC?',
      answer:
        'File Articles of Dissolution with the Secretary of State for $60, following the winding-up procedures in W.S. 17-29-701 through 17-29-709 (member consent, court decree, or an event specified in your operating agreement). Settle creditor claims under W.S. 17-29-703 et seq. before distributing remaining assets to members.',
    },
  ],
  proscons: {
    pros: [
      'Cheapest meaningful filing in the U.S. — $100 to file, $60 minimum a year to maintain, and online filings are active immediately.',
      'No personal income tax, no corporate income tax, no franchise tax on income, no gross-receipts or Commercial Activity Tax, no municipal income tax. The state tax stack is genuinely zero.',
      'Real public-record privacy: member and manager names are not required on Articles or on the Annual Report — only the organizer and registered agent appear publicly.',
      'Strongest charging-order protection in the country (W.S. 17-29-503(g)), explicitly extended to single-member LLCs — creditors cannot foreclose on a member’s LLC interest.',
      'Wyoming wrote the first U.S. LLC statute in 1977, which gives it the deepest body of LLC case law and a Series LLC, Close LLC, and DAO LLC framework most other states do not have.',
    ],
    cons: [
      'The annual report is real. Miss it by 60 days and Wyoming administratively dissolves the LLC — there is no late fee, the penalty is dissolution itself.',
      'The Annual Report License Tax scales with Wyoming-located assets ($0.0002 × assets), so an LLC holding significant Wyoming property pays well above the $60 floor.',
      'If you live and operate the business in another state, forming in Wyoming does not erase home-state taxes. You will usually still owe foreign-LLC registration and the home state’s franchise or privilege tax.',
      'GreenHunter v. Western Ecosystems (2014) — the Wyoming Supreme Court pierced the veil of a single-member Wyoming LLC for commingling and undercapitalization. Privacy and protection are not automatic; sloppy operations defeat the statute.',
      'Some regional U.S. banks decline accounts for non-resident Wyoming LLCs, and major banks increasingly flag them for enhanced KYC review.',
    ],
  },
};

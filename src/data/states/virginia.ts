import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const virginia: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Virginia (${GUIDE_YEAR}): $100 Fee, Steps & Timeline`,
  seoDescription:
    'Register a Virginia LLC with the SCC for $100, often approved right at checkout online. Then the $50 annual fee, local BPOL license, and what not to pay for.',
  lastUpdated: '2026-09-25',
  intro:
    "A Virginia LLC costs $100 to file. You file Articles of Organization with the State Corporation Commission (SCC), and there's no annual report or newspaper publication requirement. There is a separate $50 annual registration fee that keeps the LLC active. Check the registered agent rule before you file, because Virginia is stricter than most states: an individual agent must be a Virginia resident who is a member or manager of the LLC, or a member of the Virginia State Bar. If that isn't you, you'll need a business entity authorized in Virginia, such as a commercial registered agent.",
  whatYoullNeed:
    "To form a Virginia LLC, you'll need a unique business name, a Virginia registered agent with a Virginia street address, your principal office address, and $100 for the filing fee. Online filings without attachments are usually accepted right after checkout; if the SCC has to review your name or an attached document, expect about 5 business days.",
  closing:
    "If you live and operate in Virginia, form here. The $100 fee is reasonable, there's no publication step, and there's no annual report. The recurring cost is the $50 annual registration fee, due by the last day of your anniversary month, and missing it can get the LLC canceled. Also check your city or county's BPOL license rules, which vary by locality. If you're a Virginia-resident member or manager with a Virginia street address, you can be your own registered agent for free. If you aren't, use a professional service, usually $100 to $200 a year.",
  inlineCtaDescription:
    "Virginia's registered agent rule is narrower than most states'. You can serve yourself only if you're a Virginia resident and a member or manager of the LLC, or a member of the Virginia State Bar. If you don't qualify, live outside Virginia, or don't want your address on the public filing, use a professional registered agent, usually $100 to $200 a year. If you qualify and don't mind the address being public, you don't need one.",
  sidebarCtaDescription:
    "If you're not sure you qualify to be your own Virginia registered agent, or don't want your address on the public filing, use a professional service instead of guessing.",
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
      label: 'SCC how-to guide: form a Virginia LLC online',
      url: 'https://www.scc.virginia.gov/media/sccvirginiagov-home/business-home/business-faqs/llc-faqs/how-to-guide-form-a-virginia-limited-liability-company.pdf',
    },
    { label: 'Virginia SCC professional LLC FAQs', url: 'https://www.scc.virginia.gov/businesses/business-faqs/professional-llc-faqs/' },
    {
      label: 'BPOL license fee and tax limits (Va. Code § 58.1-3703)',
      url: 'https://law.lis.virginia.gov/vacode/title58.1/chapter37/section58.1-3703/',
    },
    { label: 'Register a business with Virginia Tax', url: 'https://www.tax.virginia.gov/register-business-virginia' },
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
  sections: [
    {
      id: 'file-articles-scc-cis',
      heading: 'How to file your Articles of Organization on the SCC website (CIS)',
      summary:
        "You file at cis.scc.virginia.gov, the SCC's Clerk's Information System. It costs $100 by credit card with no online payment fee, and if you fill in the form instead of uploading your own articles, the acceptance email usually arrives right after checkout. Here is the order of the screens and the choices that cause delays.",
      facts: [
        {
          label: 'Start the filing',
          detail:
            'Create a login, click Online Services, choose Form or Register a Business, then Virginia Entity, Limited Liability Company, and Articles of Organization.',
        },
        {
          label: 'Name',
          detail:
            'If you reserved a name, enter the Reservation ID and PIN. If not, type the name with an LLC designator and click Check Availability.',
        },
        {
          label: 'Company details',
          detail:
            'An email and phone number for the LLC, an industry code (the SCC says most filers pick "0 - General"), and duration (most pick Perpetual).',
        },
        {
          label: 'Registered agent',
          detail:
            'Choose Individual or Entity. For a commercial agent, search by name and select it. For yourself, create an individual agent and pick your RA Capacity, meaning the category that qualifies you, such as a Virginia-resident member or manager. The registered office must be a Virginia street address; PO boxes, virtual offices, and mail drops are rejected.',
        },
        {
          label: 'Principal office and management',
          detail:
            'The physical location of the LLC\'s main office, not a PO box. Then choose member-managed or manager-managed from the drop-down. Virginia does not ask for member or manager names.',
        },
        {
          label: 'Upload',
          detail:
            'Skip it. An upload sends your filing to staff review, which the SCC says adds about five business days, and mismatches between an uploaded document and the form, down to capitalization and punctuation in the name, are the top reason filings are rejected.',
        },
        {
          label: 'Signature',
          detail:
            'The organizer signs as an individual or on behalf of an entity. The organizer\'s printed name is part of the public filing.',
        },
        {
          label: 'Pay',
          detail:
            'Add to cart, check out, and pay $100 by card on the SCC\'s payment page. Expedite ($50 or $100 next-day, $200 same-day) only matters if your filing needs staff review.',
        },
        {
          label: 'After approval',
          detail:
            'You get a receipt email and an acceptance email. Acceptance letters and any certificates you order also appear in your CIS dashboard. Download the filed articles; your bank will ask for them.',
        },
      ],
      paragraphs: [
        'Attorneys and dentists should stop before this form. The SCC rejects the regular Articles of Organization for legal and dental practices; those file Form LLC-1103 for a professional LLC instead (see the PLLC section below).',
      ],
    },
    {
      id: 'virginia-bpol-business-license',
      heading: 'Virginia business license (BPOL) for your LLC',
      summary:
        'Virginia has no statewide general business license. Your city or county issues it, usually through the Commissioner of the Revenue, under a local Business, Professional and Occupational License (BPOL) ordinance. State law caps what localities can charge, and at typical first-year revenue most solo LLCs pay a small flat fee or nothing.',
      facts: [
        {
          label: 'When to apply',
          detail:
            'State law says before you begin business. Localities set their own windows in practice: Fairfax County gives new businesses 75 days, and the City of Richmond gives 30 days. Renewals are due by March 1 in most localities (some use May 1), with a 10% late penalty.',
        },
        {
          label: 'State caps on the flat fee',
          detail:
            'Up to $50 in localities with more than 25,000 people, and up to $30 in smaller ones.',
        },
        {
          label: 'State caps on gross receipts tax',
          detail:
            'No BPOL tax on gross receipts under $100,000 in localities over 50,000 people, or under $50,000 in localities of 25,000 to 50,000. Above that, the maximum rate for professional services is $0.58 per $100 of gross receipts, and $0.36 for repair, personal, and business services.',
        },
        {
          label: 'Fairfax County example',
          detail:
            '$0 at $10,000 or less in gross receipts, $30 from $10,001 to $50,000, $50 from $50,001 to $100,000. Above $100,000, the tax is a rate on gross receipts; professional services pay $0.31 per $100.',
        },
        {
          label: 'City of Richmond example (2026)',
          detail:
            '$0 at $5,000 or less, a $30 fee from $5,001 to $500,000, and the gross receipts tax only above $500,000.',
        },
        {
          label: 'Virginia Tax',
          detail:
            'A separate registration, done online. You need it before you collect sales tax or withhold wages from employees. Selling taxable goods without a sales tax certificate is a misdemeanor for each day.',
        },
      ],
      paragraphs: [
        "A freelance designer in Fairfax County expecting $60,000 in first-year revenue pays a $50 BPOL fee and no gross receipts tax. Check your Commissioner of the Revenue's website as soon as the SCC approves the LLC. The SCC filing doesn't register you locally, and each locality sets its own deadline.",
      ],
      related: { label: 'Estimate your self-employment tax', href: '/self-employment-tax/calculator/' },
    },
    {
      id: 'anonymous-llc-virginia',
      heading: 'Can you form an anonymous LLC in Virginia?',
      summary:
        "Mostly, yes. Virginia's Articles of Organization don't list members or managers, there is no annual report, and the SCC says it does not keep a record of members or managers. What can expose your name and address is the registered agent line, because of Virginia's narrow agent rule.",
      facts: [
        {
          label: 'Public on SCC records',
          detail:
            "The LLC's name, the registered agent's name and registered office address, the principal office address, and the organizer's name on the filed articles. Anyone can download filing images from CIS for free without logging in.",
        },
        {
          label: 'Not public',
          detail:
            'Members, managers, and ownership percentages. Virginia law requires the LLC to keep a current member list at its principal office, but it is an internal record, not a filing.',
        },
        {
          label: 'The registered agent catch',
          detail:
            'An individual agent must be a Virginia resident who is a member, manager, or officer of the LLC, or a member of the Virginia State Bar. So if you serve as your own agent, the public record shows your name next to your street address, which ties you to the LLC.',
        },
        {
          label: 'Principal office',
          detail:
            "It must be the physical location of the LLC's main office, not a PO box. If you run the business from home, your home address shows up here.",
        },
        {
          label: 'Organizer',
          detail:
            "The organizer's name is on the articles. If a formation service prepares and signs them, its name can appear there instead of yours.",
        },
      ],
      paragraphs: [
        'To keep your name off Virginia records, use a commercial registered agent and let someone other than you sign as organizer. Your principal office address will still be public, so if privacy matters, use a business address that is not your home.',
      ],
      related: { label: 'Compare registered agent options: Northwest vs Bizee', href: '/northwest-vs-bizee/' },
    },
    {
      id: 'pllc-virginia',
      heading: 'PLLC in Virginia: who needs one',
      summary:
        'Most licensed professionals in Virginia can choose either a professional LLC (PLLC) or a regular LLC. The main exceptions are attorneys and dentists: the SCC rejects the regular LLC form for legal and dental practices, so they file Form LLC-1103. Everyone else should pick a regular LLC unless their licensing board says otherwise, because it has no ownership restrictions.',
      facts: [
        {
          label: 'Professions covered',
          detail:
            'Attorneys, dentists, practitioners of the healing arts, pharmacists, optometrists, physical therapists, advanced practice registered nurses, behavioral science professionals, veterinarians, architects, professional engineers, land surveyors, landscape architects, certified interior designers, CPAs, insurance consultants, and audiologists and speech pathologists.',
        },
        {
          label: 'Who can own it',
          detail:
            'Generally, all members must be licensed to provide the same service, and at least one must hold a Virginia license. Architecture, engineering, surveying, landscape architecture, and interior design firms need at least two-thirds licensed ownership.',
        },
        {
          label: 'Filing',
          detail:
            'Form LLC-1103, $100, the same fee as a regular LLC. You must state the specific professional service; the SCC rejects vague purposes. It does not ask for a copy of your license.',
        },
        {
          label: 'Name',
          detail:
            'PLLC, P.L.L.C., PLC, or P.L.C. are allowed but optional. A standard LLC ending also works.',
        },
        {
          label: 'Before you practice',
          detail:
            'Law firms need a registration certificate from the Virginia State Bar. Architecture, engineering, surveying, landscape architecture, and interior design firms need a certificate of authority from their licensing board.',
        },
        {
          label: 'Liability',
          detail:
            "A PLLC does not shield you from liability for your own professional services. It protects you from the company's obligations and from other members' acts.",
        },
      ],
    },
    {
      id: 'sole-proprietorship-to-llc-virginia',
      heading: 'Converting a sole proprietorship to an LLC in Virginia',
      summary:
        "Virginia has no conversion filing for sole proprietors. You form a new LLC for $100 and move the business into it. The steps that catch people are Virginia Tax accounts, the assumed name, and trade licenses, which belong to the old business.",
      facts: [
        {
          label: '1. Form the LLC',
          detail: 'File Articles of Organization on CIS for $100.',
        },
        {
          label: '2. Decide on the EIN',
          detail:
            "The IRS lets a single-member LLC keep using the sole proprietor's EIN only if it has no employees, owes no excise tax, and hasn't elected corporate or S-corp tax treatment. If you'll hire or plan an S-corp election, get a new EIN for the LLC; it is free.",
        },
        {
          label: '3. Virginia Tax accounts',
          detail:
            'If the LLC gets a new EIN, Virginia Tax requires a new registration and a new Virginia account number. Register the LLC online and close the sole proprietorship\'s accounts.',
        },
        {
          label: '4. Assumed name',
          detail:
            "If you'll keep using your old business name, re-register it with the SCC as an assumed name of the LLC. The filing fee is $10.",
        },
        {
          label: '5. DPOR and other trade licenses',
          detail:
            'Virginia contractor licenses are issued to the firm and are not transferable. When you form the LLC, the old license becomes void: return it to the board within 30 days and apply for a new license for the LLC within 30 days.',
        },
        {
          label: '6. Local license and clients',
          detail:
            "Tell your Commissioner of the Revenue about the change so the BPOL license is in the LLC's name. Open an LLC bank account and send clients a new W-9.",
        },
      ],
      related: { label: 'Still deciding? LLC vs sole proprietorship', href: '/llc-vs-sole-proprietorship/' },
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
        'BPOL stands for Business, Professional and Occupational License tax, the local business license most Virginia cities and counties require. State law caps the flat fee at $50 ($30 in localities under 25,000 people) and bars the gross receipts tax below $100,000 in localities over 50,000 people. Deadlines and exact thresholds vary: Fairfax County charges $0 up to $10,000 in gross receipts and $50 up to $100,000. Check your Commissioner of the Revenue.',
    },
    {
      question: 'Is there a free way to form an LLC in Virginia?',
      answer:
        'No. Virginia charges $100 for Articles of Organization, and the Code has no fee waiver, including for veterans. There is no online payment fee. If you qualify as your own registered agent, $100 is the full cost to form, plus the $50 annual registration fee each year after.',
    },
    {
      question: 'Can I form an anonymous LLC in Virginia?',
      answer:
        "Mostly. Virginia doesn't list members or managers on the Articles, has no annual report, and the SCC keeps no member records. Your name becomes public if you serve as your own registered agent or sign as organizer, and the principal office address is always public.",
    },
    {
      question: 'Do I need a PLLC in Virginia?',
      answer:
        'Usually not. Most licensed professionals can use either a PLLC or a regular LLC. Attorneys and dentists are the exception: the SCC rejects the regular LLC form for legal and dental practices, so they file Form LLC-1103 ($100).',
    },
    {
      question: 'How do I change a sole proprietorship to an LLC in Virginia?',
      answer:
        "There is no conversion filing. Form a new LLC with the SCC ($100), re-register any assumed name under the LLC ($10), register with Virginia Tax again if the LLC gets a new EIN, and update your local BPOL license. Contractor licenses are void once the LLC forms, so apply for a new DPOR license within 30 days.",
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
      'There is still a $50 annual registration fee every year, and missing it can get the LLC canceled.',
      'BPOL and other local license rules vary by city and county, so the state filing is not the last step. Check with your locality after you form.',
    ],
  },
};

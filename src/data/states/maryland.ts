import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const maryland: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Maryland (${GUIDE_YEAR}): $100–$150 Fee, Steps & Timeline`,
  seoDescription:
    'Form a Maryland LLC for $100 (plus 3% online), or $150 to skip the 6-8 week wait. Then the $300 annual report due April 15 and the resident agent rules.',
  lastUpdated: '2026-09-25',
  intro:
    "A Maryland LLC costs $100 to file with standard review, which takes 6-8 weeks, or $150 with expedited review. Paying online adds a 3% fee. You file Articles of Organization with the State Department of Assessments and Taxation (SDAT), not the Secretary of State, and Maryland calls the required agent a resident agent. There's no publication requirement. The cost to plan around is the $300 Annual Report / Personal Property Return, due every April 15. After approval, get a free EIN, open a business bank account, and check whether your business needs a Trader's License or industry permit. Maryland doesn't require an operating agreement, but writing one is still worth it.",
  whatYoullNeed:
    'To form a Maryland LLC, you need a distinguishable LLC name with an approved designator, a Maryland principal office street address, a resident agent with a physical Maryland street address, the resident agent\'s signed consent, the signature of at least one authorized person, and the SDAT filing fee. Budget $100 (about $103 online) if you can wait 6-8 weeks, or $150 (about $154.50 online) for expedited review.',
  closing:
    "If you live and operate in Maryland, form in Maryland, even with the $300 annual filing. A Delaware or Wyoming LLC still has to register in Maryland if you operate here, so you'd be maintaining two states instead of one. File online if speed matters, get the free EIN from the IRS after SDAT approval, and set a hard reminder for the April 15 Annual Report / Personal Property Return. You can be your own resident agent if you qualify. A professional resident agent, typically about $100 to $150 a year, is worth it if you don't want your home address on SDAT records.",
  inlineCtaDescription:
    "Maryland lets you serve as your own resident agent if you qualify. Your address then goes on the public record, and you're responsible for catching legal papers and SDAT mail. A professional resident agent, typically about $100 to $150 a year, makes sense if you work from home, travel often, or live outside Maryland. If you have a Maryland office where you're reliably available and don't mind it being public, you can skip it.",
  sidebarCtaDescription:
    "If you don't want your home address on SDAT records, use a professional Maryland resident agent instead of listing yourself.",
  officialLinks: [
    { label: 'File your Maryland LLC online', url: 'https://businessexpress.maryland.gov/' },
    { label: 'Search Maryland business names', url: 'https://egov.maryland.gov/BusinessExpress/EntitySearch' },
    {
      label: 'Download Maryland Articles of Organization',
      url: 'https://dat.maryland.gov/Documents/Accessible%20Documents/Charter%20-%20Create%20or%20Start%20a%20Business/Articles%20of%20Organization%20for%20a%20Limited%20Liability%20Company%5F0526-A.pdf',
    },
    {
      label: 'Maryland SDAT fee schedule',
      url: 'https://dat.maryland.gov/businesses/documents/fees.pdf',
    },
    {
      label: 'Maryland Business Express online fee schedule',
      url: 'https://egov.maryland.gov/BusinessExpress/Payment/FeesSchedule',
    },
    {
      label: 'Maryland Business Express processing times',
      url: 'https://egov.maryland.gov/BusinessExpress/home/ProcessingTimes',
    },
    {
      label: 'Maryland Annual Report / Personal Property Return deadlines',
      url: 'https://dat.maryland.gov/businesses/Pages/default.aspx',
    },
    {
      label: 'Maryland SDAT forfeiture FAQ',
      url: 'https://dat.maryland.gov/businesses/Pages/Frequently-Asked-Forfeiture-Questions.aspx',
    },
    {
      label: 'Maryland LLC reinstatement instructions (SDAT)',
      url: 'https://dat.maryland.gov/SDAT%20Forms/reinstatement.pdf',
    },
    {
      label: 'Forfeiture for not filing (Md. Code, Corps. & Ass\'ns § 4A-911)',
      url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=4A-911&enactments=false',
    },
    {
      label: "Trader's license and other business licenses (Comptroller)",
      url: 'https://www.marylandcomptroller.gov/businesses/new-business/business-licenses.html',
    },
    {
      label: 'Maryland Business Express licenses and permits',
      url: 'https://businessexpress.maryland.gov/plan/business-licenses-permits',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Maryland LLCs are usually pass-through entities by default: a single-member LLC is usually disregarded for federal tax, and a multi-member LLC is usually taxed as a partnership. Maryland state income tax now ranges up to 6.50% for high earners, and county or Baltimore City income tax can add up to 3.30%. That is why Maryland LLC owners should think about state and local taxes early, not after the first profitable year.',
    'Maryland does not have an Ohio-style Commercial Activity Tax. The Maryland-specific annual pain point is the $300 Annual Report / Personal Property Return due April 15. Even if the LLC owns no business personal property, the filing requirement still matters. Eligible employers with employees and a qualifying retirement plan may be able to use the MarylandSaves waiver, but solo founders with no employees should not count on it.',
    'Maryland has an optional Pass-Through Entity Tax election that can matter for higher-income owners. For tax year 2026, the PTET base is still limited to income attributable to Maryland for both resident and nonresident members. The 2026 budget law pushed the planned expansion for resident members to tax year 2027. Treat this as a CPA question, not a DIY formation decision.',
    'As of September 23, 2026, domestic Maryland LLCs do not file federal BOI reports. FinCEN\'s final rule, effective August 14, 2026, permanently exempts U.S.-created companies and U.S. persons from BOI reporting. Recheck FinCEN before filing because CTA rules have changed quickly.',
  ],
  comparisonRows: [
    {
      state: 'Maryland',
      annualReport: '$300/yr, due April 15',
      upfrontCost: '$100 standard / $150 expedited',
      ongoingStateCost: '$300/yr',
    },
    {
      state: 'Pennsylvania',
      annualReport: '$7/yr, due September 30',
      upfrontCost: '$125',
      ongoingStateCost: '$7/yr',
    },
    {
      state: 'Virginia',
      annualReport: 'No annual report; annual registration fee applies',
      upfrontCost: '$100',
      ongoingStateCost: '$50/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No annual report; $300 annual franchise tax',
      upfrontCost: '~$110',
      ongoingStateCost: '$300/yr',
    },
    {
      state: 'Wyoming',
      annualReport: 'Annual report / license tax, $60 minimum',
      upfrontCost: '~$100',
      ongoingStateCost: '$60+/yr',
    },
  ],
  filingFee: 100,
  filingFeeDisplay: '$100-$150',
  filingFeeNote: '$100 standard; $150 expedited; online adds 3%',
  annualReportFee: 300,
  filingTime:
    'Standard (non-expedited) filings take 6-8 weeks, online or by mail. With the $50 expedite fee, SDAT lists online review at 7-14 business days. Paper expedited filings are reviewed within 7-10 business days after SDAT receives them. Same-day rush is available if you meet the cutoff.',
  filingTimeShort: '7-14 days',
  expeditedTime:
    'Expedited review costs $50 extra ($150 total, plus 3% online). Same-day online costs $425 plus processing and is reviewed within three hours if submitted by 2:30 PM. Same-day paper drop-box filing costs $525 if delivered by 10:00 AM.',
  expeditedFee: 50,
  filingAgency: 'Maryland State Department of Assessments and Taxation',
  filingAgencyUrl: 'https://dat.maryland.gov/businesses/',
  agentTerm: 'resident agent',
  stateTaxRate:
    'Maryland pass-through LLC income can be subject to state income tax up to 6.50% plus county or Baltimore City income tax up to 3.30%.',
  stateTax:
    'Most Maryland LLCs are pass-through entities by default. Watch Maryland state income tax, county or Baltimore City piggyback income tax, sales and use tax registration if you sell taxable goods or services, the optional PTET election for higher-income owners, and the annual SDAT Personal Property Return.',
  annualReportDue: 'April 15',
  annualReportNote: '$300 Annual Report / Personal Property Return, due each year',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Maryland-compliant LLC name',
      description:
        'Your Maryland LLC name must be distinguishable from existing Maryland entities and include one of SDAT\'s accepted designators: Limited Liability Company, L.L.C., LLC, L.C., or L C. Do not use a restricted word like bank, insurance, or trust unless you have the right approval. Search the SDAT business database before filing, and remember that SDAT availability is not a trademark clearance. If you are not ready to file, name reservation is optional and costs $25 for 30 days.',
    },
    {
      title: 'Choose a Maryland resident agent',
      description:
        'Maryland calls this role a resident agent, not a statutory agent. The agent can be a Maryland resident age 18 or older, or a corporation or LLC formed in Maryland, and must have a physical Maryland street address. P.O. boxes do not qualify. You can be your own resident agent if you are a Maryland resident with a real Maryland address, but your address becomes public and you need to be reachable during normal business hours. A professional resident agent is the cleaner default for home-based founders, non-Maryland residents, and anyone who wants fewer address headaches.',
    },
    {
      title: 'File Articles of Organization with SDAT',
      description:
        'File the Maryland Articles of Organization through Maryland Business Express or by mailing the SDAT form to the Charter Division. You will list the LLC name, Maryland principal office street address, resident agent name and Maryland street address, resident agent consent signature, and the signature of at least one authorized person. A business purpose and return address are optional on the current form. Maryland does not require member names, manager names, ownership percentages, or the member-managed vs. manager-managed choice on the Articles. The filing forms the LLC when SDAT accepts it, or at a later time stated in the Articles.',
    },
    {
      title: 'Pick the filing speed deliberately',
      description:
        'The base Maryland filing is $100, online or by mail, but SDAT lists standard non-expedited review at 6-8 weeks. Online payments add a 3% fee, so standard online filing is about $103. For most founders the right move is to pay the $50 expedite fee: $150 plus 3% online, about $154.50, with online expedited review listed at 7-14 business days. Skip it only if you can genuinely wait two months. If timing is critical, same-day rush is available: online costs $425 plus processing if submitted by 2:30 PM, and paper drop-box rush costs $525 if delivered by 10:00 AM. If SDAT rejects the filing, you generally have 60 days from the initial rejection to correct and resubmit before fees are retained.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'After SDAT approves the LLC, apply for an EIN directly from the IRS. It is free, and online approval is usually instant during IRS online EIN hours. Multi-member LLCs and LLCs with employees need an EIN. Single-member LLCs should usually get one too because banks commonly require it and it keeps your SSN off routine business paperwork. Do this after approval so the EIN name matches the SDAT record.',
    },
    {
      title: 'Create a Maryland operating agreement',
      description:
        'Maryland does not require you to file an operating agreement, but skipping it is a false economy. Your agreement should cover members, ownership percentages, contributions, management structure, voting, distributions, transfers, buyouts, dissolution, and indemnification. For single-member LLCs, the agreement still matters because it helps show the company is separate from you. Banks, partners, investors, and future buyers often ask for it even though SDAT does not.',
    },
    {
      title: 'Open a business bank account and check licenses',
      description:
        'Open a separate business bank account with your approved Articles, EIN confirmation, operating agreement, ID, and any bank-specific resolution. Maryland does not have a statewide general business license, but that does not mean every business is done after formation. Businesses selling goods generally need a Trader\'s License from the Clerk of the Circuit Court in their county, with fees based on inventory value. Service businesses often do not need a general county license, but may still need sales and use tax registration or industry permits.',
    },
    {
      title: 'Calendar the Maryland Annual Report / Personal Property Return',
      description:
        'Every Maryland LLC must file the Annual Report / Personal Property Return with SDAT by April 15 each year, starting the calendar year after formation. The fee is $300. A 60-day extension to June 15 is available if you request it online by April 15, but an extension does not make the filing disappear. A late filing triggers a penalty of at least $30 (1-15 days late), $40 (16-30 days), or $50 (over 30 days), plus 2% of that penalty for each 30 days it stays late. If you ignore it, SDAT forfeits the LLC. This is Maryland\'s biggest ongoing LLC cost, so put it on the calendar before you forget.',
    },
  ],
  sections: [
    {
      id: 'file-articles-maryland-business-express',
      heading: 'How to file your Articles of Organization on Maryland Business Express',
      summary:
        "You file at egov.maryland.gov/BusinessExpress, SDAT's online system. The form takes six screens. The decision that matters is the processing speed at checkout: $100 standard is reviewed in the second calendar month after you submit, while $150 expedited is reviewed in 7-14 business days. Paying by card adds 3%.",
      facts: [
        {
          label: 'Start the filing',
          detail:
            'Create a Business Express account and log in. Click Start a New Filing, then New Business Filings, Register a Business, and Maryland Limited Liability Company.',
        },
        {
          label: 'Business Name',
          detail:
            'Enter the name and pick the required ending from the drop-down (LLC, L.L.C., Limited Liability Company, L.C., or LC). Search SDAT first; the online check is not a trademark search.',
        },
        {
          label: 'Business Information',
          detail:
            'The principal office must be a Maryland street address, not a PO box. You can add a separate mailing address.',
        },
        {
          label: 'Resident Agent',
          detail:
            'An adult Maryland resident, or an active LLC or corporation formed in Maryland. The address must be a Maryland street address, not a PO box or drop box. SDAT says wrong resident agent details are the number one reason new filings are rejected: listing the new LLC as its own agent, or misspelling a commercial agent\'s name. Copy the agent\'s exact name from the SDAT search.',
        },
        {
          label: 'Contact, Summary, Certification',
          detail:
            'Enter a contact, check the summary carefully (SDAT says you cannot change anything once it is approved), and sign as the authorized person.',
        },
        {
          label: 'Processing speed',
          detail:
            'Standard: no extra fee, reviewed in the second calendar month after you submit. Expedited: +$50, reviewed in 7-14 business days. Rush: +$325 if submitted by 2:30 PM, reviewed within three hours. All card payments add a 3% technology fee.',
        },
        {
          label: 'After approval',
          detail:
            'You get an email with your SDAT Department ID, a letter followed by eight numbers (Maryland LLCs start with W). It also appears on your Business Express home page the next business day. It is not a tax ID, but you need it for the annual report and to register a trade name.',
        },
      ],
      paragraphs: [
        'If SDAT rejects the filing and you do nothing for 15 days, it refunds the fees minus the technology fee. Fixing the resident agent details and resubmitting is usually faster.',
      ],
    },
    {
      id: 'maryland-annual-report-forfeiture',
      heading: 'What happens if you miss the Maryland annual report',
      summary:
        'Every Maryland LLC owes the $300 Annual Report / Personal Property Return by April 15, starting the calendar year after it forms, even with no revenue or property. Miss it and the LLC loses good standing right away, penalties start, and eventually SDAT forfeits the LLC. Getting it back means filing every missed report and paying every tax and penalty first.',
      facts: [
        {
          label: 'Filing it',
          detail:
            'File online with your Department ID, or on paper. Paying online adds the 3% technology fee (about $9 on $300); paper filing avoids it. Need more time? Request the extension to June 15 online by April 15.',
        },
        {
          label: 'Right after April 15',
          detail:
            'The LLC is no longer in good standing. That matters when a bank, landlord, or client asks for a Certificate of Status.',
        },
        {
          label: 'Late penalty',
          detail:
            'At least $30 (1-15 days late), $40 (16-30 days), or $50 (over 30 days), up to $500, plus 2% of that penalty for each 30 days it stays unpaid. SDAT can reduce it for good cause.',
        },
        {
          label: 'Forfeiture',
          detail:
            'After September 30 each year, SDAT forfeits LLCs that haven\'t filed the prior year\'s report, without a hearing. A forfeited LLC loses the right to do business in Maryland and to use its name, and knowingly doing business for one is a misdemeanor.',
        },
        {
          label: '60-day window',
          detail:
            'If the LLC files within 60 days after the forfeiture proclamation, its rights are restored as of the forfeiture date.',
        },
        {
          label: 'Reinstatement',
          detail:
            'File Articles of Reinstatement ($100, or $150 expedited). SDAT will not accept them until every missing annual report is filed and all state and local taxes, interest, and penalties are paid. If the LLC ever reported business personal property, you also need a tax clearance certificate from the county. If someone took your name in the meantime, you must pick a new one.',
        },
      ],
      paragraphs: [
        'The only waiver of the $300 fee is for businesses that qualified with MarylandSaves, the state retirement program for employers, the year before. Solo founders without employees should plan to pay it every year. Put April 15 on your calendar next to your tax deadline.',
      ],
    },
    {
      id: 'maryland-business-license',
      heading: "Maryland business license and trader's license for your LLC",
      summary:
        "Maryland has no single statewide business license. What you need depends on what you do and where. If you sell goods, you need a trader's license from your county's Clerk of the Circuit Court and a sales tax account. Most service-only LLCs need neither, unless the service itself is licensed or taxable.",
      facts: [
        {
          label: "Trader's license",
          detail:
            "Required before you sell goods in Maryland, unless you're the grower or manufacturer. Issued by the Clerk of the Circuit Court in your county, only after the LLC is registered with SDAT.",
        },
        {
          label: 'Cost',
          detail:
            'Based on the wholesale value of your inventory: $15 up to $1,000, rising to $800 above $750,000, plus a $2 issuing fee. Baltimore City\'s scale tops out at $2,125.',
        },
        {
          label: 'License year',
          detail:
            'May 1 through April 30. Every license expires April 30 no matter when you bought it, and fees are usually prorated. Late renewal adds 10% for the first month and 2% each month after.',
        },
        {
          label: 'Clerk can refuse',
          detail:
            "The clerk won't issue the license if the LLC owes personal property tax or is behind on SDAT filings, which is one more reason not to miss the April 15 annual report.",
        },
        {
          label: 'Sales and use tax',
          detail:
            "Register with the Comptroller through the Combined Registration Application if you sell goods or taxable services. Registration is free. The same application sets up withholding if you hire.",
        },
        {
          label: 'Service businesses',
          detail:
            "No trader's license. Regulated trades and professions still need their occupational license from the relevant state board.",
        },
      ],
      paragraphs: [
        "If your Etsy shop keeps inventory in Maryland, budget $17 for the smallest trader's license ($15 plus the $2 issuing fee) and file the free sales tax registration before your first sale.",
      ],
    },
    {
      id: 'anonymous-llc-maryland',
      heading: 'Can you form an anonymous LLC in Maryland?',
      summary:
        "Largely, yes. The Articles of Organization don't list members or managers, the LLC annual report doesn't ask for them, and SDAT says it does not keep records of business owners. The addresses on the filing are what give people away.",
      facts: [
        {
          label: 'Public in the SDAT search',
          detail:
            "The LLC's status, good standing, principal office, and resident agent, plus the filing history. Documents filed since 2001, including the Articles with the authorized person's signature, can be viewed for free.",
        },
        {
          label: 'Not on file',
          detail:
            'Members, managers, and ownership. The officer section of the annual report is for corporations only.',
        },
        {
          label: 'Principal office',
          detail:
            'Must be a Maryland street address, not a PO box. For a home-based founder, that is usually your home. It also means a founder living outside Maryland needs a Maryland address for this line.',
        },
        {
          label: 'Resident agent',
          detail:
            'Serving yourself puts your name and home address on the record. A commercial resident agent, which must be a Maryland-formed LLC or corporation, keeps both off that line.',
        },
        {
          label: 'Authorized person',
          detail:
            "The person who signs the Articles is visible on the filed document. If a formation service signs as the authorized person, its name appears there instead of yours.",
        },
      ],
      paragraphs: [
        'For most founders, a commercial resident agent plus a non-home Maryland business address gets you as close to anonymous as Maryland allows. Domestic Maryland LLCs also do not file FinCEN BOI reports.',
      ],
      related: { label: 'Compare registered agent options: Northwest vs Bizee', href: '/northwest-vs-bizee/' },
    },
    {
      id: 'sole-proprietorship-to-llc-maryland',
      heading: 'Converting a sole proprietorship to an LLC in Maryland',
      summary:
        "Maryland has no conversion filing for sole proprietors. You form a new LLC and move the business into it. Know the cost change before you switch: a sole proprietor's personal property return is free, while the LLC owes $300 every April 15.",
      facts: [
        {
          label: '1. Form the LLC',
          detail: 'File Articles of Organization on Business Express: $150 expedited plus 3% online is the practical choice.',
        },
        {
          label: '2. Decide on the EIN',
          detail:
            "The IRS lets a single-member LLC keep using the sole proprietor's EIN only if it has no employees, owes no excise tax, and hasn't elected corporate or S-corp tax treatment. Otherwise, get a new EIN for free.",
        },
        {
          label: '3. Tax accounts',
          detail:
            "Maryland doesn't publish a rule for moving a sole proprietor's sales tax or withholding accounts to an LLC. Registering the LLC through the free Combined Registration Application is the clean path; call the Comptroller if you want to confirm for your accounts.",
        },
        {
          label: '4. Trade name',
          detail:
            'A trade name is tied to the owner\'s Department ID, so register it for the LLC if you will keep using the old name: $25 on paper, or $75 plus 3% online because online trade names must be expedited.',
        },
        {
          label: "5. Trader's license",
          detail:
            "The clerk can only put a business name on a license after that name is registered with SDAT. Get the license in the LLC's name.",
        },
        {
          label: '6. Final return for the sole proprietorship',
          detail:
            "File the free Form 2 personal property return by April 15 if the sole proprietorship had business property or a license. If it stopped operating before January 1, file a return or letter explaining when it closed and what happened to the property.",
        },
      ],
      related: { label: 'Still deciding? LLC vs sole proprietorship', href: '/llc-vs-sole-proprietorship/' },
    },
  ],
  costBreakdown: [
    { item: 'Articles of Organization', cost: '$100', required: 'Yes', notes: 'Standard review, 6-8 weeks' },
    { item: 'Online payment fee', cost: '3%', required: 'If paying online', notes: 'About $3 on a standard filing' },
    {
      item: 'Expedited review',
      cost: '$50 extra',
      required: 'Optional',
      notes: '$150 total; 7-14 business days online, 7-10 after receipt by mail',
    },
    { item: 'Same-day rush online', cost: '$425 + 3%', required: 'Optional', notes: 'Submit by 2:30 PM' },
    { item: 'Same-day rush paper', cost: '$525', required: 'Optional', notes: 'Drop box by 10:00 AM' },
    { item: 'Name reservation', cost: '$25', required: 'Optional', notes: '30-day hold' },
    { item: 'Trade name / DBA', cost: '$25 paper / $75 + 3% online', required: 'Conditional', notes: 'Online requires the $50 expedite; valid 5 years' },
    { item: 'Resident agent service', cost: '$50-$300/yr', required: 'Optional', notes: 'Typical reputable range is about $100-$150/yr' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'Required for multi-member LLCs or employees' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal document; not filed with SDAT' },
    { item: 'Certificate of Status', cost: '$20', required: 'Optional', notes: 'Good standing certificate' },
    { item: 'Annual Report / Personal Property Return', cost: '$300/yr', required: 'Yes', notes: 'Due April 15 each year' },
    {
      item: 'Late annual report penalty',
      cost: '$30-$50 minimum',
      required: 'If late',
      notes: 'Minimum depends on days late; plus 2% of the penalty per 30 days. Non-filing leads to forfeiture',
    },
    { item: 'Trader\'s License', cost: '$15-$800 + $2', required: 'Conditional', notes: 'For businesses selling goods; Baltimore City caps at $2,125' },
    { item: 'Articles of Reinstatement', cost: '$100', required: 'Only if forfeited', notes: 'All missed reports, taxes, and penalties must be paid first' },
    { item: 'Resident agent change filing', cost: '$25', required: 'If changing', notes: 'File promptly if agent or address changes' },
    { item: 'Total (bare minimum DIY)', cost: '$100', isEmphasized: true, notes: 'Mail filing, self as agent, no optional extras' },
    { item: 'Total (typical first year)', cost: '~$280', isEmphasized: true, notes: 'Expedited online filing plus about $125 resident agent service' },
    { item: 'Typical year 2+', cost: '~$425/yr', isEmphasized: true, notes: '$300 annual filing plus about $125 resident agent service' },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Maryland?',
      answer:
        'The Maryland LLC filing fee is $100, but standard review takes 6-8 weeks. Most founders should add the $50 expedite fee, which brings it to $150, or about $154.50 online after the 3% payment fee. Starting the calendar year after formation, budget $300 per year for the Annual Report / Personal Property Return.',
    },
    {
      question: 'What is the Maryland LLC filing fee?',
      answer:
        'The base Articles of Organization fee is $100, whether you file online or by mail. Expedited review adds $50, for $150 total, and paying online adds a 3% fee on either amount. Same-day rush costs more.',
    },
    {
      question: 'How long does it take to get a Maryland LLC?',
      answer:
        'SDAT lists standard non-expedited review at 6-8 weeks. With the $50 expedite fee, SDAT lists online review at 7-14 business days. Same-day rush is available if you submit by the required cutoff and pay the higher rush fee.',
    },
    {
      question: 'How do I register an LLC in Maryland?',
      answer:
        'Registering, forming, and filing a Maryland LLC all mean filing Articles of Organization with the State Department of Assessments and Taxation (SDAT): $100, or $150 with expedited review, plus 3% if you pay online. That is the only state filing that creates the LLC. After approval, register with the Comptroller only if you will collect sales tax or run payroll, and get a county Trader\'s License if you sell goods. Then plan for the $300 Annual Report every April 15, which every Maryland LLC owes, even one with no revenue or property.',
    },
    {
      question: 'What is a Maryland resident agent?',
      answer:
        'A resident agent is Maryland\'s term for the person or company that receives legal papers and official notices for your LLC. The agent must have a physical Maryland street address, consent to the appointment, and be available during normal business hours. Do not call this role a statutory agent on a Maryland filing.',
    },
    {
      question: 'Can I be my own resident agent in Maryland?',
      answer:
        'Yes, if you are at least 18, live in Maryland, and have a physical Maryland street address. The tradeoff is privacy and reliability: your address becomes public, you need to be available during business hours, and moving means filing an update with SDAT.',
    },
    {
      question: 'Does Maryland require an operating agreement for an LLC?',
      answer:
        'No. Maryland does not require you to file or maintain an operating agreement as a formation condition. You should still have one. It helps with banking, ownership rules, decision-making, liability separation, and future disputes.',
    },
    {
      question: 'Does Maryland require an annual report for LLCs?',
      answer:
        'Yes. Maryland LLCs file the Annual Report / Personal Property Return with SDAT by April 15 each year, starting the calendar year after formation. The fee is $300. Filing late adds a penalty of at least $30 to $50 depending on how late you are, and not filing leads to forfeiture of the LLC.',
    },
    {
      question: 'Does Maryland have an LLC publication requirement?',
      answer:
        'No. Maryland does not require a newspaper publication step after LLC formation. That keeps the process simpler than states with publication rules, such as New York.',
    },
    {
      question: 'How do I apply for an LLC in Maryland online?',
      answer:
        'File through Maryland Business Express. Create an account, search your name, choose Articles of Organization for an LLC, and enter the principal office, your resident agent and their consent, and an authorized signature. Standard review is $100 plus a 3% online payment fee, about $103, and takes 6-8 weeks. Expedited review is $150 plus 3%, about $154.50, and SDAT lists it at 7-14 business days. Unless you can wait two months, pay the $50. If checkout shows the expedite fee without asking, go back and check the filing speed you selected.',
    },
    {
      question: 'Do I need a business license for my Maryland LLC?',
      answer:
        'Maryland has no statewide general business license for every LLC. Businesses selling goods generally need a Trader\'s License from the Clerk of the Circuit Court in their county. Service businesses usually do not need a general county license, but may need sales and use tax registration or industry-specific permits.',
    },
    {
      question: 'How is a Maryland LLC taxed?',
      answer:
        'Most Maryland LLCs are taxed as pass-through entities by default. Members can owe Maryland state income tax and county or Baltimore City income tax on their share of income. Maryland also has an optional Pass-Through Entity Tax election that can matter for higher-income owners, so ask a CPA before making that election.',
    },
    {
      question: 'Does Maryland have a Commercial Activity Tax?',
      answer:
        'No. Maryland does not have an Ohio-style Commercial Activity Tax. The Maryland-specific recurring filing to watch is the $300 Annual Report / Personal Property Return. The state also has an optional Pass-Through Entity Tax election, which is a different issue.',
    },
    {
      question: 'Can a non-Maryland resident form a Maryland LLC?',
      answer:
        'Yes. Maryland does not require LLC members to live in Maryland. You still need a Maryland resident agent with a physical Maryland address. If you do not operate in Maryland, ask whether Maryland is actually the right state before filing.',
    },
    {
      question: 'Does Maryland allow Series LLCs?',
      answer:
        'Maryland does not authorize domestic Series LLCs. It recognizes foreign series companies in limited contexts, but you cannot form a Maryland domestic Series LLC. Real estate investors who specifically need a series structure should compare other states before filing.',
    },
    {
      question: 'Does Maryland have PLLCs?',
      answer:
        'Maryland does not have a separate Professional LLC entity type. Maryland law lets a regular LLC render professional services, such as accounting, law, medicine, dentistry, engineering, and architecture, and you stay personally liable for your own professional negligence. Some licensing laws limit who can own the LLC (dental practice LLCs must be owned only by licensed dentists), so check your board before filing.',
    },
    {
      question: 'Is there a free way to form an LLC in Maryland?',
      answer:
        'No. The Articles of Organization cost $100, plus a 3% fee if you pay online, and Maryland has no fee waiver for forming an LLC. The cheapest path is $100 by mail with standard review and serving as your own resident agent, but standard review takes about two months. After that, the $300 annual report applies every year.',
    },
    {
      question: 'What happens if I miss the Maryland annual report?',
      answer:
        'The LLC loses good standing after April 15 and owes a late penalty of at least $30 to $50, up to $500, plus 2% of the penalty per 30 days. If the report is still unfiled after September 30 of the following year, SDAT can forfeit the LLC. Reinstatement costs $100 and requires filing every missed report and paying all taxes and penalties first.',
    },
    {
      question: 'Can I form an anonymous LLC in Maryland?',
      answer:
        "Largely. SDAT does not keep records of LLC owners, and neither the Articles nor the LLC annual report list members. The resident agent, principal office address, and the person who signed the Articles are public, so use a commercial resident agent and a non-home Maryland address if privacy matters.",
    },
    {
      question: 'How do I change a sole proprietorship to an LLC in Maryland?',
      answer:
        "There is no conversion filing. Form a new LLC with SDAT, register any trade name and trader's license in the LLC's name, set up the LLC's tax accounts through the free Combined Registration Application, and file a final Form 2 personal property return for the sole proprietorship. Expect your annual state cost to rise from $0 to $300.",
    },
    {
      question: 'Do Maryland LLCs need to file BOI reports?',
      answer:
        'No. As of September 23, 2026, domestic Maryland LLCs do not file federal BOI reports. FinCEN\'s final rule, effective August 14, 2026, made the exemption for U.S.-created companies permanent. Recheck FinCEN before filing because CTA rules have changed quickly.',
    },
    {
      question: 'How do I dissolve a Maryland LLC?',
      answer:
        'File Articles of Cancellation with SDAT. The non-expedited filing fee is $0, or $50 if expedited. Before filing, wind up the business, settle debts, handle final tax filings, and make sure Annual Report obligations are addressed so you do not keep triggering Maryland compliance issues.',
    },
  ],
  proscons: {
    pros: [
      'Maryland keeps the formation filing itself simple: no publication requirement, no member or manager names on the Articles, and a mature Maryland Business Express portal.',
      'The $100 base formation fee is reasonable if you are not in a hurry, and online filing gives most founders a predictable 7-14 business day expedited path.',
      'If you live and operate in Maryland, forming in Maryland is usually cleaner than forming elsewhere and then registering back into Maryland as a foreign LLC.',
      'The optional PTET election can be valuable for higher-income owners, and Maryland plans to widen the resident-member base starting in tax year 2027.',
    ],
    cons: [
      'The $300 Annual Report / Personal Property Return is the biggest drawback. Maryland is cheap to start but not cheap to maintain.',
      'Standard review takes 6-8 weeks, so most founders end up paying the $50 expedite fee, and online payments add 3% on top.',
      'Maryland county and Baltimore City income taxes can push the real owner-level tax burden higher than founders expect.',
      'Maryland does not offer a domestic Series LLC or a separate PLLC structure, which matters for some real estate and licensed professional businesses.',
    ],
  },
};

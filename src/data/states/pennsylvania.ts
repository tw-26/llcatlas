import type { StateOverride } from './types';

export const pennsylvania: StateOverride = {
  contentStatus: 'ready',
  seoTitle: 'How to Start an LLC in Pennsylvania (2026): $125 Filing Fee | LLCAtlas',
  seoDescription:
    'Start a Pennsylvania LLC for $125. Clear steps, registered office rules, annual report timing, publication rules, and PA-specific tax traps.',
  lastUpdated: '2026-04-29',
  intro:
    'Starting an LLC in Pennsylvania is not hard, but the terminology trips people up. You do not file Articles of Organization with a Secretary of State, and you do not appoint a statutory agent. You file a Certificate of Organization with the Pennsylvania Department of State, list a Pennsylvania registered office or Commercial Registered Office Provider, attach the New Entity Docketing Statement, and pay the $125 filing fee. The clean path is simple: pick a compliant name, decide whether to use your own address or a CROP for privacy, file through Business Filing Services, get an EIN, write an operating agreement, and calendar the new $7 annual report due every September 30.',
  whatYoullNeed:
    "To form a Pennsylvania LLC, you'll need a distinguishable LLC name, a Pennsylvania registered office street address or a contracted Commercial Registered Office Provider, organizer information, a completed Certificate of Organization, the required New Entity Docketing Statement, and $125 for the filing fee. If you want privacy or do not have a Pennsylvania street address, choose the CROP before you file.",
  closing:
    'Pennsylvania is a good home-state LLC choice for founders who live or operate here. The $125 filing fee is reasonable, the $7 annual report is unusually cheap, and there is no LLC formation publication requirement. The real Pennsylvania headaches are not the filing - they are terminology, local taxes, and missed maintenance. Use the Department of State portal, do not skip the Docketing Statement, decide early whether your home address belongs on the public record, and set a recurring reminder for the September 30 annual report.',
  inlineCtaDescription:
    'Pennsylvania does not use the normal registered-agent filing model. If you work from home, live outside Pennsylvania, or do not want your street address on the public record, use a Commercial Registered Office Provider instead of listing your own address. Compare the provider price, privacy policy, and renewal terms before you buy.',
  sidebarCtaDescription:
    'If you do not want your home address on Pennsylvania records, use a Commercial Registered Office Provider for the registered office.',
  officialLinks: [
    { label: 'File your Pennsylvania LLC online', url: 'https://file.dos.pa.gov' },
    { label: 'Check Pennsylvania business name availability', url: 'https://file.dos.pa.gov/search/business' },
    {
      label: 'Pennsylvania LLC filing page',
      url: 'https://www.pa.gov/agencies/dos/programs/business/types-of-filings-and-registrations/pennsylvania-limited-liability-company',
    },
    {
      label: 'Download Certificate of Organization (DSCB:15-8821)',
      url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dos/programs/business/forms/offsite-forms/15-8821-Cert-of-Org-Dom-LLC.pdf',
    },
    {
      label: 'Pennsylvania annual reports',
      url: 'https://www.pa.gov/agencies/dos/programs/business/types-of-filings-and-registrations/annual-reports',
    },
    {
      label: 'Pennsylvania fee schedule',
      url: 'https://www.pa.gov/agencies/dos/programs/business/fees-and-payments',
    },
    {
      label: 'Commercial Registered Office Provider list',
      url: 'https://www.pa.gov/agencies/dos/programs/business/information-services/commercial-registered-office-providers',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Pennsylvania has no Commercial Activity Tax. That is an Ohio issue, not a Pennsylvania LLC issue. Default-taxed LLCs are usually pass-throughs, so members report income on their own returns and Pennsylvania Personal Income Tax applies at a flat 3.07%. If the LLC elects C-corp taxation, Pennsylvania Corporate Net Income Tax applies instead of the simple pass-through picture.',
    'The state filing is cheap; the local tax layer is where Pennsylvania gets annoying. Many municipalities and school districts impose local Earned Income Tax, and employers often deal with Local Services Tax. If you operate in Philadelphia, plan separately for city-level rules like BIRT, Net Profits Tax, and the Commercial Activity License. If you operate in Pittsburgh or another municipality with local business taxes, check local registration before you invoice customers.',
    'As of April 2026, domestic Pennsylvania LLCs owned by U.S. persons generally do not file federal BOI reports under FinCEN’s interim final rule. Because CTA rules have moved quickly, recheck fincen.gov/boi within 48 hours of publishing or filing if BOI status matters to your compliance checklist.',
  ],
  comparisonRows: [
    {
      state: 'Pennsylvania',
      annualReport: '$7/yr, due September 30',
      upfrontCost: '$125',
      ongoingStateCost: '$7/yr',
    },
    {
      state: 'Ohio',
      annualReport: 'None for standard LLCs',
      upfrontCost: '$99',
      ongoingStateCost: '$0 annual report fee',
    },
    {
      state: 'North Carolina',
      annualReport: '$200/yr by April 15',
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
  ],
  filingFee: 125,
  annualReportFee: 7,
  filingTime:
    'Online filings through Business Filing Services are commonly framed as a 3-7 business day standard estimate, but the Department of State posts a live processing date at file.dos.pa.gov. Check that banner before filing for the current turnaround. Mail filings can take longer because of processing time plus transit.',
  filingTimeShort: '3-7 days',
  expeditedTime:
    'In-person expedited service in Harrisburg: same-day $100 if received before 10 a.m., 3-hour $300 if received before 2 p.m., 1-hour $1,000 if received before 4 p.m.',
  expeditedFee: 100,
  filingAgency: 'Pennsylvania Department of State, Bureau of Corporations and Charitable Organizations',
  filingAgencyUrl: 'https://www.pa.gov/agencies/dos/programs/business',
  agentTerm: 'registered office or CROP',
  stateTaxRate:
    'Default pass-through LLC income is subject to Pennsylvania Personal Income Tax at 3.07%. LLCs that elect C-corp taxation are subject to Pennsylvania Corporate Net Income Tax instead.',
  stateTax:
    'Most Pennsylvania LLCs are pass-through entities by default. The practical tax items to watch are Pennsylvania PIT at 3.07%, sales/use tax registration if you sell taxable goods or services, local Earned Income Tax, Local Services Tax, and Philadelphia or Pittsburgh business taxes if you operate there.',
  annualReportDue: 'September 30',
  annualReportNote: '$7 for for-profit LLCs, due each year by September 30',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Choose a Pennsylvania-compliant LLC name',
      description:
        'Your name must be distinguishable on Pennsylvania Department of State records and include an LLC designator such as "limited liability company," "company," "limited," or an accepted abbreviation like LLC, L.L.C., Ltd., or Co. Do not use words that imply a different entity type, like Corporation or Inc. Restricted words tied to banking, insurance, public utilities, education, or licensed professional services may require approval or special handling. Search the Pennsylvania business database before you file. If you are not ready to form yet, a name reservation is optional and holds the name for 120 days for $70.',
    },
    {
      title: 'Decide on a registered office or CROP',
      description:
        'Pennsylvania does not ask you to appoint a statutory agent. Every LLC must list either a real Pennsylvania registered office street address or the name and county of venue of a Commercial Registered Office Provider. A P.O. Box alone does not work. You can use your own Pennsylvania street address, but it becomes part of the public filing and someone needs to reliably receive legal papers there. A CROP is the cleaner default if you work from home, live outside Pennsylvania, or want your address off the public record. Have a contract with the CROP before listing it.',
    },
    {
      title: 'File the Certificate of Organization',
      description:
        'File Form DSCB:15-8821, Certificate of Organization - Domestic Limited Liability Company, through Business Filing Services at file.dos.pa.gov or by mail with the Department of State. The filing fee is $125. Required items include the LLC name, the registered office address or CROP name and county, organizer name, effective date, and organizer signature. Pennsylvania does not require member names, ownership percentages, duration, or a member-managed vs. manager-managed election on the standard filing. Restricted Professional Company and Benefit Company elections are special cases - do not check those boxes unless they actually apply.',
    },
    {
      title: 'Include the New Entity Docketing Statement',
      description:
        'This is the step easy guides bury. Pennsylvania requires the New Entity Docketing Statement, Form DSCB:15-134A, with the Certificate of Organization. There is no separate fee. It collects the business name, tax-report contact, EIN if you already have one, business activity, and fiscal year end. Online filings build this into the workflow. If you file by mail, attach the docketing statement or your filing can be rejected.',
    },
    {
      title: 'Wait for approval, or use in-person expedite if timing matters',
      description:
        'For a normal online filing, use 3-7 business days as a conservative planning estimate and check file.dos.pa.gov for the Department of State live processing date before you submit. Mail filings take longer because of mail transit. If timing is critical for a contract, lease, or launch, Pennsylvania offers in-person expedited service in Harrisburg: same-day for $100, 3-hour for $300, or 1-hour for $1,000, with cutoff times. Do not assume a standard filing will clear by a specific date unless the portal backlog supports it.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'After the LLC is approved, get an EIN directly from the IRS. It is free. The online EIN application usually issues the number immediately during IRS business hours. A single-member LLC may not always be legally required to have an EIN, but most banks ask for one, and it keeps your Social Security number off routine business paperwork. Never pay an LLC service just to get an EIN.',
    },
    {
      title: 'Write an operating agreement and open a business bank account',
      description:
        'Pennsylvania does not require you to file an operating agreement, and state law recognizes operating agreements that are written, oral, implied, or a mix. Still, put it in writing. Without one, Pennsylvania default rules control issues like management authority, voting, distributions, transfers, and member exits. For a single-member LLC, it helps document that the LLC is separate from you. For a multi-member LLC, it is the document that prevents small disagreements from becoming expensive disputes. Banks commonly ask for it, especially when there is more than one owner.',
    },
    {
      title: 'Handle taxes, licensing, and the annual report',
      description:
        'Pennsylvania does not have a general state business license, but your business may need sales tax registration through myPATH, employer withholding, professional licensing, city registration, or local business tax accounts. Every Pennsylvania LLC also needs to file the new annual report by September 30 each year. The fee is $7 for for-profit LLCs. For an LLC formed in 2026, the first annual report is due September 30, 2027. Beginning with 2027 reports, missing the deadline by six months can lead to administrative dissolution, so calendar it as soon as the LLC is approved.',
    },
  ],
  costBreakdown: [
    {
      item: 'Certificate of Organization (DSCB:15-8821)',
      cost: '$125',
      required: 'Yes',
      notes: 'One-time state filing fee',
    },
    {
      item: 'New Entity Docketing Statement (DSCB:15-134A)',
      cost: '$0',
      required: 'Yes',
      notes: 'Required with the Certificate',
    },
    { item: 'Name reservation', cost: '$70', required: 'Optional', notes: 'Holds name for 120 days' },
    {
      item: 'Commercial Registered Office Provider',
      cost: '$49-$300/yr',
      required: 'Optional',
      notes: 'Use for privacy or if you lack a PA address; verify provider pricing before purchase',
    },
    {
      item: 'Fictitious name / DBA',
      cost: '$70',
      required: 'Optional',
      notes: 'Publication only when an individual is named as a party',
    },
    {
      item: 'DBA publication, when applicable',
      cost: '~$50-$300',
      required: 'Conditional',
      notes: 'Applies to fictitious-name registration when an individual is a party',
    },
    {
      item: 'Expedited same-day',
      cost: '+$100',
      required: 'Optional',
      notes: 'In-person in Harrisburg, received before 10 a.m.',
    },
    {
      item: 'Expedited 3-hour',
      cost: '+$300',
      required: 'Optional',
      notes: 'In-person in Harrisburg, received before 2 p.m.',
    },
    {
      item: 'Expedited 1-hour',
      cost: '+$1,000',
      required: 'Optional',
      notes: 'In-person in Harrisburg, received before 4 p.m.',
    },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'Get it directly from the IRS' },
    {
      item: 'Operating agreement',
      cost: 'Free if DIY',
      required: 'Recommended',
      notes: 'Internal document, not filed with PA',
    },
    {
      item: 'Sales/use tax license',
      cost: '$0',
      required: 'Conditional',
      notes: 'Register through myPATH if you sell taxable goods or services',
    },
    {
      item: 'Philadelphia Commercial Activity License',
      cost: '$0',
      required: 'Conditional',
      notes: 'Required if doing business in Philadelphia',
    },
    {
      item: 'Annual report',
      cost: '$7/yr',
      required: 'Yes (recurring)',
      notes: 'Due September 30 for for-profit LLCs',
    },
    {
      item: 'Change of registered office',
      cost: 'See fee schedule',
      required: 'Only when changing',
      notes: 'Use the official PA fee schedule until the current fee is confirmed',
    },
    {
      item: 'Certified copies',
      cost: 'See fee schedule',
      required: 'Optional',
      notes: 'Verify current Department of State fees before ordering',
    },
    {
      item: 'Total (bare-minimum DIY, year 1)',
      cost: '$125',
      isEmphasized: true,
      notes: 'State filing only; first annual report due the next year',
    },
    {
      item: 'Total (with CROP, year 1)',
      cost: '$174-$425',
      isEmphasized: true,
      notes: 'Filing fee plus typical registered-office provider pricing',
    },
    {
      item: 'Total (recurring, year 2+)',
      cost: '$7-$307/yr',
      isEmphasized: true,
      notes: 'Annual report plus optional CROP renewal',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Pennsylvania?',
      answer:
        'The state filing fee is $125 for the Certificate of Organization. The required New Entity Docketing Statement has no separate fee. If you use your own Pennsylvania registered office address, $125 is the bare-minimum DIY cost. If you use a Commercial Registered Office Provider for privacy, expect another roughly $49-$300 per year, with pricing verified before you buy.',
    },
    {
      question: 'What is the Pennsylvania LLC filing fee?',
      answer:
        'The Pennsylvania LLC filing fee is $125 for Form DSCB:15-8821, the Certificate of Organization. Online and mail filings use the same base state fee. Veterans and reservist-owned small businesses may qualify for a state filing fee exemption if they meet the requirements and provide the needed proof.',
    },
    {
      question: 'How long does it take to get a Pennsylvania LLC?',
      answer:
        'Use 3-7 business days as a conservative planning estimate for online filings, then check the live processing date at file.dos.pa.gov before you file. The Department of State publishes the current receipt-to-processing gap there. Mail filings can take longer because of transit. If timing matters, Pennsylvania offers in-person expedited service in Harrisburg for same-day, 3-hour, or 1-hour processing at extra cost.',
    },
    {
      question: 'Does Pennsylvania require a registered agent for an LLC?',
      answer:
        'Not in the usual registered-agent language. Pennsylvania requires a registered office: either a physical Pennsylvania street address or a Commercial Registered Office Provider, known as a CROP. The CROP model is Pennsylvania-specific. If another guide tells you to appoint a Pennsylvania statutory agent, that is usually copied terminology from another state.',
    },
    {
      question: 'Can I use my home address as my Pennsylvania registered office?',
      answer:
        'Yes, if it is a qualifying Pennsylvania street address and you are comfortable with it appearing on public business records. The tradeoff is privacy and reliability. If you work from home, travel often, or do not want your address public, use a CROP instead.',
    },
    {
      question: 'What is a CROP in Pennsylvania?',
      answer:
        'A CROP is a Commercial Registered Office Provider. It is a company that contracts with you to provide the registered office for service of process and official notices. You list the CROP name and county of venue on the Pennsylvania filing instead of listing your own street address. Have the contract in place before you name the CROP.',
    },
    {
      question: 'Does Pennsylvania require an operating agreement?',
      answer:
        'Pennsylvania does not require a written operating agreement to be filed with the state. You should still have one. It sets ownership, management, voting, distributions, transfers, buyouts, and what happens if a member leaves. Without one, Pennsylvania default LLC rules control, and those defaults may not match what the owners intended.',
    },
    {
      question: 'Does Pennsylvania require an annual report for LLCs?',
      answer:
        'Yes. Pennsylvania replaced the old decennial report system with an annual report requirement beginning in 2025. LLCs file by September 30 each year. The fee is $7 for for-profit LLCs and $0 for LLCs with a not-for-profit purpose. For an LLC formed in 2026, the first annual report is due September 30, 2027.',
    },
    {
      question: 'What happens if I miss the Pennsylvania annual report?',
      answer:
        'For the transition years, Pennsylvania is phasing in enforcement. The consumer-relevant rule is this: beginning with 2027 reports, an LLC that fails to file within six months of the September 30 deadline can be administratively dissolved and can lose protection of its name. Put a recurring reminder on your calendar as soon as the LLC is approved.',
    },
    {
      question: 'Does Pennsylvania require newspaper publication for an LLC?',
      answer:
        'No. Pennsylvania does not require newspaper publication when you form an LLC. Do not confuse this with fictitious-name registration. Under 54 Pa.C.S. § 311(g), Pennsylvania requires publication of a fictitious-name registration only when an individual is named as a party. If your LLC alone registers the fictitious name and no individual is listed, publication is not required.',
    },
    {
      question: 'Is the Pennsylvania formation document called Articles of Organization?',
      answer:
        'No. Pennsylvania uses the Certificate of Organization, Form DSCB:15-8821. "Articles of Organization" is the term used in many other states, but it is not the Pennsylvania form name.',
    },
    {
      question: 'Do Pennsylvania LLCs need BOI reports?',
      answer:
        'Generally no, as of April 2026. Under FinCEN’s interim final rule published in March 2025, domestic U.S. entities, including Pennsylvania LLCs, and their U.S.-person beneficial owners are exempt from BOI reporting. Because the rule is still a moving federal compliance issue, recheck fincen.gov/boi before publishing or relying on this for a live filing.',
    },
    {
      question: 'Does Pennsylvania have a Commercial Activity Tax?',
      answer:
        'No. Pennsylvania does not have Ohio’s Commercial Activity Tax. Default-taxed Pennsylvania LLCs are usually pass-through entities, and members report their share of income. Pennsylvania Personal Income Tax is 3.07%. LLCs taxed as C-corps are a different story and can owe Pennsylvania Corporate Net Income Tax.',
    },
    {
      question: 'Do I need a business license for a Pennsylvania LLC?',
      answer:
        'Pennsylvania does not have one general statewide business license for every LLC. You may still need sales tax registration through myPATH, employer withholding accounts, professional or industry licenses, a Philadelphia Commercial Activity License, or local business tax registration depending on what you do and where you operate.',
    },
    {
      question: 'Can a non-resident form a Pennsylvania LLC?',
      answer:
        'Yes. Pennsylvania does not require LLC members or organizers to live in the state. The practical requirement is the registered office. If you do not have a Pennsylvania street address you are willing to use, hire a CROP and list the provider correctly on the filing.',
    },
    {
      question: 'Does Pennsylvania allow Series LLCs?',
      answer:
        'No. Pennsylvania does not authorize formation of domestic Series LLCs. A foreign Series LLC from another state may create separate registration questions, but the liability treatment of series in Pennsylvania is not something a first-time founder should build around casually.',
    },
  ],
  proscons: {
    pros: [
      'The $125 formation fee is reasonable, and the $7 annual report is one of the cheapest recurring state LLC filings in the country.',
      'Pennsylvania does not require member names or ownership percentages on the basic Certificate of Organization, which helps privacy compared with states that ask for more owner detail up front.',
      'There is no LLC formation publication requirement, so you avoid the newspaper-cost surprise that hits founders in states like New York.',
      'The CROP system gives home-based and out-of-state founders a clean way to satisfy the registered-office rule without putting a personal address on the filing.',
    ],
    cons: [
      'The terminology is easy to get wrong: Certificate of Organization, registered office, and CROP are the Pennsylvania terms - not Articles of Organization or statutory agent.',
      'The annual report is new enough that founders who remember the old decennial report can easily miss the September 30 requirement.',
      'Pennsylvania local taxes are genuinely fragmented, especially if you operate in Philadelphia, Pittsburgh, or municipalities with local business privilege or earned income tax rules.',
      'Pennsylvania does not let you form a domestic Series LLC, so multi-asset or multi-location structures may need a different entity plan.',
    ],
  },
};

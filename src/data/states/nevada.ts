import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const nevada: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Nevada (${GUIDE_YEAR}): $425 to Form, $350/Year & Steps`,
  seoDescription:
    'A Nevada LLC costs $425 to form and $350 a year to keep. The three filings, the $200 State Business License, and why it rarely helps if you live elsewhere.',
  lastUpdated: '2026-10-05',
  intro:
    "A Nevada LLC costs $425 to form: $75 for the Articles of Organization, $150 for the Initial List of Managers or Managing Members, and $200 for the State Business License. You file all three together with the Nevada Secretary of State, online through SilverFlume or by mail. After that, the Annual List ($150) and State Business License renewal ($200) are due together by the last day of your formation anniversary month every year, so plan on $350 a year. Nevada has no personal income tax, no publication requirement, and its Commerce Tax only applies above $4 million in Nevada gross revenue. If you live and work in Nevada, form here. If you live somewhere else, a Nevada LLC doesn't move your taxes to Nevada. Your home state still taxes the business and usually makes you register there too, so you'd pay both states plus a Nevada registered agent.",
  whatYoullNeed:
    'To form a Nevada LLC, you will need a name that includes "Limited-Liability Company," "Limited Liability Company," "Limited Company," "Limited," "Ltd.," "L.L.C.," "L.C.," "LLC," or "LC," a registered agent with a physical Nevada street address who signs the acceptance, the name and address of each initial manager or managing member, an organizer to sign, and $425 for the Articles of Organization, Initial List, and State Business License.',
  closing:
    "Form in Nevada if you live here or the business actually operates here. It costs $425 to form and $350 a year after that, with no state income tax and no Commerce Tax until Nevada revenue passes $4 million. If you live in California, Utah, or anywhere else, form in your home state. A Nevada LLC run from another state still registers and pays fees back home, so Nevada's $350 a year and a Nevada registered agent become extra costs, not savings. Nevada also isn't the private option some services advertise: managers or managing members go on the public Initial and Annual Lists. Two dates go on your calendar: the last day of your anniversary month for the $350 Annual List and business license renewal, and your city or county business license renewal on its local schedule. You can be your own registered agent if you have a Nevada street address where you're available during business hours.",
  inlineCtaDescription:
    "Nevada requires a registered agent with a physical Nevada street address who is available during normal business hours. A P.O. box only works as a mailing address. If you live in Nevada and don't mind that address on the public record, you can be your own noncommercial registered agent for free. A commercial registered agent keeps your home address off the agent line and forwards legal papers and the state's 90-day renewal notice. Northwest includes the first year with formation, then charges $125 a year. It won't remove your name from the Annual List; Nevada publishes managers or managing members no matter who your agent is.",
  sidebarCtaDescription:
    "Live outside Nevada, or don't want your home address on Nevada's public records? A commercial registered agent supplies the Nevada street address and forwards your renewal notices.",
  officialLinks: [
    { label: 'SilverFlume: Nevada online business filing', url: 'https://www.nvsilverflume.gov/' },
    { label: 'Nevada Secretary of State business forms', url: 'https://bizhub.nv.gov/business-forms' },
    {
      label: 'LLC formation packet and fee schedule (Articles, Initial List, State Business License)',
      url: 'https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/LLC_Formation_V4_1_9e5c396592.pdf',
    },
    {
      label: 'Annual or Amended List and State Business License instructions',
      url: 'https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/Annual_List_and_State_Business_License_Non_Corps_Final_6904713d13.pdf',
    },
    {
      label: 'Customer order form and expedite guidelines',
      url: 'https://content.bizhub.nv.gov/uploads/nvsosinfohub/Customer_Order_Form_4f69b9cf5d.pdf',
    },
    { label: 'Nevada LLC law, fees, and annual list (NRS Chapter 86)', url: 'https://www.leg.state.nv.us/NRS/NRS-086.html' },
    { label: 'State Business License law (NRS Chapter 76)', url: 'https://www.leg.state.nv.us/NRS/NRS-076.html' },
    { label: 'Registered agents (NRS Chapter 77)', url: 'https://www.leg.state.nv.us/NRS/NRS-077.html' },
    { label: 'Commerce Tax (Nevada Department of Taxation)', url: 'https://tax.nv.gov/tax-types/commerce-tax/' },
    { label: 'Commerce Tax law (NRS Chapter 363C)', url: 'https://www.leg.state.nv.us/NRS/NRS-363C.html' },
    { label: 'Modified Business Tax (Nevada Department of Taxation)', url: 'https://tax.nv.gov/tax-types/modified-business-tax/' },
    { label: 'Nevada Constitution (Art. 10, Sec. 1: no personal income tax)', url: 'https://www.leg.state.nv.us/Const/NvConst.html' },
    { label: 'FinCEN BOI reporting', url: 'https://www.fincen.gov/boi' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    "Nevada's constitution bars a personal income tax on wages or personal income. A default single-member or multi-member LLC passes profit to your personal return, and Nevada adds nothing. Federal income tax and self-employment tax still apply.",
    "The Commerce Tax only applies to businesses with more than $4 million in Nevada gross revenue in a fiscal year (July 1 to June 30). Under NRS 363C.200, a business at $4 million or less owes nothing and can't be required to file a return. Above the threshold, the return is due 45 days after June 30, and the rate depends on your industry.",
    'If you have employees, you pay the Modified Business Tax, a quarterly payroll tax filed with the Department of Taxation. For most employers it is 1.17% of wages above the first $50,000, and every employer files the return even when nothing is owed. A solo owner with no employees has no MBT.',
    "Every Nevada LLC pays the $200 State Business License each year, even with no revenue. The home-based business exemption applies only to sole proprietors and general partnerships, not LLCs.",
    'U.S.-formed LLCs, including Nevada LLCs, are exempt from FinCEN BOI reporting under a final rule effective August 14, 2026. Recheck fincen.gov/boi before filing, because the federal rule has changed several times.',
  ],
  comparisonRows: [
    {
      state: 'Nevada',
      annualReport: '$150 annual list + $200 state business license, due last day of anniversary month',
      upfrontCost: '$425',
      ongoingStateCost: '$350/yr',
    },
    {
      state: 'California',
      annualReport: '$20 Statement of Information every 2 years',
      upfrontCost: '$70',
      ongoingStateCost: '$800/yr annual tax + $20 every 2 years',
    },
    {
      state: 'Utah',
      annualReport: '$18/yr renewal, due in anniversary month',
      upfrontCost: '$59',
      ongoingStateCost: '$18/yr + local business license',
    },
    {
      state: 'Wyoming',
      annualReport: '$60 minimum, due 1st day of anniversary month',
      upfrontCost: '$100',
      ongoingStateCost: '$60+/yr',
    },
    {
      state: 'Delaware',
      annualReport: 'No annual report; $400 annual LLC tax due June 1',
      upfrontCost: '$110',
      ongoingStateCost: '$400/yr',
    },
  ],
  filingFee: 75,
  filingFeeDisplay: '$75 Articles + $150 Initial List + $200 State Business License = $425',
  filingFeeNote:
    'All three are filed together at formation. Paying by card on the Secretary of State order form adds a 2.5% processing fee.',
  annualReportFee: 350,
  filingTime:
    "Nevada doesn't publish a standard processing time. Regular filings are processed in the order received, and filing online through SilverFlume is the state's recommended way to avoid delays. If you need a guaranteed turnaround, pay for 24-hour, 2-hour, or 1-hour expedite.",
  filingTimeShort: 'Not published; expedite available',
  expeditedTime:
    '24-hour expedite costs an extra $125 per filing. 2-hour expedite costs $500 and 1-hour expedite costs $1,000 per item, on top of the regular fees. The clock starts when the Secretary of State receives a filing with no errors.',
  expeditedFee: 125,
  filingAgency: 'Nevada Secretary of State, Commercial Recordings Division',
  filingAgencyUrl: 'https://www.nvsilverflume.gov/',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Nevada has no personal income tax. The Commerce Tax applies only above $4 million of Nevada gross revenue a year. Employers pay the Modified Business Tax (1.17% of wages above $50,000 for most businesses).',
  stateTax:
    "A default Nevada LLC is a pass-through, and Nevada doesn't tax personal income, so the owner pays only federal income and self-employment tax on the profit. The LLC's recurring state cost is the $350 Annual List and State Business License.",
  annualReportDue: 'Last day of your formation anniversary month, every year',
  annualReportNote:
    '$150 Annual List of Managers or Managing Members plus $200 State Business License renewal, filed together: $350 a year. Filing late adds a $75 list penalty and a $100 business license penalty, and the LLC goes into default.',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Confirm Nevada is the right state for this LLC',
      description:
        "Form in Nevada if you live here or the business operates here: an office, employees, or the place you actually do the work. If you live in another state, that state will generally treat a Nevada LLC as a foreign LLC doing business there, so you'd pay its fees and taxes anyway, plus Nevada's $350 a year and a Nevada registered agent. Nevada's lack of income tax only helps people who live and work in Nevada. See the section below on forming here from out of state before you file.",
    },
    {
      title: 'Choose a name and check that it is available',
      description:
        'The name must include "Limited-Liability Company," "Limited Liability Company," "Limited Company," or "Limited," or one of the abbreviations "Ltd.," "L.L.C.," "L.C.," "LLC," or "LC." It must be distinguishable from every other entity name on file with the Secretary of State; adding a logo-style spelling or a trademark doesn\'t make it different. Some words, like bank, trust, engineering, architect, or accounting, need approval from a state board first. Search the Secretary of State business entity search before you file. Reserving a name is optional: $25 holds it for 90 days. Skip it unless you need to lock the name before you\'re ready to file.',
    },
    {
      title: 'Appoint a Nevada registered agent',
      description:
        'Every Nevada LLC needs a registered agent with a physical Nevada street address, available during normal business hours to receive legal papers. A P.O. box can only be the mailing address. Nevada recognizes three kinds: an individual 18 or older (a noncommercial registered agent), an office or position within your own business, or a commercial registered agent, which is a company registered with the state to serve as agent. If you use a commercial agent, the form only asks for its name. The agent signs a Certificate of Acceptance on the Articles, or a separate acceptance form. You can be your own agent for free if you live in Nevada. Your street address then goes on the public record.',
    },
    {
      title: 'File the Articles of Organization, Initial List, and State Business License ($425)',
      description:
        'Nevada forms an LLC with three filings submitted at the same time: the Articles of Organization ($75), the Initial List of Managers or Managing Members ($150), and the State Business License ($200). File them together online through SilverFlume, or mail them with the Customer Order form to the Secretary of State in Carson City. The Articles ask for the LLC name, registered agent, whether it is managed by managers or by its members, the name and address of each initial manager or member, and the organizer\'s name, address, and signature. The Initial List repeats the managers or managing members with an address for each, and lists your Nevada business location; if you have none, the registered agent\'s address is used. A manager or managing member who is a real person must sign it. For addresses, Nevada accepts a business address instead of your home.',
    },
    {
      title: 'Wait for approval, or pay to expedite',
      description:
        "Nevada doesn't publish a standard processing time. Regular filings are handled in the order received, and the Secretary of State says filing online can reduce delays. If you need the LLC by a specific date, 24-hour expedite is $125 extra per filing, 2-hour is $500 per item, and 1-hour is $1,000 per item. The clock starts when a filing arrives with no errors, so a mistake can cost you the expedite. Most first-time founders don't need it.",
    },
    {
      title: 'Get a free EIN, write an operating agreement, and open a bank account',
      description:
        "Once the LLC is filed, get an EIN free from IRS.gov. Nevada law doesn't require an operating agreement, and you never file one with the state. Write one anyway: it records who owns the LLC and how decisions get made, and banks often ask for it. SilverFlume offers an optional Digital Operating Agreement, which the Secretary of State does not file or record. Then open a business bank account so the LLC's money stays separate from yours.",
    },
    {
      title: 'Get your city or county business license and any tax registrations',
      description:
        "The State Business License doesn't replace a local one. Nevada law says the state license is in addition to any license your city or county requires, so check with your city, or your county if you're in an unincorporated area, before you start. If you sell taxable goods, register with the Nevada Department of Taxation for sales tax. If you hire employees, register for the Modified Business Tax and unemployment insurance. The Commerce Tax only becomes a filing once Nevada gross revenue tops $4 million in a fiscal year.",
    },
    {
      title: 'Renew every year by the last day of your anniversary month ($350)',
      description:
        "Every year, file the Annual List of Managers or Managing Members ($150) and renew the State Business License ($200) together, by the last day of the month your LLC was formed. Form in March 2026 and your first renewal is due by March 31, 2027. The Secretary of State sends a notice 90 days before the deadline. Not getting it doesn't excuse a late filing. A list filed more than 90 days early counts as an amended list for the previous year, so file inside that 90-day window. Filing late adds $175 in penalties ($75 for the list and $100 for the license), and the LLC goes into default. If it stays in default, Nevada revokes the charter and the LLC loses the right to do business. Reinstating costs $300 plus every missed fee and penalty.",
    },
  ],
  sections: [
    {
      id: 'nevada-llc-if-you-dont-live-in-nevada',
      heading: "Should you form a Nevada LLC if you don't live in Nevada?",
      summary:
        "Usually not. Nevada's lack of a personal income tax only helps if you live and work in Nevada. If you run your business from California, Utah, or anywhere else, your home state taxes that income and generally requires your Nevada LLC to register there as a foreign LLC. You pay Nevada's $425 and $350 a year on top of everything your home state already charges, plus a Nevada registered agent.",
      facts: [
        {
          label: 'What Nevada charges you',
          detail:
            "$425 to form, then $350 every year for the Annual List and State Business License. An LLC formed under Nevada law owes the State Business License even if it does no business in Nevada; having a Nevada registered agent alone counts as conducting business under NRS 76.100.",
        },
        {
          label: 'What your home state still charges',
          detail:
            "A foreign LLC registration and that state's annual fee or tax. In California, that's $70 to register and the same $800 annual tax a California LLC pays.",
        },
        {
          label: 'Registered agent',
          detail:
            "Required, at a Nevada street address. If you don't live in Nevada, that means a commercial agent. Renewal runs about $119 to $125 a year with the services we track.",
        },
        {
          label: 'Taxes',
          detail:
            "Nevada not taxing personal income doesn't change what your home state taxes. Profit from work you do where you live is taxed there, whatever state the LLC was formed in.",
        },
        {
          label: 'Example: a California freelancer',
          detail:
            'A California LLC costs $70 to file, then $800 a year plus $20 every two years. A Nevada LLC run from California costs $425 plus $70 for California foreign registration up front, then about $1,275 a year: $350 to Nevada, $800 to California, and roughly $125 for a Nevada agent. That is about $475 more every year for the same business.',
        },
        {
          label: 'Privacy',
          detail:
            "Nevada isn't anonymous. The Articles list each initial manager or managing member, and the Initial and Annual Lists put their names on the public record every year. Lists filed online show everyone you list. Wyoming and Delaware don't ask for owner names on their formation filings, and your home state's foreign registration may publish them anyway.",
        },
      ],
      paragraphs: [
        "Form in Nevada if you live here or the business really operates here. If you live in another state and heard Nevada is a tax haven for LLCs, it isn't for a one-person business run from somewhere else. Form where you live, and skip paying two states for one business.",
      ],
      related: { label: 'Compare which state to form your LLC in', href: '/best-state/' },
    },
    {
      id: 'nevada-state-business-license',
      heading: 'The Nevada State Business License: the $200 a year every LLC pays',
      summary:
        "Nevada's State Business License is separate from forming the LLC and from your city or county license. Every Nevada LLC buys it at formation and renews it with the Annual List each year for $200. It's the reason a Nevada LLC costs $425 to start instead of $225.",
      facts: [
        {
          label: 'Who needs it',
          detail:
            'Every LLC formed in Nevada, whether or not it makes money, plus any business with an office in Nevada, a Nevada registered agent, or people working in Nevada.',
        },
        {
          label: 'Cost',
          detail: '$200 at formation and $200 every year after, filed with the Initial and Annual Lists. Corporations pay $500; LLCs pay $200.',
        },
        {
          label: 'Who is exempt',
          detail:
            "For an LLC, only three cases: a governmental entity, a business licensed by the Nevada Division of Insurance, or an LLC with 501(c) tax-exempt status from the IRS. The home-based business exemption is only for sole proprietors and general partnerships. Forming an LLC means you pay the $200.",
        },
        {
          label: 'Late penalty',
          detail:
            'A late renewal adds $100 to the $200 fee. Because the license renews with the Annual List, a late renewal also puts the LLC in default, the same as a missed Annual List.',
        },
        {
          label: 'Local license is separate',
          detail:
            "State law says the State Business License is in addition to any license your city or county requires. Check your city, or your county if you're in an unincorporated area, for its own license, fees, and home-business rules.",
        },
      ],
      paragraphs: [
        "If you're a freelance designer working from a home office in Henderson, you might not have needed a State Business License as a sole proprietor under the home-based exemption. Once you form an LLC, you do. Count the $200 a year as part of the cost of the LLC before you decide to form one.",
      ],
      related: { label: 'Estimate your self-employment tax', href: '/self-employment-tax/calculator/' },
    },
    {
      id: 'nevada-annual-list-deadline',
      heading: "Nevada's Annual List: when it's due and what happens if you miss it",
      summary:
        "Nevada's version of an annual report is the Annual List of Managers or Managing Members. It's due with the State Business License renewal by the last day of your formation anniversary month, every year, for a combined $350.",
      facts: [
        {
          label: 'When it is due',
          detail:
            'By the last day of the month your LLC was formed. Form on June 10, 2026, and your first Annual List is due by June 30, 2027.',
        },
        {
          label: 'Filing window',
          detail:
            "The Secretary of State sends a notice 90 days before the deadline. File within those 90 days; a list filed more than 90 days early counts as an amended list for the previous year and doesn't satisfy this year's.",
        },
        {
          label: 'What it asks',
          detail:
            'The names and titles of the managers, or managing members if there are no managers, with a residence or business address for each, plus your Nevada business location for the license. It must be signed by a real person in management.',
        },
        {
          label: 'If you file late',
          detail:
            'The LLC goes into default and owes a $75 list penalty plus a $100 business license penalty on top of the $350: $525 total.',
        },
        {
          label: 'Revocation',
          detail:
            'If the LLC stays in default, Nevada revokes its charter and its right to do business. Under NRS 86.274, revocation comes on the first day of the anniversary of the month after the missed due date, about a year later.',
        },
        {
          label: 'Reinstatement',
          detail:
            "Reinstating a revoked LLC costs $300 plus every missed list fee, business license fee, and penalty. After 5 years revoked, the LLC can't be reinstated.",
        },
      ],
      paragraphs: [
        "If nothing changed, the renewal is a short online filing you can do yourself on SilverFlume. The state amount is $350; any notice asking for more is either adding penalties or not from the state.",
      ],
    },
  ],
  costPage: {
    seoTitle: `Nevada LLC Cost (${GUIDE_YEAR}): $425 to Form, $350/Year`,
    seoDescription:
      'A Nevada LLC costs $425 to form and $350 a year: the Articles, the Initial and Annual Lists, and the $200 State Business License every LLC pays.',
    intro:
      "A Nevada LLC costs $425 to form: $75 for the Articles of Organization, $150 for the Initial List of Managers or Managing Members, and $200 for the State Business License, all filed together. After that, the $150 Annual List and $200 business license renewal are due together by the last day of your formation anniversary month, so plan on $350 a year. The cost people miss is that $200 license. Every Nevada LLC pays it, even a home-based one with no revenue, because the home-based exemption only covers sole proprietors and general partnerships.",
    formTotal: 425,
    annualDisplay: '$350/yr',
    yearOneTotal: 425,
    yearTwoTotal: 350,
    yearOneNote: 'Articles + Initial List + State Business License, own agent',
    yearTwoNote: 'Annual List + business license renewal, plus any local license',
    schedule: [
      {
        item: 'Articles, Initial List, and State Business License',
        cost: '$425',
        due: 'When you form. $75 + $150 + $200, filed together.',
      },
      {
        item: 'Annual List + State Business License renewal',
        cost: '$350',
        due: 'By the last day of your anniversary month, every year. File within the 90 days before the deadline.',
      },
      { item: 'Late penalties', cost: '+$175', due: '$75 for the list and $100 for the license. The LLC goes into default.' },
      { item: 'Reinstatement', cost: '$300+', due: 'Only if revoked, plus every missed fee and penalty. Not available after 5 years.' },
      { item: 'City or county business license', cost: 'Varies', due: 'Set by your city, or your county if unincorporated. Separate from the state license.' },
    ],
    verdict:
      "Form in Nevada only if you live here or the business operates here; otherwise form in your home state. File all three formation documents together online through SilverFlume for $425, and skip the $125 24-hour expedite unless a specific date depends on it. Be your own registered agent if you live in Nevada and don't mind your street address on the public record. Calendar the last day of your anniversary month for the $350 renewal, and file it inside the 90-day window so it counts for the current year.",
    faq: [
      {
        question: 'How much does an LLC cost in Nevada?',
        answer:
          "$425 to form: $75 for the Articles of Organization, $150 for the Initial List, and $200 for the State Business License. You can't file the Articles alone. After that, it's $350 a year. A commercial registered agent adds about $119 to $125 a year with the services we track.",
      },
      {
        question: 'What is the Nevada LLC annual fee?',
        answer:
          '$350: the $150 Annual List of Managers or Managing Members plus the $200 State Business License renewal, due together by the last day of your formation anniversary month. Filing late adds $175 in penalties, for $525 total, and puts the LLC in default. Reinstating a revoked LLC costs $300 plus every missed fee and penalty.',
      },
      {
        question: 'Does every Nevada LLC need the $200 State Business License?',
        answer:
          "Yes, with three narrow exceptions: governmental entities, businesses licensed by the Nevada Division of Insurance, and 501(c) tax-exempt LLCs. The home-based business exemption doesn't apply to LLCs. Your city or county license is a separate cost on top.",
      },
      {
        question: 'Is a Nevada LLC cheaper if I live in another state?',
        answer:
          "No. Your home state usually requires the Nevada LLC to register there as a foreign LLC, so you pay both states plus a Nevada registered agent. A California freelancer would pay about $1,275 a year for a Nevada LLC registered in California, versus $800 a year for a California LLC.",
      },
      {
        question: 'How much is a registered agent in Nevada?',
        answer:
          "Free if you serve yourself: you need a Nevada street address where you're available during business hours, and that address goes on the public record. A commercial registered agent runs about $119 to $125 a year with the services we track, and out-of-state owners need one.",
      },
    ],
    sourceUrls: [
      'https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/LLC_Formation_V4_1_9e5c396592.pdf',
      'https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/Annual_List_and_State_Business_License_Non_Corps_Final_6904713d13.pdf',
      'https://www.leg.state.nv.us/NRS/NRS-076.html',
      'https://www.leg.state.nv.us/NRS/NRS-086.html',
    ],
  },
  costBreakdown: [
    { item: 'Articles of Organization', cost: '$75', required: 'Yes', notes: 'Filed at formation' },
    {
      item: 'Initial List of Managers or Managing Members',
      cost: '$150',
      required: 'Yes',
      notes: 'Filed with the Articles',
    },
    {
      item: 'State Business License',
      cost: '$200',
      required: 'Yes',
      notes: 'Filed with the Initial List; LLCs only exempt if government, insurance, or 501(c)',
    },
    { item: 'Name reservation', cost: '$25', required: 'Optional', notes: 'Holds the name for 90 days' },
    {
      item: 'Registered agent service',
      cost: '$0 if you qualify / about $119-$125/yr commercial',
      required: 'Yes (agent); commercial optional for residents',
      notes: 'Non-residents need a commercial agent',
    },
    { item: 'Expedited: 24-hour', cost: '+$125 per filing', required: 'Optional', notes: 'On top of regular fees' },
    { item: 'Expedited: 2-hour', cost: '+$500 per item', required: 'Optional', notes: 'On top of regular fees' },
    { item: 'Expedited: 1-hour', cost: '+$1,000 per item', required: 'Optional', notes: 'On top of regular fees' },
    {
      item: 'Card processing fee (order form)',
      cost: '2.5%',
      required: 'If paying by card',
      notes: 'Non-refundable; pay by check to avoid it',
    },
    { item: 'Certificate of Good Standing', cost: '$50', required: 'Optional', notes: 'Some banks ask for it' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    {
      item: 'Operating agreement',
      cost: 'Free if you draft it yourself',
      required: 'Recommended',
      notes: 'Not required; not filed',
    },
    { item: 'City or county business license', cost: 'Varies by locality', required: 'Usually', notes: 'Separate from the state license' },
    {
      item: 'Annual List + State Business License renewal',
      cost: '$350/yr',
      required: 'Yes (recurring)',
      notes: '$150 + $200, due last day of anniversary month',
    },
    {
      item: 'Late penalties',
      cost: '+$175',
      required: 'Only if late',
      notes: '$75 list penalty + $100 business license penalty',
    },
    { item: 'Reinstatement after revocation', cost: '$300 + back fees', required: 'Only if revoked', notes: 'Not available after 5 years' },
    {
      item: 'Commerce Tax',
      cost: '$0 under $4 million',
      required: 'Only above $4M Nevada gross revenue',
      notes: 'Return due 45 days after June 30',
    },
    {
      item: 'Foreign LLC registration in your home state',
      cost: 'Varies (California: $70)',
      required: 'If you operate outside Nevada',
      notes: "Plus that state's annual fees",
    },
    {
      item: 'Total (bare minimum DIY)',
      cost: '$425 to form, then $350/yr',
      isEmphasized: true,
      notes: 'Self-serve agent, before local license fees',
    },
    {
      item: 'Total (typical first year with commercial agent)',
      cost: '$425-$550, then about $475/yr',
      isEmphasized: true,
      notes: 'Some services include the first agent year; $350 state + ~$125 agent after',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Nevada?',
      answer:
        "$425 in state fees: $75 for the Articles of Organization, $150 for the Initial List of Managers or Managing Members, and $200 for the State Business License, all filed together. After that, it's $350 a year for the Annual List and business license renewal. A commercial registered agent adds about $119 to $125 a year with the services we track, and most businesses also pay a city or county license fee.",
    },
    {
      question: 'What is the Nevada LLC filing fee?',
      answer:
        "The Articles of Organization alone cost $75. You can't file them by themselves. The Initial List ($150) and State Business License ($200) have to go in at the same time, so the real filing cost is $425. Expedite is extra: $125 per filing for 24-hour service, $500 for 2-hour, or $1,000 for 1-hour.",
    },
    {
      question: 'How much does a Nevada LLC cost per year?',
      answer:
        '$350: the $150 Annual List of Managers or Managing Members plus the $200 State Business License renewal, due together by the last day of your formation anniversary month. Filing late adds $175 in penalties.',
    },
    {
      question: 'How long does it take to form an LLC in Nevada?',
      answer:
        "Nevada doesn't publish a standard processing time. Filings are handled in the order received, and the Secretary of State says online filing through SilverFlume can reduce delays. If you need a guaranteed turnaround, 24-hour expedite is $125 extra per filing, and 2-hour ($500) and 1-hour ($1,000) service are available.",
    },
    {
      question: 'Where do I file a Nevada LLC?',
      answer:
        'With the Nevada Secretary of State, online through SilverFlume at nvsilverflume.gov, or by mail or in person in Carson City or Las Vegas. The formation packet includes the Articles of Organization, the Initial List, and the State Business License application.',
    },
    {
      question: 'What is the formation document called in Nevada?',
      answer:
        'Articles of Organization. Nevada also requires an Initial List of Managers or Managing Members and a State Business License application with it, so a Nevada formation is three filings, not one.',
    },
    {
      question: 'Does Nevada require a registered agent?',
      answer:
        'Yes. Every Nevada LLC must have a registered agent with a physical Nevada street address, available during normal business hours. A P.O. box can only be a mailing address. The agent can be an individual 18 or older, an office or position within your company, or a commercial registered agent registered with the state.',
    },
    {
      question: 'Can I be my own registered agent in Nevada?',
      answer:
        "Yes, if you have a Nevada street address and are available there during business hours. You'd be a noncommercial registered agent, and your name and street address go on the public record. If you live outside Nevada or don't want your home address public, use a commercial registered agent.",
    },
    {
      question: 'Does Nevada require an operating agreement?',
      answer:
        "No. Nevada law makes it optional, and you don't file it with the state. Write one anyway. It sets ownership and decision rules, and banks often ask for it. SilverFlume's Digital Operating Agreement is optional and isn't filed or recorded by the state.",
    },
    {
      question: 'Do I need a Nevada State Business License for my LLC?',
      answer:
        "Yes. Every Nevada LLC buys the $200 State Business License at formation and renews it every year with the Annual List. The only LLC exemptions are governmental entities, businesses licensed by the Division of Insurance, and 501(c) tax-exempt LLCs. The home-based business exemption doesn't apply to LLCs. You'll usually need a city or county license as well.",
    },
    {
      question: 'Does Nevada require newspaper publication for an LLC?',
      answer:
        "No. Nevada's LLC filings are the Articles of Organization, Initial List, and State Business License. There's no newspaper publication step and no publication cost.",
    },
    {
      question: 'How is a Nevada LLC taxed?',
      answer:
        "By default, profit passes through to your personal return, and Nevada has no personal income tax, so you pay only federal income and self-employment tax on it. The Commerce Tax applies only above $4 million in Nevada gross revenue a year. If you have employees, you pay the quarterly Modified Business Tax, 1.17% of wages above $50,000 for most employers.",
    },
    {
      question: 'Does my Nevada LLC need to file a Commerce Tax return?',
      answer:
        "Only if Nevada gross revenue is more than $4 million in a fiscal year (July 1 to June 30). Under NRS 363C.200, the Department of Taxation can't require a return from a business at $4 million or less. Above that, the return is due 45 days after June 30; for the 2025-2026 year it was due August 14, 2026.",
    },
    {
      question: "Should I form a Nevada LLC if I don't live in Nevada?",
      answer:
        "Usually not. Your home state taxes the income you earn where you live and generally requires your Nevada LLC to register there as a foreign LLC. A California freelancer pays $800 a year for a California LLC, versus about $1,275 a year for a Nevada LLC registered in California with a Nevada agent.",
    },
    {
      question: 'Is a Nevada LLC anonymous?',
      answer:
        "No. The Articles list each initial manager or managing member, and the Initial and Annual Lists put the managers' or managing members' names and an address for each on the public record every year. You can give a business address instead of your home. If owner privacy matters most, Wyoming and Delaware don't require owner names on their formation filings.",
    },
    {
      question: 'Do Nevada LLCs need to file a BOI report?',
      answer:
        "No. FinCEN's final rule, effective August 14, 2026, exempts all U.S.-formed companies, including Nevada LLCs, from BOI reporting. Recheck fincen.gov/boi before filing in case the rule changes.",
    },
  ],
  proscons: {
    pros: [
      'No personal income tax, so LLC profit passed through to a Nevada resident owes no state income tax.',
      'No Commerce Tax or Commerce Tax return until Nevada gross revenue tops $4 million a year.',
      'No newspaper publication requirement.',
      'One combined yearly filing: the Annual List and State Business License renew together on SilverFlume.',
      'Paid expedite down to 1 hour when a deadline depends on it.',
    ],
    cons: [
      "$425 to form and $350 a year is high next to Utah ($59 and $18 a year) or Wyoming ($100 and $60 a year).",
      'The $200 State Business License applies to every LLC, including home-based ones that would be exempt as sole proprietors.',
      'Managers or managing members are listed by name on the public Initial and Annual Lists every year.',
      "If you live in another state, a Nevada LLC adds Nevada's fees and a registered agent without lowering your home state's taxes.",
      'A late renewal costs $175 in penalties and puts the LLC in default.',
    ],
  },
};

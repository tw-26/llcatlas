import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const oklahoma: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Oklahoma (${GUIDE_YEAR}): $100 Fee, Steps & Timeline`,
  seoDescription:
    'Form an Oklahoma LLC for $100. A $25 annual certificate is due every formation anniversary, and the only reminder goes to the email on file.',
  lastUpdated: '2026-10-05',
  intro:
    "An Oklahoma LLC costs $100 to form. You file Articles of Organization with the Oklahoma Secretary of State's Business Filing Department, online at sos.ok.gov or on paper. Paying by credit card adds a 4% service charge, so $104. There's no publication requirement, and Oklahoma LLCs don't pay franchise tax. The one recurring state cost is the $25 annual certificate, due every year on the anniversary of the date your Articles were filed. The Secretary of State sends the notice for it only to the email address on your filing. If that address changes or the notice lands in spam, nothing else reminds you. Miss it by more than 60 days and the LLC falls out of good standing. After three years unpaid, the state treats the Articles as canceled.",
  whatYoullNeed:
    'To form an Oklahoma LLC, you will need an available name with "Limited Liability Company," "Limited Company," or an abbreviation such as LLC or L.L.C., a street address for the principal place of business (no PO boxes), an email address you will keep checking, a registered agent with an Oklahoma street address, a term of existence (most people choose perpetual), one person to sign, and $100. Card payments add 4%.',
  closing:
    "If you live and work in Oklahoma, form here. At $100 to start and $25 a year, it's one of the cheapest states to keep an LLC alive, and a Wyoming or Delaware LLC would still have to register in Oklahoma as a foreign LLC for $300. Put one date on your calendar: the anniversary of your filing date, every year, for the $25 annual certificate. Don't rely on the state's email. If you change email providers, update the address with the Secretary of State. If you sell taxable goods, get the $20 sales tax permit from the Oklahoma Tax Commission before your first sale, and check whether your city requires a local license. You can be your own registered agent if you live in Oklahoma and can be reached at a street address during business hours. A professional agent, usually $50 to $150 a year, makes sense if you live out of state or don't want your home address on the agent line.",
  inlineCtaDescription:
    "Oklahoma requires a registered agent with an Oklahoma street address and an office open during regular business hours to accept legal papers. PO boxes don't qualify, and the address is public. If you live in Oklahoma and work from a real office, you can be your own agent, or name the LLC itself, for free. A professional registered agent, usually $50 to $150 a year, makes sense if you live outside Oklahoma, travel often, or work from home and don't want that address on the agent line. It doesn't hide your principal place of business, which the Articles also require as a street address, so pick one you're comfortable seeing published.",
  sidebarCtaDescription:
    "Live outside Oklahoma, or don't want your home address listed as your registered office? A professional registered agent covers the in-state address requirement for about $50 to $150 a year.",
  officialLinks: [
    { label: 'Oklahoma SOS Business Services', url: 'https://www.sos.ok.gov/business/default.aspx' },
    { label: 'Oklahoma SOS business forms and online filing', url: 'https://www.sos.ok.gov/business/forms.aspx' },
    { label: 'Oklahoma SOS fee schedule', url: 'https://www.sos.ok.gov/business/fees.aspx' },
    {
      label: 'Articles of Organization instructions (SOS Form 0074)',
      url: 'https://www.sos.ok.gov/forms/FM0074.PDF',
    },
    { label: 'Business entity FAQ: annual certificates and reinstatement', url: 'https://sos.ok.gov/business/faq.aspx' },
    {
      label: 'Register your business (Oklahoma Department of Commerce)',
      url: 'https://oklahoma.gov/business/launch/register-your-business.html',
    },
    {
      label: 'Licenses, permits, and the sales tax permit (Oklahoma Department of Commerce)',
      url: 'https://oklahoma.gov/business/operate/licenses-and-permits.html',
    },
    {
      label: 'Title 18, Section 2055.2: annual certificate (Oklahoma Statutes)',
      url: 'https://govt.westlaw.com/okjc/Document/N3D55DBE0624711DD82E3CAD89E409C48?contextData=%28sc.Default%29&originationContext=documenttoc&transitionType=DocumentItem&viewType=FullText',
    },
    {
      label: 'Title 18, Section 2012.1: cancellation after three years (Oklahoma Statutes)',
      url: 'https://govt.westlaw.com/okjc/Document/ND5C47E00624611DD82E3CAD89E409C48?contextData=%28sc.Default%29&originationContext=documenttoc&transitionType=CategoryPageItem&viewType=FullText',
    },
    {
      label: 'Oklahoma Tax Commission: franchise tax ended after tax year 2023',
      url: 'https://oklahoma.gov/tax/newsroom/2023/07-26-23.html',
    },
    { label: 'Oklahoma Tax Commission business help center', url: 'https://oklahoma.gov/tax/helpcenter/businesses.html' },
    {
      label: '2026 Oklahoma income tax withholding tables (OTC Packet OW-2)',
      url: 'https://oklahoma.gov/content/dam/ok/en/tax/documents/resources/publications/businesses/withholding-tables/WHTables-2026.pdf',
    },
    { label: 'FinCEN BOI reporting', url: 'https://www.fincen.gov/boi' },
    {
      label: 'Get an EIN from the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number',
    },
  ],
  taxHighlights: [
    "Oklahoma's individual income tax for 2026 has three brackets: 2.5%, 3.5%, and a 4.5% top rate on Oklahoma taxable income above $7,200 for single filers ($14,400 for joint filers). The first $3,750 ($7,500 joint) is taxed at 0%. The top rate dropped from 4.75% under HB 2764, and further 0.25-point cuts are tied to revenue triggers, so recheck the rate each tax year. A default LLC's profit passes through to your personal Oklahoma return.",
    'Oklahoma LLCs pay no franchise tax. LLCs were already exempt by statute, and the state ended the corporate franchise tax after tax year 2023. The only recurring state charge for keeping the LLC alive is the $25 annual certificate.',
    'If you sell products, you need a sales tax permit from the Oklahoma Tax Commission before you start selling. It costs $20 plus a handling fee through OkTAP, and you need your Secretary of State filing number and EIN to apply. Forming the LLC does not open this account for you.',
    'Oklahoma has no general state business license. Many common activities, including lawn care, cleaning, and general consulting, need no state license at all. Your city may still require a local license, so check with your municipality.',
    'Domestic Oklahoma LLCs are exempt from FinCEN BOI reporting. FinCEN made that exemption permanent in a final rule effective August 14, 2026. Recheck FinCEN before filing because the federal rule has changed several times.',
  ],
  comparisonRows: [
    {
      state: 'Oklahoma',
      annualReport: '$25 annual certificate, due on formation anniversary',
      upfrontCost: '$100',
      ongoingStateCost: '$25/yr',
    },
    {
      state: 'Texas',
      annualReport: 'No SOS annual report; free Public Information Report due May 15',
      upfrontCost: '$300',
      ongoingStateCost: '$0 below $2.65M revenue (franchise tax applies above)',
    },
    {
      state: 'Arkansas',
      annualReport: '$150 annual franchise tax report, due May 1',
      upfrontCost: '$45 online / $50 paper',
      ongoingStateCost: '$150/yr',
    },
    {
      state: 'Missouri',
      annualReport: 'No annual report',
      upfrontCost: '$50 online / $105 paper',
      ongoingStateCost: '$0/yr',
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
  filingFee: 100,
  filingFeeDisplay: '$100 ($104 by card)',
  filingFeeNote:
    'Same $100 online, by mail, or in person. Credit card payments, online or in person, add a 4% service charge ($4). A check or money order on a mailed filing avoids it.',
  annualReportFee: 25,
  filingTime:
    'The Secretary of State does not publish a processing time for online or mailed filings; mailed filings are processed in the order received. Documents delivered in person before 4:30 p.m. CT can get same-day service for $50 per document.',
  filingTimeShort: 'Not published; same day in person for $50',
  expeditedTime:
    'Same-day service is available only for documents delivered in person to the Business Filing Department in Oklahoma City before 4:30 p.m. CT, for $50 per document on top of the filing fee. That is the current Secretary of State fee; older paper forms may still show $25. The Secretary of State lists no expedite option for online or mailed filings.',
  expeditedFee: 50,
  filingAgency: 'Oklahoma Secretary of State, Business Filing Department',
  filingAgencyUrl: 'https://www.sos.ok.gov/business/default.aspx',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Oklahoma individual income tax for 2026 runs from 0% to 4.5%; the 4.5% top rate applies above $7,200 of taxable income for single filers ($14,400 joint). LLCs pay no franchise tax. Sales tax applies if you sell taxable goods.',
  stateTax:
    'Most Oklahoma LLCs are pass-through entities, so profit is taxed on the owners\' Oklahoma returns at rates up to 4.5% (2026). There is no LLC franchise tax; the recurring state charge is the $25 annual certificate.',
  annualReportDue: 'Every year on the anniversary of the date your Articles of Organization were filed',
  annualReportNote:
    '$25 per year, filed with the Secretary of State online or on paper. The notice goes only to the email address on record. After a 60-day grace period, the LLC is no longer in good standing; after three years unpaid, its Articles are deemed canceled. Reinstatement has no separate fee, but you pay $25 for each missed year.',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Pick an available Oklahoma LLC name',
      description:
        'The name must include "limited liability company," "limited company," or an abbreviation (LLC, L.L.C., LC, or L.C.). It must be distinguishable from existing LLCs, limited partnerships, trade names, reserved names, and any corporation that existed in the past three years. Check it free with the Secretary of State\'s online name availability search or by calling (405) 522-2520. Reserving a name costs $10 and holds it for 60 days. Skip it unless you need to lock the name well before you can file.',
    },
    {
      title: 'Choose a registered agent with an Oklahoma street address',
      description:
        'Every Oklahoma LLC must keep a registered agent and registered office in Oklahoma. The agent can be an individual Oklahoma resident, a corporation, LLC, or limited partnership registered with the Secretary of State, or the LLC itself. The registered office must be a street address with an office open during regular business hours to accept legal papers. PO boxes don\'t qualify, and the address is public. If you name yourself or the LLC and work from home, your home address goes on the record.',
    },
    {
      title: 'Pick the principal address and an email you will keep',
      description:
        'The Articles ask for the street address of your principal place of business, which can be in any state but can\'t be a PO box. That address is public too. They also ask for the email address of your primary contact. Treat that email field seriously: it is the only place the Secretary of State sends your annual certificate notice. Use an address you\'ll still check in five years, not a throwaway inbox.',
    },
    {
      title: 'File Articles of Organization online or by mail',
      description:
        'File online at sos.ok.gov, or mail the paper Articles of Organization (SOS Form 0074) to the Secretary of State, 421 N.W. 13th, Suite 210, Oklahoma City, OK 73103. The form is short: the LLC name, principal place of business, contact email, registered agent and address, term of existence (choose perpetual unless you have a reason not to), and the signature of one person, who doesn\'t have to be a member. It doesn\'t ask for member or manager names. The fee is $100. Card payments add 4%, so $104. Mailed filings can pay by check or money order and avoid the surcharge.',
    },
    {
      title: 'Wait for approval, or file in person for same-day service',
      description:
        'The Secretary of State doesn\'t publish a processing time for online or mailed filings. Mailed documents are handled in the order received. If you need the LLC today, deliver the filing in person in Oklahoma City before 4:30 p.m. CT and pay $50 extra for same-day service. Most founders don\'t need it. When the filing is approved, you receive a copy with your Secretary of State filing number. Keep that number, because the Tax Commission asks for it.',
    },
    {
      title: 'Get a free EIN, write an operating agreement, and open a bank account',
      description:
        'After approval, apply for an EIN on IRS.gov. It is free and usually issued immediately online. Don\'t pay a third party for it. Oklahoma doesn\'t ask you to file an operating agreement, and the Articles don\'t mention one. The state\'s Department of Commerce still tells LLC owners to keep a written one, and banks often ask for it. Then open a business bank account so the LLC\'s money stays separate from yours.',
    },
    {
      title: 'Get a sales tax permit and any local license',
      description:
        'If you sell products, register with the Oklahoma Tax Commission on OkTAP for a sales or use tax permit. It costs $20 plus a handling fee, and you need your Secretary of State filing number and EIN. Oklahoma has no general state business license, and many service businesses need no state license at all. Your city may still require one, so check with your municipality. If the LLC will operate under a different name, file a $25 trade name report with the Secretary of State.',
    },
    {
      title: 'Calendar the $25 annual certificate on your filing anniversary',
      description:
        'Every year on the anniversary of your filing date, file the annual certificate with the Secretary of State and pay $25. It confirms the LLC is active and updates your principal address and email. The state emails a notice at least 60 days ahead, but only to the email on record. You have a 60-day grace period after the due date. After that, the LLC is no longer in good standing. Set your own reminder and file it in the anniversary month.',
    },
  ],
  sections: [
    {
      id: 'oklahoma-annual-certificate',
      heading: "Oklahoma's $25 annual certificate: the filing that only reminds you by email",
      summary:
        "The annual certificate is the only yearly state filing for most Oklahoma LLCs, and at $25 it's one of the cheapest in the country. It's also easy to lose track of. It's due on your own filing anniversary rather than a statewide date, and the Secretary of State sends the notice only to the email address on your record. Here's how it works and what happens if you miss it.",
      facts: [
        {
          label: 'Fee',
          detail: '$25 a year, set by Title 18, Section 2055.2. Paying by card adds 4%.',
        },
        {
          label: 'Due date',
          detail:
            'The anniversary of the date your Articles of Organization were filed, every year. Form on October 5, 2026, and your first certificate is due October 5, 2027.',
        },
        {
          label: 'What it asks for',
          detail:
            'Confirmation that the LLC is active, its principal place of business address, and its contact email. If your email has changed, this is where you update it.',
        },
        {
          label: 'The reminder',
          detail:
            'The Secretary of State emails a notice at least 60 days before the anniversary, and only to the last email address on record. The law requires only that email notice.',
        },
        {
          label: 'Grace period',
          detail:
            'You have 60 days after the due date. After that, the LLC is no longer in good standing, and its status may show as Terminated or Expired in the business search.',
        },
        {
          label: 'What "not in good standing" costs you',
          detail:
            'The Secretary of State won\'t accept other filings or issue a certificate of good standing for the LLC, and the LLC can\'t bring a lawsuit in an Oklahoma court until it is reinstated. Banks and lenders often ask for a certificate of good standing.',
        },
        {
          label: 'Cancellation',
          detail:
            'If the certificate and fee stay unpaid for three years from the due date, the Articles of Organization are deemed canceled on the third anniversary of that date.',
        },
        {
          label: 'Reinstatement',
          detail:
            'File the reinstatement form, which has no fee, plus an annual certificate and $25 for each year past due. The Secretary of State\'s Annual Certificate Department, (405) 522-2822, can tell you how many years you owe; that isn\'t shown online.',
        },
      ],
      paragraphs: [
        'Reinstatement relates back as if the LLC never fell out of good standing, so a lapse is fixable. The cost is small. What hurts is finding out when a bank, a client, or a court asks for proof of good standing and you can\'t produce it that day.',
        'The fix takes two minutes. Put the anniversary date in your own calendar with a reminder a few weeks before. If you switch email providers or close the inbox you used on the Articles, update the address with the Secretary of State right away instead of waiting for the next certificate.',
      ],
      related: { label: 'Compare LLC services by real year-one cost', href: '/best-llc-services/' },
    },
  ],
  costPage: {
    seoTitle: `Oklahoma LLC Cost (${GUIDE_YEAR}): $100 to Form, $25/Year`,
    seoDescription:
      'An Oklahoma LLC costs $100 to form ($104 by card) and $25 a year for the annual certificate due on your filing anniversary. The reminder only comes by email.',
    intro:
      "An Oklahoma LLC costs $100 to form, or $104 if you pay by card. After that, the only recurring state cost is the $25 annual certificate, due every year on the anniversary of the date your Articles were filed. There's no franchise tax and no publication requirement. What people miss is the reminder: the Secretary of State emails the notice only to the address on your filing, so a changed inbox can cost you your good standing. If you sell products, add the $20 sales tax permit plus a handling fee.",
    formTotal: 100,
    annualDisplay: '$25/yr',
    yearOneTotal: 104,
    yearTwoTotal: 25,
    yearOneNote: 'Online filing with 4% card charge; $100 by mail with a check',
    yearTwoNote: 'Annual certificate on your filing anniversary; $26 by card',
    schedule: [
      { item: 'Articles of Organization', cost: '$100', due: 'When you form. Paying by card adds 4%, so $104.' },
      { item: 'Annual certificate', cost: '$25', due: 'Every year on the anniversary of your filing date. The notice comes only by email.' },
      {
        item: 'Missed certificate',
        cost: '$25/yr',
        due: 'After a 60-day grace period, the LLC loses good standing. After three years unpaid, the Articles are canceled.',
      },
      { item: 'Reinstatement', cost: '$0 + back fees', due: 'The form is free. You pay $25 for each missed year.' },
      { item: 'Sales tax permit', cost: '$20+', due: 'Before your first sale, if you sell products. Plus a handling fee.' },
    ],
    verdict:
      "File online at sos.ok.gov and pay the $4 card charge; mailing a check saves $4 but neither path has a published processing time. Skip the $50 same-day service unless you can deliver the filing in Oklahoma City and need the LLC today. Be your own registered agent if you live in Oklahoma and work from a real office. Pay for a commercial agent if you live out of state or don't want your home address on the agent line. Put your filing anniversary in your own calendar for the $25 certificate, because the state's email is the only reminder.",
    faq: [
      {
        question: 'How much does an LLC cost in Oklahoma?',
        answer:
          '$100 to file the Articles of Organization, or $104 if you pay by card. After that, the $25 annual certificate is the only required state cost each year. If you sell products, the sales tax permit costs $20 plus a handling fee.',
      },
      {
        question: 'What is the Oklahoma LLC annual fee?',
        answer:
          '$25 for the annual certificate, due every year on the anniversary of the date your Articles were filed. Paying by card adds 4%. The Secretary of State emails a notice at least 60 days ahead, but only to the email address on record.',
      },
      {
        question: 'What happens if I miss the Oklahoma annual certificate?',
        answer:
          "You have a 60-day grace period. After that, the LLC is no longer in good standing, so the state won't accept other filings or issue a certificate of good standing. After three years unpaid, the Articles are deemed canceled. Reinstatement is a free form plus $25 for each missed year.",
      },
      {
        question: 'Does Oklahoma charge a franchise tax on LLCs?',
        answer:
          'No. LLCs were already exempt by statute, and the state ended its corporate franchise tax after tax year 2023. The $25 annual certificate is the only recurring state charge to keep the LLC alive.',
      },
      {
        question: 'How much is a registered agent in Oklahoma?',
        answer:
          'Free if you serve yourself or name the LLC as its own agent, as long as the registered office is an Oklahoma street address open during business hours. That address is public. A commercial registered agent usually costs $50 to $150 a year.',
      },
    ],
    sourceUrls: [
      'https://www.sos.ok.gov/business/fees.aspx',
      'https://sos.ok.gov/business/faq.aspx',
      'https://govt.westlaw.com/okjc/Document/N3D55DBE0624711DD82E3CAD89E409C48?contextData=%28sc.Default%29&originationContext=documenttoc&transitionType=DocumentItem&viewType=FullText',
      'https://oklahoma.gov/business/operate/licenses-and-permits.html',
    ],
  },
  costBreakdown: [
    {
      item: 'Articles of Organization',
      cost: '$100',
      required: 'Yes',
      notes: 'Same fee online, by mail, or in person',
    },
    {
      item: 'Credit card service charge',
      cost: '$4',
      required: 'Only if paying by card',
      notes: '4% of the fee; check or money order by mail avoids it',
    },
    { item: 'Name reservation', cost: '$10', required: 'Optional', notes: 'Holds the name for 60 days' },
    { item: 'Registered agent service', cost: '$50-$150/yr', required: 'Optional', notes: 'Self-serve for $0 if eligible' },
    {
      item: 'Same-day service (in person)',
      cost: '+$50',
      required: 'Optional',
      notes: 'Delivered in Oklahoma City before 4:30 p.m. CT',
    },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal; not filed' },
    {
      item: 'Trade name report',
      cost: '$25',
      required: 'Only if using a different name',
      notes: 'Filed with the Secretary of State; no annual fee',
    },
    {
      item: 'Sales tax permit',
      cost: '$20 + handling fee',
      required: 'If selling products',
      notes: 'Oklahoma Tax Commission, via OkTAP',
    },
    { item: 'City business license', cost: 'Varies by city', required: 'Sometimes', notes: 'Check with your municipality' },
    {
      item: 'Annual certificate',
      cost: '$25/yr',
      required: 'Yes (recurring)',
      notes: 'Due each year on your filing anniversary',
    },
    {
      item: 'Reinstatement after a lapse',
      cost: '$25 per missed year',
      required: 'Only if late',
      notes: 'Reinstatement form itself is free',
    },
    {
      item: 'Total (bare minimum DIY)',
      cost: '$100 to form, then $25/yr',
      isEmphasized: true,
      notes: 'Mailed filing paid by check, self-serve registered agent, before any local license',
    },
    {
      item: 'Total (typical first year with commercial agent)',
      cost: '$150-$250',
      isEmphasized: true,
      notes: 'Filing fee (card adds $4) + typical registered agent; first annual certificate is due in year two',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Oklahoma?',
      answer:
        'The Articles of Organization cost $100, or $104 if you pay by card. After that, the only required state cost is the $25 annual certificate each year on your filing anniversary. A commercial registered agent typically adds $50 to $150 a year, and a sales tax permit costs $20 plus a handling fee if you sell products.',
    },
    {
      question: 'What is the Oklahoma LLC filing fee?',
      answer:
        '$100, the same online, by mail, or in person. Credit card payments add a 4% service charge. Same-day service for filings delivered in person costs $50 more under the current Secretary of State fee; older paper forms may still show $25.',
    },
    {
      question: 'How long does it take to form an LLC in Oklahoma?',
      answer:
        'The Secretary of State doesn\'t publish a processing time for online or mailed filings. Mailed documents are processed in the order received. If you need it the same day, deliver the filing in person in Oklahoma City before 4:30 p.m. CT and pay $50 extra.',
    },
    {
      question: 'Where do I file an Oklahoma LLC?',
      answer:
        'With the Oklahoma Secretary of State\'s Business Filing Department, online at sos.ok.gov or by mail or in person at 421 N.W. 13th, Suite 210, Oklahoma City, OK 73103. The phone number is (405) 522-2520.',
    },
    {
      question: 'How do I file an LLC in Oklahoma online?',
      answer:
        'Go to the business forms page at sos.ok.gov and choose the online link for an Oklahoma Limited Liability Company. Enter the name, principal place of business, contact email, registered agent, and term of existence, then pay $100 plus the 4% card charge. The Department of Commerce says it takes about 15 minutes, and you receive a copy with your Secretary of State filing number when it\'s approved.',
    },
    {
      question: 'What is the formation document called in Oklahoma?',
      answer:
        'Articles of Organization. The paper version is SOS Form 0074, which includes the instructions and the form itself.',
    },
    {
      question: 'Can I be my own registered agent in Oklahoma?',
      answer:
        'Yes, if you live in Oklahoma. Oklahoma also lets the LLC serve as its own registered agent. Either way, the registered office must be an Oklahoma street address with an office open during regular business hours, and the address is public. If you live out of state or don\'t want your home address on the record, hire a commercial registered agent.',
    },
    {
      question: 'Does Oklahoma require an operating agreement?',
      answer:
        'You don\'t file one with the state, and the Articles don\'t ask about one. Oklahoma\'s Department of Commerce still says LLC owners should keep a written operating agreement. Write one, especially with more than one member, because it sets ownership, decision-making, and exit rules, and banks often ask for it.',
    },
    {
      question: 'When is the Oklahoma LLC annual certificate due?',
      answer:
        'Every year on the anniversary of the date your Articles of Organization were filed. The fee is $25. The Secretary of State emails a notice at least 60 days before, but only to the email address on your record.',
    },
    {
      question: 'What happens if I miss the Oklahoma annual certificate?',
      answer:
        'You have 60 days after the due date. After that, the LLC is no longer in good standing: the state won\'t accept other filings or issue a certificate of good standing, and the LLC can\'t sue in an Oklahoma court. After three years unpaid, the Articles are deemed canceled. To fix it, file the free reinstatement form plus $25 for each missed year.',
    },
    {
      question: 'Does Oklahoma require newspaper publication for an LLC?',
      answer:
        'No. Oklahoma\'s LLC filing procedures have no publication step, so there\'s no newspaper cost.',
    },
    {
      question: 'Do I need a business license for my Oklahoma LLC?',
      answer:
        'Oklahoma has no general state business license. Many common businesses, including lawn care, cleaning, and general consulting, need no state license at all. Your city may require a local license, some professions need a state license, and you need a $20 sales tax permit from the Oklahoma Tax Commission if you sell products.',
    },
    {
      question: 'How is an Oklahoma LLC taxed, and is there a franchise tax?',
      answer:
        'By default, profit passes through to the owners\' personal returns. Oklahoma\'s income tax for 2026 tops out at 4.5% on taxable income above $7,200 for single filers ($14,400 joint). There is no franchise tax for LLCs; they were exempt by statute, and the state ended its corporate franchise tax after tax year 2023.',
    },
    {
      question: 'Do I need to register a trade name for my Oklahoma LLC?',
      answer:
        'Only if the LLC will do business under a name other than its exact legal name. File a trade name report with the Secretary of State for $25. There is no annual fee for a trade name.',
    },
    {
      question: 'Can I form an Oklahoma LLC if I don\'t live in Oklahoma?',
      answer:
        'Yes. The Articles don\'t ask where members live, and the person who signs doesn\'t have to be a member. You do need a registered agent with an Oklahoma street address, so out-of-state owners normally hire a commercial registered agent.',
    },
    {
      question: 'Do Oklahoma LLCs need to file a BOI report?',
      answer:
        'No. FinCEN\'s final rule, effective August 14, 2026, permanently exempts U.S. companies, including Oklahoma LLCs, from BOI reporting. The rule has changed several times, so recheck FinCEN before relying on an old checklist.',
    },
  ],
  proscons: {
    pros: [
      'Cheap to start and keep: $100 to form and $25 a year.',
      'No franchise tax and no publication requirement.',
      'The Articles don\'t ask for member or manager names.',
      'Same-day service is available for $50 if you can deliver the filing in Oklahoma City.',
      'No general state business license, and many service businesses need no state license at all.',
    ],
    cons: [
      'The annual certificate notice goes only to your email on file, and the due date is your own anniversary, so it\'s easy to miss.',
      'The Secretary of State publishes no processing time for online or mailed filings.',
      'Your principal place of business must be a street address, and it\'s public even if you use a commercial registered agent.',
      'Card payments add a 4% service charge on every filing.',
      'Unlike Texas, Oklahoma taxes your LLC profit at up to 4.5% (2026).',
    ],
  },
};

import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const utah: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Utah (${GUIDE_YEAR}): $59 Fee, Steps & Timeline`,
  seoDescription:
    'Start a Utah LLC for $59 online, often approved the same day. Then the $18 annual renewal, the postcard that triggers it, and when a service is worth it.',
  lastUpdated: '2026-10-05',
  intro:
    "A Utah LLC costs $59 to file. You file a Certificate of Organization with the Utah Division of Corporations and Commercial Code, online through its Business Registration system, and most online filings are processed immediately. There's no publication requirement and no state franchise tax on a standard LLC. The one recurring state filing is the annual renewal (Utah also calls it the annual report): $18 a year, due in the month you formed, starting the year after. That fee is low enough that people forget the filing exists. The Division mails a reminder postcard to your registered agent, not to you, and an LLC that misses enough renewals ends up expired and has to pay to reinstate.",
  whatYoullNeed:
    'To form a Utah LLC, you will need a UtahID login, an available name ending in LLC, L.L.C., LC, L.C., Limited Liability Company, or Limited Company, a street and mailing address for the principal office, a registered agent with a Utah street address, the names of the people who will run the LLC, and $59 for the filing fee.',
  closing:
    "If you live and run your business in Utah, form in Utah. At $59 to file and $18 a year, there's nothing to save by forming in Wyoming or Delaware, and an out-of-state LLC would still have to register here as a foreign LLC for another $59 plus its home state's fees. Put two things on your calendar: the $18 renewal, which you can file up to 60 days before the end of your formation month, and your city or county business license renewal on its local schedule. You can be your own registered agent if you have a Utah street address and are there during business hours. A professional agent, usually $50 to $150 a year, costs several times the state's own annual fee, so pay for one only if you want your home address off the public record or can't reliably receive legal papers in Utah.",
  inlineCtaDescription:
    "Utah requires a registered agent with a Utah street address, and that address is public on the Division's business search. It also gets the renewal postcard each year. If you have a Utah address you're happy to publish and you're there during business hours, be your own agent and skip this. If you work from home, move often, or live outside Utah, a professional registered agent, usually $50 to $150 a year, keeps your home address off the record and forwards the renewal notice. Keep in mind that's several times Utah's $18 renewal fee.",
  sidebarCtaDescription:
    "Don't want your home address on Utah's public business search, or can't be at a Utah street address during business hours? A professional registered agent handles both, for about $50 to $150 a year.",
  officialLinks: [
    { label: 'Utah Business Registration (file online)', url: 'https://businessregistration.utah.gov/' },
    {
      label: 'Domestic LLC filing instructions (Division of Corporations)',
      url: 'https://commerce.utah.gov/corporations/business-entities/domestic-limited-liability-company/',
    },
    {
      label: 'Division of Corporations fee schedule',
      url: 'https://commerce.utah.gov/wp-content/uploads/2023/04/currentfees.pdf',
    },
    { label: 'Annual report/renewal guide', url: 'https://commerce.utah.gov/corporations/renewal-process/' },
    {
      label: 'How to renew a business (renewal postcard FAQ)',
      url: 'https://commerce.utah.gov/corporations/faqs/how-to-renew-a-business/',
    },
    {
      label: 'Certificates and expedite fees',
      url: 'https://commerce.utah.gov/corporations/ordering-in-house-documents/',
    },
    {
      label: 'Annual report law (Utah Code 16-1a-212)',
      url: 'https://le.utah.gov/xcode/Title16/Chapter1A/16-1a-S212.html',
    },
    {
      label: 'Administrative dissolution and reinstatement (Utah Code 16-1a-602 to 604)',
      url: 'https://le.utah.gov/xcode/Title16/Chapter1A/16-1a-S602.html',
    },
    {
      label: 'Registered agent address rule (Utah Code 16-1a-403)',
      url: 'https://le.utah.gov/xcode/Title16/Chapter1A/16-1a-S403.html',
    },
    {
      label: 'LLC name requirements (Utah Code 16-1a-303)',
      url: 'https://le.utah.gov/xcode/Title16/Chapter1A/16-1a-S303.html',
    },
    {
      label: 'Certificate of Organization law (Utah Code 16-20-201)',
      url: 'https://le.utah.gov/xcode/Title16/Chapter20/16-20-S201.html',
    },
    { label: 'Local business licensing in Utah', url: 'https://commerce.utah.gov/2021/11/15/business-licensing/' },
    {
      label: 'Utah individual income tax rate (Utah Code 59-10-104)',
      url: 'https://le.utah.gov/xcode/Title59/Chapter10/59-10-S104.html',
    },
    { label: 'Utah sales and use tax registration', url: 'https://tax.utah.gov/sales' },
    { label: 'FinCEN BOI reporting', url: 'https://www.fincen.gov/boi' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    "Utah's individual income tax is a flat 4.45% for 2026, cut from 4.5% by S.B. 60 and applied back to January 1, 2026. Utah has cut this rate several years in a row, so recheck it each tax year. A default single-member or multi-member LLC passes its profit through to your personal Utah return at that rate.",
    'Utah has no franchise tax or minimum annual tax on a standard pass-through LLC. The only recurring state charge for keeping the LLC active is the $18 annual renewal.',
    'Utah has no general statewide business license. After forming the LLC, you get a business license from the city or town where you operate, or from the county if you are in an unincorporated area. Fees and home-business rules vary by locality.',
    'If you sell taxable goods or services, register for sales and use tax with the Utah State Tax Commission through its Taxpayer Access Point (TAP). Forming the LLC does not open any tax accounts for you. New sellers with $50,000 or less in annual sales tax liability file quarterly.',
    'Domestic Utah LLCs are exempt from FinCEN BOI reporting. FinCEN made that exemption permanent in a final rule effective August 14, 2026. Federal reporting rules have changed several times, so recheck FinCEN before relying on this.',
  ],
  comparisonRows: [
    {
      state: 'Utah',
      annualReport: '$18/yr renewal, due in anniversary month',
      upfrontCost: '$59',
      ongoingStateCost: '$18/yr + local business license',
    },
    {
      state: 'Colorado',
      annualReport: '$25 Periodic Report',
      upfrontCost: '$50 online',
      ongoingStateCost: '$25/yr',
    },
    {
      state: 'Nevada',
      annualReport: 'Annual List + Business License',
      upfrontCost: '~$425',
      ongoingStateCost: '$350/yr',
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
  filingFee: 59,
  filingFeeDisplay: '$59',
  filingFeeNote: 'Same fee online and on paper. All Division fees are nonrefundable.',
  annualReportFee: 18,
  filingTime:
    'The Division says most online filings are processed immediately. Filings that need manual review take 5 to 7 business days: paper filings, filings with attachments, filings that need Utah State Tax Commission review, and names that need a conflict check.',
  filingTimeShort: 'Often same day online',
  expeditedTime:
    'Expedited processing costs an extra $75 per filing. The Division does not publish a turnaround for expedited formations; it says expedited certificate and copy orders take up to 2 business days. Because most online formations are processed immediately, expediting rarely helps.',
  expeditedFee: 75,
  filingAgency: 'Utah Division of Corporations and Commercial Code',
  filingAgencyUrl: 'https://businessregistration.utah.gov/',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Utah has a flat 4.45% individual income tax for 2026. Standard pass-through LLCs pay no franchise tax. Sales tax applies if you sell taxable goods or services.',
  stateTax:
    "Most Utah LLCs are pass-through entities, so profit is taxed on the owners' Utah returns at the flat 4.45% rate (2026). There is no LLC franchise tax; the recurring state charge is the $18 annual renewal.",
  annualReportDue: 'By the end of your formation anniversary month each year, starting the year after you form',
  annualReportNote:
    '$18 per year, including a $5 state portal fee. You can file up to 60 days before the end of your anniversary month. A late renewal adds $10, and a report more than 60 days late can lead to administrative dissolution, which Utah shows as Expired.',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Pick an available Utah LLC name',
      description:
        'Run a name availability search on the Division of Corporations site. The name must include "limited liability company," "limited company," "LLC," "L.L.C.," "LC," or "L.C." The Division says a name that looks available is not final until it approves your filing, so have a backup ready. Reserving a name is optional: it costs $22 and holds the name for 120 days. Skip it unless you need to lock the name well before you file.',
    },
    {
      title: 'Choose a registered agent with a Utah street address',
      description:
        "Every Utah LLC needs a registered agent at a street address in Utah. A PO box alone doesn't work. You can be your own agent if you have a Utah address and are reliably there during business hours. That address shows up on the Division's public business search. The agent also receives the Division's renewal postcard every year. A commercial registered agent usually costs $50 to $150 a year and keeps your home address off the record.",
    },
    {
      title: 'File the Certificate of Organization online',
      description:
        'Log in to businessregistration.utah.gov with a UtahID (you create one at login if you don\'t have one). Choose Formations, then Domestic Formations, then Domestic Limited Liability Company. You will enter the LLC name, the principal office street and mailing address, your registered agent, and the people who will run the LLC. The fee is $59. Utah no longer has a fillable paper form for this; paper filings go through the system\'s "Submit a Paper Filing" upload and take 5 to 7 business days, so file online.',
    },
    {
      title: 'Wait for approval, usually the same day',
      description:
        'The Division says most online filings are processed immediately. If yours needs manual review, such as a possible name conflict or an attachment, allow 5 to 7 business days. Expedited processing costs $75 extra, more than the filing itself, and rarely changes anything for a standard online filing. All Division fees are nonrefundable, so double-check the name and addresses before you pay.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        "Once the LLC is approved, apply for an EIN directly on IRS.gov. It's free and usually issued immediately online. You'll need it for a business bank account, hiring, and most tax registrations. The Division doesn't issue or keep EINs, and you shouldn't pay a third party for one.",
    },
    {
      title: 'Write an operating agreement and open a business bank account',
      description:
        "Utah doesn't require you to file an operating agreement with the state. Write one anyway: it records who owns what, who makes decisions, and what happens if a member leaves, and banks often ask for it. Then open a separate business bank account so the LLC's money stays apart from yours.",
    },
    {
      title: 'Get your city or county business license and tax accounts',
      description:
        "Utah has no statewide general business license. Apply for a business license with the city or town where you operate, or with your county if you're in an unincorporated area; rules and fees vary, and home-based businesses can have zoning requirements. If you sell taxable goods or services, register for sales tax with the Utah State Tax Commission through TAP. If you plan to do business under a name other than the LLC's legal name, register that assumed name (DBA) with the Division for $22.",
    },
    {
      title: 'Calendar the $18 annual renewal',
      description:
        "Starting the year after you form, file an annual renewal with the Division every year by the end of the month you formed. It costs $18, takes a few minutes online under Renewals, and can be filed up to 60 days early. About 60 days before the due date, the Division mails a renewal postcard to your registered agent. Filing late adds $10. If the report is more than 60 days late, the Division can start administrative dissolution, and an expired LLC has to reinstate for $54 plus $18 for each missed year and a $10 delinquency fee.",
    },
  ],
  sections: [
    {
      id: 'utah-annual-renewal',
      heading: 'Utah LLC annual renewal: due date, postcard, and what happens if you miss it',
      summary:
        "Utah's only recurring state filing for an LLC is the annual renewal, also called the annual report. It costs $18 and is due every year in the month your LLC was formed, starting the year after. Missing it is the most common way a Utah LLC loses its active status, usually because the reminder went to someone else.",
      facts: [
        {
          label: 'Due date',
          detail:
            "Utah law sets the deadline as the last day of your anniversary month, the month your Certificate of Organization took effect. The Division's own FAQ describes it as due one year from your registration date. File in the 60 days before your formation date and you meet both readings.",
        },
        {
          label: 'Fee',
          detail: '$18, which includes a $5 fee for the state\'s single sign-on portal. A late renewal adds $10.',
        },
        {
          label: 'Reminder',
          detail:
            'The Division mails a renewal postcard to the registered agent on file about 60 days before the due date. If a commercial agent holds that role, the postcard goes to them. If you are your own agent and you move without updating your address, it goes nowhere useful. Set your own calendar reminder.',
        },
        {
          label: 'How to file',
          detail:
            'Log in to businessregistration.utah.gov with your UtahID, choose Renewals, and pick "Annual Report without changes" or "with changes." You can update your address, registered agent, and principals in the same filing at no extra charge.',
        },
        {
          label: 'Delinquent',
          detail:
            "A missed renewal puts the LLC in Delinquent status. You fix it by filing the renewal, plus the $10 late fee. A delinquent LLC can still get a Certificate of Existence; an expired one can't.",
        },
        {
          label: 'Expired',
          detail:
            'If the renewal is more than 60 days late, the Division can serve a notice of administrative dissolution. You then have 60 days to cure it. After that, the LLC can only wind down or apply for reinstatement, and its record shows Expired.',
        },
        {
          label: 'Reinstatement',
          detail:
            'Filed online. It costs $54 plus $18 for each year the renewal was missed and a $10 delinquency fee. Reinstatement relates back to the dissolution date, and Utah holds the LLC\'s name for five years after dissolution.',
        },
      ],
      paragraphs: [
        "You don't need a compliance service for this. The renewal is one short online form and $18. Utah's business-entity laws moved to a new Title 16 on October 1, 2026, which is why older guides cite different code sections, but the $18 fee and the anniversary-month deadline carry over.",
      ],
      related: { label: 'Estimate your self-employment tax', href: '/self-employment-tax/calculator/' },
    },
  ],
  costBreakdown: [
    {
      item: 'Certificate of Organization',
      cost: '$59',
      required: 'Yes',
      notes: 'Online through Business Registration; nonrefundable',
    },
    { item: 'Name reservation', cost: '$22', required: 'Optional', notes: 'Holds the name for 120 days' },
    { item: 'Registered agent service', cost: '$50-$150/yr', required: 'Optional', notes: 'Self-serve for $0 if eligible' },
    { item: 'Expedited processing', cost: '+$75', required: 'Optional', notes: 'Per filing; rarely needed online' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal; not filed' },
    {
      item: 'City or county business license',
      cost: 'Varies by locality',
      required: 'Usually',
      notes: 'County licenses unincorporated areas',
    },
    { item: 'Assumed name (DBA)', cost: '$22', required: 'Only if you use another name', notes: 'Filed with the Division' },
    {
      item: 'Annual renewal',
      cost: '$18/yr',
      required: 'Yes (recurring)',
      notes: 'Due in your anniversary month, starting the year after formation',
    },
    { item: 'Late renewal fee', cost: '+$10', required: 'Only if late', notes: 'Added to the $18 renewal' },
    {
      item: 'Reinstatement of an expired LLC',
      cost: '$54 + $18 per missed year + $10',
      required: 'Only if expired',
      notes: 'Filed online',
    },
    { item: 'Certificate of Existence', cost: '$12', required: 'Optional', notes: 'Banks or other states sometimes ask' },
    {
      item: 'Total (bare minimum DIY)',
      cost: '$59 to form, then $18/yr',
      isEmphasized: true,
      notes: 'Self-serve registered agent, before local license fees',
    },
    {
      item: 'Total (typical first year with commercial agent)',
      cost: '$110-$210 + local license',
      isEmphasized: true,
      notes: 'Filing fee + typical registered agent; renewals start year two',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Utah?',
      answer:
        'The state filing fee is $59. After that, the annual renewal is $18 a year starting the year after you form. A commercial registered agent typically adds $50 to $150 a year, and most businesses also pay a city or county business license fee that varies by location.',
    },
    {
      question: 'What is the Utah LLC filing fee?',
      answer:
        "$59 for the Certificate of Organization, filed with the Utah Division of Corporations and Commercial Code. It's the same online and on paper, and it's nonrefundable. Expedited processing is $75 extra, but most online filings are processed immediately anyway.",
    },
    {
      question: 'How long does it take to form an LLC in Utah?',
      answer:
        'Usually the same day online. The Division says most online filings are processed immediately. Filings that need manual review, including paper uploads, filings with attachments, and possible name conflicts, take 5 to 7 business days.',
    },
    {
      question: 'Where do I file a Utah LLC?',
      answer:
        "With the Utah Division of Corporations and Commercial Code, part of the Utah Department of Commerce, online at businessregistration.utah.gov. You log in with a UtahID. The Division's office is at 160 East 300 South in Salt Lake City.",
    },
    {
      question: 'How do I register an LLC in Utah online?',
      answer:
        'Log in to businessregistration.utah.gov with a UtahID, choose Formations, then Domestic Formations, and select Domestic Limited Liability Company. Enter the name, principal office street and mailing address, registered agent, and the people who will run the LLC, then pay $59. Most filings are approved immediately. Registering the LLC does not get you a business license; that comes from your city or county.',
    },
    {
      question: 'What is the formation document called in Utah?',
      answer:
        "The Certificate of Organization. Utah doesn't call it Articles of Organization. There's no downloadable form anymore; you fill in the certificate through the online Business Registration system.",
    },
    {
      question: 'Does Utah require a registered agent?',
      answer:
        "Yes. Every Utah LLC must keep a registered agent with a street address in Utah, and that address appears on the Division's public business search. The registered agent also receives the Division's annual renewal postcard.",
    },
    {
      question: 'Can I be my own registered agent in Utah?',
      answer:
        "Yes, if you have a Utah street address and are reliably there during business hours to accept legal papers. The tradeoff is that the address is public. If you work from home or travel often, a commercial registered agent is the safer choice, though at $50 to $150 a year it costs more than Utah's own $18 renewal.",
    },
    {
      question: 'Does Utah require an operating agreement?',
      answer:
        "Utah doesn't require you to file an operating agreement with the state. You should still have one in writing, especially with more than one member, because it sets ownership, decision-making, and exit rules, and banks often ask for it.",
    },
    {
      question: 'When is the Utah LLC annual renewal due?',
      answer:
        'Every year by the end of the month you formed, starting the year after. The fee is $18, and you can file up to 60 days early. The Division mails a renewal postcard to your registered agent about 60 days ahead. Filing late adds $10.',
    },
    {
      question: 'What happens if I miss the Utah annual renewal?',
      answer:
        'Your LLC goes delinquent, and you fix it by filing the $18 renewal plus a $10 late fee. If the renewal is more than 60 days late, the Division can start administrative dissolution and gives you 60 days to cure it. After that the LLC is expired and can only wind down until it reinstates, which costs $54 plus $18 for each missed year and a $10 delinquency fee.',
    },
    {
      question: 'Does Utah require newspaper publication for an LLC?',
      answer: 'No. Utah has no publication requirement for LLCs, so there is no newspaper notice cost.',
    },
    {
      question: 'Do I need a business license for my Utah LLC?',
      answer:
        'Usually, but not from the state. Utah has no general state business license. Get a business license from the city or town where you operate, or from the county if you are in an unincorporated area. Some professions also need a state professional license.',
    },
    {
      question: 'How is a Utah LLC taxed?',
      answer:
        "By default, profit passes through to the owners and is taxed on their personal returns. Utah's individual income tax is a flat 4.45% for 2026. Utah doesn't charge a franchise tax on standard pass-through LLCs. If you sell taxable goods or services, you also collect and remit sales tax through the Utah State Tax Commission.",
    },
    {
      question: 'Does Utah allow series LLCs?',
      answer:
        "Yes. Utah law lets an LLC create series with separate liability if the Certificate of Organization gives notice of that limitation. A first-time solo founder with one business doesn't need one; a standard LLC is simpler to bank, insure, and file taxes for.",
    },
    {
      question: "Can I form a Utah LLC if I don't live in Utah?",
      answer:
        'Yes. Members do not have to live in Utah. You do need a registered agent with a Utah street address, so out-of-state owners normally hire a commercial registered agent.',
    },
    {
      question: 'Do Utah LLCs need to file a BOI report?',
      answer:
        "No. FinCEN's final rule, effective August 14, 2026, permanently exempts U.S. companies, including Utah LLCs, from BOI reporting. The rule has changed before, so recheck FinCEN before filing.",
    },
  ],
  proscons: {
    pros: [
      'Among the cheapest states to start and keep an LLC: $59 to file and $18 a year to renew.',
      'Most online filings are processed immediately, so there is little reason to pay the $75 expedite fee.',
      'No publication requirement and no franchise tax on a standard pass-through LLC.',
      'A flat 4.45% state income tax for 2026, which Utah has lowered in recent years.',
    ],
    cons: [
      'The renewal reminder goes to your registered agent, so if your address on file is out of date, you can miss the deadline without ever seeing a notice.',
      'An expired LLC costs $54 plus $18 for each missed year and a $10 fee to reinstate, and it can only wind down until then.',
      'Business licenses are handled by cities, towns, and counties, so rules and fees vary.',
      'Your registered agent address is public, which matters if you work from home.',
      "Utah moved its business-entity laws to a new code title on October 1, 2026, so older guides cite code sections that no longer apply.",
    ],
  },
};

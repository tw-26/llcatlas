import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const georgia: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Georgia (${GUIDE_YEAR}): $100 Fee, Steps & Timeline`,
  seoDescription:
    'Start a Georgia LLC for $100 online. Real steps, the $60 annual registration due by April 1, local business license rules, and when a service is worth it.',
  lastUpdated: '2026-09-23',
  intro:
    "A Georgia LLC costs $100 to file online, or $110 by mail. You file Articles of Organization with the Georgia Secretary of State, Corporations Division. There's no publication requirement and no franchise tax for a standard pass-through LLC. The one ongoing state cost is the annual registration: $60 a year as of 2026, due between January 1 and April 1. That window is the same for every LLC no matter when you formed, so an LLC formed in November owes its first registration by April 1 of the next year. Most Georgia businesses also need a city or county business license, called an occupation tax certificate, and the state filing doesn't replace it.",
  whatYoullNeed:
    'To form a Georgia LLC, you will need an available LLC name with a required designator (LLC, L.L.C., or Limited Liability Company), a registered agent with a physical Georgia street address, a principal office mailing address, an organizer, an email address for filing notices, and $100 for online filing or $110 by mail. Paper filings also need Transmittal Form 231.',
  closing:
    "If you live and run your business in Georgia, form in Georgia. A Wyoming or Delaware LLC would still have to register as a foreign LLC here and pay Georgia fees on top of its home state costs. Two dates go on your calendar: the annual registration between January 1 and April 1 every year starting the year after you form, and your city or county occupation tax certificate renewal on its local schedule. You can be your own registered agent if you have a Georgia street address where you can be found during business hours. A professional agent, usually $50 to $150 a year, is worth it if you work from home and don't want that address public, or can't reliably be there to receive legal papers.",
  inlineCtaDescription:
    "Georgia requires a registered agent at a physical Georgia street address where someone can be found in person, and that address goes on the public record. If you have a Georgia office with regular hours, you can be your own agent and skip this. If you work from home, travel, or live outside Georgia, a professional registered agent, usually $50 to $150 a year, keeps your home address off the filing and makes sure legal notices don't get missed.",
  sidebarCtaDescription:
    'If you don\'t want your home address on Georgia\'s public business records or can\'t guarantee someone is at a Georgia street address during business hours, use a professional registered agent.',
  officialLinks: [
    { label: 'Register an LLC in Georgia (Georgia.gov)', url: 'https://georgia.gov/register-llc' },
    { label: 'Georgia eCorp online filing', url: 'https://ecorp.sos.ga.gov/' },
    {
      label: 'Georgia filing fees and expedited processing',
      url: 'https://sos.ga.gov/how-to-guide/filing-fees-and-expedited-processing-document-filings',
    },
    { label: 'How to file the annual registration', url: 'https://sos.ga.gov/how-to-guide/how-file-annual-registration' },
    { label: 'Renew a Georgia LLC (annual registration)', url: 'https://georgia.gov/renew-llc' },
    { label: 'Georgia business forms (CD 030, Form 231)', url: 'https://sos.ga.gov/cgi-bin/corpforms.asp' },
    { label: 'Georgia business licenses (local)', url: 'https://georgia.org/small-business/get-business-license-georgia' },
    { label: 'Georgia Department of Revenue tax updates', url: 'https://dor.georgia.gov/taxes/important-tax-updates' },
    { label: 'Amended annual registration fee (eCorp)', url: 'https://ecorp.sos.ga.gov/ARForm' },
    {
      label: 'Registered office and agent (O.C.G.A. § 14-11-209)',
      url: 'https://law.justia.com/codes/georgia/title-14/chapter-11/article-2/section-14-11-209/',
    },
    {
      label: 'Administrative dissolution (O.C.G.A. § 14-11-603)',
      url: 'https://law.justia.com/codes/georgia/title-14/chapter-11/article-6/section-14-11-603/',
    },
    { label: 'How to reinstate an entity (Georgia SOS)', url: 'https://sos.ga.gov/how-to-guide/how-guide-reinstate-entity' },
    {
      label: 'LLC filing fees, including reinstatement (O.C.G.A. § 14-11-1101)',
      url: 'https://law.justia.com/codes/georgia/title-14/chapter-11/article-11/section-14-11-1101/',
    },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    'Georgia\'s individual income tax is a flat 4.99% for 2026, lowered from 5.19% by HB 463 and retroactive to January 1, 2026. More annual cuts are scheduled, so recheck the rate each tax year. A default single-member or multi-member LLC passes its profit through to your personal Georgia return at that rate.',
    'Georgia does not charge a franchise tax or minimum annual tax on a standard pass-through LLC. The only recurring state charge for keeping the LLC alive is the annual registration.',
    'Georgia has no general statewide business license. Most businesses need an occupation tax certificate (usually called a business license) from their city, or from the county if they are in an unincorporated area. Fees, deadlines, and home-business zoning rules vary by locality.',
    'If you sell taxable goods or services, register for sales and use tax with the Georgia Department of Revenue. Forming the LLC does not create any tax accounts for you.',
    'Domestic Georgia LLCs are currently exempt from FinCEN BOI reporting under the interim final rule in effect since March 2025. The federal rule has changed before, so recheck FinCEN before relying on this.',
  ],
  comparisonRows: [
    {
      state: 'Georgia',
      annualReport: '$60/yr, due January 1 to April 1',
      upfrontCost: '$100 online / $110 mail',
      ongoingStateCost: '$60/yr + local business license',
    },
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
  filingFeeDisplay: '$100 online / $110 by mail',
  filingFeeNote: 'Mail filings include a $10 paper service charge.',
  annualReportFee: 60,
  filingTime: 'About 7 business days online and 15 business days by mail, per Georgia.gov.',
  filingTimeShort: '~7 business days online',
  expeditedTime:
    'Two-business-day processing costs an extra $100. Same-day processing (submitted before noon on a weekday) costs an extra $250. One-hour processing costs an extra $1,000 for mail and in-person filings.',
  expeditedFee: 100,
  filingAgency: 'Georgia Secretary of State, Corporations Division',
  filingAgencyUrl: 'https://ecorp.sos.ga.gov/',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Georgia has a flat 4.99% individual income tax for 2026. Standard pass-through LLCs pay no franchise tax. Sales tax applies if you sell taxable goods or services.',
  stateTax:
    'Most Georgia LLCs are pass-through entities, so profit is taxed on the owners\' Georgia returns at the flat 4.99% rate (2026). There is no LLC franchise tax; the recurring state charge is the annual registration.',
  annualReportDue: 'Between January 1 and April 1 each year, starting the year after you form',
  annualReportNote:
    '$60 per year as of 2026 ($50 fee plus a $10 service charge). You can prepay 2 or 3 years at once. A $25 penalty applies after April 1, and a missed registration can lead to administrative dissolution.',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Pick an available Georgia LLC name',
      description:
        'Search the Georgia Corporations Division business search on eCorp to confirm your name is available. The name must include "Limited Liability Company," "LLC," or "L.L.C." (or an accepted abbreviation). Reserving a name is optional: it costs $25, holds the name for 30 days, and is only worth it if you need to lock the name before you are ready to file.',
    },
    {
      title: 'Choose a registered agent with a Georgia street address',
      description:
        'Every Georgia LLC needs a registered agent at a physical Georgia street address where a person can be found during business hours. PO boxes don\'t qualify. You can be your own agent if you have a Georgia address and are there reliably, but that address becomes public. A commercial registered agent usually costs $50 to $150 a year and keeps your home address off the record.',
    },
    {
      title: 'File Articles of Organization online through eCorp',
      description:
        'Create an eCorp account, choose "create or register a business," and select domestic limited liability company. You will enter the LLC name, principal office mailing address, registered agent, organizer, and an email address. The online fee is $100 by credit card. Filing by mail costs $110 and requires the Articles of Organization (Form CD 030) plus Transmittal Form 231. Online is cheaper and about twice as fast.',
    },
    {
      title: 'Wait for approval, or pay to expedite',
      description:
        'Standard processing is about 7 business days online and 15 business days by mail. If you need the LLC sooner, two-business-day processing costs an extra $100 and same-day processing (submitted before noon on a weekday) costs an extra $250. Most founders don\'t need to expedite; start the EIN and bank account prep while you wait.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Once the LLC is approved, apply for an EIN directly on IRS.gov. It is free and usually issued immediately online. You will need it for a business bank account, hiring, and most tax registrations. Don\'t pay a third party for it.',
    },
    {
      title: 'Write an operating agreement and open a business bank account',
      description:
        'Georgia doesn\'t require an operating agreement, and you don\'t file one with the state. Write one anyway: it documents who owns what, who makes decisions, and what happens if a member leaves, and banks often ask for it. Then open a separate business bank account so the LLC\'s money stays separate from yours.',
    },
    {
      title: 'Get your city or county business license',
      description:
        'Georgia has no statewide general business license. Apply for an occupation tax certificate with your city, or with your county if you are in an unincorporated area. Home-based businesses may also need zoning approval. Rules and fees vary, so check your local government\'s business license page before you start taking revenue.',
    },
    {
      title: 'Calendar the annual registration (January 1 to April 1)',
      description:
        'Every Georgia LLC files an annual registration with the Secretary of State between January 1 and April 1, starting the calendar year after it forms. The fee is $60 as of 2026, and you can prepay 2 or 3 years at once. Filing after April 1 adds a $25 penalty, and not filing can get the LLC administratively dissolved. If nothing has changed, the "One Click" option on eCorp is the quickest way to file.',
    },
  ],
  costPage: {
    seoTitle: `Georgia LLC Cost (${GUIDE_YEAR}): $100 to Form, $60/Year`,
    seoDescription:
      'A Georgia LLC costs $100 to form online and $60 a year for the annual registration due April 1. Plus the local business license and the $25 late fee.',
    intro:
      "A Georgia LLC costs $100 to form online, or $110 by mail. After that, the annual registration is $60 a year as of 2026, due between January 1 and April 1, starting the year after you form. There's no franchise tax and no publication cost. The April 1 deadline is the same for every LLC, so if you form in November, your first $60 is due about five months later. The cost the state filing doesn't cover is your city or county occupation tax certificate, which most Georgia businesses need and which varies by locality.",
    formTotal: 100,
    annualDisplay: '$60/yr',
    yearOneTotal: 100,
    yearTwoTotal: 60,
    yearOneNote: 'Online Articles of Organization; $110 by mail',
    yearTwoNote: 'Annual registration, plus your local business license',
    schedule: [
      { item: 'Articles of Organization', cost: '$100 / $110', due: 'When you form. $100 online, $110 by mail with the paper service charge.' },
      {
        item: 'Annual registration',
        cost: '$60',
        due: 'Between January 1 and April 1 every year, starting the year after you form. You can prepay 2 or 3 years.',
      },
      { item: 'Late penalty', cost: '+$25', due: 'Added after April 1. A missed registration can lead to administrative dissolution.' },
      {
        item: 'Occupation tax certificate',
        cost: 'Varies',
        due: 'Before you start, from your city, or your county if unincorporated. Fees and renewal dates are set locally.',
      },
      { item: 'Expedited processing', cost: '+$100', due: 'Optional. Two business days instead of about seven online.' },
    ],
    verdict:
      "File online for $100. It's $10 cheaper than mail and about twice as fast, around 7 business days. Skip the $100 two-day expedite unless a bank, lease, or contract is waiting on the LLC. Pay for a registered agent only if you don't want your home address on the public record or can't be at a Georgia street address during business hours. Put April 1 on your calendar every year starting the year after you form.",
    faq: [
      {
        question: 'How much does an LLC cost in Georgia?',
        answer:
          "$100 to file the Articles of Organization online, or $110 by mail. That's the whole state cost in year one if you serve as your own registered agent. Starting the year after you form, the annual registration is $60 a year. Most businesses also pay for a city or county business license, which varies by location.",
      },
      {
        question: 'What is the Georgia LLC annual fee?',
        answer:
          "$60 a year as of 2026, made up of a $50 fee and a $10 service charge. It's due between January 1 and April 1 every year, starting the calendar year after you form, no matter what month you formed in. Filing after April 1 adds a $25 penalty, and a missed registration can lead to administrative dissolution. You can prepay 2 or 3 years at once.",
      },
      {
        question: 'Do I need a business license for a Georgia LLC?',
        answer:
          "Usually, but not from the state. Georgia has no general state business license. Most businesses need an occupation tax certificate from their city, or from the county in an unincorporated area. Fees, deadlines, and home-business zoning rules vary, so check your local government's business license page before you start taking revenue.",
      },
      {
        question: 'Is the Georgia expedite fee worth it?',
        answer:
          "Rarely. Online filings take about 7 business days. Two-business-day processing costs $100 more and same-day costs $250 more, which only makes sense when a deadline depends on the LLC existing. Start the EIN and bank account prep while you wait.",
      },
      {
        question: 'How much is a registered agent in Georgia?',
        answer:
          "Free if you serve yourself, but you need a Georgia street address where you can be found during business hours, and that address goes on the public record. A commercial registered agent usually costs $50 to $150 a year.",
      },
    ],
    sourceUrls: [
      'https://sos.ga.gov/how-to-guide/filing-fees-and-expedited-processing-document-filings',
      'https://sos.ga.gov/how-to-guide/how-file-annual-registration',
      'https://georgia.gov/renew-llc',
      'https://georgia.org/small-business/get-business-license-georgia',
    ],
  },
  registeredAgentPage: {
    lastVerified: '2026-10-06',
    seoTitle: `Georgia Registered Agent (${GUIDE_YEAR}): Rules, Cost & Who to Use`,
    seoDescription:
      'Every Georgia LLC needs an agent at a Georgia street address. Who can be their own, what a paid agent costs, and the $20 filing to switch.',
    intro:
      "Every Georgia LLC needs a registered agent: a Georgia resident or a company authorized in Georgia, with a business office at a Georgia street address where legal papers can be delivered. If you live in Georgia and have a business address that isn't your home, be your own agent and pay nothing. If you live anywhere else, you can't serve, so you'll pay a commercial agent, usually $50 to $150 a year. Switching agents later takes an amended annual registration: a $20 filing fee, or $30 once Georgia adds its $10 service charge.",
    facts: [
      { label: 'What Georgia calls it', detail: 'Registered agent, at a registered office (O.C.G.A. § 14-11-209).' },
      {
        label: 'Who can serve',
        detail: 'An individual Georgia resident, a corporation, another LLC, or an out-of-state corporation or LLC with authority to do business in Georgia.',
      },
      {
        label: 'Address rule',
        detail: 'A Georgia street address that is also the agent’s business office. A P.O. box isn’t a street address.',
      },
      {
        label: 'Change of agent',
        detail: '$20 filing fee ($30 with Georgia’s $10 service charge) for an amended annual registration on eCorp. If you haven’t filed this year’s annual registration yet, update the agent on it instead, with no separate fee.',
      },
      {
        label: '60-day rule',
        detail: 'Tell the Secretary of State within 60 days when your agent changes or resigns. Missing that is grounds for administrative dissolution.',
      },
      {
        label: 'If the agent resigns',
        detail: 'They file a statement of resignation (no fee) and notify you on or before that day. It takes effect on the 31st day after filing, sooner if you name a new agent.',
      },
      {
        label: 'With no agent',
        detail: 'Someone suing the LLC can serve the Secretary of State after mailing the papers to your last registered office.',
      },
      {
        label: 'Administrative dissolution',
        detail: '60 days without an agent is grounds. After the state’s notice, you have 60 days to fix it.',
      },
      { label: 'Reinstatement', detail: '$250 filing fee. Georgia’s reinstatement guide lists $260 with a $10 service charge.' },
    ],
    lapse: [
      "Yes. Georgia requires every LLC to continuously maintain a registered agent and registered office in the state. The agent is where lawsuits and state notices are delivered. If you have no agent, or the agent can't be found at the registered office, the person suing you can serve the Georgia Secretary of State instead, after mailing the papers to your last registered office. If nobody is there to open that mail, the case can move forward without you knowing about it.",
      "A missing agent also puts the LLC at risk. If it goes 60 days or more without an agent, or doesn't tell the state within 60 days that its agent resigned or changed, the Secretary of State can start administrative dissolution. You get a notice and 60 days to fix it. After that, reinstating costs a $250 filing fee, or $260 with Georgia's service charge.",
    ],
    selfAgent: [
      "You can be your own agent if you live in Georgia and have a Georgia street address where you can be found during business hours. It's free, and you name yourself as the agent on the Articles of Organization.",
      "What it costs you is privacy and availability. The address you list goes on the LLC's public record, and a process server can show up there during business hours to hand you a lawsuit. If that address is your home, anyone who looks up your LLC can find where you live. If you have a shop or office in Georgia where someone is reliably there during the day, use that address and skip the fee.",
      "If you live outside Georgia, you can't be your own agent. You can name a friend or relative who lives there, but they take on the job: staying reachable at that address, forwarding lawsuits quickly, and telling you right away if they plan to resign, so you can replace them before Georgia's 60-day limit runs out.",
    ],
    paidAgent: [
      "A commercial agent gives your LLC a Georgia street address, receives legal papers and state mail, and forwards them to you, usually as same-day scans. Mainstream providers charge $50 to $150 a year. Georgia's 60-day rule makes reliability matter here: if your agent resigns, you need to see their notice and name a replacement before the state counts you as having no agent.",
      "Northwest charges $125 a year with no per-document fees, and its Georgia address goes on the public record instead of yours. That's what you're paying for: a reliable in-state address and someone who will scan a lawsuit the day it arrives. If you live in Georgia and already have a business address, you don't need it.",
    ],
    verdict:
      "If you live in Georgia and have a business address that isn't your home, be your own registered agent and keep the $125. Everyone else, including every founder who lives outside Georgia, should hire a commercial agent. Our pick is Northwest: $125 a year, no per-document fees, and its address on the public record instead of yours.",
    changeAgent: [
      "File an amended annual registration on eCorp with the new agent's name and Georgia street address. The filing fee is $20, and Georgia's annual registration guide shows $30 once its $10 service charge is added. If you haven't filed this year's annual registration yet, change the agent on that filing instead and skip the amendment.",
      "Sign up with the new agent first, since the filing needs their name and address. Don't cancel the old agent until eCorp shows the new one on your LLC's record. File within 60 days of any change, because Georgia treats a late update as grounds for dissolution.",
    ],
    faq: [
      {
        question: 'Do I need a registered agent in Georgia?',
        answer:
          'Yes. Every Georgia LLC has to name a registered agent on its Articles of Organization and keep one for as long as the LLC exists. Going 60 days without one is grounds for administrative dissolution, and reinstating costs a $250 filing fee ($260 with the service charge).',
      },
      {
        question: 'Can I be my own registered agent in Georgia?',
        answer:
          "Yes, if you live in Georgia and have a Georgia street address where you can be found during business hours. It's free. The address goes on the public record. Non-residents can't serve as their own agent.",
      },
      {
        question: 'How much does a registered agent cost in Georgia?',
        answer:
          'Nothing if you serve yourself. Mainstream commercial agents charge $50 to $150 a year. Northwest charges $125 a year with no per-document fees. Changing agents costs a $20 state filing fee, or $30 with the service charge.',
      },
      {
        question: 'Can I use a P.O. box or virtual mailbox for my Georgia registered agent?',
        answer:
          "No. Georgia requires the registered office to be a street address that is also the agent's business office. A P.O. box isn't a street address, and if the agent can't be found there, the person suing you can serve the Secretary of State instead.",
      },
      {
        question: 'How do I change my registered agent in Georgia?',
        answer:
          'Sign up with the new agent, then file an amended annual registration on eCorp with their name and address. The filing fee is $20, or $30 with the service charge. If you haven’t filed this year’s annual registration yet, make the change on it instead.',
      },
      {
        question: 'What happens if my Georgia registered agent resigns?',
        answer:
          'They file a statement of resignation and must notify you on or before the day they file. The resignation takes effect on the 31st day after filing. Name a new agent before then. If the LLC goes 60 days without one, the state can start administrative dissolution.',
      },
    ],
    sourceUrls: [
      'https://law.justia.com/codes/georgia/title-14/chapter-11/article-2/section-14-11-209/',
      'https://law.justia.com/codes/georgia/title-14/chapter-11/article-6/section-14-11-603/',
      'https://law.justia.com/codes/georgia/title-14/chapter-11/article-11/section-14-11-1101/',
      'https://ecorp.sos.ga.gov/ARForm',
    ],
  },
  costBreakdown: [
    { item: 'Articles of Organization (online)', cost: '$100', required: 'Yes (one filing path)', notes: 'Credit card via eCorp' },
    {
      item: 'Articles of Organization (mail)',
      cost: '$110',
      required: 'Yes (one filing path)',
      notes: 'Includes $10 paper service charge; needs Form 231',
    },
    { item: 'Name reservation', cost: '$25', required: 'Optional', notes: 'Holds the name for 30 days' },
    { item: 'Registered agent service', cost: '$50-$150/yr', required: 'Optional', notes: 'Self-serve for $0 if eligible' },
    { item: 'Expedited: 2 business days', cost: '+$100', required: 'Optional', notes: 'On top of the filing fee' },
    { item: 'Expedited: same day', cost: '+$250', required: 'Optional', notes: 'Submit before noon on a weekday' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal; not filed' },
    {
      item: 'City or county business license',
      cost: 'Varies by locality',
      required: 'Usually',
      notes: 'Occupation tax certificate',
    },
    {
      item: 'Annual registration',
      cost: '$60/yr',
      required: 'Yes (recurring)',
      notes: 'Due January 1 to April 1, starting the year after formation',
    },
    { item: 'Late annual registration penalty', cost: '+$25', required: 'Only if late', notes: 'After April 1' },
    {
      item: 'Total (bare minimum DIY)',
      cost: '$100 to form, then $60/yr',
      isEmphasized: true,
      notes: 'Online filing, self-serve registered agent, before local license fees',
    },
    {
      item: 'Total (typical first year with commercial agent)',
      cost: '$150-$250 + local license',
      isEmphasized: true,
      notes: 'Online filing + typical registered agent; annual registration starts year two',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Georgia?',
      answer:
        'The state filing fee is $100 online or $110 by mail. After that, the annual registration is $60 a year starting the year after you form. A commercial registered agent typically adds $50 to $150 a year, and most businesses also pay a city or county business license fee that varies by location.',
    },
    {
      question: 'What is the Georgia LLC filing fee?',
      answer:
        'The Articles of Organization cost $100 when filed online through eCorp and $110 by mail, which includes a $10 paper service charge. Expedited processing is extra: $100 for two business days or $250 for same day.',
    },
    {
      question: 'How long does it take to form an LLC in Georgia?',
      answer:
        'About 7 business days for online filings and 15 business days by mail. You can pay $100 extra for two-business-day processing or $250 extra for same-day processing if you submit before noon on a weekday.',
    },
    {
      question: 'Where do I file a Georgia LLC?',
      answer:
        'With the Georgia Secretary of State, Corporations Division, online through the eCorp system at ecorp.sos.ga.gov. You can also file by mail or in person at 2 Martin Luther King Jr. Dr. SE, Suite 313, West Tower, Atlanta.',
    },
    {
      question: 'How do I register an LLC in Georgia?',
      answer:
        'Registering, forming, and filing a Georgia LLC all mean filing Articles of Organization with the Secretary of State\'s Corporations Division: $100 online through eCorp or $110 by mail. That creates the LLC. Georgia has no statewide business license, so the next registration is local: an occupation tax certificate from your city, or your county if you are in an unincorporated area. Register with the Georgia Department of Revenue if you will collect sales tax or have employees. Then file the $60 annual registration between January 1 and April 1 each year.',
    },
    {
      question: 'How do I apply for an LLC in Georgia online?',
      answer:
        'Create an account at ecorp.sos.ga.gov, choose "create or register a business," and select domestic limited liability company. Enter the name, principal office mailing address, registered agent, organizer, and an email address, then pay $100 by card. Online filings take about 7 business days, or pay $100 more for two-business-day processing. Online is $10 cheaper and about twice as fast as mailing Form CD 030, so there is no reason to file on paper.',
    },
    {
      question: 'What is the formation document called in Georgia?',
      answer:
        'Articles of Organization. The paper version is Form CD 030, and mail filings also need Transmittal Form 231. Online filers fill in the same information on eCorp instead.',
    },
    {
      question: 'Does Georgia require a registered agent?',
      answer:
        'Yes. Every Georgia LLC must keep a registered agent with a physical Georgia street address where an individual can be found in person. PO boxes don\'t qualify, and the agent\'s address is public.',
    },
    {
      question: 'Can I be my own registered agent in Georgia?',
      answer:
        'Yes, if you have a Georgia street address and are reliably there during business hours to accept legal papers. The tradeoff is that the address goes on the public record. If you work from home or travel often, a commercial registered agent is the safer choice.',
    },
    {
      question: 'Does Georgia require an operating agreement?',
      answer:
        'No. Georgia doesn\'t require one and you don\'t file it with the state. You should still have one in writing, especially with more than one member, because it sets ownership, decision-making, and exit rules, and banks often ask for it.',
    },
    {
      question: 'When is the Georgia LLC annual registration due?',
      answer:
        'Between January 1 and April 1 every year, starting the calendar year after you form. The deadline is the same for every LLC regardless of formation date. The fee is $60 as of 2026, and filing after April 1 adds a $25 penalty.',
    },
    {
      question: 'Does Georgia require newspaper publication for an LLC?',
      answer:
        'No. Georgia\'s publication requirement applies to corporations, not LLCs, so there is no newspaper notice cost when you form a Georgia LLC.',
    },
    {
      question: 'Do I need a business license for my Georgia LLC?',
      answer:
        'Usually, but not from the state. Georgia has no general state business license. Most businesses need an occupation tax certificate from their city, or from the county if they are in an unincorporated area. Some professions also need a state professional license.',
    },
    {
      question: 'How is a Georgia LLC taxed?',
      answer:
        'By default, profit passes through to the owners and is taxed on their personal returns. Georgia\'s individual income tax is a flat 4.99% for 2026. Georgia doesn\'t charge a franchise tax on standard pass-through LLCs. If you sell taxable goods or services, you also collect and remit sales tax.',
    },
    {
      question: 'Can I form a Georgia LLC if I don\'t live in Georgia?',
      answer:
        'Yes. Members don\'t have to live in Georgia. You do need a registered agent with a Georgia street address, so out-of-state owners normally hire a commercial registered agent.',
    },
    {
      question: 'Do Georgia LLCs need to file a BOI report?',
      answer:
        'Not currently. Under FinCEN\'s interim final rule from March 2025, domestic U.S. companies, including Georgia LLCs, are exempt from BOI reporting. The rule could change, so recheck FinCEN before filing.',
    },
  ],
  proscons: {
    pros: [
      'Low cost to start: $100 online, with no publication requirement.',
      'No franchise tax or minimum annual tax for standard pass-through LLCs.',
      'The annual registration is cheap and can be prepaid for up to 3 years.',
      'Online filing through eCorp is fast, about 7 business days, with affordable expedite options.',
    ],
    cons: [
      "The annual registration deadline (April 1) is fixed for everyone, so it's easy to forget in your first year.",
      'Business licenses are handled by cities and counties, so rules and fees vary and take extra research.',
      'Your registered agent address is public, which matters if you work from home.',
      'State fees have been changing (service charges were added in 2025), so recheck the fee schedule before you file.',
    ],
  },
};

import { GUIDE_YEAR } from '../site';
import type { StateOverride } from './types';

export const illinois: StateOverride = {
  contentStatus: 'ready',
  seoTitle: `How to Start an LLC in Illinois (${GUIDE_YEAR}): $150 Fee, Steps & Timeline`,
  seoDescription:
    'Start an Illinois LLC for $150. Real steps, the $75 annual report due before your anniversary month, the 1.5% replacement tax, and Chicago license rules.',
  lastUpdated: '2026-10-05',
  intro:
    "An Illinois LLC costs $150 to form. You file Articles of Organization (Form LLC-5.5) with the Illinois Secretary of State, Department of Business Services, and online filings take about 10 business days. After that, the only required state filing is a $75 annual report, due before the first day of the month you formed in, every year starting the year after you form. There's no newspaper publication and no general state business license. Because the annual report deadline follows your formation month instead of a fixed calendar date, it's easy to lose track of. If your LLC is taxed as a partnership or an S corporation, Illinois charges a 1.5% replacement tax on the LLC's net income on top of the 4.95% personal income tax. A default single-member LLC doesn't pay it.",
  whatYoullNeed:
    'To form an Illinois LLC, you will need an available name that includes "Limited Liability Company," "LLC," or "L.L.C.", a registered agent with an Illinois street address, your principal place of business address, the name and address of each organizer, the names and business addresses of any managers (or members acting as managers), an email address for the filing confirmation, and $150 by credit card for online filing.',
  closing:
    "If you live and work in Illinois, form in Illinois. A Wyoming or Delaware LLC doing business here would still register as a foreign LLC, paying the same $150 application fee and $75 annual report, on top of its home state's fees. Put two dates on your calendar: the annual report, due before the first day of your anniversary month (an LLC formed in October 2026 files before October 1, 2027), and your city license renewal if you operate in Chicago or another city that requires one. If you add a partner or elect S-corp status, plan for the 1.5% replacement tax on the LLC's return. You can be your own registered agent if you live in Illinois and are reliably at that address. A commercial agent, usually $50 to $150 a year, is worth it if you work from home and don't want that address on the public record.",
  inlineCtaDescription:
    "Illinois requires a registered agent at an Illinois street address, and that address shows up in the Secretary of State's public business search. If you have an Illinois office where someone is there during business hours, you can be your own agent and skip this. If you work from home, travel, or live outside Illinois, a professional registered agent, usually $50 to $150 a year, keeps your home address off the record and forwards legal papers so a lawsuit or state notice doesn't sit unopened.",
  sidebarCtaDescription:
    "If you don't want your home address in Illinois's public business search, or you can't be at an Illinois street address during business hours, use a professional registered agent.",
  officialLinks: [
    {
      label: 'Information for forming an LLC online (Illinois SOS)',
      url: 'https://www.ilsos.gov/departments/business-services/organization/llc-instructions.html',
    },
    { label: 'File LLC Articles of Organization online', url: 'https://apps.ilsos.gov/llcarticles/index.do' },
    {
      label: 'LLC forms and fees, including expedited fees (Illinois SOS)',
      url: 'https://www.ilsos.gov/publications/business_services/llc.html',
    },
    {
      label: 'File an LLC annual report online',
      url: 'https://www.ilsos.gov/departments/business-services/annual-reports/llc-instructions.html',
    },
    {
      label: 'LLC reinstatement after administrative dissolution',
      url: 'https://www.ilsos.gov/departments/business-services/reinstatement/llcreinstatement.html',
    },
    {
      label: 'Adopting an assumed LLC name',
      url: 'https://www.ilsos.gov/departments/business_services/assumed_name_adoptions/llcinstructions.html',
    },
    {
      label: 'Illinois LLC Act fee schedule (805 ILCS 180/50-10)',
      url: 'https://www.ilga.gov/documents/legislation/ilcs/documents/080501800K50-10.htm',
    },
    {
      label: 'Annual report due date (805 ILCS 180/50-1)',
      url: 'https://www.ilga.gov/documents/legislation/ilcs/documents/080501800K50-1.htm',
    },
    {
      label: 'Late annual report penalty (805 ILCS 180/50-15)',
      url: 'https://www.ilga.gov/documents/legislation/ilcs/documents/080501800K50-15.htm',
    },
    { label: 'Illinois income and replacement tax rates', url: 'https://tax.illinois.gov/research/taxrates/income.html' },
    {
      label: 'Which Illinois tax return an LLC files (IDOR)',
      url: 'https://tax.illinois.gov/questionsandanswers/answer.604.html',
    },
    { label: 'Register a business with the Illinois Department of Revenue', url: 'https://tax.illinois.gov/businesses/registration.html' },
    {
      label: 'City of Chicago business licensing',
      url: 'https://www.chicago.gov/city/en/sites/chicago-business-licensing/home/applyingforabusinesslicense.html',
    },
    { label: 'FinCEN beneficial ownership information', url: 'https://www.fincen.gov/boi' },
    {
      label: 'Apply for an EIN with the IRS',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
  ],
  taxHighlights: [
    "Illinois's individual income tax is a flat 4.95% of net income, the rate in effect since July 1, 2017. A default LLC passes its profit through to your personal Illinois return at that rate.",
    'Illinois charges a Personal Property Replacement Tax on business entities: 1.5% of net Illinois income for partnerships and S corporations, 2.5% for C corporations. A multi-member LLC taxed as a partnership files Form IL-1065 and pays the 1.5%. A default single-member LLC is disregarded, has no separate Illinois filing, and does not pay it.',
    'Partnerships and S corporations can elect the Illinois pass-through entity (PTE) tax at 4.95% on Form IL-1065 or IL-1120-ST. Members then get a matching credit on their personal returns. This only matters for multi-member or S-corp LLCs.',
    'Illinois has no franchise tax for LLCs and no general statewide business license. Many cities require a local license, and Chicago requires a City business license for most businesses, including home-based ones.',
    "U.S.-formed LLCs no longer file BOI reports with FinCEN. FinCEN's final rule, effective August 14, 2026, made the exemption permanent. Recheck FinCEN if your LLC was formed outside the U.S.",
  ],
  comparisonRows: [
    {
      state: 'Illinois',
      annualReport: '$75/yr, due before 1st day of anniversary month',
      upfrontCost: '$150',
      ongoingStateCost: '$75/yr + 1.5% replacement tax if taxed as partnership or S-corp',
    },
    {
      state: 'Indiana',
      annualReport: 'Business Entity Report every 2 years',
      upfrontCost: '$95 online',
      ongoingStateCost: '$32 every 2 years',
    },
    {
      state: 'Michigan',
      annualReport: 'Annual Statement, $25 by Feb 15',
      upfrontCost: '$50',
      ongoingStateCost: '$25/yr',
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
  filingFee: 150,
  filingFeeDisplay: '$150',
  filingFeeNote:
    'The same $150 applies online or by mail. Online filings add a payment processor fee. A Series LLC costs $400 to form.',
  annualReportFee: 75,
  filingTime: 'About 10 business days for online filings, per the Illinois Secretary of State.',
  filingTimeShort: '~10 business days online',
  expeditedTime:
    '24-hour processing (excluding weekends and holidays) costs an extra $100, for $250 total online. Paper expedite requests must be made in person at the Springfield or Chicago office, not by mail.',
  expeditedFee: 100,
  filingAgency: 'Illinois Secretary of State, Department of Business Services',
  filingAgencyUrl: 'https://www.ilsos.gov/departments/business-services/organization/llc-instructions.html',
  agentTerm: 'registered agent',
  stateTaxRate:
    'Illinois has a flat 4.95% individual income tax. LLCs taxed as partnerships or S corporations also pay a 1.5% replacement tax on net Illinois income. There is no LLC franchise tax.',
  stateTax:
    "A default single-member LLC is disregarded: its profit goes on your Form IL-1040 at the flat 4.95% rate, with no separate LLC return. A multi-member LLC taxed as a partnership files Form IL-1065 and pays the 1.5% Personal Property Replacement Tax on its net Illinois income, and members pay 4.95% on their shares. An LLC taxed as an S corporation files Form IL-1120-ST and also pays the 1.5%.",
  annualReportDue: 'Before the first day of your anniversary month (the month you formed) each year, starting the year after you form',
  annualReportNote:
    '$75 per year, plus $50 per series for a Series LLC. You can file in the 60 days before the due date. If it is still unfiled by the first day of the second month after your anniversary month, a $100 penalty applies, plus $100 for each additional year. Unfiled reports can lead to administrative dissolution, and reinstatement costs $200 plus every missed report and penalty.',
  requiresOperatingAgreement: false,
  requiresPublication: false,
  steps: [
    {
      title: 'Pick an available Illinois LLC name',
      description:
        'Search the Secretary of State business entity search to confirm the name is distinguishable from existing Illinois businesses. The name must include "Limited Liability Company," "LLC," or "L.L.C." and can\'t include "Corporation," "Inc.," "Ltd.," "Co.," or "L.P." Reserving a name is optional: Form LLC-1.15 costs $25 and holds the name for 90 days. You don\'t need it unless you\'re weeks away from filing.',
    },
    {
      title: 'Choose a registered agent with an Illinois street address',
      description:
        'Every Illinois LLC must keep a registered agent and registered office in Illinois. The agent can be an Illinois resident (including you) or a business authorized to operate in Illinois. The registered office needs a full street address with city and county, so a PO box alone won\'t work. That address is public. A commercial registered agent usually costs $50 to $150 a year and keeps your home address off the record.',
    },
    {
      title: 'File Articles of Organization (Form LLC-5.5) online',
      description:
        'File through the Secretary of State\'s online LLC Articles of Organization system and choose "standard" LLC unless you specifically need a Series LLC. You\'ll enter the name, principal place of business, registered agent and office, organizer, and any managers. The fee is $150 by credit card, plus a payment processor fee. Mailing the paper Form LLC-5.5 costs the same $150, but online gets you an emailed confirmation and a published 10-business-day turnaround.',
    },
    {
      title: 'Wait about 10 business days, or pay $100 to expedite',
      description:
        'Standard online processing is about 10 business days. If you need the LLC faster, 24-hour processing costs an extra $100, for $250 total, excluding weekends and holidays. Most founders don\'t need it. Use the wait to line up your EIN application and bank account.',
    },
    {
      title: 'Get a free EIN from the IRS',
      description:
        'Once the Articles are approved, apply for an EIN on IRS.gov. It\'s free and usually issued right away online. You\'ll need it for a business bank account, hiring, and Illinois tax registration. Don\'t pay anyone to get it for you.',
    },
    {
      title: 'Write an operating agreement and open a business bank account',
      description:
        'Illinois doesn\'t require a written operating agreement, and you don\'t file one with the state. Write one anyway, even as a single member. It records who owns what and how decisions get made, and banks often ask for it. Then open a separate business account so LLC money stays out of your personal account.',
    },
    {
      title: 'Register for Illinois taxes and any local license',
      description:
        'If you\'ll sell taxable goods, hire employees, or make purchases subject to Illinois tax, register with the Department of Revenue on MyTax Illinois. Online registration takes about one to two business days. Illinois has no general state business license, but cities can require one. In Chicago, most businesses, including home-based ones, need a City of Chicago business license, issued for two years at a time.',
    },
    {
      title: 'Calendar the $75 annual report before your anniversary month',
      description:
        'The annual report is due before the first day of the month you formed in, every year starting the year after you form. An LLC formed in October 2026 files before October 1, 2027. You can file online up to 60 days early. The fee is $75. Miss the deadline and the LLC falls out of good standing; leave it unfiled past the first day of the second month after your anniversary month and a $100 penalty applies.',
    },
  ],
  sections: [
    {
      id: 'illinois-replacement-tax',
      heading: 'The Illinois replacement tax: who pays the 1.5% and who doesn\'t',
      summary:
        "Illinois charges a Personal Property Replacement Tax on the net income of business entities. It's separate from the 4.95% personal income tax. Whether your LLC pays it depends on how the LLC is taxed federally.",
      facts: [
        {
          label: 'Single-member LLC (default)',
          detail:
            'Disregarded for tax purposes. The LLC has no Illinois income tax filing of its own. Profit goes on your Form IL-1040 at 4.95%. No replacement tax.',
        },
        {
          label: 'Multi-member LLC (default)',
          detail:
            'Taxed as a partnership. The LLC files Form IL-1065 and pays 1.5% of its net Illinois income. Members also pay 4.95% on their shares on their own returns.',
        },
        {
          label: 'LLC taxed as an S corporation',
          detail:
            'Files Form IL-1120-ST and pays 1.5% of its net Illinois income. Shareholders pay 4.95% on their shares.',
        },
        {
          label: 'LLC taxed as a C corporation',
          detail: 'Pays 7% Illinois corporate income tax plus 2.5% replacement tax on net income.',
        },
        {
          label: 'Optional PTE tax',
          detail:
            'Partnerships and S corporations can elect to pay 4.95% at the entity level, and members get a matching credit. The election is made each year on the entity return.',
        },
      ],
      paragraphs: [
        'For a solo freelancer, this means the default setup costs nothing extra in Illinois. The replacement tax shows up when you add a partner or elect S-corp status. At $80,000 of net Illinois income, an S-corp LLC owes about $1,200 a year in replacement tax that a default single-member LLC would not.',
        'Put that $1,200 into your S-corp math alongside payroll and bookkeeping costs. It raises the income level where an S-corp election starts paying off for an Illinois owner.',
      ],
      related: { label: 'Run the S-corp math for your LLC', href: '/s-corp/election-calculator/' },
    },
    {
      id: 'illinois-annual-report-timing',
      heading: 'When your Illinois annual report is due (it depends on your formation month)',
      summary:
        "Illinois doesn't use one statewide deadline. Each LLC's annual report is due before the first day of its anniversary month, the month the Secretary of State filed its Articles of Organization.",
      facts: [
        { label: 'Fee', detail: '$75 a year, plus $50 per series if you formed a Series LLC.' },
        {
          label: 'Due',
          detail: 'Before the first day of your anniversary month, starting the year after you form.',
        },
        { label: 'Filing window', detail: 'Opens 60 days before the first day of your anniversary month.' },
        {
          label: 'Example',
          detail:
            'Formed October 10, 2026: file between early August and September 30, 2027. The report is late on October 1, 2027.',
        },
        {
          label: 'Penalty',
          detail:
            'If it is still unfiled by the first day of the second month after your anniversary month (December 1 in the example), you owe a $100 penalty, plus $100 for each additional year. The statute has no waiver.',
        },
        {
          label: 'Administrative dissolution',
          detail:
            'The Secretary of State can dissolve an LLC that doesn\'t file. Reinstatement costs $200 plus all missed reports (up to six years) and penalties.',
        },
      ],
      paragraphs: [
        'A late report also blocks other filings. The Secretary of State won\'t accept amendments or agent changes from a delinquent LLC until it\'s back in good standing.',
        'If you change your registered agent, file that change separately. The online annual report can\'t update the agent or registered office.',
      ],
      related: { label: 'Compare registered agent options: Northwest vs Bizee', href: '/northwest-vs-bizee/' },
    },
  ],
  costBreakdown: [
    {
      item: 'Articles of Organization (Form LLC-5.5)',
      cost: '$150',
      required: 'Yes',
      notes: 'Same fee online or by mail; online adds a payment processor fee',
    },
    { item: 'Expedited 24-hour processing', cost: '+$100', required: 'Optional', notes: '$250 total; excludes weekends and holidays' },
    { item: 'Name reservation (Form LLC-1.15)', cost: '$25', required: 'Optional', notes: 'Holds the name for 90 days' },
    { item: 'Registered agent service', cost: '$50-$150/yr', required: 'Optional', notes: 'Self-serve for $0 if you have an Illinois address' },
    { item: 'EIN', cost: 'Free', required: 'Recommended', notes: 'IRS direct' },
    { item: 'Operating agreement', cost: 'Free if you draft it yourself', required: 'Recommended', notes: 'Internal; not filed' },
    {
      item: 'Assumed name (DBA)',
      cost: '$30-$150',
      required: 'Only if you use another name',
      notes: 'Prorated to the next year ending in 0 or 5; $150 to renew every 5 years',
    },
    {
      item: 'City business license',
      cost: 'Varies by city',
      required: 'Depends on city',
      notes: 'Chicago requires one for most businesses',
    },
    {
      item: 'Annual report',
      cost: '$75/yr',
      required: 'Yes (recurring)',
      notes: 'Due before the 1st day of your anniversary month, starting year two',
    },
    { item: 'Late annual report penalty', cost: '+$100', required: 'Only if late', notes: 'Plus $100 per additional year' },
    { item: 'Reinstatement after dissolution', cost: '$200', required: 'Only if dissolved', notes: 'Plus all missed reports and penalties' },
    {
      item: 'Series LLC (instead of standard)',
      cost: '$400',
      required: 'Optional',
      notes: '$50 per series designation; annual report adds $50 per series',
    },
    {
      item: 'Total (bare minimum DIY)',
      cost: '$150 to form, then $75/yr',
      isEmphasized: true,
      notes: 'Online filing, self-serve registered agent, before any city license',
    },
    {
      item: 'Total (typical first year with commercial agent)',
      cost: '$200-$300',
      isEmphasized: true,
      notes: 'Filing + typical registered agent; the $75 annual report starts year two',
    },
  ],
  faq: [
    {
      question: 'How much does it cost to start an LLC in Illinois?',
      answer:
        'The state filing fee is $150, online or by mail. After that, the annual report is $75 a year starting the year after you form. A commercial registered agent typically adds $50 to $150 a year, and some cities, including Chicago, charge for a local business license.',
    },
    {
      question: 'What is the Illinois LLC filing fee?',
      answer:
        'Articles of Organization cost $150. Online filings also carry a payment processor fee. Expedited 24-hour processing adds $100, for $250 total. A Series LLC costs $400 to form instead of $150.',
    },
    {
      question: 'How long does it take to form an LLC in Illinois?',
      answer:
        'About 10 business days for online filings, according to the Secretary of State. Expedited service costs $100 more and returns a response within 24 hours, excluding weekends and holidays. Plan on longer for paper filings.',
    },
    {
      question: 'Where do I file an Illinois LLC?',
      answer:
        'With the Illinois Secretary of State, Department of Business Services, through its online LLC Articles of Organization system at apps.ilsos.gov. You can also mail paper Form LLC-5.5 to the department in Springfield.',
    },
    {
      question: 'What is the formation document called in Illinois?',
      answer:
        'Articles of Organization. The paper version is Form LLC-5.5, or LLC-5.5(S) for a Series LLC. Online filers enter the same information in the Secretary of State\'s online system.',
    },
    {
      question: 'How much is the Illinois LLC annual report and when is it due?',
      answer:
        '$75 a year, due before the first day of your anniversary month, which is the month your LLC was formed. The first one is due the year after you form. If it\'s still unfiled by the first day of the second month after your anniversary month, there\'s a $100 penalty.',
    },
    {
      question: 'Does Illinois require a registered agent?',
      answer:
        'Yes. Every Illinois LLC must continuously keep a registered agent and registered office in Illinois. The agent must be an Illinois resident or a business authorized to operate in Illinois, and the office needs an Illinois street address.',
    },
    {
      question: 'Can I be my own registered agent in Illinois?',
      answer:
        'Yes, if you live in Illinois and can reliably receive legal papers at an Illinois street address. That address becomes public. If you work from home or travel often, a commercial agent at $50 to $150 a year is the safer choice.',
    },
    {
      question: 'Does Illinois require an operating agreement?',
      answer:
        'No. Illinois law doesn\'t require one, it can even be oral, and you never file it with the state. Write one anyway. It sets ownership and decision rules, and banks often ask for it.',
    },
    {
      question: 'Does Illinois require newspaper publication for an LLC?',
      answer:
        'No. Illinois has no publication requirement for LLCs, so there\'s no newspaper cost after you file.',
    },
    {
      question: 'Do I need a business license for my Illinois LLC?',
      answer:
        'Not from the state, unless your profession is licensed. Illinois has no general state business license. Your city or county may require one. In Chicago, most businesses, including home-based ones, need a City of Chicago business license.',
    },
    {
      question: 'How is an Illinois LLC taxed?',
      answer:
        'A default single-member LLC passes its profit to your personal Illinois return at the flat 4.95% rate, with no separate LLC return. A multi-member LLC, or any LLC taxed as an S corporation, also pays a 1.5% replacement tax on its net Illinois income. There\'s no franchise tax.',
    },
    {
      question: 'Do I need to file a DBA for my Illinois LLC?',
      answer:
        'Only if you do business under a name other than your exact LLC name. Illinois LLCs file assumed names with the Secretary of State, not the county. The fee is prorated from $150 down to $30 depending on the year, the name runs until your anniversary month in the next year ending in 0 or 5, and renewal is $150 for five years.',
    },
    {
      question: 'Can I form an Illinois LLC if I don\'t live in Illinois?',
      answer:
        'Yes. Members don\'t need to live in Illinois, and your principal place of business can be anywhere. You do need a registered agent with an Illinois address, so out-of-state owners usually hire a commercial agent.',
    },
    {
      question: 'Do Illinois LLCs need to file a BOI report?',
      answer:
        'No. FinCEN\'s final rule, effective August 14, 2026, permanently exempts U.S.-formed companies, including Illinois LLCs, from BOI reporting. Recheck FinCEN before filing if your situation involves a foreign-formed company.',
    },
  ],
  proscons: {
    pros: [
      'No publication requirement and no franchise tax.',
      'Flat 4.95% income tax, and a default single-member LLC pays no replacement tax.',
      'The $75 annual report is the only recurring state filing for most LLCs.',
      'Online filing is published at about 10 business days, with a $100 option for 24-hour service.',
    ],
    cons: [
      'The $150 filing fee is higher than Indiana, Michigan, or Wyoming.',
      'The annual report deadline follows your formation month, so there is no single date everyone remembers.',
      'Adding a partner or electing S-corp status adds a 1.5% replacement tax on the LLC\'s net income.',
      'Chicago requires its own business license for most businesses, including home-based ones.',
      'Your registered agent address is public, which matters if you work from home.',
    ],
  },
};

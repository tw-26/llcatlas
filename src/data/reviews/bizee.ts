import { affiliates } from '../affiliates';
import { llcServices } from '../llc-services';
import { GUIDE_YEAR } from '../site';
import type { ProviderReview } from './types';

const getService = (slug: string) => {
  const service = llcServices.find((item) => item.slug === slug);
  if (!service) throw new Error(`Missing LLC service data for ${slug}`);
  return service;
};

const bizee = getService('bizee');
const northwest = getService('northwest');
const zenbusiness = getService('zenbusiness');

const bizeeRenewal = bizee.registeredAgentRenewal;
const northwestTwoYear = northwest.realYearOneTotal + northwest.registeredAgentRenewal;
const bizeeTwoYear = bizee.realYearOneTotal + bizeeRenewal;
const twoYearSavings = northwestTwoYear - bizeeTwoYear;
const yearlyGapAfter = bizeeRenewal - northwest.registeredAgentRenewal;
const zenRenewalGap = zenbusiness.registeredAgentRenewal - bizeeRenewal;

export const bizeeReview: ProviderReview = {
  slug: 'bizee-review',
  partner: 'bizee',
  partnerName: 'Bizee',
  serviceSlug: 'bizee',
  lastVerified: '2026-10-07',
  seoTitle: `Bizee Review (${GUIDE_YEAR}): $0 LLC Plan, Real Costs & Add-Ons to Skip`,
  seoDescription: `Bizee Basic is $0 plus the state fee with a free first year of registered agent service. What to skip at checkout and what renews at $${bizeeRenewal}/yr.`,
  h1: `Bizee review (${GUIDE_YEAR})`,
  primaryKeyword: 'bizee review',
  intro: `Bizee's Basic LLC plan costs $0 plus your state's filing fee, and it includes the first year of registered agent service. That's everything the state requires. The money is in what Bizee offers around it and what renews after year one, so this review covers which plan to buy, what to decline at checkout, and what you'll pay from year two.`,
  verdict: {
    headline: 'Buy Bizee Basic and decline everything else.',
    body: `Basic files your LLC and covers the registered agent for a year. Standard and Premium mostly charge for things you can do for free: the EIN from the IRS and an operating agreement from a template. Two things renew after the free period: the registered agent at $${bizeeRenewal} a year and the virtual address at $29 a month. Decide what you'll do about both before you check out.`,
  },
  cta: {
    label: 'Start with Bizee Basic',
    href: affiliates.bizee,
    note: 'Choose Basic, then the free filing time. You can get your EIN from the IRS for free after the LLC is approved.',
  },
  costSummary: [
    {
      label: 'Year 1',
      value: bizee.realYearOneTotalLabel,
      note: 'Basic plan with every add-on declined. A Texas order came to $309, all of it the state fee.',
    },
    {
      label: 'Year 2',
      value: `$${bizeeRenewal}`,
      note: 'Registered agent renewal if you keep Bizee as your agent, plus your state\'s own annual fee.',
    },
    {
      label: 'Northwest, for comparison',
      value: `$${northwest.realYearOneTotal}, then $${northwest.registeredAgentRenewal}/yr`,
      note: `Bizee is $${twoYearSavings} cheaper over two years, then $${yearlyGapAfter} more every year after.`,
    },
  ],
  plansIntro:
    'All three plans include the state filing, the first year of registered agent service, and the first month of a virtual address. The upgrades add paperwork you can handle yourself.',
  plans: [
    {
      name: 'Basic',
      price: bizee.headlinePriceLabel,
      includes: [
        'LLC filing with the state',
        'Registered agent, first year free',
        'Virtual address, first month free',
        'Online dashboard and business-hours phone support',
      ],
      call: 'buy',
      note: 'The plan to buy. It covers everything the state requires to form the LLC.',
    },
    {
      name: 'Standard',
      price: '$199 + state fee',
      includes: [
        'Everything in Basic',
        'EIN (federal tax ID) filing',
        'Operating agreement',
        'Lifetime compliance alerts',
        'S-corp election filing (Form 2553)',
      ],
      call: 'skip',
      note: 'The IRS issues EINs free online, usually in one sitting. No state requires you to file an operating agreement, and free templates cover a single-member LLC. A calendar reminder does the job of compliance alerts.',
    },
    {
      name: 'Premium',
      price: '$299 + state fee',
      includes: [
        'Everything in Standard',
        'Expedited filing',
        'Business contract templates',
        'Domain name and business email',
        'Business phone line, first year free',
      ],
      call: 'skip',
      note: 'If speed is the reason, Basic plus expedited filing gets you there for $50 in Texas. The domain, email, and phone line are cheaper bought directly, and the phone line is another subscription to track.',
    },
  ],
  checkoutIntro:
    'We went through Bizee\'s order flow for a Texas LLC on the Basic plan and declined everything. The filing-time choice was fair: two equal options, nothing pre-selected. One thing to know on the contact form: the box agreeing to SMS messages and calls from Bizee comes pre-checked, and the form wouldn\'t submit with it unchecked.',
  checkout: [
    {
      offer: 'Expedited filing',
      price: '$50 (Texas, 3 business days)',
      call: 'depends',
      note: 'Pay it only if a bank, lease, or client contract needs the LLC to exist by a specific date. Otherwise choose the free option, which Bizee estimated at about 4 weeks for Texas.',
    },
    {
      offer: 'Upgrade to Standard',
      price: '$199',
      call: 'skip',
      note: 'Get the EIN free at IRS.gov after approval, and use a free operating agreement template.',
    },
    {
      offer: 'S-corp election filing',
      price: '$50 on Basic',
      call: 'skip',
      note: 'Form 2553 is a free IRS form, and most new LLCs shouldn\'t elect S-corp status in their first year. Run the numbers before you pay anyone to file it.',
    },
    {
      offer: 'Business contract templates',
      price: '$150 on Standard',
      call: 'skip',
      note: 'Generic templates rarely fit your work. Spend that money on one contract you actually need.',
    },
    {
      offer: 'Virtual address',
      price: 'Free first month, then $29/mo',
      call: 'depends',
      note: 'Useful only if you need a mailing address that isn\'t your home. If you don\'t, cancel it from your dashboard during the first month.',
    },
  ],
  renewalsIntro:
    'These are the charges that show up after you\'ve forgotten about the order. Put a reminder on your calendar for month 11.',
  renewals: [
    {
      item: 'Registered agent',
      cost: `$${bizeeRenewal}/yr`,
      when: 'After the free first year',
      howToAvoid:
        'Bizee\'s terms say its registered agent partner charges the card on file automatically, and the charge can\'t be reversed once it posts. To stop it, appoint a new agent with your state (yourself, if you qualify, or another company) and tell Bizee before the year ends.',
    },
    {
      item: 'Virtual address',
      cost: '$29/mo',
      when: 'After the free first month',
      howToAvoid:
        'Cancel from your Bizee dashboard in the first month if you don\'t need it. Bizee\'s terms don\'t say whether the free month turns into a paid subscription on its own, so check your dashboard by week 3.',
    },
    {
      item: 'State annual report',
      cost: 'State fee, varies',
      when: 'Set by your state',
      howToAvoid:
        'This is the state\'s fee, not Bizee\'s, and you owe it either way. You can file it yourself on the state\'s website instead of paying Bizee to do it.',
    },
  ],
  goodFit: [
    'You want the lowest bill up front and you\'ll decline every add-on.',
    'You can be your own registered agent from year two, or you\'ll switch agents before the renewal.',
    'You\'re comfortable getting your EIN and writing an operating agreement yourself.',
  ],
  poorFit: [
    `You want one registered agent for years without thinking about it. Northwest's $${northwest.registeredAgentRenewal} renewal is cheaper from year two.`,
    'You want the calmest checkout and a company built around privacy.',
    'You don\'t want to track a free trial. The virtual address needs canceling if you don\'t use it.',
  ],
  matchups: [
    {
      heading: 'Bizee vs Northwest',
      body: `Northwest costs $${northwest.realYearOneTotal} with the first year of registered agent service included, then $${northwest.registeredAgentRenewal} a year. Bizee is $0, then $${bizeeRenewal}. Over two years Bizee saves you $${twoYearSavings}; from year three on, Northwest is cheaper. Northwest's checkout also has fewer upsells. Pick Northwest if you'll keep the same agent long term.`,
      href: '/northwest-vs-bizee/',
      linkLabel: 'Read Northwest vs Bizee',
    },
    {
      heading: 'Bizee vs ZenBusiness',
      body: `ZenBusiness Starter is also $0, but it doesn't include a registered agent. Adding one costs $${zenbusiness.registeredAgentFirstYear} the first year and $${zenbusiness.registeredAgentRenewal} after. Bizee is $${zenbusiness.registeredAgentFirstYear} cheaper in year one and $${zenRenewalGap} cheaper every year after.`,
      href: '/bizee-vs-zenbusiness/',
      linkLabel: 'Read Bizee vs ZenBusiness',
    },
  ],
  finalVerdict: `If you want the lowest upfront cost and will decline the extras, buy Bizee Basic. Before month 12, decide on the registered agent: be your own if you qualify, move to another agent, or accept Bizee's $${bizeeRenewal} renewal. If you'd rather not manage that, Northwest is the simpler choice.`,
  faq: [
    {
      question: 'Is Bizee legit?',
      answer:
        'Yes. Bizee is the company formerly called Incfile, and it has been forming LLCs since 2004. Its site says it has served over a million businesses and shows a 4.8 out of 5 rating from about 26,000 reviews.',
    },
    {
      question: 'Is Bizee really free?',
      answer: `The Basic plan's service fee is $0, and you still pay your state's filing fee. Two things cost money later if you keep them: the registered agent at $${bizeeRenewal} a year from year two, and the virtual address at $29 a month after the first month.`,
    },
    {
      question: 'Does Bizee automatically renew the registered agent?',
      answer: `Yes. Bizee's cancellation policy says its registered agent partner charges the card on file for the annual renewal, currently $${bizeeRenewal}, unless you've appointed a new agent with the state and told Bizee before the service expires. The policy also says those charges can't be reversed after they're applied.`,
    },
    {
      question: 'How do I stop paying Bizee for registered agent service?',
      answer:
        'File your state\'s change-of-registered-agent form naming the new agent, which can be you if you live in the state and have an address where you\'re available during business hours. Then tell Bizee. Do both before the free year ends. Most states charge a small fee for the change.',
    },
    {
      question: 'Do I need Bizee\'s EIN service?',
      answer:
        'No. The IRS issues EINs free online at IRS.gov, usually in one session. Standard includes EIN filing, but that alone isn\'t worth $199.',
    },
    {
      question: 'Is Bizee Premium worth it?',
      answer:
        'Rarely. Premium adds expedited filing, a domain and email, contract templates, and a business phone line. Basic plus expedited filing ($50 in Texas) gets you the speed for far less.',
    },
  ],
  gaps: [
    'Bizee\'s contact form requires a working phone number, so we stopped there. We didn\'t see any offers after that screen or the final cart.',
    'Bizee\'s terms don\'t say whether the free virtual address month becomes a paid subscription on its own.',
    'Expedited filing prices vary by state. The $50 figure is what Bizee charged for Texas.',
    'Bizee listed the Texas state fee as $309. Texas charges $300, plus about $7 in card fees if you file online yourself.',
  ],
  sources: [
    {
      label: 'Bizee LLC packages and order form',
      url: 'https://orders.bizee.com/form-order-now.php?entityType=LLC&state=TX',
    },
    {
      label: 'Bizee registered agent service',
      url: 'https://bizee.com/business-management/registered-agent',
    },
    {
      label: 'Bizee virtual address pricing',
      url: 'https://bizee.com/business-formation/virtual-address/business',
    },
    {
      label: 'Bizee cancellation policy (auto-renewal terms)',
      url: 'https://bizee.com/cancellation-policy',
    },
    {
      label: 'IRS: Apply for an EIN online',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    },
    {
      label: 'IRS: About Form 2553 (S-corp election)',
      url: 'https://www.irs.gov/forms-pubs/about-form-2553',
    },
  ],
  related: [
    {
      href: '/northwest-vs-bizee/',
      label: 'Northwest vs Bizee',
      description: 'The cheapest year one against the cheaper long-term agent.',
    },
    {
      href: '/bizee-vs-zenbusiness/',
      label: 'Bizee vs ZenBusiness',
      description: 'Two $0 plans, and why the registered agent decides it.',
    },
    {
      href: '/best-llc-services/',
      label: 'Best LLC services',
      description: 'Every service we track, ranked by real year-one cost.',
    },
    {
      href: '/best-state/',
      label: 'Best state to form an LLC',
      description: 'Why your home state usually wins, even against Wyoming.',
    },
    {
      href: '/llc/texas/cost/',
      label: 'Texas LLC cost',
      description: 'The full Texas fee picture, including the franchise tax report.',
    },
    {
      href: '/llc-vs-sole-proprietorship/',
      label: 'LLC vs sole proprietorship',
      description: 'Make sure an LLC is worth it before you pay anyone.',
    },
  ],
};

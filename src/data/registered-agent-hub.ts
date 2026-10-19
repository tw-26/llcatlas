import { northwestRegisteredAgentUrl } from './affiliates';
import { llcServices, type LlcService } from './llc-services';

export const REGISTERED_AGENT_HUB_PATH = '/best-registered-agent-service/';
export const REGISTERED_AGENT_HUB_UPDATED = '2026-10-18';

export type RegisteredAgentPriceRow = {
  slug: string;
  name: string;
  priceLabel: string;
  renewal: number;
  note: string;
  verdict: string;
  isPick: boolean;
};

const serviceBySlug = (slug: string): LlcService => {
  const service = llcServices.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Missing LLC service: ${slug}`);
  }
  return service;
};

const northwest = serviceBySlug('northwest');
const bizee = serviceBySlug('bizee');
const zenbusiness = serviceBySlug('zenbusiness');
const legalzoom = serviceBySlug('legalzoom');

const dollars = (amount: number) => `$${amount}`;

export const registeredAgentPick = {
  name: northwest.name,
  slug: northwest.slug,
  annualPrice: northwest.registeredAgentRenewal,
  priceLabel: `${dollars(northwest.registeredAgentRenewal)}/yr`,
  href: northwestRegisteredAgentUrl,
};

/**
 * Standalone registered-agent prices, not formation packages. Northwest's $0
 * first year only applies when they also form the LLC, so this page uses the
 * renewal figure for every row.
 */
export const registeredAgentPriceRows: RegisteredAgentPriceRow[] = [
  {
    slug: northwest.slug,
    name: northwest.name,
    priceLabel: registeredAgentPick.priceLabel,
    renewal: northwest.registeredAgentRenewal,
    note: 'Same price every year. No per-document fee. Five or more states is $100 a year per state.',
    verdict: 'Use this',
    isPick: true,
  },
  {
    slug: bizee.slug,
    name: bizee.name,
    priceLabel: `${dollars(bizee.registeredAgentRenewal)}/yr`,
    renewal: bizee.registeredAgentRenewal,
    note: 'Standalone price. The first year is free only if Bizee also forms the LLC.',
    verdict: `${dollars(bizee.registeredAgentRenewal - northwest.registeredAgentRenewal)} more a year`,
    isPick: false,
  },
  {
    slug: zenbusiness.slug,
    name: zenbusiness.name,
    priceLabel: `${dollars(zenbusiness.registeredAgentFirstYear)} the first year, then ${dollars(zenbusiness.registeredAgentRenewal)}/yr`,
    renewal: zenbusiness.registeredAgentRenewal,
    note: 'Cheaper for one year, then more than Northwest every year after.',
    verdict: `${dollars(zenbusiness.registeredAgentRenewal - northwest.registeredAgentRenewal)} more after year 1`,
    isPick: false,
  },
  {
    slug: legalzoom.slug,
    name: legalzoom.name,
    priceLabel: `${dollars(legalzoom.registeredAgentRenewal)}/yr`,
    renewal: legalzoom.registeredAgentRenewal,
    note: 'Same job as the others.',
    verdict: 'Skip it',
    isPick: false,
  },
];

export const registeredAgentHubFaq = [
  {
    question: 'What is the best registered agent service?',
    answer: `Northwest, at ${registeredAgentPick.priceLabel}, if you need a paid agent. Be your own agent if you have a street address in the state and can be there during business hours. That costs nothing, and the address goes on the public filing.`,
  },
  {
    question: 'How much does a registered agent cost?',
    answer: `Nothing if you serve yourself. A paid agent in this comparison runs from ${registeredAgentPick.priceLabel} at Northwest to ${dollars(legalzoom.registeredAgentRenewal)}/yr at LegalZoom. Compare the renewal, not a free first year that only comes with forming the LLC.`,
  },
  {
    question: 'Can I be my own registered agent?',
    answer:
      'Yes, if you have a physical street address in the state where the LLC is formed and someone can accept mail there during business hours. A PO box does not qualify in most states. The address is public. If that address is your home, hire an agent instead.',
  },
  {
    question: 'What does a registered agent do?',
    answer:
      'A registered agent receives lawsuits and official state mail at a street address in the state, during business hours, and gets those papers to you. The agent does not form the LLC, file your taxes, or run the business. Miss a lawsuit and a court can enter a judgment without you. Miss a state notice and the state can dissolve the LLC.',
  },
  {
    question: 'Do I need a registered agent if I work from home?',
    answer: `You still need an agent. You do not have to pay for one if a non-home street address in the state is staffed during business hours. If the only address is your home, use Northwest at ${registeredAgentPick.priceLabel} so the home address stays off the public filing.`,
  },
] as const;

import { describe, expect, it } from 'vitest';
import { northwestRegisteredAgentUrl } from './affiliates';
import { llcServices } from './llc-services';
import { getAffiliatePageType } from '../lib/affiliate-tracking';
import {
  REGISTERED_AGENT_HUB_PATH,
  REGISTERED_AGENT_HUB_UPDATED,
  registeredAgentHubFaq,
  registeredAgentPick,
  registeredAgentPriceRows,
} from './registered-agent-hub';

describe('registered agent hub', () => {
  it('tracks the page as a comparison', () => {
    expect(getAffiliatePageType(`${REGISTERED_AGENT_HUB_PATH}`)).toBe('comparison');
    expect(getAffiliatePageType('/best-registered-agent-service')).toBe('comparison');
  });

  it('sends the national call to action to the registered agent signup, not formation', () => {
    const url = new URL(northwestRegisteredAgentUrl);
    expect(url.searchParams.get('awinmid')).toBe('66946');
    expect(url.searchParams.get('ued')).toBe('https://www.northwestregisteredagent.com/signup');
    expect(registeredAgentPick.href).toBe(northwestRegisteredAgentUrl);
  });

  it('prices every row from the service file and keeps Northwest as the lowest renewal', () => {
    expect(registeredAgentPriceRows.map((row) => row.slug)).toEqual([
      'northwest',
      'bizee',
      'zenbusiness',
      'legalzoom',
    ]);

    for (const row of registeredAgentPriceRows) {
      const service = llcServices.find((item) => item.slug === row.slug);
      expect(service?.registeredAgentRenewal, row.slug).toBe(row.renewal);
      expect(row.priceLabel).toContain(`$${row.renewal}`);
    }

    const pick = registeredAgentPriceRows.find((row) => row.isPick);
    expect(pick?.slug).toBe('northwest');
    expect(pick?.renewal).toBe(registeredAgentPick.annualPrice);
    expect(registeredAgentPriceRows.filter((row) => row.isPick)).toHaveLength(1);

    const lowestRenewal = Math.min(...registeredAgentPriceRows.map((row) => row.renewal));
    expect(pick?.renewal).toBe(lowestRenewal);
    expect(registeredAgentPick.priceLabel).toBe(`$${registeredAgentPick.annualPrice}/yr`);
  });

  it('does not treat Northwest formation bundle pricing as the standalone agent price', () => {
    const northwest = llcServices.find((service) => service.slug === 'northwest');
    expect(northwest?.registeredAgentFirstYear).toBe(0);
    expect(registeredAgentPick.annualPrice).toBe(northwest?.registeredAgentRenewal);
    expect(registeredAgentPick.annualPrice).toBeGreaterThan(0);
  });

  it('stamps a verification date and repeats the pick price in the FAQ', () => {
    expect(REGISTERED_AGENT_HUB_UPDATED).toBe('2026-10-18');
    expect(registeredAgentHubFaq.length).toBeGreaterThanOrEqual(4);
    const answers = registeredAgentHubFaq.map((item) => item.answer).join(' ');
    expect(answers).toContain(registeredAgentPick.priceLabel);
  });
});

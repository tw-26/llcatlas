import { describe, expect, it } from 'vitest';
import { affiliates, getNorthwestRegisteredAgentUrl } from '../data/affiliates';
import { getAffiliateLinkAttributes, getPageClickRef, withAwinClickRefs } from './affiliate-links';

describe('affiliate links', () => {
  it('uses direct Awin links for every monetized partner', () => {
    for (const partner of ['bizee', 'northwest', 'zenbusiness'] as const) {
      const url = new URL(affiliates[partner]);
      expect(url.hostname).toBe('www.awin1.com');
      expect(url.searchParams.get('awinaffid')).toBe('2866567');
      expect(url.searchParams.get('ued')).toMatch(/^https:\/\//);
    }
  });

  it('keeps the Northwest formation destination query intact', () => {
    const url = new URL(affiliates.northwest);
    expect(url.searchParams.get('ued')).toBe(
      'https://www.northwestregisteredagent.com/incorporation-service-signup?e=LLC',
    );
  });

  it('builds a state-specific Northwest registered agent link', () => {
    const url = new URL(getNorthwestRegisteredAgentUrl('AZ'));
    expect(url.searchParams.get('awinmid')).toBe('66946');
    expect(url.searchParams.get('ued')).toBe('https://www.northwestregisteredagent.com/signup?st=AZ');
  });
});

describe('getPageClickRef', () => {
  it('turns a pathname into a slug', () => {
    expect(getPageClickRef('/llc/washington/')).toBe('llc-washington');
    expect(getPageClickRef('/northwest-vs-bizee/')).toBe('northwest-vs-bizee');
  });

  it('labels the homepage', () => {
    expect(getPageClickRef('/')).toBe('home');
  });

  it('caps length without leaving a trailing dash', () => {
    const ref = getPageClickRef(`/${'a'.repeat(49)}/bcd/`);
    expect(ref.length).toBeLessThanOrEqual(50);
    expect(ref.endsWith('-')).toBe(false);
  });
});

describe('withAwinClickRefs', () => {
  it('adds page and position to Awin links without touching the destination', () => {
    const url = new URL(withAwinClickRefs(affiliates.northwest, '/llc/washington/', 'sidebar'));
    expect(url.searchParams.get('clickref')).toBe('llc-washington');
    expect(url.searchParams.get('clickref2')).toBe('sidebar');
    expect(url.searchParams.get('ued')).toBe(
      'https://www.northwestregisteredagent.com/incorporation-service-signup?e=LLC',
    );
  });

  it('leaves non-Awin and invalid links unchanged', () => {
    const trustpilot = 'https://www.trustpilot.com/review/www.northwestregisteredagent.com';
    expect(withAwinClickRefs(trustpilot, '/llc/washington/', 'hero')).toBe(trustpilot);
    expect(withAwinClickRefs('#', '/llc/washington/', 'hero')).toBe('#');
  });
});

describe('getAffiliateLinkAttributes', () => {
  it('tags affiliate hrefs with click references', () => {
    const attributes = getAffiliateLinkAttributes({
      href: affiliates.bizee,
      partnerName: 'Bizee',
      pageType: 'comparison',
      position: 'comparison-hero-primary',
      sourcePath: '/bizee-vs-zenbusiness/',
    });
    const url = new URL(attributes.href ?? '');
    expect(url.searchParams.get('clickref')).toBe('bizee-vs-zenbusiness');
    expect(url.searchParams.get('clickref2')).toBe('comparison-hero-primary');
    expect(attributes.rel).toBe('sponsored noopener');
  });

  it('leaves plain partner links alone', () => {
    const attributes = getAffiliateLinkAttributes({
      href: affiliates.legalzoom,
      partnerName: 'LegalZoom',
      pageType: 'comparison',
      position: 'hero',
      sourcePath: '/best-llc-services/',
    });
    expect(attributes.href).toBe('https://www.legalzoom.com/');
    expect(attributes['data-affiliate']).toBeUndefined();
  });
});

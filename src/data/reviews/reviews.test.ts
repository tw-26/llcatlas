import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { affiliates } from '../affiliates';
import { llcServices } from '../llc-services';
import { getAffiliatePartner } from '../../lib/affiliate-links';
import { getAffiliatePageType } from '../../lib/affiliate-tracking';
import { reviews } from './index';

const pagesDir = resolve(__dirname, '../../pages');

describe.each(reviews.map((review) => [review.slug, review] as const))('%s', (_slug, review) => {
  it('has a page file at its slug', () => {
    expect(review.slug).toMatch(/^[a-z0-9-]+-review$/);
    expect(existsSync(resolve(pagesDir, `${review.slug}.astro`))).toBe(true);
  });

  it('closes with the partner affiliate link', () => {
    expect(getAffiliatePartner(review.partnerName)).toBe(review.partner);
    expect(review.cta.href).toBe(affiliates[review.partner]);
    expect(getAffiliatePageType(`/${review.slug}/`)).toBe('comparison');
  });

  it('matches the shared service data', () => {
    if (!review.serviceSlug) return;
    const service = llcServices.find((item) => item.slug === review.serviceSlug);
    expect(service).toBeDefined();
    expect(service?.reviewHref).toBe(`/${review.slug}/`);
    const renewal = review.renewals.find((row) => row.item === 'Registered agent');
    expect(renewal?.cost).toBe(`$${service?.registeredAgentRenewal}/yr`);
  });

  it('is verified, sourced, and complete', () => {
    expect(review.lastVerified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(review.sources.length).toBeGreaterThan(0);
    expect(review.plans.filter((plan) => plan.call === 'buy')).toHaveLength(1);
    expect(review.checkout.length).toBeGreaterThan(0);
    expect(review.faq.length).toBeGreaterThanOrEqual(4);
    expect(review.related.length).toBeGreaterThanOrEqual(5);
  });

  it('uses internal links with a trailing slash', () => {
    for (const href of [...review.related, ...review.matchups].map((link) => link.href)) {
      expect(href).toMatch(/^\/[a-z0-9/-]*\/$/);
    }
  });
});

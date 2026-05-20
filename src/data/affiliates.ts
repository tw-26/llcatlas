/**
 * Single source of truth for affiliate / partner outbound links.
 *
 * Every CTA in the site reads from this file, so updating a value here updates
 * every link site-wide (sidebars, inline CTAs, comparison cards, hero buttons,
 * review CTAs).
 *
 * Keys must match the `slug` of the corresponding service in `llc-services.ts`
 * so the lookup stays type-safe.
 */

export type AffiliatePartner = 'bizee' | 'northwest' | 'zenbusiness' | 'legalzoom';

export const affiliates: Record<AffiliatePartner, string> = {
  bizee: 'https://tidd.ly/3R7biWu',
  northwest: 'https://tidd.ly/48iRAwH',
  zenbusiness: 'https://tidd.ly/43n8x64',
  legalzoom: 'https://www.legalzoom.com/',
};

export const affiliateStatus: Record<AffiliatePartner, 'affiliate' | 'plain'> = {
  bizee: 'affiliate',
  northwest: 'affiliate',
  zenbusiness: 'affiliate',
  legalzoom: 'plain',
};

/**
 * Returns `true` only for approved affiliate links. LegalZoom can remain a plain
 * outbound reference without being counted as a monetized partner.
 */
export const isAffiliateConfigured = (partner: AffiliatePartner): boolean =>
  affiliateStatus[partner] === 'affiliate' && affiliates[partner] !== '#';

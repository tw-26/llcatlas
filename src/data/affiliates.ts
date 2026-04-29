/**
 * Single source of truth for affiliate / partner outbound links.
 *
 * Replace the `'#'` placeholders below with your real affiliate URLs once each
 * program approves you. Every CTA in the site reads from this file, so updating
 * a value here updates every link site-wide (sidebars, inline CTAs, comparison
 * cards, hero buttons, review CTAs).
 *
 * Keys must match the `slug` of the corresponding service in `llc-services.ts`
 * so the lookup stays type-safe.
 */

export type AffiliatePartner = 'bizee' | 'northwest' | 'zenbusiness' | 'legalzoom';

// TODO: Update with real affiliate URLs once each program approves.
export const affiliates: Record<AffiliatePartner, string> = {
  bizee: 'https://bizee.com/',
  northwest: 'https://tidd.ly/48iRAwH',
  zenbusiness: 'https://www.zenbusiness.com/',
  legalzoom: 'https://www.legalzoom.com/',
};

/**
 * Returns `true` when the slug still points at the placeholder URL. Useful if
 * we ever want to hide a CTA, swap to a non-affiliate fallback, or render a
 * "coming soon" badge before a program is approved.
 */
export const isAffiliateConfigured = (partner: AffiliatePartner): boolean =>
  affiliates[partner] !== '#';

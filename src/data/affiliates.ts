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

import type { USStateCode } from './states/types';

export type AffiliatePartner = 'bizee' | 'northwest' | 'zenbusiness' | 'legalzoom';

const AWIN_PUBLISHER_ID = '2866567';

const awinAdvertiserIds = {
  bizee: '88819',
  northwest: '66946',
  zenbusiness: '102801',
} as const;

/**
 * Builds a direct Awin tracking link. Use full links rather than `tidd.ly`
 * short links so `clickref` parameters reach Awin's transaction report.
 */
export const buildAwinLink = (advertiserId: string, destination: string): string => {
  const url = new URL('https://www.awin1.com/cread.php');
  url.searchParams.set('awinmid', advertiserId);
  url.searchParams.set('awinaffid', AWIN_PUBLISHER_ID);
  url.searchParams.set('ued', destination);
  return url.toString();
};

export const affiliates: Record<AffiliatePartner, string> = {
  bizee: buildAwinLink(awinAdvertiserIds.bizee, 'https://orders.bizee.com/form-order-now.php?entityType=LLC'),
  northwest: buildAwinLink(
    awinAdvertiserIds.northwest,
    'https://www.northwestregisteredagent.com/incorporation-service-signup?e=LLC',
  ),
  zenbusiness: buildAwinLink(
    awinAdvertiserIds.zenbusiness,
    'https://www.zenbusiness.com/shop/llc/business-state',
  ),
  legalzoom: 'https://www.legalzoom.com/',
};

/**
 * Northwest registered-agent-only order with the state preselected. Pays the
 * registered agent commission, not the formation one, so use it only on pages
 * where the reader is buying an agent.
 */
export const getNorthwestRegisteredAgentUrl = (state: USStateCode): string =>
  buildAwinLink(
    awinAdvertiserIds.northwest,
    `https://www.northwestregisteredagent.com/signup?st=${state}`,
  );

/** Bizee LLC order with the state preselected (`entityState` is the parameter Bizee reads). */
export const getBizeeOrderUrl = (state: USStateCode): string =>
  buildAwinLink(
    awinAdvertiserIds.bizee,
    `https://orders.bizee.com/form-order-now.php?entityType=LLC&entityState=${state}`,
  );

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

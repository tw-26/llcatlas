import { isAffiliateConfigured, type AffiliatePartner } from '../data/affiliates';
import type { AffiliatePageType } from './affiliate-tracking';

export type AffiliateLinkAttributes = {
  href?: string;
  target?: '_blank';
  rel?: 'sponsored noopener' | 'noopener';
  'aria-disabled'?: 'true';
  'data-affiliate'?: AffiliatePartner;
  'data-page-type'?: AffiliatePageType;
  'data-position'?: string;
  'data-state'?: string;
};

type AffiliateLinkOptions = {
  href: string;
  partnerName: string;
  pageType: AffiliatePageType;
  position: string;
  /** Pathname of the page rendering the link, e.g. `Astro.url.pathname`. */
  sourcePath: string;
  state?: string;
};

const AWIN_HOST = 'www.awin1.com';
// Keeps click references inside Awin's field length limit.
const CLICK_REF_MAX_LENGTH = 50;

const toClickRef = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, CLICK_REF_MAX_LENGTH)
    .replace(/-+$/, '');

/** `/llc/washington/` -> `llc-washington`, `/` -> `home`. */
export const getPageClickRef = (sourcePath: string): string => toClickRef(sourcePath) || 'home';

/**
 * Tags an Awin link with the page (`clickref`) and position (`clickref2`) so
 * each commission in Awin's transaction report traces back to where it came
 * from. Non-Awin links are returned unchanged.
 */
export const withAwinClickRefs = (href: string, sourcePath: string, position: string): string => {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }

  if (url.hostname !== AWIN_HOST) return href;

  url.searchParams.set('clickref', getPageClickRef(sourcePath));
  url.searchParams.set('clickref2', toClickRef(position) || 'unknown');
  return url.toString();
};

const partnerByName: Record<string, AffiliatePartner> = {
  Bizee: 'bizee',
  Northwest: 'northwest',
  'Northwest Registered Agent': 'northwest',
  ZenBusiness: 'zenbusiness',
  ZoomBusiness: 'zenbusiness',
  LegalZoom: 'legalzoom',
};

export const getAffiliatePartner = (partnerName: string): AffiliatePartner | undefined =>
  partnerByName[partnerName];

export const getAffiliateLinkAttributes = ({
  href,
  partnerName,
  pageType,
  position,
  sourcePath,
  state = 'national',
}: AffiliateLinkOptions): AffiliateLinkAttributes => {
  const isPlaceholderLink = !href || href === '#';
  const partnerSlug = getAffiliatePartner(partnerName);
  const isAffiliate = Boolean(partnerSlug && isAffiliateConfigured(partnerSlug));
  const resolvedHref = isAffiliate ? withAwinClickRefs(href, sourcePath, position) : href;

  return {
    href: isPlaceholderLink ? undefined : resolvedHref,
    target: isPlaceholderLink ? undefined : '_blank',
    // LegalZoom intentionally remains plain until approval; it gets no sponsored/data-affiliate attrs.
    rel: isPlaceholderLink ? undefined : isAffiliate ? 'sponsored noopener' : 'noopener',
    'aria-disabled': isPlaceholderLink ? 'true' : undefined,
    'data-affiliate': !isPlaceholderLink && isAffiliate ? partnerSlug : undefined,
    'data-page-type': !isPlaceholderLink && isAffiliate ? pageType : undefined,
    'data-position': !isPlaceholderLink && isAffiliate ? position : undefined,
    'data-state': !isPlaceholderLink && isAffiliate ? state : undefined,
  };
};

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
  state?: string;
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
  state = 'national',
}: AffiliateLinkOptions): AffiliateLinkAttributes => {
  const isPlaceholderLink = !href || href === '#';
  const partnerSlug = getAffiliatePartner(partnerName);
  const isAffiliate = Boolean(partnerSlug && isAffiliateConfigured(partnerSlug));

  return {
    href: isPlaceholderLink ? undefined : href,
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

import { sendAnalyticsEvent } from './analytics';

type AffiliateClickPayload = {
  affiliate: string;
  pageType: string;
  position: string;
  state: string;
  outboundHost: string;
  sourcePath: string;
};

const getAffiliateAnchor = (target: EventTarget | null): HTMLAnchorElement | null => {
  if (!(target instanceof Element)) return null;

  return target.closest<HTMLAnchorElement>('a[data-affiliate]');
};

const getOutboundHost = (href: string) => {
  try {
    return new URL(href).hostname;
  } catch {
    return '';
  }
};

const trackAffiliateClick = (anchor: HTMLAnchorElement) => {
  const payload: AffiliateClickPayload = {
    affiliate: anchor.dataset.affiliate ?? '',
    pageType: anchor.dataset.pageType ?? 'other',
    position: anchor.dataset.position ?? 'unknown',
    state: anchor.dataset.state ?? 'national',
    outboundHost: getOutboundHost(anchor.href),
    sourcePath: window.location.pathname,
  };

  window.dispatchEvent(new CustomEvent('llcatlas:affiliate-click', { detail: payload }));

  sendAnalyticsEvent('affiliate_click', payload, {
    affiliate: payload.affiliate,
    page_type: payload.pageType,
    position: payload.position,
    state: payload.state,
    outbound_host: payload.outboundHost,
  });
};

document.addEventListener('click', (event) => {
  const anchor = getAffiliateAnchor(event.target);
  if (!anchor) return;

  trackAffiliateClick(anchor);
});

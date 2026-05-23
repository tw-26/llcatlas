type AffiliateClickPayload = {
  affiliate: string;
  pageType: string;
  position: string;
  state: string;
  outboundHost: string;
  sourcePath: string;
};

type ZarazWindow = Window & {
  zaraz?: {
    track?: (eventName: string, properties: AffiliateClickPayload) => Promise<unknown> | unknown;
  };
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

  const zaraz = (window as ZarazWindow).zaraz;
  if (typeof zaraz?.track === 'function') {
    void zaraz.track('affiliate_click', payload);
  }
};

document.addEventListener('click', (event) => {
  const anchor = getAffiliateAnchor(event.target);
  if (!anchor) return;

  trackAffiliateClick(anchor);
});

export type AffiliatePageType =
  | 'home'
  | 'state-guide'
  | 'calculator'
  | 'comparison'
  | 'privacy'
  | 'other';

export const getAffiliatePageType = (pathname: string): AffiliatePageType => {
  if (pathname === '/') {
    return 'home';
  }

  if (pathname.startsWith('/llc/')) {
    return 'state-guide';
  }

  if (pathname.startsWith('/calculators/')) {
    return 'calculator';
  }

  if (
    pathname === '/best-llc-services/' ||
    pathname === '/best-llc-services' ||
    pathname.includes('-vs-')
  ) {
    return 'comparison';
  }

  if (pathname === '/privacy/' || pathname === '/privacy') {
    return 'privacy';
  }

  return 'other';
};

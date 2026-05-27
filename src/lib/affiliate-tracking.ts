export type AffiliatePageType =
  | 'home'
  | 'state'
  | 'calc'
  | 'comparison'
  | 'privacy'
  | 'other';

export const getAffiliatePageType = (pathname: string): AffiliatePageType => {
  if (pathname === '/') {
    return 'home';
  }

  if (pathname.startsWith('/llc/')) {
    return 'state';
  }

  if (
    pathname.startsWith('/calculators/') ||
    pathname.startsWith('/self-employment-tax/') ||
    pathname === '/s-corp/election-calculator/' ||
    pathname === '/s-corp/election-calculator' ||
    pathname === '/s-corp/reasonable-compensation/' ||
    pathname === '/s-corp/reasonable-compensation'
  ) {
    return 'calc';
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

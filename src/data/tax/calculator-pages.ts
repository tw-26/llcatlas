import { stateSeeds } from '../states/seeds';
import type { USStateCode } from '../states/types';

/**
 * Per-state calculator page configuration.
 * Adding a row here generates a new page at build time.
 */
export type CalculatorStatePage = {
  state: USStateCode;
  /** Target keyword used in title/H1 */
  targetKeyword: string;
  /** SEO meta description (155-160 chars optimal) */
  metaDescription: string;
  /** Intro paragraph displayed under the H1 (80-120 words) */
  intro: string;
  /** Whether to publish this page in the build */
  enabled: boolean;
};

export const CALCULATOR_STATE_PAGES: CalculatorStatePage[] = [
  {
    state: 'CA',
    targetKeyword: '1099 Tax Calculator California',
    metaDescription:
      'Free 2026 California self-employment tax calculator. Estimate federal, SE, and CA state tax (1-13.3%) for freelancers and 1099 workers. Includes quarterly payments.',
    intro:
      'California self-employment income is taxed at three levels: federal income tax (10-37%), self-employment tax (15.3%), and California state income tax with brackets ranging from 1% to 13.3%. The state also imposes a 1% Mental Health Services Tax on income over $1 million. Use the calculator below to estimate your total tax owed and quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'TX',
    targetKeyword: '1099 Tax Calculator Texas',
    metaDescription:
      'Free 2026 Texas self-employment tax calculator. Texas has no state income tax - estimate federal income tax and SE tax for 1099 freelancers. Quarterly payments included.',
    intro:
      'Texas has no state individual income tax, which simplifies tax planning for freelancers and 1099 contractors significantly. You still owe federal income tax (10-37% depending on bracket) and self-employment tax (15.3% on net earnings). Use the calculator below to estimate your federal and SE tax owed for tax year 2026, along with quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'FL',
    targetKeyword: '1099 Tax Calculator Florida',
    metaDescription:
      'Free 2026 Florida self-employment tax calculator. No FL state income tax - estimate federal and SE tax for 1099 freelancers, gig workers, and contractors. Quarterly payments.',
    intro:
      'Florida has no state individual income tax, making it one of the most tax-friendly states for self-employed workers, freelancers, and 1099 contractors. You still owe federal income tax based on your tax bracket and 15.3% self-employment tax on net earnings. Use the calculator below to estimate your tax liability for 2026 and plan your quarterly estimated payments.',
    enabled: true,
  },
  {
    state: 'NY',
    targetKeyword: '1099 Tax Calculator New York',
    metaDescription:
      'Free 2026 New York self-employment tax calculator. Estimate federal, SE, and NY state tax (4-10.9%) for freelancers and 1099 workers. Note: NYC local tax not included.',
    intro:
      'New York self-employment income is taxed at federal, SE, and state levels. New York State has 9 graduated tax brackets ranging from 4% to 10.9% (top rate applies to income over $25 million). Note: this calculator estimates state tax only - New York City imposes its own additional income tax (2.907-3.876%) and Yonkers has a local surcharge, neither of which is modeled here. Use the calculator below to estimate your federal + state + SE tax for 2026.',
    enabled: true,
  },
];

/**
 * Get the published (enabled) state pages.
 * Used by getStaticPaths and sitemap generation.
 */
export function getPublishedStatePages(): CalculatorStatePage[] {
  return CALCULATOR_STATE_PAGES.filter((page) => page.enabled);
}

/**
 * Helper to get state name from abbreviation.
 */
export function getStateName(code: USStateCode): string {
  const seed = stateSeeds.find((state) => state.abbreviation === code);
  if (!seed) throw new Error(`Unknown state code: ${code}`);
  return seed.name;
}

/**
 * Helper to get state slug from abbreviation.
 */
export function getStateSlug(code: USStateCode): string {
  const seed = stateSeeds.find((state) => state.abbreviation === code);
  if (!seed) throw new Error(`Unknown state code: ${code}`);
  return seed.slug;
}

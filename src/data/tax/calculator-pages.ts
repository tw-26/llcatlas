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
  {
    state: 'GA',
    targetKeyword: '1099 Tax Calculator Georgia',
    metaDescription:
      'Free 2026 Georgia self-employment tax calculator. Estimate federal, SE, and GA flat 5.39% state tax for 1099 freelancers and contractors. Quarterly payments included.',
    intro:
      'Georgia has a flat 5.39% individual income tax rate that applies to all taxable income. Combined with federal income tax (10-37%) and self-employment tax (15.3% on net earnings), Georgia 1099 workers and freelancers typically owe 25-35% of gross income in total tax. Use the calculator below to estimate your 2026 federal + state + SE tax and quarterly estimated payments.',
    enabled: true,
  },
  {
    state: 'IL',
    targetKeyword: '1099 Tax Calculator Illinois',
    metaDescription:
      'Free 2026 Illinois self-employment tax calculator. Estimate federal, SE, and IL flat 4.95% state tax for 1099 freelancers. Includes quarterly estimated payments.',
    intro:
      'Illinois has a flat 4.95% individual income tax with no standard deduction (uses a $2,850 personal exemption instead). Self-employed workers and 1099 contractors owe Illinois state tax in addition to federal income tax (10-37%) and self-employment tax (15.3%). Use the calculator below to estimate your full 2026 tax liability and quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'NC',
    targetKeyword: '1099 Tax Calculator North Carolina',
    metaDescription:
      'Free 2026 North Carolina self-employment tax calculator. Estimate federal, SE, and NC flat 4.25% state tax for 1099 freelancers and contractors. Includes quarterly payments.',
    intro:
      'North Carolina has a flat 4.25% individual income tax rate (reduced from 4.5% effective January 1, 2025, with further reduction to 3.99% scheduled for 2026). Self-employed workers in NC owe state tax on top of federal income tax (10-37%) and self-employment tax (15.3% on net earnings). Use the calculator below to estimate your 2026 total tax liability and quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'OH',
    targetKeyword: '1099 Tax Calculator Ohio',
    metaDescription:
      'Free 2026 Ohio self-employment tax calculator. Estimate federal, SE, and OH state tax (0-3.5%) for 1099 freelancers. Note: local city taxes not included. Quarterly payments.',
    intro:
      'Ohio has a 3-bracket graduated income tax with a 0% rate up to $26,050, then 2.75% up to $100,000, then 3.5% above. Many Ohio cities and school districts impose local income taxes (averaging 1.49%) - these are not modeled in this calculator. Use the calculator below to estimate your federal, SE, and Ohio state tax for 2026.',
    enabled: true,
  },
  {
    state: 'PA',
    targetKeyword: '1099 Tax Calculator Pennsylvania',
    metaDescription:
      'Free 2026 Pennsylvania self-employment tax calculator. Estimate federal, SE, and PA flat 3.07% state tax for 1099 freelancers. Note: local EIT taxes not included.',
    intro:
      'Pennsylvania has a flat 3.07% individual income tax with no standard deduction or personal exemption - one of the simplest state tax structures in the nation. Many Pennsylvania municipalities (including Philadelphia and Pittsburgh) impose additional local Earned Income Taxes (EIT) typically ranging from 1-4%; these are not modeled in this calculator. Use the calculator below to estimate your 2026 federal + state + SE tax.',
    enabled: true,
  },
  {
    state: 'VA',
    targetKeyword: '1099 Tax Calculator Virginia',
    metaDescription:
      'Free 2026 Virginia self-employment tax calculator. Estimate federal, SE, and VA state tax (2-5.75%) for 1099 freelancers. Top bracket starts at just $17,000.',
    intro:
      'Virginia has 4 income tax brackets ranging from 2% to 5.75%, with the top rate kicking in at just $17,000 - the lowest top-bracket threshold among states with graduated income taxes. Most Virginia self-employed workers pay close to the top 5.75% rate on their state taxable income. Use the calculator below to estimate your 2026 federal + state + SE tax owed.',
    enabled: true,
  },
  {
    state: 'WA',
    targetKeyword: '1099 Tax Calculator Washington',
    metaDescription:
      'Free 2026 Washington State self-employment tax calculator. WA has no income tax on SE earnings - estimate federal and SE tax for 1099 freelancers. Quarterly payments.',
    intro:
      'Washington State has no general individual income tax, which makes tax planning straightforward for freelancers and 1099 contractors. (Note: WA does impose a 7% capital gains tax on amounts over ~$270,000, but this does not apply to self-employment income.) You still owe federal income tax based on your bracket and 15.3% self-employment tax on net earnings. Use the calculator below to estimate your federal and SE tax for 2026.',
    enabled: true,
  },
  {
    state: 'MI',
    targetKeyword: '1099 Tax Calculator Michigan',
    metaDescription:
      'Free 2026 Michigan self-employment tax calculator. Estimate federal, SE, and MI flat 4.25% state tax for 1099 freelancers. Note: Detroit local tax not included.',
    intro:
      'Michigan has a flat 4.25% individual income tax rate with a $5,800 personal exemption per filer. Some Michigan cities (notably Detroit at 2.4%) impose local income taxes - these are not modeled in this calculator. Use the calculator below to estimate your 2026 federal income tax, self-employment tax, and Michigan state tax, along with quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'NJ',
    targetKeyword: '1099 Tax Calculator New Jersey',
    metaDescription:
      'Free 2026 New Jersey self-employment tax calculator. Estimate federal, SE, and NJ state tax (1.4-10.75%) for 1099 freelancers and contractors. Includes quarterly payments.',
    intro:
      'New Jersey has 7 graduated tax brackets for single filers (and 8 brackets for married filing jointly) ranging from 1.4% to 10.75%. The top rate applies to income over $1 million. New Jersey has no standard deduction, so all NJ taxable income enters the bracket structure. Use the calculator below to estimate your 2026 federal + state + SE tax.',
    enabled: true,
  },
  {
    state: 'AZ',
    targetKeyword: '1099 Tax Calculator Arizona',
    metaDescription:
      'Free 2026 Arizona self-employment tax calculator. Estimate federal, SE, and AZ flat 2.5% state tax for 1099 freelancers and gig workers. Quarterly payments included.',
    intro:
      'Arizona has one of the lowest flat income tax rates in the nation at 2.5%, with a standard deduction matching the federal amount ($15,000 single / $30,000 married filing jointly). This makes Arizona a tax-friendly state for self-employed workers compared to high-tax states like California. Use the calculator below to estimate your 2026 federal + state + SE tax.',
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

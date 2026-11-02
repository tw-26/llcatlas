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
      'Free 2026 New York self-employment tax calculator. Estimate federal, SE, and NY state tax (3.9-10.9%) for freelancers and 1099 workers. Note: NYC local tax not included.',
    intro:
      'New York self-employment income is taxed at federal, SE, and state levels. New York State has 9 graduated tax brackets ranging from 3.9% to 10.9% for 2026 (top rate applies to income over $25 million). Note: this calculator estimates state tax only - New York City imposes its own additional income tax (2.907-3.876%) and Yonkers has a local surcharge, neither of which is modeled here. Use the calculator below to estimate your federal + state + SE tax for 2026.',
    enabled: true,
  },
  {
    state: 'GA',
    targetKeyword: '1099 Tax Calculator Georgia',
    metaDescription:
      'Free 2026 Georgia self-employment tax calculator. Estimate federal, SE, and GA flat 4.99% state tax for 1099 freelancers and contractors. Quarterly payments included.',
    intro:
      'Georgia has a flat 4.99% individual income tax rate for 2026 (cut from 5.19% retroactive to January 1, 2026), with a $15,000 standard deduction ($30,000 married filing jointly). Combined with federal income tax (10-37%) and self-employment tax (15.3% on net earnings), Georgia 1099 workers and freelancers typically owe 25-35% of gross income in total tax. Use the calculator below to estimate your 2026 federal + state + SE tax and quarterly estimated payments.',
    enabled: true,
  },
  {
    state: 'IL',
    targetKeyword: '1099 Tax Calculator Illinois',
    metaDescription:
      'Free 2026 Illinois self-employment tax calculator. Estimate federal, SE, and IL flat 4.95% state tax for 1099 freelancers. Includes quarterly estimated payments.',
    intro:
      'Illinois has a flat 4.95% individual income tax with no standard deduction (uses a $2,925 personal exemption instead). Self-employed workers and 1099 contractors owe Illinois state tax in addition to federal income tax (10-37%) and self-employment tax (15.3%). Use the calculator below to estimate your full 2026 tax liability and quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'NC',
    targetKeyword: '1099 Tax Calculator North Carolina',
    metaDescription:
      'Free 2026 North Carolina self-employment tax calculator. Estimate federal, SE, and NC flat 3.99% state tax for 1099 freelancers and contractors. Includes quarterly payments.',
    intro:
      'North Carolina has a flat 3.99% individual income tax rate for 2026 (down from 4.25% in 2025), with a $12,750 standard deduction. Self-employed workers in NC owe state tax on top of federal income tax (10-37%) and self-employment tax (15.3% on net earnings). Use the calculator below to estimate your 2026 total tax liability and quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'OH',
    targetKeyword: '1099 Tax Calculator Ohio',
    metaDescription:
      'Free 2026 Ohio self-employment tax calculator. Estimate federal, SE, and OH state tax (0-2.75%) for 1099 freelancers. Note: local city taxes not included. Quarterly payments.',
    intro:
      'For 2026 Ohio taxes income above $26,050 at a single 2.75% rate; income below that is taxed at 0%. Many Ohio cities and school districts impose local income taxes - these are not modeled in this calculator. Use the calculator below to estimate your federal, SE, and Ohio state tax for 2026.',
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
      'Washington State has no general individual income tax, which makes tax planning straightforward for freelancers and 1099 contractors. (Washington does tax long-term capital gains over $278,000 at 7%, and 9% above $1 million, but that does not apply to self-employment income.) You still owe federal income tax based on your bracket and 15.3% self-employment tax on net earnings. Use the calculator below to estimate your federal and SE tax for 2026.',
    enabled: true,
  },
  {
    state: 'MI',
    targetKeyword: '1099 Tax Calculator Michigan',
    metaDescription:
      'Free 2026 Michigan self-employment tax calculator. Estimate federal, SE, and MI flat 4.25% state tax for 1099 freelancers. Note: Detroit local tax not included.',
    intro:
      'Michigan has a flat 4.25% individual income tax rate with a $5,900 personal exemption per filer. Some Michigan cities (notably Detroit at 2.4%) impose local income taxes - these are not modeled in this calculator. Use the calculator below to estimate your 2026 federal income tax, self-employment tax, and Michigan state tax, along with quarterly estimated payment amounts.',
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
      'Arizona has one of the lowest flat income tax rates in the nation at 2.5%, with a standard deduction matching the federal amount ($16,100 single / $32,200 married filing jointly for 2026). This makes Arizona a tax-friendly state for self-employed workers compared to high-tax states like California. Use the calculator below to estimate your 2026 federal + state + SE tax.',
    enabled: true,
  },
  {
    state: 'CO',
    targetKeyword: '1099 Tax Calculator Colorado',
    metaDescription:
      'Free 2026 Colorado self-employment tax calculator. Estimate federal, SE, and CO flat 4.4% state tax for 1099 freelancers and contractors. Quarterly payments included.',
    intro:
      'Colorado has a flat 4.4% individual income tax rate using the federal standard deduction as a starting point. Self-employed workers and 1099 contractors in Colorado owe state tax in addition to federal income tax (10-37%) and self-employment tax (15.3% on net earnings). Use the calculator below to estimate your 2026 total tax liability and quarterly estimated payments.',
    enabled: true,
  },
  {
    state: 'MA',
    targetKeyword: '1099 Tax Calculator Massachusetts',
    metaDescription:
      'Free 2026 Massachusetts self-employment tax calculator. Estimate federal, SE, and MA 5% state tax (+4% surtax over $1M) for 1099 freelancers. Quarterly payments included.',
    intro:
      'Massachusetts has a 5% flat tax on most income, plus an additional 4% surtax on income exceeding $1,083,150 (the "Fair Share Amendment" millionaire\'s tax). Self-employed workers and 1099 contractors in Massachusetts owe federal income tax (10-37%) and 15.3% self-employment tax in addition to state tax. Use the calculator below to estimate your full 2026 tax liability.',
    enabled: true,
  },
  {
    state: 'MD',
    targetKeyword: '1099 Tax Calculator Maryland',
    metaDescription:
      'Free 2026 Maryland self-employment tax calculator. Estimate federal, SE, and MD state tax (2-6.5%) for 1099 freelancers. Note: county income taxes not included.',
    intro:
      'Maryland has 10 graduated income tax brackets ranging from 2% to 6.5% (the 6.25% and 6.5% brackets start at $500,000 and $1 million single). Maryland counties impose additional local income taxes on top of state tax - these local taxes are not modeled in this calculator. Self-employed workers in Maryland owe federal income tax (10-37%) and 15.3% self-employment tax in addition to state tax. Use the calculator below to estimate your 2026 federal + state + SE tax.',
    enabled: true,
  },
  {
    state: 'IN',
    targetKeyword: '1099 Tax Calculator Indiana',
    metaDescription:
      'Free 2026 Indiana self-employment tax calculator. Estimate federal, SE, and IN flat 2.95% state tax for 1099 freelancers. Note: county income taxes not included.',
    intro:
      'Indiana has a flat 2.95% individual income tax rate for 2026 (down from 3.0%). Every Indiana county also levies a local income tax - these are not modeled in this calculator. Self-employed workers in Indiana owe state tax in addition to federal income tax (10-37%) and 15.3% self-employment tax. Use the calculator below to estimate your 2026 tax liability.',
    enabled: true,
  },
  {
    state: 'TN',
    targetKeyword: '1099 Tax Calculator Tennessee',
    metaDescription:
      'Free 2026 Tennessee self-employment tax calculator. TN has no state income tax - estimate federal and SE tax for 1099 freelancers and contractors. Quarterly payments.',
    intro:
      'Tennessee has no state individual income tax, making it tax-friendly for freelancers and 1099 contractors. (The Hall income tax on interest and dividends was fully repealed in 2021.) You still owe federal income tax based on your bracket and 15.3% self-employment tax on net earnings. Use the calculator below to estimate your federal + SE tax for 2026 and quarterly estimated payment amounts.',
    enabled: true,
  },
  {
    state: 'MO',
    targetKeyword: '1099 Tax Calculator Missouri',
    metaDescription:
      'Free 2026 Missouri self-employment tax calculator. Estimate federal, SE, and MO state tax (0-4.7%) for 1099 freelancers. Note: KC/St. Louis local taxes not included.',
    intro:
      'Missouri has 8 narrow income tax brackets with a top rate of 4.7%. The first $1,348 of income is exempt. Kansas City and St. Louis impose 1% local earnings taxes - these are not modeled in this calculator. Use the calculator below to estimate your federal + Missouri state + SE tax for 2026.',
    enabled: true,
  },
  {
    state: 'WI',
    targetKeyword: '1099 Tax Calculator Wisconsin',
    metaDescription:
      'Free 2026 Wisconsin self-employment tax calculator. Estimate federal, SE, and WI state tax (3.5-7.65%) for 1099 freelancers and contractors. Quarterly payments included.',
    intro:
      'Wisconsin has 4 graduated income tax brackets ranging from 3.5% to 7.65%. For 2026 a 4.4% bracket replaced part of the old 5.3% bracket, and the top 7.65% rate kicks in at $332,720 (single) or $443,630 (married filing jointly). Self-employed workers in Wisconsin owe state tax in addition to federal income tax (10-37%) and 15.3% self-employment tax. Use the calculator below to estimate your full 2026 tax liability.',
    enabled: true,
  },
  {
    state: 'MN',
    targetKeyword: '1099 Tax Calculator Minnesota',
    metaDescription:
      'Free 2026 Minnesota self-employment tax calculator. Estimate federal, SE, and MN state tax (5.35-9.85%) for 1099 freelancers and contractors. Quarterly payments included.',
    intro:
      'Minnesota has 4 graduated income tax brackets ranging from 5.35% to 9.85%. For 2026 the top rate kicks in at $203,150 (single) or $337,930 (married filing jointly). Self-employed workers in Minnesota owe state tax in addition to federal income tax (10-37%) and 15.3% self-employment tax. Use the calculator below to estimate your 2026 federal + state + SE tax.',
    enabled: true,
  },
  {
    state: 'SC',
    targetKeyword: '1099 Tax Calculator South Carolina',
    metaDescription:
      'Free 2026 South Carolina self-employment tax calculator. Estimate federal, SE, and SC state tax (1.99-5.21%) for 1099 freelancers and contractors. Quarterly payments included.',
    intro:
      'For 2026 South Carolina has two rates: 1.99% on taxable income up to $30,000 and 5.21% above (H. 4216, retroactive to January 1, 2026). It also replaced the federal standard deduction with its own SC Income Adjusted Deduction ($15,000 single, $30,000 married filing jointly), which shrinks at higher incomes. Use the calculator below to estimate your federal + SC state + SE tax for 2026.',
    enabled: true,
  },
  {
    state: 'OR',
    targetKeyword: '1099 Tax Calculator Oregon',
    metaDescription:
      'Free 2026 Oregon self-employment tax calculator. Estimate federal, SE, and OR state tax (4.75-9.9%) for 1099 freelancers. Note: Portland/Multnomah local taxes not included.',
    intro:
      'Oregon has 4 graduated income tax brackets ranging from 4.75% to 9.9%. Some Oregon localities (notably Multnomah County and Portland Metro) impose additional local income taxes for high earners - these are not modeled in this calculator. Self-employed workers in Oregon owe state tax in addition to federal income tax and 15.3% self-employment tax. Use the calculator below to estimate your 2026 total tax liability.',
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

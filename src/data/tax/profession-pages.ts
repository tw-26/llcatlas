import type { ProfessionId } from './profession-presets';

export type ProfessionPage = {
  profession: ProfessionId;
  targetKeyword: string;
  metaDescription: string;
  enabled: boolean;
};

export const PROFESSION_PAGES: ProfessionPage[] = [
  {
    profession: 'doordash-drivers',
    targetKeyword: 'DoorDash Tax Calculator',
    metaDescription:
      'Free 2026 DoorDash tax calculator for Dashers. Estimate federal, self-employment, and state tax owed on your 1099-NEC earnings. Includes mileage deduction tips.',
    enabled: true,
  },
  {
    profession: 'uber-drivers',
    targetKeyword: 'Uber Driver Tax Calculator',
    metaDescription:
      'Free 2026 Uber driver tax calculator. Estimate federal income tax, SE tax, and state tax on your 1099-K and 1099-NEC earnings. Mileage and deduction guidance included.',
    enabled: true,
  },
  {
    profession: 'lyft-drivers',
    targetKeyword: 'Lyft Driver Tax Calculator',
    metaDescription:
      'Free 2026 Lyft driver tax calculator. Estimate federal, SE, and state tax owed on your 1099 earnings. Includes mileage and common deduction tips for rideshare drivers.',
    enabled: true,
  },
  {
    profession: 'instacart-shoppers',
    targetKeyword: 'Instacart Tax Calculator',
    metaDescription:
      'Free 2026 Instacart shopper tax calculator. Estimate federal, self-employment, and state tax owed on your 1099-NEC earnings. Mileage deduction tips included.',
    enabled: true,
  },
  {
    profession: 'onlyfans-creators',
    targetKeyword: 'OnlyFans Tax Calculator',
    metaDescription:
      'Free 2026 OnlyFans creator tax calculator. Estimate federal income tax, SE tax (15.3%), and state tax owed on your 1099-NEC earnings. Common creator deductions included.',
    enabled: true,
  },
];

export function getPublishedProfessionPages(): ProfessionPage[] {
  return PROFESSION_PAGES.filter((page) => page.enabled);
}

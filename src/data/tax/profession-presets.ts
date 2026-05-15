/**
 * Profession identifier. Used in URLs and as a key for preset lookup.
 * Must match the URL slug (kebab-case).
 */
export type ProfessionId =
  | 'doordash-drivers'
  | 'uber-drivers'
  | 'lyft-drivers'
  | 'instacart-shoppers'
  | 'onlyfans-creators';

/**
 * Profession-specific metadata used to render the page and supply context
 * to the calculator without pre-filling income.
 */
export type ProfessionPreset = {
  id: ProfessionId;
  /** Display name used in H1 and body copy */
  displayName: string;
  /** Short label for breadcrumbs and nav */
  shortLabel: string;
  /** Profession category for grouping */
  category: 'gig-driving' | 'gig-delivery' | 'creator';
  /** 1099 form typically issued to this profession */
  form1099Type: '1099-NEC' | '1099-K' | 'both';
  /** Common deduction categories displayed as context, not used in calculation */
  commonDeductions: string[];
  /** Income-context note shown above the calculator */
  incomeNote: string;
};

export const PROFESSION_PRESETS: Record<ProfessionId, ProfessionPreset> = {
  'doordash-drivers': {
    id: 'doordash-drivers',
    displayName: 'DoorDash Driver',
    shortLabel: 'DoorDash',
    category: 'gig-delivery',
    form1099Type: '1099-NEC',
    commonDeductions: [
      'Vehicle mileage (standard mileage rate: $0.67/mile for 2024, check IRS for 2026 rate)',
      'Phone bill (business-use percentage)',
      'Hot bags, drink carriers, other equipment',
      'Parking fees and tolls',
      'Health insurance premiums (if self-employed)',
      'Vehicle expenses (alternative to standard mileage)',
    ],
    incomeNote:
      'Enter your NET self-employment income - that means your total DoorDash earnings (from your 1099-NEC) MINUS your business deductions (mileage, phone, equipment, etc.). For most drivers, deductions reduce taxable income by 30-50%, mostly from mileage.',
  },

  'uber-drivers': {
    id: 'uber-drivers',
    displayName: 'Uber Driver',
    shortLabel: 'Uber',
    category: 'gig-driving',
    form1099Type: 'both',
    commonDeductions: [
      'Vehicle mileage (standard mileage rate)',
      'Vehicle maintenance and depreciation (alternative to standard mileage)',
      'Phone bill (business-use percentage)',
      'Tolls, parking, and car washes',
      'Uber service fees and commissions (typically already deducted from your 1099-K, verify)',
      'Snacks and water for passengers',
      'Health insurance premiums (if self-employed)',
    ],
    incomeNote:
      'Enter your NET self-employment income - total Uber earnings (from your 1099-K and 1099-NEC) MINUS your business deductions. Uber drivers typically deduct 35-60% of gross earnings through mileage alone. Check both 1099 forms - Uber issues 1099-K for ride income and 1099-NEC for incentives/bonuses.',
  },

  'lyft-drivers': {
    id: 'lyft-drivers',
    displayName: 'Lyft Driver',
    shortLabel: 'Lyft',
    category: 'gig-driving',
    form1099Type: 'both',
    commonDeductions: [
      'Vehicle mileage (standard mileage rate)',
      'Vehicle maintenance and depreciation (alternative to standard mileage)',
      'Phone bill (business-use percentage)',
      'Tolls, parking, and car washes',
      'Lyft service fees and commissions',
      'Health insurance premiums (if self-employed)',
    ],
    incomeNote:
      'Enter your NET self-employment income - total Lyft earnings MINUS business deductions (mileage is typically the largest). Lyft drivers usually deduct 35-60% of gross earnings, with mileage as the dominant deduction. Lyft may issue both 1099-K (rides) and 1099-NEC (bonuses/incentives) depending on your earnings.',
  },

  'instacart-shoppers': {
    id: 'instacart-shoppers',
    displayName: 'Instacart Shopper',
    shortLabel: 'Instacart',
    category: 'gig-delivery',
    form1099Type: '1099-NEC',
    commonDeductions: [
      'Vehicle mileage (standard mileage rate)',
      'Phone bill (business-use percentage)',
      'Insulated bags and shopping equipment',
      'Parking and tolls',
      'Health insurance premiums (if self-employed)',
    ],
    incomeNote:
      'Enter your NET self-employment income - total Instacart earnings (from your 1099-NEC) MINUS business deductions. Most Instacart shoppers deduct 25-45% through vehicle mileage and equipment costs.',
  },

  'onlyfans-creators': {
    id: 'onlyfans-creators',
    displayName: 'OnlyFans Creator',
    shortLabel: 'OnlyFans',
    category: 'creator',
    form1099Type: '1099-NEC',
    commonDeductions: [
      'Camera, lighting, and recording equipment',
      'Costumes, props, and content-related purchases',
      'Editing software and subscriptions',
      'Home office (portion of rent/mortgage and utilities used for business)',
      'Internet and phone (business-use percentage)',
      'Marketing and promotion expenses',
      'Professional services (accountant, lawyer)',
      'Health insurance premiums (if self-employed)',
    ],
    incomeNote:
      'Enter your NET self-employment income - total OnlyFans earnings (from your 1099-NEC) MINUS your business deductions (equipment, software, home office, etc.). Many creators deduct 20-40% of gross earnings. Note: OnlyFans takes a 20% platform fee BEFORE issuing your 1099, so your 1099 typically reflects 80% of gross fan payments.',
  },
};

/**
 * Lookup helper.
 */
export function getProfessionPreset(id: ProfessionId): ProfessionPreset {
  return PROFESSION_PRESETS[id];
}

/**
 * All profession IDs used for getStaticPaths.
 */
export const PROFESSION_IDS: ProfessionId[] = Object.keys(PROFESSION_PRESETS) as ProfessionId[];

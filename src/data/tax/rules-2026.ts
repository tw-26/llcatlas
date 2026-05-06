export type FilingStatus = 'single' | 'married_joint' | 'married_separate' | 'head_of_household';

export type TaxBracket = {
  rate: number;        // decimal, e.g. 0.22 for 22%
  min: number;         // inclusive lower bound (USD)
  max: number | null;  // inclusive upper bound; null = no cap (top bracket)
};

export type FederalRules = {
  taxYear: number;
  brackets: Record<FilingStatus, TaxBracket[]>;
  standardDeduction: Record<FilingStatus, number>;
  selfEmploymentTax: {
    rate: number;
    socialSecurityRate: number;
    medicareRate: number;
    additionalMedicareRate: number;
    additionalMedicareThreshold: Record<FilingStatus, number>;
    netEarningsMultiplier: number;
    socialSecurityWageBase: number;
    seTaxDeductionRate: number;
  };
  qbiDeduction: {
    threshold: Record<FilingStatus, number>;
    phaseInRange: Record<FilingStatus, number>;
    rate: number;
  };
  quarterlyDueDates: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
  };
};

export const federalRules2026: FederalRules = {
  taxYear: 2026,

  // Federal income tax brackets for tax year 2026.
  // Source: IRS Rev. Proc. 2025-32 §3.01 Table 1
  // https://www.irs.gov/pub/irs-drop/rp-25-32.pdf
  // Cross-reference: https://taxfoundation.org/data/all/federal/2026-tax-brackets/
  brackets: {
    single: [
      { rate: 0.10, min: 0, max: 12400 },
      { rate: 0.12, min: 12400, max: 50400 },
      { rate: 0.22, min: 50400, max: 105700 },
      { rate: 0.24, min: 105700, max: 201775 },
      { rate: 0.32, min: 201775, max: 256225 },
      { rate: 0.35, min: 256225, max: 640600 },
      { rate: 0.37, min: 640600, max: null },
    ],
    married_joint: [
      { rate: 0.10, min: 0, max: 24800 },
      { rate: 0.12, min: 24800, max: 100800 },
      { rate: 0.22, min: 100800, max: 211400 },
      { rate: 0.24, min: 211400, max: 403550 },
      { rate: 0.32, min: 403550, max: 512450 },
      { rate: 0.35, min: 512450, max: 768700 },
      { rate: 0.37, min: 768700, max: null },
    ],
    married_separate: [ // TODO VERIFY MFS against Rev. Proc. 2025-32 §3.01 Table 2
      { rate: 0.10, min: 0, max: 12400 },
      { rate: 0.12, min: 12400, max: 50400 },
      { rate: 0.22, min: 50400, max: 105700 },
      { rate: 0.24, min: 105700, max: 201775 },
      { rate: 0.32, min: 201775, max: 256225 },
      { rate: 0.35, min: 256225, max: 384350 },
      { rate: 0.37, min: 384350, max: null },
    ],
    head_of_household: [
      { rate: 0.10, min: 0, max: 17700 },
      { rate: 0.12, min: 17700, max: 67450 },
      { rate: 0.22, min: 67450, max: 105700 },
      { rate: 0.24, min: 105700, max: 201775 },
      { rate: 0.32, min: 201775, max: 256200 },
      { rate: 0.35, min: 256200, max: 640600 },
      { rate: 0.37, min: 640600, max: null },
    ],
  },

  // Standard deduction amounts for tax year 2026.
  // Source: IRS Rev. Proc. 2025-32 §3.04
  // https://www.irs.gov/pub/irs-drop/rp-25-32.pdf
  // Cross-reference: https://taxfoundation.org/data/all/federal/2026-tax-brackets/
  standardDeduction: {
    single: 16100,
    married_joint: 32200,
    married_separate: 16100,
    head_of_household: 24150,
  },

  // Self-employment tax rates, wage base, and Additional Medicare Tax thresholds.
  // Sources:
  // Social Security Administration 2026 COLA fact sheet
  // https://www.ssa.gov/news/press/factsheets/colafacts2026.pdf
  // IRS Self-Employment Tax
  // https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes
  // IRS Topic No. 554, Self-Employment Tax
  // https://www.irs.gov/taxtopics/tc554
  // IRS Additional Medicare Tax
  // https://www.irs.gov/newsroom/questions-and-answers-for-the-additional-medicare-tax
  selfEmploymentTax: {
    rate: 0.153,
    socialSecurityRate: 0.124,
    medicareRate: 0.029,
    additionalMedicareRate: 0.009,
    additionalMedicareThreshold: {
      single: 200000,
      married_joint: 250000,
      married_separate: 125000,
      head_of_household: 200000,
    },
    netEarningsMultiplier: 0.9235,
    socialSecurityWageBase: 184500,
    seTaxDeductionRate: 0.5,
  },

  // Qualified Business Income deduction thresholds and phase-in ranges for tax year 2026.
  // Source: IRS Rev. Proc. 2025-32 §3.14
  // https://www.irs.gov/pub/irs-drop/rp-25-32.pdf
  // Cross-reference: https://taxfoundation.org/data/all/federal/2026-tax-brackets/
  qbiDeduction: {
    threshold: {
      single: 201775,
      married_joint: 403500,
      married_separate: 201775,
      head_of_household: 201775,
    },
    phaseInRange: {
      single: 75000,
      married_joint: 150000,
      married_separate: 75000,
      head_of_household: 75000,
    },
    rate: 0.20,
  },

  // Estimated tax payment due dates for tax year 2026.
  // Source: IRS Estimated taxes
  // https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes
  quarterlyDueDates: {
    q1: '2026-04-15',
    q2: '2026-06-15',
    q3: '2026-09-15',
    q4: '2027-01-15',
  },
};

export default federalRules2026;

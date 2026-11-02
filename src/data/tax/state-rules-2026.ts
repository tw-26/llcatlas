import type { USStateCode } from '../states';
import type { FilingStatus, TaxBracket } from './rules-2026';

export type { USStateCode };

export type StateRules = {
  state: USStateCode;
  taxYear: number;
  hasIncomeTax: boolean;
  taxesWageIncome: boolean;
  taxesSelfEmploymentIncome: boolean;
  taxStructure: 'none' | 'flat' | 'graduated';
  brackets?: Record<FilingStatus, TaxBracket[]>;
  flatRate?: number;
  standardDeduction?: Record<FilingStatus, number>;
  personalExemption?: Record<FilingStatus, number>;
  /** Additional state-level surtaxes applied after computing regular state tax via brackets. */
  surtaxes?: {
    name: string;
    rate: number;
    threshold: number;
    note: string;
  }[];
  notes?: string;
  sources: readonly string[];
  lastVerified: string;
};

/**
 * 2026 state individual income tax rules.
 *
 * Base: Tax Foundation, "State Individual Income Tax Rates and Brackets, 2026" (as of January 1, 2026).
 * Then laws signed later in 2026 and retroactive to January 1: Georgia (4.99%, $15,000 standard deduction),
 * Utah (4.45%), West Virginia (SB 392), South Carolina (H. 4216), Arkansas (3.7% top rate), and
 * Arizona's conformity to the federal standard deduction (H.B. 4168).
 *
 * Married filing separately and head of household use the single brackets (same convention as the 2025 file).
 * Where the source lists only single and joint deductions, head-of-household amounts follow the federal
 * amount for federal-conforming states, or keep their 2025 ratio to the single amount.
 */
export const STATE_RULES_2026: Record<USStateCode, StateRules> = {
  AK: {
    state: "AK",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "Alaska has no state individual income tax, so self-employment income is not taxed at the state level.",
    sources: [
      "https://tax.alaska.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  AL: {
    state: "AL",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.02,
          min: 0,
          max: 500
        },
        {
          rate: 0.04,
          min: 500,
          max: 3000
        },
        {
          rate: 0.05,
          min: 3000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.02,
          min: 0,
          max: 1000
        },
        {
          rate: 0.04,
          min: 1000,
          max: 6000
        },
        {
          rate: 0.05,
          min: 6000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.02,
          min: 0,
          max: 500
        },
        {
          rate: 0.04,
          min: 500,
          max: 3000
        },
        {
          rate: 0.05,
          min: 3000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.02,
          min: 0,
          max: 500
        },
        {
          rate: 0.04,
          min: 500,
          max: 3000
        },
        {
          rate: 0.05,
          min: 3000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 3000,
      married_joint: 8500,
      married_separate: 3000,
      head_of_household: 3000
    },
    personalExemption: {
      single: 1500,
      married_joint: 3000,
      married_separate: 1500,
      head_of_household: 1500
    },
    notes: "Alabama has 3 income tax rates for 2026, from 2% to 5%. The standard deduction phases down at higher incomes, and some Alabama cities levy occupational taxes (neither modeled).",
    sources: [
      "https://www.revenue.alabama.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  AR: {
    state: "AR",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.02,
          min: 0,
          max: 4600
        },
        {
          rate: 0.037,
          min: 4600,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.02,
          min: 0,
          max: 4600
        },
        {
          rate: 0.037,
          min: 4600,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.02,
          min: 0,
          max: 4600
        },
        {
          rate: 0.037,
          min: 4600,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.02,
          min: 0,
          max: 4600
        },
        {
          rate: 0.037,
          min: 4600,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 2470,
      married_joint: 4940,
      married_separate: 2470,
      head_of_household: 2470
    },
    notes: "Arkansas has 2 income tax rates for 2026, from 2% to 3.7%. The top rate fell from 3.9% to 3.7%, retroactive to January 1, 2026. Arkansas uses a separate lower-income table with finer brackets; the calculator uses the upper-income schedule, so low earners may see a slightly high estimate. Personal tax credits are not modeled.",
    sources: [
      "https://www.dfa.arkansas.gov/",
      "https://taxfoundation.org/blog/arkansas-income-tax-cut-rates/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  AZ: {
    state: "AZ",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.025,
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "Arizona has a flat 2.5% individual income tax for 2026. Arizona follows the federal standard deduction after conforming to the federal code as of January 1, 2026. Dependent credits are not modeled.",
    sources: [
      "https://azdor.gov/",
      "https://www.forvismazars.us/forsights/2026/07/arizona-updates-irc-conformity-date-to-january-1-2026",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  CA: {
    state: "CA",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.01,
          min: 0,
          max: 11079
        },
        {
          rate: 0.02,
          min: 11079,
          max: 26264
        },
        {
          rate: 0.04,
          min: 26264,
          max: 41452
        },
        {
          rate: 0.06,
          min: 41452,
          max: 57542
        },
        {
          rate: 0.08,
          min: 57542,
          max: 72724
        },
        {
          rate: 0.093,
          min: 72724,
          max: 371479
        },
        {
          rate: 0.103,
          min: 371479,
          max: 445771
        },
        {
          rate: 0.113,
          min: 445771,
          max: 742953
        },
        {
          rate: 0.123,
          min: 742953,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.01,
          min: 0,
          max: 22158
        },
        {
          rate: 0.02,
          min: 22158,
          max: 52528
        },
        {
          rate: 0.04,
          min: 52528,
          max: 82904
        },
        {
          rate: 0.06,
          min: 82904,
          max: 115084
        },
        {
          rate: 0.08,
          min: 115084,
          max: 145448
        },
        {
          rate: 0.093,
          min: 145448,
          max: 742958
        },
        {
          rate: 0.103,
          min: 742958,
          max: 891542
        },
        {
          rate: 0.113,
          min: 891542,
          max: 1485906
        },
        {
          rate: 0.123,
          min: 1485906,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.01,
          min: 0,
          max: 11079
        },
        {
          rate: 0.02,
          min: 11079,
          max: 26264
        },
        {
          rate: 0.04,
          min: 26264,
          max: 41452
        },
        {
          rate: 0.06,
          min: 41452,
          max: 57542
        },
        {
          rate: 0.08,
          min: 57542,
          max: 72724
        },
        {
          rate: 0.093,
          min: 72724,
          max: 371479
        },
        {
          rate: 0.103,
          min: 371479,
          max: 445771
        },
        {
          rate: 0.113,
          min: 445771,
          max: 742953
        },
        {
          rate: 0.123,
          min: 742953,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.01,
          min: 0,
          max: 11079
        },
        {
          rate: 0.02,
          min: 11079,
          max: 26264
        },
        {
          rate: 0.04,
          min: 26264,
          max: 41452
        },
        {
          rate: 0.06,
          min: 41452,
          max: 57542
        },
        {
          rate: 0.08,
          min: 57542,
          max: 72724
        },
        {
          rate: 0.093,
          min: 72724,
          max: 371479
        },
        {
          rate: 0.103,
          min: 371479,
          max: 445771
        },
        {
          rate: 0.113,
          min: 445771,
          max: 742953
        },
        {
          rate: 0.123,
          min: 742953,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 5540,
      married_joint: 11080,
      married_separate: 5540,
      head_of_household: 11080
    },
    surtaxes: [
      {
        name: "Mental Health Services Tax",
        rate: 0.01,
        threshold: 1000000,
        note: "Additional 1% tax on California taxable income exceeding $1,000,000 (same threshold for all filing statuses). Funds the Behavioral Health Services Act."
      }
    ],
    notes: "California has 9 income tax rates for 2026, from 1% to 12.3%. Includes the 1% Mental Health Services Tax on taxable income over $1,000,000. Personal exemption credits are not modeled. SDI applies to wages, not self-employment income.",
    sources: [
      "https://www.ftb.ca.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  CO: {
    state: "CO",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.044,
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "Colorado has a flat 4.4% individual income tax for 2026. Uses the federal standard deduction. TABOR refunds can lower the effective rate in some years (not modeled).",
    sources: [
      "https://tax.colorado.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  CT: {
    state: "CT",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.02,
          min: 0,
          max: 10000
        },
        {
          rate: 0.045,
          min: 10000,
          max: 50000
        },
        {
          rate: 0.055,
          min: 50000,
          max: 100000
        },
        {
          rate: 0.06,
          min: 100000,
          max: 200000
        },
        {
          rate: 0.065,
          min: 200000,
          max: 250000
        },
        {
          rate: 0.069,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0699,
          min: 500000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.02,
          min: 0,
          max: 20000
        },
        {
          rate: 0.045,
          min: 20000,
          max: 100000
        },
        {
          rate: 0.055,
          min: 100000,
          max: 200000
        },
        {
          rate: 0.06,
          min: 200000,
          max: 400000
        },
        {
          rate: 0.065,
          min: 400000,
          max: 500000
        },
        {
          rate: 0.069,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.0699,
          min: 1000000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.02,
          min: 0,
          max: 10000
        },
        {
          rate: 0.045,
          min: 10000,
          max: 50000
        },
        {
          rate: 0.055,
          min: 50000,
          max: 100000
        },
        {
          rate: 0.06,
          min: 100000,
          max: 200000
        },
        {
          rate: 0.065,
          min: 200000,
          max: 250000
        },
        {
          rate: 0.069,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0699,
          min: 500000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.02,
          min: 0,
          max: 10000
        },
        {
          rate: 0.045,
          min: 10000,
          max: 50000
        },
        {
          rate: 0.055,
          min: 50000,
          max: 100000
        },
        {
          rate: 0.06,
          min: 100000,
          max: 200000
        },
        {
          rate: 0.065,
          min: 200000,
          max: 250000
        },
        {
          rate: 0.069,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0699,
          min: 500000,
          max: null
        }
      ]
    },
    personalExemption: {
      single: 15000,
      married_joint: 24000,
      married_separate: 15000,
      head_of_household: 19000
    },
    notes: "Connecticut has 7 income tax rates for 2026, from 2% to 6.99%. The lowest rate fell from 3% to 2% for 2026. Benefit recapture for high earners and personal exemption phase-outs are not modeled, so high-income estimates may be low.",
    sources: [
      "https://portal.ct.gov/drs",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  DC: {
    state: "DC",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.04,
          min: 0,
          max: 10000
        },
        {
          rate: 0.06,
          min: 10000,
          max: 40000
        },
        {
          rate: 0.065,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.085,
          min: 60000,
          max: 250000
        },
        {
          rate: 0.0925,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0975,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.04,
          min: 0,
          max: 10000
        },
        {
          rate: 0.06,
          min: 10000,
          max: 40000
        },
        {
          rate: 0.065,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.085,
          min: 60000,
          max: 250000
        },
        {
          rate: 0.0925,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0975,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.04,
          min: 0,
          max: 10000
        },
        {
          rate: 0.06,
          min: 10000,
          max: 40000
        },
        {
          rate: 0.065,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.085,
          min: 60000,
          max: 250000
        },
        {
          rate: 0.0925,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0975,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.04,
          min: 0,
          max: 10000
        },
        {
          rate: 0.06,
          min: 10000,
          max: 40000
        },
        {
          rate: 0.065,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.085,
          min: 60000,
          max: 250000
        },
        {
          rate: 0.0925,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0975,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "The District of Columbia has 7 income tax rates for 2026, from 4% to 10.75%. Uses the federal standard deduction.",
    sources: [
      "https://otr.cfo.dc.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  DE: {
    state: "DE",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0,
          min: 0,
          max: 2000
        },
        {
          rate: 0.022,
          min: 2000,
          max: 5000
        },
        {
          rate: 0.039,
          min: 5000,
          max: 10000
        },
        {
          rate: 0.048,
          min: 10000,
          max: 20000
        },
        {
          rate: 0.052,
          min: 20000,
          max: 25000
        },
        {
          rate: 0.0555,
          min: 25000,
          max: 60000
        },
        {
          rate: 0.066,
          min: 60000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0,
          min: 0,
          max: 2000
        },
        {
          rate: 0.022,
          min: 2000,
          max: 5000
        },
        {
          rate: 0.039,
          min: 5000,
          max: 10000
        },
        {
          rate: 0.048,
          min: 10000,
          max: 20000
        },
        {
          rate: 0.052,
          min: 20000,
          max: 25000
        },
        {
          rate: 0.0555,
          min: 25000,
          max: 60000
        },
        {
          rate: 0.066,
          min: 60000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0,
          min: 0,
          max: 2000
        },
        {
          rate: 0.022,
          min: 2000,
          max: 5000
        },
        {
          rate: 0.039,
          min: 5000,
          max: 10000
        },
        {
          rate: 0.048,
          min: 10000,
          max: 20000
        },
        {
          rate: 0.052,
          min: 20000,
          max: 25000
        },
        {
          rate: 0.0555,
          min: 25000,
          max: 60000
        },
        {
          rate: 0.066,
          min: 60000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0,
          min: 0,
          max: 2000
        },
        {
          rate: 0.022,
          min: 2000,
          max: 5000
        },
        {
          rate: 0.039,
          min: 5000,
          max: 10000
        },
        {
          rate: 0.048,
          min: 10000,
          max: 20000
        },
        {
          rate: 0.052,
          min: 20000,
          max: 25000
        },
        {
          rate: 0.0555,
          min: 25000,
          max: 60000
        },
        {
          rate: 0.066,
          min: 60000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 3250,
      married_joint: 6500,
      married_separate: 3250,
      head_of_household: 3250
    },
    notes: "Delaware has 6 income tax rates for 2026, from 2.2% to 6.6%. The first $2,000 of taxable income is taxed at 0%. Personal credits and the Wilmington wage tax are not modeled.",
    sources: [
      "https://revenue.delaware.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  FL: {
    state: "FL",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "Florida has no state individual income tax, so self-employment income is not taxed at the state level.",
    sources: [
      "https://floridarevenue.com/taxes/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  GA: {
    state: "GA",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.0499,
    standardDeduction: {
      single: 15000,
      married_joint: 30000,
      married_separate: 15000,
      head_of_household: 15000
    },
    notes: "Georgia has a flat 4.99% individual income tax for 2026. The rate fell from 5.19% to 4.99% and the standard deduction rose to $15,000 ($30,000 joint), retroactive to January 1, 2026.",
    sources: [
      "https://dor.georgia.gov/taxes/important-tax-updates",
      "https://dor.georgia.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  HI: {
    state: "HI",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.014,
          min: 0,
          max: 9600
        },
        {
          rate: 0.032,
          min: 9600,
          max: 14400
        },
        {
          rate: 0.055,
          min: 14400,
          max: 19200
        },
        {
          rate: 0.064,
          min: 19200,
          max: 24000
        },
        {
          rate: 0.068,
          min: 24000,
          max: 36000
        },
        {
          rate: 0.072,
          min: 36000,
          max: 48000
        },
        {
          rate: 0.076,
          min: 48000,
          max: 125000
        },
        {
          rate: 0.079,
          min: 125000,
          max: 175000
        },
        {
          rate: 0.0825,
          min: 175000,
          max: 225000
        },
        {
          rate: 0.09,
          min: 225000,
          max: 275000
        },
        {
          rate: 0.1,
          min: 275000,
          max: 325000
        },
        {
          rate: 0.11,
          min: 325000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.014,
          min: 0,
          max: 19200
        },
        {
          rate: 0.032,
          min: 19200,
          max: 28800
        },
        {
          rate: 0.055,
          min: 28800,
          max: 38400
        },
        {
          rate: 0.064,
          min: 38400,
          max: 48000
        },
        {
          rate: 0.068,
          min: 48000,
          max: 72000
        },
        {
          rate: 0.072,
          min: 72000,
          max: 96000
        },
        {
          rate: 0.076,
          min: 96000,
          max: 250000
        },
        {
          rate: 0.079,
          min: 250000,
          max: 350000
        },
        {
          rate: 0.0825,
          min: 350000,
          max: 450000
        },
        {
          rate: 0.09,
          min: 450000,
          max: 550000
        },
        {
          rate: 0.1,
          min: 550000,
          max: 650000
        },
        {
          rate: 0.11,
          min: 650000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.014,
          min: 0,
          max: 9600
        },
        {
          rate: 0.032,
          min: 9600,
          max: 14400
        },
        {
          rate: 0.055,
          min: 14400,
          max: 19200
        },
        {
          rate: 0.064,
          min: 19200,
          max: 24000
        },
        {
          rate: 0.068,
          min: 24000,
          max: 36000
        },
        {
          rate: 0.072,
          min: 36000,
          max: 48000
        },
        {
          rate: 0.076,
          min: 48000,
          max: 125000
        },
        {
          rate: 0.079,
          min: 125000,
          max: 175000
        },
        {
          rate: 0.0825,
          min: 175000,
          max: 225000
        },
        {
          rate: 0.09,
          min: 225000,
          max: 275000
        },
        {
          rate: 0.1,
          min: 275000,
          max: 325000
        },
        {
          rate: 0.11,
          min: 325000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.014,
          min: 0,
          max: 9600
        },
        {
          rate: 0.032,
          min: 9600,
          max: 14400
        },
        {
          rate: 0.055,
          min: 14400,
          max: 19200
        },
        {
          rate: 0.064,
          min: 19200,
          max: 24000
        },
        {
          rate: 0.068,
          min: 24000,
          max: 36000
        },
        {
          rate: 0.072,
          min: 36000,
          max: 48000
        },
        {
          rate: 0.076,
          min: 48000,
          max: 125000
        },
        {
          rate: 0.079,
          min: 125000,
          max: 175000
        },
        {
          rate: 0.0825,
          min: 175000,
          max: 225000
        },
        {
          rate: 0.09,
          min: 225000,
          max: 275000
        },
        {
          rate: 0.1,
          min: 275000,
          max: 325000
        },
        {
          rate: 0.11,
          min: 325000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 4400,
      married_joint: 8800,
      married_separate: 4400,
      head_of_household: 6424
    },
    personalExemption: {
      single: 1144,
      married_joint: 2288,
      married_separate: 1144,
      head_of_household: 1144
    },
    notes: "Hawaii has 12 income tax rates for 2026, from 1.4% to 11%. Hawaii has the most brackets in the nation, and they continue to widen through 2031.",
    sources: [
      "https://tax.hawaii.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  IA: {
    state: "IA",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.038,
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "Iowa has a flat 3.8% individual income tax for 2026. Iowa uses small personal credits instead of a standard deduction (not modeled).",
    sources: [
      "https://tax.iowa.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  ID: {
    state: "ID",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0,
          min: 0,
          max: 4811
        },
        {
          rate: 0.053,
          min: 4811,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0,
          min: 0,
          max: 9622
        },
        {
          rate: 0.053,
          min: 9622,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0,
          min: 0,
          max: 4811
        },
        {
          rate: 0.053,
          min: 4811,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0,
          min: 0,
          max: 4811
        },
        {
          rate: 0.053,
          min: 4811,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "Idaho taxes income above $4,811 (single) at 5.3% for 2026; income below that is taxed at 0%. Uses the federal standard deduction.",
    sources: [
      "https://tax.idaho.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  IL: {
    state: "IL",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.0495,
    personalExemption: {
      single: 2925,
      married_joint: 5850,
      married_separate: 2925,
      head_of_household: 2925
    },
    notes: "Illinois has a flat 4.95% individual income tax for 2026. No standard deduction; the personal exemption phases out at high incomes (not modeled).",
    sources: [
      "https://tax.illinois.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  IN: {
    state: "IN",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.0295,
    personalExemption: {
      single: 1000,
      married_joint: 2000,
      married_separate: 1000,
      head_of_household: 1000
    },
    notes: "Indiana has a flat 2.95% individual income tax for 2026. The rate fell from 3.0% to 2.95% on January 1, 2026. County income taxes apply in every Indiana county and are not included.",
    sources: [
      "https://www.in.gov/dor/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  KS: {
    state: "KS",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.052,
          min: 0,
          max: 23000
        },
        {
          rate: 0.0558,
          min: 23000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.052,
          min: 0,
          max: 46000
        },
        {
          rate: 0.0558,
          min: 46000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.052,
          min: 0,
          max: 23000
        },
        {
          rate: 0.0558,
          min: 23000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.052,
          min: 0,
          max: 23000
        },
        {
          rate: 0.0558,
          min: 23000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 3605,
      married_joint: 8240,
      married_separate: 3605,
      head_of_household: 6000
    },
    personalExemption: {
      single: 9160,
      married_joint: 18320,
      married_separate: 9160,
      head_of_household: 9160
    },
    notes: "Kansas has 2 income tax rates for 2026, from 5.2% to 5.58%. Some Kansas localities levy local income taxes (not modeled).",
    sources: [
      "https://www.ksrevenue.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  KY: {
    state: "KY",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.035,
    standardDeduction: {
      single: 3360,
      married_joint: 3360,
      married_separate: 3360,
      head_of_household: 3360
    },
    notes: "Kentucky has a flat 3.5% individual income tax for 2026. The rate fell from 4.0% to 3.5% on January 1, 2026. Many Kentucky cities and counties levy occupational license taxes on net profits (not modeled).",
    sources: [
      "https://revenue.ky.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  LA: {
    state: "LA",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.03,
    standardDeduction: {
      single: 12875,
      married_joint: 25750,
      married_separate: 12875,
      head_of_household: 12875
    },
    notes: "Louisiana has a flat 3% individual income tax for 2026. The standard deduction is indexed for inflation starting in 2026.",
    sources: [
      "https://revenue.louisiana.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  MA: {
    state: "MA",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.05,
          min: 0,
          max: 1083150
        },
        {
          rate: 0.09,
          min: 1083150,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.05,
          min: 0,
          max: 1083150
        },
        {
          rate: 0.09,
          min: 1083150,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.05,
          min: 0,
          max: 1083150
        },
        {
          rate: 0.09,
          min: 1083150,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.05,
          min: 0,
          max: 1083150
        },
        {
          rate: 0.09,
          min: 1083150,
          max: null
        }
      ]
    },
    personalExemption: {
      single: 4400,
      married_joint: 8800,
      married_separate: 4400,
      head_of_household: 6800
    },
    notes: "Massachusetts has 2 income tax rates for 2026, from 5% to 9%. Includes the 4% surtax on income over $1,083,150, modeled as a second bracket.",
    sources: [
      "https://www.mass.gov/orgs/massachusetts-department-of-revenue",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  MD: {
    state: "MD",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.02,
          min: 0,
          max: 1000
        },
        {
          rate: 0.03,
          min: 1000,
          max: 2000
        },
        {
          rate: 0.04,
          min: 2000,
          max: 3000
        },
        {
          rate: 0.0475,
          min: 3000,
          max: 100000
        },
        {
          rate: 0.05,
          min: 100000,
          max: 125000
        },
        {
          rate: 0.0525,
          min: 125000,
          max: 150000
        },
        {
          rate: 0.055,
          min: 150000,
          max: 250000
        },
        {
          rate: 0.0575,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0625,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.065,
          min: 1000000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.02,
          min: 0,
          max: 1000
        },
        {
          rate: 0.03,
          min: 1000,
          max: 2000
        },
        {
          rate: 0.04,
          min: 2000,
          max: 3000
        },
        {
          rate: 0.0475,
          min: 3000,
          max: 150000
        },
        {
          rate: 0.05,
          min: 150000,
          max: 175000
        },
        {
          rate: 0.0525,
          min: 175000,
          max: 225000
        },
        {
          rate: 0.055,
          min: 225000,
          max: 300000
        },
        {
          rate: 0.0575,
          min: 300000,
          max: 600000
        },
        {
          rate: 0.0625,
          min: 600000,
          max: 1200000
        },
        {
          rate: 0.065,
          min: 1200000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.02,
          min: 0,
          max: 1000
        },
        {
          rate: 0.03,
          min: 1000,
          max: 2000
        },
        {
          rate: 0.04,
          min: 2000,
          max: 3000
        },
        {
          rate: 0.0475,
          min: 3000,
          max: 100000
        },
        {
          rate: 0.05,
          min: 100000,
          max: 125000
        },
        {
          rate: 0.0525,
          min: 125000,
          max: 150000
        },
        {
          rate: 0.055,
          min: 150000,
          max: 250000
        },
        {
          rate: 0.0575,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0625,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.065,
          min: 1000000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.02,
          min: 0,
          max: 1000
        },
        {
          rate: 0.03,
          min: 1000,
          max: 2000
        },
        {
          rate: 0.04,
          min: 2000,
          max: 3000
        },
        {
          rate: 0.0475,
          min: 3000,
          max: 100000
        },
        {
          rate: 0.05,
          min: 100000,
          max: 125000
        },
        {
          rate: 0.0525,
          min: 125000,
          max: 150000
        },
        {
          rate: 0.055,
          min: 150000,
          max: 250000
        },
        {
          rate: 0.0575,
          min: 250000,
          max: 500000
        },
        {
          rate: 0.0625,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.065,
          min: 1000000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 3350,
      married_joint: 6700,
      married_separate: 3350,
      head_of_household: 6750
    },
    personalExemption: {
      single: 3200,
      married_joint: 6400,
      married_separate: 3200,
      head_of_household: 3200
    },
    notes: "Maryland has 10 income tax rates for 2026, from 2% to 6.5%. County income taxes are not included; every Maryland county adds one on top of the state tax.",
    sources: [
      "https://www.marylandtaxes.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  ME: {
    state: "ME",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.058,
          min: 0,
          max: 27399
        },
        {
          rate: 0.0675,
          min: 27399,
          max: 64849
        },
        {
          rate: 0.0715,
          min: 64849,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.058,
          min: 0,
          max: 54849
        },
        {
          rate: 0.0675,
          min: 54849,
          max: 129749
        },
        {
          rate: 0.0715,
          min: 129749,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.058,
          min: 0,
          max: 27399
        },
        {
          rate: 0.0675,
          min: 27399,
          max: 64849
        },
        {
          rate: 0.0715,
          min: 64849,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.058,
          min: 0,
          max: 27399
        },
        {
          rate: 0.0675,
          min: 27399,
          max: 64849
        },
        {
          rate: 0.0715,
          min: 64849,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 8350,
      married_joint: 16700,
      married_separate: 8350,
      head_of_household: 12550
    },
    personalExemption: {
      single: 5300,
      married_joint: 10600,
      married_separate: 5300,
      head_of_household: 5300
    },
    notes: "Maine has 3 income tax rates for 2026, from 5.8% to 7.15%. Deduction and exemption phase-outs at higher incomes are not modeled.",
    sources: [
      "https://www.maine.gov/revenue/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  MI: {
    state: "MI",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.0425,
    personalExemption: {
      single: 5900,
      married_joint: 11800,
      married_separate: 5900,
      head_of_household: 5900
    },
    notes: "Michigan has a flat 4.25% individual income tax for 2026. City income taxes (Detroit and others) are not included.",
    sources: [
      "https://www.michigan.gov/taxes/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  MN: {
    state: "MN",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.0535,
          min: 0,
          max: 33310
        },
        {
          rate: 0.068,
          min: 33310,
          max: 109430
        },
        {
          rate: 0.0785,
          min: 109430,
          max: 203150
        },
        {
          rate: 0.0985,
          min: 203150,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.0535,
          min: 0,
          max: 48700
        },
        {
          rate: 0.068,
          min: 48700,
          max: 193480
        },
        {
          rate: 0.0785,
          min: 193480,
          max: 337930
        },
        {
          rate: 0.0985,
          min: 337930,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.0535,
          min: 0,
          max: 33310
        },
        {
          rate: 0.068,
          min: 33310,
          max: 109430
        },
        {
          rate: 0.0785,
          min: 109430,
          max: 203150
        },
        {
          rate: 0.0985,
          min: 203150,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.0535,
          min: 0,
          max: 33310
        },
        {
          rate: 0.068,
          min: 33310,
          max: 109430
        },
        {
          rate: 0.0785,
          min: 109430,
          max: 203150
        },
        {
          rate: 0.0985,
          min: 203150,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 15300,
      married_joint: 30600,
      married_separate: 15300,
      head_of_household: 23050
    },
    notes: "Minnesota has 4 income tax rates for 2026, from 5.35% to 9.85%. Uses its own standard deduction, which phases down at higher incomes (not modeled).",
    sources: [
      "https://www.revenue.state.mn.us/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  MO: {
    state: "MO",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0,
          min: 0,
          max: 1348
        },
        {
          rate: 0.02,
          min: 1348,
          max: 2696
        },
        {
          rate: 0.025,
          min: 2696,
          max: 4044
        },
        {
          rate: 0.03,
          min: 4044,
          max: 5392
        },
        {
          rate: 0.035,
          min: 5392,
          max: 6740
        },
        {
          rate: 0.04,
          min: 6740,
          max: 8088
        },
        {
          rate: 0.045,
          min: 8088,
          max: 9436
        },
        {
          rate: 0.047,
          min: 9436,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0,
          min: 0,
          max: 1348
        },
        {
          rate: 0.02,
          min: 1348,
          max: 2696
        },
        {
          rate: 0.025,
          min: 2696,
          max: 4044
        },
        {
          rate: 0.03,
          min: 4044,
          max: 5392
        },
        {
          rate: 0.035,
          min: 5392,
          max: 6740
        },
        {
          rate: 0.04,
          min: 6740,
          max: 8088
        },
        {
          rate: 0.045,
          min: 8088,
          max: 9436
        },
        {
          rate: 0.047,
          min: 9436,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0,
          min: 0,
          max: 1348
        },
        {
          rate: 0.02,
          min: 1348,
          max: 2696
        },
        {
          rate: 0.025,
          min: 2696,
          max: 4044
        },
        {
          rate: 0.03,
          min: 4044,
          max: 5392
        },
        {
          rate: 0.035,
          min: 5392,
          max: 6740
        },
        {
          rate: 0.04,
          min: 6740,
          max: 8088
        },
        {
          rate: 0.045,
          min: 8088,
          max: 9436
        },
        {
          rate: 0.047,
          min: 9436,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0,
          min: 0,
          max: 1348
        },
        {
          rate: 0.02,
          min: 1348,
          max: 2696
        },
        {
          rate: 0.025,
          min: 2696,
          max: 4044
        },
        {
          rate: 0.03,
          min: 4044,
          max: 5392
        },
        {
          rate: 0.035,
          min: 5392,
          max: 6740
        },
        {
          rate: 0.04,
          min: 6740,
          max: 8088
        },
        {
          rate: 0.045,
          min: 8088,
          max: 9436
        },
        {
          rate: 0.047,
          min: 9436,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "Missouri has 7 income tax rates for 2026, from 2% to 4.7%. Kansas City and St. Louis earnings taxes are not included.",
    sources: [
      "https://dor.mo.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  MS: {
    state: "MS",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0,
          min: 0,
          max: 10000
        },
        {
          rate: 0.04,
          min: 10000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0,
          min: 0,
          max: 10000
        },
        {
          rate: 0.04,
          min: 10000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0,
          min: 0,
          max: 10000
        },
        {
          rate: 0.04,
          min: 10000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0,
          min: 0,
          max: 10000
        },
        {
          rate: 0.04,
          min: 10000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 2300,
      married_joint: 4600,
      married_separate: 2300,
      head_of_household: 3400
    },
    personalExemption: {
      single: 6000,
      married_joint: 12000,
      married_separate: 6000,
      head_of_household: 9500
    },
    notes: "Mississippi taxes income above $10,000 (single) at 4% for 2026; income below that is taxed at 0%. The rate on income above $10,000 fell from 4.4% to 4.0% on January 1, 2026. Income up to $10,000 is taxed at 0%.",
    sources: [
      "https://www.dor.ms.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  MT: {
    state: "MT",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.047,
          min: 0,
          max: 47500
        },
        {
          rate: 0.0565,
          min: 47500,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.047,
          min: 0,
          max: 95000
        },
        {
          rate: 0.0565,
          min: 95000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.047,
          min: 0,
          max: 47500
        },
        {
          rate: 0.0565,
          min: 47500,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.047,
          min: 0,
          max: 47500
        },
        {
          rate: 0.0565,
          min: 47500,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "Montana has 2 income tax rates for 2026, from 4.7% to 5.65%. The top rate fell from 5.9% to 5.65% on January 1, 2026. Uses the federal standard deduction.",
    sources: [
      "https://mtrevenue.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  NC: {
    state: "NC",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.0399,
    standardDeduction: {
      single: 12750,
      married_joint: 25500,
      married_separate: 12750,
      head_of_household: 19125
    },
    notes: "North Carolina has a flat 3.99% individual income tax for 2026. The rate fell from 4.25% to 3.99% on January 1, 2026.",
    sources: [
      "https://www.ncdor.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  ND: {
    state: "ND",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0,
          min: 0,
          max: 48475
        },
        {
          rate: 0.0195,
          min: 48475,
          max: 244825
        },
        {
          rate: 0.025,
          min: 244825,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0,
          min: 0,
          max: 80975
        },
        {
          rate: 0.0195,
          min: 80975,
          max: 298075
        },
        {
          rate: 0.025,
          min: 298075,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0,
          min: 0,
          max: 48475
        },
        {
          rate: 0.0195,
          min: 48475,
          max: 244825
        },
        {
          rate: 0.025,
          min: 244825,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0,
          min: 0,
          max: 48475
        },
        {
          rate: 0.0195,
          min: 48475,
          max: 244825
        },
        {
          rate: 0.025,
          min: 244825,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "North Dakota has 2 income tax rates for 2026, from 1.95% to 2.5%. Income up to the first threshold is taxed at 0%. Uses the federal standard deduction.",
    sources: [
      "https://www.tax.nd.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  NE: {
    state: "NE",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.0246,
          min: 0,
          max: 4130
        },
        {
          rate: 0.0351,
          min: 4130,
          max: 24760
        },
        {
          rate: 0.0455,
          min: 24760,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.0246,
          min: 0,
          max: 8250
        },
        {
          rate: 0.0351,
          min: 8250,
          max: 49530
        },
        {
          rate: 0.0455,
          min: 49530,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.0246,
          min: 0,
          max: 4130
        },
        {
          rate: 0.0351,
          min: 4130,
          max: 24760
        },
        {
          rate: 0.0455,
          min: 24760,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.0246,
          min: 0,
          max: 4130
        },
        {
          rate: 0.0351,
          min: 4130,
          max: 24760
        },
        {
          rate: 0.0455,
          min: 24760,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 8850,
      married_joint: 17700,
      married_separate: 8850,
      head_of_household: 13050
    },
    notes: "Nebraska has 3 income tax rates for 2026, from 2.46% to 4.55%. The top rate fell from 5.2% to 4.55% on January 1, 2026. Personal exemption credits are not modeled.",
    sources: [
      "https://revenue.nebraska.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  NH: {
    state: "NH",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "New Hampshire has no tax on wages or self-employment income; its interest and dividends tax was repealed in 2025.",
    sources: [
      "https://www.revenue.nh.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  NJ: {
    state: "NJ",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.014,
          min: 0,
          max: 20000
        },
        {
          rate: 0.0175,
          min: 20000,
          max: 35000
        },
        {
          rate: 0.035,
          min: 35000,
          max: 40000
        },
        {
          rate: 0.0553,
          min: 40000,
          max: 75000
        },
        {
          rate: 0.0637,
          min: 75000,
          max: 500000
        },
        {
          rate: 0.0897,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.014,
          min: 0,
          max: 20000
        },
        {
          rate: 0.0175,
          min: 20000,
          max: 50000
        },
        {
          rate: 0.0245,
          min: 50000,
          max: 70000
        },
        {
          rate: 0.035,
          min: 70000,
          max: 80000
        },
        {
          rate: 0.0553,
          min: 80000,
          max: 150000
        },
        {
          rate: 0.0637,
          min: 150000,
          max: 500000
        },
        {
          rate: 0.0897,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.014,
          min: 0,
          max: 20000
        },
        {
          rate: 0.0175,
          min: 20000,
          max: 35000
        },
        {
          rate: 0.035,
          min: 35000,
          max: 40000
        },
        {
          rate: 0.0553,
          min: 40000,
          max: 75000
        },
        {
          rate: 0.0637,
          min: 75000,
          max: 500000
        },
        {
          rate: 0.0897,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.014,
          min: 0,
          max: 20000
        },
        {
          rate: 0.0175,
          min: 20000,
          max: 35000
        },
        {
          rate: 0.035,
          min: 35000,
          max: 40000
        },
        {
          rate: 0.0553,
          min: 40000,
          max: 75000
        },
        {
          rate: 0.0637,
          min: 75000,
          max: 500000
        },
        {
          rate: 0.0897,
          min: 500000,
          max: 1000000
        },
        {
          rate: 0.1075,
          min: 1000000,
          max: null
        }
      ]
    },
    personalExemption: {
      single: 1000,
      married_joint: 2000,
      married_separate: 1000,
      head_of_household: 1500
    },
    notes: "New Jersey has 7 income tax rates for 2026, from 1.4% to 10.75%. Single and joint filers use different bracket structures. No standard deduction.",
    sources: [
      "https://www.state.nj.us/treasury/taxation/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  NM: {
    state: "NM",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.015,
          min: 0,
          max: 5500
        },
        {
          rate: 0.032,
          min: 5500,
          max: 16500
        },
        {
          rate: 0.043,
          min: 16500,
          max: 33500
        },
        {
          rate: 0.047,
          min: 33500,
          max: 66500
        },
        {
          rate: 0.049,
          min: 66500,
          max: 210000
        },
        {
          rate: 0.059,
          min: 210000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.015,
          min: 0,
          max: 8000
        },
        {
          rate: 0.032,
          min: 8000,
          max: 25000
        },
        {
          rate: 0.043,
          min: 25000,
          max: 50000
        },
        {
          rate: 0.047,
          min: 50000,
          max: 100000
        },
        {
          rate: 0.049,
          min: 100000,
          max: 315000
        },
        {
          rate: 0.059,
          min: 315000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.015,
          min: 0,
          max: 5500
        },
        {
          rate: 0.032,
          min: 5500,
          max: 16500
        },
        {
          rate: 0.043,
          min: 16500,
          max: 33500
        },
        {
          rate: 0.047,
          min: 33500,
          max: 66500
        },
        {
          rate: 0.049,
          min: 66500,
          max: 210000
        },
        {
          rate: 0.059,
          min: 210000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.015,
          min: 0,
          max: 5500
        },
        {
          rate: 0.032,
          min: 5500,
          max: 16500
        },
        {
          rate: 0.043,
          min: 16500,
          max: 33500
        },
        {
          rate: 0.047,
          min: 33500,
          max: 66500
        },
        {
          rate: 0.049,
          min: 66500,
          max: 210000
        },
        {
          rate: 0.059,
          min: 210000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 16100,
      married_joint: 32200,
      married_separate: 16100,
      head_of_household: 24150
    },
    notes: "New Mexico has 6 income tax rates for 2026, from 1.5% to 5.9%. Uses the federal standard deduction.",
    sources: [
      "https://www.tax.newmexico.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  NV: {
    state: "NV",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "Nevada has no state individual income tax, so self-employment income is not taxed at the state level.",
    sources: [
      "https://tax.nv.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  NY: {
    state: "NY",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.039,
          min: 0,
          max: 8500
        },
        {
          rate: 0.044,
          min: 8500,
          max: 11700
        },
        {
          rate: 0.0515,
          min: 11700,
          max: 13900
        },
        {
          rate: 0.054,
          min: 13900,
          max: 80650
        },
        {
          rate: 0.059,
          min: 80650,
          max: 215400
        },
        {
          rate: 0.0685,
          min: 215400,
          max: 1077550
        },
        {
          rate: 0.0965,
          min: 1077550,
          max: 5000000
        },
        {
          rate: 0.103,
          min: 5000000,
          max: 25000000
        },
        {
          rate: 0.109,
          min: 25000000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.039,
          min: 0,
          max: 17150
        },
        {
          rate: 0.044,
          min: 17150,
          max: 23600
        },
        {
          rate: 0.0515,
          min: 23600,
          max: 27900
        },
        {
          rate: 0.054,
          min: 27900,
          max: 161550
        },
        {
          rate: 0.059,
          min: 161550,
          max: 323200
        },
        {
          rate: 0.0685,
          min: 323200,
          max: 2155350
        },
        {
          rate: 0.0965,
          min: 2155350,
          max: 5000000
        },
        {
          rate: 0.103,
          min: 5000000,
          max: 25000000
        },
        {
          rate: 0.109,
          min: 25000000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.039,
          min: 0,
          max: 8500
        },
        {
          rate: 0.044,
          min: 8500,
          max: 11700
        },
        {
          rate: 0.0515,
          min: 11700,
          max: 13900
        },
        {
          rate: 0.054,
          min: 13900,
          max: 80650
        },
        {
          rate: 0.059,
          min: 80650,
          max: 215400
        },
        {
          rate: 0.0685,
          min: 215400,
          max: 1077550
        },
        {
          rate: 0.0965,
          min: 1077550,
          max: 5000000
        },
        {
          rate: 0.103,
          min: 5000000,
          max: 25000000
        },
        {
          rate: 0.109,
          min: 25000000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.039,
          min: 0,
          max: 8500
        },
        {
          rate: 0.044,
          min: 8500,
          max: 11700
        },
        {
          rate: 0.0515,
          min: 11700,
          max: 13900
        },
        {
          rate: 0.054,
          min: 13900,
          max: 80650
        },
        {
          rate: 0.059,
          min: 80650,
          max: 215400
        },
        {
          rate: 0.0685,
          min: 215400,
          max: 1077550
        },
        {
          rate: 0.0965,
          min: 1077550,
          max: 5000000
        },
        {
          rate: 0.103,
          min: 5000000,
          max: 25000000
        },
        {
          rate: 0.109,
          min: 25000000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 8000,
      married_joint: 16050,
      married_separate: 8000,
      head_of_household: 11200
    },
    notes: "New York has 9 income tax rates for 2026, from 3.9% to 10.9%. The five lowest rates were cut for 2026. New York City and Yonkers local income taxes and the high-earner benefit recapture are not included.",
    sources: [
      "https://www.tax.ny.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  OH: {
    state: "OH",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0,
          min: 0,
          max: 26050
        },
        {
          rate: 0.0275,
          min: 26050,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0,
          min: 0,
          max: 26050
        },
        {
          rate: 0.0275,
          min: 26050,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0,
          min: 0,
          max: 26050
        },
        {
          rate: 0.0275,
          min: 26050,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0,
          min: 0,
          max: 26050
        },
        {
          rate: 0.0275,
          min: 26050,
          max: null
        }
      ]
    },
    personalExemption: {
      single: 2400,
      married_joint: 4800,
      married_separate: 2400,
      head_of_household: 2400
    },
    notes: "Ohio taxes income above $26,050 (single) at 2.75% for 2026; income below that is taxed at 0%. Exemption phase-downs and city or school-district income taxes are not included.",
    sources: [
      "https://tax.ohio.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  OK: {
    state: "OK",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0,
          min: 0,
          max: 3750
        },
        {
          rate: 0.025,
          min: 3750,
          max: 4900
        },
        {
          rate: 0.035,
          min: 4900,
          max: 7200
        },
        {
          rate: 0.045,
          min: 7200,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0,
          min: 0,
          max: 7500
        },
        {
          rate: 0.025,
          min: 7500,
          max: 9800
        },
        {
          rate: 0.035,
          min: 9800,
          max: 14400
        },
        {
          rate: 0.045,
          min: 14400,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0,
          min: 0,
          max: 3750
        },
        {
          rate: 0.025,
          min: 3750,
          max: 4900
        },
        {
          rate: 0.035,
          min: 4900,
          max: 7200
        },
        {
          rate: 0.045,
          min: 7200,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0,
          min: 0,
          max: 3750
        },
        {
          rate: 0.025,
          min: 3750,
          max: 4900
        },
        {
          rate: 0.035,
          min: 4900,
          max: 7200
        },
        {
          rate: 0.045,
          min: 7200,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 6350,
      married_joint: 12700,
      married_separate: 6350,
      head_of_household: 9350
    },
    personalExemption: {
      single: 1000,
      married_joint: 2000,
      married_separate: 1000,
      head_of_household: 1000
    },
    notes: "Oklahoma has 3 income tax rates for 2026, from 2.5% to 4.5%. Oklahoma consolidated six brackets into three and cut the top rate from 4.75% to 4.5% for 2026. Income below the first threshold is taxed at 0%.",
    sources: [
      "https://oklahoma.gov/tax.html",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  OR: {
    state: "OR",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.0475,
          min: 0,
          max: 4550
        },
        {
          rate: 0.0675,
          min: 4550,
          max: 11400
        },
        {
          rate: 0.0875,
          min: 11400,
          max: 125000
        },
        {
          rate: 0.099,
          min: 125000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.0475,
          min: 0,
          max: 9100
        },
        {
          rate: 0.0675,
          min: 9100,
          max: 22800
        },
        {
          rate: 0.0875,
          min: 22800,
          max: 250000
        },
        {
          rate: 0.099,
          min: 250000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.0475,
          min: 0,
          max: 4550
        },
        {
          rate: 0.0675,
          min: 4550,
          max: 11400
        },
        {
          rate: 0.0875,
          min: 11400,
          max: 125000
        },
        {
          rate: 0.099,
          min: 125000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.0475,
          min: 0,
          max: 4550
        },
        {
          rate: 0.0675,
          min: 4550,
          max: 11400
        },
        {
          rate: 0.0875,
          min: 11400,
          max: 125000
        },
        {
          rate: 0.099,
          min: 125000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 2910,
      married_joint: 5820,
      married_separate: 2910,
      head_of_household: 4700
    },
    notes: "Oregon has 4 income tax rates for 2026, from 4.75% to 9.9%. Personal exemption credits and Portland-area local income taxes are not modeled.",
    sources: [
      "https://www.oregon.gov/dor/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  PA: {
    state: "PA",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.0307,
    notes: "Pennsylvania has a flat 3.07% individual income tax for 2026. No standard deduction or exemption. Local earned income taxes (including Philadelphia and Pittsburgh) are not included.",
    sources: [
      "https://www.revenue.pa.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  RI: {
    state: "RI",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.0375,
          min: 0,
          max: 82050
        },
        {
          rate: 0.0475,
          min: 82050,
          max: 186450
        },
        {
          rate: 0.0599,
          min: 186450,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.0375,
          min: 0,
          max: 82050
        },
        {
          rate: 0.0475,
          min: 82050,
          max: 186450
        },
        {
          rate: 0.0599,
          min: 186450,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.0375,
          min: 0,
          max: 82050
        },
        {
          rate: 0.0475,
          min: 82050,
          max: 186450
        },
        {
          rate: 0.0599,
          min: 186450,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.0375,
          min: 0,
          max: 82050
        },
        {
          rate: 0.0475,
          min: 82050,
          max: 186450
        },
        {
          rate: 0.0599,
          min: 186450,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 11200,
      married_joint: 22400,
      married_separate: 11200,
      head_of_household: 16800
    },
    personalExemption: {
      single: 5250,
      married_joint: 10500,
      married_separate: 5250,
      head_of_household: 5250
    },
    notes: "Rhode Island has 3 income tax rates for 2026, from 3.75% to 5.99%. Deductions and exemptions phase out at high incomes (not modeled).",
    sources: [
      "https://tax.ri.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  SC: {
    state: "SC",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.0199,
          min: 0,
          max: 30000
        },
        {
          rate: 0.0521,
          min: 30000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.0199,
          min: 0,
          max: 30000
        },
        {
          rate: 0.0521,
          min: 30000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.0199,
          min: 0,
          max: 30000
        },
        {
          rate: 0.0521,
          min: 30000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.0199,
          min: 0,
          max: 30000
        },
        {
          rate: 0.0521,
          min: 30000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 15000,
      married_joint: 30000,
      married_separate: 15000,
      head_of_household: 22500
    },
    notes: "South Carolina has 2 income tax rates for 2026, from 1.99% to 5.21%. H. 4216 replaced the old brackets with 1.99% up to $30,000 and 5.21% above, and replaced the federal standard deduction with the SC Income Adjusted Deduction, retroactive to January 1, 2026. The new SC Income Adjusted Deduction ($15,000 single, $22,500 head of household, $30,000 joint) shrinks as income rises; the phase-out is not modeled, so higher-income estimates may be low.",
    sources: [
      "https://dor.sc.gov/news/information-about-h-4216",
      "https://dor.sc.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  SD: {
    state: "SD",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "South Dakota has no state individual income tax, so self-employment income is not taxed at the state level.",
    sources: [
      "https://dor.sd.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  TN: {
    state: "TN",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "Tennessee has no state individual income tax, so self-employment income is not taxed at the state level.",
    sources: [
      "https://www.tn.gov/revenue/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  TX: {
    state: "TX",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "Texas has no state individual income tax, so self-employment income is not taxed at the state level.",
    sources: [
      "https://comptroller.texas.gov/taxes/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  UT: {
    state: "UT",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "flat",
    flatRate: 0.0445,
    notes: "Utah has a flat 4.45% individual income tax for 2026. The rate fell from 4.5% to 4.45%, retroactive to January 1, 2026. Utah gives a taxpayer credit instead of a standard deduction; the credit is not modeled, so estimates may be slightly high for lower incomes.",
    sources: [
      "https://tax.utah.gov/",
      "https://taxnews.ey.com/news/2026-0913-utah-law-lowers-state-income-tax-rate-retroactive-to-january-1-2026",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  VA: {
    state: "VA",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.02,
          min: 0,
          max: 3000
        },
        {
          rate: 0.03,
          min: 3000,
          max: 5000
        },
        {
          rate: 0.05,
          min: 5000,
          max: 17000
        },
        {
          rate: 0.0575,
          min: 17000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.02,
          min: 0,
          max: 3000
        },
        {
          rate: 0.03,
          min: 3000,
          max: 5000
        },
        {
          rate: 0.05,
          min: 5000,
          max: 17000
        },
        {
          rate: 0.0575,
          min: 17000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.02,
          min: 0,
          max: 3000
        },
        {
          rate: 0.03,
          min: 3000,
          max: 5000
        },
        {
          rate: 0.05,
          min: 5000,
          max: 17000
        },
        {
          rate: 0.0575,
          min: 17000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.02,
          min: 0,
          max: 3000
        },
        {
          rate: 0.03,
          min: 3000,
          max: 5000
        },
        {
          rate: 0.05,
          min: 5000,
          max: 17000
        },
        {
          rate: 0.0575,
          min: 17000,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 8750,
      married_joint: 17500,
      married_separate: 8750,
      head_of_household: 8750
    },
    personalExemption: {
      single: 930,
      married_joint: 1860,
      married_separate: 930,
      head_of_household: 930
    },
    notes: "Virginia has 4 income tax rates for 2026, from 2% to 5.75%. The top rate starts at just $17,000, so most self-employed Virginians pay close to 5.75% on most of their income.",
    sources: [
      "https://www.tax.virginia.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  VT: {
    state: "VT",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.0335,
          min: 0,
          max: 49400
        },
        {
          rate: 0.066,
          min: 49400,
          max: 119700
        },
        {
          rate: 0.076,
          min: 119700,
          max: 249700
        },
        {
          rate: 0.0875,
          min: 249700,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.0335,
          min: 0,
          max: 82500
        },
        {
          rate: 0.066,
          min: 82500,
          max: 199450
        },
        {
          rate: 0.076,
          min: 199450,
          max: 304000
        },
        {
          rate: 0.0875,
          min: 304000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.0335,
          min: 0,
          max: 49400
        },
        {
          rate: 0.066,
          min: 49400,
          max: 119700
        },
        {
          rate: 0.076,
          min: 119700,
          max: 249700
        },
        {
          rate: 0.0875,
          min: 249700,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.0335,
          min: 0,
          max: 49400
        },
        {
          rate: 0.066,
          min: 49400,
          max: 119700
        },
        {
          rate: 0.076,
          min: 119700,
          max: 249700
        },
        {
          rate: 0.0875,
          min: 249700,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 7650,
      married_joint: 15300,
      married_separate: 7650,
      head_of_household: 11500
    },
    personalExemption: {
      single: 5300,
      married_joint: 10600,
      married_separate: 5300,
      head_of_household: 5300
    },
    notes: "Vermont has 4 income tax rates for 2026, from 3.35% to 8.75%. High earners pay the greater of regular tax or a minimum based on federal AGI (not modeled).",
    sources: [
      "https://tax.vermont.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  WA: {
    state: "WA",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "Washington has no tax on wages or self-employment income. Its capital gains tax (7%, plus 9% above $1 million) applies to long-term gains over $278,000 in 2026, not to business income.",
    sources: [
      "https://dor.wa.gov/taxes-rates/other-taxes/capital-gains-tax",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  WI: {
    state: "WI",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.035,
          min: 0,
          max: 15110
        },
        {
          rate: 0.044,
          min: 15110,
          max: 51950
        },
        {
          rate: 0.053,
          min: 51950,
          max: 332720
        },
        {
          rate: 0.0765,
          min: 332720,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.035,
          min: 0,
          max: 20150
        },
        {
          rate: 0.044,
          min: 20150,
          max: 69260
        },
        {
          rate: 0.053,
          min: 69260,
          max: 443630
        },
        {
          rate: 0.0765,
          min: 443630,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.035,
          min: 0,
          max: 15110
        },
        {
          rate: 0.044,
          min: 15110,
          max: 51950
        },
        {
          rate: 0.053,
          min: 51950,
          max: 332720
        },
        {
          rate: 0.0765,
          min: 332720,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.035,
          min: 0,
          max: 15110
        },
        {
          rate: 0.044,
          min: 15110,
          max: 51950
        },
        {
          rate: 0.053,
          min: 51950,
          max: 332720
        },
        {
          rate: 0.0765,
          min: 332720,
          max: null
        }
      ]
    },
    standardDeduction: {
      single: 13960,
      married_joint: 25840,
      married_separate: 13960,
      head_of_household: 18000
    },
    personalExemption: {
      single: 700,
      married_joint: 1400,
      married_separate: 700,
      head_of_household: 700
    },
    notes: "Wisconsin has 4 income tax rates for 2026, from 3.5% to 7.65%. A new 4.4% bracket replaced part of the old 5.3% bracket. The standard deduction phases down at higher incomes (not modeled).",
    sources: [
      "https://www.revenue.wi.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  WV: {
    state: "WV",
    taxYear: 2026,
    hasIncomeTax: true,
    taxesWageIncome: true,
    taxesSelfEmploymentIncome: true,
    taxStructure: "graduated",
    brackets: {
      single: [
        {
          rate: 0.0211,
          min: 0,
          max: 10000
        },
        {
          rate: 0.0281,
          min: 10000,
          max: 25000
        },
        {
          rate: 0.0316,
          min: 25000,
          max: 40000
        },
        {
          rate: 0.0422,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.0458,
          min: 60000,
          max: null
        }
      ],
      married_joint: [
        {
          rate: 0.0211,
          min: 0,
          max: 10000
        },
        {
          rate: 0.0281,
          min: 10000,
          max: 25000
        },
        {
          rate: 0.0316,
          min: 25000,
          max: 40000
        },
        {
          rate: 0.0422,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.0458,
          min: 60000,
          max: null
        }
      ],
      married_separate: [
        {
          rate: 0.0211,
          min: 0,
          max: 10000
        },
        {
          rate: 0.0281,
          min: 10000,
          max: 25000
        },
        {
          rate: 0.0316,
          min: 25000,
          max: 40000
        },
        {
          rate: 0.0422,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.0458,
          min: 60000,
          max: null
        }
      ],
      head_of_household: [
        {
          rate: 0.0211,
          min: 0,
          max: 10000
        },
        {
          rate: 0.0281,
          min: 10000,
          max: 25000
        },
        {
          rate: 0.0316,
          min: 25000,
          max: 40000
        },
        {
          rate: 0.0422,
          min: 40000,
          max: 60000
        },
        {
          rate: 0.0458,
          min: 60000,
          max: null
        }
      ]
    },
    personalExemption: {
      single: 2000,
      married_joint: 4000,
      married_separate: 2000,
      head_of_household: 2000
    },
    notes: "West Virginia has 5 income tax rates for 2026, from 2.11% to 4.58%. All five rates were cut by about 5%, retroactive to January 1, 2026 (SB 392). No standard deduction.",
    sources: [
      "https://tax.wv.gov/Individuals/Pages/PersonalIncomeTaxReductionBill.aspx",
      "https://tax.wv.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  },
  WY: {
    state: "WY",
    taxYear: 2026,
    hasIncomeTax: false,
    taxesWageIncome: false,
    taxesSelfEmploymentIncome: false,
    taxStructure: "none",
    notes: "Wyoming has no state individual income tax, so self-employment income is not taxed at the state level.",
    sources: [
      "https://revenue.wyo.gov/",
      "https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
    ],
    lastVerified: "2026-11-01"
  }
};

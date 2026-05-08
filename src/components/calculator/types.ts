import type { FilingStatus, USStateCode } from '../../lib/tax';

export type { FilingStatus, USStateCode };

/**
 * Form state for the calculator.
 * All values stored as strings to handle in-progress input cleanly.
 * Converted to numbers/typed values when fed into the engine.
 */
export type CalculatorFormState = {
  income: string;
  state: USStateCode;
  filingStatus: FilingStatus;
};

/**
 * Default form state. Used when no URL params are present.
 */
export const DEFAULT_FORM_STATE: CalculatorFormState = {
  income: '',
  state: 'CA',
  filingStatus: 'single',
};

/**
 * Props passed from Astro page to the Preact island.
 * Astro pages can pre-fill defaults based on the page context (e.g., state-specific page).
 */
export type TaxCalculatorProps = {
  /** Pre-fill the state input (used on state-specific pages) */
  defaultState?: USStateCode;

  /** Pre-fill the filing status */
  defaultFilingStatus?: FilingStatus;

  /** Pre-fill income (rare - used for example/demo pages) */
  defaultIncome?: number;

  /** Whether to lock the state field (used on state-specific pages where switching makes no sense) */
  lockState?: boolean;
};

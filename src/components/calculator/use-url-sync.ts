import { useEffect, useState } from 'preact/hooks';
import { stateSeeds } from '../../data/states/seeds';
import type { CalculatorFormState, FilingStatus, USStateCode } from './types';

const VALID_STATES = new Set(stateSeeds.map((state) => state.abbreviation));
const VALID_STATUSES: ReadonlySet<FilingStatus> = new Set([
  'single',
  'married_joint',
  'married_separate',
  'head_of_household',
]);

/**
 * Read calculator form state from URL query params.
 * Falls back to defaults for missing or invalid values.
 *
 * URL format: ?income=80000&state=CA&status=single
 */
function readFromURL(initial: CalculatorFormState): CalculatorFormState {
  if (typeof window === 'undefined') return initial;

  const params = new URLSearchParams(window.location.search);
  const result = { ...initial };

  const income = params.get('income');
  if (income !== null && /^\d+(\.\d+)?$/.test(income)) {
    result.income = income;
  }

  const state = params.get('state');
  if (state !== null && VALID_STATES.has(state as USStateCode)) {
    result.state = state as USStateCode;
  }

  const status = params.get('status');
  if (status !== null && VALID_STATUSES.has(status as FilingStatus)) {
    result.filingStatus = status as FilingStatus;
  }

  return result;
}

/**
 * Write current form state to URL (replaces current history entry - no nav).
 * Skips writing default values to keep URLs clean.
 */
function writeToURL(state: CalculatorFormState, defaults: CalculatorFormState): void {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams();

  if (state.income && state.income !== defaults.income) {
    params.set('income', state.income);
  }
  if (state.state !== defaults.state) {
    params.set('state', state.state);
  }
  if (state.filingStatus !== defaults.filingStatus) {
    params.set('status', state.filingStatus);
  }

  const queryString = params.toString();
  const newURL = queryString
    ? `${window.location.pathname}?${queryString}${window.location.hash}`
    : `${window.location.pathname}${window.location.hash}`;

  // Use replaceState so URL changes don't pollute browser history.
  window.history.replaceState({}, '', newURL);
}

/**
 * Hook that synchronizes form state with URL query params.
 *
 * Returns [state, setState] like useState, but with URL persistence.
 * Initial state is read from URL on mount, then writes back on every change.
 */
export function useUrlSyncedFormState(
  initialDefaults: CalculatorFormState,
): [CalculatorFormState, (next: CalculatorFormState) => void] {
  // Initialize from defaults; URL read happens in effect to avoid SSR mismatches.
  const [state, setStateInternal] = useState<CalculatorFormState>(initialDefaults);
  const [hydrated, setHydrated] = useState(false);

  // On mount: read URL and update state.
  useEffect(() => {
    const fromURL = readFromURL(initialDefaults);
    setStateInternal(fromURL);
    setHydrated(true);
  }, []);

  // On state change after hydration: write URL.
  useEffect(() => {
    if (!hydrated) return;
    writeToURL(state, initialDefaults);
  }, [state, hydrated]);

  return [state, setStateInternal];
}

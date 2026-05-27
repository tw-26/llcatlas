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

export const isValidDollarParam = (value: string) => /^\d+(\.\d+)?$/.test(value);
export const isValidStateParam = (value: string): value is USStateCode =>
  VALID_STATES.has(value as USStateCode);

export type UrlSyncedField<T extends Record<string, unknown>, K extends keyof T = keyof T> = {
  field: K;
  param: string;
  isValid?: (value: string) => boolean;
  fromParam?: (value: string) => T[K];
  toParam?: (value: T[K]) => string;
};

const readSyncedStateFromURL = <T extends Record<string, unknown>>(
  initial: T,
  fields: ReadonlyArray<UrlSyncedField<T>>,
): T => {
  if (typeof window === 'undefined') return initial;

  const params = new URLSearchParams(window.location.search);
  const result = { ...initial };

  for (const field of fields) {
    const value = params.get(field.param);
    if (value === null || (field.isValid && !field.isValid(value))) continue;

    result[field.field] = field.fromParam ? field.fromParam(value) : (value as T[keyof T]);
  }

  return result;
};

const writeSyncedStateToURL = <T extends Record<string, unknown>>(
  state: T,
  defaults: T,
  fields: ReadonlyArray<UrlSyncedField<T>>,
): void => {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams();

  for (const field of fields) {
    const value = state[field.field];
    const defaultValue = defaults[field.field];
    const serialized = field.toParam ? field.toParam(value) : String(value);
    const serializedDefault = field.toParam ? field.toParam(defaultValue) : String(defaultValue);

    if (serialized && serialized !== serializedDefault) {
      params.set(field.param, serialized);
    }
  }

  const queryString = params.toString();
  const newURL = queryString
    ? `${window.location.pathname}?${queryString}${window.location.hash}`
    : `${window.location.pathname}${window.location.hash}`;

  // Use replaceState so URL changes don't pollute browser history.
  window.history.replaceState({}, '', newURL);
};

export function useUrlSyncedState<T extends Record<string, unknown>>(
  initialDefaults: T,
  fields: ReadonlyArray<UrlSyncedField<T>>,
): [T, (next: T) => void] {
  const [state, setStateInternal] = useState<T>(initialDefaults);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStateInternal(readSyncedStateFromURL(initialDefaults, fields));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeSyncedStateToURL(state, initialDefaults, fields);
  }, [state, hydrated]);

  return [state, setStateInternal];
}

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

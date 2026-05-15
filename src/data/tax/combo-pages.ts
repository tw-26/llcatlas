import type { USStateCode } from '../states/types';
import { getStateName, getStateSlug } from './calculator-pages';
import { getProfessionPreset, type ProfessionId } from './profession-presets';

/**
 * Combo page: profession + state.
 * URL pattern: /calculators/1099-tax/{profession}/{state-slug}/
 */
export type ComboPage = {
  profession: ProfessionId;
  state: USStateCode;
  /** Whether to publish at build time */
  enabled: boolean;
};

/**
 * Initial 12 combo pages: top 3 professions x top 4 states.
 * Picked for highest TAM and lowest KD in the keyword cluster.
 */
export const COMBO_PAGES: ComboPage[] = [
  { profession: 'doordash-drivers', state: 'CA', enabled: true },
  { profession: 'doordash-drivers', state: 'TX', enabled: true },
  { profession: 'doordash-drivers', state: 'FL', enabled: true },
  { profession: 'doordash-drivers', state: 'NY', enabled: true },

  { profession: 'uber-drivers', state: 'CA', enabled: true },
  { profession: 'uber-drivers', state: 'TX', enabled: true },
  { profession: 'uber-drivers', state: 'FL', enabled: true },
  { profession: 'uber-drivers', state: 'NY', enabled: true },

  { profession: 'onlyfans-creators', state: 'CA', enabled: true },
  { profession: 'onlyfans-creators', state: 'TX', enabled: true },
  { profession: 'onlyfans-creators', state: 'FL', enabled: true },
  { profession: 'onlyfans-creators', state: 'NY', enabled: true },
];

export function getPublishedComboPages(): ComboPage[] {
  return COMBO_PAGES.filter((combo) => combo.enabled);
}

/**
 * Returns the H1 / SEO keyword for a combo page.
 * Pattern: "{Profession} Tax Calculator {State}"
 */
export function getComboKeyword(profession: ProfessionId, state: USStateCode): string {
  const preset = getProfessionPreset(profession);
  const stateName = getStateName(state);

  return `${preset.shortLabel} Tax Calculator ${stateName}`;
}

/**
 * Returns the meta description for a combo page.
 */
export function getComboMetaDescription(profession: ProfessionId, state: USStateCode): string {
  const preset = getProfessionPreset(profession);
  const stateName = getStateName(state);
  const audienceLabel =
    profession === 'doordash-drivers'
      ? `${stateName} Dashers`
      : profession === 'uber-drivers'
        ? `${stateName} Uber drivers`
        : `${stateName} creators`;

  return `Free 2026 ${preset.shortLabel} tax calculator for ${audienceLabel}. Estimate federal, SE, and ${stateName} state tax on 1099 income. Includes quarterly payments.`;
}

/**
 * Returns sibling combo pages for the same profession in different states.
 */
export function getSiblingsByProfession(
  profession: ProfessionId,
  excludeState: USStateCode,
): { state: USStateCode; stateName: string; stateSlug: string }[] {
  return getPublishedComboPages()
    .filter((combo) => combo.profession === profession && combo.state !== excludeState)
    .map((combo) => ({
      state: combo.state,
      stateName: getStateName(combo.state),
      stateSlug: getStateSlug(combo.state),
    }));
}

/**
 * Returns sibling combo pages for the same state with different professions.
 */
export function getSiblingsByState(
  state: USStateCode,
  excludeProfession: ProfessionId,
): { profession: ProfessionId; label: string }[] {
  return getPublishedComboPages()
    .filter((combo) => combo.state === state && combo.profession !== excludeProfession)
    .map((combo) => ({
      profession: combo.profession,
      label: getProfessionPreset(combo.profession).displayName,
    }));
}

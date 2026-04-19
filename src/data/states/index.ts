import { buildDefaultState } from './defaults';
import { michigan } from './michigan';
import { northCarolina } from './north-carolina';
import { ohio } from './ohio';
import { stateSeeds } from './seeds';
import type { StateData, StateOverride } from './types';

export type {
  ComparisonRow,
  CostBreakdownItem,
  FaqItem,
  ResourceLink,
  StateData,
  StateOverride,
  StateSeed,
  Step,
} from './types';

const stateOverrides: Record<string, StateOverride> = {
  michigan,
  'north-carolina': northCarolina,
  ohio,
};

export const states: StateData[] = stateSeeds.map((seed) => {
  const base = buildDefaultState(seed);
  const override = stateOverrides[seed.slug];

  if (!override) {
    return base;
  }

  return {
    ...base,
    ...override,
    proscons: override.proscons ?? base.proscons,
  };
});

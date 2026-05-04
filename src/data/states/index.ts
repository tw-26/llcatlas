import { buildDefaultState } from './defaults';
import { indiana } from './indiana';
import { maryland } from './maryland';
import { michigan } from './michigan';
import { northCarolina } from './north-carolina';
import { ohio } from './ohio';
import { pennsylvania } from './pennsylvania';
import { stateSeeds } from './seeds';
import { tennessee } from './tennessee';
import type { StateData, StateOverride } from './types';
import { virginia } from './virginia';
import { wyoming } from './wyoming';

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
  indiana,
  maryland,
  michigan,
  'north-carolina': northCarolina,
  ohio,
  pennsylvania,
  tennessee,
  virginia,
  wyoming,
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

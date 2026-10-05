import { california } from './california';
import { buildDefaultState } from './defaults';
import { delaware } from './delaware';
import { georgia } from './georgia';
import { indiana } from './indiana';
import { maryland } from './maryland';
import { michigan } from './michigan';
import { montana } from './montana';
import { northCarolina } from './north-carolina';
import { ohio } from './ohio';
import { pennsylvania } from './pennsylvania';
import { stateSeeds } from './seeds';
import { tennessee } from './tennessee';
import { texas } from './texas';
import type { StateData, StateOverride } from './types';
import { utah } from './utah';
import { virginia } from './virginia';
import { washington } from './washington';
import { wyoming } from './wyoming';

export type {
  ComparisonRow,
  CostBreakdownItem,
  FaqItem,
  GuideSection,
  GuideSectionFact,
  ResourceLink,
  StateData,
  StateOverride,
  StateSeed,
  Step,
  USStateCode,
} from './types';

const stateOverrides: Record<string, StateOverride> = {
  california,
  delaware,
  georgia,
  indiana,
  maryland,
  michigan,
  montana,
  'north-carolina': northCarolina,
  ohio,
  pennsylvania,
  tennessee,
  texas,
  utah,
  virginia,
  washington,
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

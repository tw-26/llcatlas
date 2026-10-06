import { arizona } from './arizona';
import { california } from './california';
import { buildDefaultState } from './defaults';
import { delaware } from './delaware';
import { georgia } from './georgia';
import { illinois } from './illinois';
import { indiana } from './indiana';
import { maryland } from './maryland';
import { michigan } from './michigan';
import { montana } from './montana';
import { nevada } from './nevada';
import { northCarolina } from './north-carolina';
import { ohio } from './ohio';
import { oklahoma } from './oklahoma';
import { oregon } from './oregon';
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
  CostScheduleItem,
  StateCostPage,
  FaqItem,
  GuideSection,
  GuideSectionFact,
  ResourceLink,
  StateData,
  StateOverride,
  StateSeed,
  StateTrap,
  Step,
  USStateCode,
} from './types';

const stateOverrides: Record<string, StateOverride> = {
  arizona,
  california,
  delaware,
  georgia,
  illinois,
  indiana,
  maryland,
  michigan,
  montana,
  nevada,
  'north-carolina': northCarolina,
  ohio,
  oklahoma,
  oregon,
  pennsylvania,
  tennessee,
  texas,
  utah,
  virginia,
  washington,
  wyoming,
};

export const getStateGuidePath = (slug: string) => `/llc/${slug}/`;
export const getStateCostPath = (slug: string) => `/llc/${slug}/cost/`;

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

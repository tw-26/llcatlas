import { comparisons } from '../../data/comparisons';
import { states } from '../../data/states';
import {
  getPublishedStatePages,
  getStateName,
  getStateSlug,
} from '../../data/tax/calculator-pages';
import {
  getComboKeyword,
  getComboMetaDescription,
  getPublishedComboPages,
} from '../../data/tax/combo-pages';
import { getProfessionPreset } from '../../data/tax/profession-presets';
import { getPublishedProfessionPages } from '../../data/tax/profession-pages';

const GUIDE_YEAR = 2026;

export type OgImageEntry = {
  slug: string;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
};

const normalizePath = (path: string) => {
  if (path === '/') {
    return '/';
  }

  return `/${path.replace(/^\/|\/$/g, '')}/`;
};

const pathToOgSlug = (path: string) => {
  const normalizedPath = normalizePath(path);

  if (normalizedPath === '/') {
    return 'home';
  }

  return normalizedPath.replace(/^\/|\/$/g, '');
};

const cleanTitle = (title: string) =>
  title
    .replace(/\s+[|—-]\s+LLCAtlas$/u, '')
    .replace(/\s+\|\s+Free SE Tax Estimator(?: for .+)?$/u, '')
    .trim();

const createEntry = ({
  path,
  title,
  description,
  eyebrow,
}: Omit<OgImageEntry, 'slug'>): OgImageEntry => ({
  slug: pathToOgSlug(path),
  path: normalizePath(path),
  title: cleanTitle(title),
  description,
  eyebrow,
});

const staticEntries: OgImageEntry[] = [
  createEntry({
    path: '/',
    title: 'LLCAtlas — Free LLC Formation Guides for Every State (2026)',
    description:
      'Free LLC formation guides by state, with real filing costs, plain-English steps, honest service comparisons, and no hidden-fee advice.',
    eyebrow: 'LLC formation guides',
  }),
  createEntry({
    path: '/best-llc-services/',
    title: 'Best LLC Formation Services (2026) — Compared and Ranked | LLCAtlas',
    description:
      'Best LLC formation services compared for 2026: real year-one cost, registered agent value, upsells, privacy, and our safest pick.',
    eyebrow: 'Service comparison',
  }),
  createEntry({
    path: '/best-state/',
    title: 'Best State to Form an LLC (2026) | LLCAtlas',
    description:
      'The best state to form an LLC is usually your home state. See when Wyoming, Delaware, or Nevada actually make sense before you file.',
    eyebrow: 'Formation strategy',
  }),
  createEntry({
    path: '/llc-vs-s-corp/',
    title: 'LLC vs S-Corp: Which Tax Setup Makes Sense? | LLCAtlas',
    description:
      'Plain-English LLC vs S-corp comparison for solo founders: what changes, what stays the same, and when the S-corp election is worth discussing.',
    eyebrow: 'Entity comparison',
  }),
  createEntry({
    path: '/privacy/',
    title: 'Privacy Policy | LLCAtlas',
    description:
      'How LLCAtlas handles privacy, affiliate links, and site data. Short version: we use privacy-friendly aggregate analytics, not personal tracking.',
    eyebrow: 'Site policy',
  }),
  createEntry({
    path: '/s-corp/election-calculator/',
    title: 'S-Corp Tax Savings Calculator 2026 | LLCAtlas',
    description:
      'Free S-corp election calculator for LLC owners and freelancers. Estimate SE tax savings, payroll costs, accounting costs, and whether S-corp treatment is worth it.',
    eyebrow: 'S-corp calculator',
  }),
  createEntry({
    path: '/s-corp/reasonable-compensation/',
    title: 'S-Corp Reasonable Compensation Guide | LLCAtlas',
    description:
      'Plain-English guide to S-corp reasonable compensation: what it means, why it matters, and how solo founders should think about salary assumptions.',
    eyebrow: 'S-corp guide',
  }),
  createEntry({
    path: '/self-employment-tax/calculator/',
    title: 'Self-Employment Tax Calculator 2026 | Free 1099 Tax Estimator',
    description:
      'Free self-employment tax calculator for freelancers, contractors, and gig workers. Estimate federal, state, and SE tax owed for 2026. Updated with latest IRS rules.',
    eyebrow: 'Tax calculator',
  }),
  createEntry({
    path: '/404/',
    title: 'Page Not Found | LLCAtlas',
    description:
      "This LLCAtlas page doesn't exist. Find the homepage, compare LLC services, or choose your state guide.",
    eyebrow: 'LLCAtlas',
  }),
];

const stateGuideEntries: OgImageEntry[] = states
  .filter((state) => state.contentStatus === 'ready')
  .map((state) =>
    createEntry({
      path: `/llc/${state.slug}/`,
      title:
        state.seoTitle ??
        `How to Start an LLC in ${state.name} (${GUIDE_YEAR}) — Fees, Steps, Timeline | LLCAtlas`,
      description:
        state.seoDescription ??
        `How to start an LLC in ${state.name} in ${GUIDE_YEAR}: filing fees, steps, timeline, annual reports, and when a service is worth it.`,
      eyebrow: `${state.name} LLC guide`,
    }),
  );

const comparisonEntries: OgImageEntry[] = comparisons.map((comparison) =>
  createEntry({
    path: `/${comparison.slug}/`,
    title: comparison.meta.title,
    description: comparison.meta.description,
    eyebrow: 'Service comparison',
  }),
);

const taxStateEntries: OgImageEntry[] = getPublishedStatePages().map((page) => {
  const stateName = getStateName(page.state);

  return createEntry({
    path: `/self-employment-tax/${getStateSlug(page.state)}/`,
    title: `${page.targetKeyword} 2026 | Free SE Tax Estimator`,
    description: page.metaDescription,
    eyebrow: `${stateName} tax calculator`,
  });
});

const professionEntries: OgImageEntry[] = getPublishedProfessionPages().map((page) => {
  const preset = getProfessionPreset(page.profession);

  return createEntry({
    path: `/self-employment-tax/1099/${page.profession}/`,
    title: `${page.targetKeyword} 2026 | Free SE Tax Estimator for ${preset.displayName}s`,
    description: page.metaDescription,
    eyebrow: `${preset.shortLabel} tax calculator`,
  });
});

const comboEntries: OgImageEntry[] = getPublishedComboPages().map((combo) => {
  const stateName = getStateName(combo.state);
  const stateSlug = getStateSlug(combo.state);
  const preset = getProfessionPreset(combo.profession);
  const keyword = getComboKeyword(combo.profession, combo.state);

  return createEntry({
    path: `/self-employment-tax/1099/${combo.profession}/${stateSlug}/`,
    title: `${keyword} 2026 | Free SE Tax Estimator`,
    description: getComboMetaDescription(combo.profession, combo.state),
    eyebrow: `${preset.shortLabel} in ${stateName}`,
  });
});

export const ogImageEntries: OgImageEntry[] = [
  ...staticEntries,
  ...stateGuideEntries,
  ...comparisonEntries,
  ...taxStateEntries,
  ...professionEntries,
  ...comboEntries,
];

export const ogImageEntryBySlug = new Map(
  ogImageEntries.map((entry) => [entry.slug, entry]),
);

export const getOgImagePath = (pathname: string) => `/og/${pathToOgSlug(pathname)}.png`;


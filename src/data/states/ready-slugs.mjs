/**
 * Canonical list of state slugs whose page content is fully written and approved
 * for indexing. Anything not in this list still renders at /llc/{slug}/ but is
 * marked noindex and excluded from the sitemap.
 *
 * Add a slug here the moment a state moves to `contentStatus: 'ready'` in its
 * override file. Keep in sync with the override files in src/data/states/.
 */
export const READY_STATE_SLUGS = [
  'indiana',
  'michigan',
  'north-carolina',
  'ohio',
  'virginia',
  'wyoming',
];

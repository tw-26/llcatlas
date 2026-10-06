/**
 * Canonical list of state slugs whose page content is fully written and approved
 * for indexing. Anything not in this list still renders at /llc/{slug}/ but is
 * marked noindex and excluded from the sitemap.
 *
 * Add a slug here the moment a state moves to `contentStatus: 'ready'` in its
 * override file. Keep in sync with the override files in src/data/states/.
 */
export const READY_STATE_SLUGS = [
  'arizona',
  'california',
  'delaware',
  'georgia',
  'illinois',
  'indiana',
  'maryland',
  'michigan',
  'montana',
  'nevada',
  'north-carolina',
  'ohio',
  'oklahoma',
  'oregon',
  'pennsylvania',
  'tennessee',
  'texas',
  'utah',
  'virginia',
  'washington',
  'wyoming',
];

/**
 * Ready states whose override has a `registeredAgentPage`, published at
 * /llc/{slug}/registered-agent/. Keep in sync with the override files.
 */
export const REGISTERED_AGENT_PAGE_SLUGS = [
  'california',
  'delaware',
  'georgia',
  'montana',
  'nevada',
  'oregon',
  'texas',
  'virginia',
  'washington',
  'wyoming',
];

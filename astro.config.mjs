// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import { READY_STATE_SLUGS, REGISTERED_AGENT_PAGE_SLUGS } from './src/data/states/ready-slugs.mjs';

import preact from '@astrojs/preact';

const SITE_URL = 'https://llcatlas.com';
const readyStateUrls = new Set([
  ...READY_STATE_SLUGS.flatMap((slug) => [`${SITE_URL}/llc/${slug}/`, `${SITE_URL}/llc/${slug}/cost/`]),
  ...REGISTERED_AGENT_PAGE_SLUGS.map((slug) => `${SITE_URL}/llc/${slug}/registered-agent/`),
]);

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    filter: (page) => {
      if (page.startsWith(`${SITE_URL}/calculators/`)) {
        return false;
      }

      if (page.startsWith(`${SITE_URL}/llc/`)) {
        return readyStateUrls.has(page);
      }
      return true;
    },
  }), preact()],
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
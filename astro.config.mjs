// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import { READY_STATE_SLUGS } from './src/data/states/ready-slugs.mjs';

const SITE_URL = 'https://llcatlas.com';
const readyStateUrls = new Set(
  READY_STATE_SLUGS.map((slug) => `${SITE_URL}/llc/${slug}`),
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.startsWith(`${SITE_URL}/llc/`)) {
          return readyStateUrls.has(page);
        }
        return true;
      },
    }),
  ],
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  }
});
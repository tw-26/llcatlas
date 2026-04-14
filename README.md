# LLCAtlas

Minimal Astro starter for an SEO-first affiliate site in the LLC formation space.

## Tech Stack

- `Astro` for static, content-first page generation
- `Tailwind CSS v4` for layout and typography
- Static hosting friendly output for GitHub Pages or similar platforms
- No CMS, no blog engine, no auth, no database, no dark mode

## Current Scope

V1 intentionally starts with one simple homepage shell so the project can be committed and extended
without extra app complexity.

Included right now:

- responsive header
- main content area
- sticky desktop CTA rail that collapses naturally on mobile
- footer with affiliate disclosure
- placeholder homepage content for the first LLCAtlas messaging

Planned next:

- `/best-llc-services`
- `/llc/wyoming`
- `/llc/new-york`
- `/llc/new-mexico`
- `/llc/california`
- `/llc/colorado`

## Project Structure

```text
/
├── public/
├── src/
│   ├── layouts/
│   │   └── site-layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Commands

- `npm install` installs dependencies
- `npm run dev` starts the local Astro dev server
- `npm run build` builds the production site into `dist/`
- `npm run preview` previews the production build locally

## Notes

- Styling uses a clean light theme with system-first fonts and generous spacing.
- The layout is intentionally simple so future state pages can reuse the same shell.
- Analytics, affiliate click tracking, and content modeling should be added after the initial pages
  exist.

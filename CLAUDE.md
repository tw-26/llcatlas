# LLCAtlas — Agent Context

Read this before doing any work. Current priorities live in `BACKLOG.md`. Design and visual rules live in `.cursorrules`.

## What this is

LLCAtlas is an affiliate site that helps first-time U.S. solo founders and 1099 workers form an LLC without overpaying. It pairs opinionated state-by-state LLC guides with tax calculators (self-employment tax, S-corp savings, reasonable compensation) and a small set of formation service comparisons.

Revenue comes from formation affiliates. Traffic comes from Google only (for now).

## What the data says (GSC, Jun 22 – Sep 21, 2026)

- 36.4K impressions, 13 clicks, average position ~57, improving from ~65 to ~45 over the period with no new work shipped.
- About 90% of impressions come from the 10 indexed LLC state guides. Washington alone has 8.6K. These pages are the main acquisition surface **and** the money pages.
- "How to start an LLC in {state}" queries rank 25–70. "{state} LLC cost" / "filing fee" / "annual fee" queries rank 75–90, meaning the guides don't satisfy cost intent yet.
- State self-employment tax and gig-driver pages get little volume but rank better (positions 10–20). Keep them; don't prioritize them.
- The S-corp calculators rank ~80. Not a priority until the site has links.
- Zero backlinks and zero off-Google distribution so far. Authority is the main bottleneck.

When new GSC exports arrive, re-check these claims before relying on them.

## Audience

- First-time U.S. LLC founders, freelancers, side-hustlers, gig workers.
- Anxious, unfamiliar with filings, reading carefully, trying not to overpay.
- Not for: accountants, lawyers, VCs, multi-employee businesses, non-U.S. residents (except a scoped page if ever built).
- Litmus test for any page: *"Would this naturally help a self-employed person forming or running a small business?"* If no, don't publish.

## Voice

- Plainspoken, protective, decisive. Tell the reader what to do and why.
- Numbers over principles: "At $45K net, an S-corp saves ~$2,800 and costs ~$2,500 to run. Wait until $60K+."
- One recommended winner per use case. Never "any of these would work."
- Anti-upsell: warn against add-ons the reader doesn't need, even when affiliates pay for them.
- No listicles, no "it depends" without a decision, no "consult a professional" hedges when real numbers are possible, no AI-fluff intros, no "best-in-class"/"amazing".
- Disclaimers go in the footer, not the body.

## Monetization

- Formation affiliates: Northwest Registered Agent, Bizee, ZenBusiness.
- LegalZoom stays a plain non-affiliate link until approved: no `data-affiliate`, no `rel="sponsored"`.
- Payroll/bookkeeping affiliates (Gusto, Collective, etc.) may be added to S-corp pages once approved.
- Never: display ads, popups, autoplay, sticky bottom bars, sponsored badges.
- One primary CTA per page. Affiliate disclosure in the footer of every page.

### Affiliate link convention (required on every monetized outbound link)

- `data-affiliate`: partner slug (`northwest`, `bizee`, `zenbusiness`)
- `data-page-type`: `home`, `calc`, `state`, `comparison`, `hub`
- `data-position`: `hero`, `inline`, `sidebar`, `footer`, `result`, etc.
- `rel="sponsored noopener"`
- `target="_blank"` only for real outbound partner links

## Tech stack (locked)

- Astro + TypeScript, Preact islands for calculators, Tailwind CSS v4.
- Static output only, hosted on GitHub Pages. No backend, database, auth, CMS, admin panel, or server functions.
- Cloudflare Web Analytics (its path counts are sampled; treat them as directional, use GSC for search data).
- Tests: Vitest (`npm test`). Build: `npm run build`.
- Don't build infrastructure unless it saves publishing time within 30 days. The operator is an engineer; the main risk is building tooling instead of publishing pages.

## Site structure

- `/llc/[state]/` — LLC state guides. Data lives in `src/data/states/{state}.ts`, registered in `src/data/states/index.ts`. A state page is only built when its override has `contentStatus: 'ready'`, and only listed in the sitemap when its slug is in `src/data/states/ready-slugs.mjs`. `npm test` fails if those two disagree or if a ready guide is incomplete (`src/data/states/states.test.ts`).
- The sitemap filter in `astro.config.mjs` drops every `/llc/*` URL that isn't a ready state guide. Update it when adding pages like `/llc/[state]/cost/`.
- To add a state guide, use the `new-state-guide` skill (`.claude/skills/new-state-guide/SKILL.md`).
- `GUIDE_YEAR` in `src/data/site.ts` drives the year in guide, comparison, and hub titles. Never hard-code the year in those titles.
- `/self-employment-tax/calculator/`, `/self-employment-tax/[state]/`, `/self-employment-tax/1099/[profession]/`, `/self-employment-tax/1099/[profession]/[state]/` — tax calculator pages. Data in `src/data/tax/`.
- `/s-corp/election-calculator/`, `/s-corp/reasonable-compensation/` — S-corp calculators.
- `/best-llc-services/`, `/[service-a]-vs-[service-b]/` — comparison (money) pages. Data in `src/data/comparisons.ts`, `src/data/llc-services.ts`.
- `/llc-vs-s-corp/`, `/llc-vs-sole-proprietorship/`, `/best-state/` — decision pages.
- `/calculators/*` — legacy routes. They are noindex meta-refresh redirects to the hub routes. Don't link to them or add new ones.
- New calculators live inside their topic hub, never under `/calculators/` or `/tools/`.

## Page rules

- Every page must end with a decision and one downstream next step (comparison page or affiliate CTA).
- Every new page links to ~5 related existing pages and gets linked from ~5.
- Templated (pSEO) pages must carry genuinely different data or a different decision per variant, not just swapped nouns. If a variant has no unique data, don't publish it.
- State facts (filing fee, annual report fee and due date, franchise tax, publication requirements, processing time) must be verified against the official state website before a guide is marked ready. Keep the official links in the state's `officialLinks`.
- Titles should match how people search (e.g. "How to Start an LLC in Washington (2026): $200 Fee, Steps & Timeline"), not clever phrasing.
- Tax-year labels on calculators and guides must be current.

## Calculator rules

- Page order: hero with tax-year label → inputs + result (two columns on desktop, stacked on mobile) → primary number → recommendation → math breakdown → assumptions → one CTA → related tools → FAQ with schema.
- Islands use `data-calculator-root` and `data-calculator-name`. Results use `data-calculator-result` and `data-result-tier` when a tier exists. Result CTAs use `data-calculator-result-cta`, `data-page-type="calc"`, `data-position="result"`.
- Invalid input fails closed: show the empty/error state, no misleading recommendation, reject invalid query params via the shared URL-sync helper.
- Analytics: `calculator_interaction` events with actions `start`, `result_view`, `result_cta_click`. Don't track keystrokes.
- Tax math changes need tests.

## How to work with the operator

- Point them at the highest-leverage unchecked item in `BACKLOG.md`, and push back on work that isn't on it.
- Push back on new hubs, new infrastructure, or topics outside formation/self-employment tax/S-corp.
- Prefer improving pages that already get impressions over creating new surface area, unless the backlog says otherwise.
- When suggesting a page, give: target query and its GSC impressions/position if known, the URL, which pages it links to/from, and which affiliate closes it.

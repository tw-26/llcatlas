---
name: new-state-guide
description: Research, write, and register a verified LLCAtlas LLC state guide (src/data/states/{slug}.ts) from official state sources, then run the pre-publish check. Use when the user asks to add, write, build, or publish a state guide, names a state from a BACKLOG.md batch, or asks to refresh or re-verify an existing state guide.
---

# New State Guide

Produce one publish-ready LLC state guide with every fee and deadline traced to an official source. Quality bar and data shape: `src/data/states/washington.ts`. Types: `src/data/states/types.ts`. Voice and page rules: `CLAUDE.md`.

The input is a state name. If the user says "refresh", run the Refresh mode at the bottom instead.

## 1. Check the starting point

- Confirm the state isn't already in `src/data/states/index.ts` and `src/data/states/ready-slugs.mjs`. If it is, switch to Refresh mode.
- Get the slug and code from `src/data/states/seeds.ts`.
- If `gsc-export/` exists, search the latest `Queries.csv` for the state name. Write down any queries that should shape the title, FAQ, or sections.

## 2. Research: official sources only

Use web search and fetch. Facts must come from the state's own sites: the Secretary of State or business filing agency, its fee schedule, the annual report page, the Department of Revenue, and state statutes. Formation-service and blog pages may only be used to find out what to verify, never as the source.

Build this fact sheet before writing any copy. Record the value, the official URL, and whether you actually read it on that page:

| Fact | Notes |
|---|---|
| Filing agency name and URL | Exact division name |
| Formation document name | Articles of Organization / Certificate of Formation / etc. Use the state's exact term |
| Filing fee | Online vs mail if they differ; online processing fees |
| Standard processing time | Only if the state publishes it; otherwise say it doesn't |
| Expedited options and fees | Every tier the state lists |
| Name reservation fee | |
| Registered agent term and rules | "registered agent" vs "statutory agent" vs "resident agent" |
| Annual/biennial report | Fee, due date, late fee, consequence of missing it |
| Initial report | If the state has one |
| Franchise, privilege, excise, or gross receipts tax | Minimums matter most |
| State individual income tax | Current tax year rate, from the Department of Revenue |
| Publication requirement | Yes/no, cost range if yes |
| State business license | Whether a general state license exists, or it's local only |
| Operating agreement | Required by statute or not |
| Other state-specific traps | The thing first-time founders miss in this state |

Rules:
- If an official page can't be fetched or doesn't state the fact, mark it **unverified**. Don't fill the gap from memory or a secondary site.
- Prefer the state's current fee schedule page over PDFs or old FAQs when they conflict, and note the conflict.
- For BOI, use FinCEN's current guidance and phrase it as "recheck before filing", like the existing guides do.

## 3. Write `src/data/states/{slug}.ts`

Export a `StateOverride` named in camelCase (e.g. `newJersey`). Match Washington's depth and structure:

- `contentStatus: 'ready'` and `lastUpdated` set to today's date (YYYY-MM-DD).
- `seoTitle` is a template literal using `GUIDE_YEAR` from `../site`, and includes the state name plus the real fee or the key hook, e.g. `` `How to Start an LLC in Georgia (${GUIDE_YEAR}): $100 Fee + Steps | LLCAtlas` ``. Any dollar amount in the title must appear in the cost data (the test enforces this).
- `seoDescription`: one sentence with the real fee and the state's main trap. Aim for under 160 characters.
- `intro`: filing agency, document name, fee, the ongoing obligations, and the one practical warning for this state.
- `steps`: 6–8 steps in filing order, each with the specific state rules, not generic advice.
- `costBreakdown`: every required and optional state cost, plus two emphasized totals ("bare minimum DIY" and "typical first year with commercial agent").
- `faq`: 10–14 questions phrased the way people search: cost, filing fee, how long, agency, document name, registered agent, being your own agent, operating agreement, annual report, publication, business license, taxes, non-residents, BOI. Add any from the GSC queries noted in step 1.
- `comparisonRows`: this state, 2–3 neighboring states, plus Wyoming and Delaware. Only use numbers you verified or that already appear in another ready guide. Neighbors that are ready guides get linked automatically.
- `taxHighlights` (3–5), `proscons` (4–5 each), `officialLinks` (5+, all https, pointing to the exact pages you used).
- `closing`: when to form in this state vs elsewhere, and the key calendar reminders.
- `inlineCtaDescription` / `sidebarCtaDescription`: why a professional registered agent helps *in this state specifically* (privacy of public records, in-state address rules). Be honest about when it isn't needed.

Voice: plainspoken, decisive, real numbers, no hedging filler, no "consult a professional" where a number is possible. Keep every number consistent across intro, steps, costs, and FAQ.

## 4. Register it

- Import and add it to `stateOverrides` in `src/data/states/index.ts`, keeping alphabetical order.
- Add the slug to `READY_STATE_SLUGS` in `src/data/states/ready-slugs.mjs`, keeping alphabetical order.

Internal links are automatic once the state is ready: homepage selector, `/best-llc-services/`, `/best-state/`, `/llc-vs-sole-proprietorship/`, the related-states list on every guide, and comparison-table rows in other guides.

## 5. Check

- Run `npx vitest run src/data/states`. Fix every failure; don't loosen the test.
- Run `npm run build` and confirm `/llc/{slug}/` is generated.

## 6. Report back

End with:

1. **Fact sheet**: the table from step 2 with values and source URLs.
2. **Needs your eyes**: every unverified or conflicting fact, and anything that changes on a known date (e.g. a new tax rate on January 1).
3. **Before you deploy**: open the 3–5 most important source links and confirm the filing fee, annual report fee and due date, and any franchise tax minimum.
4. **After you deploy**: request indexing for `https://llcatlas.com/llc/{slug}/` in Google Search Console.

Never describe a fact as verified if you didn't read it on an official page in this session.

## Refresh mode

For an existing guide:

1. Re-run step 2 against the facts already in the file.
2. Update only what changed, bump `lastUpdated`, and keep the title's dollar amounts in sync.
3. If a GSC export exists, add FAQ entries or sections for queries the guide gets impressions for but doesn't answer.
4. Run step 5, then report a before/after list of changed facts with sources, plus the "needs your eyes" list.

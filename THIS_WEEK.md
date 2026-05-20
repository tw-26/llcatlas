# THIS WEEK

Week focus: turn the existing site into a measurable funnel before shipping more content.

Last updated: 2026-05-19

Update cadence: update during every Sunday review, then check off items during the week as work ships.

## Success Criteria

- Repo audit captured in `BACKLOG.md`.
- Cloudflare Web Analytics and GSC setup requirements identified.
- Affiliate click data-attribute convention locked.
- Existing funnel gaps listed.
- S-corp calculator implementation path defined.
- No new state guides started.

## Session 1: Audit And Instrumentation Plan

- [x] Audit existing routes, calculators, state guides, comparison pages, affiliates, analytics, and disclosure status.
- [x] Confirm Cloudflare Web Analytics site status.
- [x] Confirm GSC is verified and sitemap has been submitted.
- [x] Park Buttondown/newsletter setup until the site has meaningful traffic.
- [x] Review affiliate links for Northwest, Bizee, ZenBusiness, and LegalZoom.
- [x] Keep LegalZoom as a non-affiliate plain link until approval.

## Session 2: Funnel Fixes And Flagship Prep

- [x] Document affiliate tracking convention:
  - `data-affiliate`
  - `data-page-type`
  - `data-position`
  - `rel="sponsored noopener"`
- [x] Locate all affiliate-link components and align them to the convention.
- [x] Identify calculator pages that lack downstream CTAs.
- [x] Add downstream CTAs to calculator templates.
- [x] Remove or replace links to missing routes, especially `/llc-vs-s-corp/`.
- [ ] Configure Cloudflare-side click capture for `[data-affiliate]` links.
- [x] Create the implementation checklist for the S-corp election savings calculator.

## Sunday Review

- [ ] Check GSC, if verified.
- [ ] Check Cloudflare Web Analytics, if installed.
- [ ] Record any affiliate clicks.
- [ ] Choose next week's two ship tasks.
- [ ] Move unscheduled items into `BACKLOG.md`.

## This Week's Rule

Do not publish new state guides. Fix measurement, tracking, and funnel leaks first.


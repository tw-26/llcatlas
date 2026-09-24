# LLCAtlas Backlog — Oct 2026 to Mar 2027

One goal for these 6 months: turn the LLC state guides into pages that rank on page 1 and earn affiliate commissions during the January–March formation peak.

Work top to bottom inside each month. If something is blocked, skip it and come back.

## What the data says

**GSC (Jun 22 – Sep 21, 2026)**
- 36.4K impressions, 13 clicks, average position 57 (trending from ~65 to ~45).
- The indexed LLC state guides produce ~90% of impressions. Washington leads with 8.6K; Virginia 5.9K, Maryland 4.8K, Tennessee 3.8K.
- Cost queries ("tennessee llc cost", "ohio llc cost") rank 80+. The guides don't answer cost intent well.
- Tax calculator pages: low volume, better positions (10–20). S-corp calculators: position ~80.
- Zero backlinks. $150 in commissions so far.

**Ahrefs (Sep 23, 2026; files in `research/ahrefs-2026-09/`)**
- Ten states have at least one weak site (DR under 40) in the top 10 for "how to start an llc in {state}": California, Utah, Texas, Delaware, Montana, Arizona, Nevada, Illinois, Oregon, Oklahoma. Small single-state sites already rank there (texasregisteredagents.com DR 19, illinoisregisteredagent.net DR 20, oregonregisteredagent.com DR 29).
- Florida and Colorado have big volume but no weak results. Build them last and expect little.
- "{state} llc cost" has KD 0–4 in most states. Dedicated cost pages rank alongside .gov fee pages, including a DR 39 site with an outdated "2025" title. Cost pages are an easy win.
- Small competitors all have a "{state} registered agent" page (the biggest gap, ~11.6K combined volume), then DBA guides (~5.8K).
- Synonym searches ("register / apply for / form / get an LLC in {state}") are 3–15x the volume of the exact "how to start" query.
- The pages that earn links in this niche are "LLC filing fees by state" and "LLC annual fees by state" tables.
- Gig tax: state-level searches for DoorDash/Uber calculators are zero. "1099 tax calculator {state}" has small demand (CA 250, TX 150, FL 150), and the state tax pages already target that phrase.

## Scoreboard

| Checkpoint | Target |
|---|---|
| End of October | 21 state guides indexed. Cost-page pilot live. Average position under 45. |
| End of December | All 50 states + DC indexed. Cost-by-state page live. 100+ clicks/month. First page in the top 10. |
| End of March | 1,000+ clicks/month. 5+ pages in the top 10. 5+ backlinks. $300+/month in commissions. |

**Decision point (last week of March):** if clicks are under 300/month and nothing is in the top 10 after doing the work below, the problem is authority or niche choice, not effort. Stop and rethink before continuing.

## Every week

- [ ] Sunday, 30 minutes: check GSC (pages and queries), Cloudflare, and affiliate dashboards. Pick next week's work.
- [ ] Answer 3 real questions on Reddit (r/smallbusiness, r/llc, r/llc_life, r/tax, r/Entrepreneur). Lead with the actual answer and numbers; link a guide only when it directly answers the question. Reddit threads rank for cost queries, so good answers also get seen from Google.
- [ ] Send 1 pitch on Qwoted or Featured.com.
- [ ] First Sunday of each month: export GSC (Performance, last 3 months, all four metrics) to `gsc-export/YYYY-MM/`.

---

## October — Fix what's ranking, start the best-opportunity states

### Learn from the first commission
- [x] Find which partner paid the $150 and which page it came from. Not traceable from the partner dashboards (checked Sep 23).
- [ ] Check which partners support sub-IDs so future commissions can be traced to a page. Adding page-level sub-IDs is a small code task.

### Titles and search coverage on the 11 live guides
- [x] Rewrite the title and meta description of every live guide to match how people search, with the fee in the title. Example: "How to Start an LLC in Washington (2026): $200 Fee, Steps & Timeline". (Done Sep 23. Request re-indexing in GSC; compare CTR and position after 4 weeks.)
- [x] Make sure each guide naturally covers the synonym searches in headings and FAQ: register, apply for, form, file, get an LLC in {state}. (Done Sep 23: "How do I register an LLC in {state}?" and "How do I apply for an LLC in {state} online?" on every guide.)
- [x] Re-check each guide's fees and deadlines against the official state site (use "Refresh the {state} state guide"). (Done Sep 23. Core fees unchanged. Open questions: Maryland $100 online option, Indiana $95 vs $96, Virginia next-day expedite fee.)

### Make Washington the best page on the site
It's the closest page to page 1 (head terms rank 24–45). Add sections that answer the queries it already gets:
- [ ] Initial report (due within 120 days) and annual report
- [ ] Certificate of formation walkthrough on the Secretary of State site ("sos wa gov llc" ranks 24)
- [ ] Single-member LLC in Washington
- [ ] Washington business license and how it relates to the LLC
- [ ] Anonymous LLC in Washington
- [ ] PLLC (who needs one)
- [ ] Converting a sole proprietorship to an LLC
- [ ] "Is there a free way to form an LLC in Washington?" (straight answer)
- [ ] Then do the same query-gap pass for Virginia and Maryland.

### Cost pages (pilot)
- [ ] Build `/llc/[state]/cost/` for Tennessee, Ohio, and Pennsylvania from the existing state data. Cover: filing fee, annual report fee and due date, franchise or excise tax, registered agent cost, publication requirements, and total cost for year 1 and year 2, with one recommendation. Title pattern: "{State} LLC Cost ({year}): $X to Form, $Y/Year".
- [ ] Update the sitemap filter in `astro.config.mjs` so cost pages are included.
- [ ] Keep a short cost summary on each guide that links to its cost page, so the two don't compete for the same query.

### New state guides, batch 1 (10 states with a weak result in the top 10)
- [x] Georgia (done Sep 23; confirm the flagged fees)
- [ ] California, Utah, Texas, Montana, Arizona, Nevada, Illinois, Oregon, Oklahoma, Delaware
- [ ] Use the `new-state-guide` skill for each. Review the "needs your eyes" list, run `npm test`, push, and request indexing in GSC.
- [ ] Texas, California, and Delaware need the franchise tax front and center (Texas franchise tax report, California $800 minimum tax, Delaware $300 annual tax). That's the state-specific trap for each.

### Affiliates
- [ ] Apply to Gusto and Collective (for S-corp pages later). Approvals take weeks.

---

## November — Next 20 states, roll out cost pages, pilot registered agent pages

- [ ] New state guides, batch 2 (low KD, mid volume): Missouri, New Mexico, Wisconsin, Alabama, Louisiana, Kansas, South Carolina, Arkansas, Idaho, Iowa
- [ ] New state guides, batch 3: Massachusetts, Minnesota, Kentucky, New Jersey, Maine, Mississippi, New York, Nebraska, South Dakota, Vermont
- [ ] Mid-November: check the cost-page pilots in GSC. Unless they failed to get indexed, roll out cost pages to every ready state. KD is near zero, so don't wait for perfect data.
- [ ] Pilot `/llc/[state]/registered-agent/` for Washington, Texas, and California. Answer: do you need one, can you be your own, what it costs, and which service to use. Recommend Northwest where it's genuinely the best pick, and say plainly when someone doesn't need a paid agent. Update the sitemap filter.
- [ ] Update `/best-llc-services/` and the 4 comparison pages with current pricing and links to the new state guides.

---

## December — Finish the 50 states, build the linkable asset, refresh for 2027

- [ ] New state guides, batch 4: Alaska, Hawaii, Rhode Island, New Hampshire, North Dakota, West Virginia, Connecticut, District of Columbia, Florida, Colorado
- [ ] Build `/llc/cost-by-state/`: one table with filing fee, annual fee, annual deadline, and year-1 and year-2 totals for all 50 states + DC, generated from the state data, with a short verdict (cheapest states, most expensive, and why your home state usually still wins). Title it to match what gets linked: "LLC Filing Fees and Annual Fees by State ({year})".
- [ ] Start outreach for it right away (see the target list below). Links take weeks to count, so don't wait for January.
- [ ] Last week of December: bump `GUIDE_YEAR` to 2027, run `npm test`, and re-check fee changes that take effect January 1.
- [ ] Update the self-employment tax and quarterly calculators for 2027 federal numbers before the January 15 estimated payment deadline.

---

## January to March — Peak season: promote and refresh, ship small

- [ ] Pitch `/llc/cost-by-state/` to the outreach targets. Goal: 5+ links by the end of March.
- [ ] Every 2 weeks: find pages that gained impressions and rewrite titles or add missing sections based on the queries they're getting.
- [ ] Mid-January: check the registered agent pilots. If they're getting impressions, roll out to the top 15 states by volume.
- [ ] If time allows after that: pilot DBA guides (`/llc/[state]/dba/`) for Texas and Illinois, the two states where competitors have them.
- [ ] If Gusto/Collective are approved and the S-corp calculator has impressions, add one payroll CTA to its result state.
- [ ] Last week of March: run the decision point above.

---

## Outreach targets for the cost-by-state page

From Ahrefs: sites that already link to similar LLC cost pages. Work top to bottom and log results below.

1. legalclarity.org (DR 76). Has linked to two LLC cost pages already.
2. venturesmarter.com (DR 64). Business-formation blog that cites cost data.
3. creditdonkey.com (DR 75). Links to state-by-state cost data.
4. legaltemplates.net (DR 70). Links to state cost breakdowns.
5. servicefusion.com (DR 72). SMB software blog with formation-cost resources.
6. hedgethink.com (DR 60), discern.com (DR 50), glarity.app (DR 54). Business blogs with resource roundups.
7. loftlegal.com (DR 15), cpaccounting.io (DR 7), legalflow.blog, noladefender.com (DR 45). Small sites, easiest yeses.
8. businessnewsdaily.com (DR 88). Pitch as an expert contributor, not a link request.
9. gusto.com (DR 86). Only after the Gusto partnership is approved.

Skip formation-service competitors (doola, Swyft Filings, Alliance Virtual Offices). They won't link to a site recommending other services.

| Date | Site | Pitch | Result |
|---|---|---|---|
|  |  |  |  |

---

## Not doing in these 6 months

- More gig-driver × state pages (zero state-level demand) or new profession pages.
- New topic areas (equity comp, investing, etc.), newsletter/email list, premium tier, SaaS, YouTube, social media accounts, new calculators, redesigns, and new infrastructure.

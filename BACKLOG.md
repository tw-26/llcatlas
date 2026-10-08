# LLCAtlas Backlog — Oct 2026 to Mar 2027

One goal for these 6 months: have the pages people buy from (registered agent pages, cost pages, and the LLC state guides) indexed and ranking before the January–March formation peak, and start earning links before January.

Two rules shape the order below:

- **Ship instead of piloting.** New pages on a no-link site take 2–4 months to rank. A page that goes live after November mostly misses the peak, so don't wait on test results when difficulty is near zero.
- **Money pages before coverage.** A page whose reader is about to buy beats one more state guide for a low-volume state.

Work top to bottom inside each month. If something is blocked, skip it and come back.

## What the data says

**GSC (Jun 22 – Sep 21, 2026)**

- 36.4K impressions, 13 clicks, average position 57 (trending from ~65 to ~45).
- The indexed LLC state guides produce ~90% of impressions. Washington leads with 8.6K; Virginia 5.9K, Maryland 4.8K, Tennessee 3.8K.
- Cost queries ("tennessee llc cost", "ohio llc cost") rank 80+. The guides don't answer cost intent well.
- Tax calculator pages: low volume, better positions (10–20). S-corp calculators: position ~80.
- Zero backlinks. $150 in commissions so far.

**Ahrefs, Sep 23 (**`research/ahrefs-2026-09/`**)**

- Ten states have at least one weak site (DR under 40) in the top 10 for "how to start an llc in {state}": California, Utah, Texas, Delaware, Montana, Arizona, Nevada, Illinois, Oregon, Oklahoma.
- "{state} llc cost" has difficulty 0–4 in most states. Dedicated cost pages rank alongside .gov fee pages.
- Synonym searches ("register / apply for / form / get an LLC in {state}") are 3–15x the volume of the exact "how to start" query.
- Gig tax: state-level searches for DoorDash/Uber calculators are zero.

**Ahrefs, Oct 5 (**`research/ahrefs-2026-10/`**)**

- **Registered agent pages are the biggest opening on the site.** 50 of 51 states (all but DC) have a weak result in the top 10 for "{state} registered agent", usually a thin exact-match micro-site at DR 0–20. Most states have difficulty 0–6. The 21 states with ready guides add up to ~29K searches/month on the head term alone (Wyoming 4.1K, Texas 3.5K, Delaware 3.2K, Georgia 2.2K, California 1.9K).
- Only "{state} registered agent", "registered agent {state}", and "{state} registered agent service" have real volume. One page per state covers all three. The "cost", "cheapest", and "be your own" variants are under 20/month.
- Several states without a guide have strong registered agent openings: Colorado 2.0K, New York 1.5K, New Mexico 1.4K, New Jersey 1.1K, Missouri 1.0K, all difficulty 0–6. Florida is 2.8K but harder (difficulty 16, one weak result at DR 38).
- National: "best registered agent service" (600, difficulty 1, a DR 7 site in the top 10) and "bizee review" (200, difficulty 0, a DR 0 site at #1) are winnable. Northwest brand terms (51K) and "registered agent service" (8.7K, difficulty 49) are not.
- Fees-by-state: "llc annual fees by state" (300, difficulty 0), "llc filing fees by state" (300, difficulty 10), "llc cost by state" and "llc fees by state" (200 each). The head terms "llc cost" (2.1K) and "how much does an llc cost" (2.0K) have parent topics that point to fee-by-state pages, but the lowest DR there is 36, so expect them to need links.
- The sites that link to fee tables are mostly SaaS and fintech blogs citing a fee number mid-article. legalclarity.org links to all four of the top fee pages.
- llcatlas.com ranks for 2 keywords in Ahrefs: "llc vs sole prop" (#2, 90/month) and "llc in virginia" (#21, 500/month).



## Scoreboard


| Checkpoint      | Target                                                                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| End of October  | Cost pages live for all 21 ready states. Registered agent pages live for the top 10 ready states. Average position under 45.                                                            |
| End of November | Registered agent pages for all 21 ready states plus `/best-registered-agent-service/`. Fees-by-state page live with 50 states + DC, and the first 10 pitches sent. Batch 2 guides live. |
| End of December | 100+ clicks/month. First page in the top 10. 1+ backlink.                                                                                                                               |
| End of March    | 1,000+ clicks/month. 5+ pages in the top 10, at least 3 of them registered agent pages. 5+ backlinks. $300+/month in commissions.                                                       |


**Decision point (last week of March):** if clicks are under 300/month and nothing is in the top 10 after doing the work below, the problem is authority or niche choice, not effort. Stop and rethink before continuing.

## Every week

- [ ] Sunday, 30 minutes: check GSC (pages and queries), Cloudflare, and affiliate dashboards. Pick next week's work.
- [ ] Answer 3 real questions on Reddit (r/smallbusiness, r/llc, r/llc_life, r/tax, r/Entrepreneur). Lead with the actual answer and numbers; link a guide only when it directly answers the question. Reddit holds a top-3 spot for most registered agent and cost queries, so good answers also get seen from Google.
- [ ] Send 1 pitch on Qwoted or Featured.com.
- [ ] First Sunday of each month: export GSC (Performance, last 3 months, all four metrics) to `gsc-export/YYYY-MM/`.

---



## October — Cost pages everywhere, first registered agent pages



### Affiliate groundwork (do first; it decides how registered agent pages close)

- [x] Find which partner paid the $150 and which page it came from. Not traceable from the partner dashboards (checked Sep 23).
- [x] Confirm what each partner pays (Awin, Oct 5). Northwest: $150 per formation, $100 per registered-agent-only sale, $50 virtual office. ZenBusiness: $75 Starter, $125 Pro, $175 Premium. Bizee: $50 Basic, $125 Standard, $175 Premium, $45 registered agent, $100 virtual address. Bizee and ZenBusiness cookies last 30 days. Registered agent pages close with Northwest's registered agent signup. The first $150 was almost certainly a Northwest formation, since no other partner pays a flat $150.
- [x] Find Northwest's registered agent deep link (Oct 5): `https://www.northwestregisteredagent.com/signup?st={ABBR}` starts a registered agent order with the state filled in. Registered agent pages link there through the same Awin link (`awinmid=66946`, `awinaffid=2866567`, destination in `ued`). Guides and cost pages keep the formation link. Northwest's cookie is 30 days, same as the others.
- [x] Replace the `tidd.ly` short links with full Awin links and tag every affiliate link with the page (`clickref`, e.g. `llc-washington`) and position (`clickref2`, e.g. `sidebar`). (Done Oct 5. After deploying, click one live link and confirm the click shows its click references in Awin's click report.)
- [ ] Apply to Gusto and Collective (for S-corp pages later). Approvals take weeks.



### Already done on the live guides

- [x] Rewrite the title and meta description of every live guide to match how people search, with the fee in the title. (Done Sep 23. Request re-indexing in GSC; compare CTR and position after 4 weeks.)
- [x] Cover the synonym searches in headings and FAQ: register, apply for, form, file, get an LLC in {state}. (Done Sep 23.)
- [x] Re-check each guide's fees and deadlines against the official state site. (Done Sep 23. Maryland, Indiana, and Virginia checkout fees confirmed against official sources.)
- [x] Washington query-gap pass: initial and annual report, certificate of formation walkthrough, single-member LLC, business license, anonymous LLC, PLLC, sole prop conversion, "is there a free way". (Done Sep 25. Guides now support extra `sections` in state data.)
- [x] Same pass for Virginia and Maryland. (Done Sep 25 without a GSC query export. Re-check against the October GSC export, then request re-indexing for all three guides.)
- [x] Batch 1 guides: Georgia (Sep 23); California, Utah, Texas, Delaware, Montana, Arizona, Nevada, Illinois, Oregon, Oklahoma (Oct 5). Delaware's annual tax rose to $400 in 2026, now fixed in every guide's comparison row and on `/best-state/`. Illinois SOS pages were unreachable, so its fees rest on 805 ILCS 180.



### Finish batch 1

- [x] Review the "needs your eyes" items for the 11 batch 1 guides, run `npm test`, push, and request indexing in GSC.
- [x] Put the franchise tax front and center in Texas (franchise tax report), California ($800 minimum tax), and Delaware ($400 annual tax). That's the state-specific trap for each. (Done Oct 5. Guides support an optional `trap` callout under the quick facts, linked to the full section. Several other guides, like Illinois, Utah, Oklahoma, and Georgia, still have long "Annual report" values that print as a wall of text in the quick-facts strip.)



### Cost pages for every ready state (no pilot)

- [x] Build `/llc/[state]/cost/` for all 21 ready states from the existing state data. Cover: filing fee, annual report fee and due date, franchise or excise tax, registered agent cost, publication requirements, and total cost for year 1 and year 2, with one recommendation. Title pattern: "{State} LLC Cost ({year}): $X to Form, $Y/Year". (Done Oct 5 from each guide's `costPage` block; no new fee research. Request indexing for all 21 in GSC after deploying.)
- [x] Update the sitemap filter in `astro.config.mjs` so cost pages are included.
- [x] Keep a short cost summary on each guide that links to its cost page, so the two don't compete for the same query. (The full cost table moved to the cost page. `/best-state/` links every cost page from its state grid.)



### Registered agent pages, first 10

- [x] Build `/llc/[state]/registered-agent/` for the 10 ready states with the most volume: Wyoming (4.1K), Texas (3.5K), Delaware (3.2K), Georgia (2.2K), California (1.9K), Nevada (1.3K), Montana (1.2K), Virginia (1.2K), Oregon (1.1K), Washington (1.1K). (Done Oct 6 from official sources. Data lives in each state's `registeredAgentPage` block; slugs in `REGISTERED_AGENT_PAGE_SLUGS`. Request indexing for all 10 after deploying. Open items resolved Oct 7: Georgia change fee is $20 ($30 with the $10 service charge) and reinstatement is $250 ($260 with it); Oregon reinstatement is $100 under ORS 56.140(2); Northwest is a California 1505 agent registered as NORTHWEST REGISTERED AGENT, INC.)
  - Answer in this order: do you need one (yes, and what happens if it lapses), can you be your own (who qualifies, what it costs you in privacy and being home during business hours), what a paid agent costs, which one to use, and how to change agents (form and state fee).
  - Each page needs state-specific facts verified against the official site, kept in `officialLinks`: the state's term for the role (Ohio "statutory agent", Maryland "resident agent", Virginia's rule that the agent must be a member, manager, Virginia attorney, or registered entity), address rules, the change-of-agent fee, and any commercial agent registry. If a state has nothing specific beyond the basics, it still ships, but the facts box must be real.
  - Recommend Northwest where it's genuinely the best pick, and say plainly when someone can be their own agent for free.
  - Wyoming and Delaware pull out-of-state founders. Write for a US founder forming outside their home state, and keep the "your home state usually still wins" warning with a link to `/best-state/`.
  - Link each page from the guide's registered agent step and from its cost page. Link out to the guide, the cost page, and `/best-llc-services/`.
- [x] Add registered agent facts to the `new-state-guide` skill checklist, so every new guide ships with its registered agent page.
- [x] Update the sitemap filter for `/llc/*/registered-agent/`.



### One quick review page

- [x] Build `/bizee-review/`: current pricing, what's in each tier, which add-ons to skip, who it's right for, and the verdict against Northwest and ZenBusiness. Link it from `/bizee-vs-zenbusiness/`, `/northwest-vs-bizee/`, and `/best-llc-services/`. Target: "bizee review" (200, difficulty 0, a DR 0 site ranks #1). Closes with Bizee. (Done Oct 7 on a reusable review template. Bizee's registered agent renewal rose from $119 to $149, so Bizee figures were corrected on the comparison pages and the Nevada, Delaware, and Washington guides; Northwest now wins the registered-agent-only pick. Checkout research stopped at Bizee's contact form, which needs a real phone number, so later upsell screens and whether the virtual address auto-converts to $29/mo are unconfirmed. Request indexing after deploying.)
- [ ] Future reviews on the same template, once the November items are done: ZenBusiness, Northwest, then Gusto and Collective after their affiliate approvals.

---



## November — All ready states covered, fees table live, outreach starts

- [ ] Registered agent pages for the other 11 ready states: Illinois, North Carolina, Maryland, Michigan, Ohio, Arizona, Indiana, Pennsylvania, Utah, Oklahoma, Tennessee.
- [ ] Build `/best-registered-agent-service/`: one recommended winner, what a registered agent actually does, when you don't need a paid one, price comparison, and a state picker linking to every registered agent page. Target: "best registered agent service" (600, difficulty 1). Closes with Northwest.
- [ ] Build `/llc/cost-by-state/` by mid-November: one table with filing fee, annual fee, annual deadline, and year-1 and year-2 totals for all 50 states + DC, with a short verdict (cheapest states, most expensive, and why your home state usually still wins). Title: "LLC Filing Fees and Annual Fees by State ({year})". Targets "llc annual fees by state", "llc filing fees by state", "llc cost by state", and "llc fees by state" (~1,000/month combined). Link to `/best-state/` for "cheapest state to form an llc".
  - States without a ready guide only need fee data: filing fee, annual fee, due date, and the official fee schedule link, verified against the state site. Store them in the state override with a verified date, and add a test that fails if the table shows an unverified state. Don't write the full guide just to fill the table.
  - Add a "cite this table" line with a direct link and an "Updated {date}" stamp. That's how the linking blogs use these pages.
- [ ] Start outreach the same week the table goes live (list below). Links take weeks to count; the goal is to have some counting by January.
- [ ] New state guides, batch 2, picked by guide volume plus registered agent volume. Each ships with its cost and registered agent pages: Colorado, New Mexico, Missouri, New York, Wisconsin, New Jersey, Alabama, South Carolina, Idaho, Arkansas. New York needs the publication requirement front and center.
- [ ] Update `/best-llc-services/` and the 4 comparison pages with current pricing, and link them to the new registered agent pages and `/bizee-review/`.

---



## December — Check results, refresh for 2027, keep pitching

- [ ] Mid-December: check cost and registered agent pages in GSC. Anything not indexed: request indexing and add internal links. Pages getting impressions on queries the page doesn't answer: add the missing section.
- [ ] Keep pitching the fees table: 3–5 pitches a week until the list is done.
- [ ] Last week of December: bump `GUIDE_YEAR` to 2027, run `npm test`, and re-check fee changes that take effect January 1. Update the fees table the same day; "2027 fees" is the pitch hook for January.
- [ ] January recheck for batch 1 guides:
  - California: 2027 Form 3522 and its instructions apply the $400 first-taxable-year rule.
  - Utah: replace the FY2026 fee schedule source if a new one is posted.
  - Montana: confirm whether the January 1 to April 15 annual report fee waiver continues for 2027 (the guide says it runs through 2027).
  - Michigan: the Annual Statement fee is scheduled to drop from $25 to $15 for statements paid after September 30, 2027. Update the guide, cost page title, and `annualDisplay` once it takes effect.
  - Arizona: test the live checkout to see whether a $50 non-expedited online filing is selectable.
  - Oklahoma: check whether the old paper form now matches the $50 same-day fee.
  - Oregon: change Portland's exemption to $100,000, make sure every Preschool for All reference says 2028, and update the indexed income tax brackets.
  - Income tax rates set or indexed each year: Oklahoma, Oregon, Utah, Montana (2027 brackets), Delaware.
- [ ] Update the self-employment tax and quarterly calculators for 2027 federal numbers before the January 15 estimated payment deadline.
- [ ] If time allows: batch 3 guides with cost and registered agent pages, in this order: Florida (registered agent page is the reason), Maine, Louisiana, Kansas, Iowa, Massachusetts, Nebraska, Minnesota, Kentucky, Mississippi.

---



## January to March — Peak season: promote and refresh, ship small

- [ ] Pitch the 2027 fees table to everyone who didn't answer in November or December, using the "2027 fees" angle. Goal: 5+ links by the end of March.
- [ ] Every 2 weeks: find pages that gained impressions and rewrite titles or add missing sections based on the queries they're getting.
- [ ] If registered agent pages are getting impressions: build registered agent pages (with fee data only, no full guide) for the remaining states with 500+ searches/month, starting with Maine, Idaho, Nebraska, Hawaii, Connecticut, Kentucky. Only if each state has verifiable state-specific facts.
- [ ] If time allows: remaining guides (South Dakota, Vermont, Alaska, Hawaii, Rhode Island, New Hampshire, North Dakota, West Virginia, Connecticut, District of Columbia).
- [ ] If time allows: pilot DBA guides (`/llc/[state]/dba/`) for Texas and Illinois, the two states where competitors have them.
- [ ] If Gusto/Collective are approved and the S-corp calculator has impressions, add one payroll CTA to its result state.
- [ ] Last week of March: run the decision point above.

---



## Outreach targets for the fees-by-state page

From Ahrefs (Sep and Oct): sites that already link to LLC fee or cost pages. Full list with linking pages in `research/ahrefs-2026-10/2b_fees_by_state_linkers.csv`.

**The pitch.** Most of these blogs cite a fee number mid-article and link to whatever table they found. Pitch the specific number on their page, with their outdated figure, and offer the current one. Delaware's annual tax rising from $300 to $400 in 2026 is a ready example. Don't ask for a link to the homepage.

1. legalclarity.org (DR 76). Links to all four of the top fee pages from four different articles. Pitch first.
2. lendio.com (DR 75). Links to two fee pages.
3. SaaS and fintech blogs that cite a fee number, with the article to pitch: propertyware.com (LLC for rental property), joinhomebase.com (how to register a business), bench.co (LLC taxes), logo.com (small business legal requirements), upcounsel.com (Arizona LLC cost), hostaway.com and igms.com (Airbnb LLC), patriotsoftware.com (state startup index), apollo.com (cost of starting a business by state), agilecrm.com, scribe.com, reply.io, luisazhou.com, ryrob.com, autods.com, justcreative.com, thrivemyway.com, wordable.io.
4. From the September list: venturesmarter.com (DR 64), creditdonkey.com (DR 75), legaltemplates.net (DR 70), servicefusion.com (DR 72), hedgethink.com (DR 60), discern.com (DR 50), glarity.app (DR 54).
5. Small sites, easiest yeses: loftlegal.com (DR 15), cpaccounting.io (DR 7), legalflow.blog, noladefender.com (DR 45).
6. businessnewsdaily.com (DR 88). Pitch as an expert contributor, not a link request.
7. gusto.com (DR 86). Only after the Gusto partnership is approved.

Skip formation-service competitors (LegalZoom, ZenBusiness, Bizee, Northwest, doola, Swyft Filings, Tailor Brands, Incfile, Rocket Lawyer, Alliance Virtual Offices), AI wikis (grokipedia.com), and forums with nofollow links.


| Date | Site | Pitch | Result |
| ---- | ---- | ----- | ------ |
|      |      |       |        |


---



## Not doing in these 6 months

- Northwest brand terms ("northwest registered agent", 51K) and "registered agent service" (difficulty 49). Owned by the brand and big sites.
- Chasing "llc cost" and "how much does an llc cost" directly. The fees table may pick them up once it has links.
- "{state} LLC search" and entity search pages. Searchers want the state's own site, and few buy anything.
- More gig-driver × state pages (zero state-level demand) or new profession pages.
- New topic areas (equity comp, investing, etc.), newsletter/email list, premium tier, SaaS, YouTube, social media accounts, new calculators, redesigns, and new infrastructure.


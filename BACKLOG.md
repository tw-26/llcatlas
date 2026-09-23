# LLCAtlas Backlog — Oct 2026 to Mar 2027

One goal for these 6 months: turn the LLC state guides into pages that rank on page 1 and earn affiliate commissions during the January–March formation peak.

Work top to bottom inside each month. If something is blocked, skip it and come back.

## Baseline (GSC, Jun 22 – Sep 21, 2026)

- 36.4K impressions, 13 clicks, average position 57 (trending from ~65 to ~45).
- 10 indexed LLC state guides produce ~90% of impressions. Washington leads with 8.6K; Virginia 5.9K, Maryland 4.8K, Tennessee 3.8K.
- Cost queries ("tennessee llc cost", "ohio llc cost", "pennsylvania llc cost") rank 80+. The guides don't answer cost intent well.
- Tax calculator pages: low volume, better positions (10–20). S-corp calculators: position ~80.
- Zero backlinks. $150 in commissions so far.

## Scoreboard

| Checkpoint | Target |
|---|---|
| End of October | 20 state guides indexed. Average position under 45. |
| End of December | All 50 states + DC indexed. 100+ clicks/month. First page in the top 10. |
| End of March | 1,000+ clicks/month. 5+ pages in the top 10. $300+/month in commissions. |

**Decision point (last week of March):** if clicks are under 300/month and nothing is in the top 10 after doing the work below, the problem is authority or niche choice, not effort. Stop and rethink before continuing.

## Every week

- [ ] Sunday, 30 minutes: check GSC (pages and queries), Cloudflare, and affiliate dashboards. Pick next week's work.
- [ ] Answer 3 real questions on Reddit (r/smallbusiness, r/llc, r/tax, r/freelance, r/Entrepreneur). Lead with the actual answer and numbers; link a guide only when it directly answers the question.
- [ ] Send 1 pitch on Qwoted or Featured.com.
- [ ] First Sunday of each month: export GSC (Performance, last 3 months, all four metrics) to `gsc-export/YYYY-MM/`.

---

## October — Fix what's already ranking, start adding states

### Learn from the first commission
- [ ] Find which partner paid the $150, when the signup happened, and which page it came from (sub-ID or referrer, if the partner shows it).
- [ ] If partners support sub-IDs, note which ones. Adding page-level sub-IDs is a small code task for later.

### Titles and descriptions on the 10 live guides
- [ ] Rewrite the title and meta description of all 10 guides to match how people search, with the fee in the title. Example: "How to Start an LLC in Washington (2026): $200 Fee, Steps & Timeline".
- [ ] Re-check each guide's fees and deadlines against the official state site.

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
- [ ] Build `/llc/[state]/cost/` for Tennessee, Ohio, and Pennsylvania. Cover: filing fee, annual report fee and due date, franchise or excise tax, registered agent cost, publication requirements, and total cost for year 1 and year 2, with one recommendation.
- [ ] Keep a short cost summary on each guide that links to its cost page, so the two don't compete for the same query.
- [ ] Wait 4–6 weeks, then check GSC. If the pilots rank better than the guides did for cost queries, roll out to every indexed state in November/December.

### New state guides, batch 1 (10 states)
Mid-size states first, since that's where the current guides get traction.
- [ ] Georgia, Arizona, Colorado, New Jersey, Massachusetts, Minnesota, Missouri, Wisconsin, South Carolina, Alabama
- [ ] For each: verify facts on the official state site, fill `officialLinks`, set `contentStatus: 'ready'`, add the slug to `ready-slugs.mjs`, link it from `/best-llc-services/` and neighboring guides, submit in GSC.

### Affiliates
- [ ] Apply to Gusto and Collective (for S-corp pages later). Approvals take weeks.

---

## November — Finish the 50-state set

- [ ] New state guides, batch 2: Kentucky, Oregon, Oklahoma, Connecticut, Utah, Nevada, Iowa, Louisiana, Kansas, Arkansas
- [ ] New state guides, batch 3: California, Texas, Florida, New York, Illinois, Delaware, New Mexico, Idaho, Nebraska, Mississippi
- [ ] Same checklist as batch 1 for every state.
- [ ] Check the October cost-page pilot. Roll out cost pages if it worked.
- [ ] Update `/best-llc-services/` and the 4 comparison pages with current pricing and links to the new state guides.

---

## December — Complete, refresh for 2027, build the linkable asset

- [ ] New state guides, batch 4: West Virginia, Hawaii, New Hampshire, Maine, Rhode Island, Montana, South Dakota, North Dakota, Vermont, Alaska, DC
- [ ] Build one page: "What an LLC actually costs in every state (2027)". It's a single table (year 1 cost, year 2 cost, annual deadline) pulled from the state data, with a short verdict. It's the page to pitch for links.
- [ ] Last week of December: switch titles and labels to 2027 on every guide and calculator. Re-check any fee changes that take effect January 1.
- [ ] Update the self-employment tax and quarterly calculators for 2027 federal numbers before the January 15 estimated payment deadline.

---

## January to March — Peak season: promote and refresh, ship small

- [ ] Pitch the 50-state cost page to small-business bloggers, freelancer newsletters, and local news "starting a business in {state}" articles. Target 5+ links by the end of March.
- [ ] Increase Reddit to 5 answers/week during tax season (add r/doordash_drivers, r/uberdrivers for gig tax questions).
- [ ] Every 2 weeks: find pages that gained impressions and rewrite titles or add missing sections based on the queries they're getting.
- [ ] If the gig-driver × state pages (Uber California ranks ~15) show clicks by mid-January, add Uber and DoorDash pages for 5 more big states. Otherwise leave them alone.
- [ ] If Gusto/Collective are approved and the S-corp calculator has impressions, add one payroll CTA to its result state.
- [ ] Last week of March: run the decision point above.

---

## Not doing in these 6 months

New topic areas (equity comp, investing, etc.), newsletter/email list, premium tier, SaaS, YouTube, social media accounts, new calculators, redesigns, and new infrastructure.

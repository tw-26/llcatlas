# LLCAtlas

> **Decision engine for first-time U.S. internet business owners.**

This document is the single source of truth for LLCAtlas. Any AI agent, contributor, or future self should read this before making decisions about the site. If a decision in this document conflicts with an instruction received elsewhere, **this document wins** unless explicitly updated here.

Last updated: 2026-05-19

Update cadence: update rarely, only when strategy, constraints, non-negotiable rules, or source-of-truth contradictions change.

---

## Table of Contents

1. [What This Is](#what-this-is)
2. [Audience](#audience)
3. [Brand & Voice](#brand--voice)
4. [Monetization Model](#monetization-model)
5. [Moat Hierarchy](#moat-hierarchy)
6. [Architecture & Funnel](#architecture--funnel)
7. [Tech Stack](#tech-stack)
8. [Content Templates](#content-templates)
9. [Topical Hubs](#topical-hubs)
10. [SEO Principles](#seo-principles)
11. [The 18-Month Plan](#the-18-month-plan)
12. [Operating Cadence](#operating-cadence)
13. [Non-Negotiable Rules](#non-negotiable-rules)
14. [KPIs](#kpis)
15. [What This Is Not](#what-this-is-not)
16. [Decision Frameworks](#decision-frameworks)
17. [Agent Instructions](#agent-instructions)

---

## What This Is

LLCAtlas is a decision engine for first-time U.S. internet business owners — solo founders, freelancers, and 1099 operators navigating the path from sole proprietor → LLC → S-corp. It combines:

- Opinionated state-by-state LLC formation guides
- Anti-upsell formation service comparisons
- Operator-grade financial calculators (SE tax, S-corp savings, reasonable comp, owner draw, equity comp)
- A deliberate funnel architecture where every calculator routes to the right comparison page and every comparison closes the affiliate loop

LLCAtlas is **not** a SaaS, not a filing service, not a legal/tax advisor, not a directory, not a listicle site.

### Elevator Pitch

> LLCAtlas helps DIY-but-smart founders make formation and tax decisions without calling an accountant. Real math, real numbers, opinionated recommendations, no fake neutrality.

---

## Audience

### Who we serve

- First-time U.S. internet business owners
- Solo operators (freelancers, consultants, indie founders, creators, agency-of-one)
- People at the formation → optimization lifecycle stage
- People who'd rather read a calculator than call an accountant
- Technical comfort: comfortable with the internet, not necessarily with tax law

### Who we do NOT serve

- VCs, accountants, lawyers (different language, different needs)
- Enterprise / multi-employee businesses
- E-commerce-specific operators (different vertical entirely)
- Non-U.S. residents (except specifically scoped "Best LLC for non-US residents" pages)
- People who want hand-holding through filing

### The wedge filter

If a user would default to "I should just call my CPA," they are not our user. Our user wants to:
1. Understand the tradeoffs
2. See the actual math for their situation
3. Be told what to do (and why)
4. Make the decision themselves

---

## Brand & Voice

### Positioning

**Anti-NerdWallet.** NerdWallet has authority but is sterile, SEO-engineered, hedged, list-driven, sponsorship-laden. We are the opposite:

| NerdWallet | LLCAtlas |
|---|---|
| "Here are 5 options to consider" | "Use X. Here's why." |
| "Consult a tax professional" | "At $80K SE income, here's the math." |
| 47 ads per page | One clear CTA |
| Listicles | Decisions |
| Fake neutrality | Honest tradeoffs |

### Voice attributes

- **Founder-first**: written for the operator, not the professional
- **Tradeoff-honest**: explicitly state when something is bad, when it's marginal, when it's great
- **Decisive**: every page must answer *"what should I do?"*
- **Practical**: numbers > principles
- **Operator tone**: no fluff, no hedging, no "it depends" without follow-through
- **Anti-upsell**: warn against unnecessary services, even when affiliates pay us for them

### Forbidden patterns

- Listicles ("Top 10 X for Y")
- "It depends" without a decision tree
- Generic disclaimers in body content (footer only)
- Multiple equal recommendations ("any of these would work")
- AI-generated fluff intros ("In today's competitive landscape…")
- Sponsored badges, ad units in main content
- Popups, autoplay, sticky bottom bars (except disclosure)
- Calling things "amazing," "best-in-class," "industry-leading"

### Voice exemplar

> "S-Corp election at $45K of self-employment income is probably a bad deal once you count payroll costs, state franchise fees, and the extra accounting overhead. You'd save ~$2,800 on SE tax and spend ~$2,500 getting there. Wait until you're consistently at $60K+ net."

That is the bar. Real numbers, real call, no hedging.

---

## Monetization Model

### Revenue stack (in priority order)

1. **Formation affiliates** — primary revenue
   - Northwest Registered Agent (~$50-150/signup)
   - Bizee (~$30-50/signup)
   - ZenBusiness (~$50-100/signup)
   - LegalZoom (only when contextually appropriate; high payout, low alignment)

2. **Operations affiliates** — phase 2
   - Gusto (~$100-200/signup, payroll)
   - QuickBooks (~$50-100/signup, accounting)
   - Bench (~$100-200/signup, bookkeeping)
   - Collective (~$200+/signup, S-corp specific)

3. **Equity comp affiliates** — phase 3
   - Carta, Pulley, Secfi, Harness Wealth (~$150-300/signup)

4. **Premium tier** — phase 3+
   - $9/mo on flagship calculator(s) — batch mode, export, no caps
   - Only on tools that have proven they convert

5. **Newsletter sponsorship** — phase 4
   - $500-2K per slot once list >2K
   - Aligned sponsors only (small business tools)

6. **NEVER**: display ads (AdSense, etc.) — kills the anti-NerdWallet positioning

### Conversion philosophy

- One CTA per page, not three
- Affiliate disclosure on every page (footer)
- Recommend ONE winner per use case, never "any of these"
- Be willing to recommend the cheapest option even if it pays less
- The calc → comparison → affiliate funnel is sacred; every page must fit in it

---

## Moat Hierarchy

In order of importance:

1. **Calculator logic & UX** — treat calculators like products, not pages
2. **Internal linking architecture** — the directed graph IS the moat
3. **Comparison pages** — money pages, where decisions close
4. **Funnel orchestration** — calc → comparison → affiliate, deliberately built
5. **Topical authority** — clusters with real depth, not random pages
6. **State guides** — acquisition surface, not the moat

**Content volume is not the moat.** Page count is a vanity metric. The moat is the graph + the quality + the voice.

---

## Architecture & Funnel

### The funnel

```
SEO entry point (calculator OR state guide OR comparison)
    ↓
Decision page (calculator outputs a number; guide ends with recommendation)
    ↓
Comparison page (closes the decision)
    ↓
Affiliate click
```

Every page must know its downstream conversion target. Pages without a downstream target are orphans and must be fixed or removed.

### Required internal linking

- **Every new page**: links to 5 existing pages, receives links from 5 existing pages
- **Every calculator**: links to relevant comparison page + relevant state guide
- **Every state guide**: links to /best-llc-services + relevant calculators
- **Every comparison**: links to alternatives + relevant calculators

### Hub-and-spoke structure

Every page belongs to exactly **one** topical hub. No cross-hub orphans.

---

## Tech Stack

### Locked decisions

- **Framework**: Astro (current) + TypeScript
- **Hosting**: GitHub Pages (current) — can migrate to Vercel if needed for performance
- **Styling**: Tailwind CSS
- **Rendering**: Static (SSG only)
- **Analytics**: Cloudflare Web Analytics for now (free, privacy-friendly); Plausible is parked as a future upgrade if funnel reporting needs outgrow Cloudflare
- **Email**: Buttondown eventually; parked until the site has meaningful traffic or a lead magnet is ready
- **No backend**: no DB, no auth, no API, no server functions

### Forbidden infrastructure

- CMS (Contentful, Sanity, WordPress, etc.)
- Admin panels
- Microservices
- Queue systems
- User auth
- Dashboards
- A/B testing platforms (use simple page swaps if needed)
- Popups, autoplay, sticky bottom bars, and other intrusive conversion widgets

### Infrastructure rule

> Never build infrastructure unless it saves publishing time within 30 days.

This rule exists because the operator is a senior engineer and the biggest project risk is engineering-rabbit-hole avoidance of content work.

---

## Content Templates

Eight standardized templates. Lock these in week 1. Refactoring 80 pages later is the trap.

1. **Calculator template** — input panel, math output, explanation, CTA, related calcs
2. **State guide template** — fees, steps, timeline, requirements, pros/cons, FAQ, single CTA
3. **Comparison template** — ranked table, winner per use case, deep-dive sections, CTA
4. **FAQ block** — schema-marked, embeddable in any template
5. **CTA block** — primary affiliate button, single offer
6. **Internal-link module** — "related" section, hand-curated per page
7. **Disclaimer module** — footer-only, affiliate disclosure
8. **Lead magnet module** — email capture, one offer per cluster

---

## Topical Hubs

Exactly these hubs. No others without explicit update to this document.

### `/llc`
LLC formation guides, state-by-state.
- `/llc/[state]` — 50 state pages
- `/llc/best-state` — Wyoming/Delaware/Nevada vs home state
- `/llc/anonymous-llc` — privacy-focused formation
- `/llc/operating-agreement` — what it is, do you need one
- `/llc/cost` — full cost breakdown

### `/self-employment-tax`
Freelancer/1099 tax calculation and education.
- `/self-employment-tax/calculator` — main calc
- `/self-employment-tax/quarterly` — quarterly estimator
- `/self-employment-tax/[state]` — 50 state-specific pages
- `/self-employment-tax/[profession]` — DoorDash, Uber, Lyft, Instacart, OnlyFans, freelance, consulting

### `/s-corp`
S-corp election decisions and operations.
- `/s-corp/election-calculator` — flagship
- `/s-corp/reasonable-compensation` — salary estimator
- `/s-corp/owner-draw-vs-salary`
- `/s-corp/[state]` — state-specific S-corp considerations

### `/llc-vs`
Entity comparison and decision tools.
- `/llc-vs-sole-proprietorship`
- `/llc-vs-s-corp`
- `/llc-vs-c-corp`

### `/best-llc-services`
Service comparison hub (money pages).
- `/best-llc-services` — main comparison
- `/best-llc-services/[use-case]` — freelancers, non-US residents, Amazon sellers, real estate investors, creators, e-commerce, consultants, single-member
- `/[service-a]-vs-[service-b]` — Northwest vs Bizee, ZenBusiness vs LegalZoom, etc.

### `/equity-comp` (phase 3)
Startup employee equity and compensation.
- `/equity-comp/rsu-tax-calculator`
- `/equity-comp/iso-amt-calculator`
- `/equity-comp/83b-election`
- `/equity-comp/exercise-timing`
- `/equity-comp/qsbs`

### Topical dilution rules

**Banned topics** (would dilute the brand):
- Generic investing / retirement / personal finance
- Crypto
- Mortgages / real estate (except investor LLC formation)
- Insurance
- Career advice
- Generic productivity / business advice

**Litmus test**: *"Would this naturally help a self-employed founder operating a small internet business?"* If no, do not publish.

---

## SEO Principles

### Keyword strategy

- Target KD < 20 primarily
- Volume > 500/mo as baseline (lower OK for high-intent commercial)
- Prefer keywords with weak SERPs (forum posts, old sites, shallow content)
- Avoid keywords dominated by AI Overviews that fully answer the query
- Avoid keywords dominated by DR 80+ mega-brands in top 3

### Compounding surface

The state × profession × calculator grid is the long-term SEO wedge:
- 50 states × 5 calculator types × 5-10 professions = 1,250-2,500 page potential
- But: only build this AFTER parent calc ranks somewhere

### Link building

Starts month 4, not "when traffic plateaus."

- 3-5 outreach links/mo (month 4-6)
- 5-8 outreach links/mo (month 7-10)
- 8-10 outreach links/mo (month 11+)
- HARO/Qwoted: 1×/week minimum
- Organic mentions: Reddit, IndieHackers, HN when calcs are notable

### Page lifecycle

- **0-3 months**: no action, let it index
- **3-6 months**: title/meta optimization based on impressions
- **6-12 months, <10 impressions/mo**: rewrite + strengthen internal links
- **12+ months, <10 impressions/mo**: merge or 301 to stronger sibling
- **Delete**: only if thin content with no merge target (target: <5% of pages)

---

## The 18-Month Plan

### Month 1: Foundation
**Theme**: Measurement + flagship calculator

- Implement Cloudflare Web Analytics + outbound affiliate click tracking
- Verify Google Search Console
- Park email capture until the site has meaningful traffic or a lead magnet is ready
- Lock the affiliate click data-attribute convention
- Audit affiliate disclosure on every existing page
- Ship S-corp election savings calculator (flagship and calculator template)
- Pause new state guide expansion; polish and internally link the current 10 guides
- Ship Northwest vs Bizee comparison page
- Submit all to GSC
- Lock 8 templates

**Exit criteria**: site is measurable, the S-corp calculator is live, and every priority page has a downstream conversion target.

### Month 2: Calculator Sprint
**Theme**: Differentiate via calcs before scaling guides

- Ship 3 more priority calcs: LLC vs sole prop tax, reasonable compensation, quarterly tax estimator expansion
- Continue polishing and internally linking current state guides; no new state-guide expansion unless Month 1 tracking is clean
- 2 more comparison pages: ZenBusiness vs LegalZoom, Bizee vs ZenBusiness
- Internal linking pass

**Exit criteria**: 4 calculators live, all linking into the affiliate funnel.

### Month 3: Email + Lead Magnets
**Theme**: Start owning the audience

- Launch email capture with 2 lead magnets: Quarterly tax checklist, LLC launch checklist
- Embed capture on top 5 traffic pages
- 2 more comparison pages: ZenBusiness vs LegalZoom, Bizee vs Northwest
- 4-5 more state guides
- First "Best LLC for X" page: freelancers

**Exit criteria**: First email signup. First affiliate click tracked.

### Month 4: Link Building Begins
**Theme**: Stop being SEO-passive

- 5 outreach links/mo target (HARO, founder communities, Reddit-organic)
- Ship "Best LLC for X" series: non-US residents, Amazon sellers, real estate investors
- 4 more state guides (cumulative ~18)
- 1 new calc: self-employment tax by state (template for 50-page expansion)

**Exit criteria**: First affiliate conversion. First backlink from outreach.

### Month 5: Parameterized Expansion
**Theme**: The compounding surface

- Launch state × calc grid: 50 states × quarterly tax = 50 pages from 1 template
- Continue 2-3 state guides/week (cumulative ~25)
- 2 more "Best LLC for X": creators, e-commerce
- Sunday GSC review: identify top 5 pages, double down

**Exit criteria**: First page in top 10. $200-500 MRR.

### Month 6: First Inflection Check
**Theme**: Audit and double down

- GSC analysis: top 20% pages get rewrites + more affiliates + premium content
- Bottom 20%: rewrite titles/metas
- Complete remaining state guides (50/50)
- Ship 50-state self-employment tax pages
- 5 outreach links/mo continues

**Exit criteria**: $500-1K MRR. Clear winner pages identified.

### Month 7-8: Comparison Expansion
**Theme**: Money pages

- 4 more comparisons: Cheapest registered agent, Best Wyoming LLC service, Best anonymous LLC, LegalZoom alternatives
- Add Gusto/QuickBooks/Bench affiliates to relevant calcs
- Email list: weekly newsletter starts
- Calc UX polish on top 5 — products, not pages

**Exit criteria**: $1-1.5K MRR. 500+ email subscribers.

### Month 9-10: Equity Comp Wedge
**Theme**: High-ticket vertical added

- Build `/equity-comp` hub
- Ship 5 calcs: RSU withholding, ISO/AMT, 83(b), exercise timing, QSBS
- Equity affiliates: Carta, Pulley, Secfi, Harness Wealth
- Stay tightly scoped to startup employee comp
- Comparison: best equity management software

**Exit criteria**: $2-3K MRR. First equity comp affiliate conversion.

### Month 11-12: Authority Push
**Theme**: Compound what's working

- Aggressive link building: 8-10/mo
- HARO/Qwoted daily
- Guest posts on 2-3 founder publications
- State × calc expansion (S-corp savings by state, reasonable comp by state)
- A/B test affiliate placement on top pages
- First premium tier test on flagship calc

**Exit criteria**: $3-4K MRR. Premium converts at >1% of calc traffic.

### Month 13-14: Funnel Optimization
**Theme**: Revenue per visitor, not traffic

- Audit calc → comparison → affiliate funnel; fix leaks
- Second lead magnet per cluster
- Newsletter sponsored slots
- Kill/merge pages with 12mo + <10 impressions/mo
- 2 cornerstone pages per hub (3-5K words, expert-quoted)

**Exit criteria**: $4-5K MRR. Newsletter sponsorship secured.

### Month 15-16: Scale What Wins
**Theme**: Defensive consolidation

- Top 10 pages get the "product treatment": save calc, share results, PDF export
- Schema markup audit
- Internal linking audit (5-in/5-out rule)
- "Best LLC for X" expansion to 10+ variants

**Exit criteria**: $5-7K MRR sustained 60 days.

### Month 17-18: Decision Point
**Theme**: Evaluate Rule #6

Three possible paths based on data:
- **$3K+ sustained 90 days** → Maintain mode (1 hr/week), plan project #2
- **$1.5-3K, growing** → Push hard another 6 months, no new project
- **$1-1.5K, flat** → Diagnose. Likely link building gap or wrong sub-niche. Adjust.

Annual content refresh on top 20 pages. Evaluate SaaS spin-off from flagship calc.

**Exit criteria**: $4-8K MRR realistic. Clear yes/no on Rule #6 (project #2).

### Cumulative milestones

| Month | Pages | MRR | Email | Backlinks |
|---|---|---|---|---|
| 3 | ~25 | $0-100 | 50 | 5 |
| 6 | ~80 | $500-1K | 300 | 30 |
| 9 | ~120 | $1.5-2K | 700 | 70 |
| 12 | ~180 | $3-4K | 1,500 | 130 |
| 15 | ~220 | $4-5K | 2,500 | 200 |
| 18 | ~250 | $4-8K | 4,000 | 280 |

---

## Operating Cadence

### Daily (when shipping)
- ~1 hour of focused work
- 15 min: planning + research
- 30 min: building (Cursor/Claude-assisted)
- 15 min: deploy, GSC submit, internal link update

### Weekly
- **Target**: 2 ship-days per week (Mon/Wed or similar)
- 1 new page minimum, 2 preferred

### Sunday review (30 min, non-negotiable)
1. GSC: which pages got impressions? Clicks?
2. Cloudflare Web Analytics: which pages got affiliate clicks?
3. Plan next week's 2 pages
4. Update `THIS_WEEK.md`

### Monthly
- Last Sunday: full audit
- Top 20% pages → invest more
- Bottom 20% pages → rewrite titles/metas (no deletion before 12 months)
- Adjust keyword priorities

---

## Non-Negotiable Rules

These rules override all other instructions. Do not break them without an explicit update to this document.

1. **One vertical, one domain, one repo.** Compound, don't scatter.
2. **No new project until LLCAtlas prints $3K MRR sustained 90 days.** (Rule #6)
3. **Static stack only.** No backend, DB, auth, dashboard, CMS.
4. **Never build infrastructure that doesn't save publishing time within 30 days.**
5. **8 standardized templates, locked in month 1.** No new templates without justification.
6. **Affiliate disclosure on every page** (footer).
7. **One CTA per page.** Not three.
8. **Recommend ONE winner per use case.** Never "any of these would work."
9. **Topical dilution = death.** Litmus test before every page.
10. **No display ads ever** (AdSense, Ezoic, etc.). Kills positioning.
11. **No listicles.** Every page must answer "what should I do?"
12. **Every new page**: 5 internal links out, 5 in.
13. **Sunday review, 30 min, non-negotiable.**
14. **Revenue per 1K visitors is the KPI**, not raw traffic.
15. **Quality > volume.** 50 polished pages beat 500 sloppy ones.
16. **2 pages/week cadence, not 10.** Sustainability wins.
17. **No premature optimization.** Don't A/B test before traffic exists.
18. **Ship the hardest page first.** Don't avoid the flagship.
19. **Don't start Phase N until Phase N-1 has at least one ranking win.**
20. **No AI-generated fluff.** If you wouldn't read it, don't publish it.

---

## KPIs

### Primary
- **Revenue per 1,000 visitors** (the KPI)

### Secondary
- Affiliate click-through rate per page
- Email signup rate per page
- GSC: pages with impressions > 100/mo
- GSC: pages in top 10 positions

### Vanity (track but don't optimize for)
- Raw traffic
- Page count
- Total impressions
- Domain rating

### NOT KPIs (do not track or care about)
- Social followers
- Time on page
- Bounce rate
- Pageviews per session

---

## What This Is Not

To prevent scope drift, here is what LLCAtlas explicitly is NOT:

- ❌ Not a SaaS (no auth, no DB, no recurring product before phase 3)
- ❌ Not a filing service (we never touch government paperwork)
- ❌ Not a legal advisor (no legal advice claims)
- ❌ Not a tax advisor (no tax advice claims; we provide calculation tools and education)
- ❌ Not a content site (we are a decision engine; pages must end with decisions)
- ❌ Not a listicle site (no "Top 10" anything)
- ❌ Not a directory (no exhaustive lists; only opinionated recommendations)
- ❌ Not a media company in voice (but media-company in structure: publishing systems, editorial consistency)
- ❌ Not for VCs / accountants / enterprises
- ❌ Not for non-US residents (except scoped pages)
- ❌ Not a generic finance site (no investing, retirement, mortgages, insurance, crypto)

---

## Decision Frameworks

When in doubt, use these.

### "Should I publish this page?"

1. Does it pass the litmus test? *"Would this naturally help a self-employed founder operating a small internet business?"*
2. Does it belong to exactly one topical hub?
3. Does it answer "what should I do?" — not just provide info?
4. Does it have a downstream conversion target?
5. Can I write it with real numbers, not generic advice?

If any answer is no, do not publish.

### "Should I build this feature/infrastructure?"

1. Does it save publishing time within 30 days?
2. Is it static-stack compatible (no backend)?
3. Will it be used on every page (or near-every)?

If any answer is no, do not build.

### "Should I add this affiliate?"

1. Does it serve the user (anti-upsell test)?
2. Does it fit a hub (formation, ops, equity)?
3. Does payout justify integration time?
4. Will I recommend it as a *winner*, not as an "also option"?

If any answer is no, do not add.

### "Should I keep building, or pivot?"

Check the cumulative milestones table. If you're hitting 70% of the MRR target, keep building. If you're at <50% by month 9, diagnose:
- Is it traffic? → SEO/keyword problem
- Is it conversion? → page/funnel problem
- Is it volume? → ship more
- Is it positioning? → re-read this document

Pivoting before month 9 is almost always premature.

### "Should I start a second project?"

No. Not until Rule #6 is met ($3K MRR sustained 90 days). Re-read non-negotiable rule #2.

---

## Agent Instructions

If you are an AI agent (Claude, Cursor, etc.) reading this document to assist with LLCAtlas:

### Always

- Read this document fully before making suggestions
- Treat this document as the source of truth
- Push back when the operator suggests violating a non-negotiable rule
- Suggest the hardest/highest-leverage work, not the easiest
- Default to "static stack" for any technical question
- Use the voice attributes when generating content
- Check the litmus test before suggesting new content

### Never

- Suggest infrastructure that violates the 30-day rule
- Generate listicles or "Top 10" content
- Generate AI-fluff intros
- Suggest adding display ads
- Suggest starting a second project before Rule #6 is met
- Suggest adding topics outside the topical hubs (see Topical Dilution)
- Suggest adding three CTAs when one would do
- Generate "consult a professional" hedges when real numbers are possible

### When suggesting a page

Format suggestions as:
- Target keyword + KD + volume (from research)
- Which hub it belongs to
- Which 5 pages it should link to
- Which downstream comparison page it routes to
- Which affiliate(s) close the loop
- Estimated build time

### When the operator is confused or off-track

- Reference this document by section name
- Quote the specific non-negotiable rule being violated
- Suggest re-reading the "What This Is Not" section
- Refocus on revenue per 1K visitors, not raw traffic

### When asked "should I do X?"

Run the appropriate decision framework. Be willing to say "no, that violates rule N."

---

## Document Maintenance

This document is updated rarely. When it is updated:

- Add a changelog entry at the bottom
- Update any conflicting sections
- The document should never have contradictions
- If new information emerges that contradicts this doc, the doc is updated first, then action follows

### Changelog

- **v1.3** — Buttondown/newsletter parked until traffic or a lead magnet justifies it; LegalZoom remains a plain non-affiliate link until approval.
- **v1.2** — Analytics updated from Plausible to Cloudflare Web Analytics for the free Month 1 baseline; Plausible parked as a future upgrade.
- **v1.1** — Month 1 updated to calculators-first execution: measurement, affiliate tracking, S-corp flagship, current-guide polish, and no new state-guide expansion until the funnel is measurable.
- **v1.0** — Initial lock. 18-month plan, full positioning, all non-negotiables.

---

## Final Note

The biggest risk to LLCAtlas is not technical, competitive, or algorithmic. It is the operator (a senior engineer) building infrastructure instead of content, optimizing instead of shipping, or starting project #2 too early.

Discipline > ideation. Consistency > cleverness.
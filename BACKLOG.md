# BACKLOG

This backlog is intentionally lightweight. It exists to prevent good ideas from hijacking this week's shipping plan.

Last updated: 2026-05-19

Update cadence: add ideas as they appear, prune during Sunday review, and promote only the next shippable work into `THIS_WEEK.md`.

## P0: Must Do Before New Pages Ship

- Confirm Cloudflare Web Analytics remains enabled in Cloudflare; no repo script is required while Cloudflare injects it at the edge.
- Verify Google Search Console for `llcatlas.com`.
- Configure Cloudflare-side click capture for affiliate links using `[data-affiliate]` selectors.
- Keep affiliate-link attributes locked:
  - `data-affiliate`
  - `data-page-type`
  - `data-position`
  - `rel="sponsored noopener"`
- Confirm Northwest, Bizee, and ZenBusiness affiliate links remain live and tracked correctly.
- Keep LegalZoom as a plain outbound link until affiliate approval is available.
- Audit footer affiliate disclosure across every page.
- Re-check downstream calculator CTAs after first traffic lands.

## P0: Flagship

- Build the S-corp election savings calculator.
- Inputs: net self-employment income, state, expected reasonable salary, payroll cost, accounting/bookkeeping cost, and existing LLC status.
- Outputs: estimated SE tax before S-corp, payroll/FICA after S-corp, owner distribution, annual admin cost, net savings, break-even income, and a plain-English recommendation.
- Decision bands: likely bad below break-even, marginal near break-even, likely worth considering above the threshold after admin costs.
- Use the S-corp calculator to lock the calculator template: input panel, math output, explanation, CTA, and related calculators.
- Route calculator users to the right comparison/formation CTA.
- Link the calculator from existing tax calculators, state guides, homepage, and comparison pages.
- Add tests for core S-corp savings math.

## P1: Funnel And Internal Links

- Review all 10 current state guides for the 5-in/5-out internal-linking rule.
- Add relevant calculator links from state guides.
- Add relevant state-guide links from state-aware calculators.
- Add calculator discovery to the homepage or primary navigation.
- Add a reusable "what to do next" module for calculator result pages.
- Sync sitemap/indexing status for Maryland, Pennsylvania, and Tennessee.

## P1: Comparison Pages

- Ship Northwest vs Bizee.
- Ship ZenBusiness vs LegalZoom.
- Ship Bizee vs ZenBusiness.
- Convert comparison anchor sections into standalone pages only where they have clear search and affiliate intent.

## P2: Calculator Expansion

- Build reasonable compensation calculator.
- Build LLC vs sole proprietorship tax calculator.
- Improve quarterly tax estimator flow.
- Expand Lyft and Instacart state-combo calculator coverage after the funnel template is fixed.

## P2: State Guides

- Polish the current 10 state guides.
- Pause new state-guide expansion until tracking and calculator funnel are working.
- Revisit DE, TX, FL, and CA only after the current 10 guides are linked and measurable.

## P3: Later

- Add operations affiliates only after formation funnel measurement is reliable.
- Add premium calculator features only after a flagship calculator proves conversion.
- Add equity-comp hub only after previous phases have ranking wins.

## Parking Lot

- Any infrastructure that does not save publishing time within 30 days.
- Any new hub outside the README topical scope.
- Any broader rebrand before Month 6 data proves LLCAtlas has outgrown the LLC frame.
- Plausible analytics upgrade, if Cloudflare Web Analytics cannot answer funnel questions cleanly.
- Buttondown/newsletter setup until the site has meaningful traffic or a lead magnet is ready.


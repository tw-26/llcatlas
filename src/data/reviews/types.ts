import type { AffiliatePartner } from '../affiliates';

export type ReviewCall = 'buy' | 'skip' | 'depends';

export type ReviewPlan = {
  name: string;
  price: string;
  includes: string[];
  call: ReviewCall;
  note: string;
};

export type ReviewCheckoutItem = {
  offer: string;
  price: string;
  call: ReviewCall;
  note: string;
};

export type ReviewRenewal = {
  item: string;
  cost: string;
  when: string;
  howToAvoid: string;
};

export type ReviewMatchup = {
  heading: string;
  body: string;
  href: string;
  linkLabel: string;
};

export type ReviewLink = {
  href: string;
  label: string;
  description: string;
};

export type ReviewSource = {
  label: string;
  url: string;
};

export type ReviewFaqItem = {
  question: string;
  answer: string;
};

export type ProviderReview = {
  /** URL path segment, e.g. `bizee-review` for `/bizee-review/`. */
  slug: string;
  partner: AffiliatePartner;
  /** Must be a name `getAffiliatePartner` recognizes, or the CTA loses its affiliate attributes. */
  partnerName: string;
  /** Slug of the matching entry in `llc-services.ts`, when the provider is a formation service. */
  serviceSlug?: string;
  lastVerified: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  primaryKeyword: string;
  intro: string;
  verdict: {
    headline: string;
    body: string;
  };
  cta: {
    label: string;
    href: string;
    note: string;
  };
  costSummary: { label: string; value: string; note: string }[];
  plansIntro: string;
  plans: ReviewPlan[];
  checkoutIntro: string;
  checkout: ReviewCheckoutItem[];
  renewalsIntro: string;
  renewals: ReviewRenewal[];
  goodFit: string[];
  poorFit: string[];
  matchups: ReviewMatchup[];
  finalVerdict: string;
  faq: ReviewFaqItem[];
  /** What we could not verify. Shown in the research notes so readers know the limits. */
  gaps: string[];
  sources: ReviewSource[];
  related: ReviewLink[];
};

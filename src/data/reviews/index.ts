import { bizeeReview } from './bizee';
import type { ProviderReview } from './types';

export type { ProviderReview } from './types';

export const reviews: ProviderReview[] = [bizeeReview];

export const getReview = (slug: string): ProviderReview => {
  const review = reviews.find((item) => item.slug === slug);
  if (!review) throw new Error(`Missing review data for ${slug}`);
  return review;
};

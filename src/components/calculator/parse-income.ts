/**
 * Parse a free-text income input into a number.
 * Handles common formats: "80000", "80,000", "$80,000", "80000.50", "".
 * Returns 0 for empty/invalid input.
 */
export function parseIncome(input: string): number {
  if (!input.trim()) return 0;

  // Strip commas, dollar signs, whitespace.
  const cleaned = input.replace(/[$,\s]/g, '');
  const parsed = parseFloat(cleaned);

  if (!Number.isFinite(parsed) || parsed < 0) return 0;
  return parsed;
}

/**
 * Format a number as currency (USD), 0 decimal places by default.
 * Used for displaying calculation results.
 */
export function formatCurrency(amount: number, decimals = 0): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

/**
 * Format a number as a percentage (e.g., 0.273 -> "27.3%").
 */
export function formatPercent(rate: number, decimals = 1): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(rate);
}

/**
 * Assert two numbers are approximately equal within a tolerance.
 * Tax calculations involve floating-point rounding; exact equality is fragile.
 */
export function expectClose(actual: number, expected: number, tolerance = 1.0): void {
  const diff = Math.abs(actual - expected);
  if (diff > tolerance) {
    throw new Error(
      `Expected ${actual} to be within ${tolerance} of ${expected} (diff: ${diff.toFixed(4)})`
    );
  }
}

/**
 * Round to 2 decimal places (cents).
 */
export function roundCents(n: number): number {
  return Math.round(n * 100) / 100;
}

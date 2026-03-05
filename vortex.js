// Vortex Algorithm - Memory Safe O(1) Summation Library
// compute(start, end) => { sum: string, middle: string|null, elements: string } or { error: string }

const Vortex = {
  compute(start, end) {
    try {
      if (start === undefined || end === undefined) {
        throw new TypeError('start and end are required');
      }

      // Reject fractional numbers early if user passed Number types
      if (typeof start === 'number' || typeof end === 'number') {
        if (!Number.isInteger(start) || !Number.isInteger(end)) {
          throw new TypeError('start and end must be integers (no fractional values)');
        }
      }

      const a = BigInt(start);
      const b = BigInt(end);

      if (a > b) {
        throw new RangeError('start must be <= end');
      }

      const n = b - a + 1n;            // number of elements
      const p = n / 2n;                // integer division
      const pairSum = a + b;

      let total = p * pairSum;
      let middle = null;

      if (n % 2n !== 0n) {
        const m = a + p;
        middle = m.toString();
        total += m;
      }

      return {
        sum: total.toString(),
        middle,
        elements: n.toString()
      };
    } catch (e) {
      return { error: e && e.message ? e.message : String(e) };
    }
  }
};

// Node / Browser UMD-friendly export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Vortex;
}
if (typeof window !== 'undefined') {
  window.Vortex = Vortex;
}
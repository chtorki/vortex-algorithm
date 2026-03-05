const Vortex = require('../vortex.js');

describe('Vortex.compute', () => {
  test('sum of 1..100 is 5050', () => {
    expect(Vortex.compute(1, 100)).toEqual({ sum: '5050', middle: null, elements: '100' });
  });

  test('sum of 1..101 is 5151 and middle is 51', () => {
    expect(Vortex.compute(1, 101)).toEqual({ sum: '5151', middle: '51', elements: '101' });
  });

  test('works with big integers passed as strings', () => {
    const res = Vortex.compute('9007199254740992', '9007199254740995');
    const a = BigInt('9007199254740992');
    const b = BigInt('9007199254740995');
    const n = b - a + 1n;
    const expected = (n / 2n) * (a + b);
    expect(res.sum).toBe(expected.toString());
    expect(res.elements).toBe(n.toString());
  });

  test('missing parameters returns error', () => {
    expect(Vortex.compute()).toHaveProperty('error');
  });

  test('start > end returns error', () => {
    expect(Vortex.compute(5, 1)).toHaveProperty('error');
  });

  test('fractional inputs return error', () => {
    expect(Vortex.compute(1.5, 5)).toHaveProperty('error');
  });
});

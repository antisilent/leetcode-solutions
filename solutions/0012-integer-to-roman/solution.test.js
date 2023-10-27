import solution from './solution';

describe('12. Integer to Roman', () => {
  const cases = [
    [3, 'III'],
    [58, 'LVIII'],
    [1994, 'MCMXCIV'],
  ];

  for (const [i, [input, expected]] of cases.entries()) {
    it(`Case ${i + 1}`, () => {
      expect(solution(input)).toBe(expected);
    });
  }
});

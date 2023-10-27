import solution from './solution';

describe('17. Letter Combinations of a Phone Number', () => {
  const cases = [
    ['23', ['ad','ae','af','bd','be','bf','cd','ce','cf']],
    ['', []],
    ['2', ['a','b','c']],
  ];

  for (const [i, [input, expected]] of cases.entries()) {
    it(`Case ${i + 1}`, () => {
      expect(solution(input)).toStrictEqual(expected);
    });
  }
});

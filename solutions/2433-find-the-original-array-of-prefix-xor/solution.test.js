import solution from './solution';

describe('17. Letter Combinations of a Phone Number', () => {
  [
    [[5,2,0,3,1], [5,7,2,3,2]],
    [[13], [13]],
  ].forEach(([input, expected], i) => {
    it(`Case ${i + 1}`, () => {
      expect(solution(input)).toStrictEqual(expected);
    });
  });
});

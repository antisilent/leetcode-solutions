import solution from './solution';

describe('401. Binary Watch', () => {
  Object.entries({
    0: ['0:00'],
    1: ['0:01','0:02','0:04','0:08','0:16','0:32','1:00','2:00','4:00','8:00'],
    8: ['7:31','7:47','7:55','7:59','11:31','11:47','11:55','11:59'],
    // 9: [],
  }).forEach(([input, expected], i) => {
    it(`Case ${i} (input = ${input})`, () => {
      expect(solution(parseInt(input))).toStrictEqual(expected);
    });
  })
});

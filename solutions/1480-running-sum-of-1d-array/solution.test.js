import solution from './solution';

describe('1480. Running Sum of 1d Array', () => {
  it('Case 1', () => {
    const input = [1,2,3,4];
    const expected = [1,3,6,10];

    expect(solution(input)).toStrictEqual(expected);
  });

  it('Case 2', () => {
    const input = [1,1,1,1,1];
    const expected = [1,2,3,4,5]

    expect(solution(input)).toStrictEqual(expected);
  });

  it('Case 3', () => {
    const input = [3,1,2,10,1];
    const expected = [3,4,6,16,17];

    expect(solution(input)).toStrictEqual(expected);
  });
});

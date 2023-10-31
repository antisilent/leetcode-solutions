import solution from './solution';

describe('2705. Compact Object', () => {
  it('Case 1', () => {
    const input = [null, 0, false, 1];
    const expected = [1];

    expect(solution(input)).toStrictEqual(expected);
  });

  it('Case 2', () => {
    const input = {"a": null, "b": [false, 1]};
    const expected = {"b": [1]}

    expect(solution(input)).toStrictEqual(expected);
  });

  it('Case 3', () => {
    const input = [null, 0, 5, [0], [false, 16]];
    const expected = [5,[],[16]];

    expect(solution(input)).toStrictEqual(expected);
  });
});

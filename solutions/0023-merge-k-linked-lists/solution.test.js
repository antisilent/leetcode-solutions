import solution from './solution';

import CreateLinkedList from '../common/functions/CreateLinkedList';

describe('23. Merge k Sorted Lists', () => {
  it('Case 1', () => {
    const vals = [[1,4,5],[1,3,4],[2,6]].map(CreateLinkedList);
    const expected = [1,1,2,3,4,4,5,6];

    expect(solution(vals)).toStrictEqual(CreateLinkedList(expected));
  });

  it('Case 2', () => {
    const vals = [].map(CreateLinkedList);
    expect(solution(vals)).toStrictEqual(CreateLinkedList());
  });

  it('Case 3', () => {
    const vals = [[]].map(CreateLinkedList);
    expect(solution(vals)).toStrictEqual(CreateLinkedList([]));
  });
});

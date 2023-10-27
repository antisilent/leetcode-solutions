import ListNode from '../common/classes/ListNode';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  if (lists === undefined || lists.length === 0) return null;

  return mergeLists(lists, 0, lists.length - 1);
}

const mergeLists = function(lists, start, end) {
  if (start === end) {
    return lists[start];
  }

  const mid = start + parseInt((end - start) / 2);
  const left = mergeLists(lists, start, mid);
  const right = mergeLists(lists, mid + 1, end);

  return merge(left, right);
}

const merge = function(left, right) {
  const head = new ListNode(-1);
  let temp = head;

  while (left !== null && right !== null) {
    if (left.val < right.val) {
      temp.next = left;
      left = left.next;
    } else {
      temp.next = right;
      right = right.next;
    }

    temp = temp.next;
  }

  while (left !== null) {
    temp.next = left;
    left = left.next;
    temp = temp.next;
  }

  while (right !== null) {
    temp.next = right;
    right = right.next;
    temp = temp.next;
  }

  return head.next;
}

export default mergeKLists;

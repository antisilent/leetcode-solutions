import ListNode from '../classes/ListNode';

/**
 * Create a singly-linked list from an array of values.
 *
 * @param {any[]} vals
 * @return {ListNode}
 */
export default function CreateLinkedList(vals) {
  const head = new ListNode();
  let current = head;

  if (vals?.length) {
    for (const val of vals) {
      current.next = new ListNode(val);
      current = current.next;
    };
  }

  return head.next;
}

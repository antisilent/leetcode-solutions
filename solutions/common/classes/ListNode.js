/** Class representing a linked list node. */
export default class ListNode {
  /**
   * Create a new list node.
   *
   * @param {any} val - This node's value (default: 0).
   * @param {ListNode} next - The next node (default: null)
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    const node = new ListNode();
    node.value = element;

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;

    return current.value;
  }
}

module.exports = Queue;

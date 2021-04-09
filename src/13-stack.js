/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elem = [];
  }

  push(element) {
    this.elem.push(element);
  }

  pop() {
    const i = this.elem.length - 1;
    const element = +this.elem.splice(i).join('');

    return element;
  }

  peek() {
    const i = this.elem.length - 1;
    const element = +this.elem.slice(i).join('');

    return element;
  }
}

module.exports = Stack;

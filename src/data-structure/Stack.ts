/**
 * @description Stack is a linear data structure that follows the Last In First Out (LIFO) principle.
 * It has two main operations: push and pop. The push operation adds an element to the top of the stack,
 * and the pop operation removes the most recent element from the top of the stack.
 *
 * In this chapter, I try to implement the stack with minimum built-in functions (e.g. pop(), push())
 * Array based stack implementation.
 */

export class Stack<T extends string | number> {
  /**
   * @description Stack storage
   */
  private item: Array<T>;

  /**
   * @description The number of elements in the stack
   * @type {number}
   * @public
   * */
  count: number;

  /**
   * @description Newest value
   * @type {T}
   * @public
   * */
  last: T;

  /**
   * @description Latest value
   * @type {T}
   * @public
   * */
  first: T;

  constructor() {
    this.item = [];
    this.count = 0;
    this.last = this.item[this.count - 1];
    this.first = this.item[0];
  }

  /**
   * @description Check if the stack is empty
   * @returns {boolean} - Return true if the stack is empty, otherwise return false
   */
  isEmpty(): boolean {
    return this.count === 0;
  }

  /**
   * @description Add an element to the top of the stack
   * @param {T} element - The element to be added to the stack
   */
  push(element: T): void {
    this.item[this.count] = element;
    this.first = this.item[0];
    this.last = this.item[this.count];
    this.count++;
  }

  /**
   * @description Remove the most recent element from the top of the stack
   * @returns {void | undefined} - Return undefined if the stack is empty, otherwise return void
   */
  pop(): void | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    this.item.length = this.count;
    this.last = this.item[this.count - 1];
  }

  /**
   * @description Get the most recent element from the top of the stack
   * @returns {T | undefined} - Return undefined if the stack is empty, otherwise return the most recent element
   */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.item[this.count - 1];
  }

  /**
   * @description Clear the stack
   * @returns {void}
   */
  clear(): void {
    this.item = [];
    this.count = 0;
  }

  /**
   * @description Print the stack
   * @returns {T[]} - Return the stack
   */
  print(): T[] {
    return this.item;
  }
}

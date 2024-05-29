/**
 * @description Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It is similar to a line of people waiting for a bus, the first person to arrive is the first person to get on the bus.
 *
 * In this chapther, I used an array to implement the Queue data structure.
 */

export class Queue<T extends string | number> {
  /**
   * @description Queue storage
   * @type {Array<T>}
   */
  private items: T[];

  /**
   * @description First element in the queue
   * @type {number}
   * @public
   */
  front: number;

  /**
   * @description Newest coming element in the queue
   * @type {number}
   * @public
   */
  tail: number;

  constructor() {
    this.items = [];
    this.front = 0;
    this.tail = 0;
  }

  /**
   * @description Add an element to the queue
   * @param {T} element
   * @public
   */
  enqueue(element: T): void {
    this.items[this.tail] = element;
    this.tail++;
  }

  isEmpty() {
    return this.front === this.tail;
  }

  /**
   * @description Remove head element from the queue
   * @returns {T | undefined}
   * @public
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.front];
  }

  print(): Record<number, T> {
    return this.items;
  }
}

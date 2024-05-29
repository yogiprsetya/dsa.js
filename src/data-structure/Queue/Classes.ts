/**
 * @description Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It is similar to a line of people waiting for a bus, the first person to arrive is the first person to get on the bus.
 *
 * In this chapther, I used an array to implement the Queue data structure.
 *
 * Operations: Peek, isEmpty, print
 */

export class Queue<T extends string | number> {
  /**
   * @description Queue storage
   * @type {Array<T>}
   * @public
   */
  items: T[];

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
  rear: number;

  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.items.length === 0;
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

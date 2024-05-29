import { Queue } from './Classes';

/**
 * @description Linear Queue is a queue where the elements are stored in a linear fashion.
 * The elements are inserted at the end and deleted from the front.
 * The first element to be inserted is the first one to be deleted.
 *
 * Terminology: Front, Rear, Enqueue, Dequeue
 * Operations: Enqueue, Dequeue
 */

export class QueueLinear<T extends string | number> extends Queue<T> {
  /**
   * @description Add an element to the queue
   * @param {T} element
   * @public
   */
  enqueue(element: T): void {
    this.items[this.rear] = element;
    this.rear++;
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
}

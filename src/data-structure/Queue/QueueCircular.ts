import { Queue } from './Classes';

/**
 * @description Circular Queue is a queue where the elements are stored in a circular fashion.
 * The elements are inserted at the end and deleted from the front.
 * The first element to be inserted is the first one to be deleted.
 * When the rear reaches the end of the queue, it wraps around to the beginning.
 *
 * Terminology: Front, Rear, Enqueue, Dequeue
 * Operations: Enqueue, Dequeue
 */

export class QueueCircular<T extends string | number> extends Queue<T> {
  /**
   * @description Maximum capacity of the queue
   * Without a capacity, the circular queue would lose its primary advantage:
   * the ability to efficiently use memory by overwriting old data when the buffer is full.
   * If the circular queue were allowed to grow indefinitely, it would essentially become a regular queue.
   * @type {number}
   */
  private capacity: number;

  constructor(capacity: number) {
    super();
    this.capacity = capacity;
    this.items = new Array(this.capacity);
    this.front = -1;
    this.rear = -1;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }

  enqueue(element: T): void {
    if (this.isFull()) {
      return undefined;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.front];

    if (this.front === this.rear) {
      // Queue is now empty
      this.front = -1;
      this.rear = -1;
      this.items = new Array(this.capacity);

      return undefined;
    }

    this.front = (this.front + 1) % this.capacity;

    return element;
  }
}

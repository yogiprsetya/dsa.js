/**
 * @description Stack is
 */

export class Stack<T> {
  private item: T[];
  private size: number;

  constructor() {
    this.item = [];
    this.size = 0;
  }
}

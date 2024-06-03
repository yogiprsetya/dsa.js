class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  front: Node<T> | null;
  rear: Node<T> | null;
  length: number;

  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  /**
   * @description Add a new node at the end of the list
   * @params {T} data
   */
  append(data: T) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      // If list is empty, both front and rear will point to new node
      this.front = newNode;
      this.rear = newNode;
    } else {
      if (this.rear) {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }

    this.length++;
  }

  /**
   * @description Add a new node at the beginning of the list
   * @param {T} data
   */
  prepend(data: T) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      // If list is empty, both front and rear will point to new node
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front = newNode;
    }

    this.length++;
  }

  insert(value: T, position: number) {
    if (position < 0 || position > this.length) {
      throw new Error('Invalid position');
    }

    if (position === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let current = this.front;
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current?.next || null;
        index++;
      }

      previous.next = newNode;
      newNode.next = current;

      this.length++;
    }
  }
}

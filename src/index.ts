/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Stack } from './data-structure/Stack';
import { QueueLinear } from './data-structure/Queue/QueueLinear';
import { QueueCircular } from './data-structure/Queue/QueueCircular';
import { SinglyLinkedList } from './data-structure/LinkedList/SinglyLinkedList';

/**
 * @description Stack usage
 * @file data-structure/Stack.ts
 */
// const stack = new Stack<number>();

/**
 * @description Queue Linear usage
 * @file data-structure/Queue.ts
 */
// const q = new QueueLinear<string>();
// q.enqueue('Kopi Susu');
// q.enqueue('Americano');
// q.enqueue('Cappuccino');
// q.enqueue('Flat White');
// console.log(q);
// q.dequeue();
// console.log(q);

/**
 * @description Circular Queue usage
 * @file data-structure/Queue/QueueCircular.ts
 */
// const q = new QueueCircular<string>(4);

// q.enqueue('Kopi Susu');
// q.enqueue('Americano');
// q.enqueue('Cappuccino');
// q.enqueue('Flat White');
// console.log(q);
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.enqueue('Latte');
// q.enqueue('Mocha');
// console.log(q);

// console.log(q.peek());

/**
 * @description Linked List usage
 * @file data-structure/LInkedList/SinglyLinkedList.ts
 */
const linkedList = new SinglyLinkedList<string>();
console.log(linkedList);
linkedList.append('Progo');
linkedList.append('Saparua');
linkedList.append('Cimanuk');
linkedList.append('Turnojoyo');
console.log(linkedList);

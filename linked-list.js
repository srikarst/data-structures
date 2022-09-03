class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const newNode = new Node(value, leader.next);
    leader.next = newNode;
    this.length++;
    return this.printList();
  }
  remove(index) {
    if (index >= this.length) return this.printList();
    if (index === 0) {
      const newHead = this.head.next;
      this.head = newHead;
      this.length--;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next;
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    for (var i = 0; i < index; i++) {
      if (currentNode.next) currentNode = currentNode.next;
      else break;
    }
    return currentNode;
  }
  reverse() {
    let first = this.head;
    let second = this.head.next;
    this.tail = first;
    first.next = null;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(22);
myLinkedList.insert(0, 77);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(20);
console.log(myLinkedList.remove(0));
console.log(myLinkedList.reverse());

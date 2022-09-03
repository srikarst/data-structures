class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new Node(value, null, this.tail);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(value) {
    const node = new Node(value, this.head, null);
    this.head.prev = node;
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
    const newNode = new Node(value, leader.next, leader);
    leader.next.prev = newNode;
    leader.next = newNode;
    this.length++;
    return this.printList();
  }
  remove(index) {
    if (index >= this.length) return this.printList();
    if (index === 0) {
      const newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
      this.length--;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next;
    leader.next.prev = leader;
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(22);
myLinkedList.insert(0, 77);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.remove(20));
console.log(myLinkedList.remove(0));

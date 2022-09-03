class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    if (!this.last) {
      this.first = new Node(value);
      this.last = this.first;
    } else {
      this.last.next = new Node(value);
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    // const nodeToDeQueue = this.first;
    this.first = this.first.next;
    if (!this.first) this.last = null;
    // nodeToDeQueue.next = null;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

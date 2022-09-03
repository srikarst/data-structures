class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  printList() {
    const array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  peek() {
    return this.top?.value;
  }
  push(value) {
    const newNode = new Node(value, this.top);
    if (!this.bottom) this.bottom = newNode;
    this.top = newNode;
    this.length++;
    return this.printList();
  }
  pop() {
    if (!this.top) return null;
    const newTop = this.top.next;
    const oldTopValue = this.top.value;
    this.top.next = null;
    this.top = newTop;
    this.length--;
    if (!this.length) this.bottom = null;
    return oldTopValue;
  }
  isEmpty() {
    if (!this.length) return true;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());

class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    const length = this.stack.length;
    return this.stack[length - 1];
  }
  push(value) {
    this.stack.push(value);
    return this;
  }
  pop() {
    const length = this.stack.length;
    // if (!length) return null;
    // this.stack.splice(length - 1, 1);
    this.stack.pop();
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

//Discord
//Udemy
//google

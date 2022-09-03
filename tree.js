class Node {
  constructor(value, left, right) {
    this.left = left || null;
    this.right = right || null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) this.root = newNode;
    else {
      let curr = this.root;
      while (curr) {
        if (value > curr.value) {
          if (!curr.right) {
            curr.right = newNode;
            curr = null;
          } else curr = curr.right;
        } else if (value < curr.value) {
          if (!curr.left) {
            curr.left = newNode;
            curr = null;
          } else curr = curr.left;
        } else curr = null;
      }
    }
  }
  lookup(value) {
    let curr = this.root;
    while (curr) {
      if (value > curr.value) curr = curr.right;
      else if (value < curr.value) curr = curr.left;
      else return curr;
    }
    return false;
  }
  remove(value) {
    if (!this.root) return false;
    let curr = this.root;
    let parent = null;
    while (curr) {
      if (value > curr.value) {
        parent = curr;
        curr = curr.right;
      } else if (value < curr.value) {
        parent = curr;
        curr = curr.left;
      } else {
        if (!curr.right) {
          if (!parent) this.root = curr.left;
          else {
            if (curr.left.value > parent.value) parent.right = curr.left;
            else parent.left = curr.left;
          }
        } else {
          if (!curr.right.left) {
            curr.right.left = curr.left;
            if (!parent) this.root = curr.right;
            else {
              if (curr.right.value > parent.value) parent.right = curr.right;
              else parent.left = curr.right;
            }
          } else {
            let replacingNode = curr.right.left;
            let replacingParent = curr.right;
            while (replacingNode.left) {
              replacingParent = replacingNode;
              replacingNode = replacingNode.left;
            }
            replacingParent.left = replacingNode.right;
            replacingNode.left = curr.left;
            replacingNode.right = curr.right;
            if (!parent) this.root = replacingNode;
            else {
              if (replacingNode.value > parent.value)
                parent.right = replacingNode;
              else parent.left = replacingNode;
            }
          }
        }
        return true;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
tree.remove(20);
console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(9));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

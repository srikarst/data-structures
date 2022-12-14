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
  findLeastRightChild(nodeToDelete) {
    let replacingParent = nodeToDelete;
    let replacingNode = nodeToDelete.right;
    while (replacingNode.left) {
      replacingParent = replacingNode;
      replacingNode = replacingNode.left;
    }
    return { replacingNode, replacingParent };
  }
  findHighestLeftChild(nodeToDelete) {
    let replacingParent = nodeToDelete;
    let replacingNode = nodeToDelete.left;
    while (replacingNode.right) {
      replacingParent = replacingNode;
      replacingNode = replacingNode.right;
    }
    return { replacingNode, replacingParent };
  }
  remove2(value) {
    let nodeToDelete;
    let parent = this.root;
    if (this.root.value === value) {
      nodeToDelete = this.root;
    } else {
      nodeToDelete = value < parent.value ? this.root.left : this.root.right;
      while (nodeToDelete && nodeToDelete.value !== value) {
        parent = nodeToDelete;
        if (value > nodeToDelete.value) nodeToDelete = nodeToDelete.right;
        else if (value > nodeToDelete.value) nodeToDelete = nodeToDelete.left;
      }
    }
    const deleteOrientation = value > parent.value ? "right" : "left";
    if (!nodeToDelete) return;
    let { replacingNode, replacingParent } =
      this.findLeastRightChild(nodeToDelete);
    if (replacingNode) {
      replacingParent.right = replacingNode.left;
      replacingNode.right = nodeToDelete.right;
      replacingNode.left = nodeToDelete.left;
      parent[deleteOrientation] = replacingNode;
    } else parent[deleteOrientation] = null;
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
  BreadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  BreadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.BreadthFirstSearchR(queue, list);
  }
  DFTPreOrder(currentNode, list) {
    return traversePreOrder(this.root, []);
  }
  DFTPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFTInOrder() {
    return traverseInOrder(this.root, []);
  }
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
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
console.log(JSON.stringify(traverseIteratively(tree.root)));
// console.log(tree.lookup(9));

console.log("BFS", tree.BreadthFirstSearch());
console.log("BFS", tree.BreadthFirstSearchR([tree.root], []));
console.log("DFSpre", tree.DFTPreOrder());
console.log("DFSin", tree.DFTInOrder());
console.log("DFSpost", tree.DFTPostOrder());

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
function traverseIteratively(node) {
  const s = [];
  const tree = {};
  let tempTree = tree;
  while (node || s.length > 0) {
    while (node) {
      tempTree.value = node.value;
      tempTree.left = node.left ? {} : null;
      tempTree.right = node.right ? {} : null;
      s.push([node, tempTree]);
      tempTree = tempTree.left;
      node = node.left;
    }
    s.reverse();
    const pair = s.pop();
    node = pair[0].right;
    tempTree = pair[1].right;
  }
  return tree;
}

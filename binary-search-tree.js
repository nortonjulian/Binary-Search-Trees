class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (val < currentNode.val) {
      if (currentNode.left) {
        this.insertRecursively(val, currentNode.left);
      } else {
        currentNode.left = newNode;
      }
    } else {
      if (currentNode.right) {
        this.insertRecursively(val, currentNode.right)
      } else {
        currentNode.right = newNode;
      }
    }

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!currentNode) {
      return undefined;
    }

    if (val === currentNode.val) {
      return currentNode;
    } else if (val < currentNode.val) {
      return this.findRecursively(val, currentNode.left)
    } else {
      return this.findRecursively(val, currentNode.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root, visited = []) {
    visited.push(currentNode.val);

    if (currentNode.left) {
      this.dfsPreOrder(currentNode.left, visited)
    }

    if (currentNode.right) {
      this.dfsPreOrder(currentNode.right, visited)
    }

    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode = this.root, visited = []) {
    if (currentNode.left) {
      this.dfsInOrder(currentNode.left, visited)
    }

    visited.push(currentNode.val)

    if (currentNode.right) {
      this.dfsInOrder(currentNode.right, visited)
    }

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode = this.root, visited = []) {
    if (currentNode.left) {
      this.dfsPostOrder(currentNode.left, visited);
    }

    if (currentNode.right) {
      this.dfsPostOrder(currentNode.right, visited);
    }

    visited.push(currentNode.val);

    return visited;
  }


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [this.root];

    while (queue.length) {
      const currentNode = queue.shift();
      visited.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;

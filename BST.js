class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if empty
    if (this.key == null) {
      this.key = key;
      this.value = value;
    // if it has a key
    } else if (key < this.key) {
      // if left pointer is empty
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } // if it exists, then we recursively call it to go down
      else {
        this.left.insert(key, value);
      }
    } // if its greater, do it on the other side.
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    // if root is key
    if (this.key == key) {
      return this.value;
    } // if less, follow it recursively to the left
    else if (key < this.key && this.left) {
      return this.left.find(key);
    } // same for the right
    else if (key > this.key && this.left) {
      return this.left.find(key);
    } // otherwise throw an error
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key){
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } // if only left child
      else if (this.left) {
        this._replaceWith(this.left);
      } // if only right child
      else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  inOrder(values=[]) {
    if (this.left) {
      values = this.left.inOrder(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.inOrder(values);
    }
    return values;
  }

  preOrder(values=[]) {
    values.push(this.value);

    if (this.left) {
      values = this.left.preOrder(values);
    }

    if (this.right) {
      values = this.right.preOrder(values);
    }
    return values;
  }

  postOrder(values=[]) {
    if (this.left) {
      values = this.left.postOrder(values);
    }
    if (this.right) {
      values = this.right.postOrder(values);
    }
    values.push(this.value);
    return values;
  }


  _replaceWith(node){
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }


  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

}

module.exports = BinarySearchTree;
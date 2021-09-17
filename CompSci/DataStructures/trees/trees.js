const BinaryTree = function () {
  this.root = undefined
}

const Node = function (value) {
  this.value = value
  this.left = undefined
  this.right = undefined
}

// checks if value is in the binary-tree
// returns boolean
BinaryTree.prototype.includes = function (value) {
  let currentNode = this.root

  while (currentNode) {
    if (value < currentNode.value) {
      currentNode = currentNode.left
    } else if (value > currentNode.value) {
      currentNode = currentNode.right
    } else {
      return true
    }
  }

  return false
}

// add a new node containing value to the tree
BinaryTree.prototype.insert = function (value) {
  const newNode = new Node(value)

  if (!this.root){
    this.root = newNode
    return
  }

  let currentNode = this.root

  while (currentNode) {
    if (value === currentNode.value) return
    if (value < currentNode.value) {
      // it's already there?
      if (!currentNode.left) {
        currentNode.left = newNode
        return
      }
      currentNode = currentNode.left
    } else if (value > currentNode.value) {
      if (!currentNode.right) {
        currentNode.right = newNode
        return
      }
      currentNode = currentNode.right
    }
  }
}

BinaryTree.prototype.size = function () {

}

BinaryTree.prototype.height = function () {

}

BinaryTree.prototype.getMax = function () {

}

module.exports = {
  Node,
  BinaryTree
}

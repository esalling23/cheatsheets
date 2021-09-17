const LinkedList = function () {
  this.head = null
  this.tail = null
  this.nodeCount = 0
}

const Node = function (value, next) {
  this.value = value
  this.next = next
}

LinkedList.prototype.prepend = function (value) {
  // create new node
  // set `next` value to be the current head so it's put in front
  const newNode = new Node(value, this.head)
  // Set the head to the newest node
  this.head = newNode

  // check if there's no tail
  // if so, also check the tails reference to the newNode
  if (!this.tail) {
    this.tail = newNode
  }

  this.nodeCount++
}

// Removes first node of the list
// constant time - doesn't have to loop or anything, does the same thing each time
LinkedList.prototype.removeFirst = function () {
  let removedValue
  // check if linked list has 1 item
  // can either check if `head` doesn't have a `next` (note: use optional chaining or adjust the nesting to handle `null` or `undefined` head)
  // or check if `head` and `tail` are the same node
  // note: need to do this before removing the node,
  // because otherwise we'll mess up this conditional by modifying the head
  // if (!this.head?.next) {
  if (this.head === this.tail) {
    this.tail = null
  }

  if (this.head) {
    removedValue = this.head.value
    // set the head to be the next
    this.head = this.head.next
    this.nodeCount--
  }

  return removedValue
}

LinkedList.prototype.length = function () {
  return this.nodeCount
}

LinkedList.prototype.last = function () {
  if (!this.tail) {
    return null
  }
  return this.tail.value
}

// adds new node onto the end
LinkedList.prototype.append = function (value) {
  const newNode = new Node(value, null)

  if (this.tail) {
    this.tail.next = newNode
    this.tail = newNode
  } else {
    this.tail = newNode
    this.head = newNode
  }

  this.nodeCount++
}

LinkedList.prototype.print = function () {
  // variable for the main node
  let currentNode = this.head

  while (currentNode) {
    // do stuff
    console.log(currentNode.value)
    // set current node to it's next
    currentNode = currentNode.next
  }
}

LinkedList.prototype.includes = function (value) {
  let currentNode = this.head

  while (currentNode) {
    if (currentNode.value === value) {
      return true
    }
    currentNode = currentNode.next
  }

  return false
}

LinkedList.prototype.insertAfter = function (target, value) {
  let currentNode = this.head
  const newNode = new Node(value, null)

  while (currentNode) {
    if (currentNode.value === target) {
      newNode.next = currentNode.next
      currentNode.next = newNode

      this.nodeCount++
      if (currentNode === this.tail) {
        this.tail = newNode
      }

      return
    }

    currentNode = currentNode.next
  }
}

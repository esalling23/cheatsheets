// LIFO or FILO - last in first out or first in last out
// pile of data
// can only access top-most item
const { LinkedList } = require('./linked-list')

const Stack = function () {
  this._items = new LinkedList()
}

Stack.prototype.push = function (value) {
  this._items.append(value)
}

Stack.prototype.pop = function () {
  return this._items.removeFirst()
}

Stack.prototype.isEmpty = function () {
  return this._items.length() === 0
}

module.exports = Stack

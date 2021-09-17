// A line of data
// FIFO or LILO
// first in first out, last in last out
// ex: waiting in a line, playlist

const { LinkedList } = require('./linked-list')

const Queue = function () {
  this._items = new LinkedList()
}

Queue.prototype.enqueue = function (value) {
  this._items.append(value)
}

Queue.prototype.dequeue = function () {
  return this._items.removeFirst()
}

Queue.prototype.isEmpty = function () {
  return !this._items.length()
}

module.exports = Queue

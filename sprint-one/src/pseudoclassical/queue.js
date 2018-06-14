var Queue = function() {
  this.storage = {};
  this.beginning = 0;
  this.end = 0;
  this.count = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

Queue.prototype.enqueue = function(value) {
  for (var i = 0; i < this.count; i++) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count <= 0) {
    this.count = this.count;
  } else {
    var deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return deleted;
  }
};

Queue.prototype.size = function () {
  return this.count;
};
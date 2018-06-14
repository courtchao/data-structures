var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  for (var i = 0; i < this.count; i++) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count <= 0) {
    this.count = this.count;
  } else {
    var deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return deleted;
  }

};

queueMethods.size = function() {
  return this.count;
};
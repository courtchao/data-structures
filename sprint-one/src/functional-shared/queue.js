var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.storage.hasOwnProperty !== undefined) {
      for (var key in this.storage) {
        this.storage[key + 1] = this.storage[key];
        this.storage[0] = value;
      }
    } else {
      this[0] = value;
    }
  },

  dequeue: function() {
    var lastIndex = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
    var deleted = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return deleted;
  },

  size: function() {
    var size = 0;
    for (var key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }
};



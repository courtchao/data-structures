var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var obj = {};

  _.extend(someInstance, queueMethods);

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    if (this[0] !== undefined) {
      for (var key in this) {
        this[key + 1] = this[key];
        this[0] = value;
      }
    } else {
      this[0] = value;
    }
  },

  dequeue: function() {
    var lastIndex = Object.keys(this)[Object.keys(this).length - 1];
    var deleted = this[lastIndex];
    delete this[lastIndex];
    return deleted;
  },

  size: function() {
    var size = 0;
    for (var key in this) {
      if (this.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }
};



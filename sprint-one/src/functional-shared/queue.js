var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.beginning = 0;
  someInstance.end = 0;
  someInstance.count = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {

    if (Object.values(this.storage).length === 0) {
      this.storage[this.beginning] = value;
      this.count++;
    } else {
      for (var val in this.storage) {
        this.storage[this.beginning + 1] = this.storage[this.beginning];
        this.end++; 
        this.count++;       
      }
    }
    this.storage[this.beginning] = value;
  },

  dequeue: function() {
    var deleted = this.storage[this.end];
    delete this.storage[this.end];
    if (this.end > 0) {
      this.end--;
    }
    if (this.count > 0) {
      this.count--;        
    }
    return deleted;
  },

  size: function() {
    return this.count;
  }
};



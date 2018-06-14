var Stack = function() {
  var someInstance = {};
  someInstance.storage = {}; 
  someInstance.count = 0;
  _.extend(someInstance, stackMethods); 
  return someInstance;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.count] = val;
    this.count++;
  },
  pop: function() {
    // var deleted = this.storage[this.size - 1];
    // delete this.storage[this.size - 1];
    // this.count--;
    // return deleted;
    var deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    // for (var key in this.storage) {
    //   this.storage[this.key - 1] = this.storage[this.key];
    //   this.count--;
    // }
    if (this.count > 0) {
      this.count--;      
    }

    return deleted;
  },
  size: function() {
    return this.count;
  }
};
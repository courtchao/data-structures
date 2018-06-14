var Stack = function() {
  var someInstance = {};
  var newStack = {}; 
  _.extend(newStack, stackMethods); 
  return newStack;
};

var stackMethods = {
  push: function(val) {
    if (index[0] !== undefined) {
      for (var index in this) {
        this[index + 1] = this[index];
      }
    } else {
      this[0] = index[0];
    }
  },
  pop: function() {
    var index = Object.keys(this);
    var lastIndex = index[index.length - 1];
    var deleted = this[0];
    delete this[0];
    for (var key in this) {
      this[key - 1] = this[key];
    }
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
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (storage[0] !== undefined) {
      for (var key in storage) {
        storage[key + 1] = storage[key];
        storage[0] = value;
      }
    } else {
      storage[0] = value;
    }
    count++;
  };

  someInstance.dequeue = function() {
    var length = Object.keys(storage)[Object.keys(storage).length - 1];
    var deleted = storage[length];
    delete storage[length];
    if (count > 0) {
      count--;
    }
    return deleted;
  };

  someInstance.size = function() {
    return count;

  //   var size = 0;
  //   for (var key in storage) {
  //     if (storage.hasOwnProperty(key)) {
  //       size++;
  //     }
  //   }
  //   return size;    
  };

  return someInstance;
};



//


//inputs: function
//output: object
//constraints: none
//edge cases: none?

//Create an object that adds to the top and removes from the top 

//push : takes in value puts the value on top of the stack
//pop: removes top value from stack, returns the removed value

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if (storage[0] !== undefined) {
      for (var key in storage) {
        storage[key + 1] = storage[key];
        storage[0] = value;
      }
    } else {
      storage[0] = value;
    }
  };

  someInstance.pop = function() {
    var length = Object.keys(storage)[Object.keys(storage).length - 1];
    var deleted = storage[0];
    delete storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    delete storage[length];
    return deleted;
  };

  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  
    //return Object.keys().length;
  };

  return someInstance;
};

//Create an object that has certain characteristics
//When the object 
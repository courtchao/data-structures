var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    //newNode.next = this.tail;
    if (list.tail === null) {
      this.tail = newNode;      
    }
    this.tail.next = newNode;
    this.tail = newNode;

    if (list.head === null) {
      list.head = newNode;
    } 
  };

  list.removeHead = function() {
    // if (list.length === 0) {
    //   return undefined;
    // }
    if (list.head === null) {
      return null;
    }
    var head = list.head.value;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target) {
    var currentNode = this.head; 
    while(currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

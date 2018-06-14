class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }

  pop() {
    var deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if (this.count > 0) {
      this.count--;      
    }
    return deleted;
  }

  size() {
    return this.count;
  }
}
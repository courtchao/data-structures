class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.beginning = 0;
    this.end = 0;
    this.count = 0;
  }

  enqueue(val) {
    if (Object.values(this.storage).length === 0) {
      this.storage[this.beginning] = val;  
      this.count++; 
    } else {
      for (var index in this.storage) {
        this.storage[this.beginning + 1] = this.storage[this.beginning];
      }
      this.storage[this.beginning] = val;
      this.end++;
      this.count++;
    }
  }

  dequeue() {
    var deleted = this.storage[this.end];
    delete this.storage[this.end];
    if (this.count > 0) {
      this.count--;
    }
    if (this.end > 0) {
      this.end--;      
    }
    return deleted;
  }

  size() {
    return this.count;
  }
}
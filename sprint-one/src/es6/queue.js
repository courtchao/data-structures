class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.beginning = 0;
    this.end = 0;
  }

  enqueue(val) {
    this.storage[this.beginning] = val;
    this.end++;
  }

  dequeue() {
    var deleted = this.storage[this.end];
    delete deleted;
    this.end--;
    return deleted;
  }

  size() {
    return (this.end - this.beginning);
  }

}
/* Write your class below */
class Queue {
  constructor() {
    this.counter = 0;
    this.queue = [];
    this.queueLength = 0;
  }
  enqueue(x) {
    this.queue[this.queueLength] = x;
    this.queueLength++;
  }
  isEmpty() {
    if (this.queueLength === 0) {
      return true;
    } else {
      return false;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.queue[0];
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return delete this.queue[this.counter];
    this.counter++;
  }
}
let queue = new Queue();
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);
queue.dequeue();
console.log(queue);

//You can paste the test code from the lesson below to test your solution

/* Do not remove the exports below */
module.exports = Queue;

const { createQueue } = require("./queue");

module.exports = { priorityQueue };

function priorityQueue() {
  const highPriority = createQueue();
  const lowPriority = createQueue();
  return {
    enqueue(item, priority = "low") {
      if (item === null) return;

      if (priority === "high") {
        highPriority.enqueue(item);
      } else lowPriority.enqueue(item);
    },
    dequeue(priority = "high") {
      if (priority === "high") {
        highPriority.dequeue();
        // Note: if operation didn't seccuss (like ajax call) 
        // enqueue it again only with setTimeOut
        // to prevent freezing if there is only 1 item
      } else lowPriority.dequeue();
    },
    peek() {
      return highPriority.length === 0
        ? lowPriority.peek()
        : highPriority.peek();
    },
    get length() {
      return highPriority.length === 0
        ? highPriority.length
        : lowPriority.length;
    },
    isEmpty() {
      return highPriority.length === 0 && lowPriority.length === 0;
    }
  };
}

// Queues
// obey the rule of FIFO - first in first out

module.exports =  {createQueue}

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },

    dequeue() {
      return queue.pop();
    },

    peek() {
      return queue[queue.length - 1];
    },

    // get give us the corrent state, and not the state at the init (0)
    get length() {
      return queue.length;
    },

    isEmpty() {
      return queue.length === 0;
    },

    len() {
      return queue.length;
    }
  };
}
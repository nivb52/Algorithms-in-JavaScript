const {priorityQueue} = require('./priorityQueue')

// =======================
const q = priorityQueue();

q.enqueue("learn data stracture", 'high');
q.enqueue("see some code");
q.enqueue("learn more JS",'high');
q.enqueue("swim");
q.enqueue("take a coffee");

console.log("peeking to last item: ", q.peek());
setTimeout(() => {
  q.dequeue();
  console.log("deueuing ...");
  console.log("peek : ", q.peek());
}, 550);
setTimeout(() => {
  q.dequeue();
  console.log("deueuing ...");
  console.log("peek : ", q.peek());
  console.log("empty ? ", q.isEmpty());
}, 1100);

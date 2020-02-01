const {createQueue} = require('./queue.js')

// =======================
const q = createQueue();

q.enqueue("see queue as data stracture");
q.enqueue("help other learn");
q.enqueue("take a coffee");
console.log("length: ", q.len());

console.log("peeking to last item: ", q.peek());
setTimeout(() => {
  q.dequeue();
  console.log("deueuing ...");
  console.log("peek : ", q.peek());
}, 550);
setTimeout(() => {
  console.log("length: ", q.len());
  q.dequeue();
  console.log("deueuing ...");
  console.log("peek : ", q.peek());
  console.log("empty ? ", q.isEmpty());
}, 1100);

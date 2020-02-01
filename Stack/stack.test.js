const { createStack } = require("./stack.js");

// =======================
const mixerStack = createStack();
console.log("empty ? ", mixerStack.isEmpty());

mixerStack.push("milk");
mixerStack.push("banana");
mixerStack.push("strawberry");
mixerStack.push("piece of plastik");
mixerStack.push("coconut");
// ====================================
let time = 500
setTimeout(() => {
  console.log("peek : ", mixerStack.peek());
  mixerStack.pop();
  console.log("poping ...");
}, time/time);
setTimeout(() => {
  console.log("peek : ", mixerStack.peek());
  mixerStack.pop();
  console.log("poping ...");
}, time*1.5);
setTimeout(() => {
  console.log("peek : ", mixerStack.peek());
}, time*3.5);
setTimeout(() => {
  mixerStack.push("coconut");
}, time*4.5);
setTimeout(() => {
  console.log("peek: ", mixerStack.peek());
}, time*5);

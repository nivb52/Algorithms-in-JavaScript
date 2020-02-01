// stacks
// LIFO - last in first out
// e.g call stack - for functions
module.exports = { createStack };

function createStack() {
  const array = [];
  return {
    push(item) {
      array.push(item);
    },
    pop() {
      array.pop();
    },

    peek() {
      return array[array.length - 1];
    },

    get length() {
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    }
  };
}

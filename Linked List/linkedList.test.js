const { linkedList } = require("./linkedList");

console.log(`
:::::::::: Linked List ::::::::::::
`);

const list = linkedList();
const items = ["1", "2", "3", "4", "5"];
const nodes = items.map(val => list.push(val));

console.log(" Print List: ", list.print());
console.log("Length: ", list.getLength());
console.log("Get(idx = 3): \n", list.get(3),'\n\n');
console.log("Delete(idx = 2): ", list.delete(2));
console.log("pop: ", list.pop());
console.log(list.print());
console.log("pop: ", list.pop());
console.log("pop: ", list.pop());
console.log(" Print List: ", list.print());
console.log("Length: ",list.getLength());

console.log("pop: ", list.pop());

console.log(list.isEmpty());

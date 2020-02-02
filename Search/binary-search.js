// O(log n)
// examples at the bottom
function binarySearch(list, toFind) {
  let lowIdx = 0;
  let highIdx = list.length;
  let middleIdx,
    guess,
    counter = 0; // counter for demostration

  while (lowIdx <= highIdx) {
    counter++;
    middleIdx = Math.floor(highIdx + lowIdx) / 2;
    guess = list[middleIdx];
    if (guess === toFind) break;
    else if (guess > toFind) highIdx = middleIdx -1;
    else lowIdx = middleIdx; // guess > itemToFind
  }
  console.log('iterations: ',counter);
  if (guess === toFind) return middleIdx; // return the index if found
  return -1;
}

const items = [1,2,3,4,5,6,7,42] // 8 items
items.sort((a,b) => a - b);
console.log(binarySearch(items, 42));
// 2 log 8  = 3
// 2 log 1024 = 10
// 2 ^ 20 = 1 million 
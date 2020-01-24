// O(n) * O(log n) = O(n log n) at average and best case 
// Quicksort is a divide and conquer algorithm by Tony Hoare, 1959
function quickSort(array) {
  if (array.length < 2) return array;
  let lower = [],
    greater = [];
  let middlePoint = Math.floor(array.length / 2);
  let pivot = array[middlePoint];

  for (let i in array) {
    if (i != middlePoint) {
      array[i] > pivot ? greater.push(array[i]) : lower.push(array[i]);
    }
  }
  return [...quickSort(lower), pivot ,...quickSort(greater)];
}

const items = [4, 7, 6, 1, 9, 8, 3, 4, 15, 6];
console.log(quickSort(items));
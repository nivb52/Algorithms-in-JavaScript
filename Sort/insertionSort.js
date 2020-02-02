// insertion Sort
// compers the next item and insert it
// before or after depends on the compresion
// use 2 loops --> O([n/2*(n-1)])
function insertionSort(array) {
  let i, j;
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const [temp] = array.splice(i, 1);
        array.splice(j, 0, temp);
      }
    }
  }

  return array;
}

// const items = [5,11,12, 13,10, 6, 7, 4, 0, 1, 2, 3, 9];
const items = [4, 7, 6, 1, 9, 8, 3, 2, 10, 11];
console.log(insertionSort(items));

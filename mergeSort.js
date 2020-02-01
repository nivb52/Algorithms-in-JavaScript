// merge Sort
// we will split the array until we have 1 item
// than we will MERGE them together
// The SORT will be made willing the Merging going on
// thus is the name

function mergeSort(array = []) {
  if (array.length < 2) return array;
  //else:
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // to see it on action -> //console.log(left,'\n',right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const temp = [];

  // actual sorting
  while (left.length && right.length) {
    if (left[0] < right[0]) temp.push(left.shift());
    else temp.push(right.shift());
  }

  const sorted = [...temp, ...left, ...right];
  return sorted;
}

const items = [9, 4, 6, 10, 3, 7, 2, 8, 5, 1];
console.log(mergeSort(items));

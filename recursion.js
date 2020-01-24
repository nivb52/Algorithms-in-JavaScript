// recursion have same and sometimes even worse preformance
// but in the right cases it simpler and ceaner code
// 3 EXAMPELS :

//  O(2^n)  :
function fibonacci(n) {
    if (n <= 0 || n === 1)
    return n; // 0 or 1 are at 
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4)); //output -> 3
// =================
//
//
// recursive for flatten deep array
// =================
function deepFlat(array) {
    if (!Array.isArray(array)) return false;
    
    let flattend = [];
    (function flat(array) {
        array.forEach(el => {
            if (Array.isArray(el)) flat(el);
            else flattend.push(el);
        });
    })(array);
    return flattend;
}

const items = [1, 2, 3, 4, 5, [66, 77, [888, 999]], 0];
console.log('deepFlat: ',deepFlat([items]));
// =================
//
//
//
// another example which can be too complex
// because it harder to find the edge cases
// =================
function searchInArray(array, toFind) {
    let isFound = false;
    // minimum loops as the length first array
    array.forEach(item => {
        // prevent override on 'isFound' by recursion
    if (isFound) return;
    
    if (item === toFind) {
        isFound = true;
    }
    // recursion :
    if (Array.isArray(item)) {
        isFound = searchInArray(item, toFind);
    }
});
return isFound;
}
console.log('searchInArray: ',searchInArray(items, 1));

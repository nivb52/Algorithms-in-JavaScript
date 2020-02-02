// O(n)  -> (worst case)
// the worst case the search will be on the all arrray 
function linerSearch(list, toFind) {
    let counter = 0
    let foundItem = null

    for (let elem of list){
        counter++
        if (elem === toFind) {
            foundItem = true
            break
        }
    }
        // RETURN THE INDEX
        //THIS IS ALSO THE ITERATIONS IF FOUND OTHERWISE -1
        return foundItem ? counter : -1
}
const items = [1,2,3,4,5,6,7,42]
console.log(items.length, ' is the length of the array ');
console.log(linerSearch(items,42))
/*
    Set: new Set(Iterable) // Iterable = Can loop on
*/

/////////////////////////

// Set is an object allows storing only unique values

let myBooks = new Set();

console.log(typeof myBooks); // object

/////////

let mySet = new Set([1, 2, 3, 3]);
let myArray = [1, 2, 3, 3];

console.log(mySet); // Set(3) {1, 2, 3}
console.log(myArray); // (4) [1, 2, 3, 3]

/////////////////////////

// Sets don't have keys, just values

console.log(mySet[2]); // undefined
console.log(myArray[2]); // 3

/////////////////////////

// Converting the array into set
let myArray1 = [1, 2, 3, 3, 3, 4, 4, 2];
let mySet1 = new Set(myArray1);

console.log(myArray1); // (8) [1, 2, 3, 3, 3, 4, 4, 2]
console.log(mySet1); // Set(4) {1, 2, 3, 4}

/////////

// Converting the set into array

console.log([...mySet1]); // (4) [1, 2, 3, 4]

/////////////////////////
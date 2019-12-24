/*
    Spread Operator ...
*/

/////////////////////////

let arrayOne = [1, 2, 3],
    arrayTwo = [4, 5];

console.log(arrayOne.concat(arrayTwo)); // (5) [1, 2, 3, 4, 5]

/////////

let allArrays = [...arrayOne, ...arrayTwo];

console.log(allArrays); // (5) [1, 2, 3, 4, 5]

/////////////////////////

// MDN Example:

let sum = (x, y, z) => x + y + z;

console.log(sum(1, 2, 3)); // 6

/////////

const myNumbers = [1, 2, 3];

console.log(myNumbers); // (3) [1, 2, 3]
console.log(...myNumbers); // 1 2 3

console.log(sum(myNumbers)); // 1,2,3undefinedundefined
console.log(sum(...myNumbers)); // 6

/////////////////////////

let customArray = [1, 2, 3, ...arrayTwo, 6, 7];

console.log(customArray); // (7) [1, 2, 3, 4, 5, 6, 7]

/////////////////////////

let arrayOne2 = [1, 2, 3],
    arrayTwo2 = arrayOne2;

arrayTwo2.push(4);

console.log(arrayOne2); // (4) [1, 2, 3, 4]
console.log(arrayTwo2); // (4) [1, 2, 3, 4]

/////////

let arrayOne3 = [1, 2, 3],
    arrayTwo3 = [...arrayOne3];

arrayTwo3.push(4);

console.log(arrayOne3); // (3) [1, 2, 3]
console.log(arrayTwo3); // (4) [1, 2, 3, 4]

/////////////////////////

let array = [1, 2, 3, 100, -20, -10, 500];

console.log(Math.min(array)); // NaN
console.log(Math.min(...array)); // -20 

/////////////////////////
/*
    New String Methods
    startsWith => string.startsWith(searchString, position = 0);
    endsWith => string.endsWith(searchString, position = string.length);
*/

/////////////////////////

let x = 'Elzero Web School';
console.log(x.startsWith('El')); // true

let x2 = 'Elzero Web School';
console.log(x2.startsWith('Web', 7)); // true

let x3 = 'Video - Learn how to learn';
console.log(x3.startsWith('Video', 7)); // false

/////////

let y = 'Video - Learn how to learn';
console.log(y.endsWith('Learn')); // false ( capital !== small )

let y2 = 'Elzero Web School';
console.log(y2.endsWith('School')); // true

let y3 = 'Elzero Web School';
console.log(y3.endsWith('Web')); // false

let y33 = 'Elzero Web School';
console.log(y33.endsWith('Web', y33.length-' School'.length)); // true

/////////////////////////
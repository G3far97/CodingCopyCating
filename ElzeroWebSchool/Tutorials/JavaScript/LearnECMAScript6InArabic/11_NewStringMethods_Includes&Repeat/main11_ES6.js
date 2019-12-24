/*
    New String Methods
    =========================
    startsWith => string.startsWith(searchString, position = 0);
    endsWith => string.endsWith(searchString, position = string.length);
    ---------
    includes => string.includes(searchString, position = 0);
    repeat => string.repeat(count);
*/

/////////////////////////

let x = 'Elzero Web School';
console.log(x.includes('Web')); // true

let x2 = 'Elzero Web School';
console.log(x2.includes('Web', 10)); // false

/////////

let x3 = 'Elzero Web School';
console.log(x3.repeat()); // => just a blank output, nothing

let x33 = 'Elzero Web School\n';
console.log(x33.repeat(4));
/*
    Elzero Web School
    Elzero Web School
    Elzero Web School
    Elzero Web School
*/ 

/////////////////////////
/*
    Set: Methods
*/

/////////////////////////

// Chain Adding

let myBooks1 = new Set().add('One').add('Two').add('Three');
console.log(myBooks1); // Set(3) {"One", "Two", "Three"}

/////////

//Normal Adding

let myBooks2 = new Set();
myBooks2.add('One');
myBooks2.add('Two');
myBooks2.add('Three');
console.log(myBooks2); // Set(3) {"One", "Two", "Three"}

/////////////////////////

let mySet = new Set('Osama');
mySet.add('osama');
console.log(mySet); // Set(5) {"O", "s", "a", "m", "Osama"}

/////////

mySet.delete('s');
console.log(mySet); // Set(4) {"O", "a", "m", "Osama"}

console.log(mySet.has('Osama'.toLowerCase())); // true

console.log(mySet.size); // 4

mySet.clear();
console.log(mySet); // Set(0) {}

/////////////////////////

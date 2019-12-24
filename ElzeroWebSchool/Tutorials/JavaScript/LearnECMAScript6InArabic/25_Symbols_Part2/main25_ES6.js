/*
    Symbols
*/

/////////////////////////

const myOldSymbolOne = Symbol(); // Creates symbol
const myOldSymbolTwo = Symbol(); // Creates another symbol

console.log(myOldSymbolOne === myOldSymbolTwo); // false

// for method: create & access
const mySymbolOne = Symbol.for('Testing'); // Symbol not exist, create it
const mySymbolTwo = Symbol.for('Testing'); // symbol is exist, return it
console.log(mySymbolOne === mySymbolTwo); // true

const mySymbolOne2 = Symbol.for('One'); // Symbol not exist, create it
const mySymbolTwo2 = Symbol.for('Two'); // symbol not exist, create it
console.log(mySymbolOne2 === mySymbolTwo2); // false

console.log(Symbol.keyFor(mySymbolTwo2)); // Two

/////////////////////////

// Symbols don't auto convert to strings

const myNewSymbolOne = Symbol('One');

// alert(myNewSymbolOne); // Uncaught TypeError: Cannot convert a Symbol value to a string
// alert(myNewSymbolOne.toString()); // Symbol(One)

/////////////////////////

const myNewSymbolTwo = Symbol('Two');
console.log(myNewSymbolTwo.description); // Two

Symbol.iterator // One of the many built-in Symbols

/////////////////////////
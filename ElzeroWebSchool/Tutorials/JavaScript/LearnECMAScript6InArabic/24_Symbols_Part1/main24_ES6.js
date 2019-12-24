/*
    Symbols:
    New primitive data type introduced in ES6,
    unique & immutable and contains hidden metadata
*/

/////////////////////////

// Symbol datatype

const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

/////////

// Uniqueness

const mySymbolOne = Symbol('Testing'); // This is called a description that probably won't be needed in other than just debugging
const mySymbolTwo = Symbol('Testing');

console.log(mySymbolOne === mySymbolTwo); // false

/////////

// Privacy

const myNewSymbol = Symbol();

const myObject = {
    username: 'Osama Elzero',
    website: 'Elzero.org',
    [myNewSymbol]: 'This is hidden from iteration'
};

console.log(myObject);
// {username: "Osama Elzero", website: "Elzero.org", Symbol(): "This is hidden from iteration"}

for(let val of Object.entries(myObject)) {
    console.log(val);
}
/*
    (2) ["username", "Osama Elzero"]
    (2) ["website", "Elzero.org"]
*/

console.log(Object.getOwnPropertyNames(myObject)); // (2) ["username", "website"]

console.log(Object.keys(myObject)); // (2) ["username", "website"]

console.log(Object.getOwnPropertySymbols(myObject)); // [Symbol()]

console.log(JSON.stringify(myObject)); // {"username":"Osama Elzero","website":"Elzero.org"}

/////////////////////////
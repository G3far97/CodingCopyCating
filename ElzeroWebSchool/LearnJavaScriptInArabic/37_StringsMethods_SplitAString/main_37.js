/*global console, alert, document, prompt*/

/////////////////////////

// Split: split( Seperator, Limit )

var myMainString = "I Love JavaScript And JSON";
console.log(myMainString); // Normal 'String' // "I Love JavaScript And JSON"
console.log(typeof(myMainString)); // String

console.log(myMainString.split()); // Changes The Type To 'Object' // ["I Love JavaScript And JSON"]
console.log(typeof(myMainString.split())); // Object

console.log(myMainString.split("")); // (26) ["I", " ", "L", "o", "v", "e", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "A", "n", "d", " ", "J", "S", "O", "N"]
console.log(myMainString.split(" ")); // (5) ["I", "Love", "JavaScript", "And", "JSON"]

console.log(myMainString.split(" ", 3)); // (3) ["I", "Love", "JavaScript"]

/////////

// Slice: slice( Start, End )

console.log(myMainString); // Normal 'String' // "I Love JavaScript And JSON" // If The ( Start < End ) => []
console.log(typeof(myMainString)); // String

console.log(myMainString.slice(2, 17)); // Normal 'String' // [ 2, 17 [ // "Love JavaScript"
console.log(typeof(myMainString.slice(3, 17))); // String

console.log(myMainString.slice(-4)); // Normal 'String' // Last 4 Characters // "JSON"
console.log(typeof(myMainString.slice(-4))); // String

/////////

// SubStr: substr( Start, Length ) // Helpfull When You Don't Know The 'End' Index

console.log(myMainString); // Normal 'String' // "I Love JavaScript And JSON"
console.log(typeof(myMainString)); // String

console.log(myMainString.substr()); // Normal 'String' // "I Love JavaScript And JSON"
console.log(typeof(myMainString.substr())); // String

console.log(myMainString.substr(7)); // Normal 'String' // "JavaScript And JSON"
console.log(typeof(myMainString.substr(7))); // String

console.log(myMainString.substr(7, 10)); // Normal 'String' // "JavaScript"
console.log(typeof(myMainString.substr(7, 10))); // String

/////////

// SubString: substring( Start, Length ) // Helpfull When You Know The 'End' Index // If The ( Start < End ) They Will Swap

console.log(myMainString); // Normal 'String' // "I Love JavaScript And JSON"
console.log(typeof(myMainString)); // String

console.log(myMainString.substring()); // Normal 'String' // "I Love JavaScript And JSON"
console.log(typeof(myMainString.substring())); // String

console.log(myMainString.substring(7)); // Normal 'String' // "JavaScript And JSON"
console.log(typeof(myMainString.substring(7))); // String

console.log(myMainString.substring(7, 17)); // Normal 'String' // "JavaScript" // [ 7, 17 [
console.log(typeof(myMainString.substring(7, 17))); // String

/////////////////////////
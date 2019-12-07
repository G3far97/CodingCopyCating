/*global console, alert, document, prompt*/

/////////////////////////

var myNumber = 120,
    myString = myNumber.toString();

console.log(myNumber); // 120
console.log(myString); // "120"

var myNewNumber = myString.replace(2, 3);
console.log(myNewNumber); // "130"

var myLastNumber = myNewNumber.split("");
console.log(myLastNumber); // ["1", "3", "0"]

var myNumber1 = 120,
    myString1 = myNumber1.toString().replace(2, 3).split(""); // Methods Chain

console.log(myNumber1); // 120
console.log(myString1); // ["1", "3", "0"]

/////////////////////////
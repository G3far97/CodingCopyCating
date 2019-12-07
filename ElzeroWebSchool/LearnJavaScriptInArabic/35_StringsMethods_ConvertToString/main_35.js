/*global console, alert, document, prompt*/

/////////////////////////

// Revision

var myString = "\\I\\ \"Love\" 'JavaScript'";
console.log(myString);
console.log(typeof(myString));
console.log(myString.length);

/////////

// Number Conversion To String

var myNumber = 100;
console.log(myNumber);
console.log(typeof(myNumber));

var myNewNumber = myNumber.toString();
console.log(myNewNumber);
console.log(typeof(myNewNumber));

var myNewNumber2 = String(myNumber); // Not Recommended
console.log(myNewNumber);
console.log(typeof(myNewNumber));

/////////////////////////
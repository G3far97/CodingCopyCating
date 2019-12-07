/*global console, alert, document, prompt*/

/////////////////////////

// String.fromCharCode(Num1, Num2, Num3, ..., NumN)

var myMessage = String.fromCharCode(79, 115, 97, 109, 97); // Osama
console.log(myMessage);

/////////

// concat(String1, String2, String3, ..., StringN)


var myMessage1 = "Hello I Love",
    myMessage2 = "PHP And JavaScript",
    myAll = myMessage1.concat(" " + myMessage2 + " And Python");

console.log(myMessage1);
console.log(myMessage2);
console.log(myAll);

/////////////////////////
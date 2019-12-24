/*global console, alert, document, prompt*/

/////////////////////////

// charAt(index)

var myString = "I Love JavaScript Too Much, JavaScript is Fun";
console.log(myString);

console.log(myString.charAt(2)); // L
console.log(myString.charAt(myString.length - 1)); // h

/////////

// charCodeAt(index) => Returns The Uni-code

console.log(myString);

console.log(myString.charCodeAt(2)); // 76
console.log(myString.charCodeAt(myString.length - 1)); // 104

/////////

// replace(value, newValue)

console.log(myString);

console.log(myString.replace("JavaScript", "PHP")); // "I Love PHP Too Much, JavaScript is Fun"
console.log(myString.replace(/JavascriPt/gi, "PHP")); // "I Love PHP Too Much, PHP is Fun"

/////////////////////////
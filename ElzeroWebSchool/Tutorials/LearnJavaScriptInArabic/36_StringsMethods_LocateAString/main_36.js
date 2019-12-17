/*global console, alert, document, prompt*/

/////////////////////////

// Revision

var myString = "I'm In Love With JavaScript, Also Love JAVA";
console.log(myString);

/////////

// Any Search Method is Case sensitive, Untill We Discuss 'Regular Expressions' Later

// Syntax: indexOf( Value, Start Position ) // Default Start = 0 // Starts Searching From The Beginning To The End
console.log(myString.indexOf("Love")); // 7

// Syntax: LastIndexOf( Value, Start Position ) // Default Start = 0 // Starts Searching From The End To The Beginning
console.log(myString.lastIndexOf("Love", 15));

// Syntax: search( Value ); // Usually Comes With Regular Expressions => Discussed Later
console.log(myString.search(/Love/i)); // 7

/////////////////////////
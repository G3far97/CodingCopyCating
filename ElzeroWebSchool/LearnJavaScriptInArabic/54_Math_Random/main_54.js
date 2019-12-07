/*global console, alert, document, prompt*/

/////////////////////////

/*
    Random Syntax: Math.random(); // Generates A Random Number Between [ 0, 1 [
*/

var x = Math.random(),
    myEndPattern = 10;
console.log(Math.floor((x * myEndPattern) + 1)); // A Random Integer Between [1, 10]

/////////////////////////
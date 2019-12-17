/*global console, alert, document, prompt*/

/////////////////////////

/*
    Regular Expression Syntax:
    /pattern/attributes

    Used With => Search | Replace | Match | Split | Test

    Attributes List:
    [ i ] => Case Insensitive
    [ g ] => Global Search
    [ m ] => Multi Line Search

*/

var string = "I Love Elzero Web School",
    result1 = string.search(/L/),
    result2 = string.search(/l/);

console.log(result1); // 2
console.log(result2); // 8

var result3 = string.replace(/L/igm, "@");

console.log(result3); // "I @ove E@zero Web Schoo@"

/////////////////////////
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

    Brackets Usage:
    [...] Character
    [^...] Not Character
    [a-z] Range Small Letters
    [A-Z] Range Capital Letters
    [0-9] Range Numbers
    [^a-z] Not Range Small Letters
    [^A-Z] Not Range Capital Letters
    [^0-9] Not Range Numbers
    [A-g] = [A-Z] + [a-g]
    [0-9a-z] Double Range

*/

var string = "I Love Elzero Web School",
    result1 = string.search(/L/),
    result2 = string.search(/l/);

console.log(result1); // 2
console.log(result2); // 8

var result3 = string.replace(/L/igm, "@");

console.log(result3); // "I @ove E@zero Web Schoo@"

/////////

var result4 = string.replace(/[e]/ig, "@");

console.log(result4); // "I Lov@ @lz@ro W@b School"

/////////

var result5 = string.replace(/[^e]/ig, "@");

console.log(result5); // "@@@@@e@E@@e@@@@e@@@@@@@@"

/////////

var result6 = string.replace(/[a-e]/g, "@");

console.log(result6); // "I Lov@ Elz@ro W@@ S@hool"

/////////

var result7 = string.replace(/[A-E]/g, "@");

console.log(result7); // "I Love @lzero Web School"

/////////

var result8 = string.replace(/[A-g]/g, "@");

console.log(result8); // "@ @ov@ @lz@ro @@@ @@hool"

/////////

var result9 = string.replace(/[0-9a-z]/g, "@");

console.log(result9); // "I L@@@ E@@@@@ W@@ S@@@@@"

/////////////////////////
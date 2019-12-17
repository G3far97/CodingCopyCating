/*global console, alert, document, prompt*/

/////////////////////////

var myString = "I 'Love' \"Programming\" \\Languages\\";
console.log(myString); // "I 'Love' "Programming" \Languages\"

console.log(myString.length); // 34

/////////

var myString2 = 120,
    myNewString2 = myString2.toString();
console.log(myString2); // 120
console.log(typeof(myString2)); // number

console.log(myNewString2); // "120"
console.log(typeof(myNewString2)); // string

var myString3 = 120,
    myNewString3 = myString3.toString();
console.log(myString3); // 120
console.log(typeof(myString3)); // number

console.log(myNewString3); // "120"
console.log(typeof(myNewString3)); // string

/////////

var myString4 = "I Love Programming Languages",
    mySearch4 = myString4.indexOf("Love"),
    mySearch44 = myString4.indexOf("L", 10);

console.log(myString4); // "I Love Programming Languages"
console.log(mySearch4); // 2
console.log(mySearch44); // 19

/////////

var myString5 = "I Love Programming Languages",
    mySearch5 = myString5.lastIndexOf("Love"),
    mySearch55 = myString5.lastIndexOf("L", 10);

console.log(myString5); // "I Love Programming Languages"
console.log(mySearch5); // 2
console.log(mySearch55); // 2

/////////

var myString6 = "I Love Programming Languages",
    mySearch6 = myString6.search("Love");

console.log(myString6); // "I Love Programming Languages"
console.log(mySearch6); // 2

/////////

var myString7 = "I Love Programming Languages",
    mySplit7 = myString7.split(""),
    mySplit77 = myString.split(" ", 2);

console.log(myString7); // "I Love Programming Languages"
console.log(mySplit7); // (28) ["I", " ", "L", "o", "v", "e", " ", "P", "r", "o", "g", "r", "a", "m", "m", "i", "n", "g", " ", "L", "a", "n", "g", "u", "a", "g", "e", "s"]
console.log(mySplit77); // (2) ["I", "'Love'"]

/////////

var myString8 = "I Love Programming Languages",
    mySlice8 = myString8.slice(2),
    mySlice88 = myString8.slice(2, 6),
    mySlice888 = myString8.slice(-12); // Neither Recommended Nor Globally Supported

console.log(myString8); // "I Love Programming Languages"
console.log(mySlice8); // "Love Programming Languages"
console.log(mySlice88); // "Love"
console.log(mySlice888); // "ng Languages"

/////////

var myString9 = "I Love Programming Languages",
    mySubstr9 = myString9.substr(2),
    mySubstr99 = myString9.substr(2, 6),
    mySubstr999 = myString9.substr(-12);

console.log(myString9); // "I Love Programming Languages"
console.log(mySubstr9); // "Love Programming Languages"
console.log(mySubstr99); // "Love P"
console.log(mySubstr999); // "ng Languages"

/////////

var myString10 = "I Love Programming Languages",
    mySubstring10 = myString10.substring(2), // Substring == Slice
    mySubstring1010 = myString10.substring(2, 6),
    mySubstring101010 = myString10.substring(-12);

console.log(myString10); // "I Love Programming Languages"
console.log(mySubstring10); // "Love Programming Languages"
console.log(mySubstring1010); // "Love"
console.log(mySubstring101010); // "I Love Programming Languages"

/////////

var myString11 = "I Love Programming Languages",
    myChar11 = myString11.charAt(4),
    myChar111 = myString11.charCodeAt(4),
    myChar1111 = myString11.charCodeAt("v");

console.log(myString11); // "I Love Programming Languages"
console.log(myChar11); // 'v'
console.log(myChar111); // 118
console.log(myChar1111); // 73

/////////

var myString12 = "I Love Programming Languages",
    myReplace12 = myString12.replace("L", "X"),
    myReplace1212 = myString12.replace(/l/ig, "X");

console.log(myString12); // "I Love Programming Languages"
console.log(myReplace12); // "I Xove Programming Languages" // Just The First Incident
console.log(myReplace1212); // "I Xove Programming Xanguages" // All Incidents: Thanks To 'g' => Global, A Regular Expression

/////////

var myString13 = "I Love Programming Languages",
    myConcat13 = myString13.concat(" Too Much").toLowerCase(),
    myConcat1313 = myString13.concat(" Too Much").toUpperCase().split(" ", 3);

console.log(myString13); // "I Love Programming Languages"
console.log(myConcat13); // "i love programming languages too much"
console.log(myConcat1313); // (3) ["I", "LOVE", "PROGRAMMING"]

/////////

var myString14 = "                I Love Programming Languages      ",
    myTrim14 = myString14.trim(),
    myLink14 = myString14.link("http://www.google.com");

console.log(myString14); // "                I Love Programming Languages      "
console.log(myTrim14); // "I Love Programming Languages"
console.log(myLink14); // "a href="http://www.google.com">                I Love Programming Languages      </a>"

/////////////////////////
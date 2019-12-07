/*global console, alert, document, prompt*/

/////////////////////////

// Array Creation & Check

var myMsg = "Welcome To Elzero Web School";
console.log(myMsg);

if (Array.isArray(myMsg)) {
    console.log("Yes, This is An Array");
} else {
    console.log("No, This Is Not An Array");
}

myMsg = [
    "Msg 4", // Index = 0, Length = 1
    "Msg 1", // Index = 1, Length = 2
    "Msg 2", // Index = 2, Length = 3
    "Msg 3"  // Index = 3, Length = 4
];
console.log(myMsg);

if (Array.isArray(myMsg)) {
    console.log("Yes, This is An Array");
} else {
    console.log("No, This Is Not An Array");
}

/////////

// Array ( Get / Set ) Length

console.log("Length = " + myMsg.length);

myMsg.length = 2;
console.log(myMsg);
console.log("Length = " + myMsg.length);

/////////

// Array Conversion To String & 'join'

console.log(myMsg.toString());

var myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(myMsg.join(" | "));

/////////

// Adding Items Into The Array

console.log(myMsg);
myMsg[myMsg.length] = "Msg 5";
console.log(myMsg);

myMsg.push("Msg 6");
console.log(myMsg);

myMsg.unshift("Msg 0");
console.log(myMsg);

myMsg.splice(1, 0, "Item1", "Item2");
console.log(myMsg);

/////////

// Removing Items From The Array

console.log(myMsg.pop());
console.log(myMsg);

console.log(myMsg.shift());
console.log(myMsg);

myMsg.splice(1, 3, "Item1");
console.log(myMsg);

/////////

// Array Sorting & Reversing

myMsg.reverse();
console.log(myMsg);

myMsg.sort();
console.log(myMsg);

myMsg.reverse();
console.log(myMsg);

/////////

// Array Combining & Slicing

console.log(myMsg.slice(1, 2));
console.log(myMsg.slice(-2, -1));

var myMsg2 = [
    "One",
    "Two"
];
console.log(myMsg2);
console.log(myMsg.concat(myMsg2));

/////////

// Searching In An Array

console.log(myMsg.indexOf("Msg 5", 1)); // -1: Not Found
console.log(myMsg.indexOf("Item1")); // 1: Index Number 1

console.log(myMsg.lastIndexOf("Msg 5", 1)); // 0: Index Number 0
console.log(myMsg.lastIndexOf("Item1")); // 2: Index Number 2

/////////////////////////
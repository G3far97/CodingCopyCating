/*global console, document*/

/////////////////////////

// Single Line Comment

/*

Multi Line Comment Line 1
Multi Line Comment Line 2

*/

/////////////////////////

/*
*** Version 1.0
*** This is Test Comment
*** This is Line 2
*** This is Last Line
*/

/////////////////////////

// Some Vars
var x = 10, y = 20, z = 100, name = "Osama", Name = "Ahmed", firstName = "Mahmoud", theLastName = "Sayed";

// Simple Function
// This Type of Function Works One Per Time: The Last One, So Comment Unwanted Statments When You Test
document.getElementById("test").innerHTML = "Hello JavaScript From JS File - Double Quotation"; // Simple Function
document.getElementById("test").innerHTML = 'Hello JavaScript From JS File - Single Quotation';
document.getElementById("test").innerHTML = z / y;
document.getElementById("test").innerHTML = Name;
document.getElementById("test").innerHTML = theLastName;

// Condition
if (x + y === 40) {
    console.log("Good");
} else {
    console.log("Bad");
}

/////////////////////////
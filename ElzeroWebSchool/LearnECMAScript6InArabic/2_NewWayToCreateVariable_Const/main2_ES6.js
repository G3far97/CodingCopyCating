/*global console, window*/

/*
    New Way To Create Variables let, const

    var
    - Function Scope
    - Can Be ReDeclared
    - Undefined When Accessing A Variable Before It's Declared
    - Create Properties in the Window Object

    let
    - Block Scope
    - Can Not Be ReDeclared
    - ReferenceError When Accessing A Variable Before It's Declared
    - Does Not Create Properties in the Window Object

    const
    - Block Scope
    - Can Not Be ReDeclared
    - ReferenceError When Accessing A Variable Before It's Declared
    - Does Not Create Properties in the Window Object

*/

/////////////////////////

/*
    var varName;
    console.log(varName); // Undefined
    varName = 1;
    console.log(varName); // 1

    var varName2 = 1;
    console.log(varName2); // 1
*/

/////////

// var: Function Scope

function varTest() {
    "use strict";
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // 2
    }
    console.log(x); // 2
    return 'Done';
}

console.log(varTest()); // "Done"

////

// let: Block Scope

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x); // 2
    }
    console.log(x); // 1
    return 'Done';
}

console.log(letTest()); // "Done"

/////////

// var: You Can Redeclare

var y = 1;
var y = 2; // Redeclare
console.log(y); // 2

// let: You Can Not Redeclare

// let z = 1;
// let z = 2;
// console.log(z); // SyntaxError: Cannot Redeclare With 'let'

/////////

// var: Can Access Variables Before Declaration

console.log(w); // undefined
var w = 1;

// let: Can Not Access Variables Before Declaration

// console.log(w1); // ReferenceError: w1 is Not Declared !
// let w1 = 1;

/////////

// var: Can Access Global Variables

var osama = 1;
console.log(window.osama); // 1

// let: Can Not Access Global Variables

let ahmed = 2;
console.log(window.ahmed); // undefined

/////////////////////////



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
    = Can Be Updated Later

    const
    - Block Scope
    - Can Not Be ReDeclared
    - ReferenceError When Accessing A Variable Before It's Declared
    - Does Not Create Properties in the Window Object
    = Can Not Be Updated Later => TypeError

*/

/////////////////////////

// const SETTINGS = 1;
// var SETTINGS = 2;
// console.log(SETTINGS); // SyntaxError: Identifier 'SETTINGS' has already been declared

const SETTINGS = 1;
if(true) {
    const SETTINGS = 2;
    console.log(SETTINGS); // 2
}
console.log(SETTINGS); // 1

const LANGUAGES = [];
LANGUAGES.push("HTML", "CSS", "JS");
console.log(LANGUAGES); // (3) ["HTML", "CSS", "JS"]

const OBJECT = {
    name: "Osama",
    sex: "male"
}
OBJECT.name = "Ahmed";
console.log(OBJECT); // {name: "Ahmed", sex: "male"}

const OBJECT2 = {
    name: "Ahmed",
    sex: "male"
}
Object.freeze(OBJECT2);
OBJECT2.name = "Gaafar";
console.log(OBJECT2); // {name: "Ahmed", sex: "male"}

/////////////////////////



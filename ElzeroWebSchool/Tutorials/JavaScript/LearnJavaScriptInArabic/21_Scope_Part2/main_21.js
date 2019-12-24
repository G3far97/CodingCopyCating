/*global console, alert, document, prompt*/

/////////////////////////

// // Scope A: Global
// // x Is Accessed From Everywhere
// var x = 1;
// function testFunc() {
//     // Scope B
//     // x Is Accessed From Scope B + Scope C
//     "use strict";
//     var x = 5;
//     function testChild() {
//         // Scope C
//         var calc = x + 2; // calc = 5 + 2
//         console.log(calc); // 7
//         console.log(x); // 5
//     }
//     console.log(x); // 5
//     return testChild();
// }
// testFunc();
// console.log(x + 2); // 1 + 2 = 3

/////////

// var myName = "Ahmed";
// function testParent() {
//     "use strict";
//     var myName = "Hisham";
//     console.log(myName);
//     function testChild() {
//         var myName = "Fouad";
//         console.log(myName);
//         function testGrandChild() {
//             var myName = "Gaafar";
//             console.log(myName);
//         }
//         return testGrandChild();
//     }
//     return testChild();
// }
// console.log(myName);
// testParent();

/////////////////////////
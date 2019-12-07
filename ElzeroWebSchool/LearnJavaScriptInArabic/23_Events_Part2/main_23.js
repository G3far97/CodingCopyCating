/*global console, alert, document, prompt*/

/////////////////////////

// var myInput = document.getElementById("input"),
//     myDiv = document.getElementById("div"),
//     myButton = document.getElementById("button");
// console.log(myInput);
// console.log(myDiv);
// // element.event = function functionName(){ // Code }
// myButton.onclick = function calcUsd() {
//     "use strict";
//     myDiv.innerHTML = myInput.value * 3.75;
// };

/////////

var myInput1 = document.getElementById("input1"),
    myInput2 = document.getElementById("input2"),
    myInput3 = document.getElementById("input3"),

    myDiv1 = document.getElementById("div1"),
    myDiv2 = document.getElementById("div2"),
    myDiv3 = document.getElementById("div3");

// element.event = function functionName(){ // Code }

myInput1.onkeydown = function calcUsd() {
    "use strict";
    myDiv1.innerHTML = myInput1.value * 3.75;
};

myInput2.onkeypress = function calcUsd() {
    "use strict";
    myDiv2.innerHTML = myInput2.value * 3.75;
};

myInput3.onkeyup = function calcUsd() {
    "use strict";
    myDiv3.innerHTML = myInput3.value * 3.75;
};

/////////////////////////
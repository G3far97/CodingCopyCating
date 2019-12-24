/*global console, alert, document, prompt*/

/////////////////////////

var myDiv = document.getElementById("div");
myDiv.onmouseover = function () {
    "use strict";
    myDiv.innerHTML = "You Hovered on Me!";
};

myDiv.onmouseout = function () {
    "use strict";
    myDiv.innerHTML = "You Have Gone :(";
};

/////////

var myInput = document.getElementById("input"),
    myDiv2 = document.getElementById("div2"),
    myCurrency = document.getElementById("currency"),
    myInput2 = document.getElementById("input2"),
    myDiv3 = document.getElementById("div3");

myInput.onchange = function () {
    "use strict";
    myDiv2.innerHTML = myInput.value * 3.75;
};

myCurrency.onchange = function () {
    "use strict";
    myDiv3.innerHTML = "Worth " + myInput2.value * myCurrency.value + " Egyptian Pounds";
};

/////////////////////////
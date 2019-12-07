/*global console, alert, document, prompt*/

/////////////////////////

var friendOne = "Ross",
    friendTwo = "Monica",
    friendThree = "Rachel",
    friendFour = "Chandler",
    friendFive = "Pheope",
    friendSix = "Joey";

// Arrays Are zero-based Data Structure: The First Element is At Index 0


/////////

// Array Creation
// // 1. Constructor Way: Not Recommended
// var friends1 = new Array();
// friends1[0] = "Ross";
// friends1[1] = "Monica";
// friends1[2] = "Rachel";
// friends1[3] = "Chandler";
// friends1[4] = "Pheope";
// friends1[5] = "Joey";
// console.log(friends1);

// var friends2 = new Array("Ross", "Monica", "Rachel", "Chandler", "Pheope", "Joey");
// console.log(friends2);

// var friends3 = new Array(
//     "Ross",
//     "Monica",
//     "Rachel",
//     "Chandler",
//     "Pheope",
//     "Joey"
// );
// console.log(friends3);

/////////

// Array Creation
// 2. Literal Way: Preferable
var friends4 = [];
friends4[0] = "Ross";
friends4[1] = "Monica";
friends4[2] = "Rachel";
friends4[3] = "Chandler";
friends4[4] = "Pheope";
friends4[5] = "Joey";
console.log(friends4);

var friends5 = ["Ross", "Monica", "Rachel", "Chandler", "Pheope", "Joey"];
console.log(friends5);

var friends6 = [
    "Ross",
    "Monica",
    "Rachel",
    "Chandler",
    "Pheope",
    "Joey"
];
console.log(friends6);

/////////////////////////

/*
    Array Accessing

    var arrayName = ["Element1", "Element2", "Element3"];
    arrayName[0] = Element1
    arrayName[1] = Element2
    arrayName[2] = Element3
*/

console.log(friends6[0]); // Ross
console.log(friends6[1]); // Monica
console.log(friends6[2]); // Rachel
console.log(friends6[3]); // Chandler
console.log(friends6[4]); // Pheope
console.log(friends6[5]); // Joey

/////////////////////////

/*
    Check if it's an Array or Not !

    if(Array.isArray(variableName)) {
        // Code to execute
    }
*/

/////////

// 1

if (Array.isArray(friendOne)) {
    console.log("Good :) This is an Array");
} else {
    console.log("Bad :( This is not an Array");
}

if (Array.isArray(friends6)) {
    console.log("Good :) This is an Array");
} else {
    console.log("Bad :( This is not an Array");
}

/////////

// 2

if (friendOne.constructor === Array) {
    console.log("Good :) This is an Array");
} else {
    console.log("Bad :( This is not an Array");
}

if (friends6.constructor === Array) {
    console.log("Good :) This is an Array");
} else {
    console.log("Bad :( This is not an Array");
}

/////////////////////////
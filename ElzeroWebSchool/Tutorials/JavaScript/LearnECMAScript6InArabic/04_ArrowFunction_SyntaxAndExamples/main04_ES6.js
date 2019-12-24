/*
    Arrow Function:
    Identifier => Expression


    remove the "function" keyword and add an arrow operator before the function body
    one statement to be executed?: You can remove the curly brackets and the "return".
    one parameter?: You can remove the brackets of parameters.

    IMPORTANT NOTE: Arrow function DOES NOT replace the regular function.
*/

/////////////////////////

function test() {
    return 2;
}

console.log(test());

/////////////////////////

// Regular function with no parameters

let regularTest = function() {
    return 22;
}

console.log(regularTest());

/////////

// Arrow function with no parameters: () or _

let arrowTestOne = () => 222;

console.log(arrowTestOne());

let arrowTestOne2 = _ => 2222;

console.log(arrowTestOne2());

/////////////////////////

// Regular function with one parameter

let regularTest2 = function(param) {
    return param * 2;
}

console.log(regularTest2(16));

/////////

// Arrow function with one parameter

let arrowTestTwo = param => param * 2;

console.log(arrowTestTwo(16));

/////////////////////////

// Regular function with multiple parameters

let regularTest3 = function(param1, param2) {
    return param1 * param2;
}

console.log(regularTest3(10, 30));

/////////

// Arrow function with multiple parameters

let arrowTestThree = (param1, param2) => param1 * param2;

console.log(arrowTestThree(10, 30));

/////////////////////////
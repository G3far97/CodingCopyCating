// normal function statement
function sayHi(){
    console.log('hi'); // "hi"
}
sayHi();

/////

// function expression
var sayBye = function(){ // Anonymous Function
    console.log('bye'); // "bye"
}
sayBye();

/////

function callFunction(fun){
    fun(); // Calling a Function in Another Function
}

/////

callFunction(sayBye); // "bye"

/////
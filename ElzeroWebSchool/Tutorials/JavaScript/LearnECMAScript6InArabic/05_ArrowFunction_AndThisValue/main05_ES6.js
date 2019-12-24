/*
    Arrow Function:
    Doesn't have it's own "this" scope, The regular functions have.
    Instead, it takes it's "this" value from it's own enclosing context.
*/

/////////////////////////

let test = function() {
    document.getElementById('show').innerHTML = this;
}

// window object called the function test
window.onload = test; // [object Window]

// button object called the function test
document.getElementById('button').addEventListener('click', test); // [object HTMLButtonElement]

/////////

let test2 = () => document.getElementById('show2').innerHTML = this;

// window object called the function test
window.onload = test2;

// button object called the function test
document.getElementById('button2').addEventListener('click2', test2);

/////////////////////////

// This will output: NaN, because that the second "this" doesn't see the first one

function person1() {
    this.age = 0;
    setInterval(function() {
        this.age++;
        console.log("Person 1's Age: " + this.age + " sec");
    }, 1000);
}

let user1 = new person1();

/////////

// Since ECMAScript 3 until ECMAScript 5: This was the solution

function person2() {
    let that = this;
    this.age = 0;
    setInterval(function() {
        that.age++;
        console.log("Person 2's Age: " + that.age + " sec");
    }, 1000);
}

let user2 = new person2();

/////////

// Now in ECMAScript 6, and with the arrow functions:

function person3() {
    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log("Person 3's Age: " + this.age + " sec");
    }, 1000);
}

let user3 = new person3();

/////////////////////////
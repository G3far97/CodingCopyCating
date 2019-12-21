/*
    Enhanced Object Literals
    1- Property value shorthand
    2- Methods shorthand
    3- Computed object property name
*/

/////////////////////////

// Regular:

const username = 'Osama',
website = 'Elzero Web School';

const userOne = {
    username: username,
    website: website
};

console.log(userOne); // {username: "Osama", website: "Elzero Web School"}

/////////

// Property value shorthand:

const userOne1 = {
    username,
    website
};

console.log(userOne1); // {username: "Osama", website: "Elzero Web School"}

/////////////////////////

// Regular:

const userTwo = {
    myMethod: function (param) {
        return param;
    }
};

console.log(userTwo.myMethod('Hello from parameter.')); // Hello from parameter.

/////////

// Methods shorthand:

const userTwo1 = {
    myMethod (param) {
        return param;
    }
};

console.log(userTwo1.myMethod('Hello from parameter.')); // Hello from parameter.

/////////////////////////

// Regular:

// Normal variable
let myVariable = 'key';

// Create new object
const myObject = { myProperty: 'MyValue' };

// Add static property and assign a value
myObject['Osama'] = "Value";
console.log(myObject); // {myProperty: "MyValue", Osama: "Value"}

// Add dynamic property and assign a value
myObject[myVariable] = "Value";
console.log(myObject); // {myProperty: "MyValue", Osama: "Value", key: "Value"}

/////////

// Computed object property name:

let myVariable1 = 'key';

const myObject1 = {
    myProperty: 'MyValue',
    [myVariable1]: 'Value'
};

console.log(myObject1); // {myProperty: "MyValue", key: "Value"}

/////////////////////////

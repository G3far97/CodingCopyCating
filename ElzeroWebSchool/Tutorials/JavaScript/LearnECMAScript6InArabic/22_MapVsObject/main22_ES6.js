/*
    Map
*/

/////////////////////////

// Map concept before ES6:
/// Also Object override attributes types that has the same name

var user = {}; // Empty Object
user['username'] = 'Osama';
user.website = 'Elzero.org';
user['10'] = 'String';
user[10] = 'Number';

console.log(user); // {username: "Osama", website: "Elzero.org"}
console.log(user.username); // Osama
console.log(user['website']); // Elzero.org

/////////

// ES6:

let myMap = new Map(); // Empty Map

/// Chaining (adding) the map's contents:
myMap.set('10', 'String')
    .set(10, 'Number')
    .set(false, 'Boolean')
    .set({a: 1, b: 2}, 'Object')
    .set(function doSomething() {}, 'Function');

console.log(myMap);
// Map(5) {"10" => "String", 10 => "Number", false => "Boolean", {…} => "Object", ƒ => "Function"}

/////////

let myMap2 = new Map(); // Empty Map

/// Adding map's contents one by one:
myMap2.set('10', 'String');
myMap2.set(10, 'Number');
myMap2.set(false, 'Boolean');
myMap2.set({a: 1, b: 2}, 'Object');
myMap2.set(function doSomething() {}, 'Function');

console.log(myMap2);
// Map(5) {"10" => "String", 10 => "Number", false => "Boolean", {…} => "Object", ƒ => "Function"}

/////////

/// Creating and adding in one step:
let myMap3 = new Map([
    ['10', 'String'],
    [10, 'Number'],
    [false, 'Boolean'],
    [{a: 1, b: 2}, 'Object'],
    [function doSomething() {}, 'Function']
]);

console.log(myMap3);
// Map(5) {"10" => "String", 10 => "Number", false => "Boolean", {…} => "Object", ƒ => "Function"}

/////////////////////////
/*
    Map Methods
*/

/////////////////////////

// Map declaration & initialization

let myMap = new Map([
    ['10', 'String'],
    [10, 'Number'],
    [false, 'Boolean'],
    [{a: 1, b: 2}, 'Object'],
    [function doSomething() {}, 'Function']
]);

console.log(myMap);
// Map(5) {"10" => "String", 10 => "Number", false => "Boolean", {…} => "Object", ƒ => "Function"}

/////////////////////////

// Map Methods

/// size: counts the map elements
console.log(`My Map Elements Count Is: ${myMap.size}`); // My Map Elements Count Is: 5

/// get: retrieves map elements
console.log(`Using Get Method: ${myMap.get('10')}`); // Using Get Method: String
console.log(`Using Get Method: ${myMap.get(10)}`); // Using Get Method: Number

/// has: checks the existence of a map element
console.log(`Using Has Method: ${myMap.has('20')}`); // false
console.log(`Using Has Method: ${myMap.has(false)}`); // true

/// delete: removes a map element
console.log(`Using Delete Method: ${myMap.delete(false)}`); // Using Delete Method: true
console.log(`My Map Elements Count Is: ${myMap.size}`); // My Map Elements Count Is: 4

/// clear: removes all map elements
myMap.clear();
console.log(`My Map Elements Count Is: ${myMap.size}`); // My Map Elements Count Is: 0

/////////////////////////
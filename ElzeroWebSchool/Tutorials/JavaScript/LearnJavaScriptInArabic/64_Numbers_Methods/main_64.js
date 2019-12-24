/*global console, alert, document, prompt*/

/////////////////////////

// Number.toString(); // Converts The 'Number' To A String

var x = 100,
    newX = x.toString();

console.log(x);
console.log(typeof(x));
console.log(newX);
console.log(typeof(newX));

/////////

// Number1.toExponential(Number2[Opt]);

var x2 = 1000,
    newX2 = x2.toExponential(),
    newX22 = x2.toExponential(2);

console.log(x2);
console.log(typeof(x2));
console.log(newX2);
console.log(typeof(newX2));
console.log(newX22);
console.log(typeof(newX22));

/////////

// Number1.toFixed(Number2[Opt]) // Rounding The 'Number1' To The Nearest 'Number2' Digits After The Floating Point

var x3 = 1000.463454564353,
    newX3 = x3.toFixed(), // Default Value = 0 Digits
    newX33 = x3.toFixed(2);

console.log(x3);
console.log(typeof(x3));
console.log(newX3);
console.log(typeof(newX3));
console.log(newX33);
console.log(typeof(newX33));

/////////

// ParseInt("String"); // Converts The "String" Into A Number // The String Must Start With A Number

var x4 = "100px",
    newX4 = parseInt(x4);

console.log(x4);
console.log(typeof(x4));
console.log(newX4);
console.log(typeof(newX4));

/////////////////////////
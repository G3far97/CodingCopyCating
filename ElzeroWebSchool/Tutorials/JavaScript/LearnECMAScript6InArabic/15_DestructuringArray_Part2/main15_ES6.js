/*
    Destructuring
    - Object
    - Array
    - Parameter
*/

/////////////////////////

// Destructuring Arrays [nested arrays], skipping and default parameter:

const food = ["Burger", "Pizza", "Chicken", ["Apple", "Banana", "Mango", ["EgyOrange", "PakistanOrange"]]];

const [ one, two, three, [fr1, , fr3, [o1, o2], fr4 = 'Default'] ] = food;

console.log(`The Food I love is: ${one}, ${two} and ${three}, And my fruits are: ${fr1}, ${fr3} and ${fr4}, And i love all kinds of Orange, specially: ${o1} and ${o2}.`);
// The Food I love is: Burger, Pizza and Chicken, And my fruits are: Apple, Mango and Default, And i love all kinds of Orange, specially: EgyOrange and PakistanOrange.

/////////

// Destructuring Arrays: rest operator:

const food1 = ["Burger", "Pizza", "Chicken", "Apple", "Banana", "Mango"];

const [ one1, two1, three1, ...otherFood1 ] = food1;

console.log(`The Food I love is: ${one}, ${two}, ${three} and ${otherFood1}.`);
// The Food I love is: Burger, Pizza, Chicken and Apple,Banana,Mango.

/////////////////////////
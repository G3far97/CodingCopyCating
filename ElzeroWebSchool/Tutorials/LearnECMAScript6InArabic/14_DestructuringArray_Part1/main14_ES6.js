/*
    Destructuring
    - Object
    - Array
    - Parameter
*/

/////////////////////////

// Destructuring Arrays:

const food = ["Burger", "Pizza", "Chicken"];

const [ one, two, three ] = food;

console.log(`The Food I love is: ${one}, ${two} and ${three}.`); // The Food I love is: Burger, Pizza and Chicken.

/////////

// Re-assignment:

let one1 = 'Default',
    two1 = 'Default',
    three1 = 'Default'

const food1 = ["Burger", "Pizza", "Chicken"];

[ one1, two1, three1 ] = food1;

console.log(`The Food I love is: ${one1}, ${two1} and ${three1}.`); // The Food I love is: Burger, Pizza and Chicken.

/////////

// Default parameter:

const food2 = ["Burger", "Pizza", "Chicken"];

const [ one2, two2, three2 = 'Default', four2 = 'Default' ] = food2;

console.log(`The Food I love is: ${one2}, ${two2}, ${three2} and ${four2}.`); // The Food I love is: Burger, Pizza, Chicken and Default.

/////////

// Skipping:

const food3 = ["Burger", "Pizza", "Chicken", "Meat", "Rice"];

const [ one3, , three3 = 'Default', four3 = 'Default' ] = food3;

console.log(`The Food I love is: ${one3}, ${three3} and ${four3}.`); // The Food I love is: Burger, Chicken, and Meat.

/////////////////////////
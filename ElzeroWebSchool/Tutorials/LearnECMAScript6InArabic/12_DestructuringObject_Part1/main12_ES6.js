/*
    Destructuring
    - Object
    - Array
    - Parameter
*/

/////////////////////////

// Destructuring using the regular way:

var user = {
    name: 'Ahmed',
    gender: 'Male',
    age: 23,
    city: 'cairo',
    website: 'Elzero'
};

var u = user.name,
    g = user.gender,
    a = user.age;

console.log(`My Name is ${u}, I'm a ${g}, I have ${a} years.`); // My Name is Ahmed, I'm a Male, I have 23 years.

/////////

// Destructuring using the new way:

const user2 = {
    name2: 'Mohamed',
    gender2: 'Male',
    age2: 20,
    city2: 'cairo',
    website2: 'Elzero'
};

const { name2, gender2, age2 } = user2;

console.log(`My Name is ${name2}, I'm a ${gender2}, I have ${age2} years.`); // My Name is Mohamed, I'm a Male, I have 20 years.

/////////////////////////

let name3 = 'Default',
    gender3 = 'Default',
    age3 = 'Default';

const user3 = {
    name3: 'Fatma',
    gender3: 'Female',
    age3: 18,
    city3: 'cairo',
    website3: 'Elzero'
};
    
({ name3, gender3, age3 } = user3);

console.log(`My Name is ${name3}, I'm a ${gender3}, I have ${age3} years.`); // My Name is Fatma, I'm a Female, I have 18 years.

/////////

const user4 = {
    name4: 'Ali',
    gender4: 'Male',
    age4: 21,
    city4: 'cairo',
    website4: 'Elzero'
};
    
const { name4, gender4, age4, city4 = 'Default', theme4 = 'Default' } = user4;

console.log(`My Name is ${name4}, I'm a ${gender4}, I have ${age4} years, I live in ${city4} and My favorite color theme is ${theme4}.`); // My Name is Ali, I'm a Male, I have 21 years.

/////////////////////////
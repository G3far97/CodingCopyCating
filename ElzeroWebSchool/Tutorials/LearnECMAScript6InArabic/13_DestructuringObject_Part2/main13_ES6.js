/*
    Destructuring
    - Object
    - Array
    - Parameter
*/

/////////////////////////

const user = {
    name: 'Ali',
    gender: 'Male',
    age: 21,
    city: 'cairo',
    website: 'Elzero'
};
    
const { name: theName, gender, theAge, city: theCity = 'Default', theme: theTheme = 'Default' } = user;

console.log(`My Name is ${theName}, I'm a ${gender}, I have ${theAge} years, I live in ${theCity} and My favorite color theme is ${theTheme}.`); // My Name is Ali, I'm a Male, I have undefined years, I live in cairo and My favorite color theme is Default.

/////////////////////////

const user2 = {
    name2: 'Ahmed',
    gender2: 'Male',
    age2: 23,
    city2: 'cairo',
    website2: 'Elzero',
    langs2: {
        html: '70%',
        css: '80%',
        js: '10%'
    }
};

const { name2, gender2, langs2 } = user2;

console.log(`My Name is ${name2}, I'm a ${gender2} and my languages are ${langs2}.`); // My Name is Ahmed, I'm a Male  and my languages are [object Object].
console.log(`My Name is ${name2}, I'm a ${gender2} and my languages are ${langs2.html}.`); // My Name is Ahmed, I'm a Male  and my languages are 70%.

/////////

const user22 = {
    name22: 'Ahmed',
    gender22: 'Male',
    age22: 23,
    city22: 'cairo',
    website22: 'Elzero',
    langs22: {
        html: '70%',
        css: '80%',
        js: '10%'
    }
};

const { name22, gender22, langs22: { html, css: theCss, python = 'Default' } } = user22;

console.log(`My Name is ${name22}, I'm a ${gender22} and my HTML progress: ${html}.`); // My Name is Ahmed, I'm a Male  and my HTML progress: 70%.
console.log(`My Name is ${name22}, I'm a ${gender22} and my languages are ${python} and ${theCss}.`); // My Name is Ahmed, I'm a Male  and my languages are Default and 80%.

/////////

const user3 = {
    name3: 'Ahmed',
    gender3: 'Male',
    age3: 23,
    city3: 'cairo',
    website3: 'Elzero',
    langs3: {
        html: '70%',
        css: '80%',
        js: '10%'
    }
};

const { html: html5, css: css3, js: js6 } = user3.langs3;

console.log(`My Name is ${html5}, I'm a ${css3} and my HTML progress: ${js6}.`); // My Name is 70%, I'm a 80% and my HTML progress: 10%.

/////////////////////////
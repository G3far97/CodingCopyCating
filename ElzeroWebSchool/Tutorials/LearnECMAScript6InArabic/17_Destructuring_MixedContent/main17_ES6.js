/*
    Destructuring
    - Object
    - Array
    - Parameter
*/

/////////////////////////

const user = {
    username: 'Ahmed',
    city: 'Cairo',
    skills: {
        html: '80%',
        css: '85%',
        js: ['VueJs', 'ReactJs', 'AngularJs']
    }
};

const { username, city, skills: { html, css, js: [ one, two, three ] } } = user;

console.log(`My name is ${username} and i live in ${city}.`); // My name is Ahmed and i live in Cairo.
console.log(`My HTML skills progress is ${html} and CSS is ${css}.`); // My HTML skills progress is 80% and CSS is 85%.
console.log(`I have knowledge in Js Frameworks, Like: ${one}, ${two} and ${three}.`); // I have knowledge in Js Frameworks, Like: VueJs, ReactJs and AngularJs.

/////////

const user1 = {
    username1: 'Ahmed',
    city1: 'Cairo',
    skills1: {
        html1: '80%',
        css1: '85%',
        js1: {
            frameOne1: 'VueJs',
            frameTwo1: 'ReactJs',
            frameThree1: 'AngularJs'
        }
    }
};

const { username1, city1, skills1: { html1, css1, js1: { frameOne1: one1, frameTwo1: two1, frameThree1: three1 } } } = user1;

console.log(`My name is ${username1} and i live in ${city1}.`); // My name is Ahmed and i live in Cairo.
console.log(`My HTML skills progress is ${html1} and CSS is ${css1}.`); // My HTML1 skills progress is 80% and CSS1 is 85%.
console.log(`I have knowledge in Js Frameworks, Like: ${one1}, ${two1} and ${three1}.`); // I have knowledge in Js Frameworks, Like: VueJs, ReactJs and AngularJs.

/////////////////////////
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

/////////////////////////

// Without Destructuring:

function showMyInfo1(user) {
    console.log(`My name is ${user.username} and i live in ${user.city}.`);
    console.log(`My HTML skills progress is ${user.skills.html} and CSS is ${user.skills.css}.`);
    console.log(`I have knowledge in Js Frameworks, Like: ${user.skills.js[0]}, ${user.skills.js[1]} and ${user.skills.js[2]}.`);
}

showMyInfo1(user);
/*
My name is Ahmed and i live in Cairo.
My HTML skills progress is 80% and CSS is 85%.
I have knowledge in Js Frameworks, Like: VueJs, ReactJs and AngularJs.
*/

/////////

// With Destructuring:

function showMyInfo2({ username, city, skills: { html, css, js: [ one, two, three ] } }) {
    console.log(`My name is ${username} and i live in ${city}.`);
    console.log(`My HTML skills progress is ${html} and CSS is ${css}.`);
    console.log(`I have knowledge in Js Frameworks, Like: ${one}, ${two} and ${three}.`);
}

showMyInfo2(user);
/*
My name is Ahmed and i live in Cairo.
My HTML skills progress is 80% and CSS is 85%.
I have knowledge in Js Frameworks, Like: VueJs, ReactJs and AngularJs.
*/

/////////////////////////
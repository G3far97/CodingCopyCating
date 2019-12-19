/*
    Default Parameters
*/

/////////////////////////

function showMyInfo(username, role, theme) {
    return `Hello ${username}, Your role is ${role}, Website theme is ${theme}.`;
}

console.log(showMyInfo('Ahmed', 'Admin', 'Tomato')); // Hello Ahmed, Your role is Admin, Website theme is Tomato.

console.log(showMyInfo()); // Hello undefined, Your role is undefined, Website theme is undefined.

/////////

// Regular:

function showMyInfo2(username, role, theme) {
    username = username === undefined? 'Default User': username;
    role = role === undefined? 'Default Role': role;
    theme = theme === undefined? 'Default Theme': theme;
    return "Hello " + username +
    ", Your role is " + role +
    ", Website theme is " + theme + ".";
}

console.log(showMyInfo2('Ahmed', 'Admin', 'Tomato')); // Hello Ahmed, Your role is Admin, Website theme is Tomato.

console.log(showMyInfo2()); // Hello Default User, Your role is Default role, Website theme is Default theme.

/////////

// Regular: Truthy || Falsy Pattern:

function showMyInfo22(username, role, theme) {
    username = username || 'Default User';
    role = role || 'Default Role';
    theme = theme || 'Default Theme';
    return "Hello " + username +
    ", Your role is " + role +
    ", Website theme is " + theme + ".";
}

console.log(showMyInfo22('Ahmed', 'Admin', 'Tomato')); // Hello Ahmed, Your role is Admin, Website theme is Tomato.

console.log(showMyInfo22()); // Hello Default User, Your role is Default role, Website theme is Default theme.

/////////

// ES6:

let showMyInfo3 = (username, role, theme) =>
`Hello ${username ||
    'Default User'}, Your role is ${role ||
        'Default Role'}, Website theme is ${theme ||
            'Default Theme'}.`;

console.log(showMyInfo3('Ahmed', 'Admin', 'Tomato')); // Hello Ahmed, Your role is Admin, Website theme is Tomato.

console.log(showMyInfo3()); // Hello Default User, Your role is Default role, Website theme is Default theme.

/////////

// ES6: Even better way:

let showMyInfo33 = (
username = 'Default User',
role = 'Default Role',
theme = 'Default Theme'
) => `Hello ${username}, Your role is ${role}, Website theme is ${theme}.`;

console.log(showMyInfo33('Ahmed', 'Admin', 'Tomato')); // Hello Ahmed, Your role is Admin, Website theme is Tomato.

console.log(showMyInfo33()); // Hello Default User, Your role is Default role, Website theme is Default theme.

/////////////////////////
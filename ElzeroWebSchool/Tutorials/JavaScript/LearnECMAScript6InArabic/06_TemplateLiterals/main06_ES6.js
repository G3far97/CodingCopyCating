/*
    Template Literals [Template Strings]
*/

/////////////////////////

/*
    Using regular way:
    ( "\n" & '+' ) ==> for multiple lines
    ( "String " + Variable + " String" ) ==> for including variables into strings
    ( "String " + ( variable === value? "value1": "value2" ) + " String" ) ==> for including variables into strings based on a condition
*/

const theKind = "Male";

let oldWay = "Hello it's me "+ (theKind === 'Male'? 'Mr.': 'Mrs.') +" Ahmed\n" +
"I'm "+ theKind +"\n" +
"I'm from Egypt\n\n" +
"I love all my friends";

console.log(oldWay);

/////////

/*
    Using this new way:
    ( `String` ) ==> for multiple lines
    ( `String ${Variable} String` ) ==> for including variables into strings
    ( `String ${( variable === value? "value1": "value2" )} String` ) ==> for including variables into strings based on a condition
*/

const theKind2 = "Male";

let newWay = `Hello it's me ${(theKind2 === 'Male'? 'Mr.': 'Mrs.')} Ahmed
I'm ${theKind2} 
I'm from Egypt

I love all my friends`;

console.log(newWay);

/////////////////////////

// Example from frameworks
// The new way:

let username = "Ahmed",
    age = 23;

const myHtmlMarkup = `
    <div class="card">
        <h2 class="name">${username}</h2>
        <span class="age">${age}</span>
    </div>
`;

console.log(myHtmlMarkup);

document.getElementById('myHtmlMarkup').innerHTML = myHtmlMarkup;

/////////

// Example from frameworks
// The regular way:

let username2 = "Ahmed",
    age2 = 23;

const myHtmlMarkup2 =
"    <div class=\"card\">\n" +
"        <h2 class=\"name\">"+ username2 +"</h2>\n" +
"        <span class=\"age\">" + age2 + "</span>\n" +
"    </div>";

console.log(myHtmlMarkup2);

document.getElementById('myHtmlMarkup2').innerHTML = myHtmlMarkup2;

/////////////////////////
/*
    Destructuring
    - Object
    - Array
    - Parameter
*/

/////////////////////////

// Regular way [old]:

var book = "video",
    video = "book";

console.log(`Book is ${book} and Video is ${video}.`); // Book is video and Video is book.

// Copy first variable into stash:
var stash = book;

// Swapping variables:
book = video;

console.log(`Book is ${book} and Video is ${video}.`); // Book is book and Video is book.

// Get Book value from stash:
video = stash;

console.log(`Book is ${book} and Video is ${video}.`); // Book is book and Video is video.

/////////

// ES6:

var book1 = "video1",
    video1 = "book1";

console.log(`Book1 is ${book1} and Video1 is ${video1}.`); // Book1 is video1 and Video1 is book1.

// Swapping variables:
[book1, video1] = [video1, book1];

console.log(`Book1 is ${book1} and Video1 is ${video1}.`); // Book1 is book1 and Video1 is video1.

/////////////////////////
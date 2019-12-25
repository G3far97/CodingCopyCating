const path = require('path');

// Base file name
console.log(path.basename(__filename)); // path_demo.js

// Directory name
console.log(path.dirname(__filename));
// E:\CodingCopyCating\TraversyMedia\Node.jsCrashCourse\reference

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename));
/*
    {
        root: 'E:\\',
        dir: 'E:\\CodingCopyCating\\TraversyMedia\\Node.jsCrashCourse\\reference',
        base: 'path_demo.js',
        ext: '.js',
        name: 'path_demo'
    }
*/

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
// E:\CodingCopyCating\TraversyMedia\Node.jsCrashCourse\reference\test\hello.html
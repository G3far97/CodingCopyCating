// var fs = require('fs');

// var readMe9_Node = fs.readFileSync('readMe9_Node.txt', 'utf8'); // blocking code
// fs.writeFileSync('writeMe9_Node.txt', readMe9_Node);

/////

// var fs = require('fs');

// fs.readFile('readMe9_Node.txt', 'utf8', function(err, data){
//    console.log(data);
// }); // Non-Blocking Code

// console.log('test');

/////

var fs = require('fs');

fs.readFile('readMe09_Node.txt', 'utf8', function(err, data){
   fs.writeFile('writeMeAsync09_Node.txt', data, function(err, data){});
}); // Non-Blocking Code

/////
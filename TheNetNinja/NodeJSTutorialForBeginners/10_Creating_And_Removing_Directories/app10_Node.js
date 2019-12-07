var fs = require('fs');
 /////

// fs.unlinkSync('writeMe10_Node.txt'); // Runs One Time Only ! // Deletes 'writeMe10_Node.txt' File

// fs.unlink('writeMeAsync10_Node.txt', function(err, data){}); // Runs One Time Only ! // Deletes 'writeMeAsync10_Node.txt' File // Non-Blocking Code

/////

// fs.mkdirSync('stuff10_Node'); // Create a Directory Called 'stuff10_Node'
// fs.rmdirSync('stuff10_Node'); // Remove the Directory Called 'stuff10_Node'

/////

// fs.mkdir('stuff10_Node', function(){
//     fs.readFile('readMe10_Node.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff10_Node/writeMe10_Node.txt', data, function(){});
//     });
// });

/////

// fs.rmdir('stuff10_Node'); // You Can't Remove A Non-Empty Directory

/////

// fs.unlink('./stuff10_Node/writeMe10_Node.txt', function(){
//     fs.rmdir('stuff10_Node', function(){});
// });

/////
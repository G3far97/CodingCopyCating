var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe15_Node.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe15_Node.txt')

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});

/////
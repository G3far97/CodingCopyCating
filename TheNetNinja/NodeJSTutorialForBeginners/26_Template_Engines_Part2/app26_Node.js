var express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index26_Node.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact26_Node.html');
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile26_Node', {person: req.params.name, data: data});
})

app.listen(3000);
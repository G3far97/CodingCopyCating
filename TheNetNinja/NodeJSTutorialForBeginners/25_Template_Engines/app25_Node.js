var express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index25_Node.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact25_Node.html');
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'ninja'};
    res.render('profile25_Node', {person: req.params.name, data: data});
})

app.listen(3000);
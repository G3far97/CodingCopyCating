var express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index28_Node');
});

app.get('/contact', function(req, res) {
    res.render('contact28_Node');
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile28_Node', {person: req.params.name, data: data});
})

app.listen(3000);
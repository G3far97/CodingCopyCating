var express = require('express');
var bodyParser = require('body-parser');

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index30_Node');
});

app.get('/contact', function(req, res) {
    // console.log(req.query);
    res.render('contact30_Node', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact-success30_Node', {data: req.body});
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile30_Node', {person: req.params.name, data: data});
})

app.listen(3000);
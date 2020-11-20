var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function (req, res) {
    res.render('form', {
        name: "Student Form"
    });
});

app.set('view engine', 'pug');
app.set('views', './public');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static('public'));

app.post('/', function (req, res) {
    console.log(req.body);
    var name = req.body.name;
    var company = req.body.company;
    var skill = req.body.skill;
    res.send(`<b>${name}</b> used these following skills:<b>${skill}</b> while doing internship at <b>${company}</b>`)
})

app.listen(3000);

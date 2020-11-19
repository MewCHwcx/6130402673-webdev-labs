
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Mew:miwmew50962@cluster0.0zer8.mongodb.net/schedule-tasks?retryWrites=true&w=majority";
const client = new MongoClient.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true}).then(client =>
    {
        const db = client.db("schedule-tasks")
        const collection = db.collection("tasks");
        console.log('Connected to Database');
        app.get('/', function(req, res) {
            res.render('form', {
                name: "Remaining schedule",               
                text: "19-11-2020 K'Roof's talk",
                task: "Tasks"
            });
        });
        
        app.set('view engine', 'pug');
        app.set('views', './public');
        
        app.use(bodyParser.json());
        
        app.use(bodyParser.urlencoded({extended: true}));
        
        app.use(upload.array());
        app.use(express.static('public'));

        app.post('/', function(req, res){
            console.log(req.body);
            var date = req.body.date;
            var task = req.body.task;
            res.send(`<li>${date}: ${task}</li>` )
            collection.insertOne(req.body).then(
                result => {
                    console.log(result);
                    res.redirect('/')
                }
            )
            .catch(error => console.error(error))
            
        })
    })
    

    
    app.listen(3000);

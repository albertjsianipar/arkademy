// depedencies
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// use depedencies
const app = express();
const db = require('./db');
const port = 3000;

// use public folder
app.use(express.static(__dirname + 'public'));

// parse urlnencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse json
app.use(bodyParser.json());

// get index page
app.get('/', function (req, res) {
    let groupQuery = "SELECT categories.id, categories.name AS category_name, GROUP_CONCAT(products.name ORDER BY products.name SEPARATOR ', ') AS products FROM categories JOIN products ON products.category_id = categories.id GROUP BY categories.id";

    db.query(groupQuery, function (err, results) {
        if (err) {
            console.log(err);
        }
        let groupResults = results;

        let categoryQuery = "SELECT * FROM categories";

        db.query(categoryQuery, function (err, results) {
            if (err) {
                console.log(err);
            }
            let categoryResults = results;
            res.render('index.ejs', { groupResults: groupResults, categoryResults: categoryResults });
        });

    });

});

// post form from index page
app.post('/', function(req, res){
    let stringId = req.body.id;
    let id = Number(stringId);
    let categoryName = req.body.cname;

    let postQuery = 'INSERT INTO categories(id, name) VALUES (' + id + ', "' + categoryName + '")';

    db.query(postQuery, function(err, results){
        if(err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

// connect to localhost
app.listen(port, function () {
    console.log('Server is connected in PORT : ' + port);
})
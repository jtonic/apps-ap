'use strict';

var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var router = express.Router();

var allowCrossDomain = function(req, res, next) {
    var allowedHost = [
        'http://localhost:5000'
    ];

    console.log('Origin: ' + req.headers.origin);

    if(allowedHost.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
        next();
    } else {
        res.send({auth: false});
    }
};

app.use(allowCrossDomain);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/users', function (req, res) {
    res.status(200).json({
        first_name: "Liviu",
        last_name: "Pazargic"
    });
});
app.post('/users', function (req, res) {
    console.log('First name: ' + req.body.first_name);
    console.log('Last name: ' + req.body.last_name);
});
app.listen(4000);

'use strict';

var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.get('/', function (req, res) {
    res.sendFile('index.html', option, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('file send');
        }
    });
});
app.listen(5000);

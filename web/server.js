'use strict';

var express = require('express');
var app = express();
var router = express.Router();

app.get('/', function (req, res) {
    var option = {
        root: __dirname + '/public/'
    };

    res.sendFile('index.html', option, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('file send');
        }
    });
});
app.listen(5000);

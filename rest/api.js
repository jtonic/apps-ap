'use strict';

var express = require('express');
var app = express();
var router = express.Router();

app.get('/', function (rqq, res) {
    res.status(404).json({"message": "not found!!!"});
});
app.listen(4000);

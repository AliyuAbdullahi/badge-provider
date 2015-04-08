// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// var mongoose = require('./config/mongoose'),
//    express = require('./config/express');



// var mongoose = require('mongoose');
// var express = require('./config/express');
var config = require('./config/config');
var db = require('./config/mongoose')();


var app = require('./config/express')(db);
app.listen(config.port, function () {
    console.log('Express app listening on port: ' + config.port);
});

module.exports = app;


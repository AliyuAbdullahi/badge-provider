var mongoose = require('mongoose');

var config = require('./../../../config/config');
var express = require('express');
var supertest = require('supertest');
var sever = require('server');

// Connect to MongoDB
var db = mongoose.connect(config.db[process.env.NODE_ENV].uri, config.db[process.env.NODE_ENV].options, function (err) {
    if (err) {
        console.error('Could not connect to MongoDB.');
        console.log(err);
    }
    else{
      console.log("connected");
    }
});

mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
});

// var TaskModel = require('./../../../models/user.server.model');
var BadgeModel = require('../../features/models/user.server.model');
/**
 * Globals
 */
var badge;

/**
 * Unit tests
 */


describe('request(url)', function(){

it('should work with an active server', function(done){
    var app = express();

    app.get('/', function(req, res){
      res.send('hey');
    });

    var server = app.listen(4000, function(){
      request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        res.text.should.equal('hey');
        done();
      });
    });
  });

it('should work with .send() etc', function(done){
  console.log("it got here");
    var app = express();

    app.use(express.bodyParser());

    app.post('/', function(req, res){
      res.send(req.body.name);
    });

    request(app)
    .post('/')
    .send({ name: 'tobi' })
    .expect('tobi', done);

  });
console.log("it is done");

});





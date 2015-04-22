var mongoose = require('mongoose');

// var config = require('./../../../config/config');
var express = require('express');
var supertest = require('supertest');
var server = require('../../../server');
var Badge = mongoose.model('User');
var badges;


describe("Contorller Test: using the routing test method", function() {
    beforeEach(function(done) {
      badges = new Badge({
        amateur: [0],
        rookie: [0],
        soldier: [0],
        warlord: [0]
      });

      badges.save(function(err){
        if(err) console.log(err);
      });
      done();
    });

    afterEach(function(done) {
      Badge.remove(function(err){
        if(err) {
          console.log(err);
        }
      });
      done();
    });

   it("should add to the warrior strength POST /users is called", function(done) {
            supertest(server).post('/users')
                .send({
                    amateur: 1,
                        rookie: 0,
                        soldier:0,
                        warlord:0 
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    if(err) {
                        console.log(err);
                    }
                    expect(res.body).toEqual(jasmine.objectContaining({amateur: [1],
                        rookie: [0],
                        soldier:[0],
                        warlord:[0] }));
                    done();
                });
        });
 describe("Badge tests for route /users", function(){
        it("should retreive all the warriors when the get function is called", function(done) {
            supertest(server).get('/users')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    if(err) {
                      console.log(err);
                    }
                  console.log(res.body);
                  expect(res.body.length).toEqual(1);
                    expect(res.body[0]).toEqual(jasmine.objectContaining({
                        amateur: [0],
                        rookie: [0],
                        soldier:[0],
                        warlord:[0] 
                    }));
                  done();
                });
        
        }); 
  });
//         describe("Badge test for creating badge",function(){
// it("It should create new badge when asked to", function(done) {
//             supertest(server).get('/users')
//                 .set('Accept', 'application/json')
//                 .expect('Content-Type', /json/)
//                 .expect(200)
//                 .end(function(err, res) {
//                     if(err) {
//                       console.log(err);
//                     }

//                     expect();
//                   done();
//                 });


//         });
// describe("Badge tests for route /users/:userId'", function(){
//         it("should retreive all the warriors when the get function is called", function(done) {
//             supertest(server).post('/users')
//                 .set('Accept', 'application/json')
//                 .expect('Content-Type', /json/)
//                 .expect(200)
//                 .end(function(err, res) {
//                     if(err) {
//                       console.log(err);
//                     }

//                   expect(res.body.length).toEqual(1);
//                     expect(res.body).toEqual(jasmine.objectContaining({
//                         amateur: [0],
//                         rookie: [0],
//                         soldier:[0],
//                         warlord:[0] 
//                     }));
//                   done();
//                 });
        
//         });
  
});


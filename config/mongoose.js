var config = require('./config'),
 mongoose = require('mongoose');
module.exports = function() {
 var db = mongoose.connect(config.db);
 require('../app/features/models/user.server.model');
 return db;
};
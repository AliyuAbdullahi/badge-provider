var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
var UserSchema = new Schema({
 amateur: [{type: Number, default: 0}],
 rookie:[{type: Number, default: 0}],
 soldier:[{type: Number, default: 0}],
 warlord:[{type: Number, default: 0}]

});

mongoose.model('User', UserSchema);

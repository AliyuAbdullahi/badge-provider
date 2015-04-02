var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
var UserSchema = new Schema({
 firstName: String,
 lastName: String,
 email: String,
 username: String,
 password: String
});

var Badge = mongoose.model('User', UserSchema);
var debo = new Badge({firstName:"bella",lastName:"uncle",email:"@ddd",username:"debby",password:"yea"});
console.log(debo);
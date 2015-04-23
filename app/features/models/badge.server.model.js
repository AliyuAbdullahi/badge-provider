var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var BadgeSchema = new Schema({
    badge_title: {type: String, required:true},
    badge_type:{type: String, required:true},
    total:{type:Number, required:true}
});
mongoose.model('Badge', BadgeSchema);

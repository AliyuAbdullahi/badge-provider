var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var BadgeSchema = new Schema({
    badge_title: {type: String},
    badge_type:{type: String},
    total:{type:Number,}
});
mongoose.model('Badge', BadgeSchema);

var mongoose = require('mongoose');

//setup schema
var prevdeedSchema = mongoose.Schema({
    land_id:{
	type:String,
	required:true
    },

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    adhar_number:{
	type:Number,
	required:true
    }, 

    gender: String,

    phone: String,

    coordinate_one:{
	type:String,
	required:true
    },

    coordinate_two:{
	type:String,
	required:true
    },

    area:{
	type:String,
	required:true
    },

    create_data:{
        type : Date,
        default : Date.now
    }
});

// Export prevdeed model
var prevdeed_user = module.exports = mongoose.model('prevdeeduser', prevdeedSchema);

module.exports.get = function (callback, limit) {
    prevdeed_user.find(callback).limit(limit);
}

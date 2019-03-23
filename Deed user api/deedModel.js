var mongoose = require('mongoose');

//setup schema
var deedSchema = mongoose.Schema({

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

    phone: Number,
 
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

// Export deed model
var deed_user = module.exports = mongoose.model('deeduser', deedSchema);

module.exports.get = function (callback, limit) {
    deed_user.find(callback).limit(limit);
}

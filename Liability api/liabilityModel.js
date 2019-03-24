var mongoose = require('mongoose');

//setup schema
var liabilitySchema = mongoose.Schema({

    land_id:{
	type:String,
	required:true
    },

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

    liability_status:{
	type:Boolean,
	required:true
    },

    present_liability_type:String,

    liability_history:{
	type:Boolean,
	required:true
    },

    prev_liability_type:String,

    create_data:{
        type : Date,
        default : Date.now
    }
});

// Export liability model
var liability_user = module.exports = mongoose.model('liability', liabilitySchema);

module.exports.get = function (callback, limit) {
    liability_user.find(callback).limit(limit);
}

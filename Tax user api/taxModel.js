var mongoose = require('mongoose');

//setup schema
var taxSchema = mongoose.Schema({
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

    tax_amt:{
	type:String,
	required:true
    },

    status:{
	type:Boolean,
	required:true
    },

    date_paid:{
	type:Date,
    },

    create_data:{
        type : Date,
        default : Date.now
    }

});

// Export tax model
var tax_user = module.exports = mongoose.model('taxuser', taxSchema);

module.exports.get = function (callback, limit) {
    tax_user.find(callback).limit(limit);
}

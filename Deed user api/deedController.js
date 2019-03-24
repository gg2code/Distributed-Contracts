// Import deed model
deed_user = require('./deedModel');

// Handle deed user actions
exports.index = function (req, res) {
    deed_user.get(function (err, deeduser) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "deed details retrieved successfully",
            data: deeduser
        });
    });
};

// Handle create deed user actions
exports.new = function (req, res) {
    var deeduser = new deed_user();
    deeduser.land_id = req.body.land_id;
    deeduser.name = req.body.name ? req.body.name : deeduser.name;
    deeduser.email = req.body.email;
    deeduser.adhar_number = req.body.adhar_number;
    deeduser.gender = req.body.gender;
    deeduser.phone = req.body.phone;
    deeduser.coordinate_one = req.body.coordinate_one;
    deeduser.coordinate_two = req.body.coordinate_two;
    deeduser.area = req.body.area;

// save the user and check for errors
    deeduser.save(function (err) {
        // if (err)
        //     res.json(err);

res.json({
            message: 'New user created!',
            data: deeduser
        });
    });
};

// Handle view deed user info
exports.view = function (req, res) {
    deed_user.findById(req.params.deed_user_id, function (err, deeduser) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: deeduser
        });
    });
};

// Handle update deed user info
exports.update = function (req, res) {

deed_user.findById(req.params.deed_user_id, function (err, deeduser) {
        if (err)
            res.send(err);

	deeduser.land_id = req.body.land_id;
        deeduser.name = req.body.name ? req.body.name : deeduser.name;
	deeduser.email = req.body.email;
	deeduser.adhar_number = req.body.adhar_number;
        deeduser.gender = req.body.gender;
        deeduser.email = req.body.email;
        deeduser.phone = req.body.phone;
	deeduser.coordinate_one = req.body.coordinate_one;
    	deeduser.coordinate_two = req.body.coordinate_two;
    	deeduser.area = req.body.area;

// save the user and check for errors
        deeduser.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: deeduser
            });
        });
    });
};

// Handle delete deed user
exports.delete = function (req, res) {
    deed_user.remove({
        _id: req.params.deed_user_id
    }, function (err, deeduser) {
        if (err)
            res.send(err);

res.json({
            status: "success",
            message: 'User details deleted'
        });
    });
};

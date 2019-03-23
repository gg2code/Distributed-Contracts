// Import contact model
prevdeed_user = require('./prevdeedModel');

// Handle index actions
exports.index = function (req, res) {
    prevdeed_user.get(function (err, prevdeeduser) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "prev deed details retrieved successfully",
            data: prevdeeduser
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var prevdeeduser = new prevdeed_user();
    prevdeeduser.land_id = req.body.land_id;
    prevdeeduser.name = req.body.name ? req.body.name : prevdeeduser.name;
    prevdeeduser.email = req.body.email;
    prevdeeduser.adhar_number = req.body.adhar_number;
    prevdeeduser.gender = req.body.gender;
    prevdeeduser.phone = req.body.phone;
    prevdeeduser.coordinate_one = req.body.coordinate_one;
    prevdeeduser.coordinate_two = req.body.coordinate_two;
    prevdeeduser.area = req.body.area;

// save the contact and check for errors
    prevdeeduser.save(function (err) {
        // if (err)
        //     res.json(err);

res.json({
            message: 'New contact created!',
            data: prevdeeduser
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    prevdeed_user.findById(req.params.prevdeed_user_id, function (err, prevdeeduser) {
        if (err)
            res.send(err);
        res.json({
            message: 'user details loading..',
            data: prevdeeduser
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {

prevdeed_user.findById(req.params.prevdeed_user_id, function (err, prevdeeduser) {
        if (err)
            res.send(err);

	prevdeeduser.land_id = req.body.land_id;
        prevdeeduser.name = req.body.name ? req.body.name : prevdeeduser.name;
	prevdeeduser.email = req.body.email;
	prevdeeduser.adhar_number = req.body.adhar_number;
        prevdeeduser.gender = req.body.gender;
        prevdeeduser.email = req.body.email;
        prevdeeduser.phone = req.body.phone;
	prevdeeduser.coordinate_one = req.body.coordinate_one;
    	prevdeeduser.coordinate_two = req.body.coordinate_two;
    	prevdeeduser.area = req.body.area;

// save the contact and check for errors
        prevdeeduser.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'user Info updated',
                data: prevdeeduser
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    prevdeed_user.remove({
        _id: req.params.prevdeed_user_id
    }, function (err, prevdeeduser) {
        if (err)
            res.send(err);

res.json({
            status: "success",
            message: 'user details deleted'
        });
    });
};

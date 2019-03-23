// Import tax model
tax_user = require('./taxModel');

// Handle index actions
exports.index = function (req, res) {
    tax_user.get(function (err, taxuser) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "tax data retrieved successfully",
            data: taxuser
        });
    });
};

// Handle create tax user actions
exports.new = function (req, res) {
    var taxuser = new tax_user();
    taxuser.land_id = req.body.land_id;
    taxuser.name = req.body.name ? req.body.name : contact.name;
    taxuser.email = req.body.email;
    taxuser.gender = req.body.gender;
    taxuser.adhar_number = req.body.adhar_number;
    taxuser.phone = req.body.phone;
    taxuser.coordinate_one = req.body.coordinate_one;
    taxuser.coordinate_two = req.body.coordinate_two;
    taxuser.area = req.body.area;
    taxuser.date_paid = req.body.date_paid;
    taxuser.status = req.body.status;
    taxuser.tax_amt = req.body.tax_amt;

// save the user and check for errors
    taxuser.save(function (err) {
        // if (err)
        //     res.json(err);

res.json({
            message: 'New user created!',
            data: contact
        });
    });
};

// Handle view tax user info
exports.view = function (req, res) {
    tax_user.findById(req.params.tax_id, function (err, taxuser) {
        if (err)
            res.send(err);
        res.json({
            message: 'tax details loading..',
            data: taxuser
        });
    });
};

// Handle update tax user info
exports.update = function (req, res) {

tax_user.findById(req.params.tax_id, function (err, contact) {
        if (err)
            res.send(err);

	taxuser.land_id = req.body.land_id;
        taxuser.name = req.body.name ? req.body.name : contact.name;
        taxuser.email = req.body.email;
        taxuser.gender = req.body.gender;
        taxuser.adhar_number = req.body.adhar_number;
        taxuser.phone = req.body.phone;
        taxuser.coordinate_one = req.body.coordinate_one;
        taxuser.coordinate_two = req.body.coordinate_two;
        taxuser.area = req.body.area;
        taxuser.date_paid = req.body.date_paid;
        taxuser.status = req.body.status;
        taxuser.tax_amt = req.body.tax_amt;

// save the tax user and check for errors
        taxuser.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'tax Info updated',
                data: taxuser
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    tax_user.remove({
        _id: req.params.tax_id
    }, function (err, taxuser) {
        if (err)
            res.send(err);

res.json({
            status: "success",
            message: 'tax details deleted'
        });
    });
};

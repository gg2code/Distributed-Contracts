// Import liability model model
liability_user = require('./liabilityModel');

// Handle index actions
exports.index = function (req, res) {
    liability_user.get(function (err, liabilityuser) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Liability data retrieved successfully",
            data: liabilityuser
        });
    });
};

// Handle create user actions
exports.new = function (req, res) {
    var liabilityuser = new liability_user();
    liabilityuser.land_id = req.body.land_id;
    liabilityuser.coordinate_one = req.body.coordinate_one;
    liabilityuser.coordinate_two = req.body.coordinate_two;
    liabilityuser.area = req.body.area;
    liabilityuser.liability_status = req.body.liability_status;
    liabilityuser.present_liability_type = req.body.present_liability_type;
    liabilityuser.liability_history = req.body.liability_history;
    liabilityuser.prev_liability_type = req.body.prev_liability_type;

// save the user and check for errors
    liabilityuser.save(function (err) {
        // if (err)
        //     res.json(err);

res.json({
            message: 'New user created!',
            data: liabilityuser
        });
    });
};

// Handle view user info
exports.view = function (req, res) {
    liability_user.findById(req.params.liability_id, function (err, liabilityuser) {
        if (err)
            res.send(err);
        res.json({
            message: 'Liability details loading..',
            data: liabilityuser
        });
    });
};

// Handle update liability info
exports.update = function (req, res) {

liability_user.findById(req.params.liability_id, function (err, liabilityuser) {
        if (err)
            res.send(err);

        liabilityuser.land_id = req.body.land_id;
        liabilityuser.coordinate_one = req.body.coordinate_one;
        liabilityuser.coordinate_two = req.body.coordinate_two;
        liabilityuser.area = req.body.area;
        liabilityuser.liability_status = req.body.liability_status;
        liabilityuser.present_liability_type = req.body.present_liability_type;
        liabilityuser.liability_history = req.body.liability_history;
        liabilityuser.prev_liability_type = req.body.prev_liability_type;
        

// save the user and check for errors
        liabilityuser.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'liability Info updated',
                data: liabilityuser
            });
        });
    });
};

// Handle delete info
exports.delete = function (req, res) {
    liability_user.remove({
        _id: req.params.liability_id
    }, function (err, liabilityuser) {
        if (err)
            res.send(err);

res.json({
            status: "success",
            message: 'Liability info deleted'
        });
    });
};

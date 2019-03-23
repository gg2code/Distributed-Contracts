let router = require('express').Router();   //initialize express router

//set default api response
router.get('/', function (req,res){
    res.json({
        status : 'API is working',
        message : 'Welcome to deed',
    });
});

// Import deed controller
var deedController = require('./deedController');

// deed routes
router.route('/Deed')
    .get(deedController.index)
    .post(deedController.new);

router.route('/Deed/:deed_user_id')
    .get(deedController.view)
    .patch(deedController.update)
    .put(deedController.update)
    .delete(deedController.delete);

// Export API routes
module.exports = router;

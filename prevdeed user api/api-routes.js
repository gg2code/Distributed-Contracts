let router = require('express').Router();   //initialize express router

//set default api response
router.get('/', function (req,res){
    res.json({
        status : 'API is working',
        message : 'Welcome to prev deed',
    });
});

// Import prevdeed controller
var prevdeedController = require('./prevdeedController');

// prevdeed routes
router.route('/prevdeed')
    .get(prevdeedController.index)
    .post(prevdeedController.new);

router.route('/prevdeed/:prevdeed_user_id')
    .get(prevdeedController.view)
    .patch(prevdeedController.update)
    .put(prevdeedController.update)
    .delete(prevdeedController.delete);

// Export API routes
module.exports = router;

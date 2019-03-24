let router = require('express').Router();   //initialize express router

//set default api response
router.get('/', function (req,res){
    res.json({
        status : 'API is working',
        message : 'Welcome to liability api',
    });
});

// Import liability controller
var liabilityController = require('./liabilityController');

// liability routes
router.route('/liability')
    .get(liabilityController.index)
    .post(liabilityController.new);

router.route('/liability/:liability_id')
    .get(liabilityController.view)
    .patch(liabilityController.update)
    .put(liabilityController.update)
    .delete(liabilityController.delete);

// Export API routes
module.exports = router;

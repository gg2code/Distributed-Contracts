let router = require('express').Router();   //initialize express router

//set default api response
router.get('/', function (req,res){
    res.json({
        status : 'API is working',
        message : 'Welcome to tax api',
    });
});

// Import tax controller
var taxController = require('./taxController');

// tax routes
router.route('/tax')
    .get(taxController.index)
    .post(taxController.new);

router.route('/tax/:tax_id')
    .get(taxController.view)
    .patch(taxController.update)
    .put(taxController.update)
    .delete(taxController.delete);

// Export API routes
module.exports = router;

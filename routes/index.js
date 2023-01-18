var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');
var middleware = require('../middleware/authorize');

router.get('/', controller.getData);
router.post('/', middleware.authorizeUser, controller.addData);

module.exports = router;

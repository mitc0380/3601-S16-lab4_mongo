'use strict';

// Defining the "pets" API module
// =======================================


var express = require('express');
var controller = require('./gpaCalc.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:course_id', controller.destroy);
module.exports = router;
var express = require('express');
var shortid = require('shortid');

var db = require('../db');

var controller = require('../controllers/user.controllers')

var router = express.Router();

router.get('', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', controller.postCreate);

module.exports = router;
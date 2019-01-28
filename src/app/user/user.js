var express = require('express')
  , router = express.Router()
var fs = require('fs')
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', function(req, res) {
	res.write('hi post');
});

module.exports = router

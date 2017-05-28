var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var simpleCtrl = require('../controllers/simpleController');

// API routes

router.route('/simple')
    .get(simpleCtrl.findAllSimpleData)
    .post(simpleCtrl.addSimpleData);


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var simpleCtrl = require('../controllers/bookController');

// API routes

router.route('/books')
    .get(simpleCtrl.findAllBooks)
    .post(simpleCtrl.addBook);


module.exports = router;

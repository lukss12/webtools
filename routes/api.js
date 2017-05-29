var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var booksCtrl = require('../controllers/bookController');

// API routes

router.route('/books')
    .get(booksCtrl.findAllBooks)
    .post(booksCtrl.addBook);

router.route('/books/:id')
    .get(booksCtrl.findBook);


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var booksCtrl = require('../controllers/bookController');

function unauthorize(req,res){
  req.send(405);
}
// API routes

router.route('/books')
    .get(booksCtrl.findAllBooks)
    .post(booksCtrl.addBook)
    .put(unauthorize)
    .patch(unauthorize)
    .delete(unauthorize);

router.route('/books/:id')
    .get(booksCtrl.findBook)
    .post(booksCtrl.existBook)
    .put(booksCtrl.replaceBook)
    .patch(booksCtrl.updateBook)
    .delete(booksCtrl.deleteBook);

router.route('/search')
    .get(booksCtrl.searchBook)
    .post(unauthorize)
    .put(unauthorize)
    .patch(unauthorize)
    .delete(unauthorize);

module.exports = router;

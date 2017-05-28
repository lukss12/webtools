/**
 * Created by lucas on 24/05/17.
 */
var bookModel = require ('../models/bookModel').simpleModel;

//GET - Return all bookModel in the DB
module.exports.findAllBooks = function(req, res) {
    bookModel.find(function(err, books) {
        if(err) res.send(500, err.message);

        console.log('GET /webtools');
        res.status(200).jsonp(books);
    });
};

//POST - Insert a new bookModel in the DB
module.exports.addBook = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var newBook = new bookModel({
        title:    req.body.title,
        isbn:      req.body.isbn,
        pageCount:  req.body.pageCount,
        publishedDate:  req.body.publishedDate,
        thumbnailUrl:  req.body.thumbnailUrl,
        shortDescription:  req.body.shortDescription,
        longDescription:  req.body.longDescription,
        categories:  req.body.categories
        });

    newBook.save(function(err, book) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(book);
    });
};

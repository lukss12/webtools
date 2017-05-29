/**
 * Created by lucas on 24/05/17.
 */
var bookModel = require ('../models/bookModel').bookModel;

//api/books
//GET - Return all bookModel in the DB
module.exports.findAllBooks = function(req, res) {
    bookModel.find(function(err, result) {
        if(err){
            res.send(500, err.message);
        }else{
            res.status(200).jsonp(result);
        }
    });
    console.log('GET /webtools/api/books');
};

//POST - Insert a new bookModel in the DB
module.exports.addBook = function(req, res) {

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
        res.status(201).jsonp(book);
    });
    console.log('POST /webtools/api/books');
};

//api/books/:id
//GET - Return book with certain id
module.exports.findBook = function(req, res) {
    bookModel.findById(req.params.id,function(err, result) {
        if(err){
            res.send(500, err.message);
        }else {
            if (!result) {
                res.status(404).send(404);
            } else {
                res.status(200).jsonp(result);
            }
        }
    });
    console.log('GET /webtools/api/books/'+req.params.id);
};

//DELETE - Delete book with certain id
module.exports.deleteBook = function(req, res) {
    bookModel.deleteMany({ '_id': req.params.id},function(err, result) {
        if(err) res.send(500, err.message);


        res.status(200).jsonp(result);
    });
    console.log('DELETE /webtools/api/books/'+req.params.id);
};

//POST - Test existence of book with certain id
module.exports.existBook = function(req, res) {
    bookModel.findById(req.params.id,function(err, result) {
        if(err){
            res.send(500, err.message)
        }else{
            if(!result) {
                res.status(404).send(404);
            }else{
                res.status(409).send(409);
            }
        }
    });
    console.log('POST /webtools/api/books/'+req.params.id);
};

//PUT - Replace book with certain id
module.exports.replaceBook = function(req, res) {
    bookModel.replaceOne({"_id": req.params.id},req.body,function(err, result) {
        if(err){
            res.send(500, err.message);
        }else{
            if(result.nModified == 0) {
                res.status(404).send(404);
            }else{

                res.status(200).send(result);
            }
        }
    });
    console.log('PUT /webtools/api/books/'+req.params.id);
};

//PATCH - Update book with certain id
module.exports.updateBook = function(req, res) {
    bookModel.findOneAndUpdate({"_id": req.params.id},req.body,{"new" : true},function(err, result) {
        if(err){
            res.send(500, err.message);
        }else{
            if(!result) {
                res.status(404).send(404);
            }else{

                res.status(200).send(result);
            }
        }
    });
    console.log('PUT /webtools/api/books/'+req.params.id);
};

//Text Search
module.exports.searchBook = function(req, res) {
    bookModel.find({$text: {$search: req.query.q}})
        .limit(10)
        .exec(function (err, result) {
            if(err){
                res.send(500, err.message);
            }else{
                if(!result) {
                    res.status(404).send(404);
                }else{
                    res.status(200).send(result);
                }
            }
        });
    console.log('GET /webtools/api/search/ Busqueda:'+req.query.q);
}
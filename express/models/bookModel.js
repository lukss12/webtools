/**
 * Created by lucas on 24/05/17.
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var bookSchema = new Schema({
    title:    { type: String },
    isbn:     { type: String },
    pageCount: {type: Number},
    publishedDate: {type: Date},
    thumbnailUrl: {type: String},
    shortDescription: {type: String},
    longDescription: {type: String},
    status: {type: String},
    authors: {type: [String]},
    categories: {type: [String]}
});

bookSchema.index({title: 'text'});

module.exports.bookModel = mongoose.model('book', bookSchema);

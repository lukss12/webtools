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
    categories: {type: [String]}
});

module.exports.simpleModel = mongoose.model('book', bookSchema);
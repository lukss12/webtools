/**
 * Created by lucas on 24/05/17.
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var simpleSchema = new Schema({
    propString:    { type: String },
    propNumber:     { type: Number },
    propStringEnum:    { type: String, enum:
        ['Enum1', 'Enum2', 'Enum3', 'Enum4', 'Enum5']
    }
});

module.exports.simpleModel = mongoose.model('simpleSchema', simpleSchema);

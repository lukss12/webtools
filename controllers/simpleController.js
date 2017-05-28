/**
 * Created by lucas on 24/05/17.
 */
var simpleData = require ('../models/simpleModel').simpleModel;

//GET - Return all simpleData in the DB
module.exports.findAllSimpleData = function(req, res) {
    simpleData.find(function(err, tvshows) {
        if(err) res.send(500, err.message);

        console.log('GET /webtools');
        res.status(200).jsonp(tvshows);
    });
};

//POST - Insert a new simpleData in the DB
module.exports.addSimpleData = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var simple = new simpleData({
        propString:    req.body.propString,
        propNumber:    req.body.propNumber,
        propStringEnum:req.body.propStringEnum
        });

    simple.save(function(err, simple) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(simple);
    });
};

var juntaDB = require('../data/schemas/junta');
var util = require('../lib/utils');

exports.findOne = (req, res) => {
    juntaDB.findById({ id: req.body.id }, (err, doc) => {
        if (err) {
            res.json(err);
            return;
        }
        if (!doc) {
            res.json({ message: 'No existe la junta' });
            return;
        }
        res.json(doc);
    });
}

exports.create = (req, res) => {
    juntaDB.create(req.body, (err, doc) => {
        if (err) {
            res.json(err);
            return;
        }

        util.resJson(res, doc);
    })
}

exports.findAll = (req, res) => {
    juntaDB.find({}, (err, doc) => {
        if (err) {
            res.json(err);
            return;
        }

        if (!doc) {
            res.json({ message: 'No existe la junta' });
            return;
        }

        util.resJson(doc);
    });
};
var juntaDB = require('../data/schemas/junta');
var juntaUsuarioDB = require('../data/schemas/juntaUsuario');

var util = require('../lib/utils');
var ObjectID = require('mongodb').ObjectID;

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
    var body = req.body;
    body.creador = ObjectID(body.creador);
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
        util.resJson(res, doc);
    });
};

exports.join = (req, res) => {
    juntaUsuarioDB.findOne(
        {
            junta: req.body.junta,
            usuario: req.body.usuario
        },
        (err, doc) => {
            if (err) {
                res.json(err);
                return;
            }

            if (doc) {
                res.json({ message: "Ya no puede unirte a la junta" });
                return;
            } else {
                juntaUsuarioDB.create(req.body, (err, doc) => {
                    if (err) {
                        res.json(err);
                        return;
                    }

                    util.resJson(res, doc);
                })
            }
        });


}
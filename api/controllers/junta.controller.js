var juntaDB = require('../data/schemas/junta');
var juntaUsuarioDB = require('../data/schemas/juntaUsuario');
var usuarioDB = require('../data/schemas/usuario');
var util = require('../lib/utils');
var valCred = require('../mocks/ValidacionCrediticia');
var ObjectID = require('mongodb').ObjectID;
var lodash = require('lodash');

exports.findOne = (req, res) => {
    juntaDB.findById(req.params.id, (err, doc) => {
        if (err) {
            util.errorJson(res, err);
            return;
        }
        if (!doc) {
            util.errorJson(res, { message: 'No existe la junta' });
            return;
        }
        var d = doc.toObject();
        juntaUsuarioDB.find({ junta: doc._id }, (err, docs) => {
            if (err) {
                util.errorJson(res, err);
                return;
            }
            
            d.participantes = util.resJsonArray(docs);
            util.resJson(res, d);
        });
    });
}

exports.create = (req, res) => {
    var body = req.body;
    usuarioDB.findById(body.creador, (err, doc) => {
        if (err) {
            util.errorJson(res, err);
            return;
        }
        if (!doc) {
            util.errorJson(res, { message: 'No existe el usuario' });
            return;
        }
        var evaluacion = valCred.evaluacion(doc.dni);

        if (!evaluacion.valid || req.body.cuota > evaluacion.cuota) {
            util.errorJson(res, { message: 'Tu evaluacion crediticia no es suficiente' });
            return;
        }
        body.creador = ObjectID(body.creador);
        juntaDB.create(req.body, (err, doc) => {
            if (err) {
                util.errorJson(res, err);
                return;
            }
            util.resJson(res, doc);
        })
    });
}

exports.findAll = (req, res) => {
    juntaDB.find({}, (err, doc) => {
        if (err) {
            util.errorJson(res, err);
            return;
        }

        if (!doc) {
            util.errorJson(res, { message: 'No existe la junta' });
            return;
        }
        util.resJson(res, doc);
    });
};

exports.join = (req, res) => {
    req.body.rol = "PARTICIPANTE";
    juntaDB.findById(req.body.junta, (err, j) => {
        usuarioDB.findById(req.body.usuario, (err, u) => {
            var evaluacion = valCred.evaluacion(u.dni);
            if (!evaluacion.valid || j.cuota > evaluacion.cuota) {
                util.errorJson(res, { message: 'Tu evaluacion crediticia no es suficiente' });
                return;
            }

            juntaUsuarioDB.findOne(
                {
                    junta: req.body.junta,
                    usuario: req.body.usuario
                },
                (err, doc) => {
                    if (err) {
                        util.errorJson(res, err);
                        return;
                    }

                    if (doc) {
                        util.errorJson(res, { message: "Ya estas inscrito en la junta" });
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
        });
    });
}

exports.start = (req, res) => {

    juntaUsuarioDB.find({ junta: req.params.id }, (req, result) => {
        var participantes = lodash.shuffle(result);

        participantes.forEach(function (item, ix) {
            item.orden = ix;

            item.save(function (err, doc) {
                if (err) {
                    util.errorJson(res, err);
                }
            });
        });

        util.resJson(res, participantes);

    })

}

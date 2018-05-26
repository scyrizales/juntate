var juntaDB = require('../data/schemas/junta');
var juntaUsuarioDB = require('../data/schemas/juntaUsuario');
var usuarioDB = require('../data/schemas/usuario');
var util = require('../lib/utils');
var valCred = require('../mocks/ValidacionCrediticia');
var ObjectID = require('mongodb').ObjectID;

exports.findOne = (req, res) => {
    juntaDB.findById({ id: req.params.id }, (err, doc) => {
        if (err) {
            util.errorJson(res, err);
            return;
        }
        if (!doc) {
            util.errorJson(res, { message: 'No existe la junta' });
            return;
        }
        juntaUsuarioDB.find({ junta: doc._id }, (err, docs) => {
            doc.participantes = util.resJsonArray(docs);
            util.resJson(res, doc);
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

exports.sort = (req, res) => {

    juntaUsuarioDB.find({ junta: req.params.id }, (req, result) => {
        // if (result.length < 6) {
        //     res.json({ message: "Minimo 6 usuario para sortear" });
        //     return;
        // }



        result.sort();

        result.forEach(function (item) {
            item.orden = result.indexOf(item);

            item.save(function (err, doc) {
                if (err) return handleError(err);
            });
        });

        res.json(result);

    })

}

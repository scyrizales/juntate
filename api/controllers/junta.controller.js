var juntaDB = require('../data/schemas/junta');
var juntaUsuarioDB = require('../data/schemas/juntaUsuario');
var usuarioDB = require('../data/schemas/usuario');
var util = require('../lib/utils');
var valCred = require('../mocks/ValidacionCrediticia');
var ObjectID = require('mongodb').ObjectID;

exports.findOne = (req, res) => {
    juntaDB.findById({ id: req.body.id }, (err, doc) => {
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
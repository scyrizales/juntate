'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var juntaSchema = new Schema({
    alias: String,
    cuota: Number,
    integrantes: Number,
    frecuencia: String,
    creador: {type: Schema.Types.ObjectId, ref: 'Usuarios'},
});

module.exports = mongoose.model('Juntas', juntaSchema);
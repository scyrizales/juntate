'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var juntaUsuarioSchema = new Schema({
    junta: {type: Schema.Types.ObjectId, ref: 'Junta'},
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuarios'},
    rol: {type: String },
    estado: {type: String },
    orden: {type: Number },
});

module.exports = mongoose.model('JuntaUsuarios', juntaUsuarioSchema);
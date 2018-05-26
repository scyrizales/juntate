'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var juntaUsuarioSchema = new Schema({
    junta: {type: Schema.Types.ObjectId, ref: 'Junta'},
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuarios'},
    rol: {type: Schema.Types.ObjectId, ref: 'Junta'},
    periodo: {type: Schema.Types.ObjectId, ref: 'Junta'},
});

module.exports = mongoose.model('JuntaUsuarios', juntaUsuarioSchema);
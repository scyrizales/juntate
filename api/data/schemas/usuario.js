'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nombre: { type : String , required : true },
    email: { type : String , unique : true, required : true, dropDups: true },
    dni: { type : Number , unique : true, required : true, dropDups: true },
    cuenta: Number,
    password: { type : String , required : true },
});

module.exports = mongoose.model('Usuarios', userSchema);
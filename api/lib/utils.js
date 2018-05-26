var ObjectID = require('mongodb').ObjectID;
var lodash = require('lodash');

exports.resJson = (res, data) => {
    if (Array.isArray(data)) {
        res.json(resJsonArray(data));
    } else if (typeof (data) === "object") {
        res.json(resJsonObject(data));
    }
}

const resJsonObject = (data) => {
    var aux = lodash.clone(data);
    if (data.password) delete aux.password;
    if (data._id) aux.id = ObjectID(data._id).toString();
    return aux;
}

const resJsonArray = (data) => {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push(resJsonObject(data[i]));
    }
    return arr;
}

exports.resJsonArray = resJsonArray;

exports.errorJson = (res, data) => {
    data.error = true;
    res.json(data);
}
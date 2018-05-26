exports.resJson = (res, data) => {

    if (typeof (data) === "object") {
        var aux = data.toObject();
        resJsonObject(aux);
        res.json(aux);
    }

    if (Array.isArray(data)) {
        resJsonArray(data);
    }
}

resJsonObject = (data) => {
    if (data.password) delete data.password;
    if (data._id) data.id = ObjectId(data._id).toString();
}

resJsonArray = (data) => {
    for (var i = 0; i < data.length; i++) {
        var aux = data[i].toObject();
        resJsonObject(aux);
    }
}
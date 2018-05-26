exports.resJson = (res, data) => {
    var aux = data.toObject();

    if (typeof (data) === "object") resJsonObject(aux);
    if (Array.isArray(data)) resJsonArray(aux);

    res.json(aux);
}

resJsonObject = (data) => {
    console.log(data);
    if (data.password) delete data.password;
    console.log(data);
    if (data._id) data.id = ObjectId(data._id).toString();
    console.log(data);
}

resJsonArray = (data) => {
    for (var i = 0; i < data.length; i++) {
        resJsonObject(data[i]);
    }
}
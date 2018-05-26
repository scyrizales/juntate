var juntaDB = require('../data/schemas/junta');

exports.findOne = (req, res) =>{
    juntaDB.findById({ id: req.body.id }, (err, doc) => {
        if (err) {
            res.json(err);
            return;
        }
        if (!doc) {
            res.json({ message: 'No existe la junta' });
            return;
        }
        res.json(doc); 
    });
}

exports.create = (req, res) =>{
    res.json({"message": "Create"});
}

exports.findAll = (req, res) => {
    juntaDB.findById(req.body || {}, (err, doc) => {
        if (err) {
            res.json(err);
            return;
        }
        if (!doc) {
            res.json({ message: 'No existe la junta' });
            return;
        }
        res.json(doc); 
    });
};
var userDB = require('../data/schemas/usuario');
exports.signUp = (req, res)=>{
    userDB.create(req.body, (err, doc) => {
        if (err) {
            res.json(err);
            return;
        }
        res.json(doc);
    });
}

exports.signIn = (req, res)=>{
    var email = req.body.email;
    var password = req.body.password;
    userDB.findOne({ email, password }, (err, doc) => {
        if (err) {
            res.json(err);
            return;
        }
        if (!doc) {
            res.json({ message: 'No existe el usuario' });
            return;
        }
        res.json(doc);
    });
}
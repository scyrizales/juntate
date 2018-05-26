const userDB = require('../data/schemas/usuario');
const util = require('../lib/utils');

exports.signUp = (req, res)=>{
    userDB.create(req.body, (err, doc) => {
        console.log("signup");
        if (err) {
            console.log("signup error");
            console.log(err);
            if (err.code === 11000) {
                util.errorJson(res, { message: 'El email o el dni ya existen' });
                return;
            }
            util.errorJson(res, err);
            return;
        }
        console.log("signup ok");
        // res.json(doc);
        util.resJson(res, doc || {});
    });
}

exports.signIn = (req, res)=>{
    var email = req.body.email;
    var password = req.body.password;
    userDB.findOne({ email, password }, (err, doc) => {
        if (err) {
            util.errorJson(res, err);
            return;
        }
        if (!doc) {
            util.errorJson(res, { message: 'No existe el usuario' });
            return;
        }
        util.resJson(res, doc);
    });
}

exports.findAll = (req, res) => {
    userDB.find({}, (err, doc) => {
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
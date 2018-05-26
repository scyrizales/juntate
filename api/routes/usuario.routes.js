module.exports = (app) => {
    const usuarioController = require('../controllers/usuario.controller');

    app.post('/usuario/signUp', usuarioController.signUp);
    app.post('/usuario/signIn', usuarioController.signIn);
    
}
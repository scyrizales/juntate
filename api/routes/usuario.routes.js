module.exports = (app) => {
    const usuarioController = require('../controllers/usuario.controller');

    app.get('/usuario/findAll', usuarioController.findAll);
    app.post('/usuario/signUp', usuarioController.signUp);
    app.post('/usuario/signIn', usuarioController.signIn);
    
}
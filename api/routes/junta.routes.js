module.exports = (app) => {
    const juntaController = require('../controllers/junta.controller');

    app.get('/junta/findAll', juntaController.findAll);
    app.get('/junta/findOne/:id', juntaController.findOne);
<<<<<<< HEAD
    app.get('/junta/create', juntaController.create)
=======
    app.post('/junta/create', juntaController.create)
>>>>>>> 1477b38d4952b1159bd24a3461adcb9b8f16496e
    
}
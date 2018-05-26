const express = require('express');
const bodyParser = require('body-parser');
const dc = require('./data/dbConnection');

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// allow-cors
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// add routes
require('./routes/usuario.routes')(app);
require('./routes/junta.routes')(app);

// listen for requests
app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});

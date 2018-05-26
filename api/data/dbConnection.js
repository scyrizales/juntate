var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.dbURI);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

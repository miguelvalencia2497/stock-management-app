const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;

var connection = mongoose.connect('mongodb://localhost/sotcksdb', {
  useMongoClient: true
});

connection.then(function(){
	console.log('made connection');
	app.use(express.static('public'));
	app.use(bodyParser.json());
	app.use('/api',  require('./routes/itemsRoute'));	
	app.listen(process.env.port || '3000', function(){
		console.log('Listening to port 3000');
	});
});
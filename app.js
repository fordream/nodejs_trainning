var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(bodyParser());
// define routes
var todoRouter = require('./todo');
app.use(todoRouter);

// start server
var port = process.env.PORT || 1234;
app.listen(port, function() {
	console.log('ready on port ' + port);
});

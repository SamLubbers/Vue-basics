var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(sassMiddleware({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public'),
	indentedSyntax: true,
	sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);


app.listen('3000', () => console.log(
	'Application listening on http://localhost:3000/'));

module.exports = app;

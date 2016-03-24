var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded());
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index');
})

app.post('/result', function (req, res) {
	console.log(req.body);
	var user = req.body;
	res.render('result', {user: user})
})

app.listen(8899, function(){
	console.log('now listening to 8899');
})
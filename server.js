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

var server = app.listen(8899, function(){
	console.log('now listening to 8899');
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
	console.log('socket id', socket.id);
	socket.on('posting_form', function(data){
		var random_number = Math.floor(Math.random()*1000+1);
		console.log(data);
		socket.emit('updated_message',{data:data});
		socket.emit('random_number', {random_number: random_number})
	})
})
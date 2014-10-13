var express = require('express');
var app = express();
var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});

var map = require('./app/map');

app.use(express.static('static'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/static/+.html');
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
	socket.on('init', function (data) {
		socket.emit('map', map.generate(data.seed));
		socket.join(data.seed);
	});

	/*socket.on('move', function (data) {
		hero.move(data.direction, function(hero){
			socket.emit('move', hero);
			socket.to(hero.room).emit('move', hero);
		});
	});*/
});


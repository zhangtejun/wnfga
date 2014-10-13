Math.seed = window.location.hash.split('#')[1] || Math.round(Math.random() * 100000);

var socket = io('http://localhost:8888');
socket.emit('init', {seed: Math.seed});

socket.on('map', function(data){
	var body = document.getElementsByTagName('body');
	body.appendChild(shidiv.map(data));
});
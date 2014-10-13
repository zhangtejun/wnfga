var hero = require('./hero');
var $ = require('./../vendor/jquery-2.1.1.min');

var init = function(){
	document.onkeyup = on_key_up;
}

var on_key_up = function(e) {

	var arrows = (e.keyCode < 37) || (e.keyCode > 40) ? false : true,
		direction = '';

	switch(e.keyCode) {
		case 37: // left
			direction = 'left';
			hero.stats.x > 0 ? hero.stats.x-- : hero.stats.x = 0;
			break;
		case 38: // top
			direction = 'top';
			hero.stats.y > 0 ? hero.stats.y-- : hero.stats.y = 0;
			break;
		case 39: // right
			direction = 'right';
			hero.stats.x < hero.stats.board_size - 1 ? hero.stats.x++ : hero.stats.x = hero.stats.board_size - 1;
			break;
		case 40: // bottom
			direction = 'bottom';
			hero.stats.y < hero.stats.board_size - 1 ? hero.stats.y++ : hero.stats.y = hero.stats.board_size - 1;
			break;
	}

	if(arrows){
		var _class = $('.hero.me').attr('class');
		_class = _class.replace(/x\d\d?/, 'x'+hero.stats.x);
		_class = _class.replace(/y\d\d?/, 'y'+hero.stats.y);

		$('.hero.me').attr('class', _class);

		window.socket.emit('move', hero.stats);
	}
}

var move = function(sprite, hero_data){
	var _class = $(sprite).attr('class');
	_class = _class.replace(/x\d\d?/, 'x'+hero_data.x);
	_class = _class.replace(/y\d\d?/, 'y'+hero_data.y);

	console.log(hero_data)

	$(sprite).attr('class', _class);
}

module.exports = {
	init: init,
	move: move
}
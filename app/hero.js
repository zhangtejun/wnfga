var uuid = require('node-uuid');

var init = function(spawn_point){
	var hero = {};

	hero.x = spawn_point.x;
	hero.y = spawn_point.y;
	hero.board_size = spawn_point.board_size;
	hero.room = spawn_point.seed;
	hero.uid = uuid.v4();
}

var move = function(direction, callback){

	var map = require('./map'); // ? why does this only work here?

	switch(direction){
		case 'left':
			hero.x > 0 ? hero.x-- : hero.x = 0;
			break;
		case 'top':
			hero.y > 0 ? hero.y-- : hero.y = 0;
			break;
		case 'right':
			hero.x < map.board.size - 1 ? hero.x++ : hero.x = map.board.size - 1;
			break;
		case 'bottom':
			hero.y < map.board.size - 1 ? hero.y++ : hero.y = map.board.size - 1;
			break;
	}

	callback(hero);
}

var after_hero_moved_event = function() {
	var tile = fields[hero.x][hero.y];

	if(tile.village){
		if(tile.name === 'land'){
			console.log('land quest');
		}
		if(tile.name === 'water'){
			console.log('water quest');
		}
		if(tile.name === 'mountain'){
			console.log('mountain quest');
		}
	}
}

module.exports = {
	init: init,
	move: move
}
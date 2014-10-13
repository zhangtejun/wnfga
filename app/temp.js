/*
 * Landscape Name
 * returns landscape name
 */
var generate_landscape_name = function() {
	var base = Math.floor(Math.seededRandom() * 100000),
		start = '',
		middle = '',
		ending = '',
		vocals = ['a', 'i', 'e', 'o', 'u', 'ä', 'ö', 'ü'],
		consonants = ['q', 'w', 'r', 't', 'z', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'y', 'x', 'c', 'v', 'n', 'm']
	length = base % 2 + 3;

	for(var l = 0; l < length; l++){
		var format = Math.floor(Math.seededRandom() * 100000) % 4;
		for(var f = 0; f < format; f++){
			if(f === 0){
				start += consonants[Math.floor(Math.seededRandom() * 100000) % consonants.length];
			} else {
				start += vocals[Math.floor(Math.seededRandom() * 100000) % vocals.length];
			}
		}
	}

	switch(base % 5){
		case 0: ending = 'land'; break;
		case 1: ending = 'berg'; break;
		case 2: ending = 'heim'; break;
		case 3: ending = 'stan'; break;
		case 4: ending = 'wil'; break;
	}

	return start.charAt(0).toUpperCase() + start.slice(1) + middle + ending;
}
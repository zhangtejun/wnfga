
size = 9;

// generate the landscape
document.getElementById('wrapper').appendChild(generate_landscape());

// generate the landscape name
document.getElementById('land_of').innerHTML = generate_landscape_name();

// position field
$('#fields').addClass('x3 y3');

// init and place that damn hero
init_hero();

// key up events listener
document.onkeyup = on_key_up;

// mobile funky
$("#fields").touchwipe({
	wipeLeft: function() { var e = {keyCode: 37}; on_key_up(e); },
	wipeRight: function() { var e = {keyCode: 39}; on_key_up(e); },
	wipeUp: function() { var e = {keyCode: 40}; on_key_up(e); },
	wipeDown: function() { var e = {keyCode: 38}; on_key_up(e); },
	min_move_x: 20,
	min_move_y: 20,
	preventDefaultEvents: true
});

// options
$('#options a').click(function(e){
	var _class =  e.target.className;

	if(_class !== 'warp super') {
		document.getElementById('wrapper').className = _class;
	} else {
		var _hash = Math.round(Math.random() * 1000000);
		window.location.hash = _hash;
		window.location.reload();
	}
})
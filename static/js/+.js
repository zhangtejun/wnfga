// requires
var io = require('./vendor/socket.io');
var $ = require('./vendor/jquery-2.1.1.min');

var dom = require('./wnfga/dom');
var funcs = require('./wnfga/functions');
var shidiv = require('./wnfga/shidiv');
var hero = require('./wnfga/hero');
var input = require('./wnfga/input');

var others = [];

// init seed
Math.seed = window.location.hash.split('#')[1] || Math.round(Math.random() * 100000);

//window.socket = io('http://wnfga-thgie.rhcloud.com:8000');
window.socket = io('http://localhost:3000');

$(function(){
	dom.init(function(){
		funcs.inject_css()
		socket.emit('init', { seed: Math.seed });
		socket.on('map', function(data){
			shidiv.size_styles(data.size);
			shidiv.map(data, function(map){
				dom.by_id('wrapper').appendChild(map);
				dom.by_id('subtitle').innerHTML = data.name;
				$('.tile').each(function(i, e){
					$(e).delay(i*7).fadeIn('fast');
				})
				hero.init(data.hero);
				shidiv.hero(data.hero, map);
				$('.hero').delay(500).fadeIn('fast');
				input.init();

				socket.emit('pull', data.hero);
			});
		});
		/*socket.on('move', function(data){
			var _class = $('.hero.me').attr('class');
			_class = _class.replace(/x\d\d?/, 'x'+data.x);
			_class = _class.replace(/y\d\d?/, 'y'+data.y);

			$('.hero').attr('class', _class);
		})*/
		socket.on('joined', function(data){
			var another = shidiv.another(data);
			dom.by_id('tiles').appendChild(another)
			data.sprite = another;
			others[data.uid] = data;

			$('.hero.another').fadeIn('fast');
		});
		socket.on('pull', function(data){
			socket.emit('pulled', hero.stats)
		})
		socket.on('pulled', function(data){
			var another = shidiv.another(data);
			dom.by_id('tiles').appendChild(another)
			data.sprite = another;
			others[data.uid] = data;

			$('.hero.another').fadeIn('fast');
		})
		socket.on('move', function(data){
			if(data.uid !== hero.stats.uid){
				others[data.uid].x = data.x;
				others[data.uid].y = data.y;
				input.move(others[data.uid].sprite, others[data.uid])
			}
		})
	});
})

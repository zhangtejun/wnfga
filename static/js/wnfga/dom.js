var sprites = require('./sprites');

var init = function(callback){
	var html = by_tag_name('html'),
		title = create('title'),
		wrapper = create('div', {id: 'wrapper'}),
		meta = create('meta'),
		//_void = create('img'),

		head = by_tag_name('head'),
		body = by_tag_name('body');

	body.appendChild(wrapper);
	head.appendChild(title);
	head.appendChild(meta);
	//wrapper.appendChild(_void);

	title.text = 'Who Needs Fancy Graphics Anyway';
	sprites.init();

	meta.name = name="viewport";
	meta.content ="width=device-width; initial-scale=1.0; maximum-scale=1.0;";

	//_void.id = 'void';
	//_void.src = '/img/void.png'

	callback();
}

// dom helpers

var create = function(element, options){
	var options = options || {};

	var el = document.createElement(element);
	if(options.id) el.id = options.id;

	return el;
}

var by_tag_name = function(element){
	return document.getElementsByTagName(element)[0];
}

var by_id = function(element){
	return document.getElementById(element);
}

var append = function(appender, appendix){
	appender.appendChild(appendix);
}

var expand = function() {

}

module.exports = {
	init: init,
	by_tag_name: by_tag_name,
	by_id: by_id
}
// The default animate event
function doDefault(object, animationStr) {
	object.css("-webkit-animation", animationStr);
	object.css("-moz-animation", animationStr);
	object.css("-ms-animation", animationStr);
	object.css("-o-animation", animationStr);
	object.css("animation", animationStr);
}

// If user clicks on object
function doClick(object, animationStr) {
	// Set the count variable to 0
	var count = 0;
	object.click(function(e) {
		// Increment each click
		count += 1;
		e.preventDefault();

		// If the click count is even do the latter
		// If the click count is odd do the former
		if (count % 2 !== 0) {
			$(this).css("-webkit-animation", animationStr);
			$(this).css("-moz-animation", animationStr);
			$(this).css("-ms-animation", animationStr);
			$(this).css("-o-animation", animationStr);
			$(this).css("animation", animationStr);
		} else {
			$(this).css("-webkit-animation", "none");
			$(this).css("-moz-animation", "none");
			$(this).css("-ms-animation", "none");
			$(this).css("-o-animation", animationStr);
			$(this).css("animation", "none");
		}
	});
}

// If user hovers on object
function doHover(object, animationStr) {
	object.hover(function() {
		$(this).css("-webkit-animation", animationStr);
		$(this).css("-moz-animation", animationStr);
		$(this).css("-ms-animation", animationStr);
		$(this).css("-o-animation", animationStr);
		$(this).css("animation", animationStr);
	}, function() {
		$(this).css("-webkit-animation", "none");
		$(this).css("-moz-animation", "none");
		$(this).css("-ms-animation", "none");
		$(this).css("-o-animation", animationStr);
		$(this).css("animation", "none");
	});
}

(function($) {
	// $('#image').Animate({
 	// 		name: "spinIn",
	// 		duration: "10s", 
	// 		timingFunction: "linear", 
	// 		delay: "0s",
	// 		iterationCount: "infinite",
	// 		direction: "alternate",
	// 		eventListener: "click"
 	//  });
	$.fn.Animate = function(options) {
		var animationString;
		var eventListener;
		// Establish our name settings for animation
		var settings = $.extend({
			name: null,
			duration: null, 
			timingFunction: null, 
			delay: null,
			iterationCount: null,
			direction: null,
			eventListener: null
		}, options);

		// If the setting is null set it equal to a blank character
		settings.name != null ? settings.name : settings.name = '';
		settings.duration != null ? settings.duration : settings.duration = '';
		settings.timingFunction != null ? settings.timingFunction : settings.duration = '';
		settings.delay != null ? settings.delay : settings.delay = '';
		settings.iterationCount != null ? settings.iterationCount : settings.iterationCount = '';
		settings.direction != null ? settings.direction : settings.direction = '';
		settings.eventListener != null ? settings.eventListener : settings.eventListener = '';

		// Place all the settings in one whole string
		animationString = settings.name + ' ' + settings.duration + ' ' + settings.timingFunction + ' ' + settings.delay + ' ' + settings.iterationCount + ' ' + settings.direction;
		// Print animation string for debugging purposes
		console.log(animationString);
		console.log(settings.eventListener);

		// Do event when on action
		switch (settings.eventListener) {
			case 'click':
				console.log('Event is a click');
				doClick($(this), animationString);
				break;
			case 'hover':
				console.log('Event is a hover');
				doHover($(this), animationString);
				break;
			default:
				console.log('Event is a hover');
				doDefault($(this), animationString);
		}
	}

	// $('#image').Filter({
 	// 		name: "brightness",
	// 		level: "2"
 	// });
	$.fn.Filter = function(options) {
		var unit = "";
		var settings = $.extend({
			name: null,
			level: null
		}, options);

		// filter is blur
		if (settings.name == 'blur') { unit = 'px'; } // pixels
		
		// filter is brighteness
		if (settings.name == 'brightness') { unit = ''; }

		// filter is hue-rotate
		if (settings.name == 'hue-rotate') { unit = 'deg'; } // degree
		
		// filter is contrast, grayscale, invert, opacity, saturate, sepia
		if (settings.name == 'contrast' || settings.name == 'grayscale' || settings.name == 'invert' || settings.name == 'opacity' || settings.name == 'saturate' || settings.name == 'sepia') { unit = '%'; } // percent 

		// combine the css filter effect to a string
		filterString = settings.name + "(" + settings.level + unit + ")";
		console.log(filterString);

		$(this).css("-webkit-filter", filterString);
		$(this).css("-moz-filter", filterString);
		$(this).css("-ms-filter", filterString);
		$(this).css("-o-filter", filterString);
		$(this).css("filter", filterString);
	}
}(jQuery));
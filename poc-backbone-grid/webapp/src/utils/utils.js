/*
* MPP Overlay
* Author: ashfaque.khan@walmart.com
* Descrip: append an loader and mask on divs waiting for response
* Date: 07-02-2013
*/
function ajaxLoader (el, options) {
	var defaults = {
		bgColor 		: '#ffffff',
		opacity			: 0.75
	};
	this.options 	= jQuery.extend(defaults, options);
	this.container 	= $(el);
	
	this.init = function() {
		var container = this.container;
		// Delete any other loaders
		this.remove(); 
		// Create the overlay
		var overlay = $('<div></div>').css({
				'background-color': this.options.bgColor,
				'border-radius':'8px 8px 8px 8px',	
				'opacity':'0.75',
				'width':this.options.width,
				'height':this.options.height,//container.height(),
				'position':'absolute',
				'top':this.options.top,
				'left':this.options.left,
				'z-index':99999
		}).addClass('mpp_overlay');
		container.append(
			overlay.append(
				$('<div></div>').addClass('ajax_loader')
			).show()
		);
    };
	
	this.remove = function(){
		var overlay = this.container.children(".mpp_overlay");
		if (overlay.length) {
			overlay.remove();
		}	
	};

    this.init();
}	



	
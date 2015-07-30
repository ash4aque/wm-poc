var reportingView = Backbone.View.extend({
    template: _.template($("#reporting-template").html()),
    overlay:null,
    initialize : function (options) {
      'use strict';
        _.bindAll(this, 'render', 'updateModel'); 
        
    },
    events:{
    	"click .btn-getReport": "postSearch"
	},
	render:function () {
		$(this.el).empty();
 	    $(this.el).append(this.template());
        return this;
    },
    initialSetup:function(){
    	
    },
    postSearch: function (e) {
    	this.overlay = new ajaxLoader(".mask",{
    		top:0,
    		left:0,
    		height:'100%',
    		width:'100%'
    	});
    	e.preventDefault();
    	var me = this;
    	this.model.set({name:"ahsu", email:"ashu@gmail.com"});
		if($(e.target).hasClass('disabled')){
			return;
		}else{
			this.model.fetch({
                success: function (model, response) {
                    if(response.status == 'OK') {
                        $('.grid').show();//populate model of grid
                        if (me.overlay) me.overlay.remove();
                    } else {
                    	 $('.grid').show();//populate model of grid
                    	alert(response.errors[0].description);
                    	if (me.overlay) me.overlay.remove();
                    }
                }
            });
		}
    	
    },
    updateModel:function(){
    	                             
    }
});

    
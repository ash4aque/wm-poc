var introView = Backbone.View.extend({
    template: _.template($("#intro-template").html()),
    initialize : function (options) {
      'use strict';
        _.bindAll(this, 'render','updateModel','pcdProceedHandler');  
        this.collection.bind("reset", this.render, this);
        this.collection.fetch();
        //this.wizardViews = new WizardViews();
    },
    events:{
    	"click .btn-proceed-pcd": "pcdProceedHandler",
	},
	render:function () {
		if(this.collection.models.length<1){
			this.initialSetup();
		}else{
			_.each(this.collection.models, function(state){
	            $(this.el).empty();
	    	    $(this.el).append(this.template());
	            if(state.attributes.status == 'CONTACT_DETAILS_FILLED') {
	            	
	            }else if(state.attributes.status == 'SIGNED_NDA'){
	            	//this.options.ndaCollection.fetch();
	            	$('.welcomeMessage').show();
	            	$('.btn-proceed-pcd').hide();
	            }else{
	            	
	            }
	      	}, this);
		}
	   
        return this;
    },
    initialSetup:function(){
    	$(this.el).empty();
 	    $(this.el).append(this.template());
 	    //this.togglePCDButton(true);
	 	//this.toggleNDAButton(true);
	 	//$(".nda-proceed-btn").addClass("disabled");
    },
    pcdProceedHandler:function(e){
//    	if($(e.target).hasClass('disabled')){
//			return;
//		}
//    	this.options.prCollecton.fetch();
    	console.info('clicked');
    },
    updateModel:function(){
                                    
	}
});

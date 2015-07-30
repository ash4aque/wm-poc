var startView = Backbone.View.extend({
    tagName : 'div',
    template: _.template($("#start-template").html()),
    initialize:function (options) {
      'use strict';
        _.bindAll(this, 'render','pcdProceedHandler','ndaProceedHandler');
        this.collection.bind("reset", this.render, this);
    },  
    events:{
	    "click .btn-proceed-pcd": "pcdProceedHandler",
	    "click .btn-proceed-nda": "ndaProceedHandler",
	},
	render: function () { 
		if(this.collection.models.length<1 && this.options.prCollecton.models.length<1){
			this.initialSetup();
		}else{
			var currentModel = this.collection.models.length>0?currentModel = this.collection.models:currentModel = this.options.prCollecton.models;
			if(currentModel[0].attributes.status==''){
				this.initialSetup();
			}else{
				_.each(currentModel, function(state){
		            $(this.el).empty();
		    	    $(this.el).append(this.template());
		            if(state.attributes.status == 'CONTACT_DETAILS_FILLED') {
		            	this.updateProgress(50);
		            	this.togglePCDButton(false);
		    		 	this.toggleNDAButton(true);
		            }else if(state.attributes.status == 'SIGNED_NDA'){
		            	this.updateProgress(100);
		            	this.togglePCDButton(false);
		    		 	this.toggleNDAButton(false);
		            }
		      		}, this);
			}
		}
        return this;
    },
    initialSetup:function(){
    	$(this.el).empty();
	 	$(this.el).append(Mustache.to_html($("#start-template").html(),{}));
		this.togglePCDButton(true);
	 	this.toggleNDAButton(true);
	 	//$(".nda-proceed-btn").addClass("disabled");
    },
    pcdProceedHandler:function(e){
    	if($(e.target).hasClass('disabled')){
			return;
		}
    	this.options.prCollecton.fetch();
    },
    ndaProceedHandler:function(e){
    	if($(e.target).hasClass('disabled')){
			return;
		}
    	this.options.ndaCollection.fetch();
    },
    updateProgress:function(val){
    	if(!isNaN(val) && undefined != typeof val){
    		//var pVal = parseInt($('.bar').css('width'))+val;
        	$('.bar').css('width',(val)+'%');
        	$('.barTitle').html(val+'%');
    	}
    },
    togglePCDButton:function(bool){
    	if(bool){
    		$(".pcd-proceed-btn").show();
       	 	$(".pcd-proceed-link").hide();
    	}else{
    		$(".pcd-proceed-btn").hide();
       	 	$(".pcd-proceed-link").show();
    	}
    },
    toggleNDAButton:function(bool){
    	if(bool){
    		$(".nda-proceed-btn").show();
    		$(".nda-proceed-btn").removeClass("disabled");
       	 	$(".nda-proceed-link").hide();
    	}else{
    		$(".nda-proceed-btn").hide();
       	 	$(".nda-proceed-link").show();
    	}
    },
    updateModel:function(){
    	
    }
});
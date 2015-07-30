var ndaView = Backbone.View.extend({
    tagName : 'div',
    template:_.template($("#nda-template").html()),
    initialize:function (options) {
        _.bindAll(this, 'render', 'updateModel'); 
        this.collection.bind('reset', this.render,this);
    }, 
    events:{
    	 "click .btn-save": "updateModel"
	},
    render:function () {
    	var json={};
    	if(this.collection.models.length<1){
		 	$(this.el).empty();
		 	$(this.el).append(Mustache.to_html($("#nda-template").html(),{}));
		}else{
			_.each(this.collection.models, function(profile){
	          $(this.el).empty();
		        $(this.el).append(this.template);
	            $('.ndaContent').html(profile.attributes.templateContent);
	            
	            if(this.options.prCollecton.models.length >0) { 
	            	if(this.options.prCollecton.models[0].attributes.status == 'SIGNED_NDA') { 
	               	 	$(".ndaagree").addClass("disabled");
	               	 	$(".accept-nda").hide();
	               	 	$(".nda-title").html("Please read the NDA");
		            }
	            	json = JSON.parse(JSON.stringify(this.options.prCollecton.models[0].toJSON())); 
	            	 $('.nda-user-info').empty();
	             	 $('.nda-user-info').html(Mustache.to_html($("#nda-user-template").html(),json));
	            }else{
	            	if(this.options.stateCollection.models[0].attributes.status == 'SIGNED_NDA') { 
	               	 	$(".ndaagree").addClass("disabled");
	               	 	$(".accept-nda").hide();
	               	 	$(".nda-title").html("Please read the NDA");
		            }
	            	json = JSON.parse(JSON.stringify(this.options.stateCollection.models[0].toJSON()));
	            	$('.nda-user-info').empty();
	             	$('.nda-user-info').html(Mustache.to_html($("#nda-user-template").html(),json));
	            }
	           
	      }, this);
		}
	  return this;
    },
    updateModel:function(){
      this.collection.update({
        	templateId:1,
			preRegisterationId:1,
			fileUrl: "",
			signedBy: "mayur",
			customerId:1,
			place: "bangalore"
			
        });                             
      /*this.collection.models[0].set({
			templateId:1,
			preRegisterationId:1,
			fileUrl: "",
			signedBy: "mayur",
			customerId:1,
			createdDate: "2013-12-23 12:12:12.000000",
			createdBy: "mayur",
			updatedDate: "2013-12-23 12:12:12.000000",
			updatedBy: "mayur",
			place: "bangalore"
	
	});*/ 

    	
    	
    }
});
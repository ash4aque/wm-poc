var pcdFormView = Backbone.View.extend({
    tagName : 'div',
    template: _.template($("#pcdform-template").html()),
    counter:0,
    initialize :function () {
    	this.counter = 0;
    	_.bindAll(this, 'render', 'updateModel','ndaProceedHandler'); 
//        this.model.bind("reset", this.render, this);
//        this.model.on( 'all', this.render, this );
//		  this.collection.fetch();
        this.collection.bind('reset', this.render,this);
        
    }, 
    events:{
	    "click .btn-save": "updateModel",
	    "click .btn-proceed-nda": "ndaProceedHandler",
	    "click .add":"addInput",
	    "click .remove":"removeInput"
	},
    render:function () { 
    	console.log('init');
    	if(this.collection.models.length<1){
    		 	$(this.el).empty();
    		 	$(this.el).append(Mustache.to_html($("#pcdform-template").html(),{}));
    	}else{
    		_.each(this.collection.models, function(profile){
                var json = JSON.parse(JSON.stringify(profile.toJSON()));
                $(this.el).empty();
                $(this.el).append(Mustache.to_html($("#pcdform-template").html(),json));
                if(profile.attributes.status == 'CONTACT_DETAILS_FILLED') {
	            	this.toggleNextButton(true);
	            }else if(profile.attributes.status == 'SIGNED_NDA'){
	            	 $("input").attr("disabled", "disabled");
	            	this.toggleNextButton(true);
	            }else{
	            	this.toggleNextButton(false);
	            }
            }, this);
    	}
    	
    	
    	this.showTooltip();
        return this;
       
    },
    showTooltip:function(){
    	$('a[rel=popover]')
        .popover({
            placement : 'right',
            trigger : 'hover'
        });
        
//    	$(".help").tooltip({
//            'selector': '',
//            'placement': 'right'
//        });
    },
    addInput:function(){
    	var me = this;
    	$('.remove').show();
    	if(me.counter>=2){
            alert("Only 3 phone number allow");
            return false;
    	}
    	var templateString = '<div class="form-inline field">'+
    	'  <div class="control-group">'+
        '   <div class="controls">'+
        '    	<input type="text" id="pnum" value="'+"{{phone}}"+'" name="pnum'+me.counter+'" class="x-vlarge"></input>'+
        '    </div>'+
        ' </div>'+
        ' <div class="control-group">'+
        '   <div class="controls">'+
        '       <input type="text" name="ext'+me.counter+'" value="'+"{{extension}}"+'" class="x-small" id="ext">'+
        '   </div>'+
        ' </div>'+
        '</div>';
    	$(Mustache.to_html(templateString, {})
    	).fadeIn('slow').appendTo('.input-placeholder');
    	
    	
    	me.counter++;
    },
    removeInput:function(e){
    	if(this.counter > 0) {
            $('.field:last').remove();
            if(this.counter == 1){
            	$('.remove').hide();
            }
            this.counter--;
        }
    },
    toggleNextButton:function(bool){
    	if(bool){
    		$(".pcdsave").hide();
    		$(".proceed").show();
    	}else{
    		$(".pcdsave").show();
    		$(".proceed").hide();
    	}
    },
    ndaProceedHandler:function(e,scope){
    	if($(e.target).hasClass('disabled')){
			return;
		}
    	this.options.ndaCollection.fetch({
            success: function (model, response) {
                if(response.status == 'OK') {
                	if(scope){
                		var nextViewName = e.target.href.split('#')[1];
                        scope.moveToView(nextViewName);
                	}
                } else {
                	alert(response.errors[0].description);
                }
            }
        });
    },
    updateModel:function(){
    	var preStatus='';
    	if(this.collection.models.length >0){
    		var preModel = this.collection.models[0];
        	preStatus = preModel.attributes.status;
    	}
        this.collection.update({
        	firstName:$('#fname',this.el).val(),
        	lastName:$('#lname',this.el).val(),
        	designation:$('#desg',this.el).val(),
        	companyDisplayName:$('#dname',this.el).val(),
			email:$('#email',this.el).val(),
			phone: $('#pnum',this.el).val(),
			extension: $('#ext',this.el).val(),
			addressLine1: $('#addline1',this.el).val(),
			addressLine2: $('#addline2',this.el).val(),
			zip:$('#zip',this.el).val(),
			country:$('#country',this.el).val(),
			legalName:$('#cname',this.el).val(),
			addressId:"2",
			status:preStatus,
			state:$('#state',this.el).val(),
			city:$('#city',this.el).val(),
			createdBy:"MPPUser",
			updatedBy:"MPPUser"
        });                              
    }
});
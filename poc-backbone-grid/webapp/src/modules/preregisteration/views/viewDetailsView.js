var viewDetailsView = Backbone.View.extend({
    tagName : 'div',
    template: _.template($("#viewdetails-template").html()),
    initialize :function (options) {
        _.bindAll(this, 'render'); 
        this.collection.bind('reset', this.render,this);
        this.options.ndaCollection.bind('reset',this.postRender,this);
    }, 
    events:{

    },
    render:function () { 
    	if(this.collection.models.length<1){
    		 	$(this.el).empty();
    		 	$(this.el).append(Mustache.to_html($("#viewdetails-template").html(),{}));
    	}else{
    		_.each(this.collection.models, function(profile){
                var json = JSON.parse(JSON.stringify(profile.toJSON()));
                $(this.el).empty();
                $(this.el).append(Mustache.to_html($("#viewdetails-template").html(),json));
                
                //json = JSON.parse(JSON.stringify(this.collection.models[0].toJSON()));
            	//$('.viewdetails-user-info').empty();
             	//$('.viewdetails-user-info').html(Mustache.to_html($("#viewdetail-userinfo-template").html(),json));
                
                
            }, this);
    	}
        return this;
    },
    postRender:function(){
    	console.log('init');
    	if(this.collection.models.length<1){
    		 	$(this.el).empty();
    		 	$(this.el).append(Mustache.to_html($("#viewdetails-template").html(),{}));
    	}else{
    		_.each(this.collection.models, function(profile){
                var json = JSON.parse(JSON.stringify(profile.toJSON()));
                $(this.el).empty();
                $(this.el).append(Mustache.to_html($("#viewdetails-template").html(),json));
                
                //json = JSON.parse(JSON.stringify(this.collection.models[0].toJSON()));
            	//$('.viewdetails-user-info').empty();
             	//$('.viewdetails-user-info').html(Mustache.to_html($("#viewdetail-userinfo-template").html(),json));
                
                
            }, this);
    	}
        return this;
    },
   updateModel:function(){
                                 
    }
});
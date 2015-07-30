var appView = Backbone.View.extend({
        tagName: 'div',
        initialize: function (options) {
            _.bindAll(this, 'render','insertView', 'save','moveToView');             
            $(this.el).append($($("#appview-template").html()));            
            this.wizardViewContainer = $(this.el).find('#wizard-view-container');            
            this.wizardViews = new WizardViews();
            
            
        },    
        events: {            
            "click .btn-save": "save",
            "click .btn-moveToView":"moveToView"
        },
        render: function () {
            var currentView = this.wizardViews.getCurrent();            
            if (currentView !== null) {
                //show only the current view
                this.wizardViewContainer.find('.wizard-view:parent').hide();                
                $(currentView.getView().render().el).show();
            }
            return this;
        },
        insertView: function (view) {
            this.wizardViewContainer.append($(view.ref.render().el).hide());            
            this.wizardViews.insertView(view);
        },
        updateModel: function () {
            this.wizardViews.getCurrent().getView().updateModel();
        },
        moveToView:function (e){
        	if($(e.target).hasClass('disabled')){
    			return;
    		}else{
    			var nextViewName = '';
            	if(_.isObject(e)){
            		nextViewName = e.target.href.split('#')[1];
            	}else{
            		nextViewName = e;
            	}
            	
                this.updateModel();
                this.wizardViews.setCurrentByName(nextViewName);
//                if(nextViewName == 'start'){
//                	this.updateProgressBar();
//                }
                this.render();
                return false;
    		}
        },
//        updateProgressBar:function(val){
//        	this.wizardViews.getCurrent().getView().updateProgress(val);
//        },
        getView:function(name){
        	return this.wizardViews.getViewByName(name);
        },
        save: function (e) {
        	var ol = new ajaxLoader(".mask",{
        		top:0,
        		left:0,
        		height:'100%',
        		width:'100%',
        		top:0
        	});
        	e.preventDefault();
        	var me = this;
        	if($(e.target).hasClass('pcdsave')){
        		if($(e.target).hasClass('disabled')){
        			return;
        		}else{
        			this.collection.models[0].url = ajaxResourceUrl + "&SERVICE_KEY=preregister_addPreRegistrationDetails";
                	this.collection.models[0].save({}, {
                        success: function (model, response) {
                            console.log("success");
                            //var payload = model.attributes.payload;
                            if(response.status == 'OK') {
                                var nextViewName = e.target.href.split('#')[1];
                                me.updateModel();
                                if(me.collection.models.length>0){
                                	me.collection.models[0].set("status","CONTACT_DETAILS_FILLED");
                                }
                                me.wizardViews.getCurrent().getView().ndaProceedHandler(e,me);
//                                if(me.options.stateCollection.models.length>0){
//                                	me.options.stateCollection.models[0].set("status","CONTACT_DETAILS_FILLED");
//                                }
                               // me.moveToView(nextViewName);
                                //me.updateProgressBar(50);
                                //me.collection.models[0].attributes.status == 'CONTACT_DETAILS_FILLED';
                                //me.getView('start').getView().updateModel();
                                //me.getView('start').getView().togglePCDButton(false);
                                //me.getView('start').getView().toggleNDAButton(true);
                                //if (ol) ol.remove();
                            } else {
                            	//var res = response;
                            	//var mo = model;
                            	if (ol) ol.remove();
                            	alert(response.errors[0].description);
                            }
                        }
                    });
        		}
        	}else{
        		if($(e.target).hasClass('disabled')){
        			return;
        		}else{
        			this.options.ndaCollection.models[0].url = ajaxResourceUrl + "&SERVICE_KEY=preregister_addNdaPreRegisteration";
                	this.options.ndaCollection.models[0].save({}, {
                        success: function (model, response) {
                            if(response.status == 'OK') {
                            	console.log("success");
                                var nextViewName = e.target.href.split('#')[1];
                                me.updateModel();
                                if(me.collection.models.length>0){
                                	me.collection.models[0].set("status","SIGNED_NDA");
                                }
                                me.moveToView(nextViewName);
                                if (ol) ol.remove();
                                //me.updateProgressBar(100);
                                // me.options.ndaCollection.models[0].attributes.status == 'SIGNED_NDA';
                                //me.getView('start').getView().updateModel();
                                //me.getView('start').getView().togglePCDButton(false);
                                //me.getView('start').getView().toggleNDAButton(false);
                            } else {
                            	//var res = response;
                            	//var mo = model;
                            	if (ol) ol.remove();
                            	alert(response.errors[0].description);
                            }
                        }
                    });
        		}
        	}
        	
        }
    }); 
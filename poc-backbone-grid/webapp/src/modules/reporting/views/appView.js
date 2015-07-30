var appView = Backbone.View.extend({
        tagName: 'div',
        initialize: function (options) {
            _.bindAll(this, 'render','insertView');             
            $(this.el).append($($("#appview-template").html()));            
            this.wizardViewContainer = $(this.el).find('#wizard-view-container');            
            this.wizardViews = new WizardViews();
            
            
        },    
        events: {            
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
                this.render();
                return false;
    		}
        },
        getView:function(name){
        	return this.wizardViews.getViewByName(name);
        }
    }); 
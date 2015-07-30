var appView = Backbone.View.extend({
        tagName: 'div',
        overlay:null,
        initialize: function (options) {
            _.bindAll(this, 'render','insertView','moveToView','preparer');  
            $(this.el).append($($("#appview-template").html()));            
            this.wizardViewContainer = $(this.el).find('#wizard-view-container');            
            this.wizardViews = new WizardViews();
        },    
        events: {            
            "click .btn-moveToView":"moveToView",
            "click .btn-preparer" : "preparer"
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
        showPrevView: function(){
            var currentView = this.wizardViews.getCurrent();            
            if (currentView !== null) {
                this.wizardViewContainer.find('.wizard-view:parent').hide();    
                $(currentView.getView().ref.el).show();
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
        preparer:function(e){
            if($(e.target).hasClass('disabled')){
                return;
            }else{
            	this.overlay = new ajaxLoader(".mask",{
            		top:0,
            		left:0,
            		height:'100%',
            		width:'100%'
            	});
                var me=this;
                this.model.clear();
                this.model.set({
                    orderNo: $(e.target).html(),
                    startDate: "",
                    endDate: "",
                    sellerOrganizationId:""
                });
                this.model.save({},{
                    success: function (model, response) {
                        if(response.status == 'OK') {
                            var records = response.payload[0].orderLines;
                            me.options.detailGrid.update(records);
                            me.options.orderInfo.set({
                                "enterpriseCode": response.payload[0].enterpriseCode,
                                "orderNo": response.payload[0].orderNo,
                                "customerPONo": response.payload[0].customerPONo,
                                "orderType": response.payload[0].orderType,
                                "orderDate": response.payload[0].orderDate,
                                "customerEmailId": response.payload[0].customerEmailId,
                                "sellerOrganizationCode": response.payload[0].sellerOrganizationCode,
                                "paymentStatus": response.payload[0].paymentStatus,
                                "status": response.payload[0].status,
                            });
                            var nextViewName = '';
                            if(_.isObject(e)){
                                nextViewName = e.target.href.split('#')[1];
                            }else{
                                nextViewName = e;
                            }
                            me.updateModel();
                            me.wizardViews.setCurrentByName(nextViewName);
                            if (me.overlay) me.overlay.remove();
                            me.render();
                        } else {
                        	if (me.overlay) me.overlay.remove();
                            alert(response.errors[0].description);
                        }
                    }
                });
                
                return false;
            }
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
var orderStatus = Backbone.View.extend({
    template: _.template($("#orderstatus-template").html()),
    overlay:null,
    gridview:null,
    initialize : function (options) {
      'use strict';
        _.bindAll(this, 'render', 'updateModel'); 
    },
    events:{
    	"click .btn-search": "postSearch"
	},
	render:function () {
		$(this.el).empty();
 	    $(this.el).append(this.template());
 	    this.datePickerInit();
 	    if($('.grid').length>0){
			 this.postSearch(false);
		}
        return this;
    },
    datePickerInit:function(){
    	$("#from" ).datepicker({
    		showOn:'none',
  	        defaultDate: "+1w",
  	        changeMonth: true,
  	        dateFormat:"yy-mm-dd",
  	        numberOfMonths: 2,
  	        onClose: function( selectedDate ) {
  	        	$("#to" ).datepicker( "option", "minDate", selectedDate );
  	        },
  	        beforeShow: function(input, inst) {
//  	        	var widget = $(inst).datepicker('widget');
//  	        	widget.css('margin-left', $(input).outerWidth());
//  	        	widget.css( 'top', (input.offsetHeight-35)+ 'px');
  	        }
  	    });
    	$("#to" ).datepicker({
    		showOn:'none',
    		defaultDate: "+1w",
  	      	changeMonth: true,
  	        dateFormat:"yy-mm-dd",
  	      	numberOfMonths: 2,
  	      	onClose: function( selectedDate ) {
  	      		$("#from" ).datepicker( "option", "maxDate", selectedDate );
  	      	}
  	    });
    	$('#fromButton').click( function() {
    	    $('#from').datepicker('show');
    	});
    	$('#toButton').click( function() {
    	    $('#to').datepicker('show');
    	});
    	$("#from").datepicker('setDate', new Date());
    	$("#to").datepicker('setDate', new Date());
    },
    postSearch: function (e) {
    	var isDisabled=false;
    	if(e){
    		e.preventDefault();
    		isDisabled = $(e.target).hasClass('disabled');
    	}
    	var me = this;
    	this.model.clear();
    	this.model.set({
    		orderNo: $('#order',this.el).val(),
    		sellerOrganizationId: $('#socode',this.el).val(),
    		startDate:"2013-01-22",//$('#from',this.el).val(),
    		endDate:"2013-01-24"//$('#to',this.el).val()
    	});
		if(isDisabled){
			return;
		}else{
			this.overlay = new ajaxLoader(".mask",{
	    		top:0,
	    		left:0,
	    		height:'100%',
	    		width:'100%'
	    	});
			this.model.save({},{
                success: function (model, response) {
                    if(response.status == 'OK') {
                    	var records = response.payload;
                    	me.updatebbGrid(records);
                        $('.grid').show();//populate model of grid
                        if (me.overlay) me.overlay.remove();
                    } else {
                    	alert(response.errors[0].description);
                    	if (me.overlay) me.overlay.remove();
                    }
                }
            });
		}
    	return;
    },
    updatebbGrid:function(collection){
    	$('.grid').empty();
    	
    	var gridCollection = this.options.statusGrid;
    	gridCollection.update(collection);
//    	var gridview = new bbGrid.View({
//  		  container: $('.grid'),            
//  		  rows: 5,
//  		  rowList: [5, 25, 50, 100],
//  		  collection: gridCollection,
//  		  colModel: [{ title: 'Email Id', name: 'customerEmailId', index: true, sorttype: 'number' },
//  		             { title: 'PO No', index: true, name: 'customerPONo'},
//  		             { title: 'Enterprise Code', index: true, name: 'enterpriseCode'},
//  		             { title: 'Order Date', index: true, name: 'orderDate' },
//  		             { title: 'Order No', index: true, name: 'orderNo' },
//  		             { title: 'Order Type', index: true, name: 'orderType' },
//  		             { title: 'Payment Status', index: true, name: 'paymentStatus' },
//  		             { title: 'Seller Org', index: true, name: 'sellerOrganizationCode' },
//  		             { title: 'Status', index: true, name: 'status' }],
//  		  enableSearch: true,
//  		  onBeforeRender:function(){
//  			var temp;
//  			_.each(this.collection.models, function(model){
//                if(model.attributes.orderNo != '') {
//                	model.attributes.orderNo='<a href="#details" class="btn-preparer">'+model.attributes.orderNo+'</a>';
//	            }
//            }, this);
//  		  }
//  		});
    			var columns = [
    			       { label: 'Email Id',name:'customerEmailId',cell:"string"},        
    			       { label: 'PO No',name:'customerPONo',cell:"string"},
    	               { label: 'Enterprise Code', name:'enterpriseCode',cell:"string"},
    	               { label: 'Order Date', name: 'orderDate',cell:"string"},
    	               { label: 'Order No', name: 'orderNo',cell:"string"},
    	               { label: 'Order Type',name: 'orderType',cell:"string"},
    	               { label: 'Payment Status',name: 'paymentStatus',cell:"string"},
    	               { label: 'Seller Org',name: 'sellerOrganizationCode',cell: "string"},
    	               { title: 'Status', name: 'status',cell: "string"  },
    	               ];

    	       		// Initialize a new Grid instance
    	       	var grid = new Backgrid.Grid({
    	       		  columns: columns,
    	       		  collection:gridCollection,
    	       		  footer: Backgrid.Extension.Paginator
    	       	});
    	       	$(".grid").append(grid.render().$el);
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	return;
    },
    updateModel:function(){
    	                             
    }
});

      
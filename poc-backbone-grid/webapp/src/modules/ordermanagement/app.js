Backbone.emulateHTTP = true;
Backbone.emulateJSON = true;

var OrderDetailGrid = Backbone.PageableCollection.extend({
	state: {
		pageSize: 2
	},
	mode: "client" // page entirely on the client side
});
var OrderStatusGrid = Backbone.PageableCollection.extend({
	state: {
		pageSize: 5
	},
	mode: "client" // page entirely on the client side
});



var OrderDetailModel = Backbone.Model.extend({
	urlRoot: ajaxResourceUrl + "&SERVICE_KEY=orderstatus_getOrderDetails",
    parse: function(response){
 	   return response.payload;
    },
    url: function() {
        var base = this.urlRoot || "";
        if (this.isNew()) return base;
    	return base;
    }
});




var OrderStatusModel = Backbone.Model.extend({
    urlRoot: ajaxResourceUrl + "&SERVICE_KEY=orderstatus_getOrderList",
    parse: function(response){
	   return response.payload;
    },
    url: function() {
    	var base = this.urlRoot || "";
    	if (this.isNew()) return base;
    	return base;
    }
});

var OrderInfo = Backbone.Model.extend({});
var orderinfo = new OrderInfo();


var orderdetailmodel = new OrderDetailModel();
var orderstatusmodel = new OrderStatusModel();
var detailGridCols = new OrderDetailGrid();
var statusGridCols = new OrderStatusGrid();

/************************************************/

$(function(){    
  var appview = new appView({
	  model:orderdetailmodel,
	  detailGrid:detailGridCols,
	  orderInfo:orderinfo
  }); 
  var orderstatus = new orderStatus({
	  model:orderstatusmodel,
	  statusGrid:statusGridCols
	  
  });
  var orderdetails = new orderDetails({
	  detailGrid:detailGridCols,
	  orderInfo:orderinfo
  });
  appview.insertView({ref:orderstatus,name:'status'});
  appview.insertView({ref:orderdetails,name:'details'});
  $('#wizard-container').append(appview.render({init:true}).el);
  var wv = new WizardViews();
  wv.setCurrentByName('status');
  appview.render();
});
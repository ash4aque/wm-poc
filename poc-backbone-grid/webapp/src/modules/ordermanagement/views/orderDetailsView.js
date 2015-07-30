var orderDetails = Backbone.View.extend({
    tagName : 'div',
    template: _.template($("#orderdetails-template").html()),
    initialize :function (options) {
        _.bindAll(this, 'render','updatebbGrid'); 
    }, 
    events:{

    },
    render:function () { 
    	if(this.options.orderInfo){
    		var json = JSON.parse(JSON.stringify(this.options.orderInfo.toJSON()));
            $(this.el).empty();
            $(this.el).append(Mustache.to_html($("#orderdetails-template").html(),json));
    	}else{
    		$(this.el).empty();
            $(this.el).append(Mustache.to_html($("#orderdetails-template").html(),{}));
    	}
    	this.updatebbGrid();
        return this;
    },
    updatebbGrid:function(){
    	$('.stGrid').empty();
    	var columns = [
    		{ label: 'Expected Delivery Date',name:'expectedDeliveryDate',cell:"string"},
            { label: 'Expected Shipment Date', name:'expectedShipmentDate',cell:"string"},
            { label: 'Item Desc', name: 'itemDesc',cell:"string"},
            { label: 'Item Id', name: 'itemId',cell:"string"},
            { label: 'Qty', name: 'orderedQty',cell:"string"},
            { label: 'Status',name: 'status',cell:"string"},
            { label: 'Status Date',name: 'statusDate',cell:"string"},
            { label: 'UPC Code',name: 'upcCode',cell: "string"}];

    		// Initialize a new Grid instance
    	var grid = new Backgrid.Grid({
    		  columns: columns,
    		  collection:this.options.detailGrid,
    		  footer: Backgrid.Extension.Paginator
    	});
    	$(".stGrid").append(grid.render().$el);
    	$('.stGrid').show();
    	return;
    },
    updateModel:function(){
                                 
    }
});
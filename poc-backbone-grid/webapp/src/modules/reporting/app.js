Backbone.emulateHTTP = true;
Backbone.emulateJSON = true;

var ReportModel = Backbone.Model.extend({
    initialize: function() {
       // this.on('all', function(e) { console.log(this.get('name') + " event: " + e); });
    },
    urlRoot: ajaxResourceUrl,
    parse: function(response){
	   return response.payload;
    },
    url: function() {
        var base = this.urlRoot || (this.collection && this.collection.url) || "";
        if (this.isNew()) return base;
 
        return base + "&SERVICE_KEY=" + encodeURIComponent(this.id);
    }
});
//var report = new ReportModel({id:'reporting_getReportList'});
var report = new ReportModel({id:'reporting_getSummaryReport'});


var Grid = Backbone.Collection.extend({
});

var gridCols = new Grid(
		[{"id": 1,"age": 33,"name": "Layla Walkman","company": "Fibrotouch","phone": "862-438-2471","email": "layla@fibrotouch.com","address": "39556, Boulder, Madison Avenue"}, 
		 {"id":2,"age": 21,"name": "Isabelle Walkman","company": "Fibroserve","phone": "880-536-2897","email": "isabelle@fibroserve.com","address": "29669, Aurora, Greene Street"}, 
		 {"id": 3,"age": 22,"name": "Kaylee Gilson","company": "Robocomm","phone": "848-443-2507","email": "kaylee@robocomm.com","address": "28284, Athens, Wooster Street"}, {"id": 4,"age": 28,"name": "Gabriella Brown","company": "Truetomic","phone": "806-464-3672","email": "gabriella@truetomic.com","address": "24036, CorpusChristi, Park Avenue South at 19th Street"}, {"id": 5,"age": 25,"name": "Morgan WifKinson","company": "Turbomart","phone": "845-445-3784","email": "morgan@turbomart.com","address": "24490, Daly, Elm street"},{"id": 6,"age": 33,"name": "Layla Walkman","company": "Fibrotouch","phone": "862-438-2471","email": "layla@fibrotouch.com","address": "39556, Boulder, Madison Avenue"}, {"id":7,"age": 21,"name": "Isabelle Walkman","company": "Fibroserve","phone": "880-536-2897","email": "isabelle@fibroserve.com","address": "29669, Aurora, Greene Street"}, {"id": 8,"age": 22,"name": "Kaylee Gilson","company": "Robocomm","phone": "848-443-2507","email": "kaylee@robocomm.com","address": "28284, Athens, Wooster Street"}, {"id": 9,"age": 28,"name": "Gabriella Brown","company": "Truetomic","phone": "806-464-3672","email": "gabriella@truetomic.com","address": "24036, CorpusChristi, Park Avenue South at 19th Street"}, {"id": 10,"age": 25,"name": "Morgan WifKinson","company": "Turbomart","phone": "845-445-3784","email": "morgan@turbomart.com","address": "24490, Daly, Elm street"},{"id": 11,"age": 33,"name": "Layla Walkman","company": "Fibrotouch","phone": "862-438-2471","email": "layla@fibrotouch.com","address": "39556, Boulder, Madison Avenue"}, {"id":12,"age": 21,"name": "Isabelle Walkman","company": "Fibroserve","phone": "880-536-2897","email": "isabelle@fibroserve.com","address": "29669, Aurora, Greene Street"}, {"id": 13,"age": 22,"name": "Kaylee Gilson","company": "Robocomm","phone": "848-443-2507","email": "kaylee@robocomm.com","address": "28284, Athens, Wooster Street"}, {"id": 14,"age": 28,"name": "Gabriella Brown","company": "Truetomic","phone": "806-464-3672","email": "gabriella@truetomic.com","address": "24036, CorpusChristi, Park Avenue South at 19th Street"}, 
		 {"id": 15,"age": 25,"name": "Morgan WifKinson","company": "Turbomart","phone": "845-445-3784","email": "morgan@turbomart.com","address": "24490, Daly, Elm street"}
		 ]);



$(function(){    
  var appview = new appView({model:report}); 
  var reportingview = new reportingView({model:report});
  appview.insertView({ref:reportingview,name:'report'});
  $('#wizard-container').append(appview.render().el);
  
  
  
//var gridview = new bbGrid.View({
//  container: $('#wizard-container'),            
//  rows: 5,
//  rowList: [5, 25, 50, 100],
//  collection: grid,
//  colModel: [{ title: 'ID', name: 'id', index: true, sorttype: 'number' },
//             { title: 'Full Name', index: true, name: 'name'},
//             { title: 'Company', index: true, name: 'company'},
//             { title: 'Email', index: true, name: 'email' }],
//  enableSearch: true,
//  onReady: function(){
//      $('a', this.$el).removeAttr('href');
//  }
//}); 

//  var App = {};
//  
//  App._exampleCollection = Backbone.Collection.extend({
//      url: ajaxResourceUrl + "&SERVICE_KEY=reporting_getSummaryReport",
//    	  parse: function(response){
//    		   return response.payload;
//    	    },
//    	    
//  });
//  
//  App.exampleCollection = new App._exampleCollection();
// 
//  
//  App.SearchExampleGrid = new bbGrid.View({
//      container: $('#bbgrid'),            
//      rows: 5,
//      rowList: [5, 25, 50, 100],
//      collection: App.exampleCollection,
//      colModel: [{ title: 'ID', name: 'id', index: true, sorttype: 'number' },
//                 { title: 'Full Name', index: true, name: 'name'},
//                 { title: 'Company', index: true, name: 'company'},
//                 { title: 'Email', index: true, name: 'email' }],
//      enableSearch: true,
//      onReady: function(){
//          $('a', this.$el).removeAttr('href');
//      }
//  });    
//  
//  App.exampleCollection.fetch({ wait: true, 
//      success:function(collection) {
//      }
//  });
//  
  
  
});

/*************************************************************/


	

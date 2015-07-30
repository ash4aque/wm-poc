Backbone.emulateHTTP = true;
Backbone.emulateJSON = true;

var Profile = Backbone.Model.extend({});
var ndaModel = Backbone.Model.extend({});
var State = Backbone.Model.extend({});

var ProfileList = Backbone.Collection.extend({
	   model: Profile,
	   url: ajaxResourceUrl + "&SERVICE_KEY=preregister_getPreRegistrationDetails",
	   parse: function(response){
		   return response.payload;
	   }
	});
var ndaList = Backbone.Collection.extend({
	   model: ndaModel,
	   url: ajaxResourceUrl + "&SERVICE_KEY=preregister_getNda",
	   parse: function(response){
		   return response.payload;
	   }
	});
var StateList = Backbone.Collection.extend({
	   model: State,
	   url: ajaxResourceUrl + "&SERVICE_KEY=preregister_getPreRegistrationDetails",
	   parse: function(response){
		   return response.payload;
	   }
	});

var ndaObj = new ndaList();
var profiles = new ProfileList();
var state = new StateList();



/************************************************/

$(function(){    
  var appview = new appView({collection:profiles,ndaCollection:ndaObj}); 
  var introview = new introView({collection:profiles,ndaCollection:ndaObj});
  //var introview = new introView({collection:state,prCollecton:profiles,ndaCollection:ndaObj});
  //var startview = new startView({collection:state,prCollecton:profiles,ndaCollection:ndaObj});
  var pcdformview = new pcdFormView({collection:profiles,ndaCollection:ndaObj});
  var ndaview = new ndaView({collection:ndaObj,prCollecton:profiles}); 
  var viewdetailsview = new viewDetailsView({collection:profiles,ndaCollection:ndaObj});
  
  appview.insertView({ref:introview,name:'intro'});
  //appview.insertView({ref:startview,name:'start'});
  appview.insertView({ref:pcdformview,name:'pcdform'});
  appview.insertView({ref:ndaview,name:'disclosure'});
  appview.insertView({ref:viewdetailsview,name:'viewdetails'});
  $('#wizard-container').append(appview.render().el);
});
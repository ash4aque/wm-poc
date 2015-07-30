Ext.Loader.setConfig({ enabled: true });


Ext.application({
    name: 'PreRegistration',
    requires:[
              'PreRegistration.view.CardLayoutPanel'
             ],
    appFolder:'/preregistration_portlet/js/app',
    launch: function() {
    	Ext.onReady(function(){
	    	
	    	Ext.create('Ext.panel.Panel', {
	    		height: 800,
	            minSize: 150,
	            items: [{
	            	xtype : 'mycardlayout'
	            }],
	            renderTo: 'mydiv'
	        });
    	});
     }
}); 

Ext.define('PreRegistration.view.CardLayoutPanel', {
	    extend: 'Ext.panel.Panel',
	    alias: 'widget.mycardlayout',
	    requires:[
	              'PreRegistration.view.Login',
	              'PreRegistration.view.SignUp',
	              'PreRegistration.view.ForgotPassword',
	              'PreRegistration.view.PrimaryContactDetails',
	              'PreRegistration.view.WelcomeToMarketPlace',
	              'PreRegistration.view.NDA',
	             ],
	    title: 'Walmart MarketPlace Portal',
	    height: 800,
	    layout: {
	    	type:'card',deferredRender:true,
	    },
	    activeItem: 0,
	   bodyStyle: 'padding:0px',
	    defaults: {
	        border: false
	    },
	    id : 'mainCardContainer',
	    /*bbar: [
	           {
	               id: 'movePrev',
	               text: 'Back',
	               handler: function(btn) {
	                   navigate(btn.up("panel"), "prev");
	               },
	               disabled: true
	           },
	           '->', 
	           {
	               id: 'moveNext',
	               text: 'Next',
	               handler: function(btn) {
	                   navigate(btn.up("panel"), "next");
	               }
	           }
	       ],*/
	       items: [
			{
			    id: 'login_card',
			    xtype: 'login'
			},
			 {
		           id: 'signup_card',
		           xtype : 'su'
		    },
		    {
		           id: 'forgotpassword_card',
		           xtype : 'fp'
		    },
		    {
		           id: 'welcometomarketplace_card',
		           xtype : 'wtmp'
		      },  
		    {
	      	   id: 'primarycontactdetails_card',
	      	   xtype : 'pcd'
	         },
	         {
	           id: 'nda_card',
	           xtype : 'nda'
	       },
	       ]
	});
 
 var navigate = function(panel, direction){
	    var layout = panel.getLayout();
	    layout[direction]();
	    Ext.getCmp('movePrev').setDisabled(!layout.getPrev());
	    Ext.getCmp('moveNext').setDisabled(!layout.getNext());
};
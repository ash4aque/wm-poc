Ext.define('PreRegistration.view.NDA', {
	extend: 'Ext.form.Panel',
	requires: ['Ext.form.Panel'],
	alias : 'widget.nda',
	//height: 1000,
	//width: 1000,
	bodyPadding: 10,
	title: 'Walmart MarketPlace NDA Page',
	autoScroll: true,
	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			xtype: 'form',
			padding: '5 5 0 5',
			border: false,
			style: 'background-color: #000;',
			items: [
			        {
			        	xtype: 'label',
			        	html:'<header><h1><font size=5>Mutual Non Disclosure Agreement</font></h1><br/><br/><h2>Please read the NDA and accept the terms at the end of the document.</h2></header>', 
			        	text: ''
			        },
			    
			        {
			        	id: 'ndaContent',
			        	xtype: 'label',
			        	text: '',
			        	autoscroll : true,
			        	
			        },
			        {
			        	xtype: 'fieldcontainer',
			        	defaultType: 'checkboxfield',
			        	items: [
			        	        {
			        	        	boxLabel  : 'Yes, I Accept the terms and conditions',                            
			        	        	name      : 'ndaagreeFlag',
			        	        	inputValue: '1',
			        	        	id        : 'ndaagreeCheckBox'
			        	        },
			        	        ]
			        },
			        {
			        	xtype: 'button',
			        	autoRender: true,
			        	height: 30,
			        	width: 87,
			        	allowDepress: false,
			        	enableToggle: false,
			        	pressed: false,
			        	text: 'Sign',
			        	listeners: {
			        		click: {
			        			fn: me.onSignButtonClick,
			        			scope: me
			        		}
			        	}
			        },
			        {
			        	xtype: 'button',
			        	autoRender: true,
			        	height: 30,
			        	width: 87,
			        	allowDepress: false,
			        	enableToggle: false,
			        	pressed: false,
			        	text: 'Cancel',
			        	listeners: {
			        		click: {
			        			fn: me.onCancelButtonClick,
			        			scope: me
			        		}
			        	}
			        },
			        ]
		});

		me.callParent(arguments);
	},

	onSignButtonClick: function(button, e, options) {
		var servletUrl = "/preregistration_portlet/" + "/AjaxServlet";
		var customerId = $('input#hiddenCustomerId').val();
		var customerName = $('input#hiddenCompanyName').val();
		var templateId = $('input#hiddenTemplateId').val();
		if(!Ext.getCmp("ndaagreeCheckBox").getValue()){        	
			Ext.Msg.alert("You must accept Walmart terms and conditions!!!");
		}else{	
			$.ajax({   
				url: servletUrl,
				data: {
					SERVICE_KEY:"preregister_addNdaPreRegisteration",
					customer_id: "",
					payload:"{\"customerId\":\""+customerId+"\",\"signedBy\":\""+customerName+"\",\"templateId\":\""+templateId+"\",\"place\":\"Bangalore\"}",			
				},
				cache:false,
				dataType: 'json',
				success: function(data,textStatus,XMLHttpRequest) {

					var status = data.status;
					if(status == 'OK') {
				
						var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
						card.getLayout().setActiveItem('welcometomarketplace_card');
					} else {
						Ext.Msg.alert(data.errors[0].description);
					}              

				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					Ext.Msg.alert("Technical problems.Contact techies!!!");
				}
			});


		}



	},

	onCancelButtonClick: function(button, e, options) {

		var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
		card.getLayout().setActiveItem('welcometomarketplace_card');

	},


});
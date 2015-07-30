
Ext.define('PreRegistration.view.WelcomeToMarketPlace', {
	extend: 'Ext.form.Panel',
	requires: ['Ext.form.Panel'],
	alias : 'widget.wtmp',
	height: 1000,
	width: 1000,
	bodyPadding: 10,
	title: 'Welcome to Walmart Marketplace Page',
	autoScroll: true,

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
			        {
			        	xtype: 'label',
			        	html: '<header>     <h1><font size=4>Welcome <label style="color:blue" id="customerName"></label> to Walmart Marketplace</font></h1>      </header><p><b>Your Accound Setup is in progress. Please complete the below steps.</b><br/></p>',
			        	text: ''
			        },
			        {
			        	id:"progressBar",
			        	xtype: 'progressbar',
			        	value: 0.3
			        },
			        {
			        	xtype: 'label',
			        	html: '<br/><br/><b>Step 1: Provide the primary contact details</b>'
			        },
			        {
			        	id:"savePreRegisterationButton",
			        	xtype: 'button',
			        	autoRender: true,
			        	height: 30,
			        	width: 87,
			        	allowDepress: false,
			        	enableToggle: false,
			        	pressed: false,
			        	text: 'Proceed',
			        	listeners: {
			        		click: {
			        			fn: me.onProceedButtonClick,
			        			scope: me
			        		}
			        	}
			        },
			        {
			        	xtype: 'label',
			        	html: '<br/><br/><b>Step 2:Sign the Mutual Non-Disclosure Agreement(NDA) with Walmart</b>'
			        },
			        {
			        	id: 'signNdaButton',
			        	xtype: 'button',
			        	autoRender: true,
			        	height: 30,
			        	width: 87,
			        	allowDepress: false,
			        	enableToggle: false,
			        	pressed: false,
			        	text: 'Sign NDA',
			        	listeners: {
			        		click: {
			        			fn: me.onSignNDAButtonClick,
			        			scope: me
			        		}
			        	}
			        }
			        ]
		});

		me.callParent(arguments);
	},

	onProceedButtonClick: function(button, e, options) {
		
		
		var servletUrl = "/preregistration_portlet/" + "/AjaxServlet";
		var email = $('input#hiddenEmailId').val();
		var customerId = $('input#hiddenCustomerId').val();
		var companyName = $('input#hiddenCompanyName').val();
		if(email == null || email == '' ){
			Ext.Msg.alert("Your session has expired. Login Again!!!");
		} else {

			$.ajax({
				type : 'POST',
				url : servletUrl,

				data: {
					SERVICE_KEY:"preregister_getPreRegistrationDetails",
					customer_id:customerId,
					payload:"",
				},
				cache:false,
				dataType: 'json',
				success : function(data,textStatus,XMLHttpRequest)
				{
					var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
					card.getLayout().setActiveItem('primarycontactdetails_card');
					var panel = Ext.ComponentQuery.query('#mainCardContainer')[0].getLayout().activeItem;
					if(data.status == 'OK') {
						var payload = data.payload;
						panel.down('#email').setValue(payload.email);
						panel.down('#legalCompanyName').setValue(payload.legalName);
						panel.down('#firstName').setValue(payload.firstName);
						panel.down('#lastName').setValue(payload.lastName);
						panel.down('#designation').setValue(payload.designation);
						panel.down('#companyDisplayName').setValue(payload.companyDisplayName);
						panel.down('#phoneNumber').setValue(payload.phone);
						panel.down('#extension').setValue(payload.extension);
						panel.down('#companyAddressLine1').setValue(payload.addressLine1);
						panel.down('#companyAddressLine2').setValue(payload.addressLine2);
						panel.down('#city').setValue(payload.city);
						panel.down('#state').setValue(payload.state);
						panel.down('#zipCode').setValue(payload.zip);
						panel.down('#country').setValue(payload.country);
						
						
						
					} else {
						panel.down('#email').setValue(email);
						panel.down('#legalCompanyName').setValue(companyName);
					}
				},
				error : function(XMLHttpRequest, textStatus, errorThrown)
				{
					Ext.Msg.alert("Technical problems.Contact techies!!!");
				}
			});
		}



	},

	onSignNDAButtonClick: function(button, e, options) {


		var servletUrl = "/preregistration_portlet/" + "/AjaxServlet";
		var email = $('input#hiddenEmailId').val();
		var customerId = $('input#hiddenCustomerId').val();
		if(email == null || email == '' ){
			Ext.Msg.alert("Your session has expired. Login Again!!!");
		}  else {
			$.ajax({
				type : 'POST',
				url : servletUrl,

				data: {
					SERVICE_KEY:"preregister_getNda",
					customer_id:customerId,
					payload:"",
				},
				cache:false,
				dataType: 'json',
				success : function(data,textStatus,XMLHttpRequest)
				{
					var status = data.status;
					
					if(status == 'OK') {
                		
                		var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
                        card.getLayout().setActiveItem('nda_card');
                        
                        Ext.fly('ndaContent').dom.innerHTML = data.payload.templateContent;
                        $('input#hiddenTemplateId').attr("value",data.payload.templateId);
                       window.open("/preregistration_portlet/AjaxServlet?SERVICE_KEY=preregister_getNdaWindow&payload=&customer_id="+customerId);
                        
                    } else {
                    	Ext.Msg.alert(data.errors[0].description);
                    }
				},
				error : function(XMLHttpRequest, textStatus, errorThrown)
				{
					Ext.Msg.alert("Technical problems.Contact techies!!!");
				}
			});
		}

	},


});
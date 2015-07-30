Ext.define('PreRegistration.view.PrimaryContactDetails', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.form.Panel'],
    alias : 'widget.pcd',
    height: 1000,
    width: 1000,
    bodyPadding: 10,
    title: 'Walmart MarketPlace Primary Contact Details Page',
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
                      html:'<header><h1><font size=5>Primary Contact Details</font></h1></header>', 
                      text: ''
                },
                {
                    xtype: 'label',
                    html:'<header><h2><font size=3>Brief description: Contact details of the person who will sign the NDA on behalf of the company</font></h2></header>', 
                    text: ''
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'First Name',
                     id:'firstName',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Last Name',
                     id:'lastName',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Designation',
                     id:'designation',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Legal Company Name',
                     id:'legalCompanyName',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Company Display Name',
                     id:'companyDisplayName',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Email Address',
                     id:'email',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 7
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Phone Number',
                     id:'phoneNumber',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 15,
                     minLength: 10
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Extension',
                     id:'extension',
                     width: 646,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 5,

                },
                {
                	xtype: 'label',
                    html:'<header><h2><font size=3>Company Address</font></h2></header>', 
                    text: ''
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Address Line 1',
                     id:'companyAddressLine1',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Address Line 2',
                     id:'companyAddressLine2',
                     width: 646,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'City / Town',
                     id:'city',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'State',
                     id:'state',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Postal / Zip code',
                     id:'zipCode',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 100,
                     minLength: 1
                },
                {
               	 xtype: 'textfield',
                    anchor: '50%',
                    fieldLabel: 'Country',
                    id:'country',
                    width: 646,
                    allowBlank: false,
                    grow: true,
                    growMax: 100,
                    growMin: 80,
                    maxLength: 100,
                    minLength: 1
               },
                {
                	 xtype: 'button',
                     autoRender: true,
                     height: 30,
                     width: 87,
                     allowDepress: false,
                     enableToggle: false,
                     pressed: false,
                     text: 'Save',
                     listeners: {
                         click: {
                             fn: me.onSaveButtonClick,
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

    onSaveButtonClick: function(button, e, options) {
    	var servletUrl = "/preregistration_portlet/" + "/AjaxServlet";
    	var customerId = $('input#hiddenCustomerId').val();
    	var firstNameFieldId = '#' + Ext.getCmp("firstName").name;
    	var lastNameFieldId = '#' + Ext.getCmp("lastName").name;
    	var designationFieldId = '#' + Ext.getCmp("designation").name;
    	var legalCompanyNameFieldId = '#' + Ext.getCmp("legalCompanyName").name;
    	var companyDisplayNameFieldId = '#' + Ext.getCmp("companyDisplayName").name;
    	var emailFieldId = '#' + Ext.getCmp("email").name;
    	var phoneNumberFieldId = '#' + Ext.getCmp("phoneNumber").name;
    	var extensionFieldId = '#' + Ext.getCmp("extension").name;
    	var companyAddressLine1FieldId = '#' + Ext.getCmp("companyAddressLine1").name;
    	var companyAddressLine2FieldId = '#' + Ext.getCmp("companyAddressLine2").name;
    	var cityFieldId = '#' + Ext.getCmp("city").name;
    	var stateFieldId = '#' + Ext.getCmp("state").name;
    	var zipCodeFieldId = '#' + Ext.getCmp("zipCode").name;
    	var countryFieldId = '#' + Ext.getCmp("country").name;
    	
    	
    	
        var  firstName = $(firstNameFieldId).val();
        var  lastName = $(lastNameFieldId).val();
        var  designation = $(designationFieldId).val();
        var  legalCompanyName= $(legalCompanyNameFieldId).val();
        var  companyDisplayName= $(companyDisplayNameFieldId).val();
        var  email= $(emailFieldId).val();
        var  phoneNumber= $(phoneNumberFieldId).val();
        var  extension= $(extensionFieldId).val();
        var  companyAddressLine1= $(companyAddressLine1FieldId).val();
        var  companyAddressLine2= $(companyAddressLine2FieldId).val();
        var  city= $(cityFieldId).val();
        var  state= $(stateFieldId).val();
        var  zipCode= $(zipCodeFieldId).val();
        var  country= $(countryFieldId).val();
        
        
    if(firstName == null || firstName == '' ){
            Ext.Msg.alert("Please enter your First Name!!!");
    } else if (lastName == null || lastName == '' ){
    	 Ext.Msg.alert("Please enter your Last Name!!!");
    } else if (designation == null || designation == '' ){
    	 Ext.Msg.alert("Please enter your designation!!!");
    }else if (legalCompanyName == null || legalCompanyName == '' ){
    	 Ext.Msg.alert("Please enter your company's legal name!!!");
    }else if (companyDisplayName == null || companyDisplayName == '' ){
    	 Ext.Msg.alert("Please enter your company's display name!!!");
    } else if (email == null || email == '' ){
    	 Ext.Msg.alert("Please enter your email!!!");
    } else if (companyAddressLine1 == null || companyAddressLine1 == '' ){
    	 Ext.Msg.alert("Please enter your company's address(Line 1)!!!");
    } else if (city == null || city == '' ){
    	 Ext.Msg.alert("Please enter the city/town!!!");
    }else if (state == null || state == '' ){
    	 Ext.Msg.alert("Please enter the state!!!");
    } else if (zipCode == null || zipCode == '' ){
    	 Ext.Msg.alert("Please enter zipcode!!!");
    }else if (country == null || country == '' ){
    	 Ext.Msg.alert("Please enter country!!!");
    }else {
            $.ajax({
                type : 'POST',
                url : servletUrl,
                data: {
                	SERVICE_KEY:"preregister_addPreRegistrationDetails",
        	    	payload:"{\"customerId\":\""+customerId+"\",\"firstName\":\""+firstName+"\",\"lastName\":\""+lastName+"\",\"designation\":\""+designation+"\",\"legalName\":\""+legalCompanyName+"\",\"companyDisplayName\":\""+companyDisplayName+"\",\"email\":\""+email+"\",\"phone\":\""+phoneNumber+"\",\"extension\":\""+extension+"\",\"addressLine1\":\""+companyAddressLine1+"\",\"addressLine2\":\""+companyAddressLine2+"\",\"city\":\""+city+"\",\"state\":\""+state+"\",\"zip\":\""+zipCode+"\",\"country\":\""+country+"\"}",
        	    	customer_id:customerId,
                    },
                cache:false,
                dataType: 'json',
                success : function(data,textStatus,XMLHttpRequest)
                {
                	var status = data.status;
                	if(status == 'OK') {
                		Ext.Msg.alert("Your profile has been updated");
                		var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
                        card.getLayout().setActiveItem('welcometomarketplace_card');
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

onCancelButtonClick: function(button, e, options) {
            	
            	var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
                card.getLayout().setActiveItem('welcometomarketplace_card');
    
},

});
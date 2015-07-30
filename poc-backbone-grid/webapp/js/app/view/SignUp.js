Ext.define('PreRegistration.view.SignUp', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.form.Panel'],
    alias : 'widget.su',
    height: 1000,
    width: 1000,
    bodyPadding: 10,
    title: 'Walmart MarketPlace SignUp Page',
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
                    html:'<header><h1><font size=5>Create a new Account</font></h1></header>', 
                    text: ''
                },
                {
                    xtype: 'label',
                    html:'<header><h2><font size=3>All the fields are mandatory</font></h2></header>', 
                    text: ''
                },
                {
                    xtype: 'textfield',
                    anchor: '50%',
                    fieldLabel: 'Legal Company Name',
                    id:'signuplegalCompanyName',
                    width: 646,
                    allowBlank: false,
                    grow: true,
                    growMax: 100,
                    growMin: 80,
                    maxLength: 100,
                    minLength: 3
                },
                {
                    xtype: 'textfield',
                    anchor: '50%',
                    width: 646,
                    fieldLabel: 'Email',
                    id:'signupemail',
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
                    width: 646,
                    fieldLabel: 'Password',
                    id:'signuppassword',
                    inputType: 'password',
                    allowBlank: false,
                    grow: true,
                    growMax: 100,
                    growMin: 80,
                    maxLength: 11,
                    minLength: 11,
                    
                },
                {
                    xtype: 'fieldcontainer',
                    defaultType: 'checkboxfield',
                    items: [
                        {
                            boxLabel  : 'Yes, I Agree to the Walmart Marketplace Terms of Use',                            
                            name      : 'agreeFlag',
                            inputValue: '1',
                            id        : 'agreeCheckBox'
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
                    text: 'Sign Up',
                    listeners: {
                        click: {
                            fn: me.onSignUpButtonClick,
                            scope: me
                        }
                    }
                },
            ],
            
        });

        me.callParent(arguments);
    },

    onSignUpButtonClick: function(button, e, options) {
        	var servletUrl = "/preregistration_portlet/" + "/AjaxServlet";
        	var legalCompanyNameFieldId = '#' + Ext.getCmp("signuplegalCompanyName").name;
            var emailFieldId = '#' + Ext.getCmp("signupemail").name;
            var passwordFieldId = '#' + Ext.getCmp("signuppassword").name;
            
  
            var legalCompanyName = $(legalCompanyNameFieldId).val();
            var email = $(emailFieldId).val();
            var password = $(passwordFieldId).val();

       if(legalCompanyName == null || legalCompanyName == '' ){
                Ext.Msg.alert('Please enter Legal Company Name!!!');
        } else if (email == null || email == '' ){
        	 Ext.Msg.alert("Please enter the Email!!!");
        } else if (password == null || password == '' ){
        	 Ext.Msg.alert("Please enter the password!!!");
        } else if(!Ext.getCmp("agreeCheckBox").getValue()){        	
        	  Ext.Msg.alert("You must agree to Walmart terms!!!");
        } else {
       
                $.ajax({
                    type : 'POST',
                    url : servletUrl,

                    data: {
                    	SERVICE_KEY:"iam_signUp",
            	    	customer_id:"",
            	    	payload:"{\"legalCompanyName\":\""+legalCompanyName+"\",\"email\":\""+email+"\",\"password\":\""+password+"\"}",
                        },
                    cache:false,
                    dataType: 'json',
                    success : function(data,textStatus,XMLHttpRequest)
                    {
                    	var status = data.status;
                    	
                    	if(status == 'ACCEPTED') {
                    		var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
                            card.getLayout().setActiveItem('welcometomarketplace_card');
                            $('label#customerName').text(legalCompanyName);
                            $('input#hiddenCustomerName').attr("value",data.payload.name);
                            $('input#hiddenCustomerId').attr("value",data.payload.id);
                            $('input#hiddenEmailId').attr("value",data.payload.email);
                            $('input#hiddenCompanyName').attr("value",data.payload.orgUnit);
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
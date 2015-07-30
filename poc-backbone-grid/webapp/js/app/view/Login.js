Ext.define('PreRegistration.view.Login', {
    extend: 'Ext.form.Panel',
    alias : 'widget.login',
    height: 1000,
    width: 1000,
    bodyPadding: 10,
    title: 'Walmart MarketPlace Login Page',
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
                    html:'<header><h1><font size=5>Welcome to Marketplace</font></h1></header><p><b>The Walmart Marketplace allows Marketplace Retailers access to the broad customer base and brand recognition of Walmart.com, and allows Walmart.com customers to shop a wider and deeper assortment of items. Interested in becoming a Seller? Sign up to know more about the Walmart Marketplace program and the various steps involved in becoming an online seller with Walmart.</b></p>', 
                    text: ''
                },
                {
                    xtype: 'label',
                    html: '<header><font size=2> Not registered yet ??? Sign Up to learn more</font></header>'
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
                {
                	xtype: 'label',
                    html:'<header><h2><font size=3>Sign In to your account</font></h2></header>', 
                    text: ''
                },
                {
                	 xtype: 'textfield',
                     anchor: '50%',
                     fieldLabel: 'Email',
                     id:'signinemail',
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
                     fieldLabel: 'Password',
                     id:'signinpassword',
                     inputType: 'password',
                     width: 646,
                     allowBlank: false,
                     grow: true,
                     growMax: 100,
                     growMin: 80,
                     maxLength: 11,
                     minLength: 11
                },
                {
                    xtype: 'button',
                    autoRender: true,
                    height: 30,
                    width: 87,
                    allowDepress: false,
                    enableToggle: false,
                    pressed: false,
                    text: 'Sign In',
                    action: 'signIn',
                    listeners: {
                        click: {
                            fn: me.onSignInButtonClick,
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
                {
                    xtype: 'button',
                    autoRender: true,
                    height: 30,
                    width: 100,
                    allowDepress: false,
                    enableToggle: false,
                    pressed: false,
                    text: 'Forgot Password',
                    listeners: {
                        click: {
                            fn: me.onForgotPasswordButtonClick,
                            scope: me
                        }
                    }
                },
            ]
        });

        me.callParent(arguments);
    },

    onSignInButtonClick: function(button, e, options) {
        var servletUrl = "/preregistration_portlet/" + "/AjaxServlet";
        	var emailFieldId = '#' + Ext.getCmp("signinemail").name;
            var passwordFieldId = '#' + Ext.getCmp("signinpassword").name;
            var email = $(emailFieldId).val();
            var password = $(passwordFieldId).val();
            
        if(email == null || email == '' ){
                Ext.Msg.alert("Please enter the email id!!!");
        } else if (password == null || password == '' ){
        	 Ext.Msg.alert("Please enter the password!!!");
        } else {
                $.ajax({
                    type : 'POST',
                    url : servletUrl,

                    data: {
                    	SERVICE_KEY:"iam_signIn",
            	    	customer_id:"",
            	    	payload:"{\"email\":\""+email+"\",\"password\":\""+password+"\"}",
                        },
                    cache:false,
                    dataType: 'json',
                    success : function(data,textStatus,XMLHttpRequest)
                    {
                    	var status = data.status;
                    	if(status == 'OK' || status == 'ACCEPTED') {
                    		var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
                            card.getLayout().setActiveItem('welcometomarketplace_card');
                            $('input#hiddenCustomerId').attr("value",data.payload.id);
                            $('input#hiddenEmailId').attr("value",data.payload.email);
                            $('input#hiddenCompanyName').attr("value",data.payload.id);
                            $('input#hiddenCustomerName').attr("value",data.payload.name);
                            $('label#customerName').text(data.payload.fullName);
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
    	
            	
            	
                
   },
   
   onForgotPasswordButtonClick: function(button, e, options) {
       var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
       card.getLayout().setActiveItem('forgotpassword_card');       
   },

onSignUpButtonClick: function(button, e, options) {

	var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
    card.getLayout().setActiveItem('signup_card');
}

});
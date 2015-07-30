Ext.define('PreRegistration.view.ForgotPassword', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.form.Panel'],
    alias : 'widget.fp',
    height: 1000,
    width: 1000,
    bodyPadding: 10,
    title: 'Walmart MarketPlace ForgotPassword Page',
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
                    html:'<header><h1><font size=5>Forgot Password</font></h1></header>', 
                    text: ''
                },
                {
                    xtype: 'textfield',
                    anchor: '50%',
                    fieldLabel: 'Enter your email address to reset your password',
                    id:'forgotpasswordemail',
                    width: 646,
                    allowBlank: false,
                    grow: true,
                    growMax: 100,
                    growMin: 80,
                    maxLength: 100,
                    minLength: 7
                },
                {
                    xtype: 'button',
                    autoRender: true,
                    height: 30,
                    width: 87,
                    allowDepress: false,
                    enableToggle: false,
                    pressed: false,
                    text: 'Submit',
                    listeners: {
                        click: {
                            fn: me.onButtonClick,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, options) {
        	var servletUrl = "/preregistration_portlet/" + "/AjaxServlet";
        	var emailFieldId = '#' + Ext.getCmp("forgotpasswordemail").name;
        	var email = $(emailFieldId).val();
        	
        	if(email == null || email == '' ){
                Ext.Msg.alert("Please enter the email id!!!");
        } else {
                $.ajax({
                    type : 'POST',
                    url : servletUrl,

                    data: {
                    	SERVICE_KEY:"iam_forgotPassword",
            	    	customer_id:"",
            	    	payload:"{\"email\":\""+email+"\"}",
                        },
                    cache:false,
                    dataType: 'json',
                    success : function(data,textStatus,XMLHttpRequest)
                    {
                    	if(status == 'ACCEPTED') {

                       	 Ext.Msg.alert('Password reset link emailed!!!');
                            
                            var card = Ext.ComponentQuery.query('#mainCardContainer')[0];
                            card.getLayout().setActiveItem('login_card');
                            
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
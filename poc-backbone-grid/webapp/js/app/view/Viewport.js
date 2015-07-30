Ext.define('PreRegistration.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias : 'widget.viewport',
    autoScroll: true,
    layout: 'card',
    renderTo: Ext.getBody(),
    region: 'center',
    
    requires: [
        'PreRegistration.view.Login',
        'PreRegistration.view.SignUp',
        'PreRegistration.view.ForgotPassword',
        'PreRegistration.view.PrimaryContactDetails',
        'PreRegistration.view.NDA',
        'PreRegistration.view.WelcomeToMarketPlace',
    ],
    items: [
        {
        xtype: 'login',
        
    	},
    ],
});
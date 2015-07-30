Ext.define('PreRegistration.controller.PreRegistrationController', {
    extend: 'Ext.app.Controller',

    views: ['Login', 'ForgotPassword','NDA','PrimaryContactDetails','SignUp','WelcomeToMarketPlace'],

    init: function() {
        this.control({
        	'login button[action=signIn]': {
                click: this.signIn
            }
        });
    },

    signIn: function(button) {
    },
});

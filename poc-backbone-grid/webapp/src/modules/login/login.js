$(function(){ 
	
	if(isLogin){
		$('#loginform').show();
    	$('#singuptemplate').hide();
	}else{
		$('#loginform').hide();
    	$('#singuptemplate').show();
	}
	
	$(".btn-nextView").click(function() {
    	$('#loginform').hide();
    	$('#singuptemplate').show();
    });
	$(".btn-previousView").click(function() {
		$('#loginform').show();
    	$('#singuptemplate').hide();
    });
	
	
	
	$("#signinbtn").click(function (e) {
		var userDetails = {};
		userDetails.email = $("#email").val();
		userDetails.password = $("#password").val();
		userDetails.SERVICE_KEY="iam_signIn";
//	    e.preventDefault();
//	    if(ValideteSignIn(userDetails)){
//	    	submitLogin(userDetails);
//	    }
		submitLogin(userDetails);
	});
	
	
	
	$("#signupbtn").click(function (e) {
		var newUser = {};
		newUser.name = $("#lcname").val();
		newUser.email = $("#newEmail").val();
		newUser.password = $("#pwd").val();
		newUser.cnfpassword = $("#cnfpassword").val();
		newUser.SERVICE_KEY="iam_signIn";
//	    e.preventDefault();
//	    if(ValideteSignUp(newUser)){
//	    	submitSignUp(newUser);
//	    }
	    submitSignUp(newUser);
	});
	

	$('#pwd').focus(function() {
		$('.newpwd').show();
	});
	
	$('#cnfpassword').focus(function() {
		$('.confpwd').show();
	});
	
	$('#pwd').blur(function() {
		$('.newpwd').hide();
	});
	
	$('#cnfpassword').blur(function() {
		$('.confpwd').hide();
	});
	
	$('#loginform').validate({
	    rules: {
	      email: {
	        required: true,
	        email: true
	      },
	      password: {
	        required: true
	      }
	    },
	    highlight: function(label) {
	    	$(label).closest('.control-group').addClass('error');
	    },
		unhighlight: function(element, errorClass, validClass) {
			//$(label).closest('.control-group').removeClass('error');
		},
	    success: function(label) {
	    	//label.text('OK!').addClass('valid').closest('.control-group').addClass('success');
	    	$(label).closest('.control-group').removeClass('error');
	    },
	    onfocusin: function(element, event) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element, event) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
	  });
	
	
	$('#signupform').validate({
	    rules: {
	      lcname: {
	          required: true,
	          minlength: 2,
	      },
	      newEmail: {
	    	  required: true,
		      email: true
	      },
	      pwd: {
	        required: true
	      }
//	      },
//	      cnfpassword: {
//	    	 equalTo:'password', 
//	        required: true
//	      }
	    },
	    highlight: function(label) {
	    	$(label).closest('.control-group').addClass('error');
	    },
		unhighlight: function(element, errorClass, validClass) {
			//$(label).closest('.control-group').removeClass('error');
		},
	    success: function(label) {
	    	//label.text('OK!').addClass('valid').closest('.control-group').addClass('success');
	    	$(label).closest('.control-group').removeClass('error');
	    },
	    onfocusin: function(element, event) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element, event) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
	  });
});



function submitSignUp(User) {
	$("#signupform").submit();
}
function submitLogin(User) {
	
//	$.ajax({
//	    type: "POST",
//	    url: portletUrl,//"/preregistration_portlet/" + "processAction",
//	    data: User,
//	    //contentType: "application/json; charset=utf-8",
//	    //dataType: "json",
//	    dataType: "html",
//	    success: function (msg) {
//	    	var t = msg;
//	    	 window.open ('http://localhost:8080/web/guest/preregistration?code='+msg,'_self',false);
//	    	// location.href = "http://localhost:8080/web/guest/preregistration";
//	    	// window.location="http://localhost:8080/web/guest/preregistration";
//	    },
//	    error: function () {
//	        alert("Error");
//	    }
//	  });
	
	
	$("#loginform").submit();
	
}












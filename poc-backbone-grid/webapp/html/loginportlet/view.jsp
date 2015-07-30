<%@page import="com.liferay.portal.util.PortalUtil"%>
<%@page import="com.liferay.portal.kernel.util.ParamUtil"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>
<portlet:defineObjects />
<portlet:resourceURL var="ajaxResourceUrl" />
<portlet:actionURL var="processAction" name="processAction"></portlet:actionURL>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Sign In</title>

<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/main.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/common.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/login.css" type="text/css">
<script src="<%=request.getContextPath()%>/assets/js/libs/jquery.js" type="text/javascript"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/jquery.validate.min.js"></script>

<script type="text/javascript">
 var portletUrl = '<%=ajaxResourceUrl%>';
 var action = '<%= PortalUtil.getOriginalServletRequest(request).getParameter("action")%>';
 var isLogin =  (action != 'signup') ? true : false; 	
</script>
</head>
<body>
	<div class="container-fluid container-base">
		<div class="row well">
			<div class="12">
				<div id="wizard">
					<div id="wizard-view-container">
						<div class="login-wrapper">
							<form id="loginform" name="<portlet:namespace />loginForm"
								action="<portlet:actionURL />" method="post">
								<div class="" id="signIn-template">
									<div>
										<p class="text-align-left">
											<span class="sign-in-header">Account sign in</span>
										</p>
										<div>
											<p class="text-align-left" style="margin-bottom: 20px;">
												<span class="label-header"> <% 
	                                                String testmessage = "You got error";
	                                                String message = (String)request.getAttribute("Message");
	                                                if(message != null) { 
	                                            %> <b><%=testmessage%></b>
													<b><%=message%></b> <% } %>
												</span>
											</p>
										</div>
									</div>
									<div class="control-group">
										<label class="control-label" for="email">Email</label>
										<div class="controls">
											<input type="text" name="email" class="input-xlarge"
												id="email">
										</div>
									</div>
									<div class="control-group">
										<label class="control-label" for="email">Password</label>
										<div class="controls">
											<input type="password" name="password" class="input-xlarge"
												id="si-pwd">
										</div>
									</div>
									<div style="display: inline-block; margin: 10px 0 0;">
										<button id="signinbtn" class="btn btn-warning btn-save"
											type="button">Sign In</button>
									</div>
									<span> <a style="cursor: pointer;"> <span
											class="link-btn">Cancel</span> <!-- <button type="reset" class="btn">Cancel</button> -->
									</a>
									</span>
									<div class="hide">
										<p class="text-align-left">
											<a style="cursor: pointer;"> <span class="btn-nextView"
												style="font-family: Myriad Pro; font-size: 14px; font-weight: normal; font-style: normal; text-decoration: none; color: rgb(0, 0, 255);">Sign
													up for a Marketplace account</span>
											</a>
										</p>
									</div>
								</div>
							</form>

							<!--signup  -->
							<div class="hide-class" id="singuptemplate">
								<form id="signupform" name="<portlet:namespace />loginForm"
									action="<portlet:actionURL />" method="post">
									<div id="error-message-container"></div>
									<div>
										<p class="text-align-left">
											<span class="page-header">Create a new Marketplace
												account</span>
										</p>
									</div>
									<div>
										<p class="text-align-left" style="margin-bottom: 20px;">
											<span class="label-header">All fields are mandatory</span>
										</p>
									</div>
									<div class="control-group">
										<label class="control-label" for="subject">Legal
											Company name</label>
										<div class="controls">
											<input type="text" id="lcname" name="lcname"></input>
										</div>
									</div>
									<div class="control-group">
										<label class="control-label" for="email">Email</label>
										<div class="controls">
											<input type="text" name="newEmail" class="input-xlarge"
												id="newEmail">
										</div>
									</div>
									<div class="control-group">
										<label class="control-label" for="email">Password</label>
										<div class="controls">
											<input type="password" name="pwd" class="input-xlarge"
												id="pwd">
										</div>
									</div>
									<span class="password-helper newpwd">Password should
										consist of upper &amp; lower case alphabets, numerals and must
										be atleast 6 characters.</span>
									<div class="control-group">
										<label class="control-label" for="email">Re-enter
											password</label>
										<div class="controls">
											<input type="password" name="cnfpassword"
												class="input-xlarge" id="cnfpassword">
										</div>
									</div>
									<span class="password-helper confpwd">Password should
										consist of upper &amp; lower case alphabets, numerals and must
										be atleast 6 characters.</span>
									<div>
										<input type="checkbox" value="ON" name="chkbox" /> <span
											style="line-height: 21px;"> <span
											class="chk-box-lable" style="color: #333333">
												Yes,&nbsp; I Agree to the Walmart Marketplace </span> <span
											class="chk-box-lable" style="color: #1A75CF"><a
												class="link-color">Terms of use</a></span>
										</span>
									</div>
									<div style="display: inline-block; margin: 10px 0 0;">
										<button id="signupbtn" class="btn btn-warning btn-save"
											type="submit">Sign Up</button>
									</div>
									<span> <a style="cursor: pointer;"> <span
											class="link-btn btn-previousView">Cancel</span>
									</a>
									</span>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="<%=request.getContextPath()%>/src/modules/login/login.js"></script>
</body>
</html>

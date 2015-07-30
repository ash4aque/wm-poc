 <%@page import="com.liferay.portal.model.User,com.liferay.portal.theme.ThemeDisplay" %>
 <script class="hide-class" id="intro-template" type="text/x-mustache-template" >
    <div class="wizard-view">
        <div id="onBoardSetup">
            <h1>Welcome to Walmart Marketplace</h1>
             <div class="welcomeMessage hide">
                <p>Hello<b> 
                <% 
                    ThemeDisplay themeDisplay = (ThemeDisplay)request.getAttribute("THEME_DISPLAY");
                    User user = themeDisplay.getUser();
                    out.println(user.getFullName());
                %>
                </b></p>
                <div><p>Thank you signing the Mutual NDA form. Walmart Partner Manager needs to sign the NDA on his behalf,
                	 after which you will be able to access all the features of the Marketplace.<a href="#viewdetails" class="btn-moveToView view"> Veiw</a> your submitted details.</p> 
               	</div>
               	<div>
               		<span>Current status: </span>
               		<span style="color:#FF0000">Pending signature from Walmart Partner Manager</span> 
               	</div>
            </div>
            <div class="MT MB title-one">
            	As a Marketplace retailer, you'll join a group of select sellers with strong customer service and large assortments of new online merchandise that gives Walmart.com shoppers more of what they want.
            	Purchases are managed through Walmart.com's secure checkout process. Retailers then manage and support shipping, customer service, exchanges and returns.
            </div>
            <!--<h2>Partner onboarding process</h2>
            
             <div id="setupsteps">
                <div class="arrow">
                    <p style="position: relative; top: 50px; left: 15px;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;">1</span></p>
                    <div class="testwrap">
                        <p style="text-align:left;">
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Partner contact details </span>
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"></span>
                        </p>
                        <p style="text-align:left;line-height: 15px;">
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Provide primary contact person details and sign a mutual Non Disclosure Agreement</span>
                        </p>
                    </div>
                </div>
                <div class="arrow">
                    <p style="position: relative; top: 50px; left: 15px;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;">2</span></p>
                    <div class="testwrap">
                        <p style="text-align:left;">
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Partner evaluation</span>
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"></span>
                        </p>
                        <p style="text-align:left;line-height: 15px;">
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Share your company details to help us better evaluate our partnership </span>
                        </p>
                    </div>
                </div>
                <div class="arrow">
                    <p style="position: relative; top: 50px; left: 15px;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;">3</span></p>
                    <div class="testwrap">
                        <p style="text-align:left;">
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Contract signing</span>
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"></span>
                        </p>
                        <p style="text-align:left;line-height: 15px;">
                            <span style="font-family:Myriad Pro;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Sign off on the partner contract agreement and & you are all set!</span>
                        </p>
                    </div>
                </div>
            </div> 
            <a href="#start" class="btn btn-warning btn-moveToView btn-start">Register As a Marketplace seller</a>-->
            
            <a href="#pcdform" class=" pcd-proceed-btn btn btn-warning  btn-moveToView btn-proceed-pcd">Proceed with Seller registration</a>
            <div id="featureItems" class="clearfix">
                <div class="floatL items MR">Marketplace overview</div>
                <div class="floatL items">Benefits</div>
                <div class="floatL items MR">FAQ's</div>
                <div class="floatL items">Video</div>
            </div>
        </div> 
     </div>
</script>
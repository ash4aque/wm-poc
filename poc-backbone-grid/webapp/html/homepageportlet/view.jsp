<%--
/**
* Copyright (c) 2000-2010 Liferay, Inc. All rights reserved.
*
* This library is free software; you can redistribute it and/or modify it under
* the terms of the GNU Lesser General Public License as published by the Free
* Software Foundation; either version 2.1 of the License, or (at your option)
* any later version.
*
* This library is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
* details.
*/
--%>
<%@page import="com.liferay.portal.model.User,com.liferay.portal.theme.ThemeDisplay" %>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<portlet:defineObjects />
<portlet:resourceURL var="ajaxResourceUrl"/>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Example</title>

<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/main.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/common.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/homepage.css" type="text/css">
<!-- Third-Party Libraries (Order matters) -->

</head>
<body>
<div class="container-fluid container-base">
    <div class="row well">        
        <div class="12">
          <div id="wizard">
            <div id="wizard-view-container">
                <div>
				    <div class="wizard-view">
				        <div class="component-wrapper">
				            <div id="homepage" class="curvedShadowBox MB">
				                <h1>Join Walmart Marketplace</h1>
				                <div id="homepageMessage">
				                    <div>As a Marketplace retailer, you'll join a group of select sellers with strong customer service and large assortments of new online merchandise that gives Walmart.com shoppers more of what they want. Purchases are managed through Walmart.com's secure checkout process. Retailers then manage and support shipping, customer service, exchanges and returns.</div>
				                </div>
				
				                <div class="fontfamily textcolor2" style="margin:10px 10px 10px 0">
				                    <div class="MB fontsize16">
				                        <span>How it works</span>
				                    </div>
				                    <div class="MB fontsize12">
				                        <img src="<%=request.getContextPath()%>/assets/img/bullet.png"><span class="bulletText">1</span></img>
				                        <span>First, create a basic account with your business email address</span>
				                    </div>
				                    <div class="MB fontsize12">
				                        <img src="<%=request.getContextPath()%>/assets/img/bullet.png"><span class="bulletText">2</span></img>
				                        <span>Next, complete the retailer primary contact details along with Mutual NDA and share with us information about your company, marketplace experience, assortment and customer service information.</span>
				                    </div>
				                    <div class="MB fontsize12">
				                        <img src="<%=request.getContextPath()%>/assets/img/bullet.png"><span class="bulletText">3</span></img>
				                        <span>If your company qualifies as a Marketplace retailer, you'll be contacted to sign a contract before starting the integration process.</span>
				                    </div>  
				                </div>
				                    <a href="/web/guest/login?action=signup" class="btn btn-warning">Get Started &rarr;</a>
				            </div> 
				        </div>
				     </div>
				</div>
            </div>
        </div>         
    </div>
</div>
</div>

</body>
</html>
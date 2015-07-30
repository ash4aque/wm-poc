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
<%-- <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/main.css" type="text/css"> --%>
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/common.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/preregisteration.css" type="text/css">
<!-- Third-Party Libraries (Order matters) -->
<script type="text/javascript">
	var ajaxResourceUrl = '<%= ajaxResourceUrl%>';
	var pdfurl = ajaxResourceUrl + "&SERVICE_KEY=preregister_getNdaWindow";
	function ShowPdfFile(strFileName){
		var win = window.open(pdfurl,"Popup","top=100,left=300,scrollbars=yes,resizable=1,height=800,width=1000");
		function check() {
		    if(win.document) { // if loaded
		        win.document.title = "MutualNDA"; // set title
		    } else { // if not loaded yet
		        setTimeout(check, 10); // check in another 10ms
		    }
		}
	    check();
	    win.document.title='MutualNDA';
	}
</script>
<script src="<%=request.getContextPath()%>/assets/js/libs/jquery.js"></script> 
<script src="<%=request.getContextPath()%>/assets/js/libs/underscore.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/mustache.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/backbone.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/bootstrap.min.js"></script> 
</head>
<body>
<%@ include file="/src/modules/preregisteration/templates/introTemplate.jsp" %>
<%-- <%@ include file="/src/modules/preregisteration/templates/startTemplate.jsp" %> --%>
<%@ include file="/src/modules/preregisteration/templates/pcdformTemplate.jsp" %> 
<%@ include file="/src/modules/preregisteration/templates/ndaTemplate.jsp" %> 
<%@ include file="/src/modules/preregisteration/templates/viewDetailsTemplate.jsp" %> 
<%@ include file="/src/modules/preregisteration/templates/appViewTemplate.jsp" %> 
<div class="container-fluid container-base">
    <div class="row well">        
         <div id="wizard-container"></div>         
    </div>
</div>
<!-- Modules (Order does not matter) -->
<script src="<%=request.getContextPath()%>/src/modules/preregisteration/views/viewDetailsView.js"></script>
<script src="<%=request.getContextPath()%>/src/modules/preregisteration/views/ndaView.js"></script>
<script src="<%=request.getContextPath()%>/src/modules/preregisteration/views/pcdformView.js"></script>
<%-- <script src="<%=request.getContextPath()%>/src/modules/preregisteration/views/startView.js"></script> --%>
<script src="<%=request.getContextPath()%>/src/modules/preregisteration/views/introView.js"></script>
<script src="<%=request.getContextPath()%>/src/modules/preregisteration/views/appView.js"></script>
<!-- Application core (Order matters) -->
<script src="<%=request.getContextPath()%>/src/utils/appManager.js"></script> 
<script src="<%=request.getContextPath()%>/src/modules/preregisteration/app.js"></script>
<script src="<%=request.getContextPath()%>/src/utils/utils.js"></script>
</body>
</html>
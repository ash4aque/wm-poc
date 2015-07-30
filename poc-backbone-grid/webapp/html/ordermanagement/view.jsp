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
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/bbGrid.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/backgrid.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/extensions/paginator/backgrid-paginator.css" type="text/css">

<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/common.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/jquery-ui-datepicker.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/ordermanagement.css" type="text/css">
<!-- Third-Party Libraries (Order matters) -->
<script type="text/javascript">
	var ajaxResourceUrl = '<%= ajaxResourceUrl%>';
	var appContext = '<%=request.getContextPath()%>';
	
</script>
<script src="<%=request.getContextPath()%>/assets/js/libs/jquery.js"></script> 
<script src="<%=request.getContextPath()%>/assets/js/libs/jquery-ui.js"></script> 
<script src="<%=request.getContextPath()%>/assets/js/libs/underscore.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/mustache.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/backbone.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/bbGrid.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/backgrid.js"></script>

<script src="<%=request.getContextPath()%>/assets/js/libs/backbone-pageable.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/extensions/paginator/backgrid-paginator.js"></script>

<!--   <script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script> -->

</head>
<body>
<%@ include file="/src/modules/ordermanagement/templates/orderStatusTemplate.jsp" %>
<%@ include file="/src/modules/ordermanagement/templates/orderDetailsTemplate.jsp" %> 
<%@ include file="/src/modules/ordermanagement/templates/appViewTemplate.jsp" %> 
<div class="container-fluid container-base">
    <div class="row well">        
         <div id="wizard-container"></div>         
    </div>
</div>
<!-- Modules (Order does not matter) -->
<script src="<%=request.getContextPath()%>/src/modules/ordermanagement/views/orderDetailsView.js"></script>
<script src="<%=request.getContextPath()%>/src/modules/ordermanagement/views/orderStatusView.js"></script>
<script src="<%=request.getContextPath()%>/src/modules/ordermanagement/views/appView.js"></script>
<!-- Application core (Order matters) -->
<script src="<%=request.getContextPath()%>/src/utils/appManager.js"></script> 
<script src="<%=request.getContextPath()%>/src/modules/ordermanagement/app.js"></script>
<script src="<%=request.getContextPath()%>/src/utils/utils.js"></script>
</body>
</html>
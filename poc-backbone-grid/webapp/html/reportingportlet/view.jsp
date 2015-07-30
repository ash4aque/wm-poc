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
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/common.css" type="text/css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/report.css" type="text/css">
<!-- Third-Party Libraries (Order matters) -->
<script type="text/javascript">
	var ajaxResourceUrl = '<%= ajaxResourceUrl%>';
	var appContext = '<%=request.getContextPath()%>';
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
<script src="<%=request.getContextPath()%>/assets/js/libs/jquery-ui.js"></script> 
<script src="<%=request.getContextPath()%>/assets/js/libs/underscore.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/mustache.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/backbone.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/bbGrid.js"></script>
<script src="<%=request.getContextPath()%>/assets/js/libs/bootstrap.min.js"></script> 
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>

</head>
<body>
<%@ include file="/src/modules/reporting/templates/reportingTemplate.jsp" %> 
<%@ include file="/src/modules/reporting/templates/appViewTemplate.jsp" %> 
<div class="container-fluid container-base">
    <div class="row well">        
         <div id="wizard-container"></div>         
    </div>
</div>

<div id="bbgrid"></div>
<!-- Modules (Order does not matter) -->
<script src="<%=request.getContextPath()%>/src/modules/reporting/views/reportingView.js"></script>
<script src="<%=request.getContextPath()%>/src/modules/reporting/views/appView.js"></script>
<!-- Application core (Order matters) -->
<script src="<%=request.getContextPath()%>/src/utils/appManager.js"></script> 
<script src="<%=request.getContextPath()%>/src/modules/reporting/app.js"></script>
<script src="<%=request.getContextPath()%>/src/utils/utils.js"></script>
</body>
</html>
<%-- 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.15/jquery-ui.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script src="<%=request.getContextPath()%>/js/reportingportlet/reportmain.js"></script>

<!-- DataTables -->
<script type="text/javascript" charset="utf8" src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min.js"></script>
<!-- DataTables CSS -->
<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/reportingportlet/reportmain.css" type="text/css">

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>

<portlet:defineObjects />
<portlet:resourceURL var="ajaxResourceUrl" />

<script type="text/javascript">
	var ajaxResourceUrl = '<%=ajaxResourceUrl%>';
</script>

<div id="chartplaywrapper">

	<div id="chartgenerate">
		<select id="reportlist">Report List
		</select>
		<button id="getrep">Generate Report</button>
	</div>

	<div id="chartedit">
		<select id="add_column">Add Columns
		</select>
		<button id="addseries">Add column to Chart</button>
		<select id="remove_column">Remove Columns
		</select>
		<button id="removeseries">Remove column from Chart</button>
	</div>

</div>


<div id="chartswrapper">
	<div id="chartone"></div>
	<div id="charttwo"></div>
</div>

<div style="color:#000000" id="table"></div> --%>
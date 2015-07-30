<%@page import="com.liferay.portal.model.User,com.liferay.portal.theme.ThemeDisplay" %>
<script type="text/javascript">
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
<script class="hide-class" id="viewdetails-template" type="text/x-mustache-template">
    <div class="wizard-view">
        <div class="component-wrapper">
            <div id="viewdetails" class="curvedShadowBox MB">
	            <h1>{{legalName}}</h1>
	            <div>
	          		<h2 style="color:#666666">Status: </h2>
	          		<h2 style="color:#FF0000">Pending signature from Walmart Partner Manager</h2> 
	          	</div>
	          	<div class="parent">
	                <div class="child items MR">
	                	<div class="headlineBorder MB20"><span>Primary Contact Details</span></div>
	                	<div class="control-group">
					       <label class="control-label" for="subject">First Name</label>
					       <div class="controls">{{firstName}}</div>
					    </div>
					    <div class="control-group">
					      <label class="control-label" for="subject">Last Name</label>
					      <div class="controls">{{lastName}}</div>
					    </div>
					    <div class="control-group">
							<label class="control-label" for="subject">Designation</label>
					 	<div class="controls">{{designation}}</div>
						</div>
						<div class="control-group">
					      <label class="control-label" for="subject">Legal Company Name</label>
					      <div class="controls">{{legalName}}</div>
					    </div>
					    <div class="control-group">
					      <label class="control-label" for="subject">Company Display Name</label>
					      <div class="controls">{{companyDisplayName}}</div>
					    </div>
					 	<div class="control-group">
					      <label class="control-label" for="subject">Email Address</label>
					      <div class="controls">{{email}}</div>
					 	</div>
					  	<div class="control-group">
					      <label class="control-label" for="subject">Phone Number</label>
					      <div class="controls">{{extension}} - {{phone}}</div>
					    </div>
	                </div>
	                <div class="child spacer"></div>
	                <div class="child items">
	                	<div class="headlineBorder MB20"><span>Company Address</span></div>
	                	<div class="control-group">
			              <label class="control-label" for="subject">Address Line 1</label>
			              <div class="controls">{{addressLine1}}</div>
			            </div>
			            <div class="control-group">
			              <label class="control-label" for="subject">Address Line 2</label>
			              <div class="controls">{{addressLine2}}</div>
			            </div>
			            <div class="control-group">
		                  <label class="control-label" for="subject">City/Town</label>
		                  <div class="controls">{{city}}</div>
		                </div>
		                <div class="control-group">
		                  <label class="control-label" for="subject">State</label>
		                  <div class="controls">{{state}}</div>
		                </div>
		                <div class="control-group">
		                  <label class="control-label" for="subject">Postal/Zip code</label>
		                  <div class="controls">{{zip}}</div>
		                </div>
	                </div>
	          	</div>
	          	<div>
	          		<div class="item MR">
	                	<div class="headlineBorder MB20">
                            <span>Mutual Non Disclosure Agreement</span>
                            <div style="float:right">
			                    <div class="button-group">
		                            <a class="buttons" href="javascript:if(window.print)window.print()"><i class="icon-print"></i></a>
		                            <a class="buttons" href="mailto:admin@walmart.com?CC=mayursaxena@walmartLabs.com&Subject=Mutual%20Non%20Disclosure%20Agreement%20&Body=Test%20Message%20"><i class="icon-envelope"></i></a>
		                            <a class="buttons" href="javascript:ShowPdfFile()"><i class="icon-download"></i></a>
		                        </div>
			                </div>
							<div class="parent family" style="width:100%">
								<div style="width:60%" class="child italic floatL"><span>{{companyDisplayName}}</span></div>
								<div style="width:40%" class="floatL">
									<span class="status-title">status:</span><span class="status-success"> Signed</span>
									<div class="italic">By {{firstName}} {{lastName}} on 28th Jan 2013, 15:30</div>
								</div>
							</div>
                        </div>
                        <div class="parent family" style="width:100%">
							<div style="width:60%" class="MB20 child italic floatL"><span>Walmart Partner Manager</span></div>
							<div style="width:40%" class="floatL">
								<span class="status-title">status:</span><span class="status-pending"> Pending signature from Walmart Partner Manager</span>
							</div>
						</div>
	                </div>
	          	</div>
	          	<div class="form-inline">
                    <div class="control-group floatR">
                      <a href="#intro" class="btn-moveToView cancel MR">Cancel </a>
                    </div>
                </div>
			</div>
		</div>
	</div>
</script>


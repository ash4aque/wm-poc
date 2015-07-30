<script class="hide-class" id="orderdetails-template" type="text/x-mustache-template">
    <div class="wizard-view">
        <div class="component-wrapper">
            <div id="orderdetails" class="curvedShadowBox MB mask">
	            	<h1>Order Details</h1>
	                <div class="item1 MR">
						<div class="form-inline">	                	
		                	<div class="control-group">
								<label class="control-label" for="subject">Order #</label>
								<div class="controls MB20">{{orderNo}}</div>
								<label class="control-label" for="subject">Customer PO #</label>
								<div class="controls MB20">{{customerPONo}}</div>
								<label class="control-label" for="subject">Order type</label>
								<div class="controls MB20">{{orderType}}</div>
								<label class="control-label" for="subject">Order date</label>
								<div class="controls">{{orderDate}}</div>
						    </div>
					        <div class="control-group">
						        <label class="control-label" for="subject">Customer email</label>
						        <div class="controls MB20">{{customerEmailId}}</div>
						        <label class="control-label" for="subject">Seller org code</label>
						        <div class="controls MB20">{{sellerOrganizationCode}}</div>
						        <label class="control-label" for="subject">Payment status</label>
						        <div class="controls MB20">{{paymentStatus}}</div>
					            <label class="control-label" for="subject">Status</label>
					            <div class="controls">{{status}}</div>
					        </div>
					    </div>
	                </div>
	                
	                <div class="item2 MR hide stGrid">
	                	<!-- <table class="table table-bordered">
	                		"enterpriseCode": response.payload[0].enterpriseCode,
                                "orderNo": response.payload[0].orderNo,
                                "customerPONo": response.payload[0].customerPONo,
                                "orderType": response.payload[0].orderType,
                                "orderDate": response.payload[0].orderDate,
                                "customerEmailId": response.payload[0].customerEmailId,
                                "sellerOrganizationCode": response.payload[0].sellerOrganizationCode,
                                "paymentStatus": response.payload[0].paymentStatus,
                                "status": response.payload[0].status,
	                	
                           <thead>
			                <tr><th class="bgcolorBase" colspan="9" >Line items</th></tr>
			              </thead>
			              <thead>
			                <tr>
			                  <th class="bgcolorTitle">Line seq</th>
			                  <th class="bgcolorTitle">Item Id</th>
			                  <th class="bgcolorTitle">Item Description</th>
			                  <th class="bgcolorTitle">Ordered qty</th>
			                  <th class="bgcolorTitle">UPC code</th>
			                  <th class="bgcolorTitle">Status</th>
			                  <th class="bgcolorTitle">Status Date</th>
			                  <th class="bgcolorTitle">Expected Shipping date</th>
			                  <th class="bgcolorTitle">Expected delivery date</th>
			                </tr>
			              </thead>
			              <tbody>
			                  <tr>
			                      <td>Mark</td><td>Otto</td><td>@TwBootstrap</td><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td><td>3</td><td>Larry the Bird</td>
			                  </tr>
			                  <tr>
			                      <td>Mark</td><td>Otto</td><td>@TwBootstrap</td><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td><td>3</td><td>Larry the Bird</td>
			                  </tr>
			                  <tr>
			                      <td class="bgcolorBase alignR" colspan="9">Displaying ## of ##</td>
			                  </tr>
			              </tbody>
			            </table> -->
	                </div>
	                <div class="MT floatR">
                        <a href="#status" class="btn-moveToView cancel MR">Cancel </a>
                    </div>
	          	</div>
			</div>
		</div>
	</div>
</script>


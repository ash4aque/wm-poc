 <script class="hide-class" id="orderstatus-template" type="text/x-mustache-template" >
    <div class="wizard-view">
        <div class="component-wrapper">
        	<div id="orderstatus" class="curvedShadowBox mask">
            <h1>Order Search</h1>
             
            <div class="form-inline MT20">
                <div class="control-group" style="padding-right: 80px;">
                   <label class="control-label family style-black" for="subject">Order #</label>
                </div>
                <div class="controls">
                    <input type="text" id="order" class="x-large"></input>
                </div>
            </div>
			<div class="form-inline">
                <div class="control-group" style="padding-right: 42px;">
                   <label class="control-label family style-black" for="subject">Seller org code</label>
                </div>
                <div class="controls">
                    <input type="text"  id="socode" class="x-large"></input>
                </div>
            </div>
             <div class="form-inline picker">
                <div class="control-group" style="padding-right: 34px;">
                   <label class="control-label family style-black" for="subject">Order date</label>
                </div>
                <div class="form-inline">
	                <div class="control-group">
	                   <label class="control-label family style-black" for="from" readonly>From</label>
	                </div>
	                <div class="input-append">
						<input type="text" name="from" id="from" class="span2 from">
						<img id ="fromButton" src="<%=request.getContextPath()%>/assets/img/calendar.gif"><img>
    				</div>
	            </div>
                <div class="form-inline ML">
	                <div class="control-group">
	                   <label class="control-label family style-black" for="to" readonly>To</label>
	                </div>
	                <div class="input-append">
						<input type="text" name="to" id="to"  class="span2 to">
						<img id ="toButton"  src="<%=request.getContextPath()%>/assets/img/calendar.gif"><img>
    				</div>
					
	            </div>
            </div>
            <div class="borderBottom MT20 MB20"></div> 
            <!-- a href="#details" class=" pcd-proceed-btn btn btn-warning  btn-moveToView btn-proceed-pcd">Search</a-->
			<a href="#details" class="btn btn-warning btn-search">Search</a>
			
				<div class="item2 MR MT20 hide grid">
	              	<!-- <table class="table table-bordered">
	                	<thead><tr><th class="bgcolorBase" colspan="9" >Line items</th></tr></thead>
	              		<thead>
			                <tr>
			                  <th class="bgcolorTitle">Order #</th>
			                  <th class="bgcolorTitle">Customer PO #</th>
			                  <th class="bgcolorTitle">Customer email</th>
			                  <th class="bgcolorTitle">Order type</th>
			                  <th class="bgcolorTitle">Order data</th>
			                  <th class="bgcolorTitle">Seller org</th>
			                  <th class="bgcolorTitle">Completion status</th>
			                  <th class="bgcolorTitle">Payment status</th>
			                  <th class="bgcolorTitle">Status</th>
			                </tr>
			              </thead>
			              <tbody>
			                  <tr>
			                      <td><a href="#details" class="btn-moveToView">0206090701</a></td><td>08723425</td><td>jane@doe.mail</td><td>Marketplace</td><td>2013-01-22 09:33:46</td>
								  <td>Rockstar Bags LLC</td><td>No</td><td>Paid</td><td>Released</td>
			                  </tr>
			                  <tr>
			                      <td><a href="#details" class="btn-moveToView">0206090701</a></td><td>08723425</td><td>jane@doe.mail</td><td>Marketplace</td><td>2013-01-22 09:33:46</td>
								  <td>Rockstar Bags LLC</td><td>No</td><td>Paid</td><td>Released</td>
			                  </tr>
			                  <tr>
			                      <td class="bgcolorBase alignR" colspan="9">Displaying ## of ##</td>
			                  </tr>
			              </tbody>
	           		</table> -->
	           </div>
        	</div> 
        </div>
     </div>
</script>

 <div class="hide-class" id="reporting-template" type="text/x-mustache-template" >
    <div class="wizard-view">
        <div id="reporting" class="curvedShadowBox mask">
            <h1>Reports</h1>
             
           <div class="form-inline MT20">
                <div class="control-group">
	                <select id="country">
	                    <option>Seller sales</option>
	                </select>
	            </div> 
                <div class="controls">
                    <a href="#" class="btn btn-warning btn-getReport">View</a>
                </div>
            </div>
			
			<div class="MR MT20 hide grid">
				<div class="MB20">
					<span class="heading">Marketplace seller sales</span>
					<div style="float:right">
		                <div class="button-group">
	                       <a class="buttons" href="javascript:if(window.print)window.print()"><i class="icon-print"></i></a>
	                       <a class="buttons" href="mailto:admin@walmart.com?CC=mayursaxena@walmartLabs.com&Subject=Mutual%20Non%20Disclosure%20Agreement%20&Body=Test%20Message%20"><i class="icon-envelope"></i></a>
	                       <a class="buttons" href="javascript:ShowPdfFile()"><i class="icon-download"></i></a>
	                   </div>
		            </div>
				</div>
              	<table class="table table-bordered">
                	<thead><tr><th class="bgcolorBase" colspan="9" >Reports</th></tr></thead>
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
           		</table>
           </div>

        </div> 
     </div>
</div>

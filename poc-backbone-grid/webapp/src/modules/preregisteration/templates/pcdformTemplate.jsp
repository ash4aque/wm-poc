<script class="hide-class" id="pcdform-template" type="text/x-mustache-template">
    <div class="wizard-view">
        <!--div class="pcdbreadcrum">
            <span class="mppfont font14" style="color:#1A75CF;"><a href="#start"  class="btn-moveToView">Partner contact details</a></span>
            <span class="mppfont font14" style="color:#1A75CF;">></span>
            <span class="mppfont font14" style="color:#333333;">Primary contact person</span>
        </div-->
        <div class="component-wrapper">
            <div id="preregform" class="curvedShadowBox MB">
	            <div>
	                <p class="text-align-left"><span class="page-header">Primary Contact Person</span></p>
	            </div>
	            <div>
	                <p class="text-align-left" style="margin-bottom: 20px;"><span class="label-header">All fields are mandatory unless mentioned optional</span></p>
	            </div>
	
				<div class="control-group">
					<label class="control-label family style-black" for="subject">First Name</label>
					<div class="controls">
						<input type="text" id="fname" name="fname" value="{{firstName}}" class="span6"></input>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label family style-black" for="subject">Last Name</label>
					<div class="controls">
						<input type="text" name="lname" id="lname" value="{{lastName}}" class="span6">
					</div>
				</div>
	            <div class="control-group">
	                <label class="control-label family style-black" for="subject">Job title or Designation
						<a href="#" rel="popover" data-class="dynamic-class" title='' data-content="Job title or Description" class="font14" style="color:#105BC7;padding-right:10px;">?</a>
					</label>
	                <div class="controls">
	                    <input type="text" id="desg"  value="{{designation}}" name="desg" class="span6"></input>
	                </div>
	            </div>
	            <div class="control-group">
	                <label class="control-label family style-black" for="subject">Legal Company Name</label>
	              	<div class="controls">
	                	<input type="text" id="cname" value="{{legalName}}" name="cname" class="span6"></input>
	              	</div>
	            </div>
	            <div class="control-group">
	            	<label class="control-label family style-black" for="subject">Company Display Name
						<a href="#" rel="popover" data-class="dynamic-class" title='' data-content="Company Display Name" class="font14" style="color:#105BC7;padding-right:10px;">?</a>
					</label>
	                <div class="controls">
	                    <input type="text" name="dname" id="dname" value="{{companyDisplayName}}"  class="span6">
	                </div>
	            </div>
	            <div class="control-group">
	                 <label class="control-label family style-black" for="subject">Email Address</label>
	                 <div class="controls">
	                   <input type="text" id="email" value="{{email}}" name="email" class="span6"></input>
	                 </div>
	            </div>
	            <div class="form-inline">
	            	<div class="control-group">
		                <label class="control-label family style-black" for="subject">Phone Number</label>
		                <div class="controls">
		                	<input type="text" id="pnum" value="{{phone}}" name="pnum" class="x-vlarge"></input>
		                </div>
	               </div>
	               <div class="control-group">
	                   <label class="control-label family style-black" for="subject">Extension <span class="family style-optional">(Optional)</span></label>
	                   <div class="controls">
	                       <input type="text" name="ext" value="{{extension}}" class="x-small" id="ext">
	                   </div>
	               </div>
	               <div class="control-group">
	                   <span class="family style-black add" >(+)</span><span class="family style-black remove hide" > (-)</span>
	               </div>
	            </div>
	            <div class="input-placeholder form-inline"></div>
	            <div class="borderBottom MT20 MB20">
	               <span style="font-family:Arial;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">Company address</span>
	            </div>                 
	            <div class="control-group">
	               <label class="control-label family style-black" for="subject">Address Line 1</label>
	               <div class="controls">
	                   <input class="span6" type="text" value="{{addressLine1}}" id="addline1" name="addline1"></input>
	               </div>
	            </div>
	            <div class="control-group">
	               <label class="control-label family style-black" for="subject">Address Line 2 <span class="family style-optional">(Optional)</span></label>
	               <div class="controls">
	                   <input class="span6" type="text" value="{{addressLine2}}" name="addline2" id="addline2">
	               </div>
	            </div>
	            <div class="form-inline">
	                <div class="control-group">
	                   <label class="control-label family style-black" for="subject">City/Town</label>
	                   <div class="controls">
	                       <input type="text" id="city" value="{{city}}" name="city" class="x-large"></input>
	                   </div>
	                </div>
	                <div class="control-group">
	                   <label class="control-label family style-black" for="subject">State</label>
	                   <div class="controls">
	                       <input type="text" value="{{state}}" name="state" id="state" class="x-medium">
	                   </div>
	                </div>
	                <div class="control-group">
	                   <label class="control-label family style-black" for="subject">Postal/Zip code</label>
	                   <div class="controls">
	                       <input type="text" name="zip" value="{{zip}}" class="x-small" id="zip">
	                   </div>
	                </div>
	            </div>
	            <div class="control-group">
	                <label class="control-label family style-black">Country</label>
	                <select id="country">
	                    <option>India</option>
	                    <option>USA</option>
	                    <option>Aus</option>
	                    <option>UK</option>
	                    <option>Nepal</option>
	                </select>
	            </div>                
	            <div class="form-inline">
	                <div class="control-group floatR">
	                  <a href="#intro" class="btn-moveToView cancel MR">Cancel </a>
	                  <a href="#disclosure" class="pcdsave btn btn-warning btn-save">Save & Proceed >></a>
	                  <a href="#disclosure" class="proceed btn btn-warning btn-moveToView btn-proceed-nda hide">Proceed</a>
	                </div>
	            </div>                 
	             <!--  <a href="#start" class="pcdsave btn btn-warning btn-save">Save </a>
	             <a href="#start" class="btn-moveToView cancel MR">Cancel </a> -->              
                        
            </div>
           </div>
        </div>
    </div>
</script>
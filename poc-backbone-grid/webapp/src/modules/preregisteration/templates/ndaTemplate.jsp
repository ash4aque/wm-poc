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
<script class="hide-class" id="nda-template" type="text/x-mustache-template">
    <div class="wizard-view">
        <div class="component-wrapper">
            <div id="NDAProcess" class="curvedShadowBox MB mask">
                <div style="float:right">
                    <div class="btn-toolbar">
                        <div class="btn-group">
                            <a class="btn" href="javascript:if(window.print)window.print()"><i class="icon-print"></i></a>
                            <a class="btn" href="mailto:admin@walmart.com?CC=mayursaxena@walmartLabs.com&Subject=Mutual%20Non%20Disclosure%20Agreement%20&Body=Test%20Message%20"><i class="icon-envelope"></i></a>
                            <!-- <a class="btn" href="#"><i class="icon-download-alt"></i></a> -->
                            <a class="btn" href="javascript:ShowPdfFile()"><i class="icon-download"></i></a>
                        </div>
                    </div>
                </div>
                <h1>Mutual Non Disclosure Agreement</h1>
                <div style="width:50%;padding-bottom: 20px;">
                    <p class="text-align-left"><span class="nda-title">Please read the NDA and accept the terms at the end of the document.</span></p>
                </div>
                <div class="nda-content-wrap">
                    <div class="nda-content-inner">
                        <div class="ndaContent"></div>
                        <div class="nda-user-info"></div>
                    </div>
                </div>
                <div class="form-inline">
                    <div class="control-group floatR">
					  <a href="#pcdform" class="btn btn-moveToView MR">Previous</a>
                      <a href="#intro" class="ndaagree btn btn-warning btn-save">Finish</a>
                    </div>
                </div>
                <!-- <a href="#intro" class="ndaagree btn btn-warning btn-save">I agree</a>
                <a href="#intro" class="btn-moveToView cancel MR">Cancel </a> -->
            </div>
        </div>
      </div>
    </div>
</script>

<script class="hide-class" id="nda-user-template" type="text/x-mustache-template">
    <div class="accept-nda" style="height:30px;padding-top: 12px;">
        <input class= "chkbx" type="checkbox" checked="checked" >
        <p class="text-align-left inline-block">
            <span class="nda-accept"> Yes, I accept the terms and conditions</span>
        </p>
    </div>
    <table class="MT MB table">
        <tr><td class="nda-user-fields">Name:</td><td class="nda-user-values">{{firstName}}</td></tr>
        <tr><td class="nda-user-fields">Legal Company name:</td><td class="nda-user-values">{{legalName}}</td></tr>
        <tr><td class="nda-user-fields">Address:</td><td class="nda-user-values">{{addressLine1}}, {{addressLine2}}, {{city}}</td></tr>
        <tr><td class="nda-user-fields">Phone:</td><td class="nda-user-values">{{phone}}</td></tr>
    </table>
</script>
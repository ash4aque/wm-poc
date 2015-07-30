<script class="hide-class" id="start-template" type="text/x-mustache-template">    
    <div class="wizard-view">
        
        <div class="component-wrapper">
            <div id="partnerOnboardingProcess" class="curvedShadowBox MB">
                <h1>Partner onboarding process</h1>
                <div id="progressBar" class="clearfix">
                <div class="wrapper floatR">
                    <div class="progress">
                        <div id="bar" class="bar" style="width:0%;"></div>
                    </div>
                    <p>Partner onboarding is <span class="barTitle">0%</span> complete.</p>
                </div>  
                </div>
                <div id="POPSteps">
                    <ul class="breadcrumb clearfix">
                        <li class="zebra-odd active"><a href="#">Partner contact details</a></li>
                        <li class="zebra-even"><a href="#">Partner evaluation</a></li>
                        <li><a class="zebra-odd" href="#">Contract signing</a></li>
                    </ul>
                    <div class="popStepsDiv clearfix borderBottom">
                        <a href="#pcdform" class=" pcd-proceed-btn btn btn-warning  btn-moveToView btn-proceed-pcd floatR">Proceed</a>
                        <div style="float: right;width:140px;" class="pcd-proceed-link"> 
                            <div class="floatR viewcomplete">Complete</div>
                            <a href="#pcdform"  class="btn-moveToView btn-proceed-pcd floatR">View/Edit details</a>
                        </div>
                        <div>
                            <div class="pop-step-title">Primary contact details</div>
                            <div class="pop-step-content">Provide primary contact person details</div>
                        </div>
                    </div>
                    <div class="popStepsDiv clearfix">
                        <a href="#disclosure"  class="nda-proceed-btn btn btn-warning btn-moveToView btn-proceed-nda floatR">Proceed</a>
                        <div style="float: right;width:120px;" class="nda-proceed-link">
                            <div class="floatR viewcomplete">Complete</div>
                            <a href="#disclosure"  class="btn-moveToView btn-proceed-nda floatR ">View details</a>
                        </div>
                        
                        <div class="">
                            <div class="pop-step-title">Mutual Non Disclosure Agreement</div>
                            <div class="pop-step-content">Mutual Non Disclosure Agreement between you and Wal-Mart Stores, Inc.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>
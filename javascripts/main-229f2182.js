$("#menu .showmenu").click(function(){$("#navigation-menu").toggle()}),$("#languages .showmenu").click(function(){$("#navigation-languages").toggle()}),$(function(){$.scrollUp({scrollName:"scrollUp",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:"",activeOverlay:!1})}),$(".bodytext a:has(img)").addClass("fresco"),$(".photoset-grid").photosetGrid(),$(".bxslider").bxSlider({pagerType:"full",autoStart:!0,controls:!1,captions:!0}),$(".adslider").bxSlider({randomStart:!0,autoStart:!0,autoControls:!1,auto:!0}),$(".timeline ul").bxSlider({pagerType:"full",autoStart:!0,controls:!1,captions:!1}),$("#twitter").sharrre({share:{twitter:!0},enableHover:!1,enableCounter:!1,enableTracking:!0,buttons:{twitter:{via:"CorunaTurismo"}},click:function(e){e.simulateClick(),e.openPopup("twitter")}}),$("#facebook").sharrre({share:{facebook:!0},enableHover:!1,enableCounter:!1,enableTracking:!0,click:function(e){e.simulateClick(),e.openPopup("facebook")}});
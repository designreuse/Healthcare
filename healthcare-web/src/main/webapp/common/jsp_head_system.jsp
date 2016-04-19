<%
	String path = request.getContextPath();
%>
<!-- BEGIN SPRING TAGLIB -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<!-- END SPRING TAGLIB -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<!-- BEGIN GLOBAL MANDATORY STYLES -->          
	<link href="<%=path %>/assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/select2/select2_metro.css" />
	
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-fileupload/bootstrap-fileupload.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/gritter/css/jquery.gritter.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/select2/select2_metro.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/clockface/css/clockface.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-datepicker/css/datepicker.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-timepicker/compiled/timepicker.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-colorpicker/css/colorpicker.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-datetimepicker/css/datetimepicker.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/jquery-multi-select/css/multi-select.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-switch/static/stylesheets/bootstrap-switch-metro.css"/>
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/jquery-tags-input/jquery.tagsinput.css" />
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css">
	<link href="<%=path %>/assets/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/plugins/bootstrap-modal/css/bootstrap-modal.css" rel="stylesheet" type="text/css"/>
	<!-- END PAGE LEVEL STYLES -->
	
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-editable/bootstrap-editable/css/bootstrap-editable.css"/>
	<link rel="stylesheet" type="text/css" href="<%=path %>/assets/plugins/bootstrap-editable/inputs-ext/address/address.css"/>
	<!-- BEGIN THEME STYLES --> 
	<link href="<%=path %>/assets/css/style-metronic.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/css/style_svg.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/css/plugins.css" rel="stylesheet" type="text/css"/>
	<link href="<%=path %>/assets/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="<%=path %>/assets/css/custom.css" rel="stylesheet" type="text/css"/>
	<!-- JBOX CSS BEGIN -->
		<link id="skin" rel="stylesheet" href="<%=path%>/js/jbox/Skins/GrayCool/jbox.css" />
	<!-- JBOX CSS END -->
	<!-- END THEME STYLES -->

	<!-- START CUSTOM  STYLES-->
	<link href="<%=path %>/style/page-info.css" rel="stylesheet" type="text/css" />
	<!-- END CUSTOM  STYLES-->


	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->   
	<!--[if lt IE 9]>
	<script src="<%=path %>/assets/plugins/respond.min.js"></script>
	<script src="<%=path %>/assets/plugins/excanvas.min.js"></script> 
	<![endif]-->   

	<script src="<%=path %>/js/jquery.min.js" type="text/javascript"></script>
	<!-- JBOX 2.3 BEGIN -->
	<script type="text/javascript" src="<%=path%>/js/jbox/jquery.jBox.src.1.9.js"></script>
 	<script type="text/javascript" src="<%=path%>/js/jbox/i18n/jquery.jBox-zh-CN.js"></script>
   	<!-- JBOX 2.3 END -->
   	
	<script src="<%=path %>/assets/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<script src="<%=path %>/assets/plugins/jquery-idle-timeout/jquery.idletimeout.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/jquery-idle-timeout/jquery.idletimer.js" type="text/javascript" ></script>
	<script src="<%=path %>/js/custom_js/idle-timeout.js" type="text/javascript" ></script>
	
	<!-- IMPORTANT! Load jquery-ui-1.10.3.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="<%=path %>/assets/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>      
	<script src="<%=path %>/assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="<%=path %>/assets/plugins/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="<%=path %>/assets/plugins/jquery.blockui.min.js" type="text/javascript"></script>  
	<script src="<%=path %>/assets/plugins/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="<%=path %>/assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script type="text/javascript" src="<%=path %>/assets/plugins/fuelux/js/spinner.min.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/ckeditor/ckeditor.js"></script>  
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-fileupload/bootstrap-fileupload.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/select2/select2.min.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js"></script> 
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/clockface/js/clockface.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-daterangepicker/moment.min.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script> 
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js"></script>  
	<script type="text/javascript" src="<%=path %>/assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js"></script>   
	<script type="text/javascript" src="<%=path %>/assets/plugins/jquery.input-ip-address-control-1.0.min.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/jquery-multi-select/js/jquery.multi-select.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/jquery-multi-select/js/jquery.quicksearch.js"></script>   
	<script type="text/javascript" src="<%=path %>/assets/plugins/jquery-validation/dist/jquery.validate.min.js"></script>
	<script type="text/javascript" src="<%=path %>/assets/plugins/jquery-validation/dist/additional-methods.min.js"></script>
	<script src="<%=path %>/assets/plugins/jquery.pwstrength.bootstrap/src/pwstrength.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/bootstrap-switch/static/js/bootstrap-switch.min.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/jquery-tags-input/jquery.tagsinput.min.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/bootstrap-markdown/js/bootstrap-markdown.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/bootstrap-markdown/lib/markdown.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/bootstrap-touchspin/bootstrap.touchspin.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/bootstrap-modal/js/bootstrap-modalmanager.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/plugins/bootstrap-modal/js/bootstrap-modal.js" type="text/javascript" ></script>
	<!-- END PAGE LEVEL PLUGINS -->
	
	
	<script type="text/javascript" src="<%=path %>/assets/plugins/select2/select2.min.js"></script>
	<script src="<%=path %>/assets/plugins/bootbox/bootbox.min.js" type="text/javascript" ></script>
	<script src="<%=path %>/assets/scripts/app.js"></script>
	<script src="<%=path %>/assets/scripts/form-components.js"></script>
	
	<script type="text/javascript" src="<%=path%>/assets/plugins/moment.min.js"></script>
	<script type="text/javascript" src="<%=path%>/assets/plugins/jquery.mockjax.js"></script>
	<script type="text/javascript" src="<%=path%>/assets/plugins/bootstrap-editable/bootstrap-editable/js/bootstrap-editable.js"></script>
	<script type="text/javascript" src="<%=path%>/assets/plugins/bootstrap-editable/inputs-ext/address/address.js"></script>
	<script type="text/javascript" src="<%=path%>/assets/plugins/bootstrap-editable/inputs-ext/wysihtml5/wysihtml5.js"></script>
	
	<!-- START CUSTOM PLUGINS -->
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/json2.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/InfoAjax.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/my-grid-pager.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/ajaxUtil.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/fixcode/fixcodeCH.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/common.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/fixcode/codeTranser.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/tools.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jbox/jbox_custom.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/validation/validation.custom.js"></script>
	<!-- END CUSTOM PLUGINS -->
	
	<!-- START CUSTOM WINDOW PLUGINS -->
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/custom_js/ch_smip_window.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/hand_ui/custom_js/common.js"></script>
	<!-- END CUSTOM WINDOW PLUGINS -->
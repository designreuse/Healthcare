<%@page import="com.chkj.www.smip.common.Constants"%>
<%@page import="com.chkj.www.smip.bean.AclUserBean"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="<%=request.getContextPath()%>/style/content.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath()%>/style/calendar.css" type="text/css" rel="stylesheet" />
<link href="<%=request.getContextPath()%>/style/page-info.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath()%>/dialog/themes/base/jquery.ui.all.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/dialog/demos.css" rel="stylesheet" type="text/css">
<link href="<%=request.getContextPath()%>/images/skin.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath()%>/style/lightbox/jquery.lightbox-0.5.css" rel="stylesheet" type="text/css" media="screen"/>



<%-- <script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-1.4.3.js"></script> --%>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/swfobject.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.uploadify.v2.1.4.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/external/jquery.bgiframe-2.1.1.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.ui.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.ui.widget.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.ui.mouse.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.ui.draggable.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.ui.position.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.ui.resizable.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.ui.dialog.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.effects.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.effects.blind.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/dialog/ui/jquery.effects.explode.js"></script>


<script type="text/javascript" src="<%=request.getContextPath()%>/js/json2.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jslib/dialog.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jslib/calendar.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/FormValidation.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/InfoAjax.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/my-grid-pager.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/util/pageUtil.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/util/dialog.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/ajaxUtil.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/dialog_new.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/jslib/tableChange.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/clone_tableheader.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/fixcode/fixcodeCH.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/common.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/fixcode/codeTranser.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/isBrowser.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/lightbox/jquery.lightbox-0.5.js"></script>
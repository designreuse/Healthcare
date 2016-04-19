<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String path = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>用户管理</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<meta name="MobileOptimized" content="320">
	<script src="<%=path%>/js/jquery.form.js" type="text/javascript"></script>
</head>
<body>
<!-- BEGIN FORM-->
<form class="form-horizontal" id="fm" name="fm" >
<input type="hidden" id="curPage" value="" />
<!-- BEGIN PAGE HEADER-->
<div class="row">
	<div class="col-md-12">
		<!-- BEGIN PAGE TITLE & BREADCRUMB-->
		<h3 class="page-title">
			<span class="icon-svg2 icon-pad"></span> 用户管理
			<small>User Management</small>
		</h3>
		<!-- END PAGE TITLE & BREADCRUMB-->
	</div>
</div>
<!-- BEGIN PAGE CONTENT-->    
<div class="tab-pane " id="tab_2">
	<div class="portlet box grey">
		<div class="portlet-title">
			<div class="caption"><i class="fa fa-reorder"></i>查询条件</div>
			<div class="tools">
				<a href="javascript:;" class="collapse"></a>
			</div>
		</div>
		<div class="portlet-body form">
			<div class="form-body">
				<div class="row">
					<div class="col-md-6 col-lg-4">
						<div class="form-group">
							<label class="control-label col-md-3">用户代码</label>
							<div class="input-group col-md-9 col-sm-12 col-xs-12">
								<input type="text" class="form-control" placeholder="用户代码" id="userCode" name="userCode" value="" />
							</div>
						</div>
					</div>
					<!--/span-->
					<div class="col-md-6 col-lg-4">
						<div class="form-group">
							<label class="control-label col-md-3">用户姓名</label>
							<div class="input-group col-md-9 col-sm-12 col-xs-12">
								<input type="text" class="form-control" placeholder="用户姓名" id="userName" name="userName" value="" />
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-4">
						<div class="form-group">
							<label class="control-label col-md-3">状态</label>
								<div class="col-md-9" id="statusDiv"><script type="text/javascript">getSelect('userStatus','userStatus','1001','',true,'form-control','','statusDiv');</script></div>
						</div>
					</div>
				</div>
				<!--/span-->
				<div class="form-group col-md-12">
					<div class="pull-right">
						<button class="btn red btn-sm" type="button" id="btn_search"><i class="fa fa-search"></i> 查  询</button>  
					</div>
				</div>  
			</div>
	</div>
</div>
<!-- table -->
<div class="portlet box grey">
	<div class="portlet-title">
	  <div id="caption" class="caption"> <i class="fa fa-cogs"></i> 查询结果</div>
	  <div class="actions">
		<button class="btn green btn-sm" type="button" onclick="createUserInfo()"><i class="fa fa-plus"></i> 新增用户</button>
			<div class="btn-group">
				<a  href="#" class="btn blue btn-sm" data-toggle="dropdown">
					<i class="fa fa-cogs"></i> 更多
					<i class="fa fa-angle-down"></i>
				</a>
				<ul class="dropdown-menu pull-right">
					<li>
						<li><a href="javascript:void(0)" onclick="deleteUser()"><i class="fa fa-trash-o"></i> 删除</a></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- table -->
	<div class="portlet-body " id="data-body">
		<c:import url="/queryPage/orderHidden.html"/>
		<c:import url="/queryPage/pageDiv.html" charEncoding="UTF-8" />
		<br />
	</div>
<!-- END PAGE CONTENT-->
</div>

</form>
<!-- 弹出层所在位置 -->
<div id="ajax-modal-user" class="container modal fade" tabindex="-1"></div>
<!-- END FORM-->  
</body>
</html>

<script type="text/javascript">
 	var option = 
 	{
 		 url:"usermanager/userManagerPageQuery",
 		 title: null,
 		 tableClass : null,
 		 formId:"fm",
 		 gridId:"myGrid",
 		 blankId:"_page",
 		 pageId:"myPage",
 		 useRadio:true,
 		 columns : [
 			{header: "", width: "10%", dataIndex: "userId",renderer: getRadio},//设置序号的方式
			{header: "用户代码", width: "30%", dataIndex: "userCode"},
			{header: "用户名称", width: "30%", dataIndex: "userName"},
			{header: "用户状态", width: "30%", dataIndex: "userStatus", renderer: getfixCodeDesc}
 		]
 	};
	jQuery(document).ready(function() {
		__extQuery__(1,option);
	});
	$("#btn_search").click(function() {
		__extQuery__(1,option);
	});
	
	function createUserInfo()
	{
		App.loadContentData("usermanager/createUserInfoPre");
		return;
	}
	
	function deleteUser()
	{
		var intHot = $("input[name='indexId']:checked").val();
		delConfirm({message:'是否删除此用户?',callback:'delUserCallback('+intHot+');'});
	}
	
	function delUserCallback(intHot){
		App.loadContentData("usermanager/deleteUserInfo?userId="+intHot);
	}
</script>
	

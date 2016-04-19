<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
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
</head>
<body onload="">
<!-- BEGIN FORM-->
<form class="form-horizontal" role="form" id="fm" name="fm" >
<input type="hidden" id="curPage" value="${sessionScope.condition.curPage}" />
<!-- BEGIN PAGE HEADER-->
<div class="row">
	<div class="col-md-12">
		<!-- BEGIN PAGE TITLE & BREADCRUMB-->
		<h3 class="page-title">
			<span class="icon-svg2 icon-pad"></span>
			用户管理&nbsp;&nbsp;<small>User Management</small>
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
										<input type="text" class="form-control" placeholder="用户代码" id="userCode" name="userCode" value="${sessionScope.condition.userCode}">
									</div>
								</div>
							</div>
							<!--/span-->
							<div class="col-md-6 col-lg-4">
								<div class="form-group">
									<label class="control-label col-md-3">用户名称</label>
									<div class="input-group col-md-9 col-sm-12 col-xs-12">
										<input type="text" class="form-control" placeholder="用户名称" id="userName" name="userName" value="${sessionScope.condition.userName}">
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-4">
								<div class="form-group">
									<label class="control-label col-md-3">性别</label>
									<div class="col-md-9 col-sm-12 col-xs-12" id="genderDiv"><script type="text/javascript">getSelect('gender','gender','1003','${sessionScope.condition.gender}',true,'form-control','','genderDiv');</script></div>
								</div>
							</div>
							<!--/span-->
							<div class="col-md-6 col-lg-4">
									<div class="form-group">
										<label class="control-label col-md-3">状态</label>
										<div class="col-md-9 col-sm-12 col-xs-12" id="statusDiv"><script type="text/javascript">getSelect('status','status','1001','${sessionScope.condition.status}',true,'form-control','','statusDiv');</script></div>
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
</div>
<!-- table -->
<div class="portlet box grey">
	<div class="portlet-title">
	  <div id="caption" class="caption"> <i class="fa fa-cogs"></i> 查询结果
	  </div>
	  <div class="actions">
		<span id="pageSizeDiv"><script type="text/javascript">getPageSizeSelect('pageSize','pageSize','${sessionScope.condition.pageSize}',"onchange='__extQuery__(1,option)'",'','pageSizeDiv');</script></span>
			<a href="javascript:void(0)" class="btn green btn-sm" onclick="toFunction('0')"><i class="fa fa-plus"></i> 新增</a>
			<div class="btn-group">
				<a  href="#" class="btn blue btn-sm" data-toggle="dropdown">
				<i class="fa fa-cogs"></i> 更多
				<i class="fa fa-angle-down"></i>
				</a>
				<ul class="dropdown-menu pull-right">
					<li><a href="javascript:void(0)" onclick="toFunction('UpdateUserPage.action?userId=')"><i class="fa fa-edit"></i> 编辑</a></li>
					<li><a href="javascript:void(0)" onclick="toFunction('UserPostMain.action?userId=')"><i class="fa fa-edit"></i> 维护岗位</a></li>
<!-- 					<li><a href="javascript:void(0)" onclick="toFunction('1')"><i class="fa fa-file-o "></i> 导入</a></li> -->
				</ul>
			</div>
		</div>
	</div>
	<!-- table -->
	<div class="portlet-body " id="data-body">
	  <!-- 开始 查询列表 -->
		<jsp:include page="${contextPath}/queryPage/orderHidden.html" />
		<jsp:include page="${contextPath}/queryPage/pageDiv.html" />
		<br />
	</div>
<!-- END PAGE CONTENT-->
</div>

</form>
<!-- END FORM-->  
</body>
</html>

<script type="text/javascript">
	
	var option = {
			url:"UserQueryAll.action",
			title:null,
			tableClass:null,
			formId:"fm",
			 gridId:"myGrid",
			 blankId:"_page",
			 pageId:"myPage",
			 useRadio:true,
			columns : [
			{header: "", width: "3%", dataIndex: "userId",renderer: getRadio},//设置序号的方式
			{header: "用户代码", width: "6%", dataIndex: "userCode"},
			{header: "用户名称", width: "6%", dataIndex: "userName"},
			{header: "用户英文名", width: "6%", dataIndex: "userNameEn"},
			{header: "身份证", width: "10%", dataIndex: "idNumber"},
			{header: "邮箱", width: "10%", dataIndex: "email"},
			{header: "电话", width: "6%", dataIndex: "tel"},
			{header: "手机", width: "6%", dataIndex: "phone"},
			{header: "qq", width: "6%", dataIndex: "qq"},
			{header: "微信", width: "6%", dataIndex: "wechat"},
			{header: "地址", width: "10%", dataIndex: "address"},
			{header: "性别", width: "6%", dataIndex: "gender",renderer:getfixCodeDesc},
// 			{header: "头像", width: "6%", dataIndex: "photoName"},
			{header: "状态", width: "6%", dataIndex: "status",renderer:getfixCodeDesc},
			{header: "所属岗位", width: "7%", dataIndex: "postName",renderer:methed}		
			]
	};
	jQuery(document).ready(function() {
		var curP = gainCurPage();
		__extQuery__(curP,option);
	});
	$("#btn_search").click(function() {
		__extQuery__(1,option);
	});
 	function methed(value){
		if(value=="" || value==null){
			return "未维护";
		}else{
			var str = "<div style=\"text-align:left;overflow:hidden; white-space:nowrap;text-overflow:ellipsis;width:100px;\">"
			str += "<span title=\""+value.replace(/\,/g,'&#13;')+"\">";
			str += value;
			str += "</span>&nbsp;</div>";
			return str;
		}
	} 
 	function toFunction(value){
 		if(value == 1){
 			App.loadContentData("toImport.action");
 			return;
 		}if(value == 0){
 			App.loadContentData("UserAddPage.action");
 			return;
 		}
 		var intHot = $("input[name='indexId']:checked").val();
		if(intHot==null||intHot==""){
			tipWarning("请选择您要维护的用户");
			return;
		}else{
			App.loadContentData(value+intHot);
			return;
		}
 	}
</script>
	

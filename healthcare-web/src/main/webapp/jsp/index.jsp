<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@page import="com.yuncetec.healthcare.bean.AclUserBean"%>
<%@page import="com.yuncetec.healthcare.core.common.Constants"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<%@page import="org.apache.shiro.subject.Subject"%>
<%@page import="org.apache.shiro.session.Session"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String path = request.getContextPath();
	Subject subject = SecurityUtils.getSubject();
	Session ShiroSession = subject.getSession();
	System.out.println(ShiroSession.getAttribute(Constants.LOGIN_USER));
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>云策智慧医疗管理平台</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<meta name="MobileOptimized" content="320">
	<c:import url="/common/jsp_head_system.jsp"/>
	<link rel="shortcut icon" href="favicon.ico" />
</head>
<body class="page-header-fixed page-footer-fixed">
	<!-- BEGIN HEADER -->   
	<div class="header navbar navbar-inverse navbar-fixed-top">
		<!-- BEGIN TOP NAVIGATION BAR -->
		<div class="header-inner">
			<!-- BEGIN LOGO -->  
			<a class="navbar-brand" href="javascript:;" style="margin-top: -35px" title="一汽大众">
				<img src="<%=path %>/images/logo.png" alt="logo" style="margin-top: 30px;" class="img-responsive"  />
			</a>
			<!-- END LOGO -->
			<!-- BEGIN RESPONSIVE MENU TOGGLER --> 
			<a href="javascript:;" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<img src="<%=path %>/assets/img/menu-toggler.png"/>
			</a> 
			<!-- END RESPONSIVE MENU TOGGLER -->
			<!-- BEGIN TOP NAVIGATION MENU -->
			<ul class="nav navbar-nav pull-right">
				<!-- BEGIN USER LOGIN DROPDOWN -->
				<li class="dropdown user">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
					<c:choose>
						<c:when test="${sessionScope.loginUser.photoAtta!=null }">
							<img style="width: 29px;height: 29px;" src="<%=path %>/showImg.action?userId=<%=((AclUserBean)ShiroSession.getAttribute(Constants.LOGIN_USER)).getUserId() %>&id=<%=Math.random()%>"/>
						</c:when>
						<c:otherwise>
							<img style="width: 29px;height: 29px;" src="<%=path %>/assets/img/avatar.png"/>
						</c:otherwise>
					</c:choose>
					
					<span class="username"><%= ((AclUserBean)ShiroSession.getAttribute(Constants.LOGIN_USER)).getUserCode() %></span>
					<i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu">
						<li><a href="javascript:;" id="trigger_fullscreen"><i class="fa fa-move"></i>全屏</a></li>
						<!-- 
						<li><a href="lock.action"><i class="fa fa-lock"></i>锁屏</a>
						 -->
						<li><a href="javascript:clickLogOut();"><i class="fa fa-key"></i>退出</a></li>
					</ul>
				</li>
				<!-- END USER LOGIN DROPDOWN -->
			</ul>
			<!-- END TOP NAVIGATION MENU -->
		</div>
		<!-- END TOP NAVIGATION BAR -->
	</div>
	<!-- END HEADER -->
	<div class="clearfix"></div>
	<!-- BEGIN CONTAINER -->
	<div class="page-container">
		<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->               
		<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
						<h4 class="modal-title">小部件设置</h4>
					</div>
					<div class="modal-body">
						小部件设置暂未开启
					</div>
					<div class="modal-footer">
						<button type="button" class="btn blue" disabled="disabled">保存</button>
						<button type="button" class="btn default" data-dismiss="modal">关闭</button>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->
		<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
		<!-- BEGIN SIDEBAR1 -->
		<div class="page-sidebar navbar-collapse collapse">
			<!-- BEGIN SIDEBAR MENU1 -->         
			<ul class="page-sidebar-menu">
				<li>
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
					<div class="sidebar-toggler hidden-xs"></div>
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
				</li>
				<li>
					<!-- BEGIN RESPONSIVE QUICK SEARCH FORM                  
					<form id="search" class="sidebar-search" action="extra_search.html" method="POST">
						<div class="form-container">
							<div class="input-box">
								<a href="javascript:;" class="remove"></a>
								<input type="text" placeholder="Search..." disabled="disabled">
								<input type="button" class="submit" disabled="disabled" value=" "/>
							</div>
						</div>
					</form>
					 END RESPONSIVE QUICK SEARCH FORM jsp/audi/util/example.jsp-->
				</li>
				<li class="start">
					<a class="ajaxify start" href="jsp/example.jsp">
					<i class="fa fa-home"></i> 
					<span class="title">首页</span>
					<span class="selected"></span>
					</a>
				</li>
				<!-- 左侧菜单 -->
				<% String menu =(String)request.getAttribute("menu"); out.print(menu);%>
				<!-- 左侧菜单 -->
			</ul>
			<!-- END SIDEBAR MENU1 -->
		</div>
		<!-- END SIDEBAR1 -->
		<!-- BEGIN PAGE -->
		<div class="page-content">
<div class="theme-panel hidden-xs hidden-sm">
				<div class="toggler"></div>
				<div class="toggler-close"></div>
				<div class="theme-options">
					<div class="theme-option theme-colors clearfix">
						<span>选择颜色</span>
						<ul>
							<li class="color-black current color-default" data-style="default"></li>
							<li class="color-blue" data-style="blue"></li>
							<li class="color-brown" data-style="brown"></li>
							<li class="color-purple" data-style="purple"></li>
							<li class="color-grey" data-style="grey"></li>
							<li class="color-white color-light" data-style="light"></li>
						</ul>
					</div>
				</div>
			</div>
		<!-- BEGIN STYLE CUSTOMIZER -->
			<!-- END BEGIN STYLE CUSTOMIZER --> 
			
			<div class="page-content-body"></div>
			
		</div>
		<!-- BEGIN PAGE -->     
	</div>
	<!-- END CONTAINER -->
	<!-- BEGIN FOOTER -->
	<div class="footer">
		<div class="footer-inner">
			  版权所有 ©2013-2014 吉林省苍宏信息科技有限公司
		</div>
		<div class="footer-tools">
			<span class="go-top">
			<i class="fa fa-angle-up"></i>
			</span>
		</div>
	</div>
	<!-- END FOOTER -->
	<script>
		function clickLogOut(){
			window.parent.location="logout";
		}
		jQuery(document).ready(function() { 
		   App.init();
		   FormComponents.init();
		   $('.page-sidebar .ajaxify.start').click() // load the content for the dashboard page.
		});
	
	</script>
	<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>
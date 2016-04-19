<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@page import="org.apache.shiro.subject.Subject"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String path = request.getContextPath();
	String isAuthenticate = (String)request.getAttribute("isAuthenticate");
	String noRole = (String)request.getAttribute("noRole");
	Subject subject = SecurityUtils.getSubject();
	if(null != subject && subject.isAuthenticated())
	{
		subject.logout();
	}
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
	<script type="text/javascript">
		if (($("body").size()+1)>=2){
			window.top.location="${pageContext.request.contextPath}"; 
		}
		window.history.forward(1);
	</script>
	<c:import url="/common/jsp_head_system.jsp"/>
	<link href="<%=path %>/assets/css/pages/login-soft.css" rel="stylesheet" type="text/css"/>
	<script src="<%=path %>/assets/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
	<script src="<%=path%>/assets/scripts/login-soft.js" type="text/javascript"></script>
	<!-- END THEME STYLES -->
	<link rel="shortcut icon" href="favicon.ico" />
</head>
<body class="login">
	<!-- BEGIN LOGO -->
	<div class="logo">
		<img src="<%=path %>/images/logo-login.png" style="margin-left:-220px;margin-top: -10px; width: 130px;height: 50px;" alt="" />
	</div>
	<!-- END LOGO -->
	<!-- BEGIN LOGIN -->
	<div class="content" style="margin-top:  -10px">
		<!-- BEGIN LOGIN FORM -->
		<form class="login-form" id="fm" method="post">
			<h4 style="float: right;margin-top: -25px;margin-right: -12px"><a href="javascript:changeLanguage('en_US');">English</a>|<a href="javascript:changeLanguage('zh_CN');">中文</a></h4>
			<h3 class="form-title">请输入登录信息<!--Login to your account--></h3>
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				<span>请输入用户名或密码<!--Enter any username and password.--></span>
			</div>
			<div class="alert alert-danger <%if(null == isAuthenticate || !"false".equals(isAuthenticate)) {%>display-hide<%} %>">
				<button class="close" data-close="alert"></button>
				<span>用户名或密码不正确，请重新输入<!--Enter any username and password.--></span>
			</div>
			<div class="alert alert-danger <%if(null == noRole || !"ture".equals(noRole)) {%>display-hide<%} %>">
				<button class="close" data-close="alert"></button>
				<span>没有系统权限，请使用其他用户重新登录<!--Enter any username and password.--></span>
			</div>
			<div class="form-group">
				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
				<label class="control-label visible-ie8 visible-ie9">用户名<!--Username--></label>
				<div class="input-icon">
					<i class="fa fa-user"></i>
					<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名" name="userCode" value="admin"/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">密码<!--Password--></label>
				<div class="input-icon">
					<i class="fa fa-lock"></i>
					<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="密码" name="password" value="123456"/>
				</div>
			</div>
			<div class="form-actions">
				<label class="checkbox">
				<input type="checkbox" name="remember" value="1"/>记住密码<!-- Remember me-->
				</label>
				<button type="submit" class="btn blue pull-right">
				登录 <i class="m-icon-swapright m-icon-white"></i>
				</button>
			</div>
			<div class="forget-password">
				<h4>忘记密码 ?</h4>
				<p>
					不要担心, 请点击 <a href="javascript:;"  id="forget-password">这里</a>
					为您重置密码
				</p>
			</div>
			<div class="create-account">
				<p>
					没有账号 ?&nbsp; 
					<a href="javascript:;" id="register-btn" >为您创建</a>	
				</p>
				
			</div>
		</form>
		<!-- END LOGIN FORM -->        
		<!-- BEGIN FORGOT PASSWORD FORM -->
		<form class="forget-form" action="layout_ajax.html" method="post">
			<h3 ><!--Forget Password-->忘记密码 ?</h3>
			<p><!--Enter your e-mail address below to reset your password.-->输入您的邮箱地址,为您重置密码</p>
			<div class="form-group">
				<div class="input-icon">
					<i class="fa fa-envelope"></i>
					<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" name="email" />
				</div>
			</div>
			<div class="form-actions">
				<button type="button" id="back-btn" class="btn">
				<i class="m-icon-swapleft"></i> <!--Back-->返回
				</button>
				<button type="submit" class="btn blue pull-right">
				<!--Submit-->确认 <i class="m-icon-swapright m-icon-white"></i>
				</button>            
			</div>
		</form>
		<!-- END FORGOT PASSWORD FORM -->
		<!-- BEGIN REGISTRATION FORM -->
		<form class="register-form" action="layout_ajax.html" method="post">
			<h3 >Sign Up</h3>
			<p>Enter your personal details below:</p>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">Full Name</label>
				<div class="input-icon">
					<i class="fa fa-font"></i>
					<input class="form-control placeholder-no-fix" type="text" placeholder="Full Name" name="fullname"/>
				</div>
			</div>
			<div class="form-group">
				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
				<label class="control-label visible-ie8 visible-ie9">Email</label>
				<div class="input-icon">
					<i class="fa fa-envelope"></i>
					<input class="form-control placeholder-no-fix" type="text" placeholder="Email" name="email"/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">Address</label>
				<div class="input-icon">
					<i class="fa fa-check"></i>
					<input class="form-control placeholder-no-fix" type="text" placeholder="Address" name="address"/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">City/Town</label>
				<div class="input-icon">
					<i class="fa fa-location-arrow"></i>
					<input class="form-control placeholder-no-fix" type="text" placeholder="City/Town" name="city"/>
				</div>
			</div>
			<p>Enter your account details below:</p>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">Username</label>
				<div class="input-icon">
					<i class="fa fa-user"></i>
					<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Username" name="username"/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">Password</label>
				<div class="input-icon">
					<i class="fa fa-lock"></i>
					<input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password" placeholder="Password" name="password"/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">Re-type Your Password</label>
				<div class="controls">
					<div class="input-icon">
						<i class="fa fa-check"></i>
						<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Re-type Your Password" name="rpassword"/>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label>
				<input type="checkbox" name="tnc"/> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
				</label>  
				<div id="register_tnc_error"></div>
			</div>
			<div class="form-actions">
				<button id="register-back-btn" type="button" class="btn">
				<i class="m-icon-swapleft"></i>  Back
				</button>
				<button type="submit" id="register-submit-btn" class="btn blue pull-right">
				Sign Up <i class="m-icon-swapright m-icon-white"></i>
				</button>            
			</div>
		</form>
		<!-- END REGISTRATION FORM -->
	</div>
	<!-- END LOGIN -->
	<!-- BEGIN COPYRIGHT -->
	<div class="copyright">
		版权所有 ©2013-2014 吉林省苍宏信息科技有限公司
		<!--2014 &copy; Metronic - Admin Dashboard Template.-->
	</div>
	<!-- END COPYRIGHT -->
	<!-- END PAGE LEVEL SCRIPTS --> 
	<script>
		jQuery(document).ready(function() {   
		  App.init();
		  Login.init();
		});

		function changeLanguage(value){
			if (value=='en_US'){
				tipSuccess("系统语言已切换为英语");
				App.loadContentData("<%=path%>/loginChangeLanguage.action?locale="+value);
			}else if(value=='zh_CN'){
				tipSuccess("系统语言已切换为中文");
				App.loadContentData("<%=path%>/loginChangeLanguage.action?locale="+value);
			}
		}
		
		function showOrgTree()
		{
			  var $modal = $('#ajax-modal');
			  // create the backdrop and wait for next modal to be triggered
			  $('body').modalmanager('loading');
			  setTimeout(function(){
			      $modal.load('jsp/common/organizationTree.jsp', '', function(){
			      $modal.modal();
			    });
			  }, 100);
		}
	</script>
	<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>
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
	<script src="<%=path%>/js/jquery.form.js" type="text/javascript"></script>
</head>
<body onload="">
<!-- BEGIN PAGE HEADER-->
 <div class="row">
	<div class="col-md-12">
		<!-- BEGIN PAGE TITLE & BREADCRUMB-->
		<h3 class="page-title">
			<span class="icon-svg2 icon-pad"></span> 
			用户管理 - 新增&nbsp;&nbsp;<small>User Management - New</small>
		</h3>
		<!-- END PAGE TITLE & BREADCRUMB-->
	</div>
</div> 
<!-- BEGIN PAGE CONTENT-->    
<div class="row">
	<div class="col-md-12">
		<!-- BEGIN VALIDATION STATES-->
		<h3 class="form-section"></h3>
			<div class="portlet-body form">
				<!-- BEGIN FORM-->
				<form action="#" id="fm" class="form-horizontal form-horizontal" name="addUser" method="post" enctype="multipart/form-data">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
								表单填写错误,请重新填写.
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
								用户信息填写正确!
						</div>
						<div class="col-md-4">
						  	 <div class="form-group">
								<label class="control-label col-md-2"></label>
								<div class="col-md-10">
								<span id="fileError" style="display:none"><font color="red">请选择图片格式</font></span>
									<div class="fileupload fileupload-new" data-provides="fileupload">
										<div class="fileupload-new thumbnail" style="width: 200px; height: 200px;">
											<img src="<%=path %>/images/photo.gif" alt="" style="width: 200px; height: 200px;"/>
										</div>
										<div class="fileupload-preview fileupload-exists thumbnail" style="max-width: 200px; max-height: 200px; line-height: 20px;"></div>
										<div>
											<span class="btn default btn-file">
											<span class="fileupload-new"><i class="fa fa-paper-clip"></i> 选择图片</span>
											<span class="fileupload-exists"><i class="fa fa-undo"></i> 更改</span>
											<input type="file" class="default" id="file" name="file"/>
											</span>
											<a href="#" class="btn red fileupload-exists" data-dismiss="fileupload"><i class="fa fa-trash-o"></i> 移除 </a>
										</div>
									</div>
								</div>
							</div> 
							<div class="form-group">
								<label class="control-label col-md-2"></label>
								<div class="col-md-10">
									<div class="input-icon right">                                       
										<button type="button" class="btn red btn-block " onclick="mySubmit()">
										保存
										</button>
									</div>
								</div>
							 </div>
							 <div class="form-group">
								<label class="control-label col-md-2"></label>
								<div class="col-md-10">
									<div class="input-icon right">                                       
										<a class="btn dark btn-block ajaxify" href="UserMain.action" id="btn_back" >返      回</a>
									</div>
								</div>
							 </div>
							 <br>
						</div>
						<div class="col-md-8">
								<div class="form-group">
									<label class="control-label col-md-3">用户代码<span class="required">*</span></label>
									<div class="input-group col-md-9 col-sm-12 col-xs-12"  ><!-- id="pulsate-regular"添加脉动 -->
										<div class="input-icon">                                       
											<i class="fa fa-dedent"></i>
											<input type="text" class="form-control" id="userCode" name="userCode" placeholder="请输入正确用户代码" maxlength="20"/>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">姓名<span class="required">*</span></label>
									<div class="input-group col-md-9 col-sm-12 col-xs-12">
										<div class="input-icon">                                       
											<i class="fa fa-dedent"></i>
											<input type="text" class="form-control" id="userName" name="userName" placeholder="请输入正确姓名" maxlength="20"/>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">密码<span class="required">*</span></label>
									<div class="input-group col-md-9 col-sm-12 col-xs-12">
										<div class="input-icon">                                       
											<i class="fa fa-dedent"></i>
											<input class="form-control" name="password" id="password" type="password" placeholder="请输入正确密码" maxlength="32"/> 
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">性别</label>
									<div class="col-md-9 col-sm-12 col-xs-12" id="genderDiv">
										<script type="text/javascript">getSelect('gender','gender','1003','',true,'form-control','','genderDiv');
										</script>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">邮箱<span class="required">*</span></label>
									<div class="input-group col-md-9 col-sm-12 col-xs-12">
										<div class="input-icon">                                       
											<i class="fa fa-envelope"></i>
											<input type="text" class="form-control" id="email" name="email" placeholder="请输入正确邮箱"/>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">联系电话</label>
									<div class="input-group col-md-9 col-sm-12 col-xs-12">
										<div class="input-icon">                                       
											<i class="fa fa-phone"></i>
											<input type="text" class="form-control" id="tel" name="tel" placeholder="请输入正确联系电话"/>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">手机电话</label>
									<div class="input-group col-md-9 col-sm-12 col-xs-12">
										<div class="input-icon">                                       
											<i class="fa fa-mobile"></i>
											<input type="text" class="form-control" id="phone" name="phone" placeholder="请输入正确手机电话"/>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">状态<span class="required">*</span></label>
									<div class="col-md-9 col-sm-12 col-xs-12" id="statusDiv">
										<script type="text/javascript">getSelect('status','status','1001','',true,'form-control','','statusDiv');
										</script>
									</div>
								</div>
							</div>	
					</div>
				</form>
				<!-- END FORM-->
			</div>
		<!-- END VALIDATION STATES-->
	</div>
</div>
</body>
</html>
<script type="text/javascript">
$.validator.addMethod("phone", function(value, element, params) {
	 if (value.length > 1) {
   	 var regu =/^[1][0-9][0-9]{9}$/;
   	 var re = new RegExp(regu);
   	 if (re.test(value)) {
   	 	return true;
   	 }else{
   		 return false;
   	 } 
	 }
	 else {
			return true;
		}
	}, " ");
//	 座机验证
$.validator.addMethod("tel", function(value, element, params) {
	 if (value.length > 1) {
   	 var regu =/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
   	 var re = new RegExp(regu);
   	 if (re.test(value)) {
   	 	return true;
   	 }else{
   		 return false;
   	 } 
	 }
	 else {
			return true;
		}
	}, "正确格式为：0555-XXXXXXX，0566-XXXXXXXX，021-XXXXXXX，010-XXXXXXXX，85858585，XXXXXXXX");
$.validator.addMethod("password", function(value, element, params) {
	 if (value!= null && value != '') {
  	 var regu =/^[a-zA-Z]\w{5,}$/; 
  	 var re = new RegExp(regu);
  	 if (re.test(value)) {
  	 	return true;
  	 }else{
  		 return false;
  	 } 
	 }
	 else {
			return true;
		}
	}, " ");
</script>
<script type="text/javascript">
var AddPoSTm = function () {
	var postFormValidation = function() {
    	var fm = $('#fm');
        var error = $('.alert-danger', fm);
        var success = $('.alert-success', fm);
        fm.validate({
			errorElement: 'span', //default input error message container
			errorClass: 'help-block', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			ignore: "",
			rules: {
				userCode: {
                    required: true
                },
                password: {
                    required: true,
                    password: true
                },
                userName: {
                    required: true
                },
                phone:{
                	phone: true
                },  
                status: {
                    required: true
                }
			},
			messages: { 
                userCode: {
                    required: "用户代码必须填写"
                },
                password: {
                    required: "密码必须填写",
                    password: "请填写以字母开头,字母下划线数字结尾,长度至少6位以上"
                },
                userName: {
                    required: "用户名称必须填写"
                },
                phone:{
                	  phone:"请填写正确的的手机电话号码" 
                },  
                status: {
                	required: "请选择状态"
                }
			},
			invalidHandler: function (event, validator) {
				success.hide();
				error.show();
				App.scrollTo(error, -200);
			},
			highlight: function (element) {
				$(element).closest('.form-group').addClass('has-error');
			},
			unhighlight: function (element) {
				$(element).closest('.form-group').removeClass('has-error');
			},
			success: function (label) {
				label.closest('.form-group').removeClass('has-error');
			},
	        submitHandler: function (form) {
	            success.show();
	            error.hide();
	             var options = {
	           		url:"usermanager/createUserInfo",  
	           		type:"post",  
	           		contentType: "application/x-www-form-urlencoded; charset=utf-8",  
	           		dataType:"json",  
					success: function(msg){  
						if(msg ==-1){
							alertWarning("用户代码重复");
							$("#userCode").closest('.form-group').addClass('has-error');
							return;
						}else{
							var jc={
									 message : "保存成功,是否进入列表查看?",
									 turl : "usermanager/usermanagerPre",
									 furl : "usermanager/createUserInfoPre",
									 options:{buttons: { ' 回到列表 ': true, ' 继续添加  ': false}}
								};
								altConfirm(jc);//调用-弹出框提示
						}
					},
					error:function(){
						alertWarning("用户保存失败!");
						return;
					}
				}; 
				$(form).ajaxSubmit(options); 
				return false;
			}
		});
	}
	var handleWysihtml5 = function() {
        if (!jQuery().wysihtml5) {
            return;
        }
        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["<%=path%>/assets/plugins/bootstrap-wysihtml5/wysiwyg-color.css" ]
							});
		}
	}
	return {
		init : function() {
			handleWysihtml5();
			postFormValidation();
		}
	};
}();
	
jQuery(document).ready(function() {
	AddPoSTm.init();
});

function mySubmit(){
	 var fileValue=$("#file").val();
	 if(fileValue != null && fileValue != ''){
	 	var fileType=fileValue.substring(fileValue.lastIndexOf(".")+1);
	 	if(fileType !="png"&& fileType !="gif" && fileType !="jpeg" && fileType !="jpg"){
	 		$("#fileError").show(); 
	 	}else{
	 		$("#fileError").hide(); 
	 	}
	 } 
	 $("#fm").submit();
}
</script>

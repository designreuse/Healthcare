//登入处理开始-----------------------------------------------------------------------------------------------
//手持用户登入处理
function submitHandLogin(btnObj,inputCodeId,inputPasswordId){
	var inputCodeIdVal=$('#'+inputCodeId).val();
	var inputPasswordIdVal=$('#'+inputPasswordId).val();
	var buttonObj=$(btnObj);
	if(inputCodeIdVal!=null && inputCodeIdVal!=''){
		inputCodeIdVal=strTrim(inputCodeIdVal);
		if (inputPasswordIdVal!=null && inputPasswordIdVal!=''){
			buttonObj.attr("disabled", true);
			var datas={
					url : 'handlogin/handLogin.action',
					data : {userCode : inputCodeIdVal,password : inputPasswordIdVal},
					success : function(rmes){
						var flag=strToBoolean(rmes.success);
						if (flag==true){
							handLoginIndexPage();
						}else{
							buttonObj.removeAttr("disabled");
							alert('登入失败：用户名或密码错误!');
						}
					}
			};
			jqueryAjax(datas);
		}else{
			alert('用户密码不能为空!');
		}
	}else{
		alert('用户账号不能为空!');
	}
}
//登入处理结束-----------------------------------------------------------------------------------------------

//跳转首页开始-----------------------------------------------------------------------------------------------
//跳转到首页
function handLoginIndexPage(){
	var url='handlogin/skipHandIndexPage.action';
	var jsUrl=jsLocation(url);
	if (jsUrl!=null){
		url=jsUrl;
	}
	window.top.location=url;
}
//跳转首页-----------------------------------------------------------------------------------------------

//跳转登入页面开始-----------------------------------------------------------------------------------------------
function redirectHandLogin(){
	var url='handlogin/handLoginOut.action';
	var jsUrl=jsLocation(url);
	if (jsUrl!=null){
		url=jsUrl;
	}
	location.replace(url);
	event.returnValue=false;
}
//跳转登入页面结束-----------------------------------------------------------------------------------------------

//统一跳转开始-----------------------------------------------------------------------------------------------
//跳转页面
function refreshIndexPageHeartBeat(refDivTitle,refDivHref){
	var random=Math.random();
	$.ajax({
		url : "handheartbeat/getHandHeartBeat.action?mr="+random,
		type : "post",
		dataType : "json",
		timeout : 2000,
		success : function(json) {
			if(strToBoolean(json.success)==true){
				refreshIndexPage(refDivTitle,refDivHref);
			}else{
				errorDialog();
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrow) {
			if (textStatus=='timeout'){
				timeOutError();
			}
		}
	});
}
//统一跳转结束-----------------------------------------------------------------------------------------------

//首页初始化功能开始-----------------------------------------------------------------------------------------------
//首页初始化功能
function loadHandOrderPage(title,url){
	$("#titleSpan").text(title);
	var pageContent = $("#iframeDiv");
    $.ajax({
        type: "POST",
        cache: false,
        url: url,
        dataType: "html",
        success: function (res) {
        	pageContent.html(res);
        },
        error: function (xhr, ajaxOptions, thrownError) {
        	alert();
        },
        async: false
    });
	//refreshIndexPage('单号扫描','handorder/skipHandOrderMain.action');
}
//首页初始化功能结束-----------------------------------------------------------------------------------------------


//扫描单号后 跳转处理
function skipHandOrderAction(data){
	//跳转上架扫描页面
	if (data.skipKey=='go_storage'){
		if (strToBoolean(data.success)==true){
			playWav(data.skipKey,true);
			refreshIndexPage('上架扫描',data.path);
		}else{
			playWav(data.skipKey,false);
			loadHandOrderPage();
		}
	}else{
		redirectHandLogin();
	}
}
var divObj=null;
function initMainPanelDivObj(divId){
	divObj=$('#'+divId);
}
//主工作区跳转控制
function refreshIndexPage(refDivTitle,refDivHref) {
	var random=Math.random();
	var link='';
	if (refDivHref.indexOf('?')>0)
		link='&';
	else 
		link='?';
	divObj.panel({
		title : refDivTitle,
		cache : false,
		href : refDivHref+link+'mr='+random
	});  
}
//解决IE javascript location href 不能获得 base href 问题
function jsLocation(lu){
	var href=$("base").attr("href");
	if (href!=null && href.length>0){
		return href+lu;
	}else{
		return null;
	}
}
//Ajax通用方法
function jqueryAjax(datas){
	$.ajax({
		url : datas.url,
		type : 'post',
		dataType : 'json',
		data : datas.data,
		success : datas.success,
		error : function(XMLHttpRequest, textStatus, errorThrow) {
			alert(XMLHttpRequest+"  "+textStatus+"  "+errorThrow);
		}
	});
}
//正则表达式去空格
function strTrim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
//将字符串字母转换为小写
function strToLowerCase(str){
	return str.toLowerCase();
}
//字符串true/false转为boolean类型
function strToBoolean(str){
	var strb=strToLowerCase(strTrim(str));
	if (strb=='true'){
		return true;
	}else if(strb=='false'){
		return false;
	}else{
		return null;
	}
}

//输入框获得焦点
function chooseFocusInput(){
	$("input[type='text']").each(function(i){ 
		var iptObj=$(this);
		var iptVal=iptObj.val();
		if (iptVal==null || iptVal==''){
			iptObj.focus();
			return false;
		}
	});
}

//输入框获得焦点
function chooseFocusInput(){
	$("input[v-focus='true']").each(function(index){ 
		if ($(this).val()==null || $(this).val()==''){
			$(this).focus();
			return false;
		}
	});
}

var aryInputNotNull = {};
var aryInputNotNullSize = 0;
function focusKeypressSubmit(submitFunction,requestUrl){
	$("input[v-focus='true']").each(function(index){ 
		$(this).bind('keypress',function(event){
			if (event.keyCode=='13'){
				if ($(this).val()!=null && $(this).val()!=''){
					var aryInputNotNullVal=aryInputNotNull[$(this).attr('id')];
        			if (aryInputNotNullVal==null || aryInputNotNullVal==''){
        				aryInputNotNull[$(this).attr('id')]=$(this).val();
        				aryInputNotNullSize++;
        			}
        			chooseFocusInput();
        			if ($("input[v-focus='true']").length==aryInputNotNullSize){
        				var datas={
        					url : requestUrl,
        					data : aryInputNotNull,
        					success : function(rmes){
        						aryInputNotNull={};
        						aryInputNotNullSize=0;
        						clearInput();
        						submitFunction(rmes);
        						chooseFocusInput();
        					}
        				};
        				jqueryAjax(datas);
        			}
				}else{
					$(this).focus();
				}
			}
		});
	});
	chooseFocusInput();
}

var focusKeypressFormSize=0;
function focusKeypressForm(callBackFunction,formId,actionPath){
	$("input[v-focus='true']").each(function(index){ 
		$(this).bind('keypress',function(event){
			if (event.keyCode=='13'){
				if ($(this).val()!=null && $(this).val()!=''){
					focusKeypressFormSize++;
					chooseFocusInput();
					if ($("input[v-focus='true']").length==focusKeypressFormSize){
						var options = {
							type:"post",
							dataType : 'json',
							url:actionPath,
							success: function(data) {
								focusKeypressFormSize=0;
								clearInput();
								callBackFunction(data);
							} 
						};
						$("#"+formId).ajaxForm(options);
        			}
				}else{
					$(this).focus();
				}
			}
		});
	});
	chooseFocusInput();
}

var callBackValSize=0;
function focusKeypressCallBack(callBackFunction){
	$("input[v-focus='true']").each(function(index){ 
		$(this).bind('keypress',function(event){
			if (event.keyCode=='13'){
				if ($(this).val()!=null && $(this).val()!=''){
					callBackValSize++;
					chooseFocusInput();
					if ($("input[v-focus='true']").length==callBackValSize){
        				callBackFunction();
        				callBackValSize=0;
        			}
				}else{
					$(this).focus();
				}
			}
		});
	});
	chooseFocusInput();
}

//清空页面中所有的输入框
function clearInput(){
	$("input[v-focus='true']").each(function(i){ 
		$(this).val('');
	});
}
//判断输入是否是整数或者小数
function clearNoNum(obj){
	obj.value = obj.value.replace(/[^\d.]/g,"");
	obj.value = obj.value.replace(/^\./g,"");
	obj.value = obj.value.replace(/\.{2,}/g,".");
	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
}
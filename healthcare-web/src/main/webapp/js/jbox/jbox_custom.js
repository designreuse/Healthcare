/**
 * alert-默认
 * @param content
 */
function alertNone(content){
	$.jBox.prompt(content, '信息提示', "none");
}
/**
 * alert-提醒
 * @param content
 */
function alertInfo(content){
	$.jBox.prompt(content, '信息提示', "info");
}
/**
 * alert-提示
 * @param content
 */
function alertQuestion(content){
	$.jBox.prompt(content, '信息提示', "question");
}
/**
 * alert-成功
 * @param content
 */
function alertSuccess(content){
	$.jBox.prompt(content, '信息提示', "success");
}
/**
 * alert-警告
 * @param content
 */
function alertWarning(content){
	$.jBox.prompt(content, '信息提示', "warning");
}
/**
 * alert-错误
 * @param content
 */
function alertError(content){
	$.jBox.prompt(content, '信息提示', "error");
}
/**
 * tip-提示
 * @param content
 */
function tipInfo(content){
	$.jBox.tip(content, 'info');
}
/**
 * tip-成功
 * @param content
 */
function tipSuccess(content){
	$.jBox.tip(content, 'success');
}
/**
 * tip-提醒
 * @param content
 */
function tipWarning(content){
	$.jBox.tip(content, 'warning');
}
/**
 * tip-错误
 * @param content
 */
function tipError(content){
	$.jBox.tip(content, 'error');
}
/**
 * tip-正在加载
 * @param content
 */
function tipLoading(content){
	$.jBox.tip(content, 'loading');
}
/**
 * 关闭tip
 */
function tipClose(){
	$.jBox.closeTip();
}
/**
 * tip-无图标
 * @param content
 */
function tipNone(content){
	$.jBox.tip(content, 'none');
}
/**
 * message : 提示信息内容,
 * turl : 返回true时，跳转路径地址,
 * furl : 返回false时，跳转路径地址,
 * options : { buttons: { "turl对应跳转的按钮名称" : true, "furl对应跳转的按钮名称" : false} }
 * @param confirm_msg
 */
function altConfirm(confirm_msg){
	var submit = function (v, h, f) {
	    if (v == true) {
	    	App.loadContentData(confirm_msg.turl);
	    }
	    if (v == false) {
	    	App.loadContentData(confirm_msg.furl);
	    }
	    return true;
	};
	if (confirm_msg.options!=null){
		$.jBox.confirm(confirm_msg.message, "信息提示", submit, confirm_msg.options); 
	}else{
		$.jBox.confirm(confirm_msg.message, "信息提示", submit, { buttons: { ' 回到列表 ': true, ' 继续操作  ': false} }); 
	}
}
/**
 * message：提示信息内容
 * callback：回调方法
 * @param confirm_msg
 */
function delConfirm(confirm_msg){
	var submit = function (v, h, f) {
	    if (v == true) {
	    	eval(confirm_msg.callback);
	    }
	    if (v == false && confirm_msg.callbackNo!=null) {
	    	eval(confirm_msg.callbackNo);
	    }
	    return true;
	};
	$.jBox.confirm(confirm_msg.message, "信息提示", submit, { buttons: { ' 是 ': true, ' 否  ': false} }); 
}
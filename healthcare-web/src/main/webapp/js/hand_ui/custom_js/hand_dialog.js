var $dialogObj=null;
var selectButtonObj=null;
var isShow=false;
function initMegDialogObj(dialogId,buttonId){
	initMsgDialog($('#'+dialogId));
	initSelectButton($('#'+buttonId));
}
function initMsgDialog(jqueryObj){
	if (jqueryObj!=null){
		$dialogObj=jqueryObj.dialog({  
			width: 320,
	        height: 196,
	        collapsible:false,  
	        minimizable:false,   
	        maximizable:false,  
	        draggable:false,
			closable: false,
		    shadow: false,
		    cache: false,
		    modal: true,
		    closed:true
		});
	}
}
function initSelectButton(jqueryObj){
	if (jqueryObj!=null){
		selectButtonObj=jqueryObj;
	}
}
function addSelectButtonProperty(title,url){
	selectButtonObj.attr("disabled", false);
	selectButtonObj.click(function(){
		skipValidateMsgDialog(title,url);
	});
}
function skipValidateMsgDialog(title,url){
	if ($dialogObj!=null){
		var random=Math.random();
		$.ajax({
			url : "handheartbeat/getHandHeartBeat.action?mr="+random,
			type : "post",
			dataType : "json",
			timeout : 1000,
			success : function(json) {
				if(strToBoolean(json.success)==true){
					skipMsgDialog(title,url,null);
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
}
function skipMsgDialog(title,url,btns){
	var random=Math.random();
	var link='';
	if (url.indexOf('?')>0)
		link='&';
	else 
		link='?';
	if (btns!=null && btns.length>0){
		$dialogObj.dialog({
			title : title,
			loadingMessage: '请稍后...',
			href : url+link+'mr='+random,
			buttons: btns
		});
		msgDialogOpen();
	}else{
		$dialogObj.dialog({
			title : title,
			loadingMessage: '请稍后...',
			href : url+link+'mr='+random,
			buttons:  [{  
	        	text: '关闭',  
	        	handler: function() {  
	        		msgDialogClose();
	        	}
	        }]
		});
		msgDialogOpen();
	}
}

function timeOutError(){
	if ($dialogObj!=null){
		if(isShow==false){
			$dialogObj.dialog({
				title : "错误提示",
				content: '服务器已断开或链接超时，为保证信息安全请您重新登入...',
				buttons: [{  
		        	text: '重新登入',  
		        	handler: function() {  
		        		redirectHandLogin();
		        	}
		        }]
			});
			msgDialogOpen();
		}
	}
}

function errorDialog(){
	if ($dialogObj!=null){
		if(isShow==false){
			var btns=[{  
	        	text: '重新登入',  
	        	handler: function() {  
	        		redirectHandLogin();
	        	}
	        }];
			skipMsgDialog('错误提示','handheartbeat/skipTimeOutErrorPage.action',btns);
		}
	}
}
function msgDialogOpen(){
	if ($dialogObj!=null){
		isShow=true;
		$dialogObj.dialog('open');
	}
}
function msgDialogClose(){
	if ($dialogObj!=null){
		isShow=false;
		$dialogObj.dialog('close');
	}
}
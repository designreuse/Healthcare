//var myPage; //定义公共的showPages对象
function makeCall(url,showFunc,params){
	new Ajax.Request(url, 
		{
			method:'post',
			parameters:params,
			onFailure: function(){ alert('无法链接服务器！') },  
	  		onSuccess: function(transport){
				var json = transport.responseText.evalJSON();
				showFunc(json);
			}	 			
		});
}
function makeSelect(url,showFunc,obj,params){
	new Ajax.Request(url, 
		{
			method:'post',
			parameters:params,
			onFailure: function(){ alert('无法链接服务器！') },  
	  		onSuccess: function(transport){
				var json = transport.responseText.evalJSON();
				showFunc(obj,json);
	 		} 
	 	});
}
function makeFormCall(url,showFunc,formName){
	new Ajax.Request(url, 
		{
			method:'post',
			parameters:$(formName).serialize(true),
			onFailure: function(){ alert('无法链接服务器！') },  
	  		onSuccess: function(transport){
				var json = transport.responseText.evalJSON();
				showFunc(json);
//				if(json.Exception==undefined){
//					
//				}else{
//					doError(json);
//				}
			}
	 	});
}
function jsonValidator(json)
{
	if(json.Exception!=undefined){
		doError(json);
	}
}
//处理错误信息
function doError(json){
	var exception = json.Exception;
	/*
	var errorCode = json.Exception.errCode;
	if(errorCode!=undefined){
		exception=errorCode;
	}
	var message = json.Exception.message;
	if(message!=undefined){
		if(exception==null){
			exception=message;
		}else{
			exception+="："+message;
		}
	}
	*/
	parent.MyAlert(exception);
}

function __extQuery__(page,option){
//	$('.btn').addClass("disabled");
//	var pageContent = $('#data-body');
//	App.blockUI(pageContent, false);
	addMask();
	var url=option.url;
	makeNomalFormCall(url+(url.lastIndexOf("?") == -1?"?":"&")+"curPage="+page,callBack,option);
	$("#curPage").attr("value",page);
}

/**
 *  不带分页的查询列表
 * @param option
 */
function __extQueryWithoutPage__(option)
{
	addMask();
	var url=option.url;
	makeNomalFormCallChildWithoutPage(url,callBackWithoutPage,option);
}

/**
 *  点击按钮后添加遮盖
 */
function addMask()
{
	$('.btn').addClass("disabled");
	var pageContent = $('#data-body');
	App.blockUI(pageContent, false);
}

/**
 * 加载完毕后去除遮盖
 */
function removeMask()
{
	$('.btn').removeClass("disabled");
	var pageContent = $('#data-body');
	App.unblockUI(pageContent, false);
}
function makeNomalCall(url,showFunc,params){
	new Ajax.Request(url, 
		{
			method:'post',
			parameters:params,
			onFailure: function(){ alert('无法链接服务器！'); },  
	  		onSuccess: function(transport){
					showFunc(transport.responseText);
	 			} 
	 	});
}

function makeNomalFormCall(url,showFunc,option){
	makeNomalFormCallChild(url,showFunc,option);
}
function makeNomalFormCallChild(url,showFunc,option){
	$.ajax({
		type : "POST",
		url : url,
		cache: false,
		data : $($("#"+option.formId)).serialize(),
		dataType: 'json',
	    error: function(XMLHttpRequest, textStatus, errorThrown){
	    		removeMask();
				alert('Error:'+XMLHttpRequest.responseText);
			},
		success : function (transport, textStatus){
				removeMask();
				if(transport.Exception==undefined||transport.Exception.type=="2"){
					showFunc(transport, option);
				}else{
					doError(transport);
				}
		}
	});
}

/**
 *  生成不带分页的表格
 * @param url
 * @param showFunc
 * @param option
 */
function makeNomalFormCallChildWithoutPage(url,showFunc,option)
{
	$.ajax({
		type : "POST",
		url : url,
		cache: false,
		data : $($("#"+option.formId)).serialize(),
		dataType: 'json',
	    error: function(XMLHttpRequest, textStatus, errorThrown){
	    		removeMask();
				alert('Error:'+XMLHttpRequest.responseText);
			},
		success : function (transport, textStatus){
				removeMask();
				if(transport.Exception==undefined||transport.Exception.type=="2"){
					showFunc(transport, option);
				}else{
					doError(transport);
				}
		}
	});
}

function contentUpdate(id, ele){
	var childs=$(id).childNodes;
	for(var i=0;i<childs.length;i++){
		childs[i].parentNode.removeChild(childs[i]);
	}
	$(id).appendChild(ele);
}


//========================================================================================================

//用于输出分页页码
/*
type: 显示类型(short|medium|full)
pageInfoObj : java的PageingObject对象
jsFunc : 点击链接时调用的function名字 例：jsFunc(curPage)
*/
function PageInfo(type, pageInfoObj,jsFunc){
	this.type=type;
	this.pageInfoObj=pageInfoObj;
	this.jsFunc = jsFunc;
	this.print=function(){
		var txt ='';
		if( this.type=='short' ){
			if ( (this.pageInfoObj.CurrentPage-1) <= 0 ){
				txt+="&lt;&lt;";
			}else{
				txt+="<a href=\"javascript:"+this.jsFunc+"("+(this.pageInfoObj.CurrentPage-1)+");\">&lt;&lt;</a>";
			}
						
			txt+="&nbsp;&nbsp;"+this.pageInfoObj.CurrentPage+'/'+this.pageInfoObj.TotalPage+"&nbsp;&nbsp;";
			
			if ( this.pageInfoObj.CurrentPage >= this.pageInfoObj.TotalPage ){
				txt+="&gt;&gt;";
			}else{
				txt+="<a href=\"javascript:"+jsFunc+"("+(this.pageInfoObj.CurrentPage+1)+");\">&gt;&gt;</a>";
			}
			return txt;
		}else if (this.type=='medium') {
			if ( (this.pageInfoObj.CurrentPage-1) <= 0 ){
				txt += "首页&nbsp;&nbsp;";
				txt += "上一页&nbsp;&nbsp;";
			}else{
				txt += "<a href=\"javascript:"+jsFunc+"(1);\">首页</a>&nbsp;&nbsp;";
				txt += "<a href=\"javascript:"+this.jsFunc+"("+(this.pageInfoObj.CurrentPage-1)+");\">上一页</a>&nbsp;&nbsp;";
			}
			
			if ( this.pageInfoObj.CurrentPage >= this.pageInfoObj.TotalPage ){
				txt += "下一页&nbsp;&nbsp;";
				txt += "尾页&nbsp;&nbsp;";
			}else{
				txt += "<a href=\"javascript:"+jsFunc+"("+(this.pageInfoObj.CurrentPage+1)+");\">下一页</a>&nbsp;&nbsp;";
				txt += "<a href=\"javascript:"+jsFunc+"("+(this.pageInfoObj.TotalPage)+");\">尾页</a>&nbsp;&nbsp;";
			}
			
			txt += "第"+this.pageInfoObj.CurrentPage+"页/共"+this.pageInfoObj.TotalPage+"页&nbsp;&nbsp;";
			return txt;
		}else{
			return "not support page info type: "+this.type;
		}
	}
}



//根据节点信息打印节点路径
function printTreePath(node,funcName){
	var split = "--&gt;";
	var txt = "";
	var nd = '';
	do{
		if ( nd == '' ){
			nd = node;
		}else{
			nd = nd.Childs[0];
		}
		txt+=split;
		txt+="<a href=\"javascript:"+funcName+"('"+nd.Id+"');\">";
		txt+=nd.Name;
		txt+="</a>";
	}while(nd.Childs)
	
	if ( txt=='' )
		return txt;
	else
		return txt.substring(split.length,txt.length);
}

//间隔查询数据
function queryUpd(url, params, objId, funcName, interval){
	var myAjax = new Ajax.PeriodicalUpdater(	
	objId,                          //object Id
	url+"?sid="+Math.random(),							//Request Url
	{
		method:'post', 				//HTTP Requset Method:get or post
		parameters:params, 			//parameter
		onFailure: function(){ alert('无法链接服务器！') },  
  		onSuccess: function(){
				funcName();
 			},
		frequency:interval*60       //Interval
	});	
}
/*
 * ============================create by andy z on 2009-7-30=======================================
 */
//AJAX 下拉框联动共用方法
function addOption(objSelectNow,txt,val){
	var objOption = document.createElement("OPTION");
	objOption.text = txt;
	objOption.value = val;
	objSelectNow.options.add(objOption);
	return objOption;
}
//AJAX 构造下拉框
function formatCheckBox(obj,json) {
		var val = json.RETURN_LIST;
		obj.options.length = 1;
		for ( var i = 0; i < val.length; i++) {
			addOption(obj, val[i].codeDesc, val[i].codeId);
		}
	}	
	
function fmtPrice(value){
	var val = "";
	if(value!=null && value!=""){
		return value+"万";
	}
	return val;
}

function valiPrice(price){
	return /^[0-9]{1,8}(|.[0-9]{1,4})$/.test(price);
}	

function __getRecord__(record){ //将对象中的null转成""
   var _keys = Object.keys(record);
   for(var i=0;i<_keys.length;i++){
   		if(record[_keys[i]] == null)
   			record[_keys[i]] = "";
   }
   return record;
}

//生成下拉框
function makeSelectCall(url,showFunc,formName){
new Ajax.Request(url,
	{
		method:'post',
		parameters:$(formName).serialize(true),
		onFailure: function(){ alert('无法链接服务器！') },  
  		onSuccess: function(transport){
			var json = transport.responseText.evalJSON();
			showFunc(json);
			if(json.Exception==undefined){
				
			}else{
				doError(json);
			}
		}
 	});
}
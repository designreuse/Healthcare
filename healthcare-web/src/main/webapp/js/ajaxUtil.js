function sendAjaxRequest(url, formNames, showFunc)
{
	var fms=formNames.split(",");
	var fmValues="";
	for (var i=0;i<fms.length;i++)
	{
		fmValues+=$('#'+fms[i]).serialize()+"&";
	}
	fmValues=fmValues.substring(0,fmValues.length-1);
	 $.ajax({
         type: "POST",
         url: url,//提交的URL
         data: fmValues, // 要提交的表单,必须使用name属性
         async: false,                    
         success: function (data) {
             //$("#common").html(data);//输出提交的表表单
		 	 //alert(JSON.stringify(data));
             showFunc(data);
         },
         error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert("Error:"+XMLHttpRequest.responseText);
         }
     });
}

function sendAjaxData(url, data, showFunc)
{
	 $.ajax({
         type: "POST",
         url: url,//提交的URL
         data: data, // 要提交的数据
         async: false,                    
         success: function (data) {
             //$("#common").html(data);//输出提交的表表单
		 	 //alert(JSON.stringify(data));
             showFunc(data);
         },
         error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert("Error:"+XMLHttpRequest.responseText);
         }
     });
}

function sendAjaxRequestWithFile(url, callback)
{
	alert(1);
    // 提交表单  
    $(this).ajaxSubmit({
	    	url:url,//后台的处理，也就是form里的action  
	        type:"POST",  
	        dataType:"script", //数据格式，有XML，html，json，默认为文本  
	        success:function(msg){
	    	callback();
    	}
    });  
    // 为了防止普通浏览器进行表单提交和产生页面导航（防止页面刷新？）返回false  
    return false;  
}

/**
 * 序列化部分字段
 * @param ids
 * @return
 */
function serialize(ids)
{
	try
	{
		var params='';
		var splitIds = ids.split(",");
		for (var i=0;i<splitIds.length;i++)
		{
			var field = document.getElementById(splitIds[i]).name;
			var value = document.getElementById(splitIds[i]).value;
			if(i==0)
			{
				params+=field+'='+value;
			}
			else
			{
				params+="&"+field+'='+value;
			}
		}
		return params;
	}
	catch(e)
	{
		alert('Serialize Error');
	}
}

/**
 *    用于车系,车辆系统等公共组件
 * @param url
 * @param data
 * @param showFunc
 * @return
 */
function sendAjaxCommon(url, data, showFunc, defaultVal, container)
{
	 $.ajax({
         type: "POST",
         url: url,//提交的URL
         data: data, // 要提交的数据
         dataType:"json",
         async: false,
         success: function (data) {
             //$("#common").html(data);//输出提交的表表单
		 	 //alert(JSON.stringify(data));
             showFunc(data, defaultVal, container);
         },
         error: function (XMLHttpRequest, textStatus, errorThrown) {
        	 //JSON.stringify(XMLHttpRequest);
             alert("Error:" + XMLHttpRequest.responseText);
         }
     });
}

/**
 * 
 * @param url
 * @param data
 * @param showFunc
 * @param defaultVal
 * @param container
 * @param _script_
 */
function sendAjaxCommonFn(url, data, showFunc, defaultVal, container,_script_)
{
	 $.ajax({
         type: "POST",
         url: url,//提交的URL
         data: data, // 要提交的数据
         dataType:"json",
         async: false,
         success: function (data) {
             showFunc(data, defaultVal, container,_script_);
         },
         error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert("Error:" + XMLHttpRequest.responseText);
         }
     });
}
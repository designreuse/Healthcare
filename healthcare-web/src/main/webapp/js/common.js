/**
 * 将选种CheckBox的Value变成String
 * @param name
 * @return
 */
function checkBoxToString(name)
{
	try 
	{
		var param = '';
		var value = '';
		var index = 0;
		var names = document.getElementsByName(name);
		for(var i=0;i<names.length;i++)
		{
			if(names[i].checked)
			{
				if(index==0)
				{
					value+=names[i].value;
					index++;
				}
				else
				{
					value+=","+names[i].value;
				}
			}
		}
		param+=value;
		return param;
	}
	catch (e) 
	{
		alert('Serialize Error');
	}
}

/**
 * 复选框的多选
 */
function selectAll(checkObj,checkBoxName){
	var allChecks = document.getElementsByName(checkBoxName);
	if(checkObj.checked){
		for(var i = 0;i<allChecks.length;i++){
			allChecks[i].checked = true;
		}
	}else{
		for(var i = 0;i<allChecks.length;i++){
			allChecks[i].checked = false;
		}
	}
}
/**
 * 将选择框的某一项选中
 */
function selectOption(value,selectBoxName){
	var allSelects = $(selectBoxName);
	for(var i = 0;i<allSelects.length;i++){
		if(allSelects[i].value==value){
			allSelects[i].selected = true;
			break;
		}
	}
}
/**
 * 检查复选框
 */
function checkselectAllBox(checkObj,checkAllId,checkBoxName){
	var checkAllObj = document.getElementById(checkAllId);
	var allChecks = document.getElementsByName(checkBoxName);
	var allFlag = true;
	if(checkObj.checked){
		for(var i = 0;i<allChecks.length;i++){
			if(allChecks[i].checked){
				
			}else{
				checkAllObj.checked = false;
				allFlag = false;
				return;
			}
		}
		if(allFlag==true){
			checkAllObj.checked = true;
		}
	}else{
		checkAllObj.checked = false;
	}
}

/*-------------------------- 为页面上的所有table加上序号一列 ----------------------*/
	function __initTd__() {
		var tableObj = document.getElementsByTagName("table");
		var __td__;
		for(out=0;out<tableObj.length;out++) {
			if(tableObj[out].className == "table_list") {
				for(i=0;i<tableObj[out].rows.length;i++) {
					__td__ = tableObj[out].rows[i].insertCell(0);//document.createElement(i<1?'th':'td');
					if(i<1) {
						__td__.style.background = "#DAE0EE"; 
						__td__.style.color = "#08327E";
						__td__.style.padding = "0px 2px 0px 2px";
					}
					__td__.style.borderLeft = "none";
					__td__.innerHTML = i < 1 ? "序号" : i;
					//tableObj[out].rows[i].appendChild(__td__);
				}
			}
		}
	}
/*--------------------------end-----------------------------------------------------*/


/**
 * 生成职位下拉框 1/2
 * @return
 */
function getPositions(defaultVal, container)
{
	sendAjaxCommon('getAllPositions.action?id='+Math.random(),'',showPositions, defaultVal, container);
}
/**
 * 生成职位下拉框 2/2
 * @param json
 * @return
 */
function showPositions(json, defaultVal, container)
{
	var creatorData = json;
   	var str = "";
   	str += "<select id='position' name='position' class='form-control'>";
   	str += genDefaultOpt();
   	for(var i=0;i<creatorData.length;i++){
   		if(defaultVal == creatorData[i].positionId)
   		{
   			str += "<option  value='" + creatorData[i].positionId + "' selected>" + creatorData[i].positionName + "</option>";
   		}
   		else
   		{
   			str += "<option  value='" + creatorData[i].positionId + "' >" + creatorData[i].positionName + "</option>";
   		}
   	}
   	str += "</select>";
   	$('#'+container).html(str);
}
/**
 * 生成集团公司下拉框 1/2
 * @return
 */
function getGroupCompanys(defaultVal, container)
{
	sendAjaxCommon('getAllGroupCompany.action?id='+Math.random(),'',showGroupCompanys, defaultVal, container);
}
/**
 * 生成集团公司下拉框 2/2
 * @param json
 * @return
 */
function showGroupCompanys(json, defaultVal, container)
{
	var creatorData = json;
	var str = "";
	str += "<select id='groupCompanyId' name='groupCompanyId' class='form-control'>";
	str += genDefaultOpt();
	for(var i=0;i<creatorData.length;i++){
		if(defaultVal == creatorData[i].groupId)
		{
			str += "<option  value='" + creatorData[i].groupId + "' selected>" + creatorData[i].groupNameCh + "</option>";
		}
		else
		{
			str += "<option  value='" + creatorData[i].groupId + "' >" + creatorData[i].groupNameCh + "</option>";
		}
	}
	str += "</select>";
	$('#'+container).html(str);
}

/**
 * 生成radio
 */
function getRadio(value, metaDate, record){
	return "<div class='radio' style='margin-top:-6px;'><span><input name=\"indexId\"  value="+value+" type=\"radio\"></input></span></div>";
}

/**
 * 生成radio,将对象转换成字符串保存到radio的value中，需要使用字段时，先将字符串转换成对象(var str = JSON.parse(jsonStr);)，然后.属性
 * @param value
 * @param metaDate
 * @param record
 * @returns {String}
 */
function getJsonStrRadio(value, metaDate, record){
	var jsonStr = JSON.stringify(record.data); 
	return '<div class="radio" style="margin-top:-6px;"><span><input name="indexId" type="radio" value=' +jsonStr+ ' ></input></span></div>';
}

/**
 * 打开组织选择树弹出层
 */
function showOrgTree(businessType)
{
	  // create the backdrop and wait for next modal to be triggered
	  $('body').modalmanager('loading');
	  setTimeout(function(){
	      $orgmodal.load('jsp/common/organizationTree.jsp?businessType='+businessType, '', function(){
	      $orgmodal.modal();
	    });
	  }, 100);
}


/**
 * 页面显示条数生成器
 * @param id
 * @param name
 * @param _value_
 * @param _script_
 * @param _class_
 * @param container
 */
function getPageSizeSelect(id,name,_value_,_script_,_class_,container)
{
	var str = "";
	str += "<select id='" + id + "' name='" + name +"' class='"+ _class_ +"' " + _script_ + "'"+"' style='position:relative;left:0px;top:-6px;'>";
	if(_value_!=null && _value_!= ''){
		str += "<option value='10' "+(_value_==10?'selected':'')+">10</option>";
		str += "<option value='20' "+(_value_==20?'selected':'')+">20</option>";
		str += "<option value='50' "+(_value_==50?'selected':'')+">50</option>";
	}
	else{
		str += "<option value='10'>10</option>";
		str += "<option value='20'>20</option>";
		str += "<option value='50'>50</option>";
	}
	str += "</select>";
	$("#"+container).html(str);
}

/**
 * 回显时使用的页码
 * @returns
 */
function gainCurPage(){
	var curPage = $("#curPage").val();
	if(curPage==null||curPage==""){
		return 1;
	}else{
		return curPage;
	}
	}

/**
 * 生成计量单位下拉列表 1/2
 * @return
 */
function getUnits(defaultVal, container)
{
	sendAjaxCommon('getAllUnit.action?id='+Math.random(),'',showUnits, defaultVal, container);
}
/**
 * 生成计量单位下拉列表 2/2
 * @param json
 * @return
 */
function showUnits(json, defaultVal, container)
{
	var creatorData = json;
	var str = "";
	str += "<select id='unitId' name='unitId' class='form-control'>";
	str += genDefaultOpt();
	for(var i=0;i<creatorData.length;i++){
		if(defaultVal == creatorData[i].unitsId)
		{
			str += "<option  value='" + creatorData[i].unitsId + "' selected>" + creatorData[i].unitsName + "</option>";
		}
		else
		{
			str += "<option  value='" + creatorData[i].unitsId + "' >" + creatorData[i].unitsName + "</option>";
		}
	}
	str += "</select>";
	$('#'+container).html(str);
}
/**
 * 生成包装下拉列表 1/2
 * @return
 */
function getPacks(defaultVal, container)
{
	sendAjaxCommon('getAllPack.action?id='+Math.random(),'',showPacks, defaultVal, container);
}
/**
 * 生成包装下拉列表 2/2
 * @param json
 * @return
 */
function showPacks(json, defaultVal, container)
{
	var creatorData = json;
	var str = "";
	str += "<select id='standardPackId' name='standardPackId' class='form-control'>";
	str += genDefaultOpt();
	for(var i=0;i<creatorData.length;i++){
		if(defaultVal == creatorData[i].packId)
		{
			str += "<option  value='" + creatorData[i].packId + "' selected>" + creatorData[i].packName + "</option>";
		}
		else
		{
			str += "<option  value='" + creatorData[i].packId + "' >" + creatorData[i].packName + "</option>";
		}
	}
	str += "</select>";
	$('#'+container).html(str);
}

var intF=true;
var douF=true;
function checkStr(str){
	var value=/^[0-9]*(\.[0-9]{1,4})?$/;
		if(str != null && str != "" ){
			if(!value.test(str)){
				douF=false;
				tipWarning("请输入有效数字和小数!");
			}else{
				douF=true;
			}
		}else{
			douF=true;
		}
	}

function isDigit(str){
	var value=/^[0-9]{1,20}$/;
	if(str != null && str != ""){
		if(!value.test(str)){
			intF=false;
			tipWarning("请输入有效数字!");
		}else{
			intF=true;
		}
	}else{
		intF=true;
	}
}


/****生成供应商下拉框*****/
function getSupplierCodes(defaultVal, container)
{
	sendAjaxCommon('getAllSupplierCode.action?id='+Math.random(),'',showSuppliers, defaultVal, container);
}
/**
 * 生成供应商下拉列表 2/2
 * @param json
 * @return
 */
function showSuppliers(json, defaultVal, container)
{
	var creatorData = json;
	var str = "";
	str += "<select id='supplierId' name='supplierId' class='form-control'>";
	str += genDefaultOpt();
	for(var i=0;i<creatorData.length;i++){
		if(defaultVal == creatorData[i].supplierId)
		{
			str += "<option  value='" + creatorData[i].supplierId + "' selected>" + creatorData[i].supplierCode + "</option>";
		}
		else
		{
			str += "<option  value='" + creatorData[i].supplierId + "' >" + creatorData[i].supplierCode + "</option>";
		}
	}
	str += "</select>";
	$('#'+container).html(str);
}


/****生成客户下拉框*****/
function getCustomerCodes(defaultVal, container)
{
	sendAjaxCommon('getAllCustomerCode.action?id='+Math.random(),'',showCustomers, defaultVal, container);
}
/**
 * 生成客户下拉列表 2/2
 * @param json
 * @return
 */
function showCustomers(json, defaultVal, container)
{
	var creatorData = json;
	var str = "";
	str += "<select id='customerId' name='customerId' class='form-control'>";
	str += genDefaultOpt();
	for(var i=0;i<creatorData.length;i++){
		if(defaultVal == creatorData[i].customerId)
		{
			str += "<option  value='" + creatorData[i].customerId + "' selected>" + creatorData[i].customerCode + "</option>";
		}
		else
		{
			str += "<option  value='" + creatorData[i].customerId + "' >" + creatorData[i].customerCode + "</option>";
		}
	}
	str += "</select>";
	$('#'+container).html(str);
}

/**
 * 没有遮盖的查询方法
 * @param page
 * @param option
 */
function __noMarkextQuery__(page,option){
	var url=option.url;
	makeNomalFormCall(url+(url.lastIndexOf("?") == -1?"?":"&")+"curPage="+page,callBack,option);
	$("#curPage").attr("value",page);
}

/**
 * 显示供应商信息的弹出层
 */
function showSupplierModel(){
	 $('body').modalmanager('loading');
	  setTimeout(function(){
		  $supplierModal.load('jsp/common/showSupplierMsg.jsp', function(){
		  $supplierModal.modal();
	    });
	  }, 100);
}

/**
 * 显示客户信息的弹出层
 */
function showCustomerModel(){
	 $('body').modalmanager('loading');
	  setTimeout(function(){
		  $customerModal.load('jsp/common/showCustomerMsg.jsp', function(){
		  $customerModal.modal();
	    });
	  }, 100);
}

/**
 * 显示物料信息的弹出窗
 */
function showMaterialModel(){
	 $('body').modalmanager('loading');
	  setTimeout(function(){
		  $materialModal.load('jsp/common/showMaterialMsg.jsp?id='+Math.random(), function(){
		  $materialModal.modal();
	    });
	  }, 100);
}

function showCustomerDiv(functionName,suId){
	 $('body').modalmanager('loading');
	  setTimeout(function(){
		  $customerModal.load('toCustomerDivPre.action?functionName='+functionName+"&suId="+suId, function(){
		  $customerModal.modal();
	    });
	  }, 100);
}

function showSupplierDiv(functionName,cuId,category){
	 $('body').modalmanager('loading');
	  setTimeout(function(){
		  $supplierModal.load('toSupplierDivPre.action?functionName='+functionName+"&cuId="+cuId+"&category="+category, function(){
		  $supplierModal.modal();
	    });
	  }, 100);
}

function showConsolNoMsg(callBackFunction){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$consolNoMsg.load('consolno/skipConsolNoShowPageMain.action?callBackFunction='+callBackFunction, function(){
			$consolNoMsg.modal();
		});
	}, 100);
}
/**
 * 生成checkBox
 */
function getMyCheckBox(value, metaDate, record){
	return "<div class='checker' style='margin-top:-6px;'><span name='checkSpan'><input name=\"checkBoxIndex\"  value="+value+" type=\"checkbox\" class='liChild'></input></span></div>";
}

/**
 * 生成checkBox,将对象转换成字符串保存到checkBox的value中，需要使用字段时，先将字符串转换成对象(var str = JSON.parse(jsonStr);)，然后.属性
 * @param value
 * @param metaDate
 * @param record
 * @returns {String}
 */
function getJsonStrCheckBox(value, metaDate, record){
	var jsonStr = JSON.stringify(record.data); 
	return '<div class="checker" style="margin-top:-6px;"><span name="checkSpan" ><input name="checkBoxIndex" type="checkbox" value=' +jsonStr+ ' class="liChild"></input></span></div>';
}

/**
 *表头部分的checkBox全选功能
 */
function checkAllBox(){
	var x =document.getElementById('allCheck').checked;	
	if(x==true){							
		 $("input[name='checkBoxIndex']").each(function(){ 
			   $(this).attr("checked",true);		
		  });  
		 $("span[name='checkSpan']").each(function(){ 
			 $(this).parent().parent().parent().parent().find("td").addClass("myTdYel");
			 $(this).parent().parent().parent().parent().find("td").css({ 'background-color':'#F9F900' });
			 $(this).attr("class",'checked');		
		  });
	}else{							
		$("input[name='checkBoxIndex']").each(function(){
			   $(this).attr("checked",false);		
		  });  
		 $("span[name='checkSpan']").each(function(){
			 $(".myTdYel").css({ 'background-color':'' });
			 $(".myTdYel").removeClass("myTdYel");
			 $(this).attr("class",'');			
		  });
	}
	
}

/**
 * 时间转换方法
 * @param fmt
 * @returns
 */
Date.prototype.Format = function (fmt) { //author: meizz 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
/**
 *  格式化日期
 */
function convertDate(value){
	if(value != null && value != '' && value != 'null'){
		return new Date(value).Format("yyyy-MM-dd");
	}
	return '';
}
/**
 * 
 * @param value
 * @param test
 * @returns
 */
function isNull(value,defVal){
	if(value != null && value != "" && value != 'null'){
		return value;
	}
	return defVal;
}
/**
 * YYYY-MM-DD显示
 * @param value
 * @param metaDate
 * @param record
 * @returns {String}
 */
function returnDateMsg(value, metaDate, record){
	if(value==null||value==""){
		return value;
	}else{
		var deyValue = new Date(value).Format("yyyy-MM-dd");
		return deyValue;
	}
}

function returnDateAndTimeMsg(value, metaDate, record){
	if(value==null||value==""){
		return value;
	}else{
		var deyValue = new Date(value).Format("yyyy-MM-dd hh:mm:ss");
		return deyValue;
	}
}
/**
	*	验证只能输入数字和小数,其它不能输入
	*/
	function checkInt(){
		//数字验证 初始化
	$(".numberVaildate").inputmask({
        "mask": "9",	
        "repeat": 8,
        "greedy": false
    });
	//小数验证 初始化
	$(".decimal").inputmask('decimal', {
        rightAlignNumerics: false,
        repeat: 20,	//位数
        digits: 4	//小数位数
    });
	//日期组件  初始化
	$(".date-picker").datepicker({
	      rtl: false,
	      autoclose: true});
	//日期自定义组件初始
	$(".pDate").inputmask("y-m-d", {
        "placeholder": "yyyy-mm-dd"
    });
	}
	
	
	/**   
	 * 生成计量单位下拉列表 1/2  ,国内货代订单中使用
	 * @return
	 */
	var detailIndex=0;
	function getUnit(defaultVal, container,index)
	{
		detailIndex=index;
		sendAjaxCommon('getAllUnit.action?id='+Math.random(),'',showUnit, defaultVal, container);
	}
	/**
	 * 生成计量单位下拉列表 2/2
	 * @param json
	 * @return
	 */
	function showUnit(json, defaultVal, container)
	{
		var creatorData = json;
		var str = "";
		str += "<select id='unit' name='detail["+detailIndex+"].unit' class='form-control'>";
		str += genDefaultOpt();
		for(var i=0;i<creatorData.length;i++){
			if(defaultVal == creatorData[i].unitsId)
			{
				str += "<option  value='" + creatorData[i].unitsId + "' selected>" + creatorData[i].unitsName + "</option>";
			}
			else
			{
				str += "<option  value='" + creatorData[i].unitsId + "' >" + creatorData[i].unitsName + "</option>";
			}
		}
		str += "</select>";
		$('#'+container).html(str);
		detailIndex=0;
	}
	
	/**
	*  国内货代订单三个功能共用      --------根据unitId获取unit名称
	*/
	function getUnitById(unitDiv,unitsId){
		 $.ajax({
             type: "post",
             url: "getUnitNameByUintId.action",
             data: {
            	 unitsId: unitsId
           	 },
             dataType: "json",
             success: function(data){
            	 if(unitsId != null && unitsId != "" && data.unitsName != null){
            		 $("#"+unitDiv).html(data.unitsName);
            	 }
                  },
             error:function (data){
            	 tipError("查询失败!");
            	 return;
             }
         });
	}
	
	//测试日期为第几周
	function getWeek(date) {
		var time,week,checkDate = new Date(date);
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		time = checkDate.getTime();
		checkDate.setMonth(0);
		checkDate.setDate(1);
		week=Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
		return week;
	}
	//复制列  参数为整列的样式名
	function copyColumn(valueCss){
		$(valueCss).each(function(i){
			$(valueCss).eq(i).find("input").val($(valueCss).eq(0).find("input").val());
		});
	}
	//根据input name属性,以第一行为准复制列
	function copyAll(name)
	{
		var val=$('input[name="'+name+'"]').eq(0).val();//获取第一行的值
		var inputs = $('input[name="'+name+'"]');
		inputs.each(function(){
		    	$(this).val(val);
		  });
	}
	
	/*******************
	*	 方向键(上下左右)在table中选择上下行,并获取焦点
	*	 ****此方法只适应用table下的input之间的选择,用input的hideFoceus属性来确定该焦点是表格中的第几行,第几列,所以如该input中已使用hideFoceus属性将会被替换.
	*	 param:  table的Id
	********************
	*/
	function selectTableRow(tableId,type){
		var tabArray = new Array(); //这是个二维数组
		var maxr = 0 ;
		var maxc = 0; 
		var temp=0;
		var rowSpan;
		var tableTr=$("#"+tableId).find("tbody tr");
		tableTr.each(function(r) { 
			if(type==2){//js拼表格写法
				temp=$(this).find("td").length;
			}else{
				temp=$(this).find("td").length+1;
			}
			rowSpan=$(this).find("td").attr("rowspan");
			$(this).find("td").each(function(c) { 
					if ($(this).find("input").length != 0) { 					
						var itemArray = new Array();
						itemArray[0] = r; 
						if(typeof(rowSpan) != "undefined"){
							if(rowSpan > 1){
								itemArray[1] = c;
							}else{
								itemArray[1] = c+(tableTr.eq(0).find("td").length-temp); 
							}
						}else{
							itemArray[1] = c+(tableTr.eq(0).find("td").length-temp); 
						}
						tabArray.push(itemArray); 
					}
					if (c > maxc) {
						maxc = c; 
					} 
					
					if(typeof(rowSpan) != "undefined"){
						if(rowSpan > 1){
							$(this).find("input").attr("hideFocus", "YX-" + r + "-" + c); //获得最大列数 
						}else{
							$(this).find("input").attr("hideFocus", "YX-" + r + "-" + (c+(tableTr.eq(0).find("td").length-temp))); //获得最大列数 
						}
					}else{
						$(this).find("input").attr("hideFocus", "YX-" + r + "-" + (c+(tableTr.eq(0).find("td").length-temp))); //获得最大列数 
					}
					
					
				}); //获得最大行数
			if (r > maxr) { maxr = r; } 
			
		});  
		$("#"+tableId+" input").live("keydown", function(evt) { 
 			var _css = $(this).attr("hideFocus"); 
			var nCss = ""; 
			var direction; //记录按键方向 
			switch (evt.which) { case 38: //上 
			direction = "up"; break; case 40: //下
			direction = "down"; break; case 37: //左
			direction = "left"; break; case 39: //右
			direction = "right"; break; default: return; } 
			nCss = ReturnNextCss(_css, direction); 
			if (nCss != "") { 
					$("input[hideFocus="+nCss+"]").focus(); 
					return false; 
				} 
				return true; 
		}); //判断二维数组中是否存在某个项目 
		function inArray(r, c) { //遍历数组看存不存在
			var flag = 0; $.each(tabArray, function(i, n) { 
			if (r == n[0] && c == n[1]) { flag = 1; } });
				if (flag == 1) 
					return true; 
				else return false; 
			} //根据传入的css和方向来遍历数组以确定下一个输入框的按钮 
			function ReturnNextCss(nowCss, direction) { 
				var rCss = ""; 
				var r = parseInt(nowCss.split('-')[1]); //行
				var c = parseInt(nowCss.split('-')[2]); //如果是向上按  列
				if (direction == "up") { r = r - 1; while (r >= 0) { if (inArray(r, c)) { rCss = r + "-" + c; break; } r = r - 1; } } //如果是向下按 
				if (direction == "down") {r = r + 1; while (r <= maxr) { if (inArray(r, c)) { rCss = r + "-" + c; break; } r = r + 1; } } //如果是向左按 
				if (direction == "left") { c = c - 1; while (c >= 0) { if (inArray(r, c)) { rCss = r + "-" + c; break; } c = c - 1; } } //如果是向右按 
				if (direction == "right") { c = c + 1; while (c <= maxc) { if (inArray(r, c)) { rCss = r + "-" + c; break; } c = c + 1; } } 
				return "YX-"+rCss; 
			}
		}	
	/**********************/
	
	function showStorageAreaDiv(functionName){
		 $('body').modalmanager('loading');
		  setTimeout(function(){
			  $areaModal.load('toStorageAreaDiv.action?functionName='+functionName, function(){
			  $areaModal.modal();
		    });
		  }, 100);
	}
	
	function showStorageAreaDivII(functionName,judgeAll){
		 $('body').modalmanager('loading');
		  setTimeout(function(){
			  $areaModal.load('toStorageAreaDiv.action?functionName='+functionName+"&judgeAll="+judgeAll, function(){
			  $areaModal.modal();
		    });
		  }, 100);
	}
	
	//弹出物料层
	function showWarehouseWindow(callBackFunction){
		$('body').modalmanager('loading');
		setTimeout(function(){
			$showWarehouseWindow.load('storagearea/tipWarehousePage.action?callBackFunction='+callBackFunction, function(){
				$showWarehouseWindow.modal();
			});
		}, 100);
	}
	
	/**
	 * 返回主页面方法
	 * @param value action地址
	 */
	function backMainPage(value){
		App.loadContentData(value);
	}
	
	/**
	 * BOM使用的物料弹出层
	 * @param materialIds
	 * @param fn
	 */
	function showWithoutBomMatPre(materialIds,fn){
		 $('body').modalmanager('loading');
		  setTimeout(function(){
			  $showMatWithoutBom.load('bom/toMatWithoutBom.action?materialIds='+materialIds+'&fn='+fn, '', function(){
			  $showMatWithoutBom.modal();
		    });
		  }, 100);
	}
	
	/**
	 * 公共表单验证方法
	 */
	var CommonFormVaildate = function () {
		var commonFormValidation = function(formOption) {
	    	var fm = $('#'+formOption.formId);
	        var error = $('.alert-danger', fm);
	        var success = $('.alert-success', fm);
	        fm.validate({
				errorElement: 'span', 
				errorClass: 'help-block', 
				focusInvalid: false, 
				ignore: "",
				rules: formOption.formRoles,
				messages: formOption.formMessages,
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
					$(form).ajaxSubmit(formOption.formCallBack); 
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
			init : function(formOption) {
				handleWysihtml5();
				commonFormValidation(formOption);
			}
		};
	}();
	
	/**
	 * 供应商弹出层
	 * @param functionName
	 */
	function showSupplierWindow(functionName){
		 $('body').modalmanager('loading');
		  setTimeout(function(){
			  $showSupplierDiv.load('toSupplierWindow.action?functionName='+functionName, function(){
				 $showSupplierDiv.modal();
		    });
		  }, 100);
	}
	/**
	 * 弹出计划明细
	 * @param planId
	 */
	function tipStorageplanDetail(planId){
		$('body').modalmanager('loading');
		setTimeout(function(){
			$detailWindow.load("storageplan/toDetailPage.action?planId="+planId, function(){
				$detailWindow.modal();
			});
		}, 100);
	}
	
	/**
	 * 生成业务代码类型下拉列表 1/2
	 * @return
	 */
	function getBusinessCodeType(defaultVal, container)
	{
		sendAjaxCommon('businesscodemg/getAllBusinessType.action','',showBusinessCodeType, defaultVal, container);
	}
	/**
	 * 生成业务代码类型下拉列表 2/2
	 * @param json
	 * @return
	 */
	function showBusinessCodeType(json, defaultVal, container)
	{
		var creatorData = json;
		var str = "";
		str += "<select id='bcType' name='bcType' class='form-control'>";
		str += genDefaultOpt();
		for(var i=0;i<creatorData.length;i++){
			if(defaultVal == creatorData[i].bcType)
			{
				str += "<option  value='" + creatorData[i].bcType + "' selected>" + creatorData[i].bcTypeName + "</option>";
			}
			else
			{
				str += "<option  value='" + creatorData[i].bcType + "' >" + creatorData[i].bcTypeName + "</option>";
			}
		}
		str += "</select>";
		$('#'+container).html(str);
	}

	/**********************************************************
	 * 生成业务代码下拉列表 1-1
	 * @return
	 */
	function getBusinessCode(defaultVal, container, bcType,_script_)
	{
		sendAjaxCommonFn('businesscodemg/showSelectBusinessCode.action?bcType='+bcType,'',showBusinessCode, defaultVal, container,_script_);
	}
	/**
	 * 生成业务代码下拉列表 1-2
	 * @param json
	 * @return
	 */
	function showBusinessCode(json, defaultVal, container,_script_)
	{
		var creatorData = json;
		var str = "";
		str += "<select id='bcId' name='bcId' class='form-control'  "+_script_+">";
		str += genDefaultOpt();
		for(var i=0;i<creatorData.length;i++){
			if(defaultVal == creatorData[i].bcId)
			{
				str += "<option  value='" + creatorData[i].bcId + "' selected>" + creatorData[i].bcName + "</option>";
			}
			else
			{
				str += "<option  value='" + creatorData[i].bcId + "' >" + creatorData[i].bcName + "</option>";
			}
		}
		str += "</select>";
		$('#'+container).html(str);
	}
	
	function getStorageMsgSelect(defaultVal, container, areaType,_script_)
	{
		sendAjaxCommonFn('gainSelectStorage.action?areaType='+areaType,'',showStorageMsgSelect, defaultVal, container,_script_);
	}
	/**
	 * 生成业务代码下拉列表 1-2
	 * @param json
	 * @return
	 */
	function showStorageMsgSelect(json, defaultVal, container,_script_)
	{
		var creatorData = json;
		var str = "";
		str += "<select id='storageId' name='storageId' class='form-control'  "+_script_+">";
		str += genDefaultOpt();
		for(var i=0;i<creatorData.length;i++){
			if(defaultVal == creatorData[i].storageId)
			{
				str += "<option  value='" + creatorData[i].storageId + "' selected>" + creatorData[i].storageCode + "</option>";
			}
			else
			{
				str += "<option  value='" + creatorData[i].storageId + "' >" + creatorData[i].storageCode + "</option>";
			}
		}
		str += "</select>";
		$('#'+container).html(str);
	}
	/**
	 * 弹出dmr明细
	 * @param planId
	 */
	function tipDmrDetail(dmrId){
		$('body').modalmanager('loading');
		setTimeout(function(){
			$dmrDetail.load("dmr/toDmrDetailPage.action?dmrId="+dmrId, function(){
				$dmrDetail.modal();
			});
		}, 100);
	}
	
	/**
	 * 参数c填写this，点击后将会显示可修改的控件
	 * @param c
	 */
	function openChangeInput(c,cId){
		$(c).parent().html("<div class='input-group'><input class='form-control input-sm' type='text' value='"+c.innerHTML+"'><span class='input-group-btn'><button class='btn blue input-sm' type='button' onclick='selectTrueIt(this,"+cId+")'><i class='fa fa-check'></i></button><button class='btn red input-sm' type='button' onclick=\"selectFalseIt(this,"+cId+",'"+c.innerHTML+"')\"><i class='fa fa-times'></i></button></span></div>");
	}
	
	/**
	 * 参数c填写this，点击后将取消操作，值恢复,cId-操作数据的Id值
	 * @param c
	 */
	function selectFalseIt(c,cId,oldValue){
		$(c).parent().parent().parent().html("<a href='javascript:;' onclick='openChangeInput(this,"+cId+")'>"+oldValue+"</a>");
	}
	/**
	 * 弹出入库单明细
	 * @param planId
	 */
	function tipStorageDetailPage(orderId){
		$('body').modalmanager('loading');
		setTimeout(function(){
			$OrderDetailWindow.load("storageorders/toStorageOrderDetailPage.action?orderId="+orderId, function(){
				$OrderDetailWindow.modal();
			});
		}, 100);
	}
	/**
	 * 弹出客户层
	 * @param functionName
	 * @param suId
	 */
	function showCustomerDiv(functionName,suId){
		 $('body').modalmanager('loading');
		  setTimeout(function(){
			  $customerModal.load('toCustomerDivPre.action?functionName='+functionName+"&suId="+suId, function(){
			  $customerModal.modal();
		    });
		  }, 100);
	}
	/**
	 * 弹出出库计划明细
	 * @param planId
	 */
	function tipImWarehousePlanDetail(planId){
		$('body').modalmanager('loading');
		setTimeout(function(){
			$detailWindow.load("imwarehouseplan/toImWarehouseDetailPage.action?planId="+planId, function(){
				$detailWindow.modal();
			});
		}, 100);
	}
	//回显库存量和计划量函数
	function backAmount(materialId,curId,customerId,ownerDelivery,supplierId){
		var url="imwarehouseplan/showAmounts.action?materialId="+materialId+"&&customerId="+customerId+"&&ownerDelivery="+ownerDelivery;
		if(supplierId != null && supplierId != ""){
			url="imwarehouseplan/showAmounts.action?materialId="+materialId+"&&customerId="+customerId+"&&ownerDelivery="+ownerDelivery+"&&supplierId="+supplierId;
		}
		$.ajax({
	        type: "post",
	        url:   url,
	        dataType: "json",
	        success: function(data){
	        	var quantity=data != null &&data.quantity != null && data.quantity >0 ? data.quantity :0;
	        	var isAmount=data != null &&data.isAmount != null && data.isAmount >0 ? data.isAmount : 0;
		        	$("#amounts"+curId).html("<a class='tip_customer1' id='amounts"+curId+"' onclick='tipQuantity("+quantity+","+materialId+","+customerId+","+ownerDelivery+","+(supplierId != null && supplierId != "" ? supplierId :null)+")'>"+quantity+"</a>");
	        		$("#isAmount"+curId).html("<a class='tip_customer' id='isAmount"+curId+"' onclick='tipIsAmount("+materialId+","+customerId+","+ownerDelivery+","+isAmount+","+(supplierId != null && supplierId != "" ? supplierId :null)+")'>"+isAmount+"</a>");
	            },
	            error:function (data){
	           	 alertError("ERROR!");
	            }
	    });
	}
	/**
	 * 显示库存明细
	 * @param materialId
	 * @param quantity
	 */
	function tipQuantity(quantity,materialId,customerId,ownerDelivery,supplierId){
		if(quantity != null && quantity>0){
			isInventoryByMaterial(materialId,customerId,ownerDelivery,supplierId);
		}else{
			return;
		}
	}
	function tipIsAmount(materialId,customerId,ownerDelivery,isAmount,supplierId){
		if(isAmount != null && isAmount>0){
			isPlanAmountDetail(materialId,customerId,ownerDelivery,supplierId);
		}else{
			return;
		}
	}
	/**
	 * 弹出出库明细
	 * @param planId
	 */
	function tipDeliveryDetail(deliveryId){
		$('body').modalmanager('loading');
		setTimeout(function(){
			$deliveryDetailWindow.load("imwarehouse/toDeliveryDetailPage.action?deliveryId="+deliveryId, function(){
				$deliveryDetailWindow.modal();
			});
		}, 100);
	}
	/**
	 * 弹出实际物料统计库存层
	 */
	function isInventoryByMaterial(materialId,customerId,ownerDelivery,supplierId){
		var url="imwarehouseplan/isInventoryByMaterial.action?materialId="+materialId+"&&customerId="+customerId+"&&ownerDelivery="+ownerDelivery;
		if(supplierId != null && supplierId != ""){
			url=url+"&&supplierId="+supplierId;
		}
		$('body').modalmanager('loading');
		setTimeout(function(){
			$tipInvMaterial.load(url, function(){
				$tipInvMaterial.modal();
			});
		}, 100);
	}
	/**
	 * 弹出计划量弹出明细
	 */
	function isPlanAmountDetail(materialId,customerId,ownerDelivery,supplierId){
		var url="imwarehouseplan/isPlanAmountDetail.action?materialId="+materialId+"&&customerId="+customerId+"&&ownerDelivery="+ownerDelivery;
		if(supplierId != null && supplierId != ""){
			url=url+"&&supplierId="+supplierId;
		}
		$('body').modalmanager('loading');
		setTimeout(function(){
			$tipPlanMaterial.load(url, function(){
				$tipPlanMaterial.modal();
			});
		}, 100);
	}
	//点击清点原则连接弹出层
	function checkStandardFn(className){
		$("."+className).editable({
			url:null,
		    inputclass: 'form-control input-small',
		    type:'select',
		    title:"请选择清点原则",
		    pk: 1,
		    name: className,
		    savenochange:true,
		    source: function(){
		    	var str="";
		     	var allCode = codeData.data;
		        	str+="[";			
		        	if(allCode != null && allCode.length >0){
		    	     	for(var i=0;i<allCode.length;i++){
	    		     		if(allCode[i].type == "2052"){
	    		     			str+="{";
	    		     			str+="value:'"+allCode[i].fixcodeId+"'";	
	    		     			str+=",";
	    		     			str+="text:'"+allCode[i].codeDesc+"'";	
	    		     			str+="},";	    		     				
		    	     		}
		    	     	}
		        	str=str.substring(0,str.length-1);
		        	}
		    		str+="]";
		        	return str;
		    },
		    success:function(response,newValue){
		    	var id=$(this).attr("id");
		    	id="#"+id.substring(1,id.length);
		    	$(id).val(newValue);//回显数量
		    }
		});
	}
	//点击连接弹出数字  
	function selectAmount(className){
		$('.'+className).editable({
//	         url: null,
	        type: 'text',
	        pk: 1,
	        name: className,
	        title: '请输入计划量',
	        validate:function(value) {
	        	var reg=/^[1-9]\d{0,13}(\.[0-9]{1,4})?$/;
	        	if(value != null && value != ""){
	        		if(!reg.test(value)){
	        			return '请输入有效数字!';
	        		}
	        	}
	  	  		if($.trim(value) == '') {
	  	  			return '计划入库量!';
	  	  		}
	  	    	
	  		},
	        success:function(name,value){
					var id=$(this).attr("id");
					$('#'+id).css(removeACss);
			    	id="#"+id.substring(1,id.length);
			    	$(id).val(value);//回显数量
	        	}
	    });
	}
	/**start 物料明细列表验证样式**/
	//错误样式
	var inputCss = {
	      color: '#b94a48',
	      border: '1px solid #b94a48'
		};
	//正确样式
	var removeCss = {
	      color: '#555',
	      border: '1px solid #e5e5e5'
		};
	//<a>错误样式
	var aCss = {
	      color: '#b94a48'
		};
	//<a>正确样式
	var removeACss = {
	      color: '#0d638f'
		};
	/**end**/
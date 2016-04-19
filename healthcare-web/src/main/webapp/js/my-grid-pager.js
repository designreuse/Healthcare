	
  /*增加String的format方法*/
	/*
	Object.extend(String, {
		  format: function(str) {
			try {
			  return str;
			} catch (e) {
			  throw e;
			}
		  }
		 });
	*/
	//删除grid
	function removeGird(id){
		$(id).innerHTML = '';
	}

	function createGrid(tableClass,title, columns, cnt, ps,useRadio){
		//createGrid.backColor = "#EEEEEE";	
		//createGrid.hoverColor = "#CACE98";
		//createGrid.clickColor = "#D5D9D8";
		this.tableClass = tableClass;
		this.title = title;
		this.columns = columns;
		this.container = cnt;
		this.table;
		this.curRow;
		this.curCell;
		this.curColums;
		this.jsonData = ps.records;
		this.remoteSort = true;
		this.curPage = ps.curPage;
		this.pageSize = ps.pageSize;
		this.useRadio = useRadio;
		
		var CurGrid = this;
		
		this.load = function(){//grid重画模块
			if($('myTable') != null){
				removeGird(this.container);
			}
			var tbStr = [], dataIndexArr = [], rendererArr = [], cellCnt=[],index,noWrap,colMask;

			tbStr.push("<table id='myTable'");
			if(this.tableClass !=null)
			{
				tbStr.push(" class='"+this.tableClass+"'>");
			}
			else
			{
				//
				tbStr.push(" class='table table-bordered table-condensed table-striped table-advance table-hover'>");
				//tbStr.push(" class='table_list'>");
			}
			//
			//tbStr.push("<tr class='odd gradeX'>");
			//tbStr.push("<tr class='table_list_th'>");
			tbStr.push("<thead>");

			for(var o=0; o< this.columns.length; o++){//列名	
				if(this.columns[o].orderCol != undefined){
					
					if($("orderCol").value == this.columns[o].orderCol||$("orderCol").value.split("-")[0]== this.columns[o].orderCol){
						if($("order").value == '-1'){
							colMask = "descMask";						
						}else if($("order").value == '1'){
							colMask = "ascMask";
						}
					}else{
						colMask = "sortMask";
					}
				}else{
					colMask = "noSort";
				}

				if(this.columns[o].width == undefined){
					tbStr.push("<th style='text-align:center;'>"+ this.columns[o].header+"</th>");
					//tbStr.push("<th class='"+ colMask + "'>"+ this.columns[o].header+"</th>");
				}else{			
					tbStr.push("<th width="+ this.columns[o].width +" style='text-align:center;'>"+ this.columns[o].header+"</th>");
					//tbStr.push("<th class='"+ colMask + "'" +"width="+ this.columns[o].width +">"+ this.columns[o].header+"</th>");
				}				
				dataIndexArr.push(this.columns[o].dataIndex);//记录dataIndex				
				rendererArr.push(this.columns[o].renderer);  //记录renderer
			}

			//tbStr.push("</tr>");
			tbStr.push("</thead>");
			//判断是否使用了radio
			if(useRadio == true){
				for(var i=0; i< this.jsonData.length;i++){//			
					/*if(i%2 != 0){tbStr.push("<tr class='table_list_row1'>");}else{tbStr.push("<tr class='table_list_row2' >");}*/			
					//tbStr.push("<tr class='table_list_row1'>");
					tbStr.push("<tr class='odd gradeX' onclick='javascript:selectTheRrRadio(this)' ondblclick='javascript:checkYouSee(this)'>");
					
					for(var j=0;j<dataIndexArr.length;j++){	
						
						cellCnt = this.jsonData[i][dataIndexArr[j]];//根据dataIndex显示后台数据
						
						if(cellCnt == null || cellCnt == undefined){
							cellCnt ='';
						}
						
						if(typeof(rendererArr[j])=='function'){//列名有renderer属性
							var __data__ = {};
							__data__.data = this.jsonData[i];
							cellCnt = this.columns[j].renderer(cellCnt,{},__data__);//显示renderer函数，传值		
						}
						
						if(this.columns[j].style == undefined){
							styleV = '';
						}else{
							styleV = this.columns[j].style;
						}
						tbStr.push("<td style='vertical-align: middle;'>" + cellCnt + "</td>");
						//tbStr.push("<td style='"+ styleV +"'>" + cellCnt + "</td>");
					}				
					tbStr.push("</tr>");
				}
			}
			else if(useRadio == 'checkbox'){
				for(var i=0; i< this.jsonData.length;i++){//			
					/*if(i%2 != 0){tbStr.push("<tr class='table_list_row1'>");}else{tbStr.push("<tr class='table_list_row2' >");}*/			
					//tbStr.push("<tr class='table_list_row1'>");
					tbStr.push("<tr class='odd gradeX' onclick='javascript:selectTheCheckBox(this)'>");
					
					for(var j=0;j<dataIndexArr.length;j++){	
						
						cellCnt = this.jsonData[i][dataIndexArr[j]];//根据dataIndex显示后台数据
						
						if(cellCnt == null || cellCnt == undefined){
							cellCnt ='';
						}
						
						if(typeof(rendererArr[j])=='function'){//列名有renderer属性
							var __data__ = {};
							__data__.data = this.jsonData[i];
							cellCnt = this.columns[j].renderer(cellCnt,{},__data__);//显示renderer函数，传值		
						}
						
						if(this.columns[j].style == undefined){
							styleV = '';
						}else{
							styleV = this.columns[j].style;
						}
						tbStr.push("<td style='vertical-align: middle;'>" + cellCnt + "</td>");
						//tbStr.push("<td style='"+ styleV +"'>" + cellCnt + "</td>");
					}				
					tbStr.push("</tr>");
				}

			}else{
				for(var i=0; i< this.jsonData.length;i++){//			
					/*if(i%2 != 0){tbStr.push("<tr class='table_list_row1'>");}else{tbStr.push("<tr class='table_list_row2' >");}*/			
					//tbStr.push("<tr class='table_list_row1'>");
					tbStr.push("<tr class='odd gradeX' >");
					
					for(var j=0;j<dataIndexArr.length;j++){	
						
						cellCnt = this.jsonData[i][dataIndexArr[j]];//根据dataIndex显示后台数据
						
						if(cellCnt == null || cellCnt == undefined){
							cellCnt ='';
						}
						
						if(typeof(rendererArr[j])=='function'){//列名有renderer属性
							var __data__ = {};
							__data__.data = this.jsonData[i];
							cellCnt = this.columns[j].renderer(cellCnt,{},__data__);//显示renderer函数，传值		
						}
						
						if(this.columns[j].style == undefined){
							styleV = '';
						}else{
							styleV = this.columns[j].style;
						}
						tbStr.push("<td style='vertical-align: middle;'>" + cellCnt + "</td>");
						//tbStr.push("<td style='"+ styleV +"'>" + cellCnt + "</td>");
					}				
					tbStr.push("</tr>");
				}
			}
			
			tbStr.push("</table>");
			this.container.innerHTML = tbStr.join("");
			this.table = this.container.firstChild;
			if(this.title != null){//表格标题	
				var x = $('myTable').createCaption();
				x.innerHTML = "<span class='navi'>&nbsp;</span>"+this.title;
			}

			/** 设置单元格  **/
			for(var r=1; r<this.table.rows.length;r++){
	
				if(dataIndexArr[0] == undefined || rendererArr[0] == "function getIndex(){}"){//序号判断
					if(this.curPage == 1){//计算序号
						index = r;
					}else{
						index = parseInt(this.curPage-1)*this.pageSize + r;
					}
					this.table.rows[r].cells[0].innerHTML = index; 
					this.table.rows[r].cells[0].style.textAlign = 'center';//序号单元格居中			
				}
				
				this.table.rows[r].onmouseover = function(){ this.style.backgroundColor = createGrid.hoverColor; }
				this.table.rows[r].onmouseout = function(){ 
					if(CurGrid.curRow!=this) this.style.backgroundColor = createGrid.backColor; 
					else this.style.backgroundColor = createGrid.clickColor;
				}
	
				for(var c=0;c<this.table.rows[r].cells.length;c++){
					this.table.rows[r].cells[c].onclick = function(){
						if(CurGrid.curRow) CurGrid.curRow.style.backgroundColor = createGrid.backColor;
						CurGrid.curRow = this.parentNode;
						this.parentNode.style.backgroundColor = createGrid.clickColor;
					}
	
				}
			}

			for(var g=0; g<this.table.rows[0].cells.length;g++){
				this.table.rows[0].cells[0].style.textAlign = 'center';//序号列居中
				if(this.columns[g].orderCol != undefined){
					this.table.rows[0].cells[g].onclick = function(){

						var _order = 1;
						if(!$("queryBtn").disabled){//亮
							//if(CurGrid.table.rows[0].cells[this.cellIndex].innerHTML.lastIndexOf('▲')!= -1){
							if(CurGrid.table.rows[0].cells[this.cellIndex].className == "ascMask"){
								_order = '-1';
							}								
						}else{
							if($("orderCol").value != this.cellIndex){return false;}
							if(CurGrid.table.rows[0].cells[this.cellIndex].className == "ascMask"){
								_order = '1';
							}
							if(CurGrid.table.rows[0].cells[this.cellIndex].className == "descMask"){
								_order = '-1';
							}
						}
						CurGrid.sort(this.cellIndex, CurGrid.columns[this.cellIndex].orderCol,_order,CurGrid.columns[this.cellIndex].orderType);	

					}
				}
			}
			
		}
	
		this.sort = function(n, orderCol,order,orderType){  //排序 n-列 type-升降序
		
			if(typeof(this.remoteSort) == 'undefined' || this.remoteSort == false){//当前页排序			
				this.jsonData = this.jsonData.sort(function(x,y){
					if (x[n]>y[n]){return type;}else if(x[n]<y[n]){return -type;}else{return 0;}});
			}else{//远程排序
				if($('myTable') != null){
					removeGird(this.container);
				}
				myRemoteSort(orderCol,order,orderType);
			}
																					
			this.load();
		
		}
		
	}
	
	function createGridWithoutPage(tableClass,title, columns, cnt, ps,useRadio){
		this.tableClass = tableClass;
		this.title = title;
		this.columns = columns;
		this.container = cnt;
		this.table;
		this.curRow;
		this.curCell;
		this.curColums;
		this.jsonData = ps;
		this.remoteSort = true;
//		this.curPage = ps.curPage;
//		this.pageSize = ps.pageSize;
		this.useRadio = useRadio;
		
		var CurGrid = this;
		
		this.load = function(){//grid重画模块
			if($('myTable') != null){
				removeGird(this.container);
			}
			var tbStr = [], dataIndexArr = [], rendererArr = [], cellCnt=[],index,noWrap,colMask;

			tbStr.push("<table id='myTable'");
			if(this.tableClass !=null)
			{
				tbStr.push(" class='"+this.tableClass+"'>");
			}
			else
			{
				//
				tbStr.push(" class='table table-bordered table-condensed table-striped table-advance table-hover'>");
				//tbStr.push(" class='table_list'>");
			}
			//
			//tbStr.push("<tr class='odd gradeX'>");
			//tbStr.push("<tr class='table_list_th'>");
			tbStr.push("<thead>");

			for(var o=0; o< this.columns.length; o++){//列名	
				if(this.columns[o].orderCol != undefined){
					
					if($("orderCol").value == this.columns[o].orderCol||$("orderCol").value.split("-")[0]== this.columns[o].orderCol){
						if($("order").value == '-1'){
							colMask = "descMask";						
						}else if($("order").value == '1'){
							colMask = "ascMask";
						}
					}else{
						colMask = "sortMask";
					}
				}else{
					colMask = "noSort";
				}

				if(this.columns[o].width == undefined){
					tbStr.push("<th style='text-align:center;'>"+ this.columns[o].header+"</th>");
					//tbStr.push("<th class='"+ colMask + "'>"+ this.columns[o].header+"</th>");
				}else{			
					tbStr.push("<th width="+ this.columns[o].width +" style='text-align:center;'>"+ this.columns[o].header+"</th>");
					//tbStr.push("<th class='"+ colMask + "'" +"width="+ this.columns[o].width +">"+ this.columns[o].header+"</th>");
				}				
				dataIndexArr.push(this.columns[o].dataIndex);//记录dataIndex				
				rendererArr.push(this.columns[o].renderer);  //记录renderer
			}

			//tbStr.push("</tr>");
			tbStr.push("</thead>");
			//判断是否使用了radio
			if(useRadio == true){
				for(var i=0; i< this.jsonData.length;i++){//			
					/*if(i%2 != 0){tbStr.push("<tr class='table_list_row1'>");}else{tbStr.push("<tr class='table_list_row2' >");}*/			
					//tbStr.push("<tr class='table_list_row1'>");
					tbStr.push("<tr class='odd gradeX' onclick='javascript:selectTheRrRadio(this)' ondblclick='javascript:checkYouSee(this)'>");
					
					for(var j=0;j<dataIndexArr.length;j++){	
						
						cellCnt = this.jsonData[i][dataIndexArr[j]];//根据dataIndex显示后台数据
						
						if(cellCnt == null || cellCnt == undefined){
							cellCnt ='';
						}
						
						if(typeof(rendererArr[j])=='function'){//列名有renderer属性
							var __data__ = {};
							__data__.data = this.jsonData[i];
							cellCnt = this.columns[j].renderer(cellCnt,{},__data__);//显示renderer函数，传值		
						}
						
						if(this.columns[j].style == undefined){
							styleV = '';
						}else{
							styleV = this.columns[j].style;
						}
						tbStr.push("<td style='vertical-align: middle;'>" + cellCnt + "</td>");
						//tbStr.push("<td style='"+ styleV +"'>" + cellCnt + "</td>");
					}				
					tbStr.push("</tr>");
				}
			}
			else if(useRadio == "checkbox"){
				for(var i=0; i< this.jsonData.length;i++){//			
					/*if(i%2 != 0){tbStr.push("<tr class='table_list_row1'>");}else{tbStr.push("<tr class='table_list_row2' >");}*/			
					//tbStr.push("<tr class='table_list_row1'>");
					tbStr.push("<tr class='odd gradeX' onclick='javascript:selectTheCheckBox(this)'>");
					
					for(var j=0;j<dataIndexArr.length;j++){	
						
						cellCnt = this.jsonData[i][dataIndexArr[j]];//根据dataIndex显示后台数据
						
						if(cellCnt == null || cellCnt == undefined){
							cellCnt ='';
						}
						
						if(typeof(rendererArr[j])=='function'){//列名有renderer属性
							var __data__ = {};
							__data__.data = this.jsonData[i];
							cellCnt = this.columns[j].renderer(cellCnt,{},__data__);//显示renderer函数，传值		
						}
						
						if(this.columns[j].style == undefined){
							styleV = '';
						}else{
							styleV = this.columns[j].style;
						}
						tbStr.push("<td style='vertical-align: middle;'>" + cellCnt + "</td>");
						//tbStr.push("<td style='"+ styleV +"'>" + cellCnt + "</td>");
					}				
					tbStr.push("</tr>");
				}
			}
			else{
				for(var i=0; i< this.jsonData.length;i++){//			
					/*if(i%2 != 0){tbStr.push("<tr class='table_list_row1'>");}else{tbStr.push("<tr class='table_list_row2' >");}*/			
					//tbStr.push("<tr class='table_list_row1'>");
					tbStr.push("<tr class='odd gradeX' >");
					
					for(var j=0;j<dataIndexArr.length;j++){	
						
						cellCnt = this.jsonData[i][dataIndexArr[j]];//根据dataIndex显示后台数据
						
						if(cellCnt == null || cellCnt == undefined){
							cellCnt ='';
						}
						
						if(typeof(rendererArr[j])=='function'){//列名有renderer属性
							var __data__ = {};
							__data__.data = this.jsonData[i];
							cellCnt = this.columns[j].renderer(cellCnt,{},__data__);//显示renderer函数，传值		
						}
						
						if(this.columns[j].style == undefined){
							styleV = '';
						}else{
							styleV = this.columns[j].style;
						}
						tbStr.push("<td style='vertical-align: middle;'>" + cellCnt + "</td>");
						//tbStr.push("<td style='"+ styleV +"'>" + cellCnt + "</td>");
					}				
					tbStr.push("</tr>");
				}
			}
			
			tbStr.push("</table>");
			this.container.innerHTML = tbStr.join("");
			this.table = this.container.firstChild;
			if(this.title != null){//表格标题	
				var x = $('myTable').createCaption();
				x.innerHTML = "<span class='navi'>&nbsp;</span>"+this.title;
			}

			/** 设置单元格  **/
			for(var r=1; r<this.table.rows.length;r++){
	
				if(dataIndexArr[0] == undefined || rendererArr[0] == "function getIndex(){}"){//序号判断
//					if(this.curPage == 1){//计算序号
//						index = r;
//					}else{
//						index = parseInt(this.curPage-1)*this.pageSize + r;
//					}
					this.table.rows[r].cells[0].innerHTML = r;
					this.table.rows[r].cells[0].style.textAlign = 'center';//序号单元格居中			
				}
				
				this.table.rows[r].onmouseover = function(){ this.style.backgroundColor = createGrid.hoverColor; }
				this.table.rows[r].onmouseout = function(){ 
					if(CurGrid.curRow!=this) this.style.backgroundColor = createGrid.backColor; 
					else this.style.backgroundColor = createGrid.clickColor;
				}
	
				for(var c=0;c<this.table.rows[r].cells.length;c++){
					this.table.rows[r].cells[c].onclick = function(){
						if(CurGrid.curRow) CurGrid.curRow.style.backgroundColor = createGrid.backColor;
						CurGrid.curRow = this.parentNode;
						this.parentNode.style.backgroundColor = createGrid.clickColor;
					}
	
				}
			}

			for(var g=0; g<this.table.rows[0].cells.length;g++){
				this.table.rows[0].cells[0].style.textAlign = 'center';//序号列居中
				if(this.columns[g].orderCol != undefined){
					this.table.rows[0].cells[g].onclick = function(){

						var _order = 1;
						if(!$("queryBtn").disabled){//亮
							//if(CurGrid.table.rows[0].cells[this.cellIndex].innerHTML.lastIndexOf('▲')!= -1){
							if(CurGrid.table.rows[0].cells[this.cellIndex].className == "ascMask"){
								_order = '-1';
							}								
						}else{
							if($("orderCol").value != this.cellIndex){return false;}
							if(CurGrid.table.rows[0].cells[this.cellIndex].className == "ascMask"){
								_order = '1';
							}
							if(CurGrid.table.rows[0].cells[this.cellIndex].className == "descMask"){
								_order = '-1';
							}
						}
						CurGrid.sort(this.cellIndex, CurGrid.columns[this.cellIndex].orderCol,_order,CurGrid.columns[this.cellIndex].orderType);	

					}
				}
			}
			
		}
	
		this.sort = function(n, orderCol,order,orderType){  //排序 n-列 type-升降序
		
			if(typeof(this.remoteSort) == 'undefined' || this.remoteSort == false){//当前页排序			
				this.jsonData = this.jsonData.sort(function(x,y){
					if (x[n]>y[n]){return type;}else if(x[n]<y[n]){return -type;}else{return 0;}});
			}else{//远程排序
				if($('myTable') != null){
					removeGird(this.container);
				}
				myRemoteSort(orderCol,order,orderType);
			}
																					
			this.load();
		
		}
		
	}
	
	//远程排序接口
	function myRemoteSort(orderCol,order,orderType){
		//排序类型 0:不排 -1:降序 1:升序
		if(orderType!=undefined&&orderType!=""){
			$("orderCol").value = orderCol+"-"+orderType;
		}else{
			$("orderCol").value = orderCol;
		}
		$("order").value = order;

		if(!$("queryBtn").disabled){//亮
			__extQuery__(1);
		}
		//alert("当前列="+col+" | "+"排序类型="+order +" | "+ "此为排序接口，远程请求在此写！");
	}

	function getIndex(){}

	//Ajax返回调用函数 设置字段、列名属性参数
	function callBack(json, option){
		var ps = json;
		//设置对应数据
//		if(Object.keys(json).length>0){
//			ps = json[Object.keys(json)[0]];
//		}
		//生成数据集
		if(ps.records != ''){
			$("#"+option.blankId).hide();
			$("#"+option.gridId).show();
			new createGrid(option.tableClass,option.title,option.columns, document.getElementById(option.gridId),ps,option.useRadio).load();
			//分页
			//myPage = new showPages(option, ps);
			var pageName = option.pageId;
			window[pageName] = new showPages(option, ps);
			window[pageName].printHtml();
		}else{
			$("#"+option.blankId).show();
			//$("#_page").html("<div align='center'>没有满足条件的数据</div>");
			$("#"+option.pageId).html("");
			removeGird(option.gridId);
			$('#'+option.gridId).hide();
		}
		//useableBtn($("queryBtn"));
	}
	
	function callBackWithoutPage(json, option){
		var ps = json;
		//设置对应数据
//		if(Object.keys(json).length>0){
//			ps = json[Object.keys(json)[0]];
//		}
		//生成数据集
		if(ps.records != ''){
			$("#"+option.blankId).hide();
			$("#"+option.gridId).show();
			new createGridWithoutPage(option.tableClass,option.title,option.columns, document.getElementById(option.gridId),ps,option.useRadio).load();
		}else{
			$("#"+option.blankId).show();
			$("#"+option.pageId).html("");
			removeGird(option.gridId);
			$('#'+option.gridId).hide();
		}
		//useableBtn($("queryBtn"));
	}
/*============================================分页=================================================*/

	function showPages(option, ps) { //初始化属性
		/*
		this.form = option.formId;
		this.grid = option.gridId;
		this.blank = option.blankId;
		this.name = option.pageId; //对象名称
		this.url = option.url; //action
		*/
		this.page = ps.curPage; //当前页数
		this.pageCount = ps.totalPages; //总页数
		this.totalRecords = ps.totalRecords; //总记录数
		this.option = option;
	}
	
	showPages.prototype.getPage = function(){ //丛url获得当前页数,如果变量重复只获取最后一个
		var args = location.search;
		var reg = new RegExp('[\?&]?' + this.argName + '=([^&]*)[&$]?', 'gi');
		var chk = args.match(reg);
		this.page = RegExp.$1;
	}
	showPages.prototype.checkPages = function(){ //进行当前页数和总页数的验证
		if (isNaN(parseInt(this.page))) this.page = 1;
		if (isNaN(parseInt(this.pageCount))) this.pageCount = 1;
		if (this.page < 1) this.page = 1;
		if (this.pageCount < 1) this.pageCount = 1;
		if (this.page > this.pageCount) this.page = this.pageCount;
		this.page = parseInt(this.page);
		this.pageCount = parseInt(this.pageCount);
	}
	showPages.prototype.createHtml = function(){ //生成html代码
		var strHtml = '', prevPage = this.page - 1, nextPage = this.page + 1;
			strHtml += '<span class="count">总条数: ' + this.totalRecords + '</span>';
			strHtml += '<span class="number">';
		
			if (prevPage < 1) {
			  // strHtml += '<span title="First Page">&#171;</span>';
			} else {
			strHtml += '<span title="First Page"><a href="javascript:' + this.option.pageId + '.toPage(1);">&#171;</a></span>';
			//strHtml += '<span title="Prev Page"><a href="javascript:myPage.toPage(' + prevPage + ');">上一页</a></span>';
			}
			//if (this.page != 1)
			if (this.page < 5 && this.page > 1) strHtml += '<span title="Page 1"><a href="javascript:' + this.option.pageId + '.toPage(1);">1</a></span>';
			//if (this.page >= 5) strHtml += '<span title="Page 1"><a href="javascript:myPage.toPage(1);">1..</a></span>';//strHtml += '<span style="border:none; background:#FFF;"><a href="javascript:void(0)">1...</a></span>';
			if (this.page >= 5) strHtml += '<span title="Page 1"><a href="javascript:' + this.option.pageId + '.toPage(1);">1..</a></span>';//strHtml += '<span style="border:none; background:#FFF;"><a href="javascript:void(0)">1...</a></span>';
			if (this.pageCount > this.page + 2) {
			var endPage = this.page + 2;
			} else {
			var endPage = this.pageCount;
			}
			
			for (var i = this.page - 2; i <= endPage; i++) {
			if (i > 0) {
			  if (i == this.page) {
				 strHtml += '<span title="Page ' + i + '"><a href="javascript:void(0)" style="color:#FF9900;background:#DDD;">' + i + '</a></span>';
			  } else {
				if (i != 1 && i != this.pageCount) {
					//strHtml += '<span title="Page ' + i + '"><a href="javascript:myPage.toPage(' + i + ');">' + i + '</a></span>';
					strHtml += '<span title="Page ' + i + '"><a href="javascript:' + this.option.pageId + '.toPage(' + i + ');">' + i + '</a></span>';
				}
			  }
			}
			}
			//if (this.page + 3 <= this.pageCount) strHtml += '<span title="Page ' + this.pageCount + '"><a href="javascript:myPage.toPage(' + this.pageCount + ');">..' + this.pageCount + '</a></span>';//strHtml += '<span style="border:none; background:#FFF;"><a href="javascript:void(0)">..</a></span>';
			if (this.page + 3 <= this.pageCount) strHtml += '<span title="Page ' + this.pageCount + '"><a href="javascript:' + this.option.pageId + '.toPage(' + this.pageCount + ');">..' + this.pageCount + '</a></span>';//strHtml += '<span style="border:none; background:#FFF;"><a href="javascript:void(0)">..</a></span>';
			//if (this.page + 3 > this.pageCount && this.page != this.pageCount) strHtml += '<span title="Page ' + this.pageCount + '"><a href="javascript:myPage.toPage(' + this.pageCount + ');">' + this.pageCount + '</a></span>';
			if (this.page + 3 > this.pageCount && this.page != this.pageCount) strHtml += '<span title="Page ' + this.pageCount + '"><a href="javascript:' + this.option.pageId + '.toPage(' + this.pageCount + ');">' + this.pageCount + '</a></span>';
			if (nextPage > this.pageCount) {
			//strHtml += '<span title="Next Page">&#8250;</span>';//strHtml += '<span title="Last Page">&#187;</span>';
			} else {
			strHtml += '<span title="Next Page"><a href="javascript:' + this.option.pageId + '.toPage(' + nextPage + ');">下一页</a></span>';
			// strHtml += '<span title="Last Page"><a href="javascript:myPage.toPage(' + this.pageCount + ');">&#187;</a></span>';
			}	  
			
			if (this.pageCount < 1) {
			strHtml += '<input type="text" name="toPage" value="No Pages" class="mini_txt" disabled="disabled" style="margin-left:-10px;">';
			strHtml += '<input type="button" name="go" value="GO" class="mini_btn" disabled="disabled">';
			} else {
			//strHtml += '<input type="text" id="pageInput' + '" value="' + this.page + '" class="mini_txt" title="Input page" onkeydown="return ' + this.name + '.formatInputPage(event);" onfocus="this.select()" style="margin-left:-10px;">&nbsp;';
			strHtml += '<input type="text" id="pageInput' + '" value="' + this.page + '" title="Input page" onkeydown="return ' + this.name + '.formatInputPage(event);" onfocus="this.select()" style="margin-left:-15px;width: 20px">&nbsp;';
			//strHtml += '<input type="button" name="go" value="Go" class="mini_btn" onclick="myPage..toPage(document.getElementById(\'pageInput' + '\').value);">';
			strHtml += '<input type="button" name="go" value="Go" class="mini_btn" onclick="' + this.option.pageId + '.toPage(document.getElementById(\'pageInput' + '\').value);">';
			}
			strHtml += '</div>';
		return strHtml;
	}

	showPages.prototype.createUrl = function (page) { //生成页面跳转url
		if (isNaN(parseInt(page))) page = 1;
		if (page < 1) page = 1;
		if (page > this.pageCount) page = this.pageCount;
		var url = location.protocol + '//' + location.host + location.pathname;
		var args = location.search;
		var reg = new RegExp('([\?&]?)' + this.argName + '=[^&]*[&$]?', 'gi');
		args = args.replace(reg,'$1');
		if (args == '' || args == null) {
		args += '?' + this.argName + '=' + page;
		} else if (args.substr(args.length - 1,1) == '?' || args.substr(args.length - 1,1) == '&') {
		  args += this.argName + '=' + page;
		} else {
		  args += '&' + this.argName + '=' + page;
		}
		return url + args;
	}

	showPages.prototype.toPage = function(page){ //页面跳转
	  /*var turnTo = 1;
	  if (typeof(page) == 'object') {
		turnTo = page.options[page.selectedIndex].value;
	  } else {
		turnTo = page;
	  }
	  self.location.href = this.createUrl(turnTo);*/
	  //removeGird('myGrid');
	  if(page>=1 && page<=this.pageCount)
	  	__extQuery__(page, this.option);
	  //makeFormCall(this.url+"&curPage="+page,callBack,'fm');
	}
	
	showPages.prototype.printHtml = function(){ //显示html代码
  		//this.getPage();	
		//this.checkPages();
		//var pageBox = this.name;
		$("#"+this.option.pageId).html(this.createHtml());
		//callBack();
	}

	showPages.prototype.formatInputPage = function(evt){ //限定输入页数格式
		var evt=evt?evt:(window.event?window.event:null);
		if(evt.keyCode == 13 && $("pageInput").value>=1 && $("pageInput").value<=this.pageCount){
			__extQuery__($F("pageInput"));	
		}
		/*var ie = navigator.appName=="Microsoft Internet Explorer"?true:false;
		if(!ie) var key = e.which;
		else var key = event.keyCode;
		if (key == 8 || key == 46 || (key >= 48 && key <= 57)) return true;
		return false;*/
	 }

	 
	 /*============================================查询效果 部分===========================================*/
		function disableBtn(obj){
			//obj.disabled = true;
			obj.attr("disabled",true);
			//obj.style.border = '1px solid #999';
			//obj.style.background = '#EEE';
			//obj.style.color = '#999';
			showMask();
		}
		function disableBtn2(obj){
			obj.disabled = true;
			obj.style.border = '1px solid #999';
			obj.style.background = '#EEE';
			obj.style.color = '#999';
			//showMask();
		}
		function useableBtn(obj){
//			obj.disabled = false;
//			obj.style.border = '1px solid #5E7692';
//			obj.style.background = '#EEF0FC';
//			obj.style.color = '#1E3988';
			obj.attr("disabled",false);
			obj.css("border","1px solid #5E7692");
			obj.css("background","#EEF0FC");
			obj.css("color","#1E3988");
			removeMask();
		}
		/*
		function showMask(){
			if($("#loader")){
				var screenW = $(window).width()/2;
				//$('loader').style.left = (screenW-20) + 'px';
				$("#loader").html(" 正在载入中... ")
				$("#loader").show();
			}
		}
		
		function removeMask(){
			if($("#loader"))
				$("#loader").hide();
		}
		*/
		/**function showMask(){
			var divObj = document.createElement("div");
			divObj.innerHTML = '<div>正在载入中...</div>';
			var screenW = document.viewport.getWidth()/2;	
			divObj.style.left = screenW + 'px';
			divObj.style.zIndex = 200;
			divObj.style.position = 'absolute';
			divObj.style.background = '#FFCC00';
			divObj.style.padding = '1px';
			divObj.style.top = '4px';
			divObj.id = 'loader';	
			document.body.appendChild(divObj);	
		}
		
		function removeMask(){
			$('loader').remove();
		}*/

	function selectTheRrRadio(ck){
//		var t = ck.cells[0].childNodes[0];
//		t.checked = true;
		$(".myTdYel").css({ 'background-color':'' });
//		$(".myTdYel").removeAttr("style");
		$(".myTdYel").removeClass("myTdYel");
		 var c  = ck.cells[0].childNodes[0].childNodes[0];
		 var x = c.className;
		 if(x==""||x==null){
			 $(".myVail").removeClass("checked");
			 $(".myVail").removeClass();
			 c.className='checked myVail';
			 c.childNodes[0].checked=true;
			 $(ck).find("td").addClass("myTdYel");
			 $(ck).find("td").css({ 'background-color':'#F9F900' });
		 }else{
			 $(c).removeClass();
			 c.childNodes[0].checked=false;
		 }
	}
	
	/**
	 * 点击checkBox事件
	 * @param ck
	 */
	function selectTheCheckBox(ck){
		 var c  = ck.cells[0].childNodes[0].childNodes[0]; 
		 var x = c.className;					   
		 if(x==""||x==null){					  
			 c.className='checked';				   
			 c.childNodes[0].checked=true;	
			 $(ck).find("td").addClass("myTdYel");
			 $(ck).find("td").css({ 'background-color':'#F9F900' });
		 }else{	
			 $(ck).find("td").css({ 'background-color':'' });
//			 $(ck).find("td").removeAttr("style");
			 $(ck).find("td").removeClass("myTdYel");
			 $(c).removeClass();				   
			 c.childNodes[0].checked=false;		  
		 }
	}
	
	function checkYouSee(ck){
		$(".myTdYel").css({ 'background-color':'' });
//		$(".myTdYel").removeAttr("style");
		$(".myTdYel").removeClass("myTdYel");
		 var c  = ck.cells[0].childNodes[0].childNodes[0];
		 var x = c.className;
		 if(x==""||x==null){
			 $(".myVail").removeClass("checked");
			 $(".myVail").removeClass();
			 c.className='checked myVail';
			 c.childNodes[0].checked=true;
			 
			 $(ck).find("td").addClass("myTdYel");
			 $(ck).find("td").css({ 'background-color':'#F9F900' });
		 }else{
			 $(c).removeClass();
			 c.childNodes[0].checked=false;
		 }
	}
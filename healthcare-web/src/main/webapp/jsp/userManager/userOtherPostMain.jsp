<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<div class="modal-header" style="margin-bottom: 9px;">
	<button type="button" class="close" data-dismiss="modal"
		aria-hidden="true"></button>
	<h4 class="modal-title">用户管理 - 岗位列表</h4>
</div>
<div class="modal-body">
<!-- BEGIN FORM-->
<form class="form-horizontal" role="form" name="mf" id="mf">
<input type="hidden" id="curPage" value="" />
<!-- BEGIN PAGE CONTENT-->    
<div class="tab-pane " id="tab_2">
	<div class="portlet box grey">
		<div class="portlet-title">
			<div class="caption"><i class="fa fa-reorder"></i>查询条件</div>
			<div class="tools">
				<a href="javascript:;" class="collapse"></a>
			</div>
		</div>
		<div class="portlet-body form">
				<div class="form-body">
					<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label col-md-3">岗位代码</label>
									<div class="input-group col-md-9">
										<input type="text" class="form-control" placeholder="岗位代码" id="postCode" name="postCode">
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="control-label col-md-3">岗位名称</label>
									<div class="input-group col-md-9">
										<input type="text" class="form-control" placeholder="岗位名称" id="postName" name="postName">
									</div>
								</div>
						  </div>
					</div>
						<!--/span-->
					<!--/row-->
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="control-label col-md-3">职位代码</label>
								<div class="input-group col-md-9">
									<input type="text" class="form-control" placeholder="职位代码" id="positionCode" name="positionCode">
								</div>
							</div>
						</div>
						<!--/span-->
						 <div class="col-md-6">
							<div class="form-group">
								<label class="control-label col-md-3">职位名称</label>
								<div class="input-group col-md-9">
									<input type="text" class="form-control" placeholder="职位名称" id="positionName" name="positionName">
								</div>
							</div>
						  </div>
					</div>
						<!--/span-->
						<div class="form-group col-md-12">
							<div class="pull-right">
								<button class="btn red btn-sm" type="button" id="btn_search"  onclick="query()"><i class="fa fa-search"></i> 查  询</button>  
							</div>
						</div>  
				</div>  
		</div>
	</div>
</div>
<!-- table -->
<div class="portlet box grey">
	<div class="portlet-title">
	  <div id="caption" class="caption"> <i class="fa fa-cogs"></i> 查询结果
	  </div>
	  <div class="actions">
		  	<span id="otherPageSize"><script type="text/javascript">getPageSizeSelect('pageSize','pageSize','',"onchange='__extQuery__(1,m_option)'",'','otherPageSize');</script></span>
			<button type="button" onclick="jumpAddUserPost()" class="btn green btn-sm"><i class="fa fa-plus "></i> 选择</button>
		</div>
	</div>
	
	<!-- table -->
	<div class="portlet-body " id="data-body">
	  <!-- 开始 查询列表 -->
	  	<input type="hidden" id="orderCol" name="orderCol" value="" />
		<input type="hidden" id="order" name="order" value="" />
		<div id="new_page" class="alert alert-warning" style="margin-top:15px;" align='center'>没有满足条件的信息</div>
		<div id="newmyGrid" class="table-responsive table-scrollable"></div>
		<div class="row">
			<div id="newmyPage" class="pages dataTables_paginate paging_bootstrap" style="margin-right: 20px"></div>
		</div>
	</div>
<!-- END PAGE CONTENT-->
</div>
</form>
<!-- END FORM-->  
</div>
<div class="modal-footer">
	<button type="button" class="btn default" data-dismiss="modal">Close</button>
</div>
<script type="text/javascript">
	var m_option = {
		url:"UserOtherPostMsg.action?userId=${userId}",
		title:null,
		tableClass:null,
		formId:"mf",
		 gridId:"newmyGrid",
		 blankId:"new_page",
		 pageId:"newmyPage",
		 useRadio:true,
		columns : [
			{header: "", width: "3%", dataIndex: "postId",renderer: getNewRadio},//设置序号的方式
			{header: "岗位代码", width: "6%", dataIndex: "postCode"},
			{header: "岗位名称", width: "6%", dataIndex: "postName"},
			{header: "职位代码", width: "6%", dataIndex: "positionCode"},
			{header: "职位名称", width: "6%", dataIndex: "positionName"}
		]
	};
	function getNewRadio(value, metaDate, record){
		return "<div class='radio'><span style='margin-top:-6px;'><input name=\"newIndexId\"  value="+value+" type=\"radio\"></input></span></div>";
	} 
	jQuery(document).ready(function() {
		__extQuery__(1,m_option);
	});
	function query() {
		__extQuery__(1,m_option);
	};
	function jumpAddUserPost(){
		var intHot = $("input[name='newIndexId']:checked").val();
		if(intHot != null && intHot != ""){
			sendAjaxRequest("UserPostSave.action?postId="+intHot+"&userId=${userId}","mf",retUserSearch);
		}else{
			tipWarning("请选择要操作行!");
			return;
		}
	}
	function retUserSearch(data){
		if(data>0){
			tipSuccess("添加成功");
			__extQuery__(1,m_option);
	       	 __extQuery__(1,option);
	       	$("input[name='newIndexId']:checked").removeAttr("checked");
		}else{
			alert("保存失败");
			tipError("保存失败");	
			return;
		}
	}
</script>


//器具型号JS
function showUtensilTypeWindow(callBackFunction){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showUtensilTypeWindow.load('utensiltype/skipUtensilTypeWindowPage.action?callBackFunction='+callBackFunction, function(){
			$showUtensilTypeWindow.modal();
		});
	}, 100);
}
//物料信息弹出窗
//isDouble是否多选
//存储策略 fixcode
function showMaterialWindow(isDouble,strategy,callBackFunction){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showMaterialWindow.load('utensil/skipMaterialWindowPageResult.action?isDouble='+isDouble+'&strategy='+strategy+'&callBackFunction='+callBackFunction, function(){
			$showMaterialWindow.modal();
		});
	}, 100);
}
//添加器具型号窗口
function showOperateUtensilTypeWindow(){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showOperateUtensilTypeWindow.load('utensiltype/skipOperateUtensilTypeWindowPage.action', function(){
			$showOperateUtensilTypeWindow.modal();
		});
	}, 100);
}
//选择库位
function showUtensilStorageWindow(callBackFunction){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showUtensilStorageWindow.load('utensil/skipUtensilStoragePageResult.action?callBackFunction='+callBackFunction, function(){
			$showUtensilStorageWindow.modal();
		});
	}, 100);
}
//存储位与物料关系
function showStorageMaterialWindow(storageId){ 
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showStorageMaterialWindow.load('storage/skipStorageMaterialWindowPage.action?storageId='+storageId, function(){
			$showStorageMaterialWindow.modal();
		});
	}, 100);
}
//器具类型与物料关系
function showUtensilTypeMaterialWindow(typeId){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showUtensilTypeMaterialWindow.load('utensiltype/skipUtensilTypeMaterialWindowPage.action?typeId='+typeId, function(){
			$showUtensilTypeMaterialWindow.modal();
		});
	}, 100);
}
//移库-库存选择
function showMovementWindowInventoryWindow(inventoryIds,callBackFunction){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showMovementWindowInventoryWindow.load('movement/skipMovementWindowInventoryPage.action?inventoryIds='+inventoryIds+'&callBackFunction='+callBackFunction, function(){
			$showMovementWindowInventoryWindow.modal();
		});
	}, 100);
}
//移库-零件与所以库位关系
function showMovementWindowStorageWindow(detailId,inventoryId,callBackFunction){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showMovementWindowStorageWindow.load('movement/skipMovementWindowStoragePage.action?detailId='+detailId+'&inventoryId='+inventoryId+'&callBackFunction='+callBackFunction, function(){
			$showMovementWindowStorageWindow.modal();
		});
	}, 100);
}
//移库-零件与所以库位关系
function showMovementWindowPrintWindow(transferId,isShow){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showMovementWindowPrintWindow.load('movement/skipPrintPage.action?transferId='+transferId+"&isShow="+isShow, function(){
			$showMovementWindowPrintWindow.modal();
		});
	}, 100);
}
//打印-储位代码打印
function showStoragePrintWindow(){
	$('body').modalmanager('loading');
	setTimeout(function(){
		$showStoragePrintWindow.load('storage/skipStoragePrintPage.action', function(){
			$showStoragePrintWindow.modal();
		});
	}, 100);
}
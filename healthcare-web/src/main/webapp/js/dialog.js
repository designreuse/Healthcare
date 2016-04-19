/* ================ function MyConfirm() ============================*/
function MyConfirm(info, yCbMth, cFunc){
	try{
		fullDiv = _crtFullDiv();
		fullIframe = _ctrFullIframe();
		modalDiv = _crtModalDiv();
		backDiv = _crtBackDiv();
		contDiv = _crtContentDiv();

		var contStr = str_dialog_confirm.replace(new RegExp('PARAM_content','gm'),info);
		contStr= contStr.replace(new RegExp('PARAM_REMOVE','gm'),'_remove_D(\''+contDiv+'\',\''+backDiv+'\',\''+modalDiv+'\',\''+fullIframe+'\',\''+fullDiv+'\')');
		contStr= contStr.replace(new RegExp('PARAM_yCbMth','gm'),yCbMth);
		contStr= contStr.replace(new RegExp('PARAM_cFunc','gm'),cFunc);
		
		$("#"+contDiv).update(contStr);
		
		_setDSize(300, 200);	
		$("#"+fullDiv).show();
		$("#"+fullIframe).show();
		$("#"+modalDiv).show();
		$("#"+backDiv).show();
		$("#"+contDiv).show();	
		_setDSize(300, $("#"+contDiv).down().offsetHeight);
	}catch(e){
		alert('MyAlert : '+ e.name+'='+e.message);
	}
}

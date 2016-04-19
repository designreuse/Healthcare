var player=null;
function initWavPalyer(playId){
	if (playId!=null && playId!=''){
		player=$("#"+playId);
	}
}
//go_storage 进入上架扫描管理
//
function playWav(playKey,flag){
	if (player!=null && playKey!=null && playKey!=''){
		var srcWav='';
		if (playKey=='go_storage'){
			if (flag==true){
				srcWav='js/hand_ui/easy_css/wav/go_storage.mp3';
			}else{
				srcWav='js/hand_ui/easy_css/wav/no_status.mp3';
			}
		}
		player.attr('src',srcWav);
	}
}
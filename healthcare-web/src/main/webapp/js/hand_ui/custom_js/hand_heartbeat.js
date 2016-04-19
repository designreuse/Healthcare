var sessionDateTime=0;
//设置间隔检测心跳时间 
var initInterval=0;
//初始化启动心跳程序 sessionTimeOut：session超时时间 heartBeatTime：监听心跳间隔时间  isStart==true 启动心跳程序
function initHeartBeat(sessionTimeOut,heartBeatTime,isStart){
	if (isStart==true){
		sessionDateTime=parseInt(sessionTimeOut);
		initInterval=parseInt(heartBeatTime);
		startHeartBeat();
	}
}
//setInterval对象
var heartBeatInterval=null;
//开始调用
function startHeartBeat(){
	heartBeatInterval=setInterval(intervalCallBack,initInterval);
}
//结束调用
function stopHeartBeat(){
	if (heartBeatInterval!=null){
		clearInterval(heartBeatInterval);
	}
}
//检测心跳处理逻辑
var intervalDateTime=0;
function intervalCallBack(){
	var random=Math.random();
	intervalDateTime=intervalDateTime+initInterval;
	if (intervalDateTime>sessionDateTime){
		$.ajax({
			url : "handheartbeat/getHandHeartBeat.action?mr="+random,
			type : "post",
			dataType : "json",
			timeout : 1000,
			success : function(json) {
				if(strToBoolean(json.success)==true){
					intervalDateTime=0;
				}else{
					stopHeartBeat();
					errorDialog();
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrow) {
				if (textStatus=='timeout'){
					stopHeartBeat();
					timeOutError();
				}
			}
		});
	}
}
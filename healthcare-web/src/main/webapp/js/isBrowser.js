
/**
 * 判断是否IE浏览器并且是什么版本
 * 返回0不是IE浏览器
 * @returns {Number}
 */
function isBrowserForIEVersion() {
	var browser = navigator.appName;
	if(browser != "Microsoft Internet Explorer"){
		return 0;
	}
	var b_version = navigator.appVersion;
	var version = b_version.split(";"); 
	var trim_Version = version[1].replace(/[ ]/g,""); 
	if(trim_Version == "MSIE6.0") { 
		return 6;
	} else if(trim_Version == "MSIE7.0") { 
		return 7;
	} else if(trim_Version == "MSIE8.0") { 
		return 8;
	} else if(trim_Version == "MSIE9.0") { 
		return 9;
	} else if(trim_Version == "MSIE10.0") { 
		return 10;
	} 
}
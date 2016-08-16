function menu() {

}
function tabMenu(list,idx) {
	var tabBtn = list.find('a')
		,tabClass = 'tabItem'+tabBtn.length+''
		,tabCon;
	
	list.addClass(tabClass);
	tabBtn.parent().eq(idx).addClass('current');
	if (list.next().find('.tabCon').length) {
		tabCon = list.next().find('.tabCon');
		tabCon.eq(idx).addClass('on');
	}	
	tabBtn.click(function(){
		var _this = $(this)
			idx = _this.parent().index();
		tabBtn.parent().removeClass('current');
		_this.parent().addClass('current');
		if (list.next().find('.tabCon').length) {
			tabCon.removeClass('on');
			tabCon.eq(idx).addClass('on');
		}
		return false;
	});
}
function layerOpen(layer,_this) {
	layer.fadeIn(200);
}
function layerClose(layer) {
	layer.fadeOut(200);
}
function pageTop() {
	$('html, body').animate({scrollTop : 0},200);
}
function setCookie(name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookie(name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");

		if (x==name) return unescape(y);
	}
}
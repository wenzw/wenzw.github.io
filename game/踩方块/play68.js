function play68_init() {
	updateShare(0);
}

function updateShare(bestScore) {
	imgUrl = 'http://app.46465.com/html5/heibai/logo.png';
	var domains = ['app.46465.com','app.46465.com','app.46465.com','app.46465.com'];
	var domain = domains[new Date().getTime()%4];
	lineLink = 'http://app.46465.com/html5/heibai/';
	descContent = "史上导致最多手指和眼珠抽筋的游戏（别踩白块儿）！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我在《别踩白块儿》成绩" + bestScore + "，手指抽筋啦！";
	}
	else{
		shareTitle = "史上导致最多手指和眼珠抽筋的游戏（别踩白块儿）！";
	}
}
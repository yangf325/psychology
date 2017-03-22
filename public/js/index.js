var inf = {
	curp: 1,
}
var ele = {
	leftArr: $('.index-left'),
	rightArr: $('.index-right'),
	lis: $('.psy-li'),
	ul: $('.psy-ul'),
}
var funs = {
	lisMove: function(speed, num) {
		speed = speed || 500;
		num = num || 0;
		for (var i = ele.lis.length - 1; i >= 0; i--) {
			if (i == inf.curp + num) {
				ele.lis.eq(i).addClass('biggerLi').delay(600);
				ele.lis.eq(i).animate({
					left: 100 * (i - inf.curp) + 50 + '%'
				}, speed, function() {
					ele.leftArr.on('click', funs.leftEvent);
					ele.rightArr.on('click', funs.rightEvent);
				});
				setTimeout(function() {
					ele.lis.removeClass('biggerLi');
				}, 600 + speed);
			} else {
				ele.lis.eq(i).animate({
					left: 100 * (i - inf.curp) + 50 + '%',
				}, speed, 'swing');
			}
		}
	},
	fastMove: function() {
		for (var i = ele.lis.length - 1; i >= 0; i--) {
			ele.lis.eq(i).animate({
				'left': 100 * (i - inf.curp) + 50 + '%'
			}, 0);
		}
	},
	leftEvent: function() {
		ele.leftArr.off('click', funs.leftEvent);
		ele.rightArr.off('click', funs.rightEvent);
		inf.curp++;
		funs.lisMove(500, -1);
		if (inf.curp > 3) {
			inf.curp = 1;
			funs.fastMove();
		}
	},
	rightEvent: function() {
		ele.leftArr.off('click', funs.leftEvent);
		ele.rightArr.off('click', funs.rightEvent);
		inf.curp--;
		funs.lisMove(500, 1);
		if (inf.curp < 1) {
			inf.curp = 3;
			funs.fastMove();
		}
	}
}

$('.index').css({
	'width': window.screen.availWidth,
	'overflow': 'hidden'
})
ele.ul.prepend($(ele.lis[2]).clone()); //创建无缝副本
ele.ul.append($(ele.lis[0]).clone());
ele.lis = $('.psy-li');
inf.curp = 2;
funs.fastMove();

ele.leftArr.on('click', funs.leftEvent);
ele.rightArr.on('click', funs.rightEvent);
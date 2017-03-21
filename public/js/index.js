var inf={
	curp:1,
}
var ele={
	leftArr:$('.index-left'),
	rightArr:$('.index-right'),
	lis:$('.psy-li'),
	ul:$('.psy-ul'),
}

$('.index').css({'width':window.screen.availWidth,'overflow':'hidden'})
ele.ul.prepend($(ele.lis[2]).clone());//创建无缝副本
ele.ul.append($(ele.lis[0]).clone());
ele.lis=$('.psy-li');
inf.curp=2;
ele.lis.each(function(i){
	ele.lis.eq(i).css('left',i*50+'%')
})

ele.leftArr.click(function(){
	console.log(ele.lis.eq(inf.curp).css('left'));
	ele.lis.eq(inf.curp).animate({
		left:ele.lis.eq(inf.curp).css('left').slice('%')[0]-50+'%',
		opacity:'0',
		filter:'alpha(opacity=0)',
	},800);
	ele.lis.eq(inf.curp+1).animate({
		left:ele.lis.eq(inf.curp+1).css('left').slice('%')[0]+50+'%',
		opacity:'1',
		filter:'alpha(opacity=100)',
	},800);
})
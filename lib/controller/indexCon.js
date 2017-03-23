exports.getted=function(req,res,next){
	res.render('./index',{title:'心理测试系统'})
	next()
}
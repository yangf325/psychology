var express = require('express');
var path = require('path');
var _ = require('underscore');
var mongoose = require('mongoose');
// var Movie = require('./models/movie')
var serverStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

//加载本地控制器
var index=require('./lib/controller/indexCon');
var testMain=require('./lib/controller/testMainCon');
var testPage=require('./lib/controller/pageCon');
var testResult=require('./lib/controller/resultCon');
var artList=require('./lib/controller/artListCon');
var artDist=require('./lib/controller/artDistCon');
var messBoard=require('./lib/controller/messCon');

app.use('/index',index.test);
app.use('/testMain',testMain.test);
app.use('/testPage',testPage.test);
app.use('/testResult',testResult.test);
app.use('/artList',artList.test);
app.use('/artDist',artDist.test);
app.use('/messBoard',messBoard.test);



// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/psychology');

app.set('views', path.join(__dirname, '/public/views/pages'));
app.set('view engine','jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(serverStatic('public'));

app.listen(port);
console.log('Server is running at '+port);

app.get('/index',function(req,res){
	console.log('rended');
	res.render('index',{title:'心理测评系统'});
})
var express = require('express');
var myRoot = express.Router();


// 载入控制器
var indexCon = require('./lib/controller/indexCon');
var artDistCon = require('./lib/controller/artDistCon');
var artListCon = require('./lib/controller/artListCon');
var testMainCon = require('./lib/controller/testMainCon');
var testPageCon = require('./lib/controller/testPageCon');
var testResultCon = require('./lib/controller/testResultCon');
var messBoardCon = require('./lib/controller/messBoardCon');

//管理页面
var testAdminCon = require('./lib/controller/testAdminCon');


myRoot.get('/',indexCon.getted);
myRoot.get('/index',indexCon.getted);
myRoot.get('/testAdmin',testAdminCon.getted);
myRoot.post('/testAdmin',testAdminCon.posted);



module.exports = myRoot; 

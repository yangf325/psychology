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

myRoot.get('/',indexCon.test);
myRoot.get('/index',indexCon.test);









module.exports = myRoot; 

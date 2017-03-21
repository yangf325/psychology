var express = require('express');
var index = express.Router();

// 控制器
var mainCon = require('../controller/mainCon')

index.get('/:cid',mainCon.getMain);

module.exports = cat;
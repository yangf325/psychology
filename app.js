var express = require('express');
var path = require('path');
var _ = require('underscore');
var mongoose = require('mongoose');
var serverStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

//加载本地路由
var rooter=require('./rooter');
app.use('/',rooter);

// mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/psy');

app.set('views', path.join(__dirname, '/public/views/pages'));
app.set('view engine','jade');

app.use(bodyParser.json());//数据表单格式化
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'bower_components')));

app.listen(port);
console.log('Server is running at '+port);


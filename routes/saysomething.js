var express = require('express');
var router = express.Router();

var user = require('../models/user.js');
var cryptoStr = require('../config/crypto_config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = user.find(function(err, data){
		if(err){
			console.log(err);
		}
		else{
			res.render('saysomething', {data:data});
		}
	});

});

//检查用户是否存在
router.get('/checkUser', function(req,res){
	var con = {
		author: req.query.username
	};

	user.findOne(con,function(err,data){
		if(data){
			res.send('used');
		}
		else{
			res.send('ok');
		}
	});
});

router.post('/getData', function(req, res) {
	//可以检验数据的安全性 CSRF

	//post返回来的数据
	var data = {
		author : req.body.author,
		text : req.body.text,
		//邮箱的加密处理
		email : cryptoStr(req.body.email)
	};

	user.create(data,function(err,msg){
		console.log(err);
		console.log(msg);
	});
	// res.sendStatus(200);
	// res.redirect('/saysomething');
});

module.exports = router;

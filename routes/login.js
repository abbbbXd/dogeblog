var express = require('express');
var router = express.Router();

var cryptoStr = require('../config/crypto_config.js');
var pwd = require('../models/pwd.js');

router.get('/',function(req,res,next){
	res.render('login');
});

router.post('/checkPwd',function(req,res){
	var data = {
		pwd: req.body.pwd
	};

	pwd.findOne(data,function(err,data){
		if(data){
			res.send('password correct');
		}
		else{
			res.send('password incorrect');
		}
	});
});

router.post('/admin',function(req,res){
	res.render('admin');
});

module.exports = router;
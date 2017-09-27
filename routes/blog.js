var express = require('express');
var router = express.Router();

var blog = require('../models/blog.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = blog.find({},null,{sort: {takeMesTime: -1}},function(err,data){
		if(err){
			console.log(err);
		}
		else{
			    res.render('blog', {data: data});
		}
	});
});

module.exports = router;

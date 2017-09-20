var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('saysomething');
});

router.post('/getData', function(req, res) {
	console.log(req.body);

	//数据处理
	//loading
	//页面无刷新重开
	res.send(req.body);
	// res.sendStatus(200);
	// res.redirect('/saysomething');
});

module.exports = router;

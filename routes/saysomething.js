var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('saysomething');
});

router.post('/getData', function(req, res, next) {
	console.log(req.body.data);
});

module.exports = router;

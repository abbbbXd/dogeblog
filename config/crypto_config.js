var crypto = require('crypto');

var secret = 'fish';

// var sha1 = crypto.createHash('sha1');

function cryptoStr(str){
	//sha1的加密方式，secret为口令
	var hmac = crypto.createHmac('sha1',secret);

	//加密，16进制
	var newStr = hmac.update(str).digest('hex');

	//返回
	return newStr;
}

module.exports = cryptoStr;
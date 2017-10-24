var crypto = require('crypto');

var secret = 'fish';

// var sha1 = crypto.createHash('sha1');

function cryptoStr(str){
	//sha1的加密方式，secret为口令
	var cipher = crypto.createCipher('aes192',secret);

	//加密，16进制
	var crypted = cipher.update(str,'utf-8','hex');

	crypted += cipher.final('hex');
	//返回
	return crypted;
}

module.exports = cryptoStr;
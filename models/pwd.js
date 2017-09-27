var mongoose = require('mongoose');
var moment = require('moment');

var pwdSchema = new mongoose.Schema({
	pwd: {
		type: String,
		unique: true
	}
});

var pwd = mongoose.model('pwd',pwdSchema,'pwd');

module.exports = pwd;
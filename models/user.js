var mongoose = require('../config/db_config.js');
var dateformat = require('dateformatter').format;

var userSchema = new mongoose.Schema({
	author: {
		type: String,
		unique: true
	},
	text: {
		type: String
	},
	email: {
		type: String
	},
	takeMesTime: {
		type: String,
		default : dateformat('Y-m-d H:i:s')
	},
	lastTakeMesTime: {
		type: String,
		default: dateformat('Y-m-d H:i:s')
	}
});

//创建模型，默认的集合为users
var user = mongoose.model('user',userSchema);

module.exports = user;
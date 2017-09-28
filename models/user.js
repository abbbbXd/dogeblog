var mongoose = require('../config/db_config.js');
var moment = require('moment');

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
		default : moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
	},
	lastTakeMesTime: {
		type: String,
		default: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
	},
	ip: {
		type: String,
		default: null
	}
});

//创建模型，默认的集合为users
var user = mongoose.model('user',userSchema);

module.exports = user;
var mongoose = require('../config/db_config.js');

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
		type: Date,
		default : Date.now
	},
	lastTakeMesTime: {
		type: Date,
		default: Date.now
	}
});

//创建模型，默认的集合为users
var user = mongoose.model('user',userSchema);

module.exports = user;
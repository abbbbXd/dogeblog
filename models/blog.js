var mongoose = require('../config/db_config.js');
var dateformat = require('dateformatter').format;

var blogSchema = new mongoose.Schema({
	title: {
		type: String
	},
	text: {
		type: String
	},
	time: {
		type: String,
		date: dateformat('Y-m-d H:i:s')
	},
	label: {
		type: Array
	}
});

var blog = mongoose.model('blog',blogSchema);

module.exports = blog;
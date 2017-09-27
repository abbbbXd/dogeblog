var mongoose = require('../config/db_config.js');
var moment = require('moment');

var timestamp = Date.parse(new Date());

var blogSchema = new mongoose.Schema({
	title: {
		type: String
	},
	text: {
		type: String
	},
	time: {
		type: String,
		date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
	},
	label: {
		type: Array
	}
});

var blog = mongoose.model('blog',blogSchema);

module.exports = blog;

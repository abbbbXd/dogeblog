var mongoose = require('mongoose');

var dbUrl = 'mongodb://bbbbb:bbbbb@localhost:27017/dogeblog';

mongoose.connect(dbUrl,{useMongoClient: true},function(err){
	if(err){
		console.log('连接数据库失败');
	}
});

module.exports = mongoose;
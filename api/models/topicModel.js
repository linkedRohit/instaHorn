var db=require('../backendComponents/dbConnection'); //reference of dbconnection.js

var Topic={
	getAllTopics:function(callback){
		return db.query("Select * from topics",callback);
	},

	getTopicById:function(id,callback){
		return db.query("select * from topics where tid=?",[id],callback);
	},

	addTopic:function(Topic,callback){
		return db.query("Insert into topics (description, uid, postedOn) values(?,?,now())",[Topic.description,Topic.uid],callback);
	},

	deleteTopic:function(id,callback){
		return db.query("delete from topics where tid=?",[id],callback);
	},

	updateTopic:function(id,Topic,callback){
		return db.query("update topics set description=?,active=? where tid=?",[Topic.description,Topic.activeFlag,Topic.tid],callback);
	}
};

module.exports=Topic;
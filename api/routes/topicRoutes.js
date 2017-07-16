var express = require('express');
var router = express.Router();
var Topic=require('../models/topicModel');

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		Topic.getTopicById(req.params.id,function(err,rows){
			if(err)
			{
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
	else{		
		Topic.getAllTopics(function(err,rows){
			if(err)
			{
				res.json(err);
			}
			else
			{
				res.json(rows);
			}
		});
	}
});

router.post('/',function(req,res,next){
	req.body.uid = 1;
	Topic.addTopic(req.body,function(err,count){
		if(err)
		{
			res.json(err);
		}
		else{
		  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
		}
	});
});

router.delete('/:id',function(req,res,next){
	Task.deleteTask(req.params.id,function(err,count){

		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(count);
		}
	});
});

router.put('/:id',function(req,res,next){
	Task.updateTask(req.params.id,req.body,function(err,rows){

		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(rows);
		}
	});
});


//module.exports=router;


'use strict';
module.exports = function(app) {
  var topicModule = require('../controllers/topicsController');


  // topicModule Routes
  app.route('/topics')
    .get(topicModule.list_all_topics)
    .post(topicModule.create_a_topic);


  app.route('/topic/:topic')
    .get(topicModule.read_a_topic)
    .put(topicModule.update_a_topic)
    .delete(topicModule.delete_a_topic);
};
var mysql=require('mysql');
var dbConnection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'debate'

});

module.exports=dbConnection;

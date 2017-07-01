var PORT, app, express, fs, jsonserver, path, proxy, url, _;

path = require('path');
express = require('express');
jsonserver = require('json-server');
proxy = require('express-http-proxy');
fs = require('fs');
url = require('url');
_ = require('lodash');

app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var sql = require('mysql');

var mysql = sql.createConnection({
    user: 'root',
    password: 'root',
    database: 'debate',
    host: 'localhost'
});

mysql.connect();

PORT = process.env.PORT || 3000;
process.env.PWD = process.cwd();

app.use('/assets', express["static"](path.join(process.env.PWD, 'assets')));
app.use('/views', express["static"](path.join(process.env.PWD, 'views')));

app.use('/api', proxy('127.0.0.1:8000', {
    forwardPath: function(req, res) {
      return '/api' + url.parse(req.url).path;
    }
}));

io.listen(app.listen(PORT, function() {
    return console.log('Listening to ' + PORT);
}));

// socket stuff
var socketList = {};
var userList = {};
/*
io.on('connection', function(socket){

    // ask for authentication
    socket.emit('auth');

    // initiates the page (authentication callback)
    socket.on('init', function(data){
        mysql.query('select * from users where accessToken = ?', [data.token], function(err, result){
            if(err) console.log('Error', err);
            result = result[0];

            _.set(socketList, socket.id, result);

            if(_.get(userList, result.uid, false) === false){
                _.set(userList, result.uid, []);
            }

            length = _.get(userList, result.uid, []).length;
            _.set(userList, [result.uid, length], socket.id);

        });
    });

    // on user disconnects
    socket.on('disconnect', function(){
        var userId = _.get(socketList, [socket.id, 'uid'], '-1');

        delete socketList[socket.id];
        var index = userList[userId].indexOf(socket.id);
        if(index >=0 ) {
            userList[userId].splice(index, 1);
        }
    });

});*/

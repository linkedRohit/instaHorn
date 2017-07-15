var PORT, app, express, fs, jsonserver, path, proxy, url, _, L, chalk;

path = require('path');
express = require('express');
jsonserver = require('json-server');
proxy = require('express-http-proxy');
fs = require('fs');
url = require('url');
_ = require('lodash');
chalk = require('chalk');

L = {
    info: function(a, b){
        console.log(chalk.blue('['+a+']'),b);
    },
    err: function(a, b){
        console.log(chalk.red('['+a+']'),b);
    }
}

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
app.use('/', express["static"](process.env.PWD));

io.listen(app.listen(PORT, function() {
    return console.log('Listening to ' + PORT);
}));

// socket stuff
var socketList = {};
var userList = {};

function processPage(socket, path){
    var page = new url.parse(path, true);

    switch(page.pathname){
        case '/views/debate.html':
            L.info('Page', path);
            debatePageInit(socket, page);
        break;
        case '/views/feed.html':
            L.info('Page', path);
            feedPageInit(socket, page);
        break;
        default:
            L.err('Page Not Found', path);
        break;
    }
}

function debatePageInit(socket, page){
    var id = page.query.id;
    mysql.query('select fullName, postedOn, description from topics ' +
                'join users on topics.uid = users.uid where tid = ?', [id], function(err, result){
        if(err) console.log('Error', err);
        result = result[0];
        L.info('Question', result.description);
        socket.emit('debate-ques', result);
    });
}

function feedPageInit(socket, page){
    mysql.query('select * from topics order by tid desc limit 10', function(err, result){
        if(err) console.log('Error', err);
        L.info('Loading Feeds', 'Yo!');
        socket.emit('feed-load', result);
    });
}

io.on('connection', function(socket){

    // ask for authentication
    socket.emit('auth');
    L.info(socket.id, 'User Connected');

    // initiates the page (authentication callback)
    socket.on('init', function(data){
        mysql.query('select * from users where accessToken not in (?)', [data.token], function(err, result){
            if(err) console.log('Error', err);
            result = result[0];
            L.info(result.uid, 'Authenticated');

            _.set(socketList, socket.id, result);

            if(_.get(userList, result.uid, false) === false){
                _.set(userList, result.uid, []);
            }

            length = _.get(userList, result.uid, []).length;
            _.set(userList, [result.uid, length], socket.id);

            socket.emit('verify', result);
        });
    });

    // on user disconnects
    socket.on('disconnect', function(){
        var userId = _.get(socketList, [socket.id, 'uid'], '-1');
        L.err(userId, 'User Disconnected');

        delete socketList[socket.id];
        var index = -1; //userList[userId].indexOf(socket.id);
        if(index >=0 ) {
            userList[userId].splice(index, 1);
        }
    });

    socket.on('comment', function(data){
        console.log(data);
    });

});

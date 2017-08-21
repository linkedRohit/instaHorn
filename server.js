var PORT, app, express, fs, jsonserver, path, proxy, url, _, L, chalk, Q, FB, fb;

path = require('path');
express = require('express');
favicon = require('serve-favicon');
logger = require('morgan');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
jsonserver = require('json-server');
proxy = require('express-http-proxy');
fs = require('fs');
url = require('url');
_ = require('lodash');
chalk = require('chalk');
Q = require('q');
FB = require('fb');
fb = new FB.Facebook({
    appId: '456012464779296',
    secret: 'eed306dedb6f6ea9f207bea6f4f534eb'
});

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


var cors=require('cors');

mysql.connect();

PORT = process.env.PORT || 3000;
process.env.PWD = process.cwd();

app.use('/assets', express["static"](path.join(process.env.PWD, 'assets')));
//app.use('/', express["static"](process.env.PWD));
app.use('/', express["static"](path.join(process.env.PWD, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cors());

app.use('/api', proxy('127.0.0.1:8000', {
    forwardPath: function(req, res) {
      return '/api' + url.parse(req.url).path;
  }
}));

io.listen(app.listen(PORT, function() {
    return console.log('Listening to ' + PORT);
}));

app.get('/topic/:id?*', function(req, res) {
    //socket.emit('fetch-question', req.params.id);
    L.info('123','123');
    res.send('123');
})

// socket stuff
var socketList = {};
var userList = {};
/*
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
        //    L.err('Page Not Found', path);
        break;
    }
}*/

function feedPageInit(socket, page, limit){
    var response = {};
    var limit = limit ? limit : 10;
    var page = page ? page*limit : 0;
    /*mysql.query('select * from topics where active = 1 order by tid desc limit 10', function(err, result){
        if(err) console.log('Error', err);
        L.info('fetching feeds', result.length);
        socket.emit('feed-load', result);
    });*/

    Q(undefined)
    .then(function(){
        var defer = Q.defer();
        L.info("SQL-QUERY", "select * from topics where active = 1 order by tid desc limit ?, ?");
        L.info("SQL-PARAMS", [page, limit]);

        mysql.query("select * from topics where active = 1 order by tid desc limit ?, ?", [page, limit], function(err, result){
            if(err) socket.emit('feed-last-page', 'end');
            response.feed = result;
            var topicList = [];
            var userList = [];
            for (var i = 0, len = result.length; i < len; i++) {
                topicList.push(result[i].tid);
                userList.push(result[i].uid);
            }
            defer.resolve({
                topicList: topicList,
                userList: userList
            });
        });

        return defer.promise;
    })
    .then(function(data){
        var defer = Q.defer();
        var userList = data.userList;

       mysql.query("select uid, fullName as name, fbid from users where uid in (?)", [userList], function(err, userResult) {
           if(err) return defer.reject(err);

           var userCount = {};
           for( var i = 0, len = userResult.length; i < len; i++) {
               userCount[userResult[i].uid] = userResult[i];
           }
           response.userCount = userCount;

           return defer.resolve(data.topicList);
       });

        return defer.promise;
    })
    .then(function(topicList){
        var defer = Q.defer();
        L.info("SQL-QUERY", "select tid, count(1) as totalComments from comments where tid in (?) group by tid");
        L.info("SQL-PARAMS", [topicList]);
        if( topicList.length <= 0 ) {
            socket.emit('feed-last-page', 'end');
        }
        mysql.query("select tid, count(1) as totalComments from comments where tid in (?) group by tid", [topicList], function(err, commentCountResult) {
            if(err) return defer.reject(err);
            L.info('comments count', commentCountResult);
            var commentCount = {};
            for (var i = 0, len = commentCountResult.length; i < len; i++) {
                commentCount[commentCountResult[i].tid] = commentCountResult[i].totalComments;
            }
            response.commentCount = commentCount;
            return defer.resolve(topicList);
        });
        return defer.promise;
    })
    .then(function(topicList){
        var defer = Q.defer();
        L.info("SQL-QUERY", "select tid, voteType, count(1) as responses from votes where tid in (?) group by tid, voteType");
        L.info("SQL-PARAMS", [topicList]);
        if( topicList.length <= 0 ) return defer.reject();
        mysql.query("select tid, voteType, count(1) as voteCount from votes where tid in (?) group by tid, voteType", [topicList], function(err, voteCountResult){
            if(err) return defer.reject(err);
            var voteCount = {};
            L.info('res', voteCountResult);
            for (var i = 0, len = voteCountResult.length; i < len; i++) {
                var tid = voteCountResult[i].tid;
                var voteType = voteCountResult[i].voteType;
                voteCount[tid] = voteCount[tid] ? voteCount[tid] : { 'total': 0, 'up': 0, 'down': 0 };
                voteCount[tid][voteType] = voteCountResult[i].voteCount;
                voteCount[tid]['total'] += voteCountResult[i].voteCount;
            }

            if(voteCountResult) {
                response.voteCount = voteCount;
            } else {
                response.voteCount = {};
            }
            //L.info("Response", response);
            defer.resolve(response);
        });
        return defer.promise;
    })
    .then(function(response){
      L.info("response", response);
        socket.emit('feed-load', response);
    })
    .catch(function(err){
      L.err("ERROR", err);
    });
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function getCommentsForPost(socket, data) {
    var id = data.id;
    var limit = data.limit ? data.limit : 20;
    var page = data.pageId ? data.pageId*limit : 0;
    L.info('data', data);
     var response = {};

     Q(undefined)
     .then(function(){

         var defer = Q.defer();
         L.info("SQL-QUERY", "select * from comments where tid = ? and active = 1 limit ?, ?");
         L.info("SQL-PARAMS", [id, page, limit]);

         mysql.query("select * from comments where tid = ? and active = 1 order by cid desc limit ?, ?", [id, page, limit], function(err, result){
             if(err) return defer.reject(err);

             response.comments = result;

             var userList = [];
             for (var i = 0, len = result.length; i < len; i++) {
                 userList.push(result[i].uid);
             }
             userList = userList.filter( onlyUnique );

             defer.resolve(userList);
         });

         return defer.promise;
     })
     .then(function(userList){

         var defer = Q.defer();

         L.info("SQL-QUERY", "select uid, fbid from users where uid in (?)");
         L.info("SQL-PARAMS", [userList]);

         if( userList.length <= 0 ) socket.emit('comment-last-page', 'end');

         mysql.query("select uid, fbid from users where uid in (?)", [userList], function(err, userMapping){
             if(err) return defer.reject(err);

             var userFbMappingList = {};
             for (var i = 0, len = userMapping.length; i < len; i++) {
                 userFbMappingList[userMapping[i].uid] = userMapping[i].fbid;
             }
             response.userFbMapping = userFbMappingList;
             return defer.resolve(response);
         });

         return defer.promise;
     })
     .then(function(response){
         L.info('sending comments', response.length);
         socket.emit('fetch-comments-receive', response);
     })
     .catch(function(err){
         L.err('getCommentsForPost', JSON.stringify(err));
     });
}

var Topics=require('./api/routes/topicRoutes');
app.use('/Topics',Topics);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log(err.message);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


function checkFacebookAccessTokenValidity(data) {
    var defer = Q.defer();
    fb.setAccessToken(data.accessToken);
    fb.api('/me', {
        fields: ['id','name','email', 'work']
    },
    function(response){
        response ? defer.resolve(response) : defer.reject(response);
    });

    return defer.promise;
};

function getUserFromDatabase(userData) {
    var defer = Q.defer();

    mysql.query('select * from users where fbid = ? and email = ?',
    [userData.id, userData.email],
    function(err, result){
        err ? defer.reject(err) : defer.resolve({ db: result, user: userData });
    });

    return defer.promise;
}

function registerUserInDatabase( data, token ){
    var defer = Q.defer();

    mysql.query('insert into users (fullName, accessToken, email, fbid) values (?,?,?,?)',
    [data.user.name, token, data.user.email, data.user.id],
    function(err, result){
        if(err) {
            defer.reject();
        } else {
            data.db = { id: result.insertId };
            defer.resolve(data);
        }
    });

    return defer.promise;
}

function updateUserInDatabase( data, token ){
    var defer = Q.defer();

    mysql.query('update users set accessToken = ? where fbid = ?',
    [token, data.id],
    function(err, result){
        err ? defer.reject() : defer.resolve();
    });

    return defer.promise;
}

function debatePageInit(socket, id){
    mysql.query('select tid, fullName, postedOn, description, tags, fbid from topics ' +
                'join users on topics.uid = users.uid where tid = ?', [id], function(err, result){
        if(err) console.log('Error', err);
        result = result[0];
        L.info('Question', result.description);
        socket.emit('debate-ques', result);
    });
}

io.on('connection', function(socket){

    // ask for authentication
    socket.emit('auth');
    L.info(socket.id, 'User Connected');

    // initiates the page (authentication callback)
    socket.on('init', function(data){
        L.info('Intializing Server Request', data.userID);

        if(typeof data.accessToken !== 'undefined' && typeof data.userID !== 'undefined') {

            Q(undefined)
            .then(function(){
                L.info('checkFacebookAccessTokenValidity', data.userID);
                return checkFacebookAccessTokenValidity(data);
            })
            .then(function(userData){
                L.info('getUserFromDatabase', userData.name);
                return getUserFromDatabase(userData);
            })
            .then(function(result){
                if( result.db.length == 0 ) {
                    L.info('registerUserInDatabase', result.user.email, result.user.id );
                    return registerUserInDatabase(result, data.accessToken);
                } else {
                    L.info('updateUserInDatabase', result.user.email, result.user.id );
                    result.db = result.db.pop();
                    updateUserInDatabase(result.user, data.accessToken);
                }
                return result;
            })
            .then(function(result){
                L.info('Sending User to Frontend', JSON.stringify(result.user));
                socket.emit('login-user-received', result.user);
                return result.db;
            })
            .then(function(result){
                L.info(result.uid, 'Authenticated');

                _.set(socketList, socket.id, result);

                if(_.get(userList, result.uid, false) === false){
                    _.set(userList, result.uid, []);
                }

                length = _.get(userList, result.uid, []).length;
                _.set(userList, [result.uid, length], socket.id);
            })
            .fail(function(err){
                L.error('Init Error', err);
            });
        }

        socket.on('disconnect', function(){
            var userId = _.get(socketList, [socket.id, 'uid'], '-1');
            L.err(userId, 'User Disconnected');

            delete socketList[socket.id];
            var index = -1; //userList[userId].indexOf(socket.id);
            if(index >=0 ) {
                userList[userId].splice(index, 1);
            }
        });

        socket.on('fetch-feed', function(data) {
            var page = (data && data.pageId) ? data.pageId : 0;
            feedPageInit(socket, page);
        });

        socket.on('fetch-question', function(id) {
            var response = {};
            Q(undefined)
            .then(function(){
                var defer = Q.defer();

                L.info("SQL-QUERY", "select tid, fullName, postedOn, description, fbid from topics join users on topics.uid = users.uid where tid = ?");
                L.info("SQL-PARAMS", [id]);
                mysql.query('select tid, fullName, postedOn, description, fbid from topics join users on topics.uid = users.uid where tid = ?', [id],
                function(err, result) {
                    if (err) {
                        defer.reject(err);
                    }
                    else {
                        response.question = result;
                        L.info(response, result);
                        defer.resolve(id);
                    }
                });
                return defer.promise;
            }).then(function(id) {
                var defer = Q.defer();
                L.info("SQL-QUERY", "select count(1) as voteCount, voteType, tid from users where tid = ?");
                L.info("SQL-PARAMS", [id]);

                mysql.query("select count(1) as voteCount, voteType from votes where tid = ? group by voteType", [id], function(err, voteResult){
                    if(err) return defer.reject(err);

                    var voteList = {};
                    for (var i = 0, len = voteResult.length; i < len; i++) {
                        voteList[voteResult[i].voteType] = voteResult[i].voteCount;
                    }
                    response.voteList = voteList;
                    return defer.resolve(id);
                });

                return defer.promise;
            }).then(function(id){
                L.info("SQL-QUERY", "select * from opinions where tid = ?  order by updatedOn desc");
                L.info("SQL-PARAMS", [id]);

                mysql.query("select * from opinions where tid = ?  order by updatedOn desc", [id], function(err, opinionResult){
                    if(err) return defer.reject(err);
                    response.opinionResult = opinionResult;
                    socket.emit('debate-ques', response);
                });
            }).fail(function(err) {
                L.error('Error while fetching question : '+id, err);
            });
        });

        socket.on('add-topic', function(data) {
            var userId = _.get(socketList, [socket.id, 'uid'], '-1');
            data.userId = userId;
            Q(undefined)
            .then(function(){
                L.info('starting debate', data.description);
                var defer = Q.defer();
                mysql.query("Insert into topics (description, uid, postedOn) values(?,?,now())", [data.description, data.userId],
                    function(err, result){
                        err ? defer.reject() : defer.resolve();
                    }
                );
                return defer.promise;
            }).fail(function(err){
                L.error('Error while starting new debate', err);
            })
            .then(function(){
                L.info('load feed for user', userId);
                feedPageInit(socket, 0);
            });
        });

        socket.on('fetch-comments', function(data) {
            var userId = _.get(socketList, [socket.id, 'uid'], '-1');
            data.userId = userId;
            Q(undefined)
            .then(function(){
                L.info('Fetching comments for post', data);
                getCommentsForPost(socket, data);
            }).fail(function(err){
                L.error('Error while fetching comments', err);
            })
        });


        socket.on('post-comment', function(data){
            var userId = _.get(socketList, [socket.id, 'uid'], '-1');
            Q(undefined)
            .then(function(){
                L.info('Writing a comment for post', [userId, JSON.stringify(data)]);
                var defer = Q.defer();
                if(!data.commentString) {
                    return false;
                }
                mysql.query("insert into comments (uid, tid, commentString, commentedOn) values (?,?,?, now())",[ userId, data.tid, data.commentString ],
                function(err, result){
                    err ? defer.reject(err) : defer.resolve(result);
                });
                return defer.promise;
            }).fail(function(err){
                L.err('Error while writing comment', err);
            }).then(function(result){
                L.info('Comment added', result);
                data.cid = result.insertId;
                data.uid = userId;
                socket.emit('comment-added', data);
            })
            .fail(function(err){
                L.err('Error while writing comments', err);
            });
        });

        socket.on('remove-comment', function(data){
            var userId = _.get(socketList, [socket.id, 'uid'], '-1');
            Q(undefined)
            .then(function(){
                L.info('Delete comment for post', [data]);
                var defer = Q.defer();
                mysql.query("delete from comments where tid = ? and cid = ? and uid = ?",[ data.tid, data.cid, userId ],
                function(err, result){
                    err ? defer.reject(err) : defer.resolve(result);
                });
                return defer.promise;
            }).fail(function(err){
                L.err('Error while writing comments', err);
            }).then(function(){
                L.info('Comment removed', true);
            });
        });

        socket.on('cast-vote', function(data){
          L.info('data', data);
            var userId = _.get(socketList, [socket.id, 'uid'], '-1');
            Q(undefined)
            .then(function(){
                L.info('Add vote in database', [data]);
                var defer = Q.defer();
                mysql.query("replace into votes(uid,tid,voteType) values(?,?,?);",[ userId, data.tid, data.voteType ],
                function(err, result){
                    err ? defer.reject(err) : defer.resolve(result);
                });
                return defer.promise;
            }).then(function(){
                L.info('Vote added to the database', true);
                socket.emit('vote-added', data);
            }).fail(function(err){
                L.err('Error while writing comments', err);
            });
        });

        socket.on('post-opinion', function(data){
          L.info('data', data);
            var userId = _.get(socketList, [socket.id, 'uid'], '-1');
            Q(undefined)
            .then(function(){
                L.info('Add opinion in database', [data]);
                var defer = Q.defer();
                if(!data.opinion) return;
                mysql.query("insert into opinions (uid,tid,opinion,opinionType) values(?,?,?,?)",[ userId, data.tid, data.opinion, data.opinionType ],
                function(err, result){
                    err ? defer.reject(err) : defer.resolve(result);
                });
                return defer.promise;
            }).then(function(){
                L.info('Opinion added to the database', true);
                socket.emit('opinion-added', data);
            }).fail(function(err){
                L.err('Error while writing comments', err);
            });
        });

    });

});

module.exports = app;

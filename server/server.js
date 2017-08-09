/** dependencies **/
var 
    express         = require('express'),
    sql             = require('mysql'),
    socket          = require('socket.io'),
    http            = require('http'),
    models          = require('./models'),
    path            = require('path'),
    Q               = require('q');

function app(opts){
    var 
        self            = this;

        // global vars
        self.PORT       = 3000;

        // loading server elements
        self.express    = express();
        self.http       = http.Server(self.express);
        self.io         = socket(self.http);
        
        // load configurations
        self.logger     = opts.logger;
        self.config     = opts.config;
        
        self.mysql      = sql.createConnection(opts.config.mysql);
        
        self.models     = new models(self);
}


app.prototype.start = function () {
    var 
        self    = this;
        
        Q(undefined)
        .then(function(){
            self.logger.info('Connecting MySQL');
            return self._connectToMySQL();
        })
        .then(function(){
            self.logger.info('Starting Express Server');
            return self._startExpressServer();
        })
        .then(function(listener){
            self.logger.info('Starting Socket Server');
            return self._startSocketServer(listener);
        })
        .then(function(){
            var defer = Q.defer();
            
            self.logger.info('Starting Model Services');
            return self.models.start(function(err){
                err ? defer.reject(err) : defer.resolve();
            });
            
            return defer.promise;
        })
        .then(function(){
            self.logger.info('Setting up the Directories');
            
            self.express.use('/assets', express["static"](path.join(process.env.PWD, '../assets')));
            self.express.use('/', express["static"](path.join(process.env.PWD, '../')));
        })
        .catch(function(err){
            self.logger.error('App::start', err);
        });
};

app.prototype._startSocketServer = function(listener){
    var 
        self        = this,
        defer       = Q.defer();
        
    self.io.listen(listener);
    self.logger.info('Socket Server Started');
    
    return defer.resolve();
}

app.prototype._startExpressServer = function(){
    var 
        self      = this,
        defer     = Q.defer(),
        listener  = null;
    
    listener = self.express.listen(self.PORT, function(err){
        if(err) return defer.reject(err);
        self.logger.info('Express Started PORT -', self.PORT);
        defer.resolve(listener);
    });
    
    return defer.promise;
};

app.prototype._connectToMySQL = function () {
    var
        self        = this,
        defer       = Q.defer();
        
    self.mysql.connect(function(err){
        if(err) return defer.reject(err);
        self.logger.info('Connected to MySQL');
        defer.resolve();
    });
        
    return defer.promise; 
};

module.exports = app;

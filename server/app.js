/** dependencies **/
var 
    path        = require('path'),
    program     = require('commander'),
    logger      = require('bunyan').createLogger({name: 'server'}),
    server      = require('./server');

/** setting up intitalizers **/
program
    .version('1.0.0')
    .option('-v, --verbose', 'Runs with Logs in Verbose Mode')
    .option('-s, --server', 'Runs the main server')
    .parse(process.argv);
    

var config = {
    mysql : {
         user       : 'root',
         password   : 'root',
         database   : 'debate',
         host       : 'localhost'
    },
    fb : {
        appId: '456012464779296',
        secret: 'eed306dedb6f6ea9f207bea6f4f534eb'
    }
};

if( program.server ){
    logger.info('App::init', 'server program initiates');
    var server = new server({
        logger: logger,
        config: config
    });
    server.start();
}

var
    fs          = require('fs'),
    util        = require('util'),
    Q           = require('q'),
    Util        = require('util'),
    _           = require('lodash');


function models(root) {
    var
        self            = this;
        
    Util._extend(self, root);
}

models.prototype.mapBindPrototypes = function(bind, protos){
    var 
        self        = this,
        proto = Object.keys(protos);
        
    proto.forEach(function(name){
        var match = name.match(/__on([a-zA-z]+)/);
        if(match !== null && match[1] !== null){
            self.logger.info("Models::mapBindPrototypes", "Binding Properties for ", name);
            var evt = _.snakeCase(match[1]);
            bind.on(evt, function(args){ 
                self[name](self, args);
            });
        }
    });
    
};


models.prototype.start = function(cb){
    
    var 
        self                = this,
        currentFolder       = process.env.PWD + '/models';
        
    Q(undefined)
    .then(function(){
        var defer = Q.defer();
        
        self.logger.info('Models::start', 'Reading Models Directory');
        
        fs.readdir(currentFolder, function (err, contents) {
            if(err) return defer.reject(err);
            self.logger.info('Models::start', 'Got Models from Directory');
            defer.resolve(contents);
        });
        
        return defer.promise;
    })
    .then(function(dirList){
        
        self.models = {};
        
        dirList.forEach(function(dir){
             var modelPath = currentFolder + '/' + dir;
             
             if(fs.statSync(modelPath).isDirectory()){
                 
                 self.logger.info('Models::start', 'Intializing Model -> ', dir);
                 
                  var model = require(currentFolder + '/' + dir);
                  var obj = new model(self);
                  self.models[dir] = obj;
             }
        });
        
        return Q.resolve();
    })
    .then(function(){
        var modelNames = Object.keys(self.models);
        
        modelNames.forEach(function(modelName){
            self.models[modelName].init();
        });
        
        return Q.resolve();
    })
    .then(function(){
        self.logger.info('Models::start', 'Models Loaded', Object.keys(self.models));
        cb();
    })
    .catch(function(err){
        self.logger.error('Models::start', err);
        cb(err);
    });
    
};

module.exports = models;

var
    fs          = require('fs'),
    util        = require('util'),
    Q           = require('q'),
    extend      = require('util')._extend,
    _           = require('lodash');


function models(parent) {
    var
        self            = this;
        
    extend(self, parent);
}

models.prototype.mapAddClient = function(client){
    
    
    
};

models.prototype.mapBindPrototypes = function(self, protos){
    var 
        self        = this,
        proto = Object.keys(protos);
        
    proto.forEach(function(name){
        
        var match = name.match(/__on([a-zA-z]+)/);
        if(match !== null && match[1] !== null){
  
            var evt = _.snakeCase(match[1]);
            self.io.on(evt, function(args){ 
                self[name](self, args);
            });
        }
    });
    
};

models.prototype._mapProperties = function(obj) {
  
    
    
};

models.prototype.start = function(cb){
    
    var 
        self                = this,
        currentFolder       = process.env.PWD + '/models';
        
    Q(undefined)
    .then(function(){
        var defer = Q.defer();
        
        self.logger.info('Reading Models Directory');
        
        fs.readdir(currentFolder, function (err, contents) {
            if(err) return defer.reject(err);
            self.logger.info('Got Models from Directory');
            defer.resolve(contents);
        });
        
        return defer.promise;
    })
    .then(function(dirList){
        
        self.models = {};
        
        dirList.forEach(function(dir){
             var modelPath = currentFolder + '/' + dir;
             
             if(fs.statSync(modelPath).isDirectory()){
                 
                 self.logger.info('Intializing Model -> ', dir);
                 
                  var model = require(currentFolder + '/' + dir);
                  var obj = new model(self);
                  self._mapProperties(obj);
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
        cb();
    })
    .catch(function(err){
        self.logger.error('Models::start', err);
        cb(err);
    });
    
};

module.exports = models;

/** dependencies **/
var 
    Util   = require('util'),
    parent = require('../');

function socket(root) {
    
    var
        self        = this;
    
    Util._extend(self, root);
}
Util.inherits(socket, parent);

socket.prototype.init = function(){
    var
        self        = this,
        clients     = {};
        
    self.mapBindPrototypes(self.io, socket.prototype);
};

socket.prototype.__onConnect = function(self, client){
     self.logger.info('New Client Connected');
     client.emit('auth');
};

module.exports = socket;

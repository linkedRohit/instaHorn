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
        self        = this;
        
    self.clients     = {};
    self.mapBindPrototypes(self.io, socket.prototype);
};

socket.prototype.__onConnect = function(self, client){
     self.logger.info('Socket::connect', 'New Client Connected', client.id);
     self.clients[client.id] = client;
};

module.exports = socket;

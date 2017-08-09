/** dependencies **/
var 
    extend   = require('util')._extend;

function socket(parent, proto) {
    
    var
        self        = this;
    
    extend(self, parent);
}

socket.prototype.init = function(){
    var
        self        = this,
        clients     = {};
        
    self._bindPrototypes(self, socket.prototype);
};

socket.prototype.__onConnect = function(self, client){
     self.logger.info('New Client Connected');
     client.emit('auth');
     
     self.addClient(client);
};

module.exports = socket;

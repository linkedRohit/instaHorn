/** dependencies **/
var  
    FB       = require('fb'),
    extend   = require('util')._extend;

function facebook(parent) {
    
    var
        self        = this;
    
    extend(self, parent);
    self.fb     = new FB.Facebook(self.config.fb);
}

facebook.prototype.init = function(){
    
    
    
};

module.exports = facebook;

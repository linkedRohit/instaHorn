/** dependencies **/
var  
    FB       = require('fb'),
    Util     = require('util'),
    
    parent   = require('../');

function facebook(root) {

    var
        self        = this;
    self.config     = root.config;
    
    self.fb     = new FB.Facebook(self.config.fb);
}
Util.inherits(facebook, parent);

facebook.prototype.init = function(){
    
};

module.exports = facebook;

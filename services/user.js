app.factory('User', function(){
    var _user = false;

    return {
        me: _user,
        set: function(user){
            _user = user;
        }
    };
});

app.factory('Page', function () {

    var _page = {};
    var name = '';
    var _cbList = [];

    _page.set = function(page){
        name = page;
        _cbList.forEach(function(cb){
            cb(name);
        });
    };

    _page.get = function(){
        return name;
    };

    _page.onChange = function(cb){
        _cbList.push(cb);
    };

    return _page;
});

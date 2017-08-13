app.factory('Page', function () {

    var _page = {};
    var name = '';
    var _cbList = [];
    var subModule = '';

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

    _page.setModule = function(sbMod){
        console.log('submodule is now - ' + sbMod);
        subModule = sbMod;
    };

    _page.getModule = function(){
        return subModule;
    };

    return _page;
});

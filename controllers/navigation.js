app.controller('NavCtrl', function(Page, $scope, socket, User) {

    $scope.loadFeed = function(){
        Page.set('feeds');
        socket.emit('fetch-feed');
    };

    $scope.page = false;

    Page.onChange(function(name){
        $scope.page = name;
    });

    $scope.loadEditor = function(){
        Page.set('editor');
    };

});

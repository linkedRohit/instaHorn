app.controller('NavCtrl', function(Page, $scope, socket, User) {

    $scope.loadFeed = function(){
        Page.set('feeds');
        socket.emit('fetch-feed');
    };

});

app.controller('FeedCtrl', function($scope, socket) {
    socket.on('feed-load', function(data){
        $scope.feeds = data;
    });
});

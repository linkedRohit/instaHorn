app.controller('FeedCtrl', function(Page, $scope, socket) {

    $scope.subModule = false;

    socket.on('feed-load', function(data){
        $scope.feeds = data;
    });

    $scope.loadQuestion = function(id) {
        socket.emit('fetch-question', id);
    }

    $scope.loadCommentForm = function(id) {
        $scope.subModule = 'comment';
        socket.emit('fetch-comments', id);
    }

    socket.on('fetch-comments-receive', function(data) {
        $scope.comments = data.comments;
        console.log(data);
        $scope.userInfo = data.userFbMapping;
    });
});

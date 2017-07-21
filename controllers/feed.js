app.controller('FeedCtrl', function(Page, $scope, socket) {

    socket.on('feed-load', function(data){
        $scope.feeds = data;
    });

    $scope.loadQuestion = function(id) {
        socket.emit('fetch-question', id);
    }

    $scope.loadCommentForm = function(id) {
        Page.setModule('comment');
        socket.emit('fetch-comments', id);
    }
});

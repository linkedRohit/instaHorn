app.controller('FeedCtrl', function(Page, $scope, socket) {

    $scope.subModule = false;

    socket.on('feed-load', function(data){
        $scope.feeds = data.feed;
        $scope.commentCountList = data.commentCount;
        $scope.voteCountList = data.voteCount;
        $scope.userCount = data.userCount;
        
        Page.set('feeds');
    });

    $scope.loadQuestion = function(id) {
        socket.emit('fetch-question', id);
    }

    $scope.loadCommentForm = function(id) {
        $scope.subModule = 'comment';
        $scope.class = "";
        $scope.tid = id;
        socket.emit('fetch-comments', id);
    }

    socket.on('fetch-comments-receive', function(data) {
        $scope.comments = data.comments;
        $scope.userInfo = data.userFbMapping;
    });
});

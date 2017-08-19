app.controller('FeedCtrl', function(Page, $scope, socket) {
    Page.set('feeds');

    $scope.subModule = false;
    $scope.currentPage = 0;
    $scope.fetching = false;
    $scope.fetchNew = true;
    $scope.currentCommentPage = 0;
    $scope.fetchingComments = false;
    $scope.fetchNewComment = true;

    socket.on('feed-load', function(data) {
        /*var feeds = data.feed ? data.feed : [];
        var comments = data.commentCount ? data.commentCount : [];
        if(Object.keys(comments).length == 1) {
            commentscomments];
        }
        var votes = data.voteCountList ? data.voteCountList : [];
        if(Object.keys(votes).length == 1) {
            votes = [votes];
        }*/
        var feeds = new Array();
        var comments = new Array();
        var votes = new Array();
        if(data.feed) feeds = data.feed;
        if(data.commentCount) comments = data.commentCount;
        if(data.voteCount) votes = data.voteCount;
        if(data.userCount) userCount = data.userCount;

        $scope.feeds = getCorrectVal($scope.feeds, feeds);
        $scope.commentCountList = getCorrectVal($scope.commentCountList, comments);
        $scope.voteCountList = getCorrectVal($scope.voteCountList, votes);
        $scope.userCount = getCorrectVal($scope.userCount, userCount);
        $scope.fetching = false;
        $scope.currentPage++;
        Page.set('feeds');
    });

    function getCorrectVal(array, concatArray) {
        var output;
        if( isEmpty(array) ) {
            output = concatArray;
        } else {
            if(array instanceof Array) {
                output = array.concat(concatArray);
            } else {
                output = angular.extend({}, array, concatArray);
            }
        }
        return output;
    }

    function isEmpty(obj) {
      for (var i in obj) if (obj.hasOwnProperty(i)) return false;
      return true;
    }

    $scope.loadQuestion = function(id) {
        $scope.hideCommentBox();
        socket.emit('fetch-question', id);
    }

    $scope.loadCommentForm = function(id) {
        $scope.subModule = 'comment';
        $scope.class = "";
        $scope.tid = id;
        var data ={};
        data.id = id;
        data.pageId = $scope.currentCommentPage;
        socket.emit('fetch-comments', data);
    }

    socket.on('fetch-comments-receive', function(data) {
        $scope.comments = data.comments;
        $scope.userInfo = data.userFbMapping;
        $scope.fetchingComments = false;
        $scope.currentCommentPage++;
    });

    $scope.loadMoreFeeds = function() {
        //if(Page.get() !== 'feeds') {
            if($scope.fetching || $scope.fetchNew == false) return;
            $scope.fetching = true;
            var data = {};
            data.pageId = $scope.currentPage;
            socket.emit('fetch-feed', data);
        //}
    };

    $scope.loadMoreComments = function() {
        if($scope.subModule == 'comments') {
            return;
        }

        if($scope.fetchingComments || $scope.fetchNewComment == false) return;
        $scope.fetchingNewComment = true;
        var data = {};
        data.id = $scope.tid;
        data.pageId = $scope.currentCommentPage;
        socket.emit('fetch-comments', data);
    };

    socket.on('feed-last-page', function(data) {
        $scope.fetching = false;
        $scope.fetchNew = false;
    });

    socket.on('comment-last-page', function(data) {
        $scope.fetchingComments = false;
        $scope.fetchNewComment = false;
    });
});

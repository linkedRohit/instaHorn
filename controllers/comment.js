app.controller('CommentCtrl', function($scope, socket, User) {

    $scope.class="no-fullScreen";
    $scope.arrow="fa-chevron-up";
    $scope.comments = [];
    $scope.addComment = function(type, flag) {
        if($scope.txtcomment !=''){
            var commentObj = {};
            flag = flag ? flag : 1;
            commentObj.description = $scope.txtcomment;
            commentObj.tid = $scope.tid;
            commentObj.type = type;
            commentObj.flag = flag;
            socket.emit('post-opinion', commentObj);
  	        $scope.txtcomment = "";
        }
    }

    socket.on('comment-added', function(data){
        $scope.comments.unshift(data);
        $scope.commentCountList[data.tid] = $scope.commentCountList[data.tid] ? $scope.commentCountList[data.tid]++ : 1;
    });

    $scope.removeComment = function(index, cmmtId, tId) {
        $scope.comments.splice(index, 1);
        var removeCommentObj = {}
        removeCommentObj.tid = tId;
        removeCommentObj.cid = cmmtId;
        socket.emit('remove-comment', removeCommentObj);
    }

    $scope.isFullScreen = false;

    $scope.toggleFullScreen = function(){
        $scope.isFullScreen = !$scope.isFullScreen;
        if($scope.isFullScreen) {
            $scope.class="fullScreen";
            $scope.arrow="fa-chevron-down";
        } else {
            $scope.class="no-fullScreen";
            $scope.arrow="fa-chevron-up";
        }
    };

    $scope.hideCommentBox = function() {
        $scope.subModule = '';
    }

    $scope.loadMoreComments = function() {
        return;
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

});

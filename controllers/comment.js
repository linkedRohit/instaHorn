app.controller('CommentCtrl', function($scope, socket, User) {

    $scope.class="no-fullScreen";
    $scope.arrow="fa-chevron-up";
    $scope.comments = [];
    $scope.addComment = function() {
        if($scope.txtcomment !=''){
            var commentObj = {};
            commentObj.commentString = $scope.txtcomment;
            commentObj.tid = $scope.tid;
            socket.emit('post-comment', commentObj);
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

});

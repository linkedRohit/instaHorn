app.controller('CommentCtrl', function($scope, socket, User) {

    $scope.class="no-fullScreen";
    $scope.arrow="/\\";
    $scope.comments = [];
    $scope.addComment = function() {
        if($scope.txtcomment !=''){
            var commentObj = {};
            commentObj.commentString = $scope.txtcomment;
            commentObj.tid = 1;
            socket.emit('post-comment', commentObj);
  	        $scope.txtcomment = "";
        }
    }

    socket.on('comment-added', function(data){
        console.log(data, $scope.comments);
        $scope.comments.unshift(data);
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
            $scope.arrow="\\/";
        } else {
            $scope.class="no-fullScreen";
            $scope.arrow="/\\";
        }
    };

    $scope.hideCommentBox = function() {
        $scope.class="hideCommentBox";
    }

});

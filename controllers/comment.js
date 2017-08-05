app.controller('CommentCtrl', function($scope, socket, User) {

    $scope.class="no-fullScreen";
    $scope.arrow="/\\";
    $scope.comments = [];
    $scope.addComment = function() {
        if($scope.txtcomment !=''){
            var commentObj = {};
            commentObj.commentString = $scope.txtcomment;
            commentObj.tid = 1;
            commentObj.uid = 1;
            socket.emit('post-comment', commentObj);
            $scope.comments.unshift(commentObj);
  	        //$scope.comments.push(commentObj);
  	        $scope.txtcomment = "";
        }
    }

    $scope.removeComment = function($index) {
        $scope.comments.splice($index, 1);
        //socket.emit('removeComment', $index);
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

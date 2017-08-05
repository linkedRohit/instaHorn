app.controller('CommentCtrl', function($scope, socket, User) {

    $scope.comments = [];
    $scope.addComment = function() {
        if($scope.txtcomment !=''){
            var commentObj = {};
            commentObj.commentString = $scope.txtcomment;
            commentObj.uid = 1;
  	        $scope.comments.push(commentObj);
  	        $scope.txtcomment = "";
        }
    }

    $scope.removeComment = function($index) {
        $scope.comments.splice($index, 1);
        //socket.emit('removeComment', $index);
    }

});

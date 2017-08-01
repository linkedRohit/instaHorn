app.controller('CommentCtrl', function($scope, socket, User) {

    $scope.comments = [];
    $scope.addComment = function() {
      console.log($scope.txtcomment);
        if($scope.txtcomment !=''){
          var commentObj = {};
          commentObj.commentString = $scope.txtcomment;
	        $scope.comments.push(commentObj);
	        $scope.txtcomment = "";
        }
    }

    $scope.removeComment = function($index) {
        $scope.comments.splice($index, 1);
        //socket.emit('removeComment', $index);
    }

});

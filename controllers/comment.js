app.controller('CommentCtrl', function($scope, socket, User) {

    $scope.comments = [];
    $scope.addComment = function() {
        if($scope.txtcomment !=''){
	        $scope.comments.push($scope.txtcomment);
	        $scope.txtcomment = "";
        }
    }

    $scope.removeComment = function($index) {
        $scope.comments.splice($index, 1);
    }

    socket.on('feed-load', function(data){
        $scope.comments = data;
    });

});

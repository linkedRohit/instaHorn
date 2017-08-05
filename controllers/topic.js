app.controller('TopicCtrl', function($scope, socket) {

    $scope.commentFlag = 0;

    $scope.startDebate = function() {
    	console.log('Sending new topic data to server', $scope.formData);
    	socket.emit('add-topic', $scope.formData);
        /*$http.post('/Topics',JSON.stringify()).
        then(function mySuccess(response) {
	        $window.location.href = "../";
	    }, function myError(response) {
	    	$window.location.href = "new.html";
	    })*/
    };
    
    
    $scope.postMyComment = function(){
        console.log('Posting Comment', $scope.comment);
        socket.emit('post-comment', {
            question: $scope.debate.id,
            comment: $scope.comment
        });
    }
    
    $scope.support = function(){
        $scope.commentFlag = 1;
    };
    
    $scope.oppose = function(){
        $scope.commentFlag = -1;
    };
    
    $scope.cancelComment = function(){
        $scope.commentFlag = 0;
    };

});

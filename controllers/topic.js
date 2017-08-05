app.controller('TopicCtrl', function($scope, socket) {

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

});

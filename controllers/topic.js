app.controller('TopicCtrl', function($scope, socket) {

    $scope.commentFlag = 0;
    $scope.reactionSel = 0;

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


    $scope.postMyOpinion = function(flag){
        console.log('Posting Opinion', $scope.comment);
        if($scope.comment) {
            var type = $scope.commentFlag == 1 ? 'up' : 'down';
            var flag = flag ? flag : 1
            socket.emit('post-opinion', {
                tid: $scope.debate.id,
                description: $scope.comment,
                type: type,
                flag: flag
            });
        }
    }

    $scope.vote = function(id, voteType){
        $scope.reactionSel = voteType;
        socket.emit('cast-vote', {
            tid: id,
            voteType: voteType
        });
    };

    $scope.cancelOpinion = function(){
        $scope.comment = '';
        $scope.commentFlag = 0;
    };

    socket.on('vote-added', function(data) {
        if(data.voteType=='down') {
            $scope.debate.downCount = $scope.debate.downCount ? ++$scope.debate.downCount : 1;
            /*$scope.isDownCountIncremented = true;
            if($scope.isUpCountIncremented) {
                if($scope.debate.upCount>0)$scope.debate.upCount--;
            }
            $scope.commentFlag = -1;*/
        } else if(data.voteType=='up'){
            $scope.debate.upCount = $scope.debate.upCount ? ++$scope.debate.upCount : 1;
            /*$scope.isUpCountIncremented = true;
            if($scope.isDownCountIncremented) {
                if($scope.debate.downCount>0)$scope.debate.downCount--;
            }
            $scope.commentFlag = 1;*/
        } else if(data.voteType=='angry') {
            $scope.debate.angryCount = $scope.debate.angryCount ? ++$scope.debate.angryCount : 1;
        } else if(data.voteType=='haha') {
            $scope.debate.hahaCount = $scope.debate.hahaCount ? ++$scope.debate.hahaCount : 1;
        }
    });

    socket.on('opinion-added', function(data) {
        data.editedOn = new Date();
        if(data.flag == 2) {
            $scope.opinions.unshift(data);
        }
        $scope.comments.unshift(data);
        $scope.cancelOpinion();
    });
});

app.controller('TopicCtrl', function($scope, socket, $sce) {
    $scope.reactionSel = 0;
    $scope.commentBox = false;

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


    $scope.postMyOpinion = function(type, flag){
        console.log('Posting Opinion', $scope.opinion);
        if($scope.opinion) {
            var flag = flag ? flag : 1
            socket.emit('post-opinion', {
                tid: $scope.debate.id,
                description: $scope.opinion,
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
        $scope.opinion = '';
        $scope.commentBox = false;
    };

    socket.on('vote-added', function(data) {
        if(data.voteType=='down') {
            $scope.debate.downCount = $scope.debate.downCount ? ++$scope.debate.downCount : 1;
        } else if(data.voteType=='up'){
            $scope.debate.upCount = $scope.debate.upCount ? ++$scope.debate.upCount : 1;
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

    $scope.loadCommentBox = function() {
        $scope.commentBox = !$scope.commentBox;
    }

    $scope.showHighlighter = function(id) {

    }

    $scope.highlight = function(haystack, needle) {
        if(!needle) {
            return $sce.trustAsHtml(haystack);
        }
        return $sce.trustAsHtml(haystack.replace(new RegExp(needle, "gi"), function(match) {
            return '<span class="highlightedText">' + match + '</span>';
        }));
    };
});

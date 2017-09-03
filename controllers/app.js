app.controller('AppCtrl', function(Page, $scope, socket, User) {

    socket.on('debate-ques', function(data){
        Page.set('topic');
        var question = data.question[0];
        $scope.debate = {
            question: question.description,
            name: question.fullName,
            when: question.postedOn,
            id: question.tid,
            fbid: question.fbid
        };

        if(data && data.voteList) {
            $scope.debate.upCount = data.voteList.up;
            $scope.debate.downCount = data.voteList.down;
            $scope.debate.hahaCount = data.voteList.haha;
            $scope.debate.angryCount = data.voteList.angry;
        }

        $scope.opinions = data.opinionResult;
        $scope.reactions = data.reactionCount;
        $scope.replies = data.replyCount;
    });

});

app.controller('AppCtrl', function(Page, $scope, socket, User) {

    socket.on('debate-ques', function(data){
        Page.set('debate');
        console.log(data);
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
        }

        $scope.opinions = data.opinionResult;

    });

});

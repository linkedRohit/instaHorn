app.controller('AppCtrl', function($scope, socket, User) {

    socket.on('debate-ques', function(data){
        $scope.debate = {
            question: data.description,
            name: data.fullName,
            when: data.postedOn
        };
    });

});

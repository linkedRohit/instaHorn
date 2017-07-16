app.controller('AppCtrl', function($scope, socket, User) {

    socket.on('debate-ques', function(data){
        $scope.question = data.description;
        $scope.name = data.fullName;
        $scope.when = data.postedOn;
    });

    socket.on('user-commented', function(comment){
    });
});

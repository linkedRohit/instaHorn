app.controller('AppCtrl', function($scope, socket, User) {

    $scope.user = false;

    $scope.login = function(token){
        socket.emit('init', {
            'token': 'z'
        });
    };

    socket.on('verify', function(user){
        User.set(user);
        //$scope.user = User.me;
    });

    socket.on('debate-ques', function(data){
        $scope.question = data.description;
        $scope.name = data.fullName;
        $scope.when = data.postedOn;
    });

    socket.on('user-commented', function(comment){
    });
});

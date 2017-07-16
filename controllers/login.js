app.controller('LoginCtrl', function($scope, socket, User) {

    $scope.user = false;

    $scope.login = function(response) {
        console.log('Intializing Server Login', response.userID);
        socket.emit('init', response);
    }

    socket.on('login-user-received', function(user){
        User.set(user);
        $scope.user = user;

        socket.emit('fetch-feed');
    });

});

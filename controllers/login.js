app.controller('LoginCtrl', function(Page, $scope, socket, User) {

    $scope.user = false;
    $scope.page = false;

    $scope.login = function(response) {
        console.log('Intializing Server Login', response.userID);
        socket.emit('init', response);
    }

    Page.onChange(function(name){
        $scope.page = name;
    });

    socket.on('login-user-received', function(user){
        User.set(user);
        $scope.user = user;

        Page.set('feeds');
        socket.emit('fetch-feed');
    });

});

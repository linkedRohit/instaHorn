app.controller('AppCtrl', function(Page, $scope, socket, User) {

    socket.on('debate-ques', function(data){
        Page.set('debate');

        $scope.debate = {
            question: data.description,
            name: data.fullName,
            when: data.postedOn
        };
    });
    
});

app.controller('NavCtrl', function(Page, $scope, socket, User) {

    $scope.page = false;

    Page.onChange(function(name){
        $scope.page = name;
    });

    $scope.loadEditor = function(){
        Page.set('editor');
    };

});

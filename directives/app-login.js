app.directive('appLogin', function(){
    return {
        templateUrl: '/views/components/login.html',
        replace: true,
        scope: {
            user: '@'
        }
    }
});

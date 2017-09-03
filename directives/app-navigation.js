app.directive('appNavigation', function(){
    return {
        templateUrl: '/components/navigation.html',
        replace: true,
        scope: {
            user: '='
        }
    }
});

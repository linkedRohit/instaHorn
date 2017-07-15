app.directive('appNavigation', function(){
    return {
        templateUrl: '/views/components/navigation.html',
        replace: true,
        scope: {
            user: '@'
        }
    }
});

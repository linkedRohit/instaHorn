app.controller('RouteCtrl', function($scope, $controller, $routeParams) {
   var params = $routeParams;

    console.log( angular.element('[ng-controller=FeedCtrl]').scope() ); //.scope.loadQuestion($routeParams.id);
});

var app=angular.module('debateApp', []);
app.controller('topics', function($scope, $http, $window) {
    $scope.sub = function() {
        $http.post('/Topics',JSON.stringify($scope.formData)).
        then(function mySuccess(response) {
	        $window.location.href = "feed.html";
	    }, function myError(response) {
	    	$window.location.href = "new.html";
	    })
    }
});
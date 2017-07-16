var app=angular.module('debateApp', []);
app.controller('TopicCtrl', function($scope, $http, $window) {
    $scope.startDebate = function() {
        $http.post('/Topics',JSON.stringify($scope.formData)).
        then(function mySuccess(response) {
	        $window.location.href = "../";
	    }, function myError(response) {
	    	$window.location.href = "new.html";
	    })
    }
});
var app = angular.module('DebateApp', [
    'angularMoment'
]);

app.factory('socket', function ($rootScope) {
  var socket = io.connect();

  socket.on('auth', function(){
      socket.emit('init', {
          'token': '10923490yuew9iashdihasidijasndknihe4891',
          'url': location.href
      });
  });

  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});

app.controller('FeedCtrl', function($scope, socket) {
    
});

app.controller('AppCtrl', function($scope, socket) {
    socket.on('debate-ques', function(data){
        $scope.question = data.description;
        $scope.name = data.fullName;
        $scope.when = data.postedOn;
    });

    socket.on('user-commented', function(comment){
    });
});

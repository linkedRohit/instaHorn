var app = angular.module('DebateApp', [
    'angularMoment'
]);

app.run(['$window', function($window) {

  $window.fbAsyncInit = function() {
    FB.init({
      appId      : '456012464779296',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });

    checkLoginState();
  };

  (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);

  }(document, 'script', 'facebook-jssdk'));

}]);

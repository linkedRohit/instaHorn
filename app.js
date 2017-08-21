var app = angular.module('DebateApp', [
    'angularMoment',
    'ngRoute',
    'infinite-scroll'
]);


app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});

app.run(['$window', function($window) {
    var hash = $window.location.hash;
    var urlComponents = hash.split( '/' );
    //if(urlComponents[1] != "topic") {
        $window.fbAsyncInit = function() {
          FB.init({
            appId      : '456012464779296',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.8'
          });

          NProgress.start();
          checkLoginState();
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);

        }(document, 'script', 'facebook-jssdk'));
    /*} else {
        $window.pageAsyncLoad = function() {
          //  NProgress.start();
            //loadPage(urlComponents);
        };
    }*/

}]);

/* Filters */
app.filter('spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '-');
        }
    }
});

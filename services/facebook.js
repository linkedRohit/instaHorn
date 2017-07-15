app.factory('Facebook', function($q) {

    var _facebook = {};

    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
        _facebook.statusChangeCallback(response);
    });

    _facebook.checkLoginState = function() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

    _facebook.statusChangeCallback = function(loginStatus) {
        if(loginStatus.status =='connected') {
            var userAuthStatus = loginStatus.authResponse;

            FB.api('/me', {fields: 'email'}, function(response) {
                var userObject = {};
                userObject.accessToken = userAuthStatus.accessToken;
                userObject.expiresIn = userAuthStatus.expiresIn;
                userObject.email = response.email;
                userObject.userId = response.userID;
            });
        }
    }

    return {
        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
});

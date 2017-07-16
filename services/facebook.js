app.factory('Facebook', function($q) {

    var _facebook = {};
    return _facebook;
});

checkLoginState = function(){

    var _loginCtrlScope = angular.element('[ng-controller="LoginCtrl"]').scope();

    FB.getLoginStatus(function(response) {
        if( response.status == 'connected' && typeof response.authResponse !== 'undefined' ) {
            _loginCtrlScope.login(response.authResponse);
        } else {
            _loginCtrlScope.user = 0;
            _loginCtrlScope.$apply();
        }
    });

};

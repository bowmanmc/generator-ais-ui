
if (typeof console === 'undefined') {
    console = {
        log: function() {}
    };
}

var app = angular.module('ais', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',

    'ui.bootstrap'
]);

app.config(function($routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'aisMainPageController',
        templateUrl: 'modules/pages/aisMainPageTemplate.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

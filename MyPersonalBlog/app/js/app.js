(function(){
    "use strict";

    var app = angular.module('MyPersonalBlogApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            });
    });
})();
var followers = angular.module("followers", ['ui.router', 'ngAnimate']);

followers.filter('spacesToDashes', function () {
    return function (value) {
        return SpacesToDashes.filter(value);
    };
});

followers.service("DataService", DataService);

followers.directive("followInfo", followInfo);

followers.controller("IndexCtrl", IndexCtrl);

followers.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/followings");

    $stateProvider.state("followings", {
        url: "/followings",
        templateUrl: "../views/followings.html",
        controller: IndexCtrl
    });
});

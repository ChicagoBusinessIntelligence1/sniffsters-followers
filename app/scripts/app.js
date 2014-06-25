var followers = angular.module("followers", ['ui.router', 'ngAnimate']);

followers.service("DataService", DataService);

followers.controller("IndexCtrl", IndexCtrl);

followers.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/followings");

    $stateProvider.state("followings", {
        url: "/followings",
        templateUrl: "../views/followings.html",
        controller: IndexCtrl,
        resolve: {
            followings: function (DataService) {
                return DataService.getFollowings();
            }
        }
    });
});

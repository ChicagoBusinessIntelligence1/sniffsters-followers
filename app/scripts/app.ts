/// <reference path="services/DataService.ts" />
/// <reference path="controllers/IndexCtrl.ts" />
//#ref

var followers = angular.module("followers", ['ui.router', 'ngAnimate']);
//followers.value("toastr", Toastr)

//#filt

followers.service("DataService", DataService);
//#serv

//#dir

followers.controller("IndexCtrl", IndexCtrl);
//#ctrl

// TODO: Implement filter

followers.config(
    ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("/followings");

        $stateProvider
            .state("followings", {
                url: "/followings",
                templateUrl: "../views/followings.html",
                controller:IndexCtrl,
                resolve: {
                    followings: (DataService:DataService) => {
                        return DataService.getFollowings<IFollowUser>();
                    }
                }
            })
//#state
    });


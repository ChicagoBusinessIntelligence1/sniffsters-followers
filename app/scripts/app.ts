/// <reference path="services/DataService.ts" />
/// <reference path="controllers/IndexCtrl.ts" />
/// <reference path="directives/followInfo.ts" />
/// <reference path="filters/SpacesToDashes.ts" />
//#ref

var followers = angular.module("followers", ['ui.router', 'ngAnimate']);
//followers.value("toastr", Toastr)

followers.filter('spacesToDashes', () => { return (value:string):string => {return SpacesToDashes.filter(value);     } });
//#filt

followers.service("DataService", DataService);
//#serv

followers.directive("followInfo", followInfo);
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
	                allFollowings: (DataService:DataService) => {
		                return DataService.getFollowings<IAllFollowings>();
                    }
                }
            })
//#state
    });


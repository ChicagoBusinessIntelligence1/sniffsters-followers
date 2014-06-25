/// <reference path="services/DataService.ts" />
/// <reference path="controllers/IndexCtrl.ts" />
//#ref

var followers = angular.module("followers", []);
//followers.value("toastr", Toastr)

//#filt

followers.service("DataService", DataService);
//#serv

//#dir

followers.controller("IndexCtrl", IndexCtrl);
//#ctrl

// TODO: Implement filter

//followers.config(
//	($stateProvider, $urlRouterProvider) => {
//		$urlRouterProvider.otherwise("/");
//
//		$stateProvider
//			.state("followers", {
//				url: "/followers",
//				templateUrl: "../views/followers.html"
//			})
////#state
//	});


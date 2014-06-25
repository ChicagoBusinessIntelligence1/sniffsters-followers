/// <reference path="controllers/IndexCtrl.ts" />
/// <reference path="services/DataService.ts" />
//#ref

var followers = angular.module("followers", ['ui.router', 'angularFileUpload', 'ngAnimate', 'ui.bootstrap.modal', 'ui.bootstrap', 'ui.bootstrap.tpls']);

//#filt

followers.service("DataService", DataService);
//#serv

//#dir

followers.controller("IndexCtrl", IndexCtrl);
//#ctrl

// TODO: Implement filter
followers.value("toastr", toastr)

followers.config(
	($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("followers", {
				url: "/followers",
				templateUrl: "../views/followers.html"
			})
//#state
	});


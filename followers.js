var IndexCtrl = function () {
	function IndexCtrl($scope, followings, DataService) {
		this.$scope = $scope, this.DataService = DataService, this.Followings = followings, $scope.error = !1, $scope.index = this
	}

	return IndexCtrl.prototype.unfollow = function (id, index) {
		var _this = this;
		this.DataService.unfollow(id).then(function () {
			_this.Followings.splice(index, 1)
		}, function () {
			console.log("Error. Check Db Connection")
		})
	}, IndexCtrl
}(), followInfo = function () {
	return{restrict: "E", templateUrl: "views/directives/follow-info.html", replace: !0, scope: {f: "=", ctrl: "=", arrIndex: "@"}}
}, SpacesToDashes = function () {
	function SpacesToDashes() {
	}

	return SpacesToDashes.filter = function (value) {
		return value.replace(/ /g, "-")
	}, SpacesToDashes
}(), DataService = function () {
	function DataService($http, $q) {
		this.$http = $http, this.$q = $q
	}

	return DataService.prototype.getFollowings = function () {
		var d = this.$q.defer();
		return this.$http.get("/Followers/GetFollowings").success(function (result) {
			d.resolve(result)
		}).error(function () {
			d.reject()
		}), d.promise
	}, DataService.prototype.unfollow = function (id) {
		var d = this.$q.defer();
		return this.$http.post("/Followers/Unfollow", {id: id}).success(function () {
			d.resolve()
		}).error(function () {
			d.reject()
		}), d.promise
	}, DataService
}(), followers = angular.module("followers", ["ui.router", "ngAnimate"]);
followers.filter("spacesToDashes", function () {
	return function (value) {
		return SpacesToDashes.filter(value)
	}
}), followers.service("DataService", DataService), followers.directive("followInfo", followInfo), followers.controller("IndexCtrl", IndexCtrl), followers.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/followings"), $stateProvider.state("followings", {url: "/followings", templateUrl: "../views/followings.html", controller: IndexCtrl, resolve: {followings: function (DataService) {
		return DataService.getFollowings()
	}}})
}]);
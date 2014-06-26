var IndexCtrl = (function () {
    function IndexCtrl($scope, DataService) {
        var _this = this;
        this.$scope = $scope;
        this.DataService = DataService;
        $scope.isViewLoading = true;
        DataService.getFollowings().then(function (allFollowings) {
            _this.Followings = allFollowings.Followings;

            _this.NotFollowings = allFollowings.NotFollowings;
            $scope.isViewLoading = false;
        });
        $scope.error = false;

        $scope.index = this;
    }
    IndexCtrl.prototype.unfollow = function (id, index) {
        var _this = this;
        this.DataService.unfollow(id).then(function () {
            var follower = _this.Followings[index];
            _this.NotFollowings.push(follower);
            _this.Followings.splice(index, 1);
        }, function () {
            console.log("Error. Check Db Connection");
        });
    };

    IndexCtrl.prototype.follow = function (id, index) {
        var _this = this;
        this.DataService.follow(id).then(function () {
            var follower = _this.NotFollowings[index];
            _this.Followings.push(follower);
            _this.NotFollowings.splice(index, 1);
        }, function () {
            console.log("Error. Check Db Connection");
        });
    };
    return IndexCtrl;
})();

var IndexCtrl = (function () {
    function IndexCtrl($scope, followings, DataService) {
        this.$scope = $scope;
        this.DataService = DataService;
        this.Followings = followings;
        $scope.error = false;

        $scope.index = this;
    }
    IndexCtrl.prototype.unfollow = function (id, index) {
        var _this = this;
        this.DataService.unfollow(id).then(function () {
            _this.Followings.splice(index, 1);
        }, function () {
            console.log("Error. Check Db Connection");
        });
    };
    return IndexCtrl;
})();

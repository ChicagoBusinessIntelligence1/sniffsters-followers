var IndexCtrl = (function () {
    function IndexCtrl($scope, followings, DataService) {
        this.$scope = $scope;
        this.DataService = DataService;
        this.Followings = followings;
        $scope.error = false;

        $scope.index = this;
    }
    return IndexCtrl;
})();

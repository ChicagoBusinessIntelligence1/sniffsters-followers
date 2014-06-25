var IndexCtrl = (function () {
    function IndexCtrl($scope, DataService) {
        this.$scope = $scope;
        this.DataService = DataService;
        $scope.error = false;

        $scope.index = this;
    }
    return IndexCtrl;
})();

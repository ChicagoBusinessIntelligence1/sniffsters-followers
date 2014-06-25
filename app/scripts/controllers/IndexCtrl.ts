
interface IMainScope extends ng.IScope {
	index:IndexCtrl;
	error:boolean;
	ctrl:IndexCtrl;
}
class IndexCtrl {

	constructor(public $scope:IMainScope, public DataService:DataService) {
		$scope.error = false;

		$scope.index = this;
	}

}
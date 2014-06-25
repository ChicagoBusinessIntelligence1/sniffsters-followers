/// <reference path="IndexCtrl.ts" />

interface IMainScope extends ng.IScope {
	index:IndexCtrl;
	error:boolean;
	ctrl:IndexCtrl;
}
class IndexCtrl {

	constructor(public $scope:IMainScope, public $state:ng.ui.IStateService, public toastr:Toastr, public DataService:DataService) {
		$scope.error = false;

		$scope.index = this;
	}

	ShowSuccess(note:string) {

		this.toastr.info(note);
	}

	ShowError(note:string) {
		this.toastr.error(note);
	}

}
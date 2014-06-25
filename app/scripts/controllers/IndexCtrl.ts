/// <reference path="IndexCtrl.ts" />

interface IMainScope extends ng.IScope {
	Index:IndexCtrl;
	ctrl:IndexCtrl;
}
class IndexCtrl {

	constructor(public $scope:IMainScope, public $state:ng.ui.IStateService, public toastr:Toastr, public DataService:DataService) {
		$scope.Index = this;
	}

	ShowSuccess(note:string) {

		this.toastr.info(note);
	}

	ShowError(note:string) {
		this.toastr.error(note);
	}

}
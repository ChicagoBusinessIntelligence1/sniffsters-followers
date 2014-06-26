interface IMainScope extends ng.IScope {
	index:IndexCtrl;
	error:boolean;
	ctrl:IndexCtrl;
}
class IndexCtrl {
	Followings:IFollowUser[];
	NotFollowings:IFollowUser[];

	constructor(public $scope:IMainScope, allFollowings:IAllFollowings, public DataService:DataService) {
		this.Followings = allFollowings.Followings;

		this.NotFollowings = allFollowings.NotFollowings;
		$scope.error = false;

		$scope.index = this;
	}

	unfollow(id:string, index:number) {
		this.DataService.unfollow(id).then(() => {
//success
			this.Followings.splice(index, 1);
		}, () => {
//           error
			console.log("Error. Check Db Connection")
		})

	}
}
interface IMainScope extends ng.IScope {
    index:IndexCtrl;
    error:boolean;
    isViewLoading:boolean;
    ctrl:IndexCtrl;
}
class IndexCtrl {
    Followings:IFollowUser[];
    NotFollowings:IFollowUser[];

    constructor(public $scope:IMainScope, public DataService:DataService) {
        $scope.isViewLoading = true;
        DataService.getFollowings().then((allFollowings:IAllFollowings)=> {

        this.Followings = allFollowings.Followings;

        this.NotFollowings = allFollowings.NotFollowings;
        $scope.isViewLoading = false;
        })
        $scope.error = false;

        $scope.index = this;
    }

    unfollow(id:string, index:number) {
        this.DataService.unfollow(id).then(() => {
//success
            var follower:IFollowUser = this.Followings[index];
            this.NotFollowings.push(follower);
            this.Followings.splice(index, 1);
        }, () => {
//           error
            console.log("Error. Check Db Connection")
        })

    }

    follow(id:string, index:number) {
        this.DataService.follow(id).then(() => {
//success
            var follower:IFollowUser = this.NotFollowings[index];
            this.Followings.push(follower);
            this.NotFollowings.splice(index, 1);
        }, () => {
//           error
            console.log("Error. Check Db Connection")
        })

    }
}
interface IMainScope extends ng.IScope {
    index:IndexCtrl;
    error:boolean;
    ctrl:IndexCtrl;
}
class IndexCtrl {
    Followings:IFollowUser[];

    constructor(public $scope:IMainScope, followings:IFollowUser[], public DataService:DataService) {
        this.Followings= followings;
        $scope.error = false;

        $scope.index = this;
    }

    unfollow(id:string, index:number){
       this.DataService.unfollow(id).then(() => {
//success
           this.Followings.splice(index, 1);
       }, () => {
//           error
           console.log("Error. Check Db Connection")
       })

    }
}
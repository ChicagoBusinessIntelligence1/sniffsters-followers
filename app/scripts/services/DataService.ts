/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

class DataService {
    constructor(public $http:ng.IHttpService, public $q:ng.IQService) {
    }

    getFollowings<T>() {
	    var d = this.$q.defer<T>();

	    this.$http.get('http://localhost:44300/Followers/GetFollowings').success((result:T) => {

            d.resolve(result);
        }).error((data, error) => {
            // console.log(data)
            // console.log(error)
            d.reject();
        });
        return d.promise;
    }

    unfollow<T>(id:string) {
        var d = this.$q.defer();

        this.$http.post('http://localhost:44300/Followers/Unfollow', {
            id: id
        })
            .success(() => {
                d.resolve();
            }).error(() => {
                d.reject();
            });
        return d.promise;
    }
}
var DataService = function () {
    function DataService($http, $q) {
      this.$http = $http;
      this.$q = $q;
    }
    DataService.prototype.getFollowings = function () {
      var d = this.$q.defer();
      this.$http.get('http://localhost:44300/Followers/GetFollowings').success(function (result) {
        d.resolve(result);
      }).error(function (data, error) {
        d.reject();
      });
      return d.promise;
    };
    DataService.prototype.unfollow = function (id) {
      var d = this.$q.defer();
      this.$http.post('http://localhost:44300/Followers/Unfollow', { id: id }).success(function () {
        d.resolve();
      }).error(function () {
        d.reject();
      });
      return d.promise;
    };
    return DataService;
  }();
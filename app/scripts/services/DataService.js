var DataService = (function () {
	function DataService($http, $q) {
		this.$http = $http;
		this.$q = $q;
	}

	DataService.prototype.Method = function () {
		return 1;
	};
	return DataService;
})();

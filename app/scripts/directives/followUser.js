
var followUser = function () {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/follow-user.html',
        transclude: true,
        replace: true,
        scope: {
            ctrl: '=',
            text: '@',
            func: '&'
        },
        link: function (scope, element, attrs) {
        }
    };
};

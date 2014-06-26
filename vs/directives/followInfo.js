var followInfo = function () {
  return {
    restrict: 'E',
    templateUrl: 'views/directives/follow-info.html',
    replace: true,
    scope: {
      f: '=',
      ctrl: '=',
      arrIndex: '@'
    }
  };
};
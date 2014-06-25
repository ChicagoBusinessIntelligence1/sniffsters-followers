/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

interface IFollowUser extends ng.IScope {
    test:string;
}

var followUser:() => ng.IDirective = () => {

    return{
        restrict: 'E',
        templateUrl: 'views/directives/follow-user.html',
        transclude: true,
        // replace directive tag with template info
        replace: true,
        scope: {
            ctrl: '=',

            text: '@',
            func: '&'
        },
        link: (scope:IFollowUser, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {



        }
    }
}

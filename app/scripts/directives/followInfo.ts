/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

interface IFollowInfo extends ng.IScope {
    test:string;
}

var followInfo:() => ng.IDirective = () => {

    return{
        restrict: 'E',
        templateUrl: 'views/directives/follow-info.html',
        // replace directive tag with template info
        replace: true,
        scope: {
            f: '='

        },
        link: (scope:IFollowInfo, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {



        }
    }
}

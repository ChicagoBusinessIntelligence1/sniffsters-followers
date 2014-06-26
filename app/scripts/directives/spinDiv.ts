/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

interface ISpinDiv extends ng.IScope {
    test:string;
}

var spinDiv:() => ng.IDirective = () => {

    return{
        restrict: 'E',
        templateUrl: 'views/directives/spin-div.html',
        // replace directive tag with template info
        replace: true
    }
}

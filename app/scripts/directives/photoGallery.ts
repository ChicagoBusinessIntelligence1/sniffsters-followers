/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

interface IPhotoGallery extends ng.IScope {
    test:string;
    userName:string;
}

var photoGallery:() => ng.IDirective = () => {

    return{
        restrict: 'E',
        templateUrl: 'views/directives/photo-gallery.html',
        transclude: true,
        // replace directive tag with template info
        replace: true,
        scope: {
            galleries: '=',
            id: '@',
            func: '&'
        },
        controller: ($scope, $stateParams) => {
            var index:number = $stateParams.id;
            $scope.index = index;
//            $scope.gallery = $scope.galleries[index];
        },
        link: (scope:IPhotoGallery, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {
        }
    }
}

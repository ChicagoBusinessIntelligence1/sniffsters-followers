/// <reference path="../app.ts" />
interface IDBreederDetails extends ng.IScope {
    IsEdit:Boolean;
    ctrl:IndexCtrl;
    Edit:() => void;
    Cancel:() => void;
    Save:() => void;
}

var breederDetails:() => ng.IDirective = () => {

    return{
        restrict: 'E',
        templateUrl: 'views/directives/breeder-details.html',
        transclude: true,
        // replace directive tag with template info
        replace: true,
        scope: {
            ctrl: '=',

            text: '@',
            func: '&'
        },
        link: (scope:IDBreederDetails, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {
//            SCOPE (USE just {{test}} . )

            scope.IsEdit = false;

            scope.Edit = () => {
                scope.ctrl.Clone();
                scope.IsEdit = true;
            }

            scope.Cancel = () => {

                scope.IsEdit = false;
            }

            scope.Save = () => {
                scope.Save();
                scope.IsEdit = false;
            }
        }
}
}

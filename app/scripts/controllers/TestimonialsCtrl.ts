/// <reference path="IndexCtrl.ts" />

interface ITestimonialsScope extends IMainScope {
    testimonials:TestimonialsCtrl;
    ctrl:IndexCtrl;
}
class TestimonialsCtrl {
    Feedbacks:IFeedback[];

    constructor(public $scope:ITestimonialsScope, feedbacks:IFeedback[], public $state:ng.ui.IStateService, public toastr:Toastr, public DataService:DataService, public CopyProfileService:CopyProfileService) {
        $scope.index.url = "testimonials";

        $scope.testimonials = this;
        this.Feedbacks = feedbacks;
    }

    ShowSuccess(note:string) {
        this.toastr.info(note);
    }

    ShowError(note:string) {
        this.toastr.error(note);
    }
}
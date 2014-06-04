var IndexCtrl=function(){function IndexCtrl($scope,$state,toastr,DataService,CopyProfileService){var _this=this;this.$scope=$scope,this.$state=$state,this.toastr=toastr,this.DataService=DataService,this.CopyProfileService=CopyProfileService,$scope.index=this;var promiseT=this.DataService.getProfile();promiseT.then(function(breederProfile){_this.error=!1,_this.BreederProfile=breederProfile,_this.Id=breederProfile.Email,_this.CopyProfileService.SetProfile(breederProfile),_this.BreederProfileEdit=CopyProfileService.GetProfileClone()},function(){_this.error=!0,_this.ShowError("Error in Db Connection")})}return IndexCtrl.prototype.SaveKennelName=function(){var breederProfileOriginal=this.CopyProfileService.GetProfileClone();breederProfileOriginal.KennelName=this.BreederProfileEdit.KennelName,breederProfileOriginal.Story=this.BreederProfileEdit.Story,this.Save(breederProfileOriginal)},IndexCtrl.prototype.SaveAboutParents=function(){var breederProfileOriginal=this.CopyProfileService.GetProfileClone();breederProfileOriginal.Parents=this.BreederProfileEdit.Parents,breederProfileOriginal.Girls=this.BreederProfileEdit.Girls,breederProfileOriginal.Boys=this.BreederProfileEdit.Boys,console.log(breederProfileOriginal),this.Save(breederProfileOriginal)},IndexCtrl.prototype.SaveAddInfo=function(){var breederProfileOriginal=this.CopyProfileService.GetProfileClone();breederProfileOriginal.AddInfo=this.BreederProfileEdit.AddInfo,this.Save(breederProfileOriginal)},IndexCtrl.prototype.Next=function(state){this.$state.go(state)},IndexCtrl.prototype.ShowError=function(errorMessage){this.toastr.error(errorMessage)},IndexCtrl.prototype.ShowSuccess=function(successMessage){this.toastr.success(successMessage)},IndexCtrl.prototype.Clone=function(){this.BreederProfileCopy=this.CopyProfileService.GetProfileClone()},IndexCtrl.prototype.GetClone=function(){return this.CopyProfileService.GetProfileClone()},IndexCtrl.prototype.UpdateBreederProfile=function(breederProfile){this.BreederProfile=breederProfile},IndexCtrl.prototype.Save=function(breederProfile){var _this=this,promise=this.DataService.updateProfile(breederProfile);promise.then(function(){_this.CopyProfileService.SetProfile(breederProfile),_this.UpdateBreederProfile(breederProfile),_this.ShowSuccess("Successfully Saved")},function(){_this.ShowError("Db Connection Problem")})},IndexCtrl.$inject=["$scope","$state","toastr","DataService","CopyProfileService"],IndexCtrl}(),PhotosCtrl=function(){function PhotosCtrl($scope,$state,toastr,DataService,CopyProfileService){var _this=this;this.$scope=$scope,this.$state=$state,this.toastr=toastr,this.DataService=DataService,this.CopyProfileService=CopyProfileService,$scope.photosCtrl=this,$scope.index.url="photos",DataService.getGalleries().then(function(data){_this.Galleries=data},function(){_this.ShowError("Error in getting Photo Galleries from the server")})}return PhotosCtrl.prototype.ShowSuccess=function(note){this.toastr.info(note)},PhotosCtrl.prototype.ShowError=function(note){this.toastr.error(note)},PhotosCtrl}(),breederDetails=function(){return{restrict:"E",templateUrl:"views/directives/breeder-details.html",transclude:!0,replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(scope){scope.IsEdit=!1,scope.Edit=function(){scope.ctrl.Clone(),scope.IsEdit=!0},scope.Cancel=function(){scope.IsEdit=!1},scope.Save=function(){scope.Save(),scope.IsEdit=!1}}}},aboutInfo=function(){return{restrict:"E",templateUrl:"views/directives/about-info.html",replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(scope){scope.ctrl.url="about"}}},aboutInfoEdit=function(){return{restrict:"E",templateUrl:"views/directives/about-info-edit.html",transclude:!0,replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(scope){scope.ResetAllFields=function(){scope.ctrl.BreederProfileEdit.KennelName="",scope.ctrl.BreederProfileEdit.Story="",scope.ctrl.BreederProfileEdit.Parents="",scope.ctrl.BreederProfileEdit.Boys="",scope.ctrl.BreederProfileEdit.Girls="",scope.ctrl.BreederProfileEdit.AddInfo="",scope.form.$setDirty()},scope.Next=function(){}}}},button=function(){return{restrict:"E",template:"<button>Test</button>",transclude:!0,replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(){}}},detailsInfo=function(){return{restrict:"E",templateUrl:"views/directives/details-info.html",replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(){}}},detailsInfoEdit=function(){return{restrict:"E",templateUrl:"views/directives/details-info-edit.html",transclude:!0,replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(scope){scope.ResetFields=function(){console.log("reset"),scope.ctrl.BreederProfileEdit=new BreederProfile},scope.SaveKennelName=function(){var breederProfileOriginal=scope.ctrl.GetClone();breederProfileOriginal.KennelName=scope.ctrl.BreederProfileEdit.KennelName,breederProfileOriginal.Story=scope.ctrl.BreederProfileEdit.Story,scope.ctrl.Save(breederProfileOriginal)}}}},litters=function(){return{restrict:"E",templateUrl:"views/directives/litters.html",transclude:!0,replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(){}}},photoGalleries=function(){return{restrict:"E",templateUrl:"views/directives/photo-galleries.html",replace:!0,scope:{galleries:"=",id:"@",func:"&"},link:function(){}}},photoGallery=function(){return{restrict:"E",templateUrl:"views/directives/photo-gallery.html",transclude:!0,replace:!0,scope:{galleries:"=",id:"@",func:"&"},controller:function($scope,$stateParams){var index=$stateParams.id;$scope.index=index},link:function(){}}},photoGalleryEdit=function(){return{restrict:"E",templateUrl:"views/directives/photo-gallery-edit.html",transclude:!0,replace:!0,scope:{galleries:"=",id:"@",func:"&"},controller:function($scope,$stateParams,$upload){var index=$stateParams.id;$scope.index=index,$scope.onFileSelect=function($files){for(var i=0;i<$files.length;i++){var file=$files[i];console.log(file),$scope.upload=$upload.upload({url:"/BreederPersonal/AddPicture",data:{gallery:$scope.galleries[$scope.index].Id},file:file}).progress(function(){}).success(function(){$scope.galleries[$scope.index].Photos.push({Caption:"Picture",FilePath:file.name})})}}}}},photosInfo=function(){return{restrict:"E",templateUrl:"views/directives/photos-info.html",transclude:!0,replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(scope){scope.pnumbers=0}}},previousPuppies=function(){return{restrict:"E",templateUrl:"views/directives/previous-puppies.html",transclude:!0,replace:!0,scope:{ctrl:"=",text:"@",func:"&"},link:function(){}}},profileButtons=function(){return{restrict:"E",templateUrl:"views/directives/profile-buttons.html",transclude:!0,replace:!0,link:function(){}}},BoolString=function(){function BoolString(){}return BoolString.filter=function(value){return value===!0?"Yes":"No"},BoolString}(),SpacesToDashes=function(){function SpacesToDashes(){}return SpacesToDashes.filter=function(value){return value.replace(/ /g,"-")},SpacesToDashes}(),BreederProfile=function(){function BreederProfile(){}return BreederProfile}(),CopyProfileService=function(){function CopyProfileService(){this.BreederProfile=new BreederProfile}return CopyProfileService.prototype.GetProfileClone=function(){var dolly=new BreederProfile;for(var key in this.BreederProfile)this.BreederProfile.hasOwnProperty(key)&&(dolly[key]=this.BreederProfile[key]);return dolly},CopyProfileService.prototype.SetProfile=function(breederProfile){this.BreederProfile=breederProfile},CopyProfileService}(),DataService=function(){function DataService($http,$q){this.$http=$http,this.$q=$q}return DataService.prototype.getProfile=function(){var d=this.$q.defer();return this.$http.get("/BreederPersonal/GetProfile").success(function(result){d.resolve(result)}).error(function(){d.reject()}),d.promise},DataService.prototype.updateProfile=function(t){var d=this.$q.defer();return this.$http.post("/BreederPersonal/UpdateUserProfile",{BreederViewModel:t}).success(function(){d.resolve()}).error(function(){d.reject()}),d.promise},DataService.prototype.getGalleries=function(){var d=this.$q.defer();return this.$http.get("/BreederPersonal/GetGalleries").success(function(result){d.resolve(result)}).error(function(){d.reject()}),d.promise},DataService.prototype.updateGalleries=function(t){var d=this.$q.defer();return this.$http.post("/BreederPersonal/UpdateGalleries",{Galleries:t}).success(function(){d.resolve()}).error(function(){d.reject()}),d.promise},DataService}(),profile=angular.module("profile",["ui.router","angularFileUpload"]);profile.filter("boolString",function(){return function(value){return BoolString.filter(value)}}),profile.filter("spacesToDashes",function(){return function(value){return SpacesToDashes.filter(value)}}),profile.service("CopyProfileService",CopyProfileService),profile.directive("profileButtons",profileButtons),profile.directive("aboutInfoEdit",aboutInfoEdit),profile.directive("detailsInfo",detailsInfo),profile.directive("detailsInfoEdit",detailsInfoEdit),profile.directive("litters",litters),profile.directive("previousPuppies",previousPuppies),profile.directive("photosInfo",photosInfo),profile.directive("photoGalleries",photoGalleries),profile.directive("photoGallery",photoGallery),profile.directive("photoGalleryEdit",photoGalleryEdit),profile.directive("aboutInfo",aboutInfo),profile.directive("breederDetails",breederDetails),profile.controller("PhotosCtrl",PhotosCtrl),profile.value("toastr",toastr),profile.service("DataService",DataService),profile.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/profile/about"),$stateProvider.state("profile",{"abstract":!0,url:"/profile",templateUrl:"../views/profile.html"}).state("profile.about",{url:"/about",templateUrl:"../views/profile-about.html"}).state("profile.about.edit",{url:"/edit",templateUrl:"../views/profile-about-edit.html"}).state("profile.photos",{url:"/photos",controller:"PhotosCtrl",templateUrl:"../views/profile-photos.html"}).state("profile.photos.galleries",{url:"/gallery/:id",controller:"PhotosCtrl",template:"<div ui-view><photo-gallery id={{index.Id}} galleries='photosCtrl.Galleries'></photo-gallery></div>"}).state("profile.photos.galleries.edit",{url:"/edit",controller:"PhotosCtrl",template:"<photo-gallery-edit id={{index.Id}} galleries='photosCtrl.Galleries'></photo-gallery-edit>"}).state("profile.photos.edit",{url:"/edit",templateUrl:"../views/profile-photosEdit.html"}).state("profile.puppies",{url:"/puppies",templateUrl:"../views/profile-puppies.html"}).state("profile.puppies.edit",{url:"/edit",templateUrl:"../views/profile-puppiesEdit.html"}).state("profile.details",{url:"/details",templateUrl:"../views/profile-details.html"}).state("profile.details.edit",{url:"/edit",templateUrl:"../views/profile-detailsEdit.html"}).state("profile.testimonials",{url:"/testimonials",templateUrl:"../views/profile-testimonials.html"}).state("profile.testimonials.edit",{url:"/edit",templateUrl:"../views/profile-testimonialsEdit.html"})}]);
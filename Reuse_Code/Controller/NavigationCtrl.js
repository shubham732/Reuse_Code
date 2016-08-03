myapp.controller("NavigationCtrl", function ($scope, $rootScope, AppService,$location) {

    $scope.switchActivity = "Wrapper";
    $scope.toggleObject = { index: -1,subtype:'nil' };
    //$scope.hasactiveclass = true;
    //$scope.ApplyClass = function () {

    //    $scope.hasactiveclass = !$scope.hasactiveclass;
    //}
    //callLoader()
    getdata()
    //function callLoader()
    //{
    //    AppService.ShowLoader();
    //    $rootScope.showcontent = true;
    //    AppService.HideLoader();
    //    //javascript: document.body.contentEditable = 'true'; 
        
    //}
    function getdata()
    {
        AppService.ShowLoader('ReuseLoader');
        $.ajax
         ({
             type: "POST",
             async: true,
             url: "Views/Partials/webService.asmx/SelectedReuseTypeInfo",
             data: "{'ReuseName':'Wrapper'}",
             contentType: "application/json; charset=utf-8",
             dataType: "json",

             success: function (a) {
                 var data = JSON.parse(JSON.stringify(a.d));
                 $scope.$apply(function () {
                     $scope.WrapperClassesInfo = data;
                     AppService.HideLoader('ReuseLoader');
                 });




             },
             error: function (r) {
                 alert("Failed Configure Airplane");
                 AppService.HideLoader();

             }
         });

    }
    $scope.navigateTo = function (viewurl,classname) {
        AppService.navigateTo(viewurl);
        $scope.switchActivity = viewurl;
        $scope.ClassName = classname;
    }
    $scope.LoadClassContent = function (viewurl, ID) {
        $location.url("/" + viewurl + "/" + ID);
        //clsname.switchActivityforsubcategory = !clsname.switchActivityforsubcategory;
        //$scope.ClassName = classname;
    }
});
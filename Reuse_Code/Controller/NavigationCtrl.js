myapp.controller("NavigationCtrl", function ($scope, $rootScope, AppService, $location) {

   
    $scope.hasactiveclass = true;
    $scope.ApplyClass = function () {

        $scope.hasactiveclass = !$scope.hasactiveclass;
    }
    callLoader()
    function callLoader()
    {
        AppService.ShowLoader();
        $rootScope.showcontent = true;
        AppService.HideLoader();
        //javascript: document.body.contentEditable = 'true'; 
        
    }
    $scope.navigateTo = function (viewurl) {
        $location.url('/' + viewurl);
    }
});
myapp.controller("myctrl", function ($scope, AppService) {
   
    getData();
   
    function getData() {
        //
        //$.ajax
        //   ({
        //       type: "POST",
        //       async: true,
        //       url: "Views/Partials/webService.asmx/GetcategoryName",
        //       data: "{'ReuseName':'Wrapper'}",
        //       contentType: "application/json; charset=utf-8",
        //       dataType: "json",

        //       success: function (a) {
        //           var data = JSON.parse(JSON.stringify(a.d));
        //           $scope.$apply(function(){
        //           $scope.CategoryInfo = data;
        //       });
                   



        //       },
        //       error: function (r) {
        //           alert("Failed Configure Airplane");

        //       }
        //   });

       
        

    }
    $scope.navigateTo = function (viewurl) {
        AppService.navigateTo(viewurl);
     
    }
});


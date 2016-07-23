var myapp = angular.module("myApp", ['ngRoute']);

    myapp.config(['$routeProvider',
                      function ($routeProvider) {
                          $routeProvider
                            .when('/Home', {
                                templateUrl: 'Views/Partials/Container.html',
                                controller: 'myctrl'
                            })
                              .when('/Dashboard', {
                                  templateUrl: 'Views/Partials/Container.html',
                                  controller: 'myctrl'
                              })
                               .when('/Setting', {
                                   templateUrl: 'Views/Partials/Setting.html',
                                   controller: 'myctrl'
                               })
                              
                            .otherwise({
                                redirectTo: '/Home'
                            });
                      }]);
    //myapp.controller()
    //myapp.run(function ($rootScope) {
    //    $.ajax
    //       ({
    //           type: "POST",
    //           async: true,
    //           url: "Views/Partials/webService.asmx/HelloWorld",
    //           contentType: "application/json; charset=utf-8",
    //           dataType: "json",
               
    //           success: function (a) {
    //               var data = JSON.parse(JSON.stringify(a.d));
    //               $rootScope.content = data;


                   
    //           },
    //           error: function (r) {
    //               alert("Failed Configure Airplane");
                
    //           }
    //       });
    //});

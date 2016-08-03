var myapp = angular.module("myApp", ['ngSanitize','ngRoute']);

    myapp.config(['$routeProvider',
                      function ($routeProvider) {
                          $routeProvider
                            
                              .when('/Wrapper', {
                                  templateUrl: 'Views/Partials/WrapperHome.html',
                                  controller: 'myctrl'
                              })
                               .when('/I/O', {
                                   templateUrl: 'Views/Partials/Setting.html',
                                   controller: 'inputoutputctrl'
                               })
                              .when('/Sample', {
                                  templateUrl: 'Views/Partials/Sample.html',
                                  controller: 'myctrl'
                              })
                               .when('/Container', {
                                   templateUrl: 'Views/Partials/Sample.html',
                                   controller: ''
                               })
                              .when('/WrapperClassContainer/:ID', {
                                  templateUrl: 'Views/Partials/ClassContainer.html',
                                  controller: 'ClassContainerCtrl'
                              })
                            .otherwise({
                                redirectTo: '/Wrapper'
                            });
                      }]);
    
    myapp.run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (!current) {
                $location.url('/Wrapper');
            }
        });
    })
    myapp.filter('breakFilter', function () {
        return function (text) {
            if (text !== undefined) return text.replace(/\n/g, '<br />');
        };
    });
  
  

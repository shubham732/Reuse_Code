var AppService = angular.module('myApp')
.factory('AppService', function ($rootScope, $location) {
    return {
        ShowLoader: function (text) {

            (function () {
                setTimeout(function () {
                    $rootScope.$apply(function () {
                        if (text == 'ReuseLoader')
                        {
                            $rootScope.ReuseLoaderVisibility = true;
                        }
                        else if (text == 'ReuseSubtypeLoader')
                        {
                            $rootScope.ReuseSubtypeLoaderVisibility = true;
                        }
                        $rootScope.showcontent = false;
                        var mask = $('<div></div>')
      .css({
          background: '#616165',
          opacity: 0.5,
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
       


          left: 0,

          'z-index': 10000
      })
      .attr('id','pageloadercontroller')
      .appendTo(document.body)
      .off('click')
                    })
                }, 0);
            })();
        },
        HideLoader: function (text) {
            (function () {
                setTimeout(function () {
                    $rootScope.$apply(function () {
                        if (text == 'ReuseLoader') {
                            $rootScope.ReuseLoaderVisibility = false;
                        }
                        else if (text == 'ReuseSubtypeLoader') {
                            $rootScope.ReuseSubtypeLoaderVisibility = false;
                        }
                        $rootScope.showcontent = true;
                        var mask = $('#pageloadercontroller')
      //.css({
      //    background: '#ffffff',
      //    opacity: 0,
      //    'z-index': 0
      //})
      //.appendTo(document.body)
                        //.on('click')
                        .remove();
                    })
                },2000);
            })();
        },
        LoadTimer: function (text,time) {

            (function () {
                setTimeout(function () {
                    $rootScope.$apply(function () {
                        if (text == 'ReuseLoader') {
                            $rootScope.ReuseLoaderVisibility = false;
                        }
                        else if (text == 'ReuseSubtypeLoader') {
                            $rootScope.ReuseSubtypeLoaderVisibility = false;
                        }
                        $rootScope.showcontent = true;
                        var mask = $('#pageloadercontroller')
                      //.css({
                      //    background: '#ffffff',
                      //    opacity: 0,
                      //})
                      //.appendTo(document.body)
                      //.click(function (event) {
                      //    event.preventDefault();
                      //    return false;
                      //})
                     .remove();
                    })
                }, 0);
            })();

            (function () {
                setTimeout(function () {
                    $rootScope.$apply(function () {
                        if (text == 'ReuseLoader') {
                            $rootScope.ReuseLoaderVisibility = true;
                        }
                        else if (text == 'ReuseSubtypeLoader') {
                            $rootScope.ReuseSubtypeLoaderVisibility = true;
                        }
                        $rootScope.showcontent = false;
                        var mask = $('<div></div>')
                        .css({
                            background: '#616165',
                            opacity: 0.5,
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,


                            left: 0,

                            'z-index': 10000
                        })
                             .attr('id', 'pageloadercontroller')
                        .appendTo(document.body)
                        .click(function (event) {
                            event.preventDefault();
                            return false;
                        })

                    })
                }, 0);
            })();

            (function () {
                setTimeout(function () {
                    $rootScope.$apply(function () {
                        if (text == 'ReuseLoader') {
                            $rootScope.ReuseLoaderVisibility = false;
                        }
                        else if (text == 'ReuseSubtypeLoader') {
                            $rootScope.ReuseSubtypeLoaderVisibility = false;
                        }
                        $rootScope.showcontent = true;
                        var mask = $('#pageloadercontroller')
                      //.css({
                      //    background: '#ffffff',
                      //    opacity: 0,
                      //})
                      //.appendTo(document.body)
                      //.click(function (event) {
                      //    event.preventDefault();
                      //    return false;
                        //})
                         .remove();
                    })
                }, time);
            })();
        },
        navigateTo : function (viewurl) {
        $location.url('/' + viewurl);
        $rootScope.switchActivity = viewurl
    }

    };
});





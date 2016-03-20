var myApp = angular.module('mylanhack', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/html/map.html',
            controller: 'feedContrl'
        })


    .when('/wbdIndia', {
        templateUrl: '/html/worldBankData.html',
        controller: 'wbdCntrl'
    })
    
    .when('/wbdSing', {
        templateUrl: '/html/worldBankData.html',
        controller: 'wbdCntrl2'
    })
    
     .when('/simulation', {
        templateUrl: '/html/worldBankData.html',
        controller: 'wbdCntrl2'
    });

    //wbd
});
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
    });

    //wbd
});
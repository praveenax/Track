myApp.directive('home', function () {
    return {
        templateUrl: "/static/frontend/html/Home.html"
    };


});

myApp.directive('profile', function () {
    return {
        templateUrl: "/static/frontend/html/Profile.html"
    };


});

myApp.directive('pageHeader', function () {
    return {
        templateUrl: "/static/frontend/html/common/header.html"
    };


});

myApp.directive('pageFooter', function () {
    return {
        templateUrl: "/static/frontend/html/common/footer.html"
    };


});

myApp.directive('feedbutton', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/static/frontend/html/feed/feedButton.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('skilltag', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/static/frontend/html/feed/skilltag.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('statusbar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/static/frontend/html/common/statusBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;
            console.log(attrs);



        }
    };


});

myApp.directive('productItem', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/static/frontend/html/feed/product_item.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('positionItem', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/static/frontend/html/feed/position_item.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;




        }
    };


});

myApp.directive('teamItem', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/static/frontend/html/feed/team_item.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;




        }
    };


});

myApp.directive('cultureItem', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/static/frontend/html/feed/culture_item.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;




        }
    };


});
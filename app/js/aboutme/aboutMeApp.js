(function() {
    var aboutMeApp = angular.module('blogApp.aboutme', ['ngRoute', 'blogApp.services']);

    aboutMeApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/about-me', {
                templateUrl: 'js/aboutme/aboutMeView.html',
                controller: 'aboutMeController'
            });
        }
    ]);

    aboutMeApp.controller('aboutMeController',["$scope", "$routeParams", "EverliveService","$rootScope" , function($scope, $routeParams, EverliveService, $rootScope) {
        $rootScope.pageTitle = 'ddimitrov about me';
    }]);
})();
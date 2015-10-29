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

    aboutMeApp.controller('aboutMeController', function($scope, $routeParams, EverliveService) {
        $scope.name = 'Dimitar Dimitrov!';
    });
})();
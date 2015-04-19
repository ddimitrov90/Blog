(function() {
    var aboutMeApp = angular.module('blogApp.aboutme', ['ngRoute', 'blogApp.services']);

    aboutMeApp.controller('aboutMeController', function($scope, $routeParams, EverliveService) {
        $scope.name = 'MITKO!';
    });
})();
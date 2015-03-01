(function() {
    var aboutMeApp = angular.module('blogApp.aboutme', ['ngRoute', 'blogApp.services']);

    aboutMeApp.controller('aboutMeController', function($scope, $routeParams, EverliveService) {
        jQuery(".current").removeClass();
        jQuery("#aboutmeLink").addClass('current');   
        $scope.name = 'MITKO!';
    });
})();
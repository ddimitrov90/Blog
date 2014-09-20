(function() {
    var detailsApp = angular.module('blogApp.details', ['ngRoute', 'blogApp.services']);

    detailsApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/details/:url', {
                templateUrl: 'js/details/detailsView.html',
                controller: 'detailsController'
            });
        }
    ]);

    detailsApp.controller('detailsController', function($scope, $routeParams, EverliveService) {
        EverliveService.getBlogPostByUrl($routeParams.url).then(
          function(result) { 
                $scope.post = result;
          },
          function() {
          }
        );
    });
})();
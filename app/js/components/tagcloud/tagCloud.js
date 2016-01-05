(function() {

    var tagCloudApp = angular.module('blogApp.tagCloud', [ 'blogApp.services']);

    tagCloudApp.controller('tagCloudController',["$scope", "EverliveService", function($scope, EverliveService) {
       	EverliveService.getTags().then(
          function(result) {
            $scope.tags = result;
          },
          function() {
          }
        );
    }]);

    tagCloudApp.directive('tagCloud', function() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/tagcloud/tagCloudView.html',
            controller: 'tagCloudController'
        };
    });
})();
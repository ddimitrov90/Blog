(function() {
    var searchApp = angular.module('blogApp.search', ['ngRoute', 'blogApp.services']);
    searchApp.controller('searchController', function($scope, $stateParams, EverliveService) {
        var tag = $stateParams.tag;
        EverliveService.getBlogPostByTag(tag).then(
            function(result) {
                $scope.blogPosts = result;
            },
            function() {}
        );
    });

    searchApp.controller('archiveController', function($scope, $stateParams, EverliveService) {
        var month = $stateParams.month;
        EverliveService.getBlogPostsByMonth(month).then(
            function(result) {
                $scope.blogPosts = result;
            },
            function() {}
        );
    });
})();
(function() {
    var searchApp = angular.module('blogApp.search', ['ngRoute', 'blogApp.services']);

    searchApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/search/:tag', {
                templateUrl: 'js/search/searchView.html',
                controller: 'searchController'
            });
        }
    ]);

    searchApp.controller('searchController', function($scope, $routeParams, EverliveService) {
        var tag = $routeParams.tag;
        EverliveService.getBlogPostByTag(tag).then(
            function(result) {
                $scope.blogPosts = result;
            },
            function() {}
        );
    });
})();
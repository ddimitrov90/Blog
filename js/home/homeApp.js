(function() {
    var homeApp = angular.module('blogApp.home', ['ngRoute', 'infinite-scroll', 'blogApp.services']);

    homeApp.controller('homeController', function($window, $scope, EverliveService, MetaInformationService, $rootScope) {
        $scope.blogPosts = [];
        $scope.isLoading = false;
        $rootScope.pageTitle = 'Dimitar\s Blog';
        $scope.loadBlogPosts = function() {
            if($scope.isLoading) return;
            $scope.isLoading = true;
            EverliveService.getBlogPosts({ 'Tags' : { $nin : ['fitness'] }}, 5, $scope.blogPosts.length).then(
                function(result) {
                    if(result.length == 0){
                        return;
                    }
                    for (var i = 0; i < result.length; i++) {
                        $scope.blogPosts.push(result[i]);
                    };
                    $scope.isLoading = false;
                },
                function() {}
            );
        };
    });
})();
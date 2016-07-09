(function() {
    var homeApp = angular.module('blogApp.home', ['ngRoute', 'blogApp.services']);

    homeApp.controller('homeController', [ "$window", "$scope", "EverliveService", "MetaInformationService","$rootScope" , function($window, $scope, EverliveService, MetaInformationService,$rootScope) {
        $scope.blogPosts = [];
        $scope.isLoading = false;
        $rootScope.pageTitle = 'ddimitrov blog';
        $scope.loadBlogPosts = function() {
            if($scope.isLoading) return;
            $scope.isLoading = true;
            EverliveService.getBlogPosts({ }, 100, 0).then(
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
        $scope.loadBlogPosts();
    }]);
})();
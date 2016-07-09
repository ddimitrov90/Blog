(function() {
    var homeApp = angular.module('blogApp.fitness', ['ngRoute', 'blogApp.services']);

    homeApp.controller('fitnessController', function($window, $scope, EverliveService, MetaInformationService) {
        $scope.blogPosts = [];
        $scope.isLoading = false;

        $scope.loadBlogPosts = function() {
            if($scope.isLoading) return;
            $scope.isLoading = true;
            EverliveService.getBlogPostByTag('fitness', 5, $scope.blogPosts.length).then(
                function(result) {
                    if(result.length == 0){
                        return;
                    }
                    for (var i = 0; i < result.length; i++) {
                        $scope.blogPosts.push(result[i]);
                    };
                    $window.document.title = 'Mitko\'s fitness blog';
                    MetaInformationService.setMetaDescription('Fitness diary');
                    $scope.isLoading = false;
                },
                function() {}
            );
        };
    });
})();
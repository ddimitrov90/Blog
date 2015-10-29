(function() {
    var detailsApp = angular.module('blogApp.details', ['ngRoute', 'blogApp.services', 'angularUtils.directives.dirDisqus']);

    detailsApp.controller('detailsController', function($window, $scope, $stateParams, EverliveService, MetaInformationService,$timeout,$rootScope) {        
        $scope.contentLoaded = false;
        EverliveService.getBlogPostByUrl($stateParams.url).then(
            function(result) {
                $scope.post = result;
                $scope.post.Comments = $scope.post.Comments || [];
                $window.document.title = result.Title;
                $rootScope.pageTitle = result.Title;
                MetaInformationService.setMetaDescription(result.MetaDescription);
                MetaInformationService.setMetaKeywords(result.MetaKeywords);
                $timeout(function(){
                    $scope.contentLoaded = true;
                    $scope.disqusUrl = $window.location.href;  
                    EverliveService.resizeImages().then(function(result){                        
                    });
                }, 0);

            },
            function() {}
        );
    });    
})();
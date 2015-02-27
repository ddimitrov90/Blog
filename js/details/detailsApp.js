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
                $scope.post.Comments = $scope.post.Comments || [];
            },
            function() {}
        );

        $scope.addComment = function(){
            var newComment = {'Author': $scope.newCommentAuthor,'Comment' : $scope.newCommentPost};

            EverliveService.addNewComment($scope.post.Id, newComment).then(
                function(result) {
                    $scope.post.Comments.push(newComment);
                },
                function() {}
            );
        }
    });    
})();
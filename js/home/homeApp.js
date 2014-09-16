(function() {
    var homeApp = angular.module('blogApp.home', ['blogApp.services']);
    homeApp.controller('homeController', function($scope,EverliveService) {
    	$scope.testBind	 = "asdasdas" + EverliveService.test;
    	
    	EverliveService.getBlogPosts().then(
	        function(result) { 
	              $scope.asd = result.count;
	        },
        	function() {
      		}
      	);
    });
})();
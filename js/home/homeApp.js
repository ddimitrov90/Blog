(function() {
    var homeApp = angular.module('blogApp.home', ['ngRoute','blogApp.services']);

    homeApp.controller('homeController', function($window, $scope, EverliveService, MetaInformationService) {

        jQuery(".current").removeClass();
        jQuery("#homeLink").addClass('current');    	
    	
    	EverliveService.getBlogPosts(5).then(
	        function(result) { 
	              $scope.blogPosts = result;
                $window.document.title = 'Mitko\'s blog';
                MetaInformationService.setMetaDescription('this is from home');
	        },
        	function() {
      		}
      	);
    });
})();
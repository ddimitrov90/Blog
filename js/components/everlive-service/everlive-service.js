(function() {
    var blogAppServices = angular.module('blogApp.services', []);
    blogAppServices.service('EverliveService', function($q){
    	this.test = 'Mitkoo0o0';
    	var el = new Everlive('fW5fEkhhplSXgaCS');
    	var data= el.data('BlogPost');

    	this.getBlogPosts = function() {
    		var deferred = $q.defer();
    		data.get().then(function(data){
		         deferred.resolve(data);
		    },
		    function(error){
		        deferred.reject(error);
		    });
		    return deferred.promise;
    	};
    });
})();
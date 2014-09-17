(function() {
    var blogAppServices = angular.module('blogApp.services', []);
    blogAppServices.service('EverliveService', function($q) {
        var el = new Everlive('fW5fEkhhplSXgaCS');
        var data = el.data('BlogPost');

        this.getBlogPosts = function getBlogPosts(count) {
            if (!count) {
                count = 5;
            }
            var query = new Everlive.Query();
            query.order('Date').take(count);

            var deferred = $q.defer();
            data.get().then(function(data) { 
                    deferred.resolve(data.result);
                },
                function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.getBlogPostByUrl = function getBlogPostByUrl(url) {
            var deferred = $q.defer();
            data.get({
                Url: url
            }).then(function(data) { 
                    deferred.resolve(data);
                },
                function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.addNewBlogPost = function addNewBlogPost(blogPost) {
            var deferred = $q.defer();
            data.create(blogPost).then(function(data) { 
                    deferred.resolve(data);
                },
                function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
    });
})();
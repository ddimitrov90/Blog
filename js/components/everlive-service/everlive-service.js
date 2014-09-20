(function() {
    var blogAppServices = angular.module('blogApp.services', []);
    blogAppServices.service('EverliveService', function($q) {
        var self = this;
        var el = new Everlive('fW5fEkhhplSXgaCS');
        var data = el.data('BlogPost');

        this.getBlogPosts = function getBlogPosts(count) {
            if (!count) {
                count = 5;
            }
            var query = new Everlive.Query();
            query.orderDesc('Date').take(count);

            var deferred = $q.defer();
            data.get(query).then(function(data) { 
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
                    deferred.resolve(data.result[0]);
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

        this.getBlogPostByTag = function getBlogPostByTag(tag) {
            var deferred = $q.defer();
            data.get({
                Tags: tag
            }).then(function(data) { 
                    deferred.resolve(data.result);
                },
                function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.getBlogPostsArchive = function getBlogPostsArchive() {

            var query = new Everlive.Query();
            query.orderDesc('Date').select('Title', 'Url', 'Archive');

            var deferred = $q.defer();
            data.get(query).then(function(data) { 
                    var archivedData = self._buildArchiveData(data.result);
                    deferred.resolve(archivedData);
                },
                function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        this._buildArchiveData = function _buildArchiveData(everliveData) {
            var result = {};
            for (var i = 0; i < everliveData.length; i++) {
                var currentBlogPost = everliveData[i];
                if(!result[currentBlogPost.Archive]){
                    result[currentBlogPost.Archive] = [];
                }
                result[currentBlogPost.Archive].push(currentBlogPost);
            };
        }
    });
})();
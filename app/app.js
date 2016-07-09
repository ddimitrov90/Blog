'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('blogApp', [
	'ngRoute',
	'ui.router',
	'blogApp.home',
	'blogApp.fitness',
	'blogApp.details',
	'blogApp.search',
	'blogApp.archive',
	'blogApp.tagCloud',
	'blogApp.aboutme',
  	'angular-google-analytics',
  	'hljs'
]).
config(['$stateProvider', '$urlRouterProvider','$locationProvider','AnalyticsProvider', 'hljsServiceProvider', function($stateProvider, $urlRouterProvider, $locationProvider, AnalyticsProvider, hljsServiceProvider) {
	$locationProvider.hashPrefix('!');

	$urlRouterProvider.otherwise("home");

	hljsServiceProvider.setOptions({
    	languages: ["swift","Swift"]
  	});

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: 'js/home/homeView.html',
			controller: 'homeController'
		})
		.state('fitness', {
			url: "/fitness",
			templateUrl: 'js/fitness/fitnessView.html',
			controller: 'fitnessController'
		})
		.state('archive', {
			url: "/archive/:month",
			templateUrl: 'js/home/homeView.html',
			controller: 'archiveController'
		})
		.state('search', {
			url: "/search/:tag",
			templateUrl: 'js/home/homeView.html',
			controller: 'searchController'
		})
		.state('details', {
			url: '/details/:url',
			templateUrl: "js/details/detailsView.html",
			controller: 'detailsController'
		})
		.state('about', {
			url: '/about-me',
			templateUrl: 'js/aboutme/aboutMeView.html',
			controller: 'aboutMeController'
		});

    AnalyticsProvider
    .setAccount('UA-79546596-1')
    .setPageEvent('$stateChangeSuccess');


}]);

app.service('MetaInformationService', function() {
	var metaDescription = '';
	var metaKeywords = '';
	return {
		metaDescription: function() { return metaDescription; },
		metaKeywords: function() { return metaKeywords; },
		reset: function() {
			metaDescription = '';
			metaKeywords = '';
		},
		setMetaDescription: function(newMetaDescription) {
			metaDescription = newMetaDescription;
		},
		setMetaKeywords: function(newMetaKeywords) {
			metaKeywords = newMetaKeywords;
		},
		appendMetaKeywords: function(newKeywords) {
			for (var key in newKeywords) {
				if (metaKeywords === '') {
					metaKeywords += newKeywords[key].name;
				} else {
					metaKeywords += ', ' + newKeywords[key].name;
				}
			}
		}
	};
});

app.filter("sanitize", ['$sce', function($sce) {
	return function(htmlCode){
		return $sce.trustAsHtml(htmlCode);
	}
}]);

app.run(['$rootScope','MetaInformationService', 'Analytics', function($rootScope, MetaInformationService, Analytics){
	 $rootScope.MetaInformation = MetaInformationService;
	 $rootScope.$on('$stateChangeSuccess', function(event, next, current) {

			// handle current item class
		 	var elements = document.getElementsByClassName('current');

		 	Array.prototype.forEach.call(elements, function(element) {
			   element.className = "";
			});

			var controllerLinks = {
				homeController : 'homeLink',
				aboutMeController : 'aboutmeLink'
			};
			if(controllerLinks[next.controller]){
				document.getElementById(controllerLinks[next.controller]).className = "current";				
			}
		});
			
}]);





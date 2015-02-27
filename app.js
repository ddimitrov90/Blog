'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('blogApp', [
  'ngRoute',
  'ui.router',
  'blogApp.home',
  'blogApp.details',
  'blogApp.search',
  'blogApp.archive',
  'blogApp.tagCloud'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: 'js/home/homeView.html',
      controller: 'homeController'
    })
    .state('details', {
      url: '/details/:url',
      templateUrl: "js/details/detailsView.html",
      controller: 'detailsController'
    });

}]);

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);
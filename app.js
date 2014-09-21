'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('blogApp', [
  'ngRoute',
  'blogApp.home',
  'blogApp.details',
  'blogApp.search',
  'blogApp.archive',
  'blogApp.tagCloud'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);
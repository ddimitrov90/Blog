'use strict';


// Declare app level module which depends on filters, and services
angular.module('blogApp', [
  'ngRoute',
  'blogApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/partial1.html', controller: 'homeController'});
  $routeProvider.when('/details', {templateUrl: 'partials/partial2.html', controller: 'homeController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

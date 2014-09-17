'use strict';


// Declare app level module which depends on filters, and services
angular.module('blogApp', [
  'ngRoute',
  'blogApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
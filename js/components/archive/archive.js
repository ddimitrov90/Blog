(function() {

    var archiveApp = angular.module('blogApp.archive', []);

    archiveApp.directive('archiveWidget', function() {
        return {
        	restrict: 'E',
            templateUrl: '/js/components/archive/archiveView.html'
        };
    });
})();
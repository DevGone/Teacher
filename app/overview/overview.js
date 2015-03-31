'use strict';

angular.module('teacher.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'overview/overview.html',
    controller: 'OverviewCtrl'
  });
}])

.controller('OverviewCtrl', [function() {

}]);

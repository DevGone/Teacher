'use strict';

angular.module('student.consumption', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/consumption', {
    templateUrl: 'consumption/consumption.html',
    controller: 'ConsumptionCtrl'
  });
}])

.controller('ConsumptionCtrl', [function() {

}]);
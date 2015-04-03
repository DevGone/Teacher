'use strict';

angular.module('student.rewards', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rewards', {
    templateUrl: 'rewards/rewards.html',
    controller: 'RewardsCtrl'
  });
}])

.controller('RewardsCtrl', [function() {

}]);
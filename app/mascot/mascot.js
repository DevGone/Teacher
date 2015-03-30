'use strict';

angular.module('teacher.mascot', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mascot', {
    templateUrl: 'mascot/mascot.html',
    controller: 'MascotCtrl'
  });
}])

.controller('MascotCtrl', [function() {

}]);

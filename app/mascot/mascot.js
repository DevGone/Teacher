'use strict';

angular.module('teacher.mascot', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mascot', {
    templateUrl: 'mascot/mascot.html',
    controller: 'MascotCtrl'
  });
}])

.controller('MascotCtrl', ['$scope', 'socketManager', 'apiManager', function ($scope, socketManager, apiManager) {

// For debug only
  // var walter = io('http://devgone.herokuapp.com');
  // walter.emit('identification', { device: 'walter'});
  // walter.on('setColor', function(data) {
  //   console.log('Color set to: ');
  //   console.log(data);
  // });

  $scope.success = false;

  $scope.sendYellowEvent = function() {
    apiManager.setActiveEvent(0);
    socketManager.setColor(socketManager.yellowColor());
    $scope.success = true;
  };

  $scope.resetColor = function () {
    apiManager.setActiveEvent(-1);
    socketManager.setColor(socketManager.challengeColor());
    $scope.success = false;
  };

}]);

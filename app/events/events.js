'use strict';

angular.module('teacher.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'events/events.html',
    controller: 'EventsCtrl'
  });
}])

.controller('EventsCtrl', ['$scope', '$http', 'apiManager', 'socketManager', function ($scope, $http, apiManager, socketManager) {

  $scope.activeEvent = null;

  apiManager.getActiveEvent().then(function(data) {
    $scope.activeEvent = data.event;
  });

  $scope.terminateEvent = function() {
    $scope.activeEvent = null;
    apiManager.setActiveEvent(-1);
    socketManager.setColor(socketManager.challengeColor());
  }

}]);


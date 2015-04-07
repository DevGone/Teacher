'use strict';

angular.module('teacher.mascot', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mascot', {
    templateUrl: 'mascot/mascot.html',
    controller: 'MascotCtrl'
  });
}])

.controller('MascotCtrl', ["$scope", function ($scope) {

  var socket = io('http://devgone.herokuapp.com');

  socket.emit('identification', { device: 'teacher'});

// For debug only
  // var walter = io('http://devgone.herokuapp.com');
  // walter.emit('identification', { device: 'walter'});
  // walter.on('setColor', function(data) {
  //   console.log('Color set to: ');
  //   console.log(data);
  // });

  var yellowColor = {
    red: 255,
    green: 246,
    blue: 26
  };

  var challengerColor = {
    red: 70,
    green: 70,
    blue: 255
  };

  var setColor = function (color) {
    socket.emit('setColor', color);
  };

  $scope.sendYellowEvent = function() {
    setColor(yellowColor);
  };

  $scope.resetColor = function () {
    setColor(challengerColor);
  };

}]);

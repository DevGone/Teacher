'use strict';

angular.module('student.lessons', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lessons', {
    templateUrl: 'lessons/lessons.html',
    controller: 'LessonsCtrl'
  });
}])

.controller('LessonsCtrl', [function() {

}]);

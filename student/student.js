'use strict';

// Declare app level module which depends on views, and components
angular.module('student', [
  'ngRoute',
  'ui.bootstrap',
  'student.overview',
  'student.lessons',
  'student.consumption',
  'student.events',
  'student.mascot',
  'student.settings',
  'student.rankings',
  'student.history',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/overview'});
}]);
'use strict';

// Declare app level module which depends on views, and components
angular.module('teacher', [
  'ngRoute',
  'ui.bootstrap',
  'teacher.overview',
  'teacher.challenge',
  'teacher.events',
  'teacher.mascot',
  'teacher.settings',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/overview'});
}]);

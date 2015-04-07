'use strict';

// Declare app level module which depends on views, and components
angular.module('teacher', [
  'ngRoute',
  'ui.bootstrap',
  'teacher.overview',
  'teacher.lessons',
  'teacher.challenge',
  'teacher.events',
  'teacher.mascot',
  'teacher.settings',
  'teacher.rankings',
  'teacher.history',
  'teacher.api',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/overview'});
}]);

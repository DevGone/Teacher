'use strict';

angular.module('teacher.challenge', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/challenge', {
    templateUrl: 'challenge/challenge.html',
    controller: 'ChallengeCtrl'
  });
}])

.controller('ChallengeCtrl', [function() {

  $('#dataTable-challenge').dataTable( {
        "ajax": '../app/data/challenge.json',
        responsive: true
    } );

}]);

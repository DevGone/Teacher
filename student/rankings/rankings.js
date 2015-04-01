'use strict';

angular.module('student.rankings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rankings', {
    templateUrl: 'rankings/rankings.html',
    controller: 'RankingsCtrl'
  });
}])

.controller('RankingsCtrl', [function() {

  $('#dataTable-rankings').dataTable( {
        "ajax": '/app/data/rankings.json',
        responsive: true
    } );

}]);

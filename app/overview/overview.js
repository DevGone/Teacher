'use strict';

angular.module('teacher.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'overview/overview.html',
    controller: 'OverviewCtrl'
  });
}])

.controller('OverviewCtrl', [function() {

  Morris.Area({
      element: 'class-points-history-chart',
      data: [{
          period: '2015 W1',
          group1: 2666,
          group2: null,
          group3: 2647,
          group4: 1000
      }, {
          period: '2015 W2',
          group1: 2778,
          group2: 2294,
          group3: 2441,
          group4: 1000
      }, {
          period: '2015 W3',
          group1: 4912,
          group2: 1969,
          group3: 2501,
          group4: 1000
      }, {
          period: '2015 W4',
          group1: 3767,
          group2: 3597,
          group3: 5689,
          group4: 1000
      }, {
          period: '2015 W5',
          group1: 6810,
          group2: 1914,
          group3: 2293,
          group4: 1000
      }, {
          period: '2015 W6',
          group1: 5670,
          group2: 4293,
          group3: 1881,
          group4: 1000
      }, {
          period: '2015 W7',
          group1: 4820,
          group2: 3795,
          group3: 1588,
          group4: 1000
      }, {
          period: '2015 W8',
          group1: 15073,
          group2: 5967,
          group3: 5175,
          group4: 1000
      }, {
          period: '2015 W9',
          group1: 10687,
          group2: 4460,
          group3: 2028,
          group4: 1000
      }, {
          period: '2015 W10',
          group1: 8432,
          group2: 5713,
          group3: 1791,
          group4: 1000
      }],
      xkey: 'period',
      ykeys: ['group1', 'group2', 'group3', 'group4'],
      labels: ['Groupe n°1', 'Groupe n°2', 'Groupe n°3', 'Groupe n°4'],
      pointSize: 3,
      hideHover: 'auto',
      resize: true,
      lineColors: ['#2E79B9', '#58B957', '#F2AE43', '#DB524B']
  });

}]);

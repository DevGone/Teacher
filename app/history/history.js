'use strict';

angular.module('teacher.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'history/history.html',
    controller: 'HistoryCtrl'
  });
}])

.controller('HistoryCtrl', [function() {

  Morris.Area({
      element: 'class-points-history-chart',
      data: [{
          period: '2015 W1',
          group1: 137,
          group2: 158,
          group3: 129,
          group4: 132
      }, {
          period: '2015 W2',
          group1: 145,
          group2: 137,
          group3: 167,
          group4: 112
      }, {
          period: '2015 W3',
          group1: 213,
          group2: 345,
          group3: 237,
          group4: 222
      }, {
          period: '2015 W4',
          group1: 432,
          group2: 498,
          group3: 387,
          group4: 407
      }, {
          period: '2015 W5',
          group1: 456,
          group2: 476,
          group3: 489,
          group4: 424
      }, {
          period: '2015 W6',
          group1: 645,
          group2: 434,
          group3: 587,
          group4: 556
      }, {
          period: '2015 W7',
          group1: 703,
          group2: 712,
          group3: 687,
          group4: 693
      }, {
          period: '2015 W8',
          group1: 478,
          group2: 734,
          group3: 701,
          group4: 675
      }, {
          period: '2015 W9',
          group1: 723,
          group2: 691,
          group3: 704,
          group4: 698
      }, {
          period: '2015 W10',
          group1: 730,
          group2: 717,
          group3: 678,
          group4: 657
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

'use strict';

angular.module('student.consumption', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/consumption', {
    templateUrl: 'consumption/consumption.html',
    controller: 'ConsumptionCtrl'
  });
}])

.controller('ConsumptionCtrl', [ '$scope', function($scope) {
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
      ykeys: ['group1', 'group2', 'group3'],
      labels: ['Moi', 'Mon groupe', 'Ma classe'],
      pointSize: 3,
      hideHover: 'auto',
      resize: true,
      lineColors: ['#2E79B9', '#58B957', '#F2AE43']
  });

  var isConsumptionVgn1 = true;
  var vignette1 = document.getElementById("vignette1");
  var lbBtnVign1 = document.getElementById("lbBtnVign1");
  $scope.toggle1 = function() {
    if(isConsumptionVgn1 == true) {
      vignette1.innerHTML = '<div class="row"><div class="col-lg-12" center><div class="img-radio-reveil"></div>'+
        '<div class="img-radio-reveil"></div><div class="img-radio-reveil"></div><div class="img-radio-reveil"></div>' +
        '<div class="img-radio-reveil"></div></div><div class="col-lg-12" text-right>'+
        '<div class="" style="margin-top: 5px;">Consommation par jour :</br>5 radio-réveils</div></div></div>';
      lbBtnVign1.innerHTML = 'Revoir la consommation';
      isConsumptionVgn1 = false;
    } else {
      vignette1.innerHTML = '<div class="row"><div class="col-xs-6"><div class="huge">Hier : </div>' +
        '</div><div class="col-xs-6 text-right"><div class="huge">275</div><div>Watt-heure</div></div></div>';
      lbBtnVign1.innerHTML = "Voir l'équivalence";
      isConsumptionVgn1 = true;      
    }
  };

  var isConsumptionVgn2 = true;
  var vignette2 = document.getElementById("vignette2");
  $scope.toggle2 = function() {
    if(isConsumptionVgn2 == true) {
      var text = '<div class="row"><div class="col-lg-12" center>';
      for(var i=0; i < 15; i++) {
        text = text + '<div class="img-fridge"></div>'
      }
      vignette2.innerHTML = text + '</div><div class="col-lg-12" text-right>'+
        '<div class="" style="margin-top: 5px;">Consommation par jour :</br>15 réfrégirateurs</div></div></div>';
      lbBtnVign2.innerHTML = 'Revoir la consommation';
      isConsumptionVgn2 = false;
    } else {
      vignette2.innerHTML = '<div class="row"><div class="col-xs-6"><div class="huge">Début : </div>' +
        '</div><div class="col-xs-6 text-right"><div class="huge">12 300</div><div>Watt-heure</div></div></div>';
      lbBtnVign2.innerHTML = "Voir l'équivalence";
      isConsumptionVgn2 = true;      
    }
  };

}]);
'use strict';

angular.module('teacher.settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settings', {
    templateUrl: 'settings/settings.html',
    controller: 'SettingsCtrl'
  });
}])

.controller('SettingsCtrl', ['$scope', function($scope) {
    var nbGroup = 4;

    $( "ul.droptrue" ).sortable({
      connectWith: "ul"
    });
 
    $( "#sortable1" ).disableSelection();

    $( "#dialogStudent" ).dialog({
      autoOpen: false,
      width: 800,
      height: 300, 
      buttons: {
        "Ajouter": function() {
          $( "#dialogStudent" ).dialog( "close" );
        },
        "Annuler": function() {
          $( "#dialogStudent" ).dialog( "close" );
        }
      }
    });

    $scope.addStudentEvent = function() {
        $( "#dialogStudent" ).dialog( "open" );
    };

    $scope.addGroupEvent = function() {
        nbGroup = nbGroup +1;
        var groupHtml = '<div class="col-lg-6"><div class="panel panel-info"><div class="panel-heading">' +
            'Groupe ' + nbGroup + '</div><div class="panel-body"><ul id="sortable5" class="droptrue">' + 
            '</ul></div></div></div>';
        var newGroupDiv = document.getElementById("newGroupDiv");
        newGroupDiv.innerHTML = newGroupDiv.innerHTML + groupHtml;
    };
}]);

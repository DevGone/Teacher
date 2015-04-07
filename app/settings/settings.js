'use strict';

angular.module('teacher.settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settings', {
    templateUrl: 'settings/settings.html',
    controller: 'SettingsCtrl'
  });
}])

.controller('SettingsCtrl', ['$scope', function($scope) {
    var nbGroup = 3;

    $( "ul.sortableUL" ).sortable({
      connectWith: "ul",
      dropOnEmpty: true
    }).disableSelection();

    // $( "#dialogStudent" ).dialog({
    //   autoOpen: false,
    //   width: 800,
    //   height: 300, 
    //   buttons: {
    //     "Ajouter": function() {
    //       $( "#dialogStudent" ).dialog( "close" );
    //     },
    //     "Annuler": function() {
    //       $( "#dialogStudent" ).dialog( "close" );
    //     }
    //   }
    // });

    // $scope.addStudentEvent = function() {
    //     $( "#dialogStudent" ).dialog( "open" );
    // };

      $scope.optionsGroup = [
        { label: 'Groupe 1', value: 1 },
        { label: 'Groupe 2', value: 2 },
        { label: 'Groupe 3', value: 3 }
    ];

    $scope.addGroupEvent = function() {
        nbGroup = nbGroup +1;
        var groupHtml = '<div class="col-lg-6"><div class="panel panel-red"><div class="panel-heading">' +
            'Groupe ' + nbGroup + '</div><div class="panel-body"><ul id="ulGroup4" class="sortableUL">' + 
            '</ul></div></div></div>';
        var newGroupDiv = document.getElementById("newGroupDiv");
        newGroupDiv.innerHTML = newGroupDiv.innerHTML + groupHtml;
        $scope.optionsGroup.push({ label: 'Groupe 4', value: 4 })
        $("ul.sortableUL").sortable({connectWith: "ul", dropOnEmpty: true}).disableSelection();
    };

     $scope.addStudent = function(user) {
       var groupId = user.group.value;
       var groupUl = document.getElementById("ulGroup" + groupId);
       var newline = '<li class="ui-state-default">' + user.name + '</li>';
       groupUl.innerHTML = groupUl.innerHTML + newline;

     }


}]);

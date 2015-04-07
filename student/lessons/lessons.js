'use strict';

angular.module('student.lessons', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lessons', {
    templateUrl: 'lessons/lessons.html',
    controller: 'LessonsCtrl'
  });
}])

.controller('LessonsCtrl', ['$scope', function($scope) {

	$scope.optionsAtelier = [
        { label: "Découverte de l'énergie", value: 1 }
    ];

    $scope.downloadAtelier = function(atelier) {
    	$scope.newAtelier = false;
    }

}]);

'use strict';

angular.module('teacher.lessons', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lessons', {
    templateUrl: 'lessons/lessons.html',
    controller: 'LessonsCtrl'
  });
}])

.controller('LessonsCtrl', ['$scope', function($scope) {
	var nbTab = 0;

	$scope.optionsAtelier = [
        { label: "Qu'est ce que l'électricité ?", value: 1 },
        { label: "Pourquoi économiser l'électricité ?", value: 2 },
        { label: "Comment économiser l'électricité ?", value: 3 },
        { label: "Préserver l'eau !", value: 4 },
        { label: "Pourquoi le tri sélectif ?", value: 5 },
        { label: "Qu'est ce que la biodiversité ?", value: 6 },
        { label: "Le climat", value: 7 },
    ];


    $scope.launch = function (atelier) {
    	$scope.newAtelier = false;
    	$scope.showBegin = false;
    	var atelierName = document.getElementById("atelierName");
    	atelierName.innerHTML = "Vous avez démarré l'atelier : "+ atelier.label;
    	var nbConnectedTab = document.getElementById("nbConnectedTab");
    	nbConnectedTab.innerHTML = "Nombre de Tablette connectée : "+ nbTab; 
    }
}]);

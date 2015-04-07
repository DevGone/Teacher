'use strict';

angular.module('teacher.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'events/events.html',
    controller: 'EventsCtrl'
  });
}])

.controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.activeEvent = null;
  getActiveEvent();


  // ---
  // PUBLIC METHODS.
  // ---

  function getActiveEvent() {

    var request = $http({
      method: 'get',
      url: 'https://devgone.herokuapp.com/events/',
      params: {},
      data: {}
    });

    request.then(function(data) {
      $scope.activeEvent = data.event;
      console.log(data);
    });
  }

  // ---
  // PRIVATE METHODS.
  // ---


  // I transform the error response, unwrapping the application dta from
  // the API response payload.
  function handleError( response ) {

      // The API response from the server should be returned in a
      // nomralized format. However, if the request was not handled by the
      // server (or what not handles properly - ex. server error), then we
      // may have to normalize it on our end, as best we can.
      if (
          ! angular.isObject( response.data ) ||
          ! response.data.message
          ) {

          return( $q.reject( "An unknown error occurred." ) );

      }

      // Otherwise, use expected error message.
      return( $q.reject( response.data.message ) );

  }


  // I transform the successful response, unwrapping the application data
  // from the API response payload.
  function handleSuccess( response ) {

      return( response.data );

  }

}]);




 // var request = $http({
 //                        method: "post",
 //                        url: "api/index.cfm",
 //                        params: {
 //                            action: "add"
 //                        },
 //                        data: {
 //                            name: name
 //                        }
 //                    });

 //                    return( request.then( handleSuccess, handleError ) );

'use strict';

angular.module('teacher.api', [])

.service('apiManager', function($http, $q) {

  // Return public API
  return ({
    getActiveEvent: getActiveEvent,
    setActiveEvent: setActiveEvent
  });

  // ---
  //  PUBLIC METHODS
  // ---

  function getActiveEvent() {

    var request = $http({
      method: 'get',
      url: 'http://localhost:3000/events/',
      params: {},
      data: {}
    });

    return( request.then( handleSuccess, handleError ) );
  }

  function setActiveEvent(eventId) {

    var request = $http({
      method: 'post',
      url: 'http://localhost:3000/events/',
      headers: { 'Content-Type': 'application/json' },
      params: {
        event: eventId
      },
      data: {}
    });

    return( request.then( handleSuccess, handleError ) );
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

});

(function () {

  'use strict';

  /*
  Formatting service for transforming complex and nested JSON objects to a more flat structure
  Available from app.core
  */

  angular
    .module('app.core')
    .factory('formatService', formatService);

  /* @ngInject */
  function formatService() {

    var service = {
      formatSeasonWinners: formatSeasonWinners,
      formatRacesBySeason: formatRacesBySeason
    };

    return service;

    ////////////////

    /*

    Map the complex JSON object to a simpler object, for easier data-binding in the frontend

    Expects: collection from public API
    Returns: formatted collection

    */


    function formatSeasonWinners (uglyArray) {

      return uglyArray.map(function (item) {

        var beautified = {};

        beautified.season = parseInt(item.season); // This is a type number
        beautified.round = parseInt(item.round); // This is a type number
        beautified.driverId = item.DriverStandings[0].Driver.driverId;
        beautified.fullName = [item.DriverStandings[0].Driver.givenName, item.DriverStandings[0].Driver.familyName].join(' ');
        beautified.nationality = item.DriverStandings[0].Driver.nationality;
        beautified.constructorName = item.DriverStandings[0].Constructors[0].name;

        return beautified;

      });

    }


    /*

    Map the complex JSON object to a simpler object, for easier data-binding in the frontend

    Expects: collection from public API, reference to a seasonal winner
    Returns: formatted collection

    */

    function formatRacesBySeason (uglyArray, winnerId) {

      return uglyArray.map(function (item) {

        var beautified = {};

        beautified.raceName = item.raceName;
        beautified.round = parseInt(item.round); // This is a type number

        beautified.circuitName = item.Circuit.circuitName;
        beautified.circuitLocation = [item.Circuit.Location.locality, item.Circuit.Location.country].join(', ');

        // Get the winner, which is the first item in the results array
        beautified.winner = [item.Results[0].Driver.givenName, item.Results[0].Driver.familyName].join(' ');
        beautified.isSeasonalWinner = (winnerId === item.Results[0].Driver.driverId);

        return beautified;

      });

    }

  }

})();

(function () {

  'use strict';

  /*
  Define the controller for the module
  */

  angular
    .module('app.home')
    .controller('home', home);

  /* @ngInject */
  function home($log, $uibModal, dataService, formatService) {

    // Bind this to a viewModel
    var vm = this;

    // Public methods:
    vm.getSeasonWinners = getSeasonWinners;
    vm.getRacesBySeason = getRacesBySeason;

    init();

    ///////////////

    function init () {
      // Start controller by getting the seasonal winners:
      getSeasonWinners ();
    }



    /*

    Retrieve season from 2005 through 2015 from the service

    Expects: nothing
    Returns: formatted collection

    */

    function getSeasonWinners () {

      $log.debug('getting season winners');

      // Make the call to the service:
      dataService.getSeasonWinners().then(function(response) {

        // Bind the beautified data to the viewModel:
        vm.seasonWinners = formatService.formatSeasonWinners(response.StandingsTable.StandingsLists);

      }, function error(msg) {

        // Log any error from the service
        $log.error(msg);

      });

    }


    /*

    Retrieve races of a defined season from the service

    Expects: year as integer/string and winnerId from season API
    Returns: formatted collection

    */

    function getRacesBySeason (seasonYear, winnerId) {

      vm.selectedSeason = seasonYear;

      $log.debug('getting Races from seasonYear '+ seasonYear);

      // Make the call to the service:
      dataService.getRacesBySeason(seasonYear).then(function(response) {

        // Bind the beautified data to the viewModel:
        vm.seasonRaces = formatService.formatRacesBySeason(response.RaceTable.Races, winnerId);

        // Open the modal and pass the variables seasonYear & seasonRaces to the modalController
        $uibModal.open({
          animation: true,
          templateUrl: '/modules/modals/racesPerSeason.html',
          controller: 'racesPerSeasonModalController',
          controllerAs: 'vm',
          size: 'lg',
          resolve: {
            seasonYear: function () { return seasonYear; },
            seasonRaces: function () { return vm.seasonRaces; }
          }
        });

      }, function error(msg) {

        // Log any error from the service
        $log.error(msg);

      });


    }



  }

})();

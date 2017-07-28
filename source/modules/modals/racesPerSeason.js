(function () {

  'use strict';

  /*
  Modal for displaying races per defined season
  Available from app.core
  */

  angular
    .module('app.core')
    .controller('racesPerSeasonModalController', racesPerSeasonModalController);

  /* @ngInject */
  function racesPerSeasonModalController($uibModalInstance, seasonYear, seasonRaces) {

    // Bind this to a viewModel
    var vm = this;

    // SeasonYear & Races get passed when calling the modal from the parent controller
    vm.seasonYear = seasonYear;
    vm.seasonRaces = seasonRaces;

    vm.close = close;

    ///////////////

    function close () {
      $uibModalInstance.close();
    }


  }

})();

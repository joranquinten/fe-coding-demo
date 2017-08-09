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

    vm.orderBy = orderBy;
    vm.getFilter = getFilter;

    vm.close = close;

    
    // Set initial sort and empty filter:
    vm.sort = {
      field: 'round',
      reverse: false
    };
    vm.filter = {};

    ///////////////
    

    /*

    Set ordering of the date by columns

    Expects: fieldName
    Returns: updated sortModel

    */

    function orderBy(field) {
      vm.sort.field = field;
      vm.sort.reverse = !vm.sort.reverse;
    }
    
    /*

    Returns the current filter for the view

    Expects: Nothing
    Returns: updated filter

    */

    function getFilter() {
      return vm.filter;
    }

    function close () {
      $uibModalInstance.close();
    }


  }

})();

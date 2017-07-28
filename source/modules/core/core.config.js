(function () {

  'use strict';

  /*
  Define the app default configuration
  */

  angular
    .module('app.core')
    .config(setConfiguration);

  /* @ngInject */
  function setConfiguration($urlRouterProvider, appConfig) {

    setRoutingConfig();

    ////////////////

    /*

    Set the default state to the configured default state

    */

    function setRoutingConfig() {
      $urlRouterProvider.otherwise(appConfig.DEFAULT_PAGE);
    }

  }

})();

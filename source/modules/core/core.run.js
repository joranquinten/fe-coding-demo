(function () {

  'use strict';

  /*
  Register the methods for initializng the app.
  */

  angular
    .module('app.core')
    .run(setRun);

  /* @ngInject */
  function setRun($window, appConfig) {

    setAppProperties();

    ///////////

    /*
    Sets the title of the app
    */

    function setAppProperties() {
      $window.document.title = appConfig.APP_NAME;
    }
  }

})();

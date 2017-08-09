(function () {

  'use strict';

  /*
  Register vendor components to the core
  */

  angular
    .module('app.core', [

      'app.sortIndicator',

      'ui.router',
      'angular-loading-bar',
      'ui.bootstrap'

  ]);


})();
